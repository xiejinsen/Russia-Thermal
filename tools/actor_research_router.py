#!/usr/bin/env python3
"""Ensure every Russian root Actor has a stable academic-vs-industry research route.

Research routing does not modify canonical Actor identity or decision direction.
"""
import csv
from collections import Counter
from pathlib import Path

import v2repo

ROOT = Path(__file__).resolve().parents[1]
ROUTING = ROOT / "00-project/russia-root-actor-research-routing.tsv"
ACADEMIC = {"ACADEMIC_UNIVERSITY", "ACADEMIC_RESEARCH_INSTITUTE"}
SECONDARY = {"APPLIED_RESEARCH_ORG", "INDUSTRIAL_ORG", "COMPANY"}

def main():
    db = v2repo.load_all()
    ru_roots = {x["id"]: x for x in db["actor"] if
                x.get("country") == "RU"
                and x.get("actor_type") in {"ORGANIZATION", "COMPANY"}
                and not x.get("parent_actor_id")}
    with ROUTING.open(encoding="utf-8", newline="") as f:
        entries = list(csv.DictReader(f, delimiter="\t"))
    by_id = {x["actor_id"]: x for x in entries}
    errors = []
    if len(by_id) != len(entries):
        errors.append("duplicate actor_id in routing table")
    if set(by_id) != set(ru_roots):
        errors.append(f"root Actor coverage missing={sorted(set(ru_roots)-set(by_id))}, extra={sorted(set(by_id)-set(ru_roots))}")
    for aid, r in by_id.items():
        actor = ru_roots.get(aid)
        cls, depth = r["research_organization_class"], r["research_depth"]
        if actor and actor.get("actor_type") != r["canonical_actor_type"]:
            errors.append(f"{aid}: canonical Actor type mismatch")
        if cls in ACADEMIC and depth != "PRIMARY":
            errors.append(f"{aid}: academic institution cannot be demoted")
        if cls == "APPLIED_RESEARCH_ORG" and depth != "SELECTIVE":
            errors.append(f"{aid}: applied research should remain SELECTIVE")
        if cls in {"INDUSTRIAL_ORG", "COMPANY"} and depth != "CONTEXT_ONLY":
            errors.append(f"{aid}: company/industrial partner research must be CONTEXT_ONLY")
        if cls not in ACADEMIC | SECONDARY:
            errors.append(f"{aid}: invalid research organization class")
        if cls == "COMPANY" and actor and actor.get("actor_type") != "COMPANY":
            errors.append(f"{aid}: company Actor type disagreement")
    if errors:
        for error in errors:
            print("ERROR:", error)
        raise SystemExit(1)
    class_count = Counter(x["research_organization_class"] for x in entries)
    depth_count = Counter(x["research_depth"] for x in entries)
    print("ACADEMIC-FIRST RESEARCH ROUTING PASS")
    print(f"Russian root Actors: {len(ru_roots)}")
    print(f"Academic deep research: {depth_count['PRIMARY']} ({class_count['ACADEMIC_UNIVERSITY']} universities, {class_count['ACADEMIC_RESEARCH_INSTITUTE']} academic institutes)")
    print(f"Selective applied research: {depth_count['SELECTIVE']}")
    print(f"Industry/company context only: {depth_count['CONTEXT_ONLY']}")
    print("No academic-vs-company bibliometric leaderboard is allowed.")

if __name__ == "__main__":
    main()
