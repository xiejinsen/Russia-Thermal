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
- legacy monolithic 10Q paths are compatibility stubs only.

## Registers

- [Decision-grade Source Register](sources/README.md)
- [Journal Ranking Register](journal_ranking_register.md)
- [Russia Domestic University Ranking Register](russia_domestic_ranking_register.md)

## Audits

- [Traceability Audit — 2026-10-03](evidence_traceability_audit_2026-10-03.md)
- [Repository Completeness Matrix](qa/README.md)

## Canonical rules

- source register is the central evidence index;
- decision files must also contain local original-source links;
- repository completeness matrix must contain **one current QA snapshot**; historical QA changes belong in root `CHANGELOG.md`, not appended as contradictory current states;
- rankings are metadata, never substitutes for technical evidence.

## Future scaling

If `sources/README.md` becomes difficult to navigate, split it by evidence class while retaining a single index. Do not duplicate independent source records across multiple live registries.
