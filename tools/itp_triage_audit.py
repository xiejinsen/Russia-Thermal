#!/usr/bin/env python3
"""Cross-check staged ITP title-keyword leads against the official raw archive.

Triage is intentionally conservative and incomplete. It must never be treated as
an admitted research-paper corpus or a deduplicated institution-year output count.
"""
from __future__ import annotations

import csv
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "analysis/output-measurement/itp-annual-raw"
TRIAGE = ROOT / "analysis/output-measurement/pilot-v1/triage"
LEVELS = {"HIGH", "MEDIUM", "AMBIGUOUS"}

def read_rows(p: Path):
    if not p.exists():
        raise RuntimeError(f"Missing required TSV: {p}")
    with p.open(encoding="utf-8-sig", newline="") as h:
        return list(csv.DictReader(h, delimiter="\t"))

def main():
    errors = []
    counts = Counter()
    for year in range(2021, 2026):
        raw = read_rows(RAW / f"{year}-candidates.tsv")
        staged = read_rows(TRIAGE / f"{year}-keyword-candidates.tsv")
        index = {str(r.get("index_on_site", "")): r for r in raw}
        if len(index) != len(raw):
            errors.append(f"{year}: duplicate official-site record ordinal in raw archive")
        seen = set()
        for row in staged:
            rid = str(row.get("archive_index", "")).strip()
            if rid in seen:
                errors.append(f"{year}: duplicate staged ordinal {rid}")
            seen.add(rid)
            src = index.get(rid)
            if src is None:
                errors.append(f"{year}: staged ordinal {rid} absent from raw archive")
                continue
            if row.get("year") != str(year):
                errors.append(f"{year}/{rid}: mismatched staged year")
            if row.get("source_page") != src.get("source_page"):
                errors.append(f"{year}/{rid}: original official locator mismatch")
            if not src.get("bibliography", "").startswith(row.get("citation_excerpt", "")):
                errors.append(f"{year}/{rid}: staged citation not derived from raw record")
            priority = row.get("triage_priority", "")
            if priority not in LEVELS:
                errors.append(f"{year}/{rid}: invalid review priority {priority}")
            if row.get("review_state") != "UNREVIEWED_NOT_COUNTABLE":
                errors.append(f"{year}/{rid}: machine lead was incorrectly promoted")
            counts[priority] += 1
        print(f"ITP TITLE TRIAGE {year}: {len(staged)} unreviewed leads derived from {len(raw)} raw entries")
    if errors:
        for e in errors:
            print("ERROR:", e)
        raise SystemExit(1)
    print(f"ITP TRIAGE INTEGRITY PASS: {sum(counts.values())} NOT-YET-ADMITTED entries")
    print(f"Review-queue priority: {dict(counts)}")
    print("NEITHER INSTITUTION OUTPUT NOR RELEVANCE-REVIEWED, no canonical Source promotion")

if __name__ == "__main__":
    main()
