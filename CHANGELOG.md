# Research Repository Changelog

Tracks decision-relevant corrections, architecture changes and major evidence refreshes.

## 2026-10-04 — Core paper / patent 10Q backfill

### Added
- `evidence/paper_10q_cards_core_v01.md`;
- `evidence/patent_10q_cards_core_v01.md`.

### Paper coverage
- Pavlenko/Kutateladze core surface/boiling papers;
- MPEI/Ivanov transport -> thermosyphon -> 42-month reliability chain;
- TPU/Feoktistov biphilic -> diagnostics -> durability chain;
- strong China/global 0.35–0.4 mm UTVC comparators.

### Patent coverage
- Kutateladze/Pavlenko background IP;
- MPEI nanoparticle/wettability process family;
- TPU institutional patent signal;
- major China/OEM VC prior art.

### Evidence strengthening
- added MPEI 2021 nanoparticle capillary-transport precursor;
- explicit separation of source fact / analyst inference / unknown-partner-request;
- explicit reproducibility and non-comparability judgments;
- explicit partner action, smallest PoC and kill condition.

### Important boundary
Several remaining blockers are now classified as partner-only or experiment-only rather than open-ended public-literature tasks.

### Research-state effect
No change to the ~55% completion estimate; this is evidence-quality and decision-readability strengthening.

## 2026-10-04 — Paper / patent 10Q methodology

### Added
- `evidence/mobile_thermal_insight_10q_method.md`;
- `evidence/patent_metadata_template.md`;
- 10Q decision card in the paper metadata template.

### Method change
The classic paper-reading questions are adapted for mobile/chip thermal technology and collaboration decisions:
- novelty must be judged against a strong current China/global baseline;
- dataset/code becomes thermal test geometry, working fluid, boundary conditions, reproducibility and process openness;
- related-work review includes researcher/lab/partner capability lineage;
- contribution includes engineering/process/IP control points;
- "what next" becomes mobile transfer, partner action, smallest PoC and kill gate.

Patent records use a separate 10Q focused on independent claims, implementation bounds, inventor/assignee lineage, prior-art overlap and background/foreground IP.

### Migration
Current paper and patent brief libraries are marked as v1 summaries until all required 10Q fields are backfilled.

### Research-state effect
No change to the ~55% completion estimate.

## 2026-10-04 — Paper and patent brief library

### Added
- `evidence/paper_briefs_decision_grade.md`;
- `evidence/patent_briefs_decision_grade.md`.

### Brief format
Papers:
background/problem → technical method → main conclusion → mobile/chip thermal insight.

Patents:
problem → claim/control point → prior-art implication → mobile/IP/PoC insight.

### Evidence honesty
Every brief includes a review-status label so abstract/metadata review is not presented as full-text review.

### Coverage
Current decision-grade bibliography is covered first; historical/foundational long-tail sources remain in the source register until promoted.

### Research-state effect
No change to the ~55% research completion estimate.

## 2026-10-04 — Human-readable citation format

### Presentation change
- added a repository-wide human-readable citation rule;
- paper display format is now: title hyperlink — authors — journal/conference — year;
- patent display format is now: patent title hyperlink — inventors — patent number — assignee — year;
- added `evidence/readable_bibliography.md` as the preferred browsing entry point;
- converted the three Stage-0 partner briefs, surface/wick patent map, surface/wick comparison and collaboration index;
- `source_register.md` remains machine/audit-oriented and may keep raw source fields.

### Research-state effect
No change to the ~55% research completion estimate.

## 2026-10-04 — Mobile-terminal relevance hard gate

### Scope correction
- reaffirmed that this is not a general thermal-engineering survey;
- added a hard promotion gate for smartphone/tablet/chip/package thermal relevance;
- non-mobile domains may contribute mechanism evidence only until a quantified phone/chip transfer path exists;
- added mandatory normalization of heat flux, geometry, working fluid, power/flow source, manufacturing and reliability before transfer claims;
- added G0 Mobile/Chip Relevance to the final-report readiness gate.

### Research-state effect
No change to the ~55% completion estimate.

## 2026-10-04 — Stage-0 partner briefs and MPEI durability

### New primary evidence
- **[Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon](https://doi.org/10.1134/S0040601525600683)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, M.M. Alyautdinova — *Thermal Engineering*, 2026.
- **[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.
- **[Biphilic Heat Exchange Surfaces for Drip Irrigation Cooling Systems](https://doi.org/10.1016/j.ijheatmasstransfer.2024.125316)** — D.V. Feoktistov, A. Abedtazehabadi, A.V. Dorozhkin *et al.* — *International Journal of Heat and Mass Transfer*, 2024.
- **[Hydrophobization of Metal Surfaces by Laser Treatment and Subsequent Heat Treatment of Hydrocarbon Liquids](https://doi.org/10.1016/j.surfin.2026.109390)** — D.V. Feoktistov, E.G. Orlova, G.E. Kotelnikov *et al.* — *Surfaces and Interfaces*, 2026.

### Decision change
- MPEI/Ivanov upgraded within Tier B+ to Stage-0 priority #2;
- TPU/Feoktistov becomes Stage-0 priority #3;
- Pavlenko remains priority #1 / Tier-A mechanism lead;
- no final partner recommendation is made.

### New execution artifacts
- added Pavlenko 3–6 month Stage-0 collaboration brief;
- added MPEI/Ivanov 3–6 month Stage-0 collaboration brief;
- added TPU/Feoktistov 3–6 month Stage-0 collaboration brief.

### Key caveats
- MPEI's 42-month reliability evidence is strong but comes from an ultra-low heat-flux thermosyphon regime and is not directly comparable to phone hotspots;
- TPU's humidity/saline/abrasion durability does not establish vacuum/sealed two-phase compatibility;
- Pavlenko's exact thin-mesh modification recipe remains a partner data request.

### Research-state effect
Research completion advances conservatively to ~55%.

## 2026-10-04 — Final report architecture

### Added
- created `10-final-report/` as the gated decision/report layer;
- added executive decision, full report, Strategic Bets, collaboration portfolio, 3-year roadmap and evidence-appendix skeletons;
- added a visual storyboard defining the final decision graphics and their source workstreams;
- added `final_report_readiness_gate.md`.

### Governance rule
- Workstream 10 summarizes only gated results from 00–09;
- it does not become the source of truth for evidence;
- immature directions remain candidate/reserve/watch rather than being promoted for narrative completeness;
- report scaffolding does not increase the ~52% research completion estimate.

## 2026-10-04 — Phone packaging + Stage-0 calibration

### New evidence
- added current flagship/teardown packaging baseline;
- added iPhone 18 Pro package/logic-board/VC co-design evidence;
- added 0.39 mm UTVC internal geometry anchor;
- added independent RedMagic active-cooling thermal boundary;
- added Pavlenko mesh wire/cell geometry evidence;
- added 3M PFAS manufacturing-exit evidence;
- extended OPPO/vivo OEM patent coverage.

### Decision-relevant corrections
- generic 5/10/15 cm3 module-volume framing is no longer the primary geometry gate for internal VC surface/wick PoC;
- PoC-1 now uses ~0.2 mm internal-channel reality and micron-scale wick/surface budgets;
- published 100–220 um Pavlenko mesh is treated as mechanism evidence, not a drop-in phone wick;
- Pavlenko value is reframed as transferring modification/dryout/rewetting physics to thinner structures;
- HFE-7100 is reclassified as a legacy mechanism-bridge fluid, not the assumed future product fluid;
- Tier-A thesis now requires working-fluid transferability.

### New PoC artifact
- added `09_collaboration-roadmap/poc01_stage0_coupon_matrix_v01.md`;
- Stage-0 first-pass geometry/fluid/process gates are now frozen for research use.

### Research-state effect
This is substantive research progress, not repository housekeeping.

## 2026-10-04 — Repository architecture / freshness audit

### Corrected
- root README status was stale (~37%) versus live PROGRESS (~49%);
- repository completeness matrix contained obsolete institution-coverage state;
- workstream indexes and technology-map state were stale.

### Governance changes
- repository architecture / refresh contract added;
- workstream README/index files added/refreshed;
- historical scans/seeds explicitly marked;
- QA matrix changed to one current snapshot.

## 2026-10-03 — Surface/wick IP + partner readiness
- first-pass Russia/China/OEM surface-wick patent map completed;
- MPEI separated into ordered-wick and Ivanov wettability/coating lines;
- PoC-1 changed to IP-aware Stage-0 -> Stage-1 gating;
- lead partner current roles refreshed.

## 2026-10-03 — Russia major-university coverage
- 20/20 minimum university set checked;
- PENDING reduced to zero;
- Russian domestic RAEX ranking metadata added;
- TPU promoted to HIGH-SIGNAL;
- MPEI strengthened.

## 2026-10-03 — Evidence traceability audit
- evidence standard formalized;
- critical decision files received local primary-source links;
- source register and repository completeness QA established.
