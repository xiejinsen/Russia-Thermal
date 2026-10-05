# Repository QA module

> Modular QA section. Navigation: [Repository QA Index](../README.md).

## Repository modularity QA — 2026-10-05

### Goal

Prevent small evidence/status changes from requiring edits to large aggregate Markdown files.

### Completed migrations

- `PROGRESS.md`: current-state page only; historical sections moved to `history/progress/`.
- `CHANGELOG.md`: short current index; historical entries moved to `history/changelog/`.
- paper 10Q: **38** per-source cards.
- patent 10Q: **14** per-source cards.
- paper briefs: **44** per-source cards.
- patent briefs: **14** per-source cards.
- source register: **29** modules under `evidence/sources/sections/`.
- bibliography: **13** topic modules under `evidence/bibliography/sections/`.
- repository QA: modular checks under `evidence/qa/sections/`.

### Retired aggregate files

Deleted after current-backlink migration:
- former monolithic paper/patent 10Q aggregates;
- former monolithic paper/patent brief libraries;
- former monolithic source register;
- former monolithic human-readable bibliography;
- former monolithic repository completeness matrix.

### Backlink result

Before deletion, **105 current non-history Markdown files** were scanned for retired aggregate filenames.

Result:
**0 current-path dependencies remained.**

Final QA then corrected two stale references inside modular QA content and one stale 10Q compatibility note.

### Modularity rule

Split when:
- many independently changing records share one file;
- a small update creates a large unrelated diff;
- the file is an append-only historical log;
- navigation becomes materially harder as evidence grows.

Do **not** split merely because a file is large when it represents one coherent decision object, matrix, deep-dive analysis, or report.

### Remaining large files

Large current files that remain are predominantly coherent decision objects:
- capability atlases / mirrors;
- Stage-0 scorecards and PoC matrices;
- partner cards;
- focused Russia–China pressure tests;
- final-report synthesis artifacts.

Review them by **change locality**, not by byte size alone.

### Research-state effect

**No research-progress increase.**

Root README was also reduced from a dynamic project-status duplicate to a stable project/navigation entry point; the previous content is archived under `history/readme/`.

Repository governance state: **MODULARITY PASS**.
Research progress remains ~82%.

### Final entry-point integrity audit

Validated **27** core repository entry/index files:
- root README / CONTINUE_HERE / PROGRESS / CHANGELOG;
- repository architecture;
- workstream READMEs;
- evidence indexes;
- history indexes.

Two migrated 10Q index links still pointed to the retired source-register path. They were corrected to `evidence/sources/README.md`.

Final result:
**27/27 entry points pass; 0 known current internal dead links in the audited entry layer.**
