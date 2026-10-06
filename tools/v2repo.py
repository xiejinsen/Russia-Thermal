#!/usr/bin/env python3
"""Minimal deterministic V2.1 repository generator/health checker.

Standard library only. Reads canonical Markdown objects and generates views.
It does not perform research inference.
"""

from __future__ import annotations
import argparse
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
    for kind, objs in db.items():
        for o in objs:
            if o["id"] in ids:
                errors.append(f"duplicate id: {o['id']}")
            ids[o["id"]] = kind

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

    for o in db["experiment"]:
        d = o.get("direction_id")
        if d and d not in ids:
            errors.append(f"{o['id']}: unresolved direction_id -> {d}")

    return errors

def write(path: str, body: str, check: bool, stale):
    p = ROOT / path
    content = GEN_HEADER + body.rstrip() + "\n"
    if check:
        if not p.exists() or p.read_text(encoding="utf-8") != content:
            stale.append(path)
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
    body = (
        "# Restart Snapshot\n\n"
        f"- authority: {field(status,'authority')}\n"
        f"- mode: {field(status,'research_mode')}\n"
        f"- phase: {field(status,'current_phase')}\n"
        f"- next: {field(status,'next_action')}\n\n"
        "## Directions\n" +
        "\n".join(f"- {o['id']}: {field(o,'investment_lane')} / phone={field(o,'phone_transfer_maturity')}" for o in db["direction"])
    )
    write("00-project/restart-snapshot.md", body, check, stale)

    rows = []
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
        rows.append(
            f"| {d['id']} | {', '.join(actor_ids) if actor_ids else '-'} | {', '.join(people_ids) if people_ids else '-'} | {', '.join(capability_ids) if capability_ids else '-'} | "
            f"{field(d,'differentiation_confidence')} | {field(d,'phone_transfer_maturity')} | {field(d,'investment_lane')} |"
        )
    body = (
        "# Phase-1 Management Table\n\n"
        "| Direction | Institution/Lab | Key people | Capability | Differentiation confidence | Phone maturity | Lane |\n"
        "|---|---|---|---|---|---|---|\n" + "\n".join(rows)
    )
    write("views/russia-vs-china/phase1-management.md", body, check, stale)

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
