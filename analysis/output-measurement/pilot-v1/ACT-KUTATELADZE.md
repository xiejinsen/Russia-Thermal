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
