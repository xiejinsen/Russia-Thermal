# Evidence & QA

Last reviewed: 2026-10-05

## Role

Cross-workstream evidence governance and indexes.

Technical conclusions should live in workstreams 03–09, not here.

## Insight methodology

- [Mobile Thermal Insight — Paper & Patent 10Q Method](mobile_thermal_insight_10q_method.md) — adapted from the classic paper 10-question framework for mobile/chip thermal technology and collaboration decisions.

## Standards

- [Evidence Standard](EVIDENCE_STANDARD.md)
- [Ranking Metadata Standard](ranking_metadata_standard.md)
- [Paper Metadata Template](paper_metadata_template.md)
- [Patent Metadata Template](patent_metadata_template.md)

## Industry evidence

- [Industry / Vendor Evidence](industry/README.md) — one original industry-relevant source per stable card; organization READMEs remain thin indexes.
- Papers and patents are never duplicated into industry cards; industry indexes link to their existing evidence cards.

## Human-readable entry point

- [Human-Readable Bibliography](bibliography/README.md) — paper/patent title links with authors and journal/assignee metadata for decision-relevant evidence.
- [Decision-Grade Paper Briefs](briefs/papers/README.md) — background, method, conclusion and mobile/chip insight for each current key paper.
- [Decision-Grade Patent Briefs](briefs/patents/README.md) — problem, claim/control point, IP crowding and mobile/chip insight for each current key patent.
- [Paper 10Q Decision Cards](10q/papers/README.md) — per-paper Q1–Q10 deep-reading cards; one paper per file.
- [Patent 10Q Decision Cards](10q/patents/README.md) — per-patent P1–P10 deep-reading cards; one patent per file.

## 10Q card architecture

- [10Q Evidence Card Index](10q/README.md)
- one source = one independently editable 10Q card;
- paper/patent cross-source synthesis is stored separately from individual cards;
- legacy monolithic 10Q files are retired; only per-source cards + indexes are live.

## Registers

- [Decision-grade Source Register](sources/README.md)
- [Journal Ranking Register](journal_ranking_register.md)
- [Russia Domestic University Ranking Register](russia_domestic_ranking_register.md)

## Audits

- [Traceability Audit — 2026-10-03](evidence_traceability_audit_2026-10-03.md)
- [Repository Completeness Matrix](qa/README.md)

## Canonical rules

- decision-relevant vendor/company/product/collaboration evidence uses `industry/` as its canonical detailed home when it is not already a paper or patent;
- one original industry source = one stable Industry ID/card; workstreams keep only decision interpretation and link back to the card;

- `sources/README.md` is the central evidence index; source records live in `sources/sections/`;
- decision files must also contain local original-source links;
- QA is modular under `qa/sections/`; current overall state belongs in `PROGRESS.md`, while dated/specialized QA modules remain scoped records;
- rankings are metadata, never substitutes for technical evidence.

## Future scaling

The industry layer, source register, bibliography, briefs, 10Q layer and QA are modular. Keep indexes thin and place new content in the smallest matching module; do not rebuild monolithic aggregate files.
