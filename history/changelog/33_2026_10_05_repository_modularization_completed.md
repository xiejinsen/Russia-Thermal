# 2026-10-05 — Repository modularization completed

### Why

High-churn aggregate Markdown files had grown large enough that a small evidence/status correction produced unrelated large diffs and made per-object maintenance difficult.

### Completed

- current status separated from progress history;
- changelog separated from immutable history entries;
- 38 paper 10Q cards and 14 patent 10Q cards stored per source;
- 44 paper briefs and 14 patent briefs stored per source;
- source register split into 29 modules;
- readable bibliography split into 13 modules;
- repository QA split into modular checks;
- all current references migrated to canonical indexes;
- seven retired aggregate files deleted after backlink verification.

### Governance rule

Modularize by **independent change unit**, not by file size alone.

Large coherent decision matrices / analyses may remain intact when a small update naturally changes the whole object.

### Research-state effect

**No progress increase.** Research remains ~82% complete.
