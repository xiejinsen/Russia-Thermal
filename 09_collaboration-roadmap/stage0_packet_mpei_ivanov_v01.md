# MPEI / Ivanov — Partner Data Request + Stage-0 Experiment Packet v0.1

Last updated: 2026-10-04

Status: **Stage-0 priority #2 — GO WITH PREREQUISITE**

Related:
- [Partner brief](partner_brief_mpei_ivanov_stage0_v01.md)
- [Unified scorecard](stage0_partner_technology_decision_scorecard_v01.md)
- [Common packet index](stage0_partner_packet_index_v01.md)

## 1. Stage-0 decision question

Can the MPEI/Ivanov **42-month-operated hierarchical microgroove + Al2O3 surface** retain a meaningful liquid-supply/dryout advantage after scale-down, and can its **surface-state / capillary aging signal** predict loss of dryout margin before nominal thermal resistance degrades?
- aggressive geometry scale-down;
- transfer to copper;
- DI-water product path;
- much higher heat flux;
- VC vacuum/process cycling?

Current prerequisite:

> one complete current as-built geometry/coating dataset + agreement on a geometry scale-down ladder.

## 2. Evidence boundary

Primary:
- **[Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon](https://doi.org/10.1134/S0040601525600683)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, M.M. Alyautdinova — *Thermal Engineering*, 2026.
- **[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.
- **[Heat Transfer Crisis Investigation in a Microchannel with and without Nanoparticles Coating](https://doi.org/10.1088/1742-6596/1683/2/022087)** — Yu.A. Kuzma-Kichta, A.V. Lavrikov, M. Shustov, E.A. Kustova, N.S. Ivanov *et al.* — *Journal of Physics: Conference Series*, 2020.
- **[Method of Forming a Porous Coating of Nanoparticles](https://patents.google.com/patent/RU2727406C1/en)** — Yu.A. Kuzma-Kichta, N.S. Ivanov, D.S. Kiselev, A.V. Lavrikov — RU2727406C1 — MPEI — 2020.
- **[Method for Forming Heat Transfer Surface with Adjustable Wettability Properties](https://patents.google.com/patent/RU2860061C1/en)** — N.S. Ivanov, M.M. Alyautdinova — RU2860061C1 — MPEI — 2026.

Publicly improved:
- ~100 μm groove-radius lineage;
- representative ~5 μm coating state;
- ~150 nm particle scale;
- thicker >10–15 μm states under some deposition conditions;
- 42-month R410A durability;
- same-group ~0.2 mm water-boiling/CHF lineage.

Still unresolved:
- exact current depth/width/pitch/tolerance;
- current thickness distribution/yield;
- measured permeability of phone-transfer coupon;
- exact 42-month hierarchy at high heat flux;
- copper / sealed DI-water / vacuum-cycle behavior.

## 3. Partner-facing data request

| ID | Mandatory request | Minimum useful answer | Why it matters | Resolution |
|---|---|---|---|---|
| M-DR1 | Current groove geometry | depth, width, pitch, radius, tolerance | determines scale factor and vapor-space impact | PARTNER |
| M-DR2 | Current coating as-built distribution | mean/range thickness, local variation, sample-to-sample yield | distinguishes representative 5 μm from production state | PARTNER |
| M-DR3 | Fabrication sequence | shareable process sequence + temperature/time ranges | scale-down/process compatibility | PARTNER |
| M-DR4 | Substrate capability | stainless/copper/other attempts and outcome | product-path transfer | PARTNER |
| M-DR5 | Capillary aging dataset | fresh vs aged uptake curves/data if shareable | reliability mechanism | PARTNER |
| M-DR6 | Permeability data | direct measurement if any; otherwise model/assumption details | liquid-supply risk | PARTNER |
| M-DR7 | Current high-flux data | any test using the same long-life hierarchy at higher flux | narrows experiment range | PARTNER |
| M-DR8 | Coating adhesion/process limits | thermal/bending/cleaning/handling limits | manufacturing survivability | PARTNER |
| M-DR9 | Coupon fabrication capability | ability to make current / half-scale / shallow versions | execution readiness | PARTNER |
| M-DR10 | Background IP boundary | essential patented/process steps and phone-field licensing posture that can be shared | foreground planning | PARTNER |

### Non-request

Do not ask for unpublished confidential customer data. A shareable geometry/process envelope is sufficient for Stage-0 planning.

## 4. Coupon drawing / geometry ladder

Preferred common carrier:
- 20 × 20 mm;
- >=10 × 10 mm characterized central zone;
- n>=3 per promoted arm;
- copper preferred for transfer arms.

### M0 — current/as-built hierarchy
Purpose: establish direct bridge to long-life evidence.

Record:
- actual groove depth/width/pitch/radius;
- coating thickness distribution;
- total functional height.

### M1 — half-scale hierarchy
Purpose: test whether transport physics survives substantial shrink.

Target:
- approximately half of the partner's current linear groove scale where fabrication allows;
- coating process preserved as closely as possible;
- total functional height recorded, not assumed.

### M2 — phone-target shallow hierarchy
Purpose: enter the UTVC geometry budget.

Target:
- total functional element <=120 μm preferred;
- <=150 μm stretch ceiling;
- added coating <=35 μm preferred.

If the groove alone fundamentally requires ~100 μm radius plus comparable depth that consumes the internal channel:
**do not force a nominal "phone" coupon; classify geometry as a kill/reframe result.**

### M3 — strong matched reference
- copper thin-wick / modern hydrophilic or laser-modified control;
- same active area, substrate family, fluid and thermal fixture.

## 5. Measurement sequence

### M-S0 — metrology and transport
For M0/M1/M2:
- 3D profile;
- coating thickness distribution;
- SEM/morphology;
- mass/area;
- capillary uptake;
- direct permeability if practical, otherwise validated proxy;
- wetting/contact metric;
- adhesion inspection.

### M-S1 — DI-water process screen
- 24 h soak;
- 168 h survivor follow-up;
- wetting/capillary drift.

### M-S2 — VC process compatibility
Use actual/planned vacuum/degassing thermal process.

Record:
- pressure/temperature/time;
- mass change;
- morphology;
- coating integrity;
- capillary/permeability change.

### M-S3 — high-flux ladder
Use a common controlled heater footprint.

Sequence:
1. characterize M3 strong reference;
2. step M0/M1/M2 upward from stable low-load operation;
3. use identical heat-flux increments and condenser boundary;
4. continue until dryout/limit or rig-safe cap.

Do not extrapolate the 42-month thermosyphon thermal resistance into this test.

Measure:
- evaporator superheat / thermal resistance;
- CHF/dryout or capillary limit signature;
- rewetting/recovery;
- transient overshoot;
- post-test morphology.

### M-S4 — cycling
- 100 cycles initial;
- 500 cycles for surviving geometry.

Repeat transport + wetting measurements after cycling.

## 6. Competing hypotheses

**H-M1 — geometry-scalable hierarchy**
The microgroove+nano-coating mechanism survives shrinkage and preserves liquid supply/high-flux benefit.

Expected:
- M1/M2 remain better than M3 in dryout/rewet metrics;
- capillary/permeability balance does not collapse.

**H-M2 — reliability-specific, geometry-bound mechanism**
The 42-month advantage depends on the large groove / low-flux thermosyphon regime.

Expected:
- M0 performs as expected;
- M1/M2 lose transport benefit or consume too much vapor space.

**H-M3 — generic coating effect**
A simpler modern reference provides equivalent benefit.

Expected:
- M3 matches M1/M2 after normalization.

Stage-0 exists to distinguish these hypotheses.

## 7. Success / kill thresholds

### Stage-0 promotion
Must:
- fit <=150 μm transfer ceiling or replace another structural element;
- survive DI water + VC process;
- retain stable capillary/permeability function;
- repeat across n>=3.

And achieve at least one versus M3:
- >=15% lower evaporator thermal resistance; OR
- >=20% higher dryout/capillary limit; OR
- >=20% faster rewetting.

### Kill / reframe
Kill or reframe the phone-transfer thesis if:
- domestic oxygen/oxidation metrics explain the relevant aging equally well and MPEI adds no earlier predictor;
- capillary-state drift has no useful relation to dryout margin;
- current geometry cannot be meaningfully scaled into the UTVC budget;
- liquid supply/permeability collapses after scale-down;
- high-flux benefit disappears;
- copper/process/cycling is unstable;
- strong modern reference matches the scaled hierarchy.

Reframe to long-life thermosyphon/reliability know-how if the durability capability remains strong but phone geometry fails.

## 8. IP questions before Stage 1

Background:
- RU2727406C1 coating process;
- RU2750831C1 hydrophobic texture lineage;
- RU2860061C1 adjustable-wettability process;
- MPEI know-how around hierarchy fabrication/aging.

Foreground candidates:
- scaled hierarchy geometry that fits sub-mm VC;
- copper-compatible coating/process window;
- product-fluid high-flux stability;
- age-resistant capillary state;
- combined geometry + coating + process-retention design.

Questions:
1. Which process steps are background IP?
2. Can scaled groove geometry be altered without using restricted background claims?
3. What foreground ownership/licensing model is acceptable for jointly generated phone-scale results?
4. Is the long-life aging dataset available for joint failure-model development?

Not legal FTO.

## 9. Role split

**MPEI/Ivanov**
- current/as-built surface definition;
- coating/hierarchy fabrication;
- aging/capillary knowledge;
- native morphology/transport interpretation.

**Our/mobile side**
- phone geometry ceiling;
- copper/DI-water path;
- strong UTVC comparator;
- high-flux/transient test;
- vacuum/cycle manufacturing boundary.

**Joint**
- geometry ladder;
- failure analysis;
- Stage-0 keep/kill;
- foreground-IP thesis.

## 10. Stage-1 progression logic

Advance only if:
1. a scaled hierarchy physically fits;
2. DI-water/process function survives;
3. high-flux benefit is measurable and repeatable;
4. background/foreground IP is discussable.

Stage 1:
- sealed water VC;
- same shell/footprint/channel/fill/seal/heater/condenser/orientation as strong reference;
- best MPEI scaled hierarchy versus reference and other Stage-0 winner.

Current state:
**READY TO REQUEST CURRENT AS-BUILT DATA + SCALE-DOWN COMMITMENT; NOT READY FOR SEALED VC.**

## 11. Round-3 public-boundary freeze — 2026-10-05

Public search is now **CLOSED** for the main MPEI Stage-0 blockers unless a specific new primary source appears.

### New public closure — Newfrost

Canonical industry source:
[I-NEWFROST-002](../evidence/industry/newfrost/sources/I-NEWFROST-002_current_thermosyphon_model_fabrication.md).

It closes the generic question of whether a current physical Newfrost engineering interaction exists.

Ask instead:
- which geometry/process/design elements Newfrost fabricated from MPEI specifications;
- which elements were standard Newfrost hardware;
- what shareable acceptance/test data exist;
- whether the hierarchy/coating itself was part of the industrially fabricated model.

### New public closure — separate current microchannel line

MPEI has a distinct current Kuzma-Kichta-led project:
**modular microchannel cooling with SiC nanoparticle/agglomerate coating**.

Current public project team includes:
- Alexander Kiselev;
- Olga Strashnikova;
- Ivan Yastrebov.

This must not be silently merged with the Ivanov 42-month hierarchy line.

### Add partner questions

- Are the Ivanov long-life surface line and Kuzma-Kichta SiC microchannel line executed in the same lab/infrastructure?
- Can the current long-life hierarchy be evaluated in the current microchannel platform?
- Current SiC module: channel height/width/length, coated area and total module envelope.
- Current SiC coating: particle/agglomerate scale, thickness/morphology and substrate.
- Current results: HTC/CHF, pressure drop, flow rate, pump power and repeatability if shareable.
- Which team can fabricate a copper phone-scale coupon?
- Which characterization tools are directly team-accessible versus central MPEI shared equipment?

### Frozen boundary

Still EXPERIMENT-ONLY:
- scaled copper hierarchy;
- sealed DI-water/vacuum process;
- phone heat-flux/dryout behavior;
- normalized comparison versus modern coated-microchannel / UTVC references.

Packet state:
**PUBLIC BOUNDARY FROZEN / READY FOR AS-BUILT DATA + CROSS-LINE EXECUTION QUESTION.**
