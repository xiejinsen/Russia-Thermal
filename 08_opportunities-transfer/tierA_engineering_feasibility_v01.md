# Tier A Engineering Feasibility Review v0.1

Last updated: 2026-10-03

Status: first engineering reality check on the three Tier A hypotheses. This is not a final go/no-go.

---

# A1. Sealed adaptive film/droplet hybrid cooling

## What the evidence now says

Kutateladze's underlying heat-transfer physics is credible:
- gas-sheared films can operate over channel heights from sub-mm to a few mm;
- experiments have demonstrated orientation robustness over wide angle ranges in laboratory rigs;
- microgrooves can delay dryout / raise CHF;
- prior work reports very high local heat-flux capability.

Representative evidence:
- Kabov et al., Int. J. Heat and Fluid Flow, 2007:
  https://doi.org/10.1016/j.ijheatfluidflow.2006.05.010
- Cheverda/Kabov microgroove work:
  https://doi.org/10.1051/epjconf/201715900016
- RU2860581:
  https://patents.google.com/patent/RU2860581C1/en

## The main feasibility problem is not heat transfer

Published experimental rigs typically require several of:
- forced gas flow;
- controlled liquid supply;
- two-phase exhaust;
- separator / recovery;
- pump or pressure source;
- thermal conditioning of inlet fluid/gas.

A representative 2017 FC-72 rig used:
- high-pressure N2 supply;
- syringe pump;
- membrane pump;
- separator / FC-72 recovery;
- thermoelectric conditioning;
- ~1.5 mm-high test channel.

This demonstrates mechanism capability but also highlights a large gap to smartphone integration.

## Current status

**Decision: KEEP, but downgrade from clean Tier A to Tier A- / high-risk feasibility.**

The direction advances only if a simplified circulation architecture can be identified.

### Required architecture breakthrough
At least one must work:
1. vapor-momentum-driven gas/film circulation;
2. resonant microblower instead of compressor;
3. capillary-fed liquid + passive vapor return;
4. partial hybrid where film/droplet cooling exists only at the hotspot and VC handles the rest;
5. ultra-low-inventory recirculation without a bulky separator.

### New hard gate
Before any phone PoC, build a benchtop energy/volume budget:

- gas source power;
- liquid pumping power;
- condenser / separator volume;
- fluid inventory;
- pressure drop;
- startup time.

**Kill H1 as a phone architecture if the complete loop cannot fit a 10–15 cm³ class research envelope at <=2 W auxiliary power while rejecting a 15 W sustained load.**

This threshold is an internal screening target, not an industry standard.

---

# A2. Sub-mm phase-change / capillary-surface enhancement

## What the evidence now says

This route remains technically plausible because it can be inserted into an existing VC/LHP architecture rather than requiring a new system.

Russian evidence:
- Pavlenko line: dielectric boiling, modified surfaces, capillary-porous structures;
- Kutateladze microgroove work shows dryout/CHF can be altered by surface structure.

However, China/global competition is stronger than previously assumed.

Recent benchmarks include:
- 0.4 mm UTVCs with wettability-patterned / composite wicks:
  https://doi.org/10.1016/j.ijheatfluidflow.2025.110148
- large VC using hierarchical mesh / liquid-film boiling:
  https://doi.org/10.1007/s11630-025-2202-6
- 310 μm phase-change thermal diode using extreme wettability:
  https://doi.org/10.1016/j.applthermaleng.2025.126419

## Current status

**Decision: KEEP as Tier A, but competition threshold raised.**

This route is currently the **lowest system-integration-risk Russian collaboration thesis** because:
- no extra pump/fan is inherently required;
- it can reuse Chinese phone VC manufacturing;
- PoC can isolate one technical variable: surface/wick treatment.

## New proof requirement

A Russian-inspired surface must beat a strong contemporary reference, not a generic smooth plate.

Required comparator:
- sub-mm VC;
- composite or wettability-patterned wick;
- same thickness;
- same fill ratio;
- same working fluid;
- same heater area.

### Advance gate
Keep only if at least one is achieved repeatably:
- >=15% lower evaporator resistance;
- >=20% higher dryout / capillary limit;
- >=20% faster post-transient rewetting;
- measurable benefit at adverse orientation;
- process survives cycling and can be scaled over phone-sized area.

### Kill condition
Downgrade if benefits disappear once compared with modern Chinese composite-wick / wettability-engineered baselines.

---

# A3. Compute + cooling joint adaptive control

## What the evidence now says

The system-level problem is valid, but the concept is not globally empty.

Existing work already shows:
- MPC can jointly reason about skin temperature and fan speed;
- prior mobile/edge work uses predictive / RL thermal-aware DVFS;
- fan and power components have been jointly controlled in the literature.

Example:
Liu, Yu, Wang, Applied Thermal Engineering, 2023:
https://doi.org/10.1016/j.applthermaleng.2023.121079

Reported in a laptop numerical/MPC framework:
- skin-temperature reconstruction;
- predictive thermal model;
- fan-speed control;
- ~30% lower average fan speed and ~23% lower maximum fan speed versus lookup-table baseline in the studied case.

Therefore:
**generic predictive thermal control is not Russian whitespace.**

## What could still be distinctive

SPbU's useful angle is narrower:
- SPSA / stochastic online adaptation;
- low model dependence;
- adaptation to uncertain conditions.

Potential smartphone uncertainty:
- phone case;
- hand grip;
- ambient temperature;
- battery aging;
- unit-to-unit thermal variation;
- blocked air inlet;
- fan/pump degradation.

## Current status

**Decision: REFRAME and downgrade from Tier A exploratory to Tier B+ until stronger Russian-specific evidence appears.**

The collaboration thesis is now:

> model-light online adaptation for joint compute + cooling control under uncertain phone boundary conditions.

### Advance gate
Promote back to Tier A only if a PoC shows:
- no offline device-specific thermal model is required;
- adaptation converges within realistic workload thermal timescales;
- >=10% sustained-performance gain or >=15% cooling-energy reduction versus a calibrated predictive baseline;
- robustness across case/grip/ambient changes.

### Kill condition
If a standard MPC/RL controller with modest calibration matches the result, SPbU is not a uniquely valuable collaboration partner for this topic.

---

# Comparative engineering view

| Hypothesis | Physics risk | Integration risk | IP crowding | Russia-specific depth | Current decision |
|---|---:|---:|---:|---:|---|
| Film/droplet hybrid | Low-medium | **Very high** | High | **High** | A- / feasibility first |
| Sub-mm phase-change surface | Medium | **Low-medium** | High | High | **Tier A** |
| Joint adaptive control | Low | Low | **Very high** | Medium | **Tier B+** |

## Current strongest practical thesis

At this stage, **sub-mm phase-change / capillary-surface enhancement** has the best balance of:
- Russian capability signal;
- low phone-system disruption;
- fast PoC;
- compatibility with Chinese manufacturing;
- measurable success/failure.

Film/droplet remains the more radical option, but it must first solve the system-architecture problem.

