# Research Repository Changelog

Tracks decision-relevant corrections, architecture changes and major evidence refreshes.

## 2026-10-04 — Stage-0 partner data-request + experiment packets

### Added
- `09_collaboration-roadmap/stage0_partner_packet_index_v01.md`;
- `stage0_packet_pavlenko_v01.md`;
- `stage0_packet_mpei_ivanov_v01.md`;
- `stage0_packet_tpu_feoktistov_v01.md`.

### Execution design
All three packets now contain:
- shareable partner-data request;
- phone-relevant coupon geometry convention;
- process/metrology/thermal sequence;
- explicit competing hypotheses;
- quantitative Stage-1 screening gates;
- partner-specific kill/reframe conditions;
- background/foreground-IP questions;
- partner/internal role split.

Key design decisions:
- Pavlenko: process window -> ~100 μm -> ~60–80 μm transfer sequence;
- MPEI: current -> half-scale -> phone-target hierarchy ladder;
- TPU: laser-only low-organic and hydrocarbon-biphilic branches are separated, with contamination/process compatibility first.

### Research-state effect
Estimated completion advances conservatively **~58% -> ~59%**.

Reason:
this closes the Stage-0 **execution-design** milestone, but no partner-returned or physical evidence exists yet.

### Next phase
**Stage-0 Partner Data Acquisition + Coupon Falsification**

Further progress should be earned by:
- partner-returned data;
- physical coupon/process evidence;
- or a new primary source that directly changes a packet gate.

---

## 2026-10-04 — Repository governance second-pass audit

### Why
A post-blocker-closure audit checked whether the living research database still had:
- competing authority files;
- stale Stage-0 wording;
- decision files without local evidence;
- citation-format drift.

### P0 fixes
- clarified **global vs local authority** in `00_scope/repository_architecture.md`;
- marked dated repository/evidence audits as **non-authoritative snapshots**;
- corrected Workstream-08 authority wording;
- added a local primary-evidence spine to the canonical Stage-0 partner scorecard;
- refreshed 09 hypothesis/readiness/PoC files to current TPU/MPEI blocker state;
- migrated current 09 evidence display away from bare URL lines;
- indexed the scorecard in the final-report evidence appendix;
- aligned the 0–6 month roadmap with **Partner Data Request + Coupon Falsification**.

### Remaining P1 cleanup
Readable-citation migration remains incomplete in portions of:
- 04 researcher/lab supporting cards;
- 07 China benchmark;
- 08 supporting/current analysis;
- selected 05 supporting files.

This is readability/maintenance work and must **not** block Stage-0 research or increase completion percentage.

### Architecture decision
No new global status file, broad folder migration or source-register split is justified now.

### Research-state effect
**No change: ~58% complete / ~42% remaining.**

---

## 2026-10-04 — Stage-0 blocker closure + unified partner decision

### New decision-grade evidence

MPEI:
- promoted 2017 0.2 mm water-boiling Al2O3 microchannel CHF paper;
- promoted 2020 ~0.2 mm water-boiling/CHF paper with N.S. Ivanov;
- extracted official-dissertation process detail: ~100 μm groove radius, representative ~5 μm coating state, other >10–15 μm deposition states, capillary-aging/permeability caveats.

TPU:
- RU2812668C1 inventor mapping closed to D.A. Kuznechenkova, E.G. Orlova, D.V. Feoktistov;
- one independent laser-process claim mapped;
- partner-line IP status corrected from "institutional / claim pending" to "Feoktistov/Orlova partner-linked background IP / claim closed."

Pavlenko:
- repeated public search did not recover exact electrochemical recipe / thickness / permeability / adhesion;
- public-search exit declared;
- recipe/current batch → partner-only;
- thin mesh/copper/water/vacuum/cycling → experiment-only.

### New decision artifact
- added `09_collaboration-roadmap/stage0_partner_technology_decision_scorecard_v01.md`.

Stage-0 decisions:
- Pavlenko — **GO WITH PREREQUISITE**
- MPEI/Ivanov — **GO WITH PREREQUISITE**
- TPU/Feoktistov — **GO WITH PREREQUISITE**
- MPEI ordered wick — **HOLD**

### Repository refresh
Updated affected:
- 04 partner capability cards;
- 05 patent map / paper-patent index;
- 07 China benchmark;
- 08 Russia–China transfer comparison;
- 09 partner briefs / readiness / scorecard;
- 10 final-report executive / portfolio / bets / gate;
- evidence source register / readable bibliography / briefs / 10Q / QA;
- README / PROGRESS / CHANGELOG.

### Research-state effect
Estimated research completion advances **~55% → ~58%**.

Reason:
this increase comes from substantive blocker closure and partner-decision readiness, not from repository formatting.

### Next phase
**Stage-0 Partner Data Request + Coupon Falsification**

Next minimum artifact set:
one data-request + experiment packet per Pavlenko / MPEI / TPU, followed by physical coupon evidence.

---

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
