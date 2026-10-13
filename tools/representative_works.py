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
TEAM_FILES = {
    "ACT-KUT-LAB13": "03-actors/labs/ACT-KUT-LAB13/representative-works.tsv",
    "ACT-MPEI": "03-actors/organizations/ACT-MPEI/representative-works.tsv",
    "ACT-ITP-UBRAS": "03-actors/organizations/ACT-ITP-UBRAS/representative-works.tsv",
    "ACT-TPU": "03-actors/organizations/ACT-TPU/representative-works.tsv",
    "ACT-TSU": "03-actors/organizations/ACT-TSU/representative-works.tsv",
    "ACT-ICM-KRASN": "03-actors/organizations/ACT-ICM-KRASN/representative-works.tsv",
}
FIELDS = ("selection_id","work_ref","source_locator","scholar_refs","research_lane",
          "selection_reason","evidence_state","deep_read_priority","decision_ref","selection_limit",
          "display_title","display_authors","display_venue","display_year")
STATES = {"CANONICAL","ORIGINAL_REVIEWED","SECONDARY_ONLY","PENDING_IDENTITY"}
PRIORITIES = {"DECISIVE","SUPPORTING","CONTEXT"}

# Verified Russian-original / English-translation DOI identity pair; ONE scientific work.
# Original (Teploenergetika 2025): https://sciencejournals.ru/view-article/?a=TepEn2570115Chernysheva&j=tepen&n=12&v=0&y=2025
# English (Thermal Engineering 72(12)): https://www.pleiades.online/cgi-perl/search.pl?name=thermeng&number=12&page=1108&type=abstract&year=25
# Do not allow generic DOI mismatch or infer equivalence from similar titles alone.
CANONICAL_TRANSLATION_ALIASES = {
    ("PAPER-RU-LHP-001", "10.56304/s0040363625701152", "10.1134/s0040601525700661"),
}

def checked_records():
    db = v2repo.load_all()
    sources = {o["id"]: o for o in db["source"]}
    directions = {o["id"] for o in db["direction"]}
    actors = {o["id"]: o for o in db["actor"]}
    errors, records, seen = [], [], set()
    for team_id, rel in TEAM_FILES.items():
        if team_id not in actors or actors[team_id].get("actor_type") == "PERSON":
            errors.append(f"{rel}: invalid team owner {team_id}")
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
                if row["decision_ref"] != "NONE" and row["decision_ref"] not in directions:
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
                    if expected and observed != expected and (work, expected.lower(), observed.lower()) not in CANONICAL_TRANSLATION_ALIASES:
                        errors.append(f"{mark}: canonical DOI mismatch {expected} != {observed}")
                for person in row["scholar_refs"].split(";"):
                    if person.startswith("NAME:") and len(person) > 5:
                        continue
                    if person not in actors or actors[person].get("actor_type") != "PERSON":
                        errors.append(f"{mark}: invalid person ref {person}")
                if row["display_year"] != "UNVERIFIED" and not (row["display_year"].isdigit() and 1900 <= int(row["display_year"]) <= 2100):
                    errors.append(f"{mark}: invalid publication year")
                if row["evidence_state"] == "CANONICAL" and row["display_year"] == "UNVERIFIED":
                    errors.append(f"{mark}: canonical publication year cannot be unverified")
                records.append({
                    "id": key, "title": row["display_title"],
                    "authors": row["display_authors"], "venue": row["display_venue"],
                    "year": None if row["display_year"] == "UNVERIFIED" else int(row["display_year"]),
                    "teamId": team_id,
                    "sourceId": None if work == "CANDIDATE" else work,
                    "sourceUrl": locator,
                    "scholarRefs": row["scholar_refs"].split(";"),
                    "researchLane": row["research_lane"],
                    "selectionReason": row["selection_reason"],
                    "evidenceState": row["evidence_state"],
                    "deepReadPriority": row["deep_read_priority"],
                    "directionId": None if row["decision_ref"] == "NONE" else row["decision_ref"],
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
