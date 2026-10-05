# Russia Mobile Thermal Technology & Collaboration Insight

**New chat / session continuation:** [Continue in a New Chat](CONTINUE_HERE.md)

Evidence-backed research on Russian capabilities that may contribute to next-generation **smartphone thermal management**, with tablets as a secondary reference platform.

Last repository review: **2026-10-04**

## Core objective

> Identify Russian thermal-management capabilities that are differentiated, mobile-relevant and complementary to Chinese/mobile-industry strengths, then convert the strongest ones into testable collaboration PoCs and 3-year R&D directions.

This is not:
- a directory of Russian thermal researchers;
- a Russia-vs-China overall ranking;
- a search for technologies merely because they are novel;
- a program to prove that a Russian capability must be useful.

The research is allowed to **kill or reframe** attractive directions when China/global capability, phone constraints, IP or system overhead make them unattractive.

## Final decision outputs

The project is complete only when it can answer:

1. What strong Russian thermal research capabilities exist?
2. What are they actually good at now?
3. Which are differentiated/complementary versus China?
4. Which survive smartphone constraints?
5. Which labs/researchers are credible collaboration targets?
6. What joint PoCs should be run, with explicit success/kill criteria?
7. What new IP/control points could result?
8. What should the 0–6, 6–18 and 18–36 month R&D roadmap be?

## Strategic combination

**Russian mechanism / theory / special experimental capability**
×
**Chinese miniaturization / manufacturing / smartphone engineering**
×
**our system / workload / control capability**
→
**differentiated mobile thermal innovation**

### Mobile/chip relevance hard rule

This project is not a general heat-transfer survey.

Non-mobile evidence from energy, aerospace, refrigeration, permafrost, nuclear or industrial systems is retained only as **mechanism evidence** unless a credible smartphone/tablet/chip/package transfer path is quantified.

No direction may enter the main collaboration portfolio solely because its thermal science is strong.

## Scope

- Primary platform: smartphones
- Secondary: tablets
- Other domains: technology-source only
- Priority evidence: 2023–2026
- Main evidence: 2021–2026
- Older work: lineage / foundational physics / IP / lab capability

## Repository architecture

The 00–09 structure follows the research decision chain; 10-final-report is the gated decision/report layer.

```
Russia-Thermal/
├── 00_scope/                   # scope + repository governance
├── 01_global-baseline/         # smartphone/user/product constraints
├── 02_technology-landscape/    # canonical technology taxonomy
├── 03_russia-institutions/     # institution coverage database
├── 04_researchers-labs/        # current lab/PI/partner dossiers
├── 05_papers-patents/          # paper interpretation + patent/IP maps
├── 06_active-cooling/          # active-cooling mechanism track
├── 07_china-benchmark/         # China/global comparison baseline
├── 08_opportunities-transfer/  # constraints, comparisons, decision gates
├── 09_collaboration-roadmap/   # readiness, PoCs, roadmap research
├── 10-final-report/             # gated final decision/report layer
├── evidence/                   # standards, source/ranking registers, QA
├── CONTINUE_HERE.md            # canonical new-chat/session bootstrap
├── CHANGELOG.md                # decision-relevant corrections/refreshes
├── PROGRESS.md                 # live project status
└── README.md
```

Repository governance:
- [New Chat / Session Bootstrap](CONTINUE_HERE.md)
- [Repository Architecture & Refresh Contract](00_scope/repository_architecture.md)
- [Evidence Standard](evidence/EVIDENCE_STANDARD.md)
- [Evidence & QA Index](evidence/README.md)
- [Human-Readable Bibliography](evidence/readable_bibliography.md)
- [Core Paper 10Q Decision Cards](evidence/paper_10q_cards_core_v01.md)
- [Core Patent 10Q Decision Cards](evidence/patent_10q_cards_core_v01.md)
- [Research Repository Changelog](CHANGELOG.md)
- [Final Decision Report Framework](10-final-report/README.md)
- [Final Report Readiness Gate](10-final-report/final_report_readiness_gate.md)

## Current status — 2026-10-04

**Estimated research completion: ~78%**
**Estimated remaining: ~22%**

Current phase:
**Stage-0 Partner Data Acquisition + Country Capability Convergence**

### Current technical portfolio

**Tier A**
- phone-scale irreversible-dryout boundary control
  - lead: Pavlenko/Kutateladze
  - thesis: transfer **dielectric reversible→irreversible dry-spot / boiling-crisis diagnostic and control know-how** into product-relevant fluids and <0.5 mm-class confinement, and beat strong independent China dryout/rewetting baselines

**Tier A-**
- sealed adaptive film/droplet hybrid
  - high-risk feasibility

**Tier B+**
- TPU target-fluid biphilic / contrast-wetting challenger
- MPEI Ivanov wettability / hierarchical-coating challenger
- compute + cooling joint adaptive control

**Pre-device challenger**
- MPEI ordered porous wick

**Tier B**
- multi-hotspot two-phase routing
- confined microfan aeroacoustics / tonal control

### Important killed/reframed generic theses

Not treated as Russia-specific strategic advantages by themselves:
- generic LHP miniaturization;
- generic synthetic-jet cooling;
- generic VC / graphite / TIM;
- generic microfan;
- generic DVFS;
- generic hydrophilic/biphilic/laser/composite-wick surface treatment.

## Current Russia coverage

Minimum major-university set:
- 20/20 checked;
- PENDING = 0;
- HIGH-SIGNAL: MPEI, SPbU, TPU, PNRPU;
- other institutions remain KEEP or NO CURRENT SIGNAL according to current evidence.

See:
[Russia Institution Index](03_russia-institutions/README.md)

## Management capability view

The final domestic-leadership report is now constrained to include three evidence-backed layers:

- [Russia Thermal Capability Atlas](03_russia-institutions/russia_thermal_capability_atlas_v01.md) — capability -> institution/lab -> evidence -> mobile-transfer state;
- [China Academic Thermal Capability Mirror](07_china-benchmark/china_academic_capability_mirror_v01.md) — domestic academic institutions mapped using the same taxonomy;
- [Russia × China Academic Capability Heatmap](08_opportunities-transfer/russia_china_academic_capability_heatmap_v01.md) — which broad Russia claims are killed, which capabilities are complementary, and which narrow Russia differentiation candidates survive.

Current country-level differentiation candidates after stronger China comparison:
1. Kutateladze/Pavlenko — **dielectric reversible→irreversible dry-spot / boiling-crisis diagnostics and control**;
2. MPEI/Ivanov — **actual 42-month hierarchical-surface operation/aging evidence**, not generic reliability;
3. Kutateladze Kabov/Chinnov — **shear-driven microfilm / dry-spot / interfacial-instability physics under extreme confinement**.

Watch / reserves:
- TsAGI/PNRPU/CIAM — phone-scale aeroacoustic method reserve;
- ITP UB RAS / Maydanik — LHP knowledge/failure-analysis reserve; China now covers mobile miniaturization, multi-source routing and operating/failure physics.

A useful pattern is emerging:
the surviving Russia candidates are increasingly **failure-boundary / aging / instability capabilities**, not generic cooling-device categories.

**Foundational enabling reserve**
- The matched China comparator is now complete enough to reject a broad "Russia has superior mathematics/physics" claim.
- China is independently strong in nonlinear/long-wave stability, experiment-validated phase-change modeling and electronics inverse thermal diagnostics.
- The residual Russian signal is narrower: **continuous exact/group-invariant analytical + stability modeling of evaporative thermocapillary systems, with experiment-informed closure**.
- Current state: **NARROW FOUNDATIONAL DIFFERENTIATION CANDIDATE / PoC reserve**, not a final advantage.

Focused files:
- [Russia Foundational Math-Physics Capability Map](03_russia-institutions/russia_foundational_math_physics_capability_v01.md)
- [China Foundational Math-Physics Mirror](07_china-benchmark/china_foundational_math_physics_mirror_v01.md)
- [Foundational Math-Physics China Pressure Test](08_opportunities-transfer/foundational_math_physics_china_pressure_test_v01.md)

**Siberian modular capability network**
- Kutateladze ↔ Lavrentyev: verified current technical link;
- Kutateladze ↔ NSU: verified current institutional / talent / diagnostics bridge;
- ICM/Altai ↔ Kutateladze: verified historical theory–experiment lineage with current methodological continuity;
- one unified current consortium is **not** verified.

Canonical map:
[Siberian Theory–Fluid–Experiment Capability Network](03_russia-institutions/siberian_theory_fluid_experiment_network_v01.md).

**Joint-paper attribution**
- China–Russia coauthored papers may still support a Russian capability when Russian lineage/platform/method ownership is evidenced.
- Coauthorship alone is not sufficient to count the same capability as an independent China baseline.

**Pavlenko China-pressure-test result**
- Independent China already covers capillary-fed dryout, steam-induced rewetting, repeated-cycle wetting degradation, treated copper mesh, pore-scale dryout modeling and HFE-7100 confinement.
- Therefore broad "Russia dryout/rewetting advantage" is rejected.
- Pavlenko remains Stage-0 #1 only on the narrower **dielectric irreversible-dryout/crisis diagnostic** hypothesis.

Focused file:
[Pavlenko Dryout/Rewetting China Pressure Test](08_opportunities-transfer/pavlenko_dryout_rewetting_china_pressure_test_v01.md)

**MPEI China-pressure-test result**
- China already has strong copper-water VC failure physics, 150–200 °C accelerated lifetime prediction, oxidation QA and mobile two-phase hardware.
- Targeted searches did not recover a matched public China analogue for **the same engineered evaporator surface under actual multi-year two-phase operation with thermal + morphology + capillary-aging tracking**.
- MPEI therefore retains a narrow distinction in **actual multi-year engineered-surface aging evidence**, not generic reliability.

Focused file:
[MPEI Multi-Year Aging China Pressure Test](08_opportunities-transfer/mpei_multiyear_aging_china_pressure_test_v01.md)

**Management-facing system map draft**
- First integrated leadership view is now available:
  [Russia Thermal Failure-Mechanism & Foundational Capability Map](10-final-report/management_capability_map_v01.md)
- It integrates the full Russia capability panorama, China comparator, 3 + 1 strategic core, Siberian modular network, Stage-0 portfolio, Watch/Kill states and leadership asks.

**Evidence-to-presentation freeze — PASS**
- [Claim Traceability Matrix](10-final-report/leadership_claim_traceability_matrix_v01.md)
- [Confidence Matrix](10-final-report/leadership_confidence_matrix_v01.md)
- [Presentation Freeze Specification](10-final-report/leadership_presentation_freeze_spec_v01.md)
- Content hierarchy is now a **FREEZE CANDIDATE** for leadership visual/PPT production.

**Leadership decision package — CURRENT**
- [Russia Thermal — Leadership Decision Package](10-final-report/leadership_decision_package_v01.md)
- Equal-format cards now exist for Pavlenko, MPEI, Kabov and the Foundational Reserve.
- TPU remains visible as a Stage-0 Challenger sidebar.
- This package is leadership-ready for strategic framing, but not final investment authorization.

**Capability-map completeness audit — PASS**
- Focused audit:
  [Russia Thermal Capability Map Completeness Audit](03_russia-institutions/capability_map_completeness_audit_v01.md)
- No omitted fourth strategic Russia core was found.
- **JIHT RAS** was added as a supporting MPEI-adjacent microchannel/boiling node.
- **SPbPU** was added as a complementary gradient-heatmetry / two-phase immersion diagnostics node.
- **RU2860581C1** strengthens current Kabov electronics-cooling IP/activity evidence without improving phone-transfer readiness.
- Management map state: **FREEZE CANDIDATE**.

**Current management structure: 3 mechanism candidates + 1 foundational reserve.**

These are **not final advantages** until the remaining comparator and mobile-transfer gaps close.

## Current PoC posture

PoC-1 is now **IP-aware and two-stage**.

Stage 0:
- ~60–100 μm-class wick/surface transfer;
- product-path working-fluid compatibility;
- <=35 μm preferred added functional layer;
- vacuum/process tolerance;
- cycling;
- capillary/wetting/permeability behavior;
- IP specificity.

The first frozen Stage-0 matrix is:
[PoC-1 Stage-0 Coupon Matrix](09_collaboration-roadmap/poc01_stage0_coupon_matrix_v01.md).

Current geometry anchor:
- ~0.39 mm finished UTVC reference;
- ~0.2 mm internal channel;
- 0.06 mm mesh.

HFE-7100 is treated as a legacy mechanism bridge, not the assumed future product fluid.

Stage 1:
- strong 0.39–0.4 mm-class China-style reference;
- at most two Russian challenger arms.

Phone packaging baseline:
[Phone Packaging & Teardown Reality](01_global-baseline/phone_packaging_teardown_baseline_v01.md)

No current partner is contract-ready.

## Current Stage-0 partner priority

This is an experiment-readiness order, not a final partner ranking:

1. **Pavlenko / Kutateladze** — dielectric irreversible-dryout / boiling-crisis diagnostics; main gap is whether this depth shifts the failure boundary in phone-scale thin wick / product-fluid conditions beyond strong domestic controls.
2. **MPEI / Ivanov** — **actual 42-month engineered-surface aging evidence**; China is stronger in product VC reliability, but no matched public multi-year same-surface analogue was recovered. Main gap is whether capillary/surface aging becomes a useful phone-scale early-warning indicator after geometry/fluid/process transfer.
3. **TPU / Feoktistov** — laser/biphilic pattern, surface durability and claim-mapped RU2812668; main gap is copper/vacuum/outgassing/sealed-fluid compatibility.
4. **MPEI ordered wick** — pre-device until a physical thin coupon exists.

Partner-specific 3–6 month briefs are indexed in:
[09 Collaboration Roadmap](09_collaboration-roadmap/README.md).

Current normalized decision matrix:
[Stage-0 Partner × Technology Decision Scorecard](09_collaboration-roadmap/stage0_partner_technology_decision_scorecard_v01.md).

Current execution packet set:
[Stage-0 Partner Data Request + Experiment Packets](09_collaboration-roadmap/stage0_partner_packet_index_v01.md).

Current decisions:
- Pavlenko — **GO WITH PREREQUISITE**
- MPEI / Ivanov — **GO WITH PREREQUISITE**
- TPU / Feoktistov — **GO WITH PREREQUISITE**
- MPEI ordered wick — **HOLD**.

## Evidence language

Important statements are separated into:
- Source fact
- Author/company claim
- Cross-source observation
- Analyst inference
- Hypothesis

Absence of public evidence is uncertainty, not proof of absence.

## Refresh rule

A substantive research round is not archived until the relevant:
- source register,
- local workstream,
- decision file,
- PROGRESS,
- QA matrix,
- and CHANGELOG (when decision-relevant)

have been refreshed.

See [PROGRESS.md](PROGRESS.md) for live next steps.


## Final report architecture

The final report is now scaffolded in `10-final-report/`.

It is intentionally **not final** at the current ~78% research state.

The report will ultimately contain:
- executive decision;
- full technical report;
- strategic bets;
- collaboration portfolio;
- 3-year roadmap;
- evidence appendix.

A direction may enter a final Strategic Bet only after passing the Final Report Readiness Gate. Workstream 10 summarizes approved research; it never becomes the source of truth for evidence.
