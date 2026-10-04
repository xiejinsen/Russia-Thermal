# Evidence & QA

Last reviewed: 2026-10-04

## Role

Cross-workstream evidence governance and indexes.

Technical conclusions should live in workstreams 03–09, not here.

## Standards

- [Evidence Standard](EVIDENCE_STANDARD.md)
- [Ranking Metadata Standard](ranking_metadata_standard.md)
- [Paper Metadata Template](paper_metadata_template.md)

## Human-readable entry point

- [Human-Readable Bibliography](readable_bibliography.md) — paper/patent title links with authors and journal/assignee metadata for decision-relevant evidence.
- [Decision-Grade Paper Briefs](paper_briefs_decision_grade.md) — background, method, conclusion and mobile/chip insight for each current key paper.
- [Decision-Grade Patent Briefs](patent_briefs_decision_grade.md) — problem, claim/control point, IP crowding and mobile/chip insight for each current key patent.

## Registers

- [Decision-grade Source Register](source_register.md)
- [Journal Ranking Register](journal_ranking_register.md)
- [Russia Domestic University Ranking Register](russia_domestic_ranking_register.md)

## Audits

- [Traceability Audit — 2026-10-03](evidence_traceability_audit_2026-10-03.md)
- [Repository Completeness Matrix](repository_completeness_matrix.md)

## Canonical rules

- source register is the central evidence index;
- decision files must also contain local original-source links;
- repository completeness matrix must contain **one current QA snapshot**; historical QA changes belong in root `CHANGELOG.md`, not appended as contradictory current states;
- rankings are metadata, never substitutes for technical evidence.

## Future scaling

If `source_register.md` becomes difficult to navigate, split it by evidence class while retaining a single index. Do not duplicate independent source records across multiple live registries.
