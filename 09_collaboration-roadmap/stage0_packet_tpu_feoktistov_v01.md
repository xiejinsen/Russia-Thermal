# TPU / Feoktistov — Partner Data Request + Stage-0 Experiment Packet v0.1

Last updated: 2026-10-04

Status: **Stage-0 priority #3 — GO WITH PREREQUISITE**

Related:
- [Partner brief](partner_brief_tpu_stage0_v01.md)
- [Unified scorecard](stage0_partner_technology_decision_scorecard_v01.md)
- [Common packet index](stage0_partner_packet_index_v01.md)

## 1. Stage-0 decision question

Can TPU's laser/wettability engineering create a **copper-compatible, low-outgassing, process-stable spatial liquid-routing/rewetting function** inside an ultra-thin VC that performs beyond a strong generic laser/oxidation reference?

Current prerequisite:

> explicitly separate the laser-only / low-organic branch from the hydrocarbon-functionalized biphilic branch, with contamination/process compatibility as the first gate.

## 2. Evidence boundary

Primary:
- **[Heat-Transfer Enhancement and Evaporation Mechanisms on Roughness-Controlled Wettability-Contrast Surfaces](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)** — D.V. Feoktistov, E.G. Orlova, E.Yu. Laga *et al.* — *International Journal of Heat and Mass Transfer*, 2026.
- **[Hydrophobization of Metal Surfaces by Laser Treatment and Subsequent Heat Treatment of Hydrocarbon Liquids](https://doi.org/10.1016/j.surfin.2026.109390)** — D.V. Feoktistov, E.G. Orlova, G.E. Kotelnikov *et al.* — *Surfaces and Interfaces*, 2026.
- **[Method for Forming Micro- and Nanostructures on the Heat-Exchange Surface of a Steel Product](https://patents.google.com/patent/RU2812668C1/en)** — Darya A. Kuznechenkova, Evgeniya G. Orlova, Dmitry V. Feoktistov — RU2812668C1 — TPU — 2024.

Publicly closed:
- Feoktistov/Orlova inventor linkage;
- one independent laser-process claim;
- representative 1064 nm nanosecond-laser process window;
- steel roughness/feature-height range.

Experiment-only:
- copper transfer;
- vacuum/outgassing;
- working-fluid contamination;
- post-degassing/welding wetting retention;
- confined rewetting advantage.

## 3. Partner-facing data request

| ID | Mandatory request | Minimum useful answer | Why it matters | Resolution |
|---|---|---|---|---|
| T-DR1 | Laser-only process window | shareable pulse energy/frequency/duration/scan/overlap ranges actually used for relevant texture | reproducibility and copper transfer | PARTNER |
| T-DR2 | Biphilic/hydrophobic process window | shareable chemistry family + thermal/time range + pattern dimensions | contamination/process analysis | PARTNER |
| T-DR3 | Actual feature height/profile | 3D profile/roughness distribution, not only contact angle | vertical budget | PARTNER |
| T-DR4 | Copper experience | any copper coupons, process changes and outcomes | product path | PARTNER |
| T-DR5 | Vacuum/outgassing data | any mass-loss/vacuum/wetness-retention evidence | first-gate risk | PARTNER |
| T-DR6 | Water/refrigerant exposure | wetting/contact-angle drift after long soak if available | fluid stability | PARTNER |
| T-DR7 | Thermal-process retention | post-heating / joining / welding-like exposure behavior | manufacturing stability | PARTNER |
| T-DR8 | Pattern-design variables | pitch, fraction, ring/channel dimensions that can be shared | liquid-routing design | PARTNER |
| T-DR9 | Coupon fabrication capability | ability to produce laser-only and hydrocarbon-functionalized copper variants | execution readiness | PARTNER |
| T-DR10 | Background IP boundary | RU2812668 relationship to current surface chemistry and partner-owned know-how | foreground planning | PARTNER |

Exact non-shareable chemistry is not required for first-pass screening if the partner can fabricate the coupon and provide a process-boundary/material declaration sufficient for contamination review.

## 4. Coupon drawing / arm definition

Preferred common carrier:
- 20 × 20 mm;
- >=10 × 10 mm patterned central zone;
- n>=3 per promoted arm;
- copper primary substrate.

### T0 — strong generic control
- standard copper oxidation / hydrophilic or conventional laser-hydrophilic treatment;
- same active area and profile budget.

### T1 — TPU laser-only / low-organic
Purpose: isolate topology/roughness benefit from organic chemistry.

- copper;
- laser texture derived from TPU background process;
- no intentional hydrocarbon-derived hydrophobic functional layer;
- record feature height and roughness.

### T2 — TPU hydrocarbon-functionalized biphilic
Purpose: test whether spatial wetting contrast adds real confined routing/rewetting value.

- copper;
- laser texture + partner hydrophobic functionalization;
- same active patterned area as T1;
- document pattern fraction/pitch and total process thermal exposure.

### T3 — process-control material
Optional:
- AlMg3 or published substrate;
- used only to verify that the partner process is operating as expected;
- not eligible to win Stage-1 phone promotion by itself.

### Geometry gate

Preferred:
- added functional height <=35 μm;
- total functional element <=120 μm.

Stretch:
- <=150 μm.

If the useful texture requires local features approaching/exceeding the internal VC channel without replacing another structure:
**downgrade/kill phone relevance.**

## 5. First-gate contamination/process sequence

TPU differs from the other routes: **do not begin by optimizing thermal performance.**

### T-S0 — as fabricated
Measure:
- 3D profile;
- SEM/morphology;
- contact angle / advancing-receding behavior where practical;
- pattern fidelity;
- capillary directionality;
- mass.

### T-S1 — DI-water soak
- 24 h;
- 168 h survivor;
- wetting-state drift;
- visible residue/film;
- capillary-routing change.

### T-S2 — vacuum / VC process exposure
Use actual/planned degassing thermal process.

Record:
- absolute pressure/temperature/time;
- gravimetric mass change where measurement sensitivity allows;
- surface chemistry proxy if available;
- wetting/contact-angle shift;
- odor/residue/visible contamination is not sufficient alone—record objective metrology where possible.

### T-S3 — thermal/joining exposure
Apply the maximum relevant process temperature/time expected before sealing, without inventing a more severe condition solely to cause failure.

Repeat:
- profile;
- wetting;
- mass;
- capillary directionality.

### First kill gate

T2 hydrocarbon branch is killed/reframed before two-phase testing if:
- material/process review identifies unacceptable sealed-system contamination risk;
- reproducible mass-loss/surface-state drift is unacceptable relative to T0/T1;
- wetting contrast collapses after DI water/vacuum/process exposure.

T1 may continue independently even if T2 fails.

## 6. Confined rewetting / routing test

Only first-gate survivors enter thermal testing.

Compare:
- T0 strong control;
- T1 laser-only;
- T2 biphilic if survived.

Use:
- same copper substrate;
- same active area;
- same heater footprint;
- same DI-water inventory/boundary.

Primary metrics:
- liquid redistribution time;
- rewetting after local dryout;
- dry-zone duration/area if optically observable;
- capillary directionality;
- evaporator thermal resistance/superheat;
- dryout/limit heat flux;
- transient recovery.

The core question is **not** whether an open droplet cools faster. It is whether a stable spatial surface state creates a new function under confinement.

## 7. Competing hypotheses

**H-T1 — chemistry-enabled routing**
Stable wettability contrast gives a confined rewetting advantage beyond topology alone.

Expected:
- T2 > T1 > T0 on rewetting/routing while surviving process gates.

**H-T2 — topology-only sufficiency**
Laser roughness/topology is enough; hydrocarbon chemistry adds no durable value.

Expected:
- T1 ~= or > T2 after process exposure.

**H-T3 — generic-treatment sufficiency**
Standard oxidation/laser reference matches TPU.

Expected:
- T0 ~= T1/T2.

Stage-0 is designed to distinguish these, not to confirm a preferred branch.

## 8. Success / kill thresholds

### Stage-0 promotion
Must:
- be copper-compatible;
- survive DI water + actual VC process;
- fit <=150 μm functional height;
- repeat across n>=3;
- show a stable surface state.

And achieve at least one versus T0:
- >=15% lower evaporator thermal resistance; OR
- >=20% higher dryout/capillary limit; OR
- >=20% faster rewetting.

For TPU specifically, thermal promotion also requires that the winning state be attributable to a reproducible pattern/process, not an uncontrolled organic residue.

### Kill / reframe
Kill hydrocarbon branch if contamination/process stability fails.

Kill generic TPU phone thesis if:
- T1 and T2 are matched by T0;
- copper transfer fails;
- useful pattern state cannot survive vacuum/thermal process;
- foreground IP collapses to generic laser/biphilic prior art.

A T2 kill does **not** automatically kill T1.

## 9. IP questions before Stage 1

Background:
- RU2812668C1 laser texture/process;
- partner know-how for hydrophobization/pattern design;
- relevant TPU surface-treatment background.

Foreground candidates:
- copper low-organic texture optimized for sealed VC;
- vacuum-stable spatial wetting routing;
- pattern pitch/fraction tied to confined rewetting;
- process-retention sequence;
- hybrid topology + wettability control under moving hotspots.

Questions:
1. Which elements of T1 are covered by TPU background IP?
2. Is the hydrocarbon functionalization separately protected/controlled?
3. Can a phone-specific copper/process-retention implementation be jointly owned/licensed?
4. If T1 beats T2, is there clean design space around low-organic laser topology?
5. If T2 wins, can chemistry + pattern + confined function be claimed narrowly enough to avoid generic biphilic prior art?

Not legal FTO.

## 10. Role split

**TPU/Feoktistov**
- laser/pattern fabrication;
- native surface diagnostics;
- hydrophobization process;
- pattern-variable guidance.

**Our/mobile side**
- copper substrate;
- contamination/vacuum boundary;
- DI-water/sealed VC path;
- strong generic control;
- confined rewetting/hotspot test.

**Joint**
- process-failure root cause;
- T1 vs T2 attribution;
- foreground-IP hypothesis;
- Stage-1 selection.

## 11. Stage-1 progression logic

Advance only if:
1. at least T1 or T2 survives process/contamination screen;
2. winning arm beats strong generic control in confined rewetting/dryout behavior;
3. copper/process repeatability is demonstrated;
4. IP boundary is discussable.

Stage 1:
- sealed water VC;
- strongest TPU arm only;
- same shell/footprint/channel/fill/seal/heater/condenser/orientation as strong reference.

Current state:
**READY FOR TWO-BRANCH DATA REQUEST + COPPER SCREEN; NOT READY FOR SEALED VC.**

## 12. Round-3 public-search exit — 2026-10-05

No further open-ended TPU public search is justified before partner/coupon evidence.

Already public:
- Feoktistov/Orlova inventor linkage;
- RU2812668 independent laser-process control point;
- representative laser-process window;
- steel/AlMg3 surface lineage;
- wettability-contrast / evaporation mechanism.

Remaining useful questions are PARTNER-ONLY:
- copper process experience;
- exact laser-only low-organic process range;
- current biphilic chemistry/process envelope;
- vacuum/outgassing evidence if any;
- background-IP relationship between current process and RU2812668.

Decisive questions are EXPERIMENT-ONLY:
- copper transfer;
- DI-water/vacuum/process survival;
- sealed-system contamination;
- post-process wetting retention;
- confined rewetting/dryout benefit.

Packet state:
**PUBLIC BOUNDARY FROZEN / READY FOR TWO-BRANCH COPPER SCREEN REQUEST.**
