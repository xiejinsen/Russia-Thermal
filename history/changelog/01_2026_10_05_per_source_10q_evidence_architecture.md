# Changelog archive item 01

> Archived from the former monolithic `CHANGELOG.md` during modularization on 2026-10-05.

## 2026-10-05 — Per-source 10Q evidence architecture

### Why
The paper and patent 10Q layers had grown into two monolithic Markdown files (~86 KB for papers and ~26 KB for patents), making per-source revision, review history and linking unnecessarily difficult.

### Changed
- added `evidence/10q/` as the canonical deep-reading layer;
- migrated **38 paper cards** to `evidence/10q/papers/<card>.md`;
- migrated **14 patent cards** to `evidence/10q/patents/<card>.md`;
- added paper/patent indexes, templates and separate synthesis files;
- converted the former monolithic files into compatibility entry stubs so existing links remain valid;
- updated Evidence, Workstream 05, root README and repository architecture navigation.

### New rule
**One source = one independently editable 10Q card.**

Cross-source conclusions belong in `SYNTHESIS.md` or the relevant decision workstream, not inside an unrelated source card.

### Research-state effect
**No research-progress increase.**

This is an architecture/maintainability improvement; no technical conclusion or partner ranking changed.

---
