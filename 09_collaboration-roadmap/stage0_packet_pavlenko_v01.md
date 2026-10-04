# Pavlenko / Kutateladze — Partner Data Request + Stage-0 Experiment Packet v0.1

Last updated: 2026-10-04

Status: **Stage-0 priority #1 — GO WITH PREREQUISITE**

Related:
- [Partner brief](partner_brief_pavlenko_stage0_v01.md)
- [Unified scorecard](stage0_partner_technology_decision_scorecard_v01.md)
- [Common packet index](stage0_partner_packet_index_v01.md)

## 1. Stage-0 decision question

Can Kutateladze's **dielectric-fluid irreversible-dryout diagnostic/control know-how** be transferred from open HFE/modified-surface experiments to a **<=100 μm-class phone-relevant wick/mesh and DI-water/product-fluid path**, and shift the irreversible-dryout boundary beyond strong domestic ultrathin-wick controls without unacceptable process penalties?

Current prerequisite before meaningful coupon spend:

> obtain a partner-shareable process window sufficient to judge that the modification is not intrinsically incompatible with <=100 μm-class mesh / phone metal.

## 2. Evidence boundary

Primary:
- **[Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100](https://doi.org/10.1134/S1810232825700183)** — A.E. Brester, D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Journal of Engineering Thermophysics*, 2025.
- **[Effect of Layer Height on Heat Transfer during Boiling of Dielectric Liquid on Mesh Coatings](https://doi.org/10.1134/S0040601525700454)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Thermal Engineering*, 2025.
- **[Heat Transfer Wall of a Heat Exchanger and Method for Forming a Coating to Intensify Heat Transfer](https://patents.google.com/patent/RU2793671C2/en)** — A.A. Nikiforov, A.N. Pavlenko, M.Yu. Kuprikov *et al.* — RU2793671C2 — 2023.

Publicly unresolved and now intentionally **PARTNER / EXPERIMENT routed**:
- electrolyte/process window;
- current density/voltage/treatment-time range;
- added morphology/layer thickness;
- adhesion/handling;
- permeability/open-area penalty;
- copper / 60–100 μm mesh transfer;
- DI-water / vacuum / cycling behavior.

## 3. Partner-facing data request

The request should explicitly accept **shareable ranges** rather than exact proprietary recipes.

| ID | Mandatory request | Minimum useful answer | Why it matters | Resolution |
|---|---|---|---|---|
| P-DR1 | Mesh geometry used in the modified-mesh study | wire diameter, aperture/cell, material | establishes source geometry and scaling ratio | PARTNER |
| P-DR2 | Electrochemical modification window | electrolyte family + current/voltage/time ranges that can be shared | checks intrinsic compatibility with fine mesh | PARTNER |
| P-DR3 | Added surface/morphology | representative added thickness/feature-size range + SEM/profile | phone vertical budget | PARTNER |
| P-DR4 | Open-area/permeability effect | before/after data or qualitative magnitude | detects transport penalty | PARTNER |
| P-DR5 | Adhesion/handling limits | bending/cleaning/handling observations or test data | manufacturing survivability | PARTNER |
| P-DR6 | Compatible substrate metals | stainless/copper/other attempts and outcome | product-path transfer | PARTNER |
| P-DR7 | Non-HFE working-fluid experience | water or other fluid result existence; exact data if shareable | fluid-transfer risk | PARTNER |
| P-DR8 | Vacuum/bake/repeated-boiling experience | existence + process range/outcome | VC process risk | PARTNER |
| P-DR9 | Sample availability | ability to supply/reference 100 μm-class and thinner coupons | execution readiness | PARTNER |
| P-DR10 | Background-IP boundary | which process elements are institute/partner background; any field restriction relevant to proposed phone work that can be disclosed | foreground-IP planning | PARTNER |

### Explicit non-request

Do not request confidential Huawei/customer contract text. Ask only whether any existing background agreement creates a field restriction relevant to the proposed phone/VC work.

### Strong China comparator update

Mandatory external baselines now include:
- GDUT-style grooved/composite capillary-fed wick logic;
- SCUT-style treated copper mesh;
- strong China-style UTVC mesh/control.

Reason:
China already has direct dryout/rewetting/failure-boundary capability. A weak untreated-mesh control is no longer decision-grade.

## 4. Coupon drawing / arm definition

Preferred common carrier:
- 20 × 20 mm coupon;
- >=10 × 10 mm treated/active central zone;
- n>=3 per promoted arm.

### P0 — published/reference reproduction
Purpose: mechanism bridge.

- source mesh/material as close as practically available to the published modified mesh;
- partner process at one representative condition;
- matched unmodified control.

### P1 — ~100 μm-class transfer
Purpose: first phone-relevant stretch.

- wire/functional structural scale: ~100 μm class;
- same process principle as P0;
- copper preferred; stainless allowed as process-control bridge;
- matched untreated mesh.

### P2 — ~60–80 μm-class transfer
Purpose: preferred phone-path scale.

- target wire/structural scale: ~60–80 μm if manufacturable;
- copper preferred;
- same active area and matched untreated control.

### P3 — strong China-style control
Purpose: prevent a weak-control win.

- thin copper mesh / modern hydrophilic or wettability-treated reference;
- same working fluid, active area and fixture.

### Geometry gate

Before thermal testing, record:
- base/mesh thickness;
- added functional thickness;
- pore/feature distribution;
- open area;
- total functional height.

Preferred:
- added functional layer <=35 μm;
- total functional element <=120 μm.

Stretch:
- <=150 μm.

>=200 μm local structure:
- Stage-1 reject unless it replaces another internal VC structure.

## 5. Measurement sequence

### P-S0 — as fabricated
Measure:
- optical/SEM morphology;
- thickness/profile;
- mass gain;
- wetting/contact metric where meaningful;
- capillary uptake;
- permeability/open-area proxy;
- visible adhesion defects.

### P-S1 — fluid transfer
Run:
- DI water first;
- HFE-7100 only as literature bridge if legally/practically available.

Compare:
- P0/P1/P2 versus matched untreated controls;
- capillary uptake and wetting drift;
- any evidence of pore blockage.

### P-S2 — VC process compatibility
Use actual/planned vacuum/degassing thermal process.

Record:
- pressure, temperature, time;
- mass change;
- adhesion/delamination;
- morphology;
- capillary/permeability change.

### P-S3 — cycling
- 100 cycles initial;
- 500 cycles only for survivors.

### P-S4 — dryout/rewetting test
Use the same heater footprint/condenser boundary for:
- P3 strong reference;
- best Pavlenko transfer arm.

Ramp heat flux in identical increments from stable low-load operation until:
- dryout/capillary limit;
- or rig-safe cap.

Report:
- evaporator thermal resistance/superheat;
- dryout/limit heat flux;
- **first reversible dry-spot onset**;
- **reversible→irreversible transition heat flux/time**;
- **dry-spot growth / propagation rate** where diagnostics allow;
- rewetting time after load reduction;
- transient peak temperature;
- post-cycle wetting/capillary state;
- n>=3 repeatability.

## 6. Success / kill thresholds

### Pass prerequisite
- partner confirms a shareable process range that is technically plausible on <=100 μm-class mesh/phone metal.

### Stage-0 promotion
Must satisfy common geometry/process/repeatability rules and show **failure-boundary value**, not only a higher boiling curve.

Require at least one thermal improvement:
- >=15% lower evaporator thermal resistance; OR
- >=20% higher dryout/capillary limit; OR
- >=20% faster rewetting;

and at least one failure-mechanism improvement versus strong matched reference:
- materially later irreversible-dryout onset; OR
- lower dry-spot growth/propagation at matched heat flux; OR
- better wetting/capillary retention after repeated dryout/process cycles.

Thresholds remain internal Stage-0 targets, not literature claims.

### Kill / reframe
Kill the phone-transfer thesis if:
- modification intrinsically requires thick mesh/geometry;
- fine-mesh transfer blocks open area/permeability enough to erase thermal benefit;
- adhesion/process stability fails;
- useful behavior exists only in legacy HFE-7100;
- DI-water/copper route loses the claimed dryout/rewetting advantage;
- strong modern domestic reference matches or exceeds irreversible-dryout/recovery behavior even if the Russian arm shows a nominal HTC gain.

Reframe as mechanism-only if published physics remains interesting but phone transfer fails.

## 7. IP questions before Stage 1

Background:
- exact electrochemical process know-how;
- RU2793671C2 and related institute surface/process IP;
- other partner-owned mesh/surface IP used in the coupon.

Foreground candidates:
- thin-mesh process state compatible with phone VC;
- product-fluid-transferable dryout/rewetting control;
- vacuum/process-state retention;
- moving-hotspot / local rewetting topology;
- VC/package co-design that uses the modified structure.

Joint questions:
1. Which process step cannot be used without partner background IP?
2. Can phone-specific geometry/process results be jointly owned/licensed?
3. Are there disclosed field restrictions relevant to mobile/consumer electronics?
4. Can foreground claims be drafted around geometry + fluid + process-retention rather than generic surface enhancement?

This is not legal FTO.

## 8. Role split

**Kutateladze/Pavlenko**
- shareable process window;
- source/reference coupon;
- surface modification;
- boiling/dryout mechanism interpretation;
- native SEM/process diagnosis.

**Our/mobile side**
- thin copper mesh procurement;
- phone geometry budget;
- DI-water path;
- vacuum/cycle process;
- strong UTVC control;
- transient/hotspot test.

**Joint**
- failure analysis;
- final Stage-0 score;
- foreground-IP hypothesis;
- Stage-1 decision.

## 9. Stage-1 progression logic

Advance only if:
1. <=100 μm-class process feasibility is established;
2. at least one thin transfer coupon survives DI water + VC process;
3. dryout/rewetting advantage is repeatable vs strong reference;
4. background/foreground IP boundary is discussable.

Stage 1:
- strong reference sealed VC;
- best Pavlenko-derived arm;
- optional second Russian winner from MPEI/TPU;
- same shell/footprint/fluid/fill/seal/condenser/heater/orientation.

Current state after packet creation:
**READY TO REQUEST DATA; NOT READY TO BUILD SEALED DEVICE.**
