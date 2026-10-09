#!/usr/bin/env python3
"""Audit local relative Markdown targets without touching canonical content.

Usage: python tools/check_local_links.py
Exits 1 for missing local Markdown targets. External URLs and hash anchors are
not fetched; link targets inside code fences are intentionally excluded.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", ".venv", "node_modules", "dist", "_site", ".astro", "__pycache__"}
MARKDOWN_LINK = re.compile(r"(?<!!)\[[^\]]*\]\((<[^>]+>|[^)]+)\)")
REFERENCE_DEF = re.compile(r"^\s{0,3}\[[^\]]+\]:\s*(<[^>]+>|\S+)")
HTML_LINK = re.compile(r"""(?:href|src)=["']([^"']+)["']""")
FENCE = re.compile(r"^\s*(`{3,}|~{3,})")


def candidates(root: Path):
    for p in sorted(root.rglob("*.md")):
        if not any(part in SKIP_DIRS for part in p.relative_to(root).parts):
            yield p


def strip_code_fences(s: str):
    inside = False
    fence_char = ""
    fence_len = 0
    for line in s.splitlines():
        m = FENCE.match(line)
        if m:
            marker = m.group(1)
            if not inside:
                inside, fence_char, fence_len = True, marker[0], len(marker)
            elif marker[0] == fence_char and len(marker) >= fence_len:
                inside = False
            continue
        yield "" if inside else line


def targets(line: str):
    for m in MARKDOWN_LINK.finditer(line):
        value = m.group(1).strip()
        if value.startswith("<") and value.endswith(">"):
            value = value[1:-1]
        else:
            # The optional Markdown title follows whitespace after the URL.
            value = value.split(maxsplit=1)[0]
        yield value
    m = REFERENCE_DEF.match(line)
    if m:
        yield m.group(1).strip("<>")
    for m in HTML_LINK.finditer(line):
        yield m.group(1)


def check(root: Path):
    problems = []
    count = 0
    for source in candidates(root):
        for lineno, line in enumerate(strip_code_fences(source.read_text(encoding="utf-8")), 1):
            for raw in targets(line):
                if not raw or raw.startswith(("#", "/", "//", "mailto:", "data:", "javascript:")):
                    continue
                parts = urlsplit(raw)
                if parts.scheme or parts.netloc:
                    continue
                target = unquote(parts.path)
                if not target:
                    continue
                count += 1
                resolved = (source.parent / target).resolve()
                try:
                    resolved.relative_to(root.resolve())
                except ValueError:
                    problems.append((source, lineno, raw, "outside repo"))
                    continue
                if not resolved.exists():
                    problems.append((source, lineno, raw, "missing target"))
    return count, problems


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=ROOT)
    args = parser.parse_args()
    root = args.root.resolve()
    if not root.is_dir():
        parser.error(f"not a directory: {root}")
    count, issues = check(root)
    print(f"Local Markdown target scan: {count} links checked; {len(issues)} missing/invalid.")
    for source, line, url, reason in issues:
        print(f"{source.relative_to(root)}:{line}: {reason}: {url}")
    return 1 if issues else 0


if __name__ == "__main__":
    sys.exit(main())
