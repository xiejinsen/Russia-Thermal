#!/usr/bin/env python3
"""Low-rate, resumable recovery of missing Kutateladze 2021 official article pages.

Only previously absent page URLs are fetched; 2022–2025 and existing canonical
SOURCEs are never changed. Raw bibliography records are NOT paper totals.
"""
from __future__ import annotations

import argparse
import csv
import json
import time
from datetime import datetime, timezone
from pathlib import Path

from itp_catalog_extract import HEADERS, fetch, parse_entries, path_for

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "analysis/output-measurement/itp-annual-raw"
TSV = BASE / "2021-candidates.tsv"
MANIFEST = BASE / "retrieval-manifest.json"
RECOVERY = BASE / "2021-recovery-attempts.json"

def load_rows():
    with TSV.open(encoding="utf-8", newline="") as h:
        return list(csv.DictReader(h, delimiter="\t"))

def observed_pages(rows):
    pages = set()
    for row in rows:
        url = row.get("source_page", "")
        if url == path_for(2021, 1):
            pages.add(1)
        else:
            for page in range(2, 28):
                if url == path_for(2021, page):
                    pages.add(page)
                    break
    return pages

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max-pages", type=int, default=20)
    ap.add_argument("--min-delay", type=float, default=2.0)
    args = ap.parse_args()
    if not 1 <= args.max_pages <= 20:
        ap.error("max-pages must be between 1 and 20")
    if args.min_delay < 1.5:
        ap.error("min-delay must be at least 1.5 seconds")
    rows = load_rows()
    old_pages = observed_pages(rows)
    missing = sorted(set(range(1, 28)) - old_pages)
    attempts = []
    recovered = []
    for page in missing[: args.max_pages]:
        url = path_for(2021, page)
        try:
            html = fetch(url)
            found = parse_entries(2021, page, html)
            ids = {r["index_on_site"] for r in found}
            expected = set(range((page - 1)*20+1, min(page*20, 521)+1))
            if not expected.issubset(ids):
                raise RuntimeError(f"site page {page} missing expected ordinals: {sorted(expected-ids)[:10]}")
            recovered += found
            attempts.append({"page": page, "outcome": "RECOVERED", "count": len(found), "url": url})
            print(f"RECOVERED {page}: {len(found)} entries", flush=True)
        except Exception as ex:
            attempts.append({"page": page, "outcome": "FAILED", "message": str(ex)[:220], "url": url})
            print(f"UNAVAILABLE {page}: {str(ex)[:180]}", flush=True)
        time.sleep(args.min_delay)

    report = {"assessed_at": datetime.now(timezone.utc).isoformat(),
              "pages_missing_before": missing, "attempts": attempts,
              "pages_recovered_in_attempt": [r["page"] for r in attempts if r["outcome"]=="RECOVERED"],
              "scope": "official 2021 article listing only; not complete institution output"}
    RECOVERY.write_text(json.dumps(report, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    if not recovered:
        print("NO SUCCESSFUL PAGE RECOVERY: keeping canonical raw CSV and yearly manifest unchanged")
        return
    by_index = {int(r["index_on_site"]):r for r in rows}
    for row in recovered:
        idx = int(row["index_on_site"])
        if idx in by_index and row["bibliography"] != by_index[idx]["bibliography"]:
            raise SystemExit(f"Conflicting catalog record at site ordinal {idx}; refuse overwrite")
        by_index[idx] = row
    with TSV.open("w", encoding="utf-8", newline="") as h:
        writer = csv.DictWriter(h, fieldnames=HEADERS, delimiter="\t")
        writer.writeheader()
        writer.writerows([by_index[i] for i in sorted(by_index)])
    data=json.loads(MANIFEST.read_text(encoding="utf-8"))
    yr=data["years"]["2021"]
    pages=observed_pages(list(by_index.values()))
    miss=sorted(set(range(1,28))-pages)
    missing_ordinals=sorted(set(range(1,522))-set(by_index))
    yr.update({"retrieved_pages":len(pages),
               "raw_catalog_entries":len(by_index),
               "max_index":max(by_index),
               "missing_pages":miss,
               "missing_ordinals":missing_ordinals,
               "page_errors":[{"page":a["page"],"error":a["message"]}
                              for a in attempts if a["outcome"]=="FAILED"],
               "page_retrieval_complete":len(pages)==27 and not missing_ordinals})
    data["complete_page_retrieval"]=all(v.get("page_retrieval_complete",False) for v in data["years"].values())
    data["2021_last_recovery_at"]=report["assessed_at"]
    MANIFEST.write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(f"2021 after recovery: pages {len(pages)}/27; source records {len(by_index)}; missing pages {miss}",flush=True)
    print("RAW SITE ARCHIVE ONLY; scholarly output counts remain NOT_MEASURED")

if __name__=="__main__":
    main()
