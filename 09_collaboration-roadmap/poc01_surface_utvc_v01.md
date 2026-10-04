# PoC-1 — IP-Aware Multi-Stage Surface/Wick × Ultra-Thin VC v0.5

Last updated: 2026-10-04

## Decision status

**GO for Stage-0 comparative coupon screening.**

Detailed frozen Stage-0 matrix:
[poc01_stage0_coupon_matrix_v01.md](poc01_stage0_coupon_matrix_v01.md)

## Strong reference

Modern 0.39–0.4 mm-class sealed UTVC.

Primary:
https://doi.org/10.3390/mi15050627

Reference facts:
- 0.39 mm finished UTVC;
- ~0.2 mm steam-channel/support height;
- 0.06 mm copper mesh;
- water working fluid;
- composite wick + wettability treatment.

Additional modern references:
https://doi.org/10.1016/j.ijheatfluidflow.2025.110148
https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774

## Important transfer correction

Published Russian structures must not be copied blindly into the 0.4 mm device.

Pavlenko mesh-geometry paper:
https://doi.org/10.1134/S0040601525700454

Reported wire sizes include:
- 100 um;
- 220 um;

with additional related single-layer work using 160 um.

A 220 um wire is already comparable to/exceeds the ~200 um reference channel height.

Therefore Stage 0 tests **mechanism transfer to thinner phone-relevant structures**, not direct reuse of the thick published mesh.

## Working-fluid correction

Pavlenko literature uses HFE-7100.

3M:
https://www.3m.com/3M/en_US/pfas-stewardship/operations-innovation/

3M completed its PFAS manufacturing exit at end-2025.

PoC policy:
- W1: DI water = primary sealed-VC product-path reference;
- W2: HFE-7100 = legacy mechanism bridge only if practically available;
- W3: future low-boiling dielectric candidate = TBD after supply/regulatory/material screen.

A Russian arm is weakened if its advantage only exists in legacy HFE-7100.

## Stage 0 arms

### A — strong reference
Thin copper mesh + modern wettability treatment.

### B — Pavlenko mechanism transfer
- modified mesh / thin capillary surface;
- transfer to ~60–100 um-class mesh;
- characterize modification thickness, pore morphology and permeability.

### C — TPU
- spatial biphilic / contrast-wetting pattern;
- must retain function in W1/W3 and through processing/cycling.

### D — MPEI Ivanov
- hierarchical / tunable-wetting coating;
- must quantify actual total coating thickness and target-fluid stability.

### E — MPEI ordered wick
Pre-device only until a physical thin coupon exists.

## Stage-0 geometry targets

Internal screening, not industry standards:
- ~60 um-class mesh preferred where feasible;
- <=100 um transfer/stretch mesh;
- added functional layer target <=35 um;
- total surface/wick element target <=120 um;
- stretch ceiling <=150 um.

A >=200 um structure is disfavored unless it replaces another structural/channel function.

## Stage-0 process sequence

- as-fabricated metrology;
- fluid soak;
- vacuum/degassing-process simulation;
- initial 100 thermal cycles;
- survivor 500 cycles;
- boiling/dryout/rewetting screen.

## Stage-0 promotion rule

Promote at most two Russian-inspired arms.

Minimum:
- product-path fluid compatibility;
- geometry/process feasibility;
- repeatable capillary/wetting benefit;
- no severe permeability penalty;
- >=3-sample repeatability;
- plausible narrow foreground-IP thesis;
- no dependence on HFE-7100 as the only useful fluid.

## Stage 1

Strong reference + up to two Russian winners.

Hold:
- total thickness;
- footprint;
- shell;
- product-path working fluid;
- fill ratio;
- internal channel budget;
- heater;
- condenser;
- degassing/sealing;
- orientation.

Loads:
- 5 / 8 / 12 / 15 W steady;
- 5 -> 15 W transient;
- repeated 8 -> 15 -> 8 W;
- localized/moving hotspot when feasible.

Metrics:
- evaporator/device Rth;
- dryout/capillary limit;
- rewetting;
- transient overshoot;
- orientation penalty;
- cycle/process drift.

Internal advance criterion:
- >=15% lower evaporator Rth; OR
- >=20% higher dryout/capillary limit; OR
- >=20% faster rewetting;

plus no unacceptable thickness/process/reliability penalty.

## Integration rule

For PoC-1, classify the route as:
**integrated modification / replacement inside an existing VC**, not a generic additive cooling module.

Phone packaging baseline:
../01_global-baseline/phone_packaging_teardown_baseline_v01.md

## Collaboration meaning

A Russian route wins only if:
1. physics moves the strong-device Pareto frontier;
2. the benefit survives fluid and manufacturing transfer;
3. geometry fits the internal phone thermal stack;
4. a plausible joint IP/control point remains.
