# Kutateladze Institute — Output Measurement Pilot

actor_id: ACT-KUTATELADZE
assessed_at: 2026-10-08
measurement_state: DISCOVERY_PARTIAL
five_year_window: 2021-01-01/2025-12-31
current_ytd_window: 2026-01-01/2026-10-08

## Primary data access

Institute annual publications portal:
https://www.itp.nsc.ru/publikacii.html

Representative 2024 and 2025 article catalogs:
https://www.itp.nsc.ru/publikacii/2024/2024stati.html
https://www.itp.nsc.ru/publikacii/2025/2025stati.html

Year-separated inventions / other-IP listings:
https://www.itp.nsc.ru/structura/ctt/patenty.html
https://www.itp.nsc.ru/structura/ctt/patenty/patenty_it_so_ran_2024_g/index.html

Critical disclaimer FROM THE INSTITUTION:
the bibliographic catalog itself says it is still being populated and not all publications are available. Therefore high catalog row numbers, even if the last pagination is reached, **cannot be treated as a complete output count**.

## Observed sample and type boundaries

- 2024 article listing contains thermocapillary liquid-film work alongside energy, icing, combustion and other unrelated fields; title-filtering across the whole institute is mandatory.
- 2025 examples include HFE-7100 nucleate boiling, porous-minichannel coating and film-evaporation measurement.
- The patent archive contains specific electronics-cooling patents in 2022 (RU2773679), 2023 (RU2807853 two-phase cooling) and 2024 (RU2822416).
- The same archival IP pages also contain computer-program certificates, database registrations and unrelated heating/combustion/icing patents; these MUST NOT all be counted as thermal patents.
- 2026 RU2860581C1 has already been analyzed in the canonical graph and stays in 2026 YTD, not the five completed years.

All sample rows are in `sample-records.tsv`; they are NOT a census.

## Yearly relevant thermal-output table

| Year | Eligible Papers | Invention Patents | Utility Models | Unique New Families |
|---|---|---|---|---|
| 2021 | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED |
| 2022 | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED |
| 2023 | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED |
| 2024 | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED |
| 2025 | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED |
| 2026 YTD | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED | NOT_MEASURED |

## Feasibility conclusion

Official yearly article and IP catalogs make this the BEST first institution for a bounded extraction/reconciliation campaign. However the catalog explicitly disclaims completeness, so counts will require another index (OpenAlex/Crossref/RSCI where accessible, plus DOI-level matching) and affiliation / relevance review.

Next: extract all yearly article listing pages, pagination and patent types into a dated candidate table; dedup and relevance-classify before any official total.

## Annual archive extraction outcome (2026-10-08)

Source:
`analysis/output-measurement/itp-annual-raw/retrieval-manifest.json`.

2021: 7/27 pages, 121 raw listings; **20 unavailable middle pages** after repeated timeouts. Retrieval is incomplete.
2022: 14/14 pages, 272 raw listings.
2023: 16/16 pages, 315 raw listings.
2024: 14/14 pages, 272 raw listings.
2025: 14/14 pages, 270 raw listings.

Total extracted: 1,250 raw listings from 65/85 pages, not 1,250 deduplicated relevant Papers.

Machine keyword review queue: 186 unreviewed title candidates (67 high-review priority, 113 medium, 6 ambiguous). This is NOT a validated total or an exhaustive relevant-paper search. See:
- `analysis/output-measurement/pilot-v1/kutateladze-catalog-screening_2026_10_08.md`
- `analysis/output-measurement/pilot-v1/triage/`
- `analysis/output-measurement/pilot-v1/kutateladze-curated-2024-2025.md`

The scraper collected the bibliographic plain text but generally **did not preserve the site's DOI link hrefs**; blank DOI fields therefore mean pending resolution, not unavailable DOI.

Publisher example: 2025 electronics immersion-cooling review DOI `10.1016/j.applthermaleng.2025.127088` has a publisher corrigendum DOI `10.1016/j.applthermaleng.2025.127221`; one research review + correction, not two new research works.

All annual **relevant and deduplicated** output counts remain NOT_MEASURED.

## Current update — 2026-10-08 full visible-site recovery

The earlier provisional 2021=7/27 state was superseded by two successful low-rate GitHub recovery passes.

Current official Article site snapshot for 2021–2025:
- 2021: 27/27 pages, 521 raw records;
- 2022: 14/14, 272;
- 2023: 16/16, 315;
- 2024: 14/14, 272;
- 2025: 14/14, 270;
- Total: 85/85 site pages and 1,650 raw bibliography records.

2021 title-only manual-review queue was regenerated from all 521 site entries: 64 leads (30 HIGH review, 32 MEDIUM, 2 AMBIGUOUS); combined across years: 239 unreviewed leads. These are NOT admitted relevant Papers.

Current authoritative work report:
`analysis/output-measurement/pilot-v1/kutateladze-full-archive-doi-round_2026_10_08.md`.

The institute itself warns official bibliography is being filled; **all five annual eligible and deduplicated research-output totals remain NOT_MEASURED** pending DOI/relevance/affiliation/external recall reconciliation.
