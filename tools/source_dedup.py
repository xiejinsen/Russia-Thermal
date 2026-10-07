#!/usr/bin/env python3
"""Pre-ingest SOURCE deduplication helper.

Examples:
  python tools/source_dedup.py --scan
  python tools/source_dedup.py --source-type PAPER --source-key "DOI:10.x/abc" \
      --title "Example paper" --year 2025 --authors "A. Author; B. Author"

Exit codes in candidate mode:
  0 = no exact/fuzzy match
  1 = fuzzy match(es), manual review required
  2 = exact canonical identity match, reuse existing Source
"""

from __future__ import annotations

import argparse
import difflib

import v2repo


def candidate_matches(db, candidate):
    exact = []
    fuzzy = []
    candidate_fps = set(v2repo.source_identity_fingerprints(candidate))
    c_type = v2repo.scalar_text(candidate.get("source_type")).upper()
    c_title = v2repo.normalize_title(v2repo.source_title_text(candidate))
    c_year = v2repo.source_year(candidate)
    c_authors = v2repo.source_author_tokens(candidate)

    for source in db["source"]:
        source_fps = set(v2repo.source_identity_fingerprints(source))
        shared = candidate_fps & source_fps
        if shared:
            exact.append((source["id"], sorted(shared)))
            continue

        if not c_title or len(c_title) < 20:
            continue
        if v2repo.scalar_text(source.get("source_type")).upper() != c_type:
            continue

        s_year = v2repo.source_year(source)
        if c_year and s_year and abs(c_year - s_year) > 1:
            continue

        s_title = v2repo.normalize_title(v2repo.source_title_text(source))
        if not s_title:
            continue

        ratio = difflib.SequenceMatcher(None, c_title, s_title).ratio()
        threshold = 0.92 if c_type == "PAPER" else 0.95 if c_type == "PATENT" else 0.98
        if ratio < threshold:
            continue

        s_authors = v2repo.source_author_tokens(source)
        if c_authors and s_authors and not (c_authors & s_authors) and ratio < 0.98:
            continue

        fuzzy.append((source["id"], ratio, c_year, s_year))

    return exact, sorted(fuzzy, key=lambda item: item[1], reverse=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--scan", action="store_true", help="scan existing canonical Sources for fuzzy-review candidates")
    ap.add_argument("--source-type")
    ap.add_argument("--source-key")
    ap.add_argument("--primary-url")
    ap.add_argument("--title")
    ap.add_argument("--year")
    ap.add_argument("--authors")
    ap.add_argument("--inventors")
    args = ap.parse_args()

    db = v2repo.load_all()

    if args.scan:
        warnings = v2repo.source_dedup_warnings(db)
        if not warnings:
            print("SOURCE DEDUP SCAN CLEAN")
            return
        print("SOURCE DEDUP REVIEW WARNINGS")
        for warning in warnings:
            print("WARNING:", warning)
        return

    if not args.source_type:
        ap.error("--source-type is required in candidate mode")

    candidate = {
        "id": "CANDIDATE",
        "source_type": args.source_type,
        "source_key": args.source_key or "",
        "primary_url": args.primary_url or "",
        "title": args.title or "",
        "published_year": args.year or "",
        "authors": args.authors or "",
        "inventors": args.inventors or "",
    }

    exact, fuzzy = candidate_matches(db, candidate)

    if exact:
        print("EXACT SOURCE MATCH — REUSE EXISTING SOURCE")
        for source_id, fingerprints in exact:
            print(f"- {source_id}: {', '.join(fingerprints)}")
        raise SystemExit(2)

    if fuzzy:
        print("POSSIBLE SOURCE DUPLICATE — MANUAL REVIEW REQUIRED")
        for source_id, ratio, candidate_year, source_year in fuzzy:
            print(
                f"- {source_id}: title_similarity={ratio:.3f}, "
                f"years={candidate_year}/{source_year}"
            )
        raise SystemExit(1)

    print("NO DUPLICATE CANDIDATE FOUND")


if __name__ == "__main__":
    main()
