#!/usr/bin/env python3
"""Export canonical Russia-Thermal objects into normalized web datasets.

Standard-library only.
Reuses tools/v2repo.py as the canonical parser/validator.

This module performs normalization only. It must not introduce strategic inference.
Synthesis export is a thin presentation contract over canonical strategic state.
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
VISIBILITY_DIR = ROOT / "00-project" / "visibility-dispositions"
DEEP_READ_ROOTS = [ROOT / "01-evidence" / "papers", ROOT / "01-evidence" / "patents"]


def markdown_role_map(path: Path) -> dict[str, str]:
    """Read a two-column role mapping from the project's markdown disposition tables."""
    out: dict[str, str] = {}
    if not path.exists():
        return out
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line.startswith("|"):
            continue
        cells = [cell.strip() for cell in line.strip("|").split("|")]
        if len(cells) < 2:
            continue
        key, role = cells[0], cells[1]
        if key in {"Source", "Claim", "Capability"} or not role:
            continue
        if set(key) <= {"-", ":", " "}:
            continue
        if re.match(r"^(?:OFFICIAL|PAPER|PATENT|CLM|CAP)-", key):
            out[key] = role
    return out


def load_visibility_dispositions() -> dict[str, dict[str, str]]:
    return {
        "sources": markdown_role_map(VISIBILITY_DIR / "sources.md"),
        "claims": markdown_role_map(VISIBILITY_DIR / "claims.md"),
        "capabilities": markdown_role_map(VISIBILITY_DIR / "capabilities.md"),
    }


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


def float_value(v: Any) -> float | None:
    if v is None:
        return None
    try:
        return float(str(v).strip())
    except (TypeError, ValueError):
        return None


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


def deep_read_metadata(text: str) -> dict[str, str]:
    out: dict[str, str] = {}
    for raw in text.splitlines():
        line = raw.strip()
        if line.startswith("## "):
            break
        m = re.match(r"^([a-z][a-z0-9_]*):\s*(.*)$", line)
        if m:
            out[m.group(1)] = m.group(2).strip()
    return out


def markdown_section(text: str, heading: str) -> str:
    pattern = re.compile(
        rf"^##\s+{re.escape(heading)}\s*$\n(.*?)(?=^##\s+|\Z)",
        re.MULTILINE | re.DOTALL,
    )
    m = pattern.search(text)
    return m.group(1).strip() if m else ""


def deep_read_questions(text: str) -> list[dict[str, Any]]:
    matches = list(re.finditer(r"^##\s+Q(\d+)\s+—\s+(.+?)\s*$", text, re.MULTILINE))
    out: list[dict[str, Any]] = []
    for index, match in enumerate(matches):
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        tail = text[start:end]
        boundary = re.search(r"^##\s+Evidence boundary\s*$", tail, re.MULTILINE)
        if boundary:
            tail = tail[: boundary.start()]
        out.append({
            "number": int(match.group(1)),
            "title": match.group(2).strip(),
            "body": tail.strip(),
        })
    return out


def deep_read_boundary(text: str) -> dict[str, str]:
    block = markdown_section(text, "Evidence boundary")
    if not block:
        return {"sourceFacts": "", "analystInference": "", "unknownRequests": ""}

    sections: dict[str, str] = {}
    matches = list(re.finditer(r"^###\s+(.+?)\s*$", block, re.MULTILINE))
    for index, match in enumerate(matches):
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(block)
        sections[match.group(1).strip().lower()] = block[start:end].strip()

    return {
        "sourceFacts": sections.get("source facts", ""),
        "analystInference": sections.get("analyst inference", ""),
        "unknownRequests": sections.get("unknown / request", ""),
    }


def load_deep_reads() -> list[dict[str, Any]]:
    records: list[dict[str, Any]] = []

    paths: list[Path] = []
    for root in DEEP_READ_ROOTS:
        if root.exists():
            paths.extend(root.glob("*/deep-read.md"))

    for path in sorted(paths):
        text = path.read_text(encoding="utf-8")
        meta = deep_read_metadata(text)
        source_id = (meta.get("paper_id") or meta.get("patent_id") or "").strip()
        records.append({
            "id": source_id,
            "deepReadLevel": meta.get("deep_read_level", "").strip(),
            "reviewStatus": meta.get("review_status", "").strip(),
            "reviewedAt": meta.get("reviewed_at", "").strip(),
            "whyItMatters": meta.get("why_it_matters", "").strip(),
            "decisionUse": meta.get("decision_use", "").strip(),
            "legacyOrigin": meta.get("legacy_origin", "").strip() or None,
            "relatedClaimIds": split_semicolon(meta.get("related_claims")),
            "relatedCapabilityIds": split_semicolon(meta.get("related_capabilities")),
            "relatedDirectionIds": split_semicolon(meta.get("related_directions")),
            "relatedPriorityIds": split_semicolon(meta.get("related_priorities")),
            "questions": deep_read_questions(text),
            "evidenceBoundary": deep_read_boundary(text),
            "sourcePath": str(path.relative_to(ROOT)).replace("\\", "/"),
        })
    return records


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
        "city": nullable(o.get("city")),
        "region": nullable(o.get("region")),
        "latitude": float_value(o.get("latitude")),
        "longitude": float_value(o.get("longitude")),
        "locationVerifiedAt": nullable(o.get("location_verified_at")),
        "sourcePath": o["_path"],
    }


def evidence_record(o: dict[str, Any], usage_role: str | None = None) -> dict[str, Any]:
    return {
        "id": o["id"],
        "sourceType": nullable(o.get("source_type")) or "",
        "title": source_title(o),
        "primaryUrl": source_url(o),
        "year": year_value(o.get("published_year") or o.get("verified_at")),
        "authors": split_semicolon(o.get("authors") or o.get("author")),
        "venue": nullable(o.get("journal") or o.get("venue")),
        "countryContext": nullable(o.get("country_context")),
        "directFindings": findings(o),
        "boundary": nullable(o.get("boundary")),
        "usageRole": usage_role,
        "sourcePath": o["_path"],
    }


def claim_record(o: dict[str, Any], decision_role: str | None = None) -> dict[str, Any]:
    return {
        "id": o["id"],
        "proposition": nullable(o.get("proposition")) or "",
        "status": nullable(o.get("status")) or "",
        "confidence": nullable(o.get("confidence")) or "",
        "supportingSourceIds": as_list(o.get("supporting_sources")),
        "contradictingSourceIds": as_list(o.get("contradicting_sources")),
        "boundary": nullable(o.get("boundary")),
        "decisionRole": decision_role,
        "sourcePath": o["_path"],
    }


def capability_record(o: dict[str, Any], portfolio_disposition: str | None = None) -> dict[str, Any]:
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
        "portfolioDisposition": portfolio_disposition,
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
        "problem": nullable(o.get("problem")),
        "strategicHypothesis": nullable(o.get("strategic_hypothesis")),
        "strongestBaseline": nullable(o.get("strongest_baseline")),
        "residualDifferentiation": nullable(o.get("residual_differentiation")),
        "internalControlBoundary": nullable(o.get("internal_control_boundary")),
        "nextQuestion": nullable(o.get("next_question")),
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
        "effectiveDate": nullable(o.get("effective_date")),
        "previousState": nullable(o.get("previous_state")),
        "triggerClaimIds": as_list(o.get("trigger_claims")),
        "triggerExperimentIds": as_list(o.get("trigger_experiments")),
        "rationale": nullable(o.get("rationale")),
        "reopenCondition": nullable(o.get("reopen_condition")),
        "sourcePath": o["_path"],
    }



def synthesis_record(o: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": o["id"],
        "scope": nullable(o.get("synthesis_scope")) or "",
        "conclusion": nullable(o.get("conclusion")) or "",
        "implication": nullable(o.get("implication")) or "",
        "theoryBasis": as_list(o.get("theory_basis")),
        "supportingClaimIds": as_list(o.get("supporting_claims")),
        "supportingDirectionIds": as_list(o.get("supporting_directions")),
        "supportingPriorityIds": as_list(o.get("supporting_priorities")),
        "keyEvidenceIds": as_list(o.get("key_evidence")),
        "boundary": nullable(o.get("boundary")),
        "reopenCondition": nullable(o.get("reopen_condition")),
        "assessedAt": nullable(o.get("assessed_at")),
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

    seen_deep_read_ids: set[str] = set()
    allowed_deep_read_levels = {"TIER_A", "TIER_B"}
    for r in datasets["deepReads"]:
        for f in ("id", "deepReadLevel", "reviewStatus", "reviewedAt", "whyItMatters", "decisionUse", "sourcePath"):
            require_nonempty(r, f, errors)
        if r["id"] in seen_deep_read_ids:
            errors.append(f"{r['id']}: duplicate deep read")
        seen_deep_read_ids.add(r["id"])
        if r["deepReadLevel"] not in allowed_deep_read_levels:
            errors.append(f"{r['id']}: invalid deepReadLevel {r['deepReadLevel']}")
        if r["deepReadLevel"] == "TIER_A":
            numbers = [q.get("number") for q in r.get("questions", [])]
            if numbers != list(range(1, 11)):
                errors.append(f"{r['id']}: TIER_A deep read must contain Q1-Q10 exactly once; got {numbers}")
        boundary = r.get("evidenceBoundary") or {}
        for f in ("sourceFacts", "analystInference", "unknownRequests"):
            if not str(boundary.get(f, "")).strip():
                errors.append(f"{r['id']}: evidenceBoundary.{f} is empty")

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

    seen_priority_ranks: dict[str, str] = {}
    for r in datasets["syntheses"]:
        for f in ("id", "scope", "conclusion", "implication", "sourcePath"):
            require_nonempty(r, f, errors)

    for r in datasets["priorities"]:
        for f in ("id", "rank", "priorityClass", "sourcePath"):
            require_nonempty(r, f, errors)
        if not re.match(r"^P[1-9][0-9]*$", r["rank"]):
            errors.append(f"{r['id']}: invalid priority rank {r['rank']}")
        elif r["rank"] in seen_priority_ranks:
            errors.append(f"{r['id']}: duplicate priority rank {r['rank']} also used by {seen_priority_ranks[r['rank']]}")
        else:
            seen_priority_ranks[r["rank"]] = r["id"]
        if not r["targetActorIds"]:
            errors.append(f"{r['id']}: targetActorIds is empty")
        if not r["relatedDirectionIds"]:
            errors.append(f"{r['id']}: relatedDirectionIds is empty")

    actor_ids = {r["id"] for r in datasets["actors"]}
    evidence_ids = {r["id"] for r in datasets["evidence"]}
    claim_ids = {r["id"] for r in datasets["claims"]}
    capability_ids = {r["id"] for r in datasets["capabilities"]}
    direction_ids = {r["id"] for r in datasets["directions"]}
    priority_ids = {r["id"] for r in datasets["priorities"]}

    for r in datasets["deepReads"]:
        if r["id"] not in evidence_ids:
            errors.append(f"{r['id']}: deep read has no matching evidence record")
        elif not r["id"].startswith("PAPER-"):
            errors.append(f"{r['id']}: deep read must target a PAPER source")
        for cid in r["relatedClaimIds"]:
            if cid not in claim_ids:
                errors.append(f"{r['id']}: unresolved relatedClaimId {cid}")
        for cid in r["relatedCapabilityIds"]:
            if cid not in capability_ids:
                errors.append(f"{r['id']}: unresolved relatedCapabilityId {cid}")
        for did in r["relatedDirectionIds"]:
            if did not in direction_ids:
                errors.append(f"{r['id']}: unresolved relatedDirectionId {did}")
        for pid in r["relatedPriorityIds"]:
            if pid not in priority_ids:
                errors.append(f"{r['id']}: unresolved relatedPriorityId {pid}")

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

    for r in datasets["syntheses"]:
        for cid in r["supportingClaimIds"]:
            if cid not in claim_ids:
                errors.append(f"{r['id']}: unresolved supportingClaimId {cid}")
        for did in r["supportingDirectionIds"]:
            if did not in direction_ids:
                errors.append(f"{r['id']}: unresolved supportingDirectionId {did}")
        for pid in r["supportingPriorityIds"]:
            if pid not in priority_ids:
                errors.append(f"{r['id']}: unresolved supportingPriorityId {pid}")
        for sid in r["keyEvidenceIds"]:
            if sid not in evidence_ids:
                errors.append(f"{r['id']}: unresolved keyEvidenceId {sid}")

    for r in datasets["priorities"]:
        for aid in r["targetActorIds"]:
            if aid not in actor_ids:
                errors.append(f"{r['id']}: unresolved targetActorId {aid}")
            else:
                actor = next((a for a in datasets["actors"] if a["id"] == aid), None)
                if actor and actor["type"] == "PERSON":
                    errors.append(f"{r['id']}: targetActorId {aid} is PERSON; priority packages must target organization/lab/company actors")
        for did in r["relatedDirectionIds"]:
            if did not in direction_ids:
                errors.append(f"{r['id']}: unresolved relatedDirectionId {did}")

    allowed_source_roles = {"CONTEXT_PROFILE", "RANKING_CONTEXT", "FRONTIER_DISCOVERY", "BACKGROUND_CONTEXT", "UNRESOLVED"}
    allowed_claim_roles = {"PARTNER_READINESS", "PORTFOLIO_RATIONALE", "COMPARATOR_UMBRELLA", "FRONTIER_DISCOVERY", "EVIDENCE_GAP", "BACKGROUND", "UNRESOLVED"}
    allowed_capability_dispositions = {"DIRECTION_LINKED", "COMPARATOR_ONLY", "SUPPORT_ONLY", "BACKGROUND_KILLED_THESIS", "UNRESOLVED"}

    claimed_source_ids = {
        sid
        for claim in datasets["claims"]
        for sid in claim["supportingSourceIds"] + claim["contradictingSourceIds"]
    }
    for r in datasets["evidence"]:
        role = r.get("usageRole")
        if role and role not in allowed_source_roles:
            errors.append(f"{r['id']}: invalid usageRole {role}")
        if r["id"] not in claimed_source_ids and not role:
            errors.append(f"{r['id']}: semantic orphan source; add Claim linkage or usageRole")

    downstream_claim_ids = {
        cid for cap in datasets["capabilities"] for cid in cap["claimIds"]
    } | {
        cid for direction in datasets["directions"] for cid in direction["claimIds"]
    } | {
        cid for event in datasets["decisions"] for cid in event["triggerClaimIds"]
    } | {
        cid for synthesis in datasets["syntheses"] for cid in synthesis["supportingClaimIds"]
    }
    for r in datasets["claims"]:
        role = r.get("decisionRole")
        if role and role not in allowed_claim_roles:
            errors.append(f"{r['id']}: invalid decisionRole {role}")
        if r["id"] not in downstream_claim_ids and not role:
            errors.append(f"{r['id']}: claim has no downstream consumer or decisionRole")
        if not r["supportingSourceIds"] and not r["contradictingSourceIds"] and role != "EVIDENCE_GAP":
            errors.append(f"{r['id']}: source-less Claim must be explicitly classified as EVIDENCE_GAP")

    direction_capability_ids = {
        cid for direction in datasets["directions"] for cid in direction["capabilityIds"]
    }
    for r in datasets["capabilities"]:
        disposition = r.get("portfolioDisposition")
        if disposition not in allowed_capability_dispositions:
            errors.append(f"{r['id']}: missing or invalid portfolioDisposition {disposition}")
            continue
        if r["id"] in direction_capability_ids and disposition != "DIRECTION_LINKED":
            errors.append(f"{r['id']}: Direction-linked capability must use DIRECTION_LINKED disposition")
        if r["id"] not in direction_capability_ids and disposition == "DIRECTION_LINKED":
            errors.append(f"{r['id']}: DIRECTION_LINKED disposition has no Direction consumer")

    return errors


def build_datasets() -> dict[str, list[dict[str, Any]]]:
    v2repo = load_v2repo()
    db = v2repo.load_all()
    canonical_errors = v2repo.validate(db)
    if canonical_errors:
        raise RuntimeError("canonical validation failed:\n" + "\n".join(canonical_errors))

    roles = load_visibility_dispositions()
    return {
        "actors": [actor_record(o) for o in db["actor"]],
        "evidence": [evidence_record(o, roles["sources"].get(o["id"])) for o in db["source"]],
        "deepReads": load_deep_reads(),
        "claims": [claim_record(o, roles["claims"].get(o["id"])) for o in db["claim"]],
        "capabilities": [capability_record(o, roles["capabilities"].get(o["id"])) for o in db["capability"]],
        "directions": [direction_record(o) for o in db["direction"]],
        "decisions": [decision_record(o) for o in db["decision"]],
        "priorities": [priority_record(o) for o in db["priority"]],
        "syntheses": [synthesis_record(o) for o in db["synthesis"]],
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
