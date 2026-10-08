#!/usr/bin/env python3
"""Validate and export representative-work selections without inventing canonical papers."""
from __future__ import annotations
import csv
import sys
from pathlib import Path
from urllib.parse import urlsplit
sys.path.insert(0, str(Path(__file__).resolve().parent))
import v2repo

ROOT = Path(__file__).resolve().parents[1]
PATHS = (
    "03-actors/labs/ACT-KUT-LAB13/representative-works.tsv",
    "03-actors/organizations/ACT-MPEI/representative-works.tsv",
)
FIELDS = ("selection_id","work_ref","source_locator","scholar_refs","research_lane",
          "selection_reason","evidence_state","deep_read_priority","decision_ref","selection_limit")
STATES = {"CANONICAL","ORIGINAL_REVIEWED","SECONDARY_ONLY","PENDING_IDENTITY"}
PRIORITIES = {"DECISIVE","SUPPORTING","CONTEXT"}

def checked_records():
    db = v2repo.load_all()
    sources = {o["id"]: o for o in db["source"]}
    directions = {o["id"] for o in db["direction"]}
    actors = {o["id"]: o for o in db["actor"]}
    errors, records, seen = [], [], set()
    for rel in PATHS:
        path = ROOT / rel
        with path.open(newline="", encoding="utf-8") as fp:
            reader = csv.DictReader(fp, delimiter="\t")
            if tuple(reader.fieldnames or ()) != FIELDS:
                errors.append(f"{rel}: invalid header")
                continue
            for line, row in enumerate(reader, 2):
                mark = f"{rel}:{line}"
                if None in row or any(not str(row.get(f) or "").strip() for f in FIELDS):
                    errors.append(f"{mark}: missing/extra field")
                    continue
                key = row["selection_id"]
                if key in seen:
                    errors.append(f"{mark}: duplicate selection_id {key}")
                seen.add(key)
                if row["evidence_state"] not in STATES:
                    errors.append(f"{mark}: invalid evidence_state")
                if row["deep_read_priority"] not in PRIORITIES:
                    errors.append(f"{mark}: invalid deep_read_priority")
                if row["decision_ref"] not in directions:
                    errors.append(f"{mark}: unresolved Direction {row['decision_ref']}")
                locator = row["source_locator"]
                split = urlsplit(locator)
                if split.scheme != "https" or not split.netloc:
                    errors.append(f"{mark}: invalid https source locator")
                work = row["work_ref"]
                if work == "CANDIDATE":
                    if row["evidence_state"] == "CANONICAL":
                        errors.append(f"{mark}: candidate cannot be CANONICAL")
                elif work not in sources:
                    errors.append(f"{mark}: unknown Source {work}")
                else:
                    source = sources[work]
                    if row["evidence_state"] != "CANONICAL":
                        errors.append(f"{mark}: linked canonical Source must state CANONICAL")
                    expected = v2repo.normalize_doi(source.get("source_key") or source.get("primary_url"))
                    observed = v2repo.normalize_doi(locator)
                    if expected and observed != expected:
                        errors.append(f"{mark}: canonical DOI mismatch {expected} != {observed}")
                for person in row["scholar_refs"].split(";"):
                    if person.startswith("NAME:") and len(person) > 5:
                        continue
                    if person not in actors or actors[person].get("actor_type") != "PERSON":
                        errors.append(f"{mark}: invalid person ref {person}")
                records.append({
                    "id": key, "teamId": "ACT-KUT-LAB13" if "ACT-KUT" in rel else "ACT-MPEI",
                    "sourceId": None if work == "CANDIDATE" else work,
                    "sourceUrl": locator,
                    "scholarRefs": row["scholar_refs"].split(";"),
                    "researchLane": row["research_lane"],
                    "selectionReason": row["selection_reason"],
                    "evidenceState": row["evidence_state"],
                    "deepReadPriority": row["deep_read_priority"],
                    "directionId": row["decision_ref"],
                    "selectionLimit": row["selection_limit"],
                })
    if errors:
        raise ValueError("representative works validation failed:\n" + "\n".join(errors))
    return records

if __name__ == "__main__":
    try:
        rows = checked_records()
    except (ValueError, OSError) as e:
        print("FAIL", e)
        raise SystemExit(2)
    print("PASS representative-work links:", len(rows), "canonical:", sum(r["sourceId"] is not None for r in rows))
