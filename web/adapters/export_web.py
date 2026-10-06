#!/usr/bin/env python3
"""Export canonical Russia-Thermal objects into normalized web datasets.

Standard-library only.
Reuses tools/v2repo.py as the canonical parser/validator.

This module performs normalization only. It must not introduce strategic inference.
"""

from __future__ import annotations

import argparse
import importlib.util
import json
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[2]
V2REPO_PATH = ROOT / "tools" / "v2repo.py"
DEFAULT_OUT = ROOT / "web" / "data" / "generated"
SCHEMA_VERSION = "1.0"


def load_v2repo():
    spec = importlib.util.spec_from_file_location("v2repo_shared", V2REPO_PATH)
    if spec is None or spec.loader is None:
        raise RuntimeError("cannot load tools/v2repo.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def as_list(v: Any) -> list[str]:
    if v is None:
        return []
    if isinstance(v, list):
        return [str(x).strip() for x in v if str(x).strip()]
    s = str(v).strip()
    if not s or s in {"[]", "null", "-"}:
        return []
    return [s]


def split_semicolon(v: Any) -> list[str]:
    vals = as_list(v)
    out: list[str] = []
    for item in vals:
        parts = [p.strip() for p in re.split(r";\s*", item) if p.strip()]
        out.extend(parts)
    return out


def nullable(v: Any) -> str | None:
    if v is None:
        return None
    if isinstance(v, list):
        s = " ".join(str(x).strip() for x in v if str(x).strip())
    else:
        s = str(v).strip()
    return None if not s or s in {"-", "null", "[]"} else s


def first_heading(text: str) -> str | None:
    for line in text.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return None


def source_url(o: dict[str, Any]) -> str:
    direct = nullable(o.get("primary_url"))
    if direct:
        return direct
    key = nullable(o.get("source_key"))
    if key:
        if key.startswith("URL:"):
            return key[4:].strip()
        if key.startswith("DOI:"):
            return "https://doi.org/" + key[4:].strip()
    return ""


def source_title(o: dict[str, Any]) -> str:
    for key in ("title", "source", "canonical_name"):
        v = nullable(o.get(key))
        if v:
            return v
    heading = first_heading(o.get("_text", ""))
    return heading or o["id"]


def year_value(v: Any) -> int | None:
    if v is None:
        return None
    m = re.search(r"\b(19|20)\d{2}\b", str(v))
    return int(m.group(0)) if m else None


def findings(o: dict[str, Any]) -> list[str]:
    for key in (
        "direct_reported_results",
        "direct_facts",
        "direct_fact",
        "direct_reported_purpose_result",
        "direct_reported_purpose_results",
    ):
        vals = as_list(o.get(key))
        if vals:
            return vals
    return []


def actor_record(o: dict[str, Any]) -> dict[str, Any]:
    parent = nullable(o.get("parent_actor_id"))
    if parent == "null":
        parent = None
    return {
        "id": o["id"],
        "type": nullable(o.get("actor_type")) or "",
        "name": nullable(o.get("canonical_name")) or o["id"],
        "country": nullable(o.get("country")) or "",
        "parentId": parent,
        "currentRole": nullable(o.get("current_public_role") or o.get("current_role")),
        "officialUrl": nullable(o.get("official_url")),
        "publicContact": nullable(o.get("public_contact")),
        "researchRelevance": nullable(o.get("research_relevance")),
        "sourcePath": o["_path"],
    }


def evidence_record(o: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": o["id"],
        "sourceType": nullable(o.get("source_type")) or "",
        "title": source_title(o),
        "primaryUrl": source_url(o),
        "year": year_value(o.get("published_year") or o.get("verified_at")),
        "authors": split_semicolon(o.get("authors")),
        "venue": nullable(o.get("journal") or o.get("venue")),
        "countryContext": nullable(o.get("country_context")),
        "directFindings": findings(o),
        "boundary": nullable(o.get("boundary")),
        "sourcePath": o["_path"],
    }


def claim_record(o: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": o["id"],
        "proposition": nullable(o.get("proposition")) or "",
        "status": nullable(o.get("status")) or "",
        "confidence": nullable(o.get("confidence")) or "",
        "supportingSourceIds": as_list(o.get("supporting_sources")),
        "contradictingSourceIds": as_list(o.get("contradicting_sources")),
        "boundary": nullable(o.get("boundary")),
        "sourcePath": o["_path"],
    }


def capability_record(o: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": o["id"],
        "actorId": nullable(o.get("actor_id")) or "",
        "statement": nullable(o.get("capability_statement")) or "",
        "maturity": nullable(o.get("maturity")) or "",
        "evidenceConfidence": nullable(o.get("evidence_confidence")) or "",
        "targetFit": nullable(o.get("target_fit")) or "",
        "keyPeopleIds": as_list(o.get("key_people")),
        "claimIds": as_list(o.get("evidence_claims")),
        "technicalScope": as_list(o.get("technical_scope")),
        "transferBoundary": nullable(o.get("transfer_boundary")),
        "strategicUse": nullable(o.get("strategic_use")),
        "sourcePath": o["_path"],
    }


def direction_record(o: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": o["id"],
        "role": nullable(o.get("role")) or "",
        "investmentLane": nullable(o.get("investment_lane")) or "",
        "differentiationConfidence": nullable(o.get("differentiation_confidence")) or "",
        "phoneTransferMaturity": nullable(o.get("phone_transfer_maturity")) or "",
        "capabilityIds": as_list(o.get("candidate_capabilities")),
        "claimIds": as_list(o.get("related_claims")),
        "strongestBaseline": nullable(o.get("strongest_baseline")),
        "residualDifferentiation": nullable(o.get("residual_differentiation")),
        "promotionGate": nullable(o.get("promotion_gate")),
        "killGate": nullable(o.get("kill_downgrade_gate") or o.get("kill_gate")),
        "sourcePath": o["_path"],
    }


def decision_record(o: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": o["id"],
        "eventType": nullable(o.get("event_type")) or "",
        "subjectId": nullable(o.get("subject")) or "",
        "newState": nullable(o.get("new_state")) or "",
        "triggerClaimIds": as_list(o.get("trigger_claims")),
        "triggerExperimentIds": as_list(o.get("trigger_experiments")),
        "rationale": nullable(o.get("rationale")),
        "sourcePath": o["_path"],
    }



def priority_record(o: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": o["id"],
        "rank": nullable(o.get("priority_rank")) or "",
        "priorityClass": nullable(o.get("priority_class")) or "",
        "targetActorIds": as_list(o.get("target_actors")),
        "relatedDirectionIds": as_list(o.get("related_directions")),
        "collaborationReadiness": nullable(o.get("collaboration_readiness")),
        "recommendedAction": nullable(o.get("recommended_action")),
        "rationale": nullable(o.get("rationale")),
        "sourcePath": o["_path"],
    }

def envelope(records: list[dict[str, Any]]) -> dict[str, Any]:
    return {
        "schemaVersion": SCHEMA_VERSION,
        "generatedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        "records": records,
    }


def require_nonempty(record: dict[str, Any], field: str, errors: list[str]):
    v = record.get(field)
    if not isinstance(v, str) or not v.strip():
        errors.append(f"{record.get('id','?')}: required field {field} is empty")


def validate_normalized(datasets: dict[str, list[dict[str, Any]]]) -> list[str]:
    errors: list[str] = []

    for r in datasets["actors"]:
        for f in ("id", "type", "name", "country", "sourcePath"):
            require_nonempty(r, f, errors)
        if r["type"] not in {"ORGANIZATION", "LAB", "PERSON", "COMPANY"}:
            errors.append(f"{r['id']}: invalid actor type {r['type']}")

    for r in datasets["evidence"]:
        for f in ("id", "sourceType", "title", "primaryUrl", "sourcePath"):
            require_nonempty(r, f, errors)

    for r in datasets["claims"]:
        for f in ("id", "proposition", "status", "confidence", "sourcePath"):
            require_nonempty(r, f, errors)

    for r in datasets["capabilities"]:
        for f in ("id", "actorId", "statement", "maturity", "evidenceConfidence", "targetFit", "sourcePath"):
            require_nonempty(r, f, errors)

    for r in datasets["directions"]:
        for f in ("id", "role", "investmentLane", "differentiationConfidence", "phoneTransferMaturity", "sourcePath"):
            require_nonempty(r, f, errors)

    for r in datasets["decisions"]:
        for f in ("id", "eventType", "subjectId", "newState", "sourcePath"):
            require_nonempty(r, f, errors)

    for r in datasets["priorities"]:
        for f in ("id", "rank", "priorityClass", "sourcePath"):
            require_nonempty(r, f, errors)
        if not r["targetActorIds"]:
            errors.append(f"{r['id']}: targetActorIds is empty")
        if not r["relatedDirectionIds"]:
            errors.append(f"{r['id']}: relatedDirectionIds is empty")

    actor_ids = {r["id"] for r in datasets["actors"]}
    evidence_ids = {r["id"] for r in datasets["evidence"]}
    claim_ids = {r["id"] for r in datasets["claims"]}
    capability_ids = {r["id"] for r in datasets["capabilities"]}
    direction_ids = {r["id"] for r in datasets["directions"]}

    for r in datasets["actors"]:
        if r["parentId"] and r["parentId"] not in actor_ids:
            errors.append(f"{r['id']}: unresolved parentId {r['parentId']}")

    for r in datasets["claims"]:
        for sid in r["supportingSourceIds"] + r["contradictingSourceIds"]:
            if sid not in evidence_ids:
                errors.append(f"{r['id']}: unresolved evidence ref {sid}")

    for r in datasets["capabilities"]:
        if r["actorId"] not in actor_ids:
            errors.append(f"{r['id']}: unresolved actorId {r['actorId']}")
        for pid in r["keyPeopleIds"]:
            if pid not in actor_ids:
                errors.append(f"{r['id']}: unresolved keyPeopleId {pid}")
        for cid in r["claimIds"]:
            if cid not in claim_ids:
                errors.append(f"{r['id']}: unresolved claimId {cid}")

    for r in datasets["directions"]:
        for cid in r["capabilityIds"]:
            if cid not in capability_ids:
                errors.append(f"{r['id']}: unresolved capabilityId {cid}")
        for cid in r["claimIds"]:
            if cid not in claim_ids:
                errors.append(f"{r['id']}: unresolved claimId {cid}")

    for r in datasets["priorities"]:
        for aid in r["targetActorIds"]:
            if aid not in actor_ids:
                errors.append(f"{r['id']}: unresolved targetActorId {aid}")
        for did in r["relatedDirectionIds"]:
            if did not in direction_ids:
                errors.append(f"{r['id']}: unresolved relatedDirectionId {did}")

    return errors


def build_datasets() -> dict[str, list[dict[str, Any]]]:
    v2repo = load_v2repo()
    db = v2repo.load_all()
    canonical_errors = v2repo.validate(db)
    if canonical_errors:
        raise RuntimeError("canonical validation failed:\n" + "\n".join(canonical_errors))

    return {
        "actors": [actor_record(o) for o in db["actor"]],
        "evidence": [evidence_record(o) for o in db["source"]],
        "claims": [claim_record(o) for o in db["claim"]],
        "capabilities": [capability_record(o) for o in db["capability"]],
        "directions": [direction_record(o) for o in db["direction"]],
        "decisions": [decision_record(o) for o in db["decision"]],
        "priorities": [priority_record(o) for o in db["priority"]],
    }


def canonical_json(obj: Any) -> str:
    return json.dumps(obj, ensure_ascii=False, indent=2, sort_keys=True) + "\n"


def expected_files(datasets: dict[str, list[dict[str, Any]]]) -> dict[str, str]:
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    files: dict[str, str] = {}
    for name, records in datasets.items():
        files[f"{name}.json"] = canonical_json({
            "schemaVersion": SCHEMA_VERSION,
            "generatedAt": now,
            "records": records,
        })

    files["manifest.json"] = canonical_json({
        "schemaVersion": SCHEMA_VERSION,
        "generatedAt": now,
        "datasets": {
            name: {
                "file": f"{name}.json",
                "count": len(records),
            }
            for name, records in datasets.items()
        },
    })
    return files


def write_outputs(out_dir: Path, files: dict[str, str]):
    out_dir.mkdir(parents=True, exist_ok=True)
    for name, content in files.items():
        (out_dir / name).write_text(content, encoding="utf-8")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", type=Path, default=DEFAULT_OUT)
    ap.add_argument("--validate-only", action="store_true")
    args = ap.parse_args()

    datasets = build_datasets()
    errors = validate_normalized(datasets)
    if errors:
        print("WEB EXPORT VALIDATION FAILED")
        for e in errors:
            print("ERROR:", e)
        raise SystemExit(2)

    print("WEB EXPORT VALIDATION PASS")
    print("records:", {k: len(v) for k, v in datasets.items()})

    if args.validate_only:
        return

    files = expected_files(datasets)
    write_outputs(args.out, files)
    print("written:", args.out)


if __name__ == "__main__":
    main()
