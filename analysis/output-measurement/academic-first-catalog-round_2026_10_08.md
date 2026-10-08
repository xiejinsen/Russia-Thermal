# Academic-First Research Routing and Kutateladze Annual-Catalog Pilot

date: 2026-10-08
phase: IN_PROGRESS — ACADEMIC_SCOPE_FIXED / LIVE_YEAR_PROBE_SUCCESS / FULL_EXTRACTION_GATED

## User instruction — academic organizations first

Collaboration research should prioritize Russian **universities, academic laboratories and academic research institutes**. Companies remain important as application, engineering, market baseline or coauthorship/technology-transfer context, but should NOT consume equal-depth research effort.

Root Actor registry:
`00-project/russia-root-actor-research-routing.tsv`

Current 31 Russian root Actor classifications:
- ACADEMIC_UNIVERSITY: 19
- ACADEMIC_RESEARCH_INSTITUTE: 7
- APPLIED_RESEARCH_ORG: 1
- INDUSTRIAL_ORG: 1
- COMPANY: 3

Academic PRIMARY: 26
Applied SELECTIVE: 1
Industry/company CONTEXT_ONLY: 4

These are root Actor registry categories, not '29 Capability-owning roots' denominator. Lab and Person actors inherit root routing; their existing Actor identities and canonical evidence links remain unchanged.

All Institution detail pages now have a bound researchClass/researchDepth field, so academic, applied research and company records are distinguishable to leadership.

## Kutateladze — official publication archive feasibility

Public source:
https://www.itp.nsc.ru/publikacii.html

The institutional portal explicitly states that this publication section is **still being populated** and not all publications are yet available.

Live GitHub Action probed **the first Article page** for each year 2021–2025, and counted linked pagination endpoints:

| Year | Pages discovered in official Article listing | Probe retrieved | Raw records on first page (parser v0.1) | Status |
|---|---:|---:|---:|---|
| 2021 | 27 | first page | 20 | ENTRY_PAGE_RETRIEVED |
| 2022 | 14 | first page | 20 | ENTRY_PAGE_RETRIEVED |
| 2023 | 16 | first page | 19 | ENTRY_PAGE_RETRIEVED_WITH_PARSER_GAP |
| 2024 | 14 | first page | 20 | ENTRY_PAGE_RETRIEVED |
| 2025 | 14 | first page | 19 | ENTRY_PAGE_RETRIEVED_WITH_PARSER_GAP |

Pagination is **85 Article pages** in the institutional archive. The 2021 final page includes site index #521, which is not an independently deduplicated five-year relevant output count and must not be used as one.

The first-page parser had two gaps, so the extractor has been revised to preserve atypical bibliographic entries rather than dropping them for a missing '//'.

Crawler:
`tools/itp_catalog_extract.py`

The script:
- only fetches the explicitly allowlisted annual official Article URLs;
- archives year-by-year candidate records with original URL, year and site index;
- keeps DOI/author/relevance review as separate future steps;
- uses manifest completeness fields to prevent unreviewed rows becoming definitive publication counts;
- never promotes discovered entries directly into canonical SOURCE objects.

Important: even COMPLETE_PAGE_RETRIEVAL would establish only retrieval of the publicly available archive, NOT a complete institution census, because the institute disclaims site completeness.

## Research priority shift

Previous three-party pilot:
Kutateladze / MPEI / Thercon.

Revised academic target set:
1. Kutateladze — annual institution publication/patent lists, near-term census calibration;
2. MPEI — named academic heat-transfer teams and 2021–2025 author/affiliation reconciliation;
3. ITP Ural Branch of RAS — LHP research laboratory output and inventor lineage.

Thercon stays as context-only industrial engineering and patent-family dedup example. No company-wide deep patent survey is now planned.

## Current scientific conclusions

No primary technical portfolio conclusion changed.
No new academic collaboration contract is inferred.
No phone-scale product performance inferred from institutional bibliometric volume.
SOFTWARE_SYSTEM remains LIMITED_SCAN.
No laboratory experiments or outreach.

## Goal Regression Checkpoint

| Goal | State | Gap |
|---|---|---|
| Russian academic institution, lab and scholar map | IN_PROGRESS | 19/29 Capability roots currently have full profiles; remaining academic profiles/people ownership |
| Thermal capability atlas | SUBSTANTIALLY_ANSWERED | 34 Russia Capabilities; keep searching only decision-relevant missing lines |
| Phone/tablet/wearable transfer | CLASSIFIED_FOR_CURRENT_GRAPH | 34/34 classification complete; real product-level transfer unverified |
| Institution paper and patent output trends | IN_PROGRESS / PRIMARY GAP | official archive batch retrieval, DOI/translations, patents by publication vs family, year-level relevance, completeness |
| Collaboration, partner history and influence | IN_PROGRESS | academic vs company evidence typing, high-signal personnel and organization links |
| China comparison and why Russia | SCOPED_PHASE1_COMPLETE | refresh only when new qualified difference emerges |
| Collaboration portfolio and long-term internal team building | IN_PROGRESS | academic team engagement opportunities, knowledge transfer, IP, internal capabilities |
| Leadership site/report | WEB_CLASSIFICATION_CONNECTED | clarify academic-first hierarchy and add only reconciled output metrics |

No drift: academic partner research is now the main effort; commercial institutions are context only, not equal-ranked partners; no experimental evidence requested; no university prestige used as a proxy for mobile product competence.

## Next smallest task

Perform all-page Kutateladze archive traversal 2021–2025, with parser QA, then tag relevant thermal articles with DOI and translated-version dedup and reconcile external bibliographic missingness. Avoid further broad company census work.
