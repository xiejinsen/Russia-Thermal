# Kutateladze DOI Resolution and Research-Lineage Evidence — Batch A

date: 2026-10-08
status: SAMPLE_IDENTITY_REVIEW_COMPLETE / YEARLY_CENSUS_NOT_MEASURED
scope: Kutateladze official 2024–2025 article archive, plus 2021 evidence-gap check

## Verified DOI/sample results

See machine-readable provenance:
`analysis/output-measurement/pilot-v1/kutateladze-doi-identity-review.tsv`

- **2024 site #13**, DOI `10.1016/j.expthermflusci.2024.111153`: 12.5 μm high-aspect slit two-phase **adiabatic** flow and instability experiment; **already canonical PAPER-RU-FILM-002**, so reuse that Source and NEVER add another Paper.
- **2024 site #56**, DOI `10.1016/j.ijheatmasstransfer.2024.125937`: Zhukov, Shvetsov and Pavlenko, variable shape/conductivity of capillary-porous coatings, n-dodecane thin-layer evaporation/boiling. Original: https://www.sciencedirect.com/science/article/pii/S0017931024007671 . Verified unique DOI identity in publisher record; keep as staged candidate before canonical Source promotion.
- **2024 site #3**, DOI `10.1063/5.0225712`: thermocapillary rupture in confined liquid layer; publisher DOI verified in prior project seed review, staged candidate; not direct terminal product evidence.
- **2025 site #103**, DOI `10.1016/j.applthermaleng.2024.125344`: Shvetsov, Zhukov and Pavlenko, **HFE-7100 thin-liquid-layer boiling** and capillary-porous coatings; published in 2025 volume 263 although DOI identifier contains 2024 from initial processing; original: https://www.sciencedirect.com/science/article/pii/S1359431124030126 .
- **2025 site #70**, DOI `10.1016/j.applthermaleng.2025.127088`: Volodin, Shvetsov, Serdyukov, Zhukov and Pavlenko, review on enhanced dielectric boiling/evaporation for **electronic immersion cooling**, predominantly server/PCB/high-density-power-electronics applications. It is a review, NOT an original device integration test: https://www.sciencedirect.com/science/article/pii/S1359431125016801 .
- **2025 #70 linked correction**, DOI `10.1016/j.applthermaleng.2025.127221`: publisher corrigendum to 127088, not a second original research work. Table 1 water latent-heat correction from 104.9 kJ/kg to 2442 kJ/kg: https://www.sciencedirect.com/science/article/abs/pii/S1359431125018137 .
- **2024 site #1** DOI `10.1615/JFlowVisImageProc.2024048729` and **2025 site #216** DOI `10.1615/JFlowVisImageProc.2025057735`: only secondary-index matching checked in this batch, publisher-level identity remains ON HOLD.

Totals **within this small manually sampled ledger only**:
- 1 existing canonical work (reuse);
- 4 independent publisher/previously-source-reviewed DOI candidates not yet ingested into canonical Source;
- 1 linked corrigendum that adds 0 original scientific works;
- 2 secondary DOI candidates on hold.

These are **eight bibliographic identity records**, not an institution-year output denominator. No annual relevant output count is established.

## Important: highly similar titles do NOT imply identical works

The 2024 Zhukov/Shvetsov/Pavlenko paper (IJHMT 232, 125937) and the 2025 Shvetsov/Zhukov/Pavlenko paper (ATE 263, 125344) have overlapping scholars, capillary-porous coatings, thin liquid layers and boiling vocabulary. Yet primary publishers show **different experimental work**:
- 2024: n-dodecane, compare coating geometry/material conductivity, evaporation/boiling over pressures and liquid heights;
- 2025: HFE-7100 dielectric coolant, compare relative pressure and specified layer heights, boiling HTC and CHF;
- different DOIs, venues, article numbers and experimental scope.

**DO NOT merge** as title-near duplicates. Link as one academic research LINEAGE across 2024→2025.

Conversely the **2024 SSRN preprint of the 2025 ATE HFE paper** (author version) should not be counted as a second unique research work solely because one is an August 2024 working version and one a 2025 journal paper: https://papers.ssrn.com/sol3/Delivery.cfm/55d9f8d3-7ed2-4d40-bf45-5fba6115dba3-MECA.pdf?abstractid=4936348&mirid=1 . Confirm material revisions before deciding formal SOURCE version handling; the provisional institutional output counting unit is one journal work with a preprint version link.

The **2025 review correction** is a different publication type but contributes zero additional original research works. Preserve the correction relation and amended numerical data.

## Technical interpretation relevant to the leadership decision

1. **Kutateladze P1 mechanism quality is supported** by current 2024–2025 thin-layer boiling and microchannel instability research plus dedicated scientific author continuity.
2. More academic output **does not automatically imply** stronger mobile terminal products. For example, the 2025 HFE study used a 120 mm vessel and liquid heights 1.5–25 mm. Those scales are useful for boiling mechanisms but not phone ultra-thin VC validation.
3. The 2024 12.5 μm slit two-phase experiment is an **adiabatic flow-pattern** mechanism result: confinement and instability knowledge, not a verified heat-removal solution.
4. No change to portfolio P1 Kutateladze / P2 MPEI / TPU HOLD / LHP WATCH, no China research reopening and no company collaboration target inferred.

## 2021 missing-page source discovery

GitHub Action full archival extraction left **20 middle pages missing** after slow-server timeouts.

Public search-index caches can corroborate some original 2021 page metadata and source title existence, e.g.:
- https://www.itp.nsc.ru/publikacii/2021/2021stati/6.html
- https://www.itp.nsc.ru/publikacii/2021/2021stati/10.html

The second contains 2021 Pavlenko/Kuznetsov/Bessmeltsev work on pool boiling/CHF of 3D-printed copper porous coatings, direct historical P1 research-lineage evidence. **Search-engine snippets are not a complete bibliographic extraction**, so do not fill 2021 annual counts from search preview.

A bounded GitHub workflow `.github/workflows/itp-2021-recovery.yml` now tries missing pages without resetting existing 2021/2022–2025 archive; it records recoveries and failure URLs in `2021-recovery-attempts.json`.

## Next

1. Confirm the GitHub recovery workflow completed and update 2021 manifest only from recovered original HTML pages.
2. Improve extraction of DOI hyperlink hrefs in original HTML (the existing plain-text exporter left many DOI fields blank); conduct Crossref/publisher matching.
3. Complete review of 186 keyword candidates using the fixed six-level relevance codebook; verify non-keyword false negatives on a sample of the rest.
4. Attribute work to the actual **academic team/lab** and publication-time affiliation rather than to university-wide rank or company employment.
5. Reconcile five-year relevant paper coverage and yearly output; only then compare academic groups.

Research mode: public evidence only; no device experiments, no external institution outreach; companies CONTEXT_ONLY, SOFTWARE_SYSTEM LIMITED_SCAN.
