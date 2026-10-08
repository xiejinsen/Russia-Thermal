# Kutateladze Academic Output — Full Visible Archive Recovery & DOI Identity Round

date: 2026-10-08
round_state: OFFICIAL_SITE_PAGE_EXTRACTION_COMPLETE / ACADEMIC_OUTPUT_CENSUS_NOT_COMPLETE
scope: 2021-2025 institute Article catalogs, academic thermal-transfer research
priority: ACADEMIC_PRIMARY / COMPANIES_CONTEXT_ONLY / SOFTWARE_SYSTEM_LIMITED_SCAN

## Executive result

**All 85 pages in the five annual Kutateladze official Article listings have now been fetched and archived with continuous site indices:**

| Catalog year | Pages | Official raw bibliography records | Page retrieval |
|---|---:|---:|---|
| 2021 | 27/27 | 521 | COMPLETE_VISIBLE_SITE |
| 2022 | 14/14 | 272 | COMPLETE_VISIBLE_SITE |
| 2023 | 16/16 | 315 | COMPLETE_VISIBLE_SITE |
| 2024 | 14/14 | 272 | COMPLETE_VISIBLE_SITE |
| 2025 | 14/14 | 270 | COMPLETE_VISIBLE_SITE |
| **Total** | **85/85** | **1,650** | **SITE_PAGES_RETRIEVED** |

Crucial restriction: the institute itself states the site bibliography is being populated and is not complete:
https://www.itp.nsc.ru/publikacii.html

**1,650 is a count of unfiltered site records, NOT distinct DOI research works or mobile-thermal-related output, and NOT total institution research productivity.**

All annual eligible relevant PAPER/PATENT totals remain `NOT_MEASURED` pending topic review, translated-version dedup, publisher DOI extraction, publication-time affiliation and independent index recall.

## Two-stage recovery of 2021

Original extraction: 7/27 pages, 121 records.

Incremental recovery by GitHub Actions:
- pages 6–13: 8 pages, 160 records;
- pages 14–25: 12 pages, 240 records;
- original pages 1–5 and 26–27 were preserved.

Final 2021 archive: **27/27 pages, 521 indexed records**. No 2021 page missing, no original raw citation discarded.

Machine-readable proof:
- `analysis/output-measurement/itp-annual-raw/retrieval-manifest.json`
- `analysis/output-measurement/itp-annual-raw/2021-recovery-attempts.json`
- `analysis/output-measurement/itp-annual-raw/2021-candidates.tsv`
- `tools/itp_2021_recovery.py`

The low-rate rescue retries only missing official pages and never rewrites 2022–2025 data. When no pages remain, no new retrieval should occur.

## DOI identity, original publisher and source deduplication

Staged DOI identity ledger:
`analysis/output-measurement/pilot-v1/kutateladze-doi-identity-review.tsv`

At current hand-reviewed sample scale (14 bibliographic identity records, **NOT a census**):
- 1 paper DOI is **already canonical**: 2024 #13 `10.1016/j.expthermflusci.2024.111153` reuses `PAPER-RU-FILM-002`;
- 6 independent DOI work candidates have publisher/primary-record confirmation but **have not been promoted into canonical SOURCE**;
- 1 linked publisher corrigendum, `10.1016/j.applthermaleng.2025.127221`, is **zero new original research works** beyond its parent `10.1016/j.applthermaleng.2025.127088`;
- 6 additional DOI candidates remain under secondary-source/publisher-matching HOLD.

**Near-title collision to preserve as DISTINCT work**:
- 2024 Zhukov/Shvetsov/Pavlenko: `10.1016/j.ijheatmasstransfer.2024.125937`, coating material/geometry and n-dodecane thin-liquid-layer evaporation/boiling;
- 2025 Shvetsov/Zhukov/Pavlenko: `10.1016/j.applthermaleng.2024.125344`, HFE-7100 liquid height and pressure effects, distinct test fluid and research design.
Do not merge because titles, scholars or mechanism vocabulary overlap.

**Version group to NOT double-count**:
- 2024 SSRN version of the 2025 HFE-7100 paper above may be a same-work preprint lineage; retain version relation, do not count twice solely by repository/year.
- Main electronics immersion-cooling review `10.1016/j.applthermaleng.2025.127088` is one review work, corrigendum `...127221` is a linked correction with amended table property. Original publisher:
https://www.sciencedirect.com/science/article/pii/S1359431125016801

DOI and peer-review correction provenance should be checked before a leadership chart uses tabulated fluid properties.

Canonical SOURCE count has **not increased** from this DOI screening: existing project total stays **60 canonical Papers**.

## Academic research continuity established from sampled original studies

Independent reviewed team-lineage notes:
- `kutateladze-2021-six-paper-technical-lineage.md`
- `kutateladze-2021-gap-independent-evidence.md`
- `kutateladze-doi-lineage-batch-a.md`

**Pavlenko / Shvetsov / Zhukov**:
2021 thin-liquid-layer boiling / printed structured capillary-porous surfaces and cryogenic CHF research;
2024 n-dodecane coating geometry and liquid-layer crisis behavior;
2025 HFE-7100 microstructured-coating boiling and immersion-electronics technical review.

**Zaitsev / Belosludtsev**:
2021 academic microchannel test methods, local heater and micro/minichannel high-flux experimental platform.

**Kabov / Chinnov / Kochkin / Dementyev**:
microchannel two-phase flow and interface imaging to the 2024 12.5 μm slit experiment; direct sub-mm confinement physics but the 12.5 μm study is adiabatic, **not** a demonstrated phone heat-removal solution.

Distinguish: academic instrument designed for 2.5 kW/cm² **potential** does NOT by itself prove that flux was actually achieved experimentally, let alone in a phone.

## Current measurement limitations

- DOIs in site HTML mostly exist as clickable anchors; original text-only parser lost many `href` identities. Do not treat blank `doi_links` cells as no DOI.
- Russian/English parallel journal versions and preprints require work-level dedup.
- Topic keyword review queue is broad and must reject oil-well microfluidics, chemical microreactors, buildings, combustion etc.
- Source archive is institute-wide, whereas cooperation potential is team/lab-specific.
- Official site has acknowledged catalog incompleteness; external Crossref/RSCI/OpenAlex and lab-level publication lists should test recall.
- Patents are independently measured by invention, utility model, granted publication and family with filing-year assignment; not article catalog totals.

## Decision and drift check

- P1 Kutateladze academic collaboration rationale strengthened via documented continuity, not by raw counts.
- MPEI P2 and TPU HOLD unchanged. LHP WATCH unchanged.
- No new patent/Source ingested, no device experiment, no outreach.
- Chinese comparison remains narrow challenge/baseline, not a fresh broad scan.
- Academics remain the only deep prospective collaboration target class; companies background only.

## Next smallest research step

1. Refresh/review **all 2021 site title leads** from 521 raw records, then reconcile against 2022–2025 unreviewed queue; maintain unreviewed status until human topic adjudication.
2. Build DOI link-aware resolver and publisher cross-check for HIGH-priority 2021–2025 candidates; collapse RU/EN translated versions, preprint/journal, main/corrigendum relations.
3. Audit false negatives on a sample of the non-keyword archive.
4. Attach verified candidate works to academic TEAM/PEOPLE with affiliation at actual publication date.
5. Only then publish **bounded and fully specified** annual relevant academic output totals; compare Kutateladze, MPEI and ITP Ural Branch using one common scope and normalization standard.
