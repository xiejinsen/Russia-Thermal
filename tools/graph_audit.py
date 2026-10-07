#!/usr/bin/env python3
"""Decision-graph and evidence-chain audit for Russia-Thermal V2.1.

This is intentionally stricter than tools/v2repo.py:
- v2repo validates object IDs, reference types and generated views;
- web export validates semantic visibility closure;
- this audit validates end-to-end decision graph reachability and evidence sufficiency.

It does not make research inferences. It checks whether the in-repo claims and
relations form a coherent, traceable decision graph.
"""

from __future__ import annotations

import importlib.util
import sys
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
V2REPO_PATH = ROOT / "tools" / "v2repo.py"
WEB_EXPORT_PATH = ROOT / "web" / "adapters" / "export_web.py"

ACTIVE_LANES = {"STRATEGIC_CANDIDATE", "STAGE0_CHALLENGER", "RESERVE"}
TECHNICAL_LANES = ACTIVE_LANES | {"WATCH", "HOLD"}
DECISION_SOURCE_TYPES = {"PAPER", "PATENT"}


def load_module(path: Path, name: str):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"cannot load {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


v2 = load_module(V2REPO_PATH, "v2repo_graph_audit")
web = load_module(WEB_EXPORT_PATH, "web_export_graph_audit")


def as_list(v: Any) -> list[str]:
    if v is None:
        return []
    if isinstance(v, list):
        return [str(x).strip() for x in v if str(x).strip() and str(x).strip() not in {"[]", "null", "-"}]
    s = str(v).strip()
    return [] if not s or s in {"[]", "null", "-"} else [s]


def country_bucket(source: dict[str, Any]) -> str:
    c = str(source.get("country_context") or "").strip().upper()
    sid = source["id"]
    if c:
        if c in {"RU", "RUSSIA"}:
            return "RU"
        if c in {"CN", "CHINA"}:
            return "CN"
        return "GLOBAL"
    if sid.startswith(("PAPER-RU-", "PATENT-RU", "OFFICIAL-RU-", "OFFICIAL-KUT-", "OFFICIAL-MPEI-", "OFFICIAL-TPU-", "OFFICIAL-RAS-")):
        return "RU"
    if sid.startswith(("PAPER-CN-", "PATENT-CN", "OFFICIAL-CN-", "OFFICIAL-SJTU-", "OFFICIAL-BIT-", "OFFICIAL-PKU-", "OFFICIAL-FUDAN-")):
        return "CN"
    return "GLOBAL"


def ancestors(actor_id: str, actor_by_id: dict[str, dict[str, Any]]) -> set[str]:
    out: set[str] = set()
    cur = actor_by_id.get(actor_id)
    while cur:
        cid = cur["id"]
        if cid in out:
            break
        out.add(cid)
        parent = str(cur.get("parent_actor_id") or "").strip()
        if not parent or parent in {"null", "-"}:
            break
        cur = actor_by_id.get(parent)
    return out


def main() -> int:
    db = v2.load_all()
    errors = list(v2.validate(db))
    warnings: list[str] = []

    datasets = web.build_datasets()
    errors.extend(web.validate_normalized(datasets))

    by_kind = {kind: {o["id"]: o for o in objs} for kind, objs in db.items()}
    source_by_id = by_kind["source"]
    claim_by_id = by_kind["claim"]
    actor_by_id = by_kind["actor"]
    cap_by_id = by_kind["capability"]
    dir_by_id = by_kind["direction"]
    exp_by_id = by_kind["experiment"]
    decision_by_id = by_kind["decision"]
    priority_by_id = by_kind["priority"]

    roles = web.load_visibility_dispositions()
    source_roles = roles["sources"]
    claim_roles = roles["claims"]
    cap_roles = roles["capabilities"]

    # No unresolved visibility exceptions are allowed at closure.
    for sid, role in source_roles.items():
        if role == "UNRESOLVED":
            errors.append(f"{sid}: source usage role remains UNRESOLVED")
    for cid, role in claim_roles.items():
        if role == "UNRESOLVED":
            errors.append(f"{cid}: claim decision role remains UNRESOLVED")
    for cid, role in cap_roles.items():
        if role == "UNRESOLVED":
            errors.append(f"{cid}: capability disposition remains UNRESOLVED")

    # Deep-read integrity: both papers and patents must be normalized.
    deep_reads = datasets["deepReads"]
    deep_by_id: dict[str, dict[str, Any]] = {}
    for dr in deep_reads:
        did = dr.get("id", "")
        if not did:
            errors.append(f"{dr.get('sourcePath')}: deep-read has no source id")
            continue
        if did in deep_by_id:
            errors.append(f"duplicate deep-read id: {did}")
        deep_by_id[did] = dr
        source = source_by_id.get(did)
        if not source:
            errors.append(f"{did}: deep-read source is not canonical")
            continue
        stype = str(source.get("source_type") or "").upper()
        if stype not in DECISION_SOURCE_TYPES:
            errors.append(f"{did}: deep-read attached to non-paper/patent source type {stype}")
        qs = dr.get("questions") or []
        if len(qs) != 10:
            errors.append(f"{did}: deep-read must expose 10 structured questions/prompts, got {len(qs)}")
        boundary = dr.get("evidenceBoundary") or {}
        for key in ("sourceFacts", "analystInference", "unknownRequests"):
            if not str(boundary.get(key) or "").strip():
                errors.append(f"{did}: deep-read evidence boundary missing {key}")

    # Build reverse source/claim use and general graph degree.
    claimed_sources: dict[str, set[str]] = defaultdict(set)
    downstream_claims: dict[str, set[str]] = defaultdict(set)
    degree: Counter[str] = Counter()

    def edge(a: str, b: str):
        degree[a] += 1
        degree[b] += 1

    for claim in db["claim"]:
        cid = claim["id"]
        for sid in as_list(claim.get("supporting_sources")) + as_list(claim.get("contradicting_sources")):
            claimed_sources[sid].add(cid)
            edge(cid, sid)

    for cap in db["capability"]:
        capid = cap["id"]
        aid = str(cap.get("actor_id") or "").strip()
        if aid:
            edge(capid, aid)
        for pid in as_list(cap.get("key_people")):
            edge(capid, pid)
        for cid in as_list(cap.get("evidence_claims")):
            downstream_claims[cid].add(capid)
            edge(capid, cid)

    for direction in db["direction"]:
        did = direction["id"]
        for capid in as_list(direction.get("candidate_capabilities")):
            edge(did, capid)
        for cid in as_list(direction.get("related_claims")):
            downstream_claims[cid].add(did)
            edge(did, cid)

    for decision in db["decision"]:
        did = decision["id"]
        subject = str(decision.get("subject") or "").strip()
        if subject in {**source_by_id, **claim_by_id, **actor_by_id, **cap_by_id, **dir_by_id, **exp_by_id}:
            edge(did, subject)
        for cid in as_list(decision.get("trigger_claims")):
            downstream_claims[cid].add(did)
            edge(did, cid)
        for eid in as_list(decision.get("trigger_experiments")):
            edge(did, eid)

    for priority in db["priority"]:
        pid = priority["id"]
        for aid in as_list(priority.get("target_actors")):
            edge(pid, aid)
        for did in as_list(priority.get("related_directions")):
            edge(pid, did)

    for syn in db["synthesis"]:
        sid = syn["id"]
        for cid in as_list(syn.get("supporting_claims")):
            downstream_claims[cid].add(sid)
            edge(sid, cid)
        for did in as_list(syn.get("supporting_directions")):
            edge(sid, did)
        for pid in as_list(syn.get("supporting_priorities")):
            edge(sid, pid)
        for evid in as_list(syn.get("key_evidence")):
            edge(sid, evid)

    for actor in db["actor"]:
        aid = actor["id"]
        parent = str(actor.get("parent_actor_id") or "").strip()
        if parent and parent not in {"null", "-"}:
            edge(aid, parent)

    # Traceability of papers/patents: source key/url and deep-read use.
    for source in db["source"]:
        sid = source["id"]
        stype = str(source.get("source_type") or "").upper()
        if stype in DECISION_SOURCE_TYPES:
            if not source.get("source_key") and not source.get("primary_url"):
                errors.append(f"{sid}: paper/patent lacks source_key and primary_url")
        if sid in deep_by_id and sid not in claimed_sources and not source_roles.get(sid):
            errors.append(f"{sid}: deep-read source is not connected to any Claim or explicit usage role")
        if deep_by_id.get(sid, {}).get("deepReadLevel") == "TIER_A" and sid not in claimed_sources:
            errors.append(f"{sid}: Tier-A deep-read has no Claim linkage")

    # Actor graph integrity.
    for actor in db["actor"]:
        aid = actor["id"]
        atype = str(actor.get("actor_type") or "").upper()
        parent = str(actor.get("parent_actor_id") or "").strip()
        if atype == "PERSON":
            if not parent or parent in {"null", "-"}:
                errors.append(f"{aid}: PERSON has no parent_actor_id")
            elif parent in actor_by_id and str(actor_by_id[parent].get("actor_type") or "").upper() == "PERSON":
                errors.append(f"{aid}: PERSON parent points to PERSON {parent}")
        if degree[aid] == 0:
            errors.append(f"{aid}: actor is graph-isolated")

    # Capability integrity and same-institution sanity for key people.
    for cap in db["capability"]:
        capid = cap["id"]
        claims = as_list(cap.get("evidence_claims"))
        disposition = cap_roles.get(capid)
        if not claims:
            errors.append(f"{capid}: capability has no evidence_claims")
        if not str(cap.get("transfer_boundary") or "").strip():
            warnings.append(f"{capid}: capability has no explicit transfer_boundary")
        people = as_list(cap.get("key_people"))
        if disposition == "DIRECTION_LINKED" and not people:
            errors.append(f"{capid}: Direction-linked capability has no key_people")
        cap_actor = str(cap.get("actor_id") or "").strip()
        cap_lineage = ancestors(cap_actor, actor_by_id)
        for pid in people:
            person = actor_by_id.get(pid)
            if not person:
                continue
            parent = str(person.get("parent_actor_id") or "").strip()
            person_lineage = ancestors(parent, actor_by_id) if parent else set()
            if cap_lineage and person_lineage and not (cap_lineage & person_lineage):
                warnings.append(f"{capid}: key person {pid} is outside capability actor lineage {cap_actor}")

    # Direction end-to-end evidence closure.
    direction_rows: list[tuple[str, str, int, int, int, int, int, int]] = []
    for direction in db["direction"]:
        did = direction["id"]
        lane = str(direction.get("investment_lane") or "").strip()
        capids = as_list(direction.get("candidate_capabilities"))
        direct_claims = as_list(direction.get("related_claims"))
        if not capids:
            errors.append(f"{did}: Direction has no candidate_capabilities")
        if not direct_claims:
            errors.append(f"{did}: Direction has no related_claims")
        if lane in TECHNICAL_LANES:
            if not str(direction.get("strongest_baseline") or "").strip():
                errors.append(f"{did}: Direction has no strongest_baseline")
            if not (
                str(direction.get("next_question") or "").strip()
                or str(direction.get("promotion_gate") or "").strip()
            ):
                errors.append(f"{did}: Direction has no next question / promotion gate")

        claim_ids = set(direct_claims)
        for capid in capids:
            cap = cap_by_id.get(capid)
            if cap:
                claim_ids.update(as_list(cap.get("evidence_claims")))

        source_ids: set[str] = set()
        for cid in claim_ids:
            claim = claim_by_id.get(cid)
            if claim:
                source_ids.update(as_list(claim.get("supporting_sources")))
                source_ids.update(as_list(claim.get("contradicting_sources")))

        buckets = Counter(country_bucket(source_by_id[sid]) for sid in source_ids if sid in source_by_id)
        decision_sources = {sid for sid in source_ids if str(source_by_id.get(sid, {}).get("source_type") or "").upper() in DECISION_SOURCE_TYPES}
        deep_count = len(decision_sources & set(deep_by_id))
        direction_rows.append((did, lane, len(capids), len(claim_ids), len(source_ids), buckets["RU"], buckets["CN"] + buckets["GLOBAL"], deep_count))

        if len(source_ids) < 2:
            errors.append(f"{did}: Direction evidence chain reaches fewer than 2 sources ({len(source_ids)})")
        if buckets["RU"] < 1:
            errors.append(f"{did}: Direction has no Russia-side source in reachable evidence chain")
        if buckets["CN"] + buckets["GLOBAL"] < 1:
            errors.append(f"{did}: Direction has no China/global comparator in reachable evidence chain")

        if lane in ACTIVE_LANES:
            if len(source_ids) < 4:
                errors.append(f"{did}: active/reserve Direction has fewer than 4 reachable sources")
            if deep_count < 1:
                errors.append(f"{did}: active/reserve Direction has no Deep Read in reachable paper/patent evidence")
            if len(source_ids) < 8:
                warnings.append(f"{did}: active/reserve Direction has only {len(source_ids)} reachable sources; review sufficiency")
            if deep_count < 3:
                warnings.append(f"{did}: active/reserve Direction has only {deep_count} reachable Deep Reads")

    # Priority packages must connect actor targets to at least one related Direction lineage.
    for priority in db["priority"]:
        pid = priority["id"]
        target_actors = as_list(priority.get("target_actors"))
        dirs = as_list(priority.get("related_directions"))
        if not target_actors:
            errors.append(f"{pid}: priority has no target_actors")
        if not dirs:
            errors.append(f"{pid}: priority has no related_directions")
        reachable_actor_lineages: set[str] = set()
        for did in dirs:
            direction = dir_by_id.get(did)
            if not direction:
                continue
            for capid in as_list(direction.get("candidate_capabilities")):
                cap = cap_by_id.get(capid)
                if cap:
                    reachable_actor_lineages |= ancestors(str(cap.get("actor_id") or ""), actor_by_id)
        for aid in target_actors:
            target_lineage = ancestors(aid, actor_by_id)
            if reachable_actor_lineages and not (target_lineage & reachable_actor_lineages):
                warnings.append(f"{pid}: target actor {aid} is not in the institutional lineage of its related Directions")

    # Decisions and syntheses must themselves have graph reachability.
    for decision in db["decision"]:
        did = decision["id"]
        if degree[did] == 0:
            errors.append(f"{did}: Decision event is graph-isolated")
        etype = str(decision.get("event_type") or "").strip()
        if etype in {"PROMOTE", "DOWNGRADE", "KILL"} and not (
            as_list(decision.get("trigger_claims"))
            or as_list(decision.get("trigger_experiments"))
        ):
            warnings.append(f"{did}: {etype} Decision has no explicit trigger_claims/trigger_experiments")

    for syn in db["synthesis"]:
        sid = syn["id"]
        if not as_list(syn.get("supporting_claims")):
            errors.append(f"{sid}: Synthesis has no supporting_claims")
        if not as_list(syn.get("supporting_directions")):
            errors.append(f"{sid}: Synthesis has no supporting_directions")
        if not as_list(syn.get("key_evidence")):
            errors.append(f"{sid}: Synthesis has no key_evidence")

    # Decision-tier nodes may not be isolated. Context sources/role-only claims are allowed.
    for kind in ("capability", "direction", "priority", "synthesis"):
        for o in db[kind]:
            if degree[o["id"]] == 0:
                errors.append(f"{o['id']}: {kind} is graph-isolated")

    # Report metrics.
    print("GRAPH AUDIT METRICS")
    print("objects:", {k: len(v) for k, v in db.items()})
    print("deep_reads:", len(deep_reads), "papers=", sum(1 for x in deep_reads if x["id"].startswith("PAPER-")), "patents=", sum(1 for x in deep_reads if x["id"].startswith("PATENT-")))
    print("visibility_roles:", {
        "sources": Counter(source_roles.values()),
        "claims": Counter(claim_roles.values()),
        "capabilities": Counter(cap_roles.values()),
    })
    print("direction_evidence:")
    print("Direction | Lane | Caps | Claims | Sources | RU | Comparator | DeepReads")
    for row in sorted(direction_rows):
        print(" | ".join(str(x) for x in row))

    orphan_sources = [sid for sid in source_by_id if not claimed_sources.get(sid) and not source_roles.get(sid)]
    orphan_claims = [cid for cid in claim_by_id if not downstream_claims.get(cid) and not claim_roles.get(cid)]
    print("semantic_orphans:", {"sources": len(orphan_sources), "claims": len(orphan_claims)})
    print("warnings:", len(warnings))
    for w in warnings:
        print("WARNING:", w)

    if errors:
        print("GRAPH AUDIT FAILED")
        for e in sorted(set(errors)):
            print("ERROR:", e)
        return 2

    print("GRAPH AUDIT PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
