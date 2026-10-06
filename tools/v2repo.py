#!/usr/bin/env python3
"""Minimal deterministic V2.1 repository generator/health checker.

Standard library only. Reads canonical Markdown objects and generates views.
It does not perform research inference.
"""

from __future__ import annotations
import argparse
import difflib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GEN_HEADER = "DO NOT EDIT - GENERATED FROM CANONICAL OBJECTS\n\n"

OBJECT_PATTERNS = {
    "source": ["01-evidence/*/*/README.md"],
    "claim": ["02-claims/CLM-*.md"],
    "actor": ["03-actors/*/*/README.md"],
    "capability": ["04-capabilities/CAP-*.md"],
    "direction": ["05-directions/DIR-*/README.md"],
    "experiment": ["06-validation/DIR-*/EXP-*/README.md"],
    "decision": ["07-decisions/events/DEC-*.md"],
    "priority": ["07-decisions/priorities/PRI-*.md"],
    "synthesis": ["07-decisions/syntheses/SYN-*.md"],
}

REF_FIELDS = {
    "supporting_sources": "source",
    "contradicting_sources": "source",
    "evidence_claims": "claim",
    "related_claims": "claim",
    "candidate_capabilities": "capability",
    "key_people": "actor",
    "trigger_claims": "claim",
    "trigger_experiments": "experiment",
    "target_actors": "actor",
    "related_directions": "direction",
    "supporting_claims": "claim",
    "supporting_directions": "direction",
    "supporting_priorities": "priority",
    "key_evidence": "source",
}

def files_for(kind: str):
    out = []
    for pat in OBJECT_PATTERNS[kind]:
        out.extend(ROOT.glob(pat))
    return sorted(out)

def object_id(path: Path) -> str:
    if path.name == "README.md":
        return path.parent.name
    return path.stem

def parse(path: Path):
    text = path.read_text(encoding="utf-8")
    obj = {"id": object_id(path), "_path": path.relative_to(ROOT).as_posix(), "_text": text}
    lines = text.splitlines()
    i = 0
    while i < len(lines):
        m = re.match(r"^([A-Za-z][A-Za-z0-9_ /-]*):\s*(.*)$", lines[i])
        if not m:
            i += 1
            continue
        key = m.group(1).strip().lower().replace(" ", "_").replace("/", "_").replace("-", "_")
        value = m.group(2).strip()
        if value:
            obj[key] = value
            i += 1
            continue
        vals = []
        j = i + 1
        while j < len(lines):
            if re.match(r"^[A-Za-z][A-Za-z0-9_ /-]*:\s*", lines[j]):
                break
            lm = re.match(r"^-\s+(.+)$", lines[j])
            if lm:
                vals.append(lm.group(1).strip())
            elif lines[j].strip() and not lines[j].startswith("#"):
                vals.append(lines[j].strip())
            j += 1
        obj[key] = vals if len(vals) != 1 else vals[0]
        i = j
    return obj

def load_all():
    return {k: [parse(p) for p in files_for(k)] for k in OBJECT_PATTERNS}

def as_list(v):
    if v is None:
        return []
    return v if isinstance(v, list) else [v]

def validate(db):
    errors = []
    ids = {}
    objects_by_id = {}
    for kind, objs in db.items():
        for o in objs:
            if o["id"] in ids:
                errors.append(f"duplicate id: {o['id']}")
            ids[o["id"]] = kind
            objects_by_id[o["id"]] = o

    source_keys = {}
    for o in db["source"]:
        key = o.get("source_key")
        if not key:
            continue
        if key in source_keys:
            errors.append(f"duplicate source_key: {key} -> {source_keys[key]}, {o['id']}")
        else:
            source_keys[key] = o["id"]

    for kind, objs in db.items():
        for o in objs:
            for field, expected in REF_FIELDS.items():
                if field not in o:
                    continue
                for ref in as_list(o[field]):
                    if ref in ("[]", "null"):
                        continue
                    if ref not in ids:
                        errors.append(f"{o['id']}: unresolved {field} -> {ref}")
                    elif ids[ref] != expected:
                        errors.append(f"{o['id']}: {field} -> {ref} is {ids[ref]}, expected {expected}")

    for o in db["actor"]:
        p = o.get("parent_actor_id")
        if p and p != "null" and p not in ids:
            errors.append(f"{o['id']}: unresolved parent_actor_id -> {p}")

    for o in db["capability"]:
        a = o.get("actor_id")
        if a and a not in ids:
            errors.append(f"{o['id']}: unresolved actor_id -> {a}")
        elif a and ids.get(a) != "actor":
            errors.append(f"{o['id']}: actor_id -> {a} is not an actor")
        for person_id in as_list(o.get("key_people")):
            if person_id in ("[]", "null"):
                continue
            person = objects_by_id.get(person_id)
            if not person:
                errors.append(f"{o['id']}: unresolved key_people -> {person_id}")
            elif person.get("actor_type") != "PERSON":
                errors.append(f"{o['id']}: key_people -> {person_id} is not PERSON")

    priority_ranks = {}
    for o in db["priority"]:
        rank = o.get("priority_rank")
        if not rank or not re.match(r"^P[1-9][0-9]*$", str(rank)):
            errors.append(f"{o['id']}: invalid priority_rank -> {rank}")
        elif rank in priority_ranks:
            errors.append(f"duplicate priority_rank: {rank} -> {priority_ranks[rank]}, {o['id']}")
        else:
            priority_ranks[rank] = o["id"]
        for actor_id in as_list(o.get("target_actors")):
            actor = objects_by_id.get(actor_id)
            if actor and actor.get("actor_type") == "PERSON":
                errors.append(f"{o['id']}: target_actors -> {actor_id} is PERSON; priority packages must target organization/lab/company actors")

    for o in db["decision"]:
        subject = o.get("subject")
        if subject and re.match(r"^(DIR|CAP|CLM|EXP|ACT|PERSON)-", subject) and subject not in ids:
            errors.append(f"{o['id']}: unresolved structured subject -> {subject}")

    for o in db["experiment"]:
        d = o.get("direction_id")
        if d and d not in ids:
            errors.append(f"{o['id']}: unresolved direction_id -> {d}")

    return errors

def write(path: str, body: str, check: bool, stale):
    p = ROOT / path
    content = GEN_HEADER + body.rstrip() + "\n"
    if check:
        actual = p.read_text(encoding="utf-8") if p.exists() else ""
        if actual != content:
            stale.append(path)
            diff = difflib.unified_diff(
                actual.splitlines(),
                content.splitlines(),
                fromfile=f"actual/{path}",
                tofile=f"expected/{path}",
                lineterm=""
            )
            for line in diff:
                print(line)
        return
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")

def field(o, key, default="-"):
    v = o.get(key, default)
    if isinstance(v, list):
        return ", ".join(v)
    return str(v)

def generate(db, check=False):
    stale = []

    sources = "\n".join(f"- {o['id']} — {o['_path']}" for o in db["source"])
    write("01-evidence/index.md", "# Evidence Index\n\n" + sources, check, stale)

    actors = "\n".join(
        f"- {o['id']} | {field(o,'actor_type')} | parent={field(o,'parent_actor_id')} | country={field(o,'country')}"
        for o in db["actor"]
    )
    caps = "\n".join(
        f"- {o['id']} | actor={field(o,'actor_id')} | key_people={field(o,'key_people')} | maturity={field(o,'maturity')} | evidence={field(o,'evidence_confidence')} | fit={field(o,'target_fit')}"
        for o in db["capability"]
    )
    write("03-actors/index.md", "# Actor / Capability Index\n\n## Actors\n" + actors + "\n\n## Capabilities\n" + caps, check, stale)

    portfolio = []
    for o in db["direction"]:
        portfolio.append(
            f"| {o['id']} | {field(o,'role')} | {field(o,'investment_lane')} | "
            f"{field(o,'differentiation_confidence')} | {field(o,'phone_transfer_maturity')} |"
        )
    body = "# Direction Portfolio\n\n| Direction | Role | Lane | Differentiation | Phone maturity |\n|---|---|---|---|---|\n" + "\n".join(portfolio)
    write("05-directions/portfolio.md", body, check, stale)

    killed = []
    for o in db["decision"]:
        if field(o, "event_type") in ("KILL", "DOWNGRADE"):
            killed.append(f"- {o['id']} — {field(o,'subject')} -> {field(o,'new_state')}")
    write("07-decisions/kill-ledger.md", "# Kill / Downgrade Ledger\n\n" + ("\n".join(killed) or "- none"), check, stale)

    status = parse(ROOT / "00-project/STATUS.md")
    direction_lines = []
    for o in db["direction"]:
        residual = field(o, "residual_differentiation", field(o, "strategic_use", "-"))
        baseline = field(o, "strongest_baseline", "-")
        next_q = field(o, "next_question", field(o, "promotion_gate", "-"))
        direction_lines.append(
            f"### {o['id']}\n"
            f"- lane: {field(o,'investment_lane')}\n"
            f"- phone_maturity: {field(o,'phone_transfer_maturity')}\n"
            f"- residual_or_use: {residual}\n"
            f"- strongest_baseline: {baseline}\n"
            f"- next_question_or_gate: {next_q}"
        )
    body = (
        "# Restart Snapshot\n\n"
        f"- authority: {field(status,'authority')}\n"
        f"- mode: {field(status,'research_mode')}\n"
        f"- phase: {field(status,'current_phase')}\n"
        f"- next: {field(status,'next_action')}\n\n"
        "## Directions\n\n" +
        "\n\n".join(direction_lines) +
        "\n\n## Mandatory guardrails\n"
        "- Broad Russia superiority claims remain killed unless explicitly reopened by a Decision Event.\n"
        "- Evidence confidence and phone/product maturity are separate.\n"
        "- Read 07-decisions/kill-ledger.md before reopening a killed thesis.\n"
        "- Historical V1 round files are provenance, not required current truth."
    )
    write("00-project/restart-snapshot.md", body, check, stale)

    active_rows = []
    watch_rows = []
    for d in db["direction"]:
        caps_ids = as_list(d.get("candidate_capabilities"))
        caps_for_direction = [c for c in db["capability"] if c["id"] in caps_ids]
        actor_ids = []
        people_ids = []
        capability_ids = []
        for cap in caps_for_direction:
            capability_ids.append(cap["id"])
            actor_id = cap.get("actor_id")
            if actor_id and actor_id not in actor_ids:
                actor_ids.append(actor_id)
            for person_id in as_list(cap.get("key_people")):
                if person_id not in ("[]", "null") and person_id not in people_ids:
                    people_ids.append(person_id)
        row = (
            f"| {d['id']} | {', '.join(actor_ids) if actor_ids else '-'} | {', '.join(people_ids) if people_ids else '-'} | {', '.join(capability_ids) if capability_ids else '-'} | "
            f"{field(d,'differentiation_confidence')} | {field(d,'phone_transfer_maturity')} | {field(d,'investment_lane')} |"
        )
        if field(d, "investment_lane") in ("WATCH", "HOLD"):
            watch_rows.append(row)
        else:
            active_rows.append(row)
    header = (
        "| Direction | Institution/Lab | Key people | Capability | Differentiation confidence | Phone maturity | Lane |\n"
        "|---|---|---|---|---|---|---|\n"
    )
    body = (
        "# Phase-1 Management Table\n\n"
        "## Active / Strategic / Reserve\n\n" + header + "\n".join(active_rows) +
        "\n\n## Watch / Hold\n\n" + header + ("\n".join(watch_rows) if watch_rows else "| - | - | - | - | - | - | - |")
    )
    write("views/russia-vs-china/phase1-management.md", body, check, stale)

    registry_lines = []
    for kind in ("source", "claim", "actor", "capability", "direction", "experiment", "decision", "priority", "synthesis"):
        registry_lines.append(f"## {kind.upper()}")
        registry_lines.append("")
        registry_lines.extend(f"- {o['id']} — {o['_path']}" for o in db[kind])
        registry_lines.append("")
    write("00-project/id-registry.md", "# V2.1 ID Registry\n\n" + "\n".join(registry_lines), check, stale)

    origin_parts = ["# Migration Origin Index", ""]
    for receipt in sorted((ROOT / "history/migrations/receipts").glob("MIG-*.md")):
        txt = receipt.read_text(encoding="utf-8")
        title = next((ln[2:].strip() for ln in txt.splitlines() if ln.startswith("# ")), receipt.stem)
        legacy_match = re.search(r"Legacy authority inputs include:\s*\n((?:- .*\n)+)", txt)
        ids_match = re.search(r"^## Explicit V2 object IDs\s*$\n(.*?)(?=^## |\Z)", txt, re.M | re.S)
        origin_parts.extend([f"## {title}", "", f"- receipt: {receipt.relative_to(ROOT).as_posix()}"])
        if legacy_match:
            origin_parts.append("- V1 inputs:")
            origin_parts.extend("  " + ln for ln in legacy_match.group(1).strip().splitlines())
        if ids_match:
            ids = re.findall(r"^- ([A-Z][A-Z0-9_-]+)\s*$", ids_match.group(1), re.M)
            if ids:
                origin_parts.append("- V2 IDs: " + ", ".join(ids))
        origin_parts.append("")
    write("history/migrations/origin-index.md", "\n".join(origin_parts), check, stale)

    return stale

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="fail if generated files are stale")
    args = ap.parse_args()

    db = load_all()
    errors = validate(db)
    if errors:
        print("HEALTH CHECK FAILED")
        for e in errors:
            print("ERROR:", e)
        raise SystemExit(2)

    stale = generate(db, check=args.check)
    if stale:
        print("STALE GENERATED FILES")
        for p in stale:
            print("STALE:", p)
        raise SystemExit(3)

    print("HEALTH CHECK PASS")
    print("objects:", {k: len(v) for k, v in db.items()})
    if not args.check:
        print("generated views refreshed")

if __name__ == "__main__":
    main()
