#!/usr/bin/env python3
"""Validate staged DOI identities for the Kutateladze official bibliography.

A verified DOI candidate is NOT yet an admitted canonical SOURCE or measured
institutional output. The review ledger links back to original site ordinals and
enforces correction and translation policy.
"""
from __future__ import annotations
import csv
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse
import v2repo

ROOT=Path(__file__).resolve().parents[1]
DIR=ROOT/"analysis/output-measurement/pilot-v1"
INPUT=DIR/"kutateladze-doi-identity-review.tsv"
RAW=ROOT/"analysis/output-measurement/itp-annual-raw"
STATES={"EXISTING_CANONICAL","VERIFIED_NEW_CANDIDATE","PUBLISHER_CORRIGENDUM","SECONDARY_DOI_HOLD"}
POLICIES={"ONE_RESEARCH_WORK","ONE_REVIEW_WORK","ZERO_NEW_RESEARCH_WORK","NOT_COUNTABLE"}

def read(p):
    with p.open(encoding="utf-8",newline="") as f:
        return list(csv.DictReader(f,delimiter="\t"))

def norm(doi):
    v=doi.strip().lower()
    for p in ("doi:","https://doi.org/","http://doi.org/","https://dx.doi.org/"):
        if v.startswith(p): v=v[len(p):]
    return v.rstrip("/. ")

def main():
    ledger=read(INPUT)
    db=v2repo.load_all()
    canonical={s["id"]:s for s in db["source"]}
    errors=[]
    ids=set()
    dois=set()
    byyear={y:{int(r["index_on_site"]):r for r in read(RAW/f"{y}-candidates.tsv")} for y in (2024,2025)}
    for row in ledger:
        rid=row["candidate_id"]
        if rid in ids:errors.append(f"duplicate ledger ID {rid}")
        ids.add(rid)
        state=row["identity_status"]
        doi=norm(row["work_doi"])
        if doi in dois:errors.append(f"duplicate DOI {doi}")
        dois.add(doi)
        if not doi.startswith("10."):errors.append(f"{rid}: missing DOI identity")
        if state not in STATES:errors.append(f"{rid}: bad state")
        if row["count_policy"] not in POLICIES:errors.append(f"{rid}: bad count policy")
        year=int(row["archive_year"]); idx=int(row["archive_ordinal"])
        if idx not in byyear.get(year,{}):errors.append(f"{rid}: original site ordinal missing")
        if int(row["journal_year"]) !=year:
            errors.append(f"{rid}: cited journal year differs from archive; manual year review required")
        if not row["identity_note"]:errors.append(f"{rid}: missing identity interpretation")
        u=urlparse(row["primary_url"])
        if u.scheme!="https" or not u.netloc:errors.append(f"{rid}: invalid URL")
        canonical_id=row["canonical_source_id"].strip()
        if state=="EXISTING_CANONICAL":
            source=canonical.get(canonical_id)
            if not source:errors.append(f"{rid}: missing canonical {canonical_id}")
            elif norm(source.get("source_key",""))!=doi:errors.append(f"{rid}: source DOI mismatch: {canonical_id}")
            if row["count_policy"]!="ONE_RESEARCH_WORK":errors.append(f"{rid}: existing journal Source wrong policy")
        elif canonical_id:
            errors.append(f"{rid}: candidate must not be assigned canonical Source before ingestion")
        if state=="PUBLISHER_CORRIGENDUM":
            if row["count_policy"]!="ZERO_NEW_RESEARCH_WORK":errors.append(f"{rid}: corrigendum cannot be new research output")
            if not row["linked_main_doi"]:errors.append(f"{rid}: corrigendum needs main DOI")
        elif row["linked_main_doi"]:
            errors.append(f"{rid}: unexpected main DOI link")
        if state=="SECONDARY_DOI_HOLD" and row["count_policy"]!="NOT_COUNTABLE":
            errors.append(f"{rid}: unverified secondary DOI not countable")
    for row in ledger:
        if row["linked_main_doi"] and norm(row["linked_main_doi"]) not in dois:
            errors.append(f"{row['candidate_id']}: main work DOI absent from ledger")
    if errors:
        for e in errors:print("ERROR:",e)
        raise SystemExit(1)
    counts=Counter(r["identity_status"] for r in ledger)
    print(f"DOI CANDIDATE IDENTITY AUDIT PASS: {len(ledger)} linked site/DOI records, {dict(counts)}")
    print("Existing canonical Paper reused; corrigendum linked as zero new scientific works.")
    print("Not a complete DOI review, not institutional output, and no new Source ingestion.")
if __name__=="__main__":
    main()
