#!/usr/bin/env python3
"""Archive Kutateladze Institute official YEARLY article catalogs, without claiming census completeness.

Data output is DISCOVERY_PARTIAL until independent recall, DOI identity, relevant-topic
and institutional-affiliation reconciliation passes. Never add these raw rows to canonical Sources.

Usage:
    python tools/itp_catalog_extract.py --probe
    python tools/itp_catalog_extract.py --years 2021 2022 2023 2024 2025 --output analysis/output-measurement/itp-annual-raw

Network: only https://www.itp.nsc.ru/publikacii/<YEAR>/<YEAR>stati[...].
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urljoin, urlsplit

from bs4 import BeautifulSoup

YEARS = {2021, 2022, 2023, 2024, 2025}
DOMAIN = "www.itp.nsc.ru"
HINT = re.compile(
    r"heat pipe|vapor chambe|wick|capillary|microchannel|microfluidic|"
    r"boiling|dryout|evaporat|condensat|thermal management|heat transfer|"
    r"liquid film|thermocapillary|cooling|spray|heat flux|"
    r"теплов(ая|ые|ых|ой) труб|капилл|микроканал|кипен|испарен|"
    r"теплообмен|охлажден|пленк|теплового поток",
    re.I,
)
HEADERS = ("year", "index_on_site", "source_page", "bibliography", "doi_links",
           "relevance_review_hint", "identity_review_state")
UA = "Russia-Thermal public academic catalog audit/0.1 (research metadata; low-rate)"

def path_for(year: int, page: int) -> str:
    if page == 1:
        return f"https://{DOMAIN}/publikacii/{year}/{year}stati.html"
    return f"https://{DOMAIN}/publikacii/{year}/{year}stati/{page}.html"

def fetch(url: str):
    parts = urlsplit(url)
    if parts.scheme != "https" or parts.hostname != DOMAIN:
        raise ValueError("off-allowlist request rejected")
    err = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html"})
            with urllib.request.urlopen(req, timeout=22) as resp:
                payload = resp.read(2_500_000)
                if len(payload) >= 2_500_000:
                    raise ValueError("response exceeds size bound")
                return payload.decode(resp.headers.get_content_charset() or "utf-8", errors="replace")
        except (OSError, TimeoutError, ValueError) as exc:
            err = exc
            time.sleep(0.7 + attempt * 1.2)
    raise RuntimeError(f"fetch failed: {url}: {err}")

def count_pages(year: int, html: str) -> int:
    soup = BeautifulSoup(html, "html.parser")
    pages = {1}
    pattern = re.compile(rf"/publikacii/{year}/{year}stati/(\d+)\.html$")
    for tag in soup.find_all("a", href=True):
        path = urlsplit(urljoin(path_for(year, 1), tag["href"])).path
        m = pattern.search(path)
        if m:
            pages.add(int(m.group(1)))
    return max(pages)

def parse_entries(year: int, page: int, html: str):
    soup = BeautifulSoup(html, "html.parser")
    for element in soup(["script", "style", "nav", "footer", "header"]):
        element.decompose()
    text = soup.get_text("\n", strip=True)
    lines = [re.sub(r"\s+", " ", s).strip() for s in text.split("\n") if s.strip()]
    # Page lists have stable indices 1-20, 21-40, 41-60 ... .
    start = (page - 1) * 20 + 1
    end = start + 19
    indexes = [(i, int(line)) for i, line in enumerate(lines)
               if line.isdecimal() and start <= int(line) <= end]
    records = []
    seen = set()
    for pos, idx in indexes:
        if idx in seen:
            continue
        # Extract after the numbered item until the next numbered item.
        # The site header/footer contains year links: do not let them become articles.
        nextpos = next((p for p, _ in indexes if p > pos), len(lines))
        body = " ".join(lines[pos + 1:nextpos]).strip()
        if not body or len(body) < 35 or "//" not in body:
            continue
        if "Россия, 630090" in body:
            body = body.split("Россия, 630090", 1)[0].strip()
        # Exclude pagination at the tail of the page.
        body = re.split(r"\s+1 2 3(?:\s|$)", body)[0].strip()
        doi = re.findall(r"10\.\d{4,9}/[^\s;,)]+", body, flags=re.I)
        records.append({
            "year": year,
            "index_on_site": idx,
            "source_page": path_for(year, page),
            "bibliography": body[:5000],
            "doi_links": ";".join(sorted(set(x.rstrip(".") for x in doi))),
            "relevance_review_hint": "KEYWORD_CANDIDATE" if HINT.search(body) else "NOT_KEYWORD_MATCHED",
            "identity_review_state": "NEEDS_DOI_VERSION_AND_AFFILIATION_REVIEW",
        })
        seen.add(idx)
    return records

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--probe", action="store_true")
    ap.add_argument("--years", nargs="+", type=int, default=sorted(YEARS))
    ap.add_argument("--output", default="analysis/output-measurement/itp-annual-raw")
    args = ap.parse_args()
    if not set(args.years).issubset(YEARS):
        ap.error("year not on approved 2021–2025 allowlist")
    output = Path(args.output)
    output.mkdir(parents=True, exist_ok=True)
    run = {"date_utc": datetime.now(timezone.utc).isoformat(),
           "status": "DISCOVERY_PARTIAL", "scope": "institution full-field article catalog (NOT relevant output)",
           "not_census": "site explicitly warns bibliography is incomplete",
           "years": {}, "complete_page_retrieval": False}
    all_complete = True
    for year in args.years:
        url = path_for(year, 1)
        try:
            initial = fetch(url)
            total_pages = count_pages(year, initial)
            if total_pages > 40:
                raise RuntimeError("pagination exceeds safety limit 40")
            pages = {1: initial}
            failures = []
            if not args.probe:
                with ThreadPoolExecutor(max_workers=3) as pool:
                    futures = {pool.submit(fetch, path_for(year, n)): n
                               for n in range(2, total_pages+1)}
                    for fut in as_completed(futures):
                        n = futures[fut]
                        try:
                            pages[n] = fut.result()
                        except Exception as exc:
                            failures.append({"page": n, "error": str(exc)[:300]})
            rows = []
            for page, html in sorted(pages.items()):
                rows.extend(parse_entries(year, page, html))
            unique = {(r["year"], r["index_on_site"]): r for r in rows}
            rows = [unique[x] for x in sorted(unique)]
            expected = set(range(1, max(r["index_on_site"] for r in rows)+1)) if rows else set()
            missing_ordinals = sorted(expected - {r["index_on_site"] for r in rows})
            with (output / f"{year}-candidates.tsv").open("w", encoding="utf-8", newline="") as h:
                writer = csv.DictWriter(h, fieldnames=HEADERS, delimiter="\t")
                writer.writeheader()
                writer.writerows(rows)
            complete = not args.probe and not failures and len(pages) == total_pages and not missing_ordinals and bool(rows)
            all_complete &= complete
            run["years"][str(year)] = {
                "discovered_pages": total_pages, "retrieved_pages": len(pages),
                "raw_catalog_entries": len(rows), "max_index": max([r["index_on_site"] for r in rows] or [0]),
                "missing_ordinals": missing_ordinals[:100], "page_errors": failures,
                "page_retrieval_complete": complete,
                "warning": "raw official-site entries, NOT relevant paper count / NOT external-reconciled",
            }
            print(f"{year}: pagination={total_pages}; retrieved={len(pages)}; raw_rows={len(rows)}; "
                  f"missing_ordinals={len(missing_ordinals)}; errors={len(failures)}; complete={complete}", flush=True)
        except Exception as exc:
            all_complete = False
            run["years"][str(year)] = {"error": str(exc)[:400], "page_retrieval_complete": False}
            print(f"{year}: retrieval FAILED: {exc}", flush=True)
    run["complete_page_retrieval"] = all_complete
    with (output / "retrieval-manifest.json").open("w", encoding="utf-8") as h:
        json.dump(run, h, ensure_ascii=False, indent=2)
        h.write("\n")
    # 'probe' tests connectivity; full mode makes error visible but still uploads partial artifacts.
    if all(not r.get("retrieved_pages") for r in run["years"].values()):
        raise SystemExit("NO CATALOG PAGES RETRIEVED")
    if args.probe:
        print("PROBE ONLY: no completeness claim")
    if not all_complete and not args.probe:
        print("PARTIAL RETRIEVAL — NOT A CENSUS; retain manifest and retry failed pages")

if __name__ == "__main__":
    main()
