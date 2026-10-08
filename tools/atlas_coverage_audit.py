#!/usr/bin/env python3
"""Read-only coverage audit for the Russia-first thermal Capability Atlas.

Counts are recovered *canonical graph* records, never total national/institutional
publication or patent production. A gap means not yet evidenced in this project.
"""
from __future__ import annotations

import argparse
import json
from collections import Counter, defaultdict
from pathlib import Path

import v2repo

ROOT = Path(__file__).resolve().parents[1]

def vals(value):
    return [v for v in v2repo.as_list(value) if v and str(v).strip() not in {"[]", "null", "None"}]

def owner_for(actor_id, by_id):
    seen = set()
    while actor_id in by_id and actor_id not in seen:
        seen.add(actor_id)
        actor = by_id[actor_id]
        if actor.get("actor_type") != "LAB":
            return actor_id
        actor_id = actor.get("parent_actor_id") or ""
    return actor_id

def inspect():
    db = v2repo.load_all()
    actors = {x["id"]: x for x in db["actor"]}
    claims = {x["id"]: x for x in db["claim"]}
    sources = {x["id"]: x for x in db["source"]}
    capabilities = [x for x in db["capability"] if
                    actors.get(owner_for(x.get("actor_id", ""), actors), {}).get("country") == "RU"]
    grouped = defaultdict(list)
    for cap in capabilities:
        grouped[owner_for(cap["actor_id"], actors)].append(cap)
    result = []
    for actor_id, caps in sorted(grouped.items()):
        actor = actors[actor_id]
        actor_dir = ROOT / actor["_path"].replace("/README.md", "")
        profile_path = actor_dir / "atlas-profile.md"
        profile = v2repo.parse(profile_path) if profile_path.exists() else None
        people = set()
        no_key_people = []
        missing_transfer = []
        source_ids = set()
        for cap in caps:
            ps = vals(cap.get("key_people"))
            if not ps:
                no_key_people.append(cap["id"])
            people.update(ps)
            if not vals(cap.get("platform_transfer")):
                missing_transfer.append(cap["id"])
            for claim_id in vals(cap.get("evidence_claims")):
                claim = claims.get(claim_id, {})
                source_ids.update(vals(claim.get("supporting_sources")))
                source_ids.update(vals(claim.get("contradicting_sources")))
        evidence = [sources[sid] for sid in source_ids if sid in sources]
        out_types = Counter(str(s.get("source_type") or "").upper() for s in evidence)
        collaboration_ids = vals(profile.get("collaboration_sources")) if profile else []
        influence_ids = vals(profile.get("influence_sources")) if profile else []
        row = {
            "actor_id": actor_id,
            "name": actor.get("canonical_name") or actor_id,
            "actor_type": actor.get("actor_type"),
            "capabilities": len(caps),
            "key_people": len(people),
            "unowned_capabilities": no_key_people,
            "missing_platform_transfer": missing_transfer,
            "profile": bool(profile),
            "recovered_papers": out_types["PAPER"],
            "recovered_patents": out_types["PATENT"],
            "recovered_official": out_types["OFFICIAL"],
            "collaboration_profile_sources": len(collaboration_ids),
            "influence_profile_sources": len(influence_ids),
            "source_ids": sorted(source_ids),
        }
        result.append(row)
    return result

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true")
    parser.add_argument("--summary", action="store_true")
    args = parser.parse_args()
    rows = inspect()
    summary = {
        "russia_capability_owners": len(rows),
        "russia_capability_objects": sum(x["capabilities"] for x in rows),
        "owners_with_profiles": sum(x["profile"] for x in rows),
        "owners_without_profiles": [x["actor_id"] for x in rows if not x["profile"]],
        "capabilities_with_transfer": sum(x["capabilities"] - len(x["missing_platform_transfer"]) for x in rows),
        "capabilities_without_transfer": [cap for x in rows for cap in x["missing_platform_transfer"]],
        "capabilities_without_named_key_people": [cap for x in rows for cap in x["unowned_capabilities"]],
        "owners_with_no_recovered_paper": [x["actor_id"] for x in rows if not x["recovered_papers"]],
        "owners_with_no_recovered_patent": [x["actor_id"] for x in rows if not x["recovered_patents"]],
        "profiled_owners_without_collaboration_source": [
            x["actor_id"] for x in rows if x["profile"] and not x["collaboration_profile_sources"]
        ],
    }
    if args.json:
        print(json.dumps({"summary": summary, "owners": rows}, indent=2, ensure_ascii=False))
        return
    print("RUSSIA CAPABILITY ATLAS COVERAGE AUDIT")
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    if args.summary:
        return
    print()
    print("| Actor | Type | Caps | Profile | Transfer | People | Papers | Patents | Collaboration Sources |")
    print("|---|---|---:|---|---|---:|---:|---:|---:|")
    for row in rows:
        transfer = f"{row['capabilities'] - len(row['missing_platform_transfer'])}/{row['capabilities']}"
        print(f"| {row['actor_id']} | {row['actor_type']} | {row['capabilities']} | "
              f"{'YES' if row['profile'] else 'GAP'} | {transfer} | {row['key_people']} | "
              f"{row['recovered_papers']} | {row['recovered_patents']} | "
              f"{row['collaboration_profile_sources']} |")
    print()
    print("All counts are recovered project evidence, NOT institution-wide bibliometrics.")
    print("Empty source/person fields mean NOT YET RECOVERED, never proven absent.")

if __name__ == "__main__":
    main()
