#!/usr/bin/env python3
"""Validate the *sample* output-measurement ledger.

This does NOT estimate annual/institutional publication totals. It rejects
identification, time-window and canonical-referencing mistakes before future
bibliometric imports are allowed into the SSOT.
"""
from __future__ import annotations

import csv
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlsplit

import v2repo

ROOT = Path(__file__).resolve().parents[1]
FILE = ROOT / "analysis/output-measurement/pilot-v1/sample-records.tsv"
REQUIRED = {
    "measurement_id", "actor_id", "kind", "year", "identity_key",
    "family_key", "window_class", "admission_state", "canonical_source_id",
    "original_url", "note",
}
CANONICAL = "CANONICAL_VERIFIED"
CANDIDATES = {"CANDIDATE_IDENTITY_REVIEW", "CANDIDATE_PUBLICATION_VERIFY"}
EXCLUSIONS = {"EXCLUDED_SEPARATE_IP_TYPE", "EXCLUDED_OUTSIDE_WINDOW"}
WINDOWS = {"FIVE_YEAR", "YTD_2026", "OUTSIDE_WINDOW"}
KINDS = {"PAPER", "INVENTION_PATENT", "UTILITY_MODEL", "SOFTWARE_CERTIFICATE"}

def normalized(kind, raw):
    if kind == "PAPER":
        return v2repo.normalize_doi(raw) or raw.casefold().strip()
    if kind in {"INVENTION_PATENT", "UTILITY_MODEL"}:
        return v2repo.normalize_patent_publication(raw) or raw.upper().strip()
    return raw.casefold().strip()

def main():
    db = v2repo.load_all()
    sources = {item["id"]: item for item in db["source"]}
    actors = {item["id"]: item for item in db["actor"]}
    errors, seen, families = [], {}, defaultdict(set)
    with FILE.open(encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle, delimiter="\t")
        if not REQUIRED.issubset(set(reader.fieldnames or [])):
            raise SystemExit("MISSING TSV COLUMNS")
        rows = list(reader)
    for r in rows:
        rid, actor, kind, status = (r.get(k, "").strip() for k in ("measurement_id", "actor_id", "kind", "admission_state"))
        if not rid or actor not in actors or kind not in KINDS:
            errors.append(f"{rid}: missing ID / actor / kind")
        year = int(r["year"])
        window = r["window_class"]
        expected = "FIVE_YEAR" if 2021 <= year <= 2025 else "YTD_2026" if year == 2026 else "OUTSIDE_WINDOW"
        if window not in WINDOWS or window != expected:
            errors.append(f"{rid}: wrong window {window}, expected {expected}")
        if status not in CANDIDATES | EXCLUSIONS | {CANONICAL}:
            errors.append(f"{rid}: invalid admission_state {status}")
        if status == "EXCLUDED_OUTSIDE_WINDOW" and window != "OUTSIDE_WINDOW":
            errors.append(f"{rid}: outside-window exclusion mismatch")
        if kind == "SOFTWARE_CERTIFICATE" and status != "EXCLUDED_SEPARATE_IP_TYPE":
            errors.append(f"{rid}: software certificate cannot count as patent")
        url = urlsplit(r["original_url"])
        if url.scheme not in {"http", "https"} or not url.netloc:
            errors.append(f"{rid}: missing stable original locator")
        identity = normalized(kind, r["identity_key"])
        key = (kind, identity)
        if key in seen:
            errors.append(f"{rid}: duplicate normalized sample ID, previously {seen[key]}")
        seen[key] = rid
        family = r["family_key"].strip()
        if family:
            families[(actor, family)].add(identity)
        canonical_id = r["canonical_source_id"].strip()
        if status == CANONICAL:
            o = sources.get(canonical_id)
            if not o:
                errors.append(f"{rid}: canonical source missing: {canonical_id}")
            else:
                if normalized(kind, o.get("source_key", "")) != identity:
                    errors.append(f"{rid}: canonical source identity mismatch: {canonical_id}")
        elif canonical_id:
            errors.append(f"{rid}: only CANONICAL_VERIFIED may point to canonical source")
        if not r["note"].strip():
            errors.append(f"{rid}: missing case interpretation")
    if errors:
        for error in errors:
            print("ERROR:", error)
        raise SystemExit(1)
    print(f"OUTPUT PILOT SAMPLE AUDIT PASS: {len(rows)} example rows, NOT an institution output census")
    for (actor, family), keys in sorted(families.items()):
        if len(keys) > 1:
            print(f"PATENT FAMILY LINK: {actor} / {family}: {len(keys)} distinct publication identities -> one family under review")
    print("MEASUREMENT STATUS: DISCOVERY_PARTIAL for all three pilot actors")
    print("YEARLY OUTPUT TOTALS: NOT_MEASURED — do not construct rankings from these sample rows")

if __name__ == "__main__":
    main()
