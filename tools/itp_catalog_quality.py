#!/usr/bin/env python3
"""Read-only validation of Kutateladze raw official article archive.

Checks that an article discovery table is a traceable *institute-wide*
bibliography snapshot. It does not assert topical relevance, unique DOI works,
completeness of the institutional bibliography, or team attribution.
"""
from __future__ import annotations

import csv
import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "analysis" / "output-measurement" / "itp-annual-raw"
YEARS = range(2021, 2026)

def main():
    manifest_path = BASE / "retrieval-manifest.json"
    if not manifest_path.exists():
        print("ITP CATALOG QUALITY: NO ARCHIVE SNAPSHOT YET (discovery workflow separate)")
        return
    data = json.loads(manifest_path.read_text(encoding="utf-8"))
    errors = []
    raw_rows = 0
    hints = Counter()
    for year in YEARS:
        y = str(year)
        p = BASE / f"{year}-candidates.tsv"
        m = data.get("years", {}).get(y, {})
        if not p.exists() and m.get("retrieved_pages"):
            errors.append(f"{year}: retrieved pages but no candidate TSV")
            continue
        if not p.exists():
            print(f"ITP CATALOG {year}: NONE retrieved; NOT_MEASURED")
            continue
        with p.open(encoding="utf-8", newline="") as h:
            items = list(csv.DictReader(h, delimiter="\t"))
        indexes = set()
        for r in items:
            try:
                i = int(r["index_on_site"])
                record_year = int(r["year"])
            except (KeyError, ValueError):
                errors.append(f"{year}: invalid index/year")
                continue
            if record_year != year or i < 1:
                errors.append(f"{year}: bad record year/index {record_year}/{i}")
            if i in indexes:
                errors.append(f"{year}: duplicate site ordinal {i}")
            indexes.add(i)
            if not r.get("bibliography") or len(r["bibliography"]) < 25:
                errors.append(f"{year} #{i}: short/missing citation")
            source_url = r.get("source_page", "")
            if not re.match(
                rf"^https://www\.itp\.nsc\.ru/publikacii/{year}/{year}stati(?:\.html|/[0-9]+\.html)$",
                source_url
            ):
                errors.append(f"{year} #{i}: invalid source page {source_url}")
            hints[r.get("relevance_review_hint") or "UNKNOWN"] += 1
        raw_rows += len(items)
        listed = m.get("raw_catalog_entries")
        if listed != len(items):
            errors.append(f"{year}: manifest rows {listed} != TSV rows {len(items)}")
        print(
            f"ITP CATALOG {year}: {len(items)} raw official-site entries, "
            f"{m.get('retrieved_pages','?')}/{m.get('discovered_pages','?')} pages, "
            f"complete_page_retrieval={m.get('page_retrieval_complete',False)}"
        )
    if errors:
        for err in errors:
            print("ERROR:", err)
        raise SystemExit(1)
    print(f"ITP RAW-CATALOG INTEGRITY PASS: {raw_rows} source-indexed rows")
    print(f"KEYWORD TRIAGE HINTS ONLY: {dict(hints)}")
    print("NOT institution paper total, NOT thermal-relevant paper total, NOT DOI-deduplicated")
    print(f"RETRIEVAL-MANIFEST PAGE STATUS: {data.get('complete_page_retrieval',False)}")
    print("OFFICIAL INSTITUTION CATALOG ITSELF DECLARES INCOMPLETE COVERAGE")

if __name__ == "__main__":
    main()
