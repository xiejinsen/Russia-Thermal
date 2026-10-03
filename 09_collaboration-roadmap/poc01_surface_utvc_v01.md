# PoC-1 — Multi-Arm Russian Surface/Wick × Ultra-Thin VC v0.3

Last updated: 2026-10-03

## Decision status

**GO for comparative lab PoC design.**

The PoC is no longer a single Pavlenko-vs-generic-baseline test.

New objective:

> determine whether any Russian mechanism can beat a **modern China-style 0.39–0.4 mm composite/wettability-enhanced UTVC reference**.

## Evidence backbone

### Pavlenko
- https://doi.org/10.1016/j.applthermaleng.2024.125344
- https://doi.org/10.1134/S1810232825700183
- https://doi.org/10.1134/S1810232825700225
- https://doi.org/10.3103/S8756699019060049

### TPU
- https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413
- https://doi.org/10.1016/j.ijheatmasstransfer.2026.129217
- https://doi.org/10.1021/acs.langmuir.6c01997

### MPEI
- https://doi.org/10.1109/REEPE63962.2025.10970830
- https://doi.org/10.30724/1998-9903-2026-28-4-193-205

### China / modern UTVC
- 0.35 mm visualized UTVC:
  https://doi.org/10.1016/j.applthermaleng.2024.122813
- 0.39 mm sealed composite-wick UTVC:
  https://doi.org/10.3390/mi15050627
- 0.4 mm composite / wettability-patterned UTVC:
  https://doi.org/10.1016/j.ijheatfluidflow.2025.110148
- laser-ablation wick modification:
  https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774

## Why the baseline was upgraded

Modern Chinese/global UTVC evidence already combines:
- sub-0.4 mm thickness;
- composite mesh/SWM wick;
- surface wettability enhancement;
- sealed manufacturing;
- orientation testing;
- direct wick laser modification.

Therefore a smooth-surface or generic mesh baseline would be too weak.

## Stage 0 — transfer feasibility before sealed devices

### Pavlenko coupon
Verify:
- modified mesh / coating thickness;
- HFE-7100 capillary behavior;
- vacuum/bake compatibility;
- wetting retention;
- adhesion.

### TPU coupon
Transfer the **pattern concept**, not necessarily the exact original process:
- same phone-relevant substrate as reference;
- same working fluid;
- biphilic / contrast-wetting geometry;
- verify wetting-state stability under fluid exposure and thermal cycling.

Kill TPU arm before VC assembly if the contrast collapses in the target fluid/process.

### MPEI coupon/model
Require:
- manufacturable thin ordered wick;
- measured capillary pressure/permeability;
- thickness compatible with the common VC envelope.

Do not fabricate a sealed MPEI device until the Stage-0 coupon beats or meaningfully shifts the capillary/permeability tradeoff.

## Stage 1 — sealed 0.4-mm-class comparison

### A — strong reference
China-style composite mesh/SWM + contemporary wettability treatment.

Reference evidence:
https://doi.org/10.3390/mi15050627
https://doi.org/10.1016/j.ijheatfluidflow.2025.110148

### B — Pavlenko-inspired
Fluid-specific electrochemically modified mesh / thin capillary surface.

### C — TPU-inspired
Spatially patterned biphilic surface, only if Stage 0 passes.

### D — MPEI-inspired
Ordered porous wick, only if Stage 0 passes.

## Controlled variables

Hold:
- total thickness;
- footprint;
- shell material;
- working fluid;
- fill ratio;
- vapor-space target;
- heater;
- condenser boundary;
- degassing;
- sealing method;
- orientation protocol.

## Loads

Steady:
- 5 W
- 8 W
- 12 W
- 15 W

Transient:
- 5 -> 15 W
- repeated 8 -> 15 -> 8 W
- moving / localized heater if coupon layout allows.

## Metrics

Primary:
- evaporator thermal resistance;
- total device thermal resistance;
- dryout/capillary limit;
- rewetting time;
- peak transient temperature;
- orientation penalty.

Process/reliability:
- contact-angle / capillary change after assembly;
- 100–500 thermal cycles;
- vacuum retention;
- surface delamination/corrosion;
- repeatability across samples.

## Advance gate

A Russian-inspired arm advances only if it beats the **strong modern reference**, not a weak control.

Project screening criteria:
- >=15% lower evaporator resistance; or
- >=20% higher dryout/capillary limit; or
- >=20% faster rewetting;

plus:
- no thickness increase;
- no material orientation penalty;
- no unacceptable cycle degradation;
- manufacturable process.

## Partner interpretation

### Pavlenko/Kutateladze
Lead candidate for Stage 0/1 because evidence is closest to:
- dielectric boiling;
- dryout;
- CHF;
- capillary surface physics.

### TPU
Optional co-design/challenger partner for:
- laser patterning;
- biphilic surface layout;
- wettability control.

### MPEI
Pre-device design challenger:
- ordered pore geometry;
- capillary/permeability model.

## Key strategic question

The collaboration is only justified if Russian physics changes the Pareto frontier beyond what modern Chinese UTVC process optimization already achieves.
