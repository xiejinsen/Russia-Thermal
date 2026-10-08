# Kutateladze 2021–2025 Article Catalog — Retrieval and First Screening

date: 2026-10-08
research_state: RAW_ARCHIVE_PARTIAL / 2022-2025_PAGES_RETRIEVED / TITLE_TRIAGE_COMPLETE / DOI_DEDUP_OPEN
scope: academic institution FIRST; mobile/compact electronics thermal HW and enabling mechanism, SOFTWARE_SYSTEM LIMITED_SCAN

## Observed site archive, NOT scholarly productivity totals

| Year | Listed pages | Retrieved pages | Raw extracted citations | Page coverage | Keyword-review queue |
|---|---:|---:|---:|---|---:|
| 2021 | 27 | 7 | 121 | INCOMPLETE | 11 |
| 2022 | 14 | 14 | 272 | PAGES_RETRIEVED | 44 |
| 2023 | 16 | 16 | 315 | PAGES_RETRIEVED | 47 |
| 2024 | 14 | 14 | 272 | PAGES_RETRIEVED | 49 |
| 2025 | 14 | 14 | 270 | PAGES_RETRIEVED | 35 |
| **Total** | **85** | **65** | **1250** | **20 pages absent** | **186** |

**Important denominators and limits:**
- The raw 1,250 records are articles indexed on Kutateladze's own site (entire institute, many unrelated fields), **not** 1,250 unique relevant thermal Papers.
- The 2022–2025 site pages have been retrieved with continuous site ordinals and no missing internal site entries *within the archived pages*. This does **not** mean the institute's scholarly output is comprehensively indexed.
- 2021 recovered pages are discontinuous (first 5 and last 2 pages); 20 middle pages failed due read timeouts. Do not report 2021 output rates until missing pages are recovered.
- Some original catalog citations contain an HTML DOI **hyperlink** whose href was not preserved by the first plain-text scraper; the `doi_links` field is frequently blank. This is a metadata-extraction limitation and **does not prove the article has no DOI**.
- Russian/English parallel versions or author bibliographic references can point to the same scientific work; site ordinal is not a deduplicated scientific-work ID.

## Automated TITLE-based triage results (not admissions)

| Year | High manual-review priority | Medium manual-review priority | Ambiguous/possible unrelated | Queue total |
|---|---:|---:|---:|---:|
| 2021 partial | 3 | 7 | 1 | 11 |
| 2022 | 14 | 28 | 2 | 44 |
| 2023 | 15 | 29 | 3 | 47 |
| 2024 | 21 | 28 | 0 | 49 |
| 2025 | 14 | 21 | 0 | 35 |
| **Total** | **67** | **113** | **6** | **186** |

This queue was created by keyword matching in the citation title (not the journal name) for heat pipes, microchannels, phase-change/boiling/dryout, capillarity, wettability and thermal diagnostics. A conflict heuristic only catches some unrelated cases.

**186 is neither a verified relevant-Paper count nor a completeness guarantee**: keyword hits include oil-reservoir microfluidics, chemistry microreactors and general boiling, while some transferable papers may not contain these tokens. The labels HIGH/MEDIUM reflect review scheduling, **not** mobile maturity, evidence confidence or partner priority.

See 5 by-year review queues:
`analysis/output-measurement/pilot-v1/triage/2021-keyword-candidates.tsv` through `2025-keyword-candidates.tsv`.

## Scientific sample interpreted

Curated 2024–2025 representative papers:
`analysis/output-measurement/pilot-v1/kutateladze-curated-2024-2025.md`

Important continuity:
1. Pavlenko/Shvetsov/Zhukov: HFE-7100 boiling in confined layers, capillary-porous and biphilic surfaces, crisis and dry spots, including 2025 output.
2. Kabov/Kochkin/Chinnov/Dementyev: interfacial liquid-film diagnostics, flat/slit microchannels, extreme-confinement gas/liquid interaction and local heating.
3. Surtaev/Serdyukov: nucleate boiling, wettability engineering, boiling microlayers and image-based diagnostics.

**This is current academic mechanism/diagnostics strength, not direct phone cooling maturity**. It supports the earlier P1 academic conversation rationale without reopening investment decisions.

## Primary-source identity example and correction

2025 site record #70:
- Main review `10.1016/j.applthermaleng.2025.127088`: direct immersion electronics-cooling survey for server, PCB power electronics and high-power-density components;
- Publisher-issued corrigendum `10.1016/j.applthermaleng.2025.127221`: fixes water latent-heat datum in Table 1 from 104.9 kJ/kg to 2442 kJ/kg;
- Main review is ONE scientific review work, not a phone device paper; corrigendum is linked correction, **not a second research output**.

Publisher:
https://www.sciencedirect.com/science/article/pii/S1359431125016801
https://www.sciencedirect.com/science/article/abs/pii/S1359431125018137

## Duplicate/identity rules applied

- No new canonical PAPER/PATENT objects were created; all candidate records remain in the output-measurement staging layer.
- DOI resolver should recover HTML href from publisher/official catalog when future access is possible, then check against existing canonical source alias/preflight and DOI normalization.
- Group `article ↔ corrigendum`, English↔Russian translated journal text, preprint↔journal publication under explicit relation types.
- Two different experiments in the same team and with similar titles are **not** automatically duplicates; require DOI, title, venue and methods inspection.
- Human decisions must separate DIRECT_TERMINAL, ELECTRONICS_HARDWARE, TRANSFERABLE_HEAT_TRANSFER, ENABLING_METROLOGY, BROADER_ADJACENT, OUT_OF_SCOPE, UNCERTAIN.
- Conservative exclusion from counted research is not a statement that the team has no broader academic capability.

## Remaining blockers / next concrete work

1. **2021 official page gap:** bounded retrieval/recovery of the 20 timed-out pages; preserve original archive records, and do not hammer a slow institutional server.
2. **DOI original links:** extend link-aware extraction and retrieve titles/DOI via publisher/cross-database only where clearly relevant.
3. **All queue rows review:** exclude oil, combustion, unrelated phase-change and chemical microfluidics; score transfer relevance; do not extrapolate annual totals from the 186 keyword hits.
4. **Work identity:** translate/romanization/version, DOI equivalence and publication-time attribution to individual academic labs.
5. **Research-output reconciliation:** evaluate bibliography recall with external indexes and patents by families/assignee/year.
6. **Then** obtain institution-year relevant-output table with scoped denominator; no misleading Russia-vs-China comparative productivity ranking.

Academic collaboration remains PRIORITY, companies CONTEXT_ONLY. No experiments or external contact. P1/P2/P3 remain unchanged.
