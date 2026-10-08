# Kutateladze Article Relevance Coding — Academic Five-Year Census Pilot

status: PILOT_CODEBOOK
date: 2026-10-08
source_universe: Kutateladze official annual Article listings, 2021-2025

## Purpose

Site-wide thermophysics publications are **not automatically** relevant to mobile-terminal thermal management. This coding guide is for manually reviewing primary bibliographic records after archive retrieval, before DOI/translated-version dedup and any annual total.

## Exclusive first-pass output category

| Code | Inclusion trigger | Example transferable topic | Leadership interpretation |
|---|---|---|---|
| DIRECT_TERMINAL | Explicit smartphone, tablet, wearable, portable-device or phone-chip thermal solution | phone VC, chip heat spreader, compact terminal heat sink | Closest direct product relevance, still check device validation |
| ELECTRONICS_HARDWARE | Electronics/processor/semiconductor/onboard computing thermal device at larger scale | processor LHP, microchannel liquid cooling, electronic hot-spot cooling | Direct electronics research, but target size/power may be ADJACENT |
| TRANSFERABLE_HEAT_TRANSFER | Mechanisms and tests directly mapping to passive/active heat movement in compact devices | nucleate boiling, dryout, capillary/wick transport, condensed film, fluid-film instability | Foundational/enabling technical expertise, not an end-product claim |
| ENABLING_METROLOGY | Thermal methods with explicit transfer to compact thermal reliability/diagnostics | wall heat-flux mapping, interfacial imaging, aging, structured-wettability measurements | Research method, not standalone cooler |
| BROADER_ADJACENT | Transfer potential exists but electronics relevance is only inferred | generic atomization, spray, heat exchanger geometry, industrial condensation | Keep in a separate supplementary pool, do not count as confirmed mobile-thermal without analyst justification |
| OUT_OF_SCOPE | No credible mobile/compact electronics heat-transfer connection | fossil-fuel combustion, oil-well flow, turbines, atmospheric transport, many pharmaceutical sprays | Exclude from relevant-output count |
| UNCERTAIN | Metadata/abstract insufficient for technical boundary | bilingual title-only or homonym ambiguities | Hold for source-level review |

## Hard rules

1. Every Paper candidate gets a DOI/publisher or stable bibliographic identity and a stable original archive locator.
2. Prefer full/translated journal versions of the **same work** collapsed to one work; material journal extension of a conference paper receives distinct lineage treatment after review.
3. Single Article catalog entries with Russian translation printed in parentheses are **not two publications**.
4. Do not classify a work as DIRECT_TERMINAL merely because the title contains 'micro', 'heat', 'cooling', 'film' or 'electronics'.
5. SOFTWARE_SYSTEM remains LIMITED_SCAN; do not import general compiler/scheduling literature.
6. Multi-institution coauthored works count once in the global DOI-work ledger; the relevant academic institution gets an attributed contribution only after publication-time affiliation verification.
7. Case-sensitive program certificates, inventions, utility models and databases are separate IP types; neither counts as a peer-reviewed Paper.
8. Paper count is number of verified unique relevant works **within this defined source and query scope**, not proof of complete institutional output.

## Reviewed sample cases (not a census)

- DOI `10.1063/5.0225712` (2024), `A comprehensive study of thermocapillary rupture of liquid layer`: TRANSFERABLE_HEAT_TRANSFER. Confirms Kutateladze/Siberian Federal University research lineage; phone device-scale application not shown.
- DOI `10.1134/S004060152470068X` (2025), `Nucleate Boling Heat Transfer of Dielectric Liquid HFE-7100 in Horizontal Layers at Various Pressures`: TRANSFERABLE_HEAT_TRANSFER. Publisher describes 120-mm plate / thermosyphon experimental setup, NOT phone-scale.
- DOI `10.1134/S0040601525700454` (2025), boiling heat transfer on mesh coatings: TRANSFERABLE_HEAT_TRANSFER; check prior canonical review references before creating Source.
- DOI `10.1134/S0040601522110076` (2022), boiling/evaporation review: TRANSFERABLE_HEAT_TRANSFER or authority-context review, not an independent phone device experiment.

Primary source references are in `analysis/output-measurement/pilot-v1/kutateladze-reviewed-doi-seeds.tsv`.

## Review output fields for next stage

Keep per-work:
- `official_archive_year`, `official_archive_ordinal`, `official_page_url`;
- `publisher_url`, `DOI`, `version_cluster_id`, `publication_year`;
- `full_title`, `authors`, `verified_affiliation`;
- `relevance_code`, `capability_family`, `transfer_boundary`;
- `dedup_status`, `evidence_source_id_if_existing`, `reviewer_note`.

Do not publish five-year totals before annual retrieval, all candidate identities, exclusions and cross-database recall are reviewed.
