# PoC-1 — IP-Aware Multi-Stage Surface/Wick × Ultra-Thin VC v0.4

Last updated: 2026-10-03

## Decision status

**GO for Stage-0 comparative screening.**

Do not fabricate every candidate as a sealed VC immediately.

Reason:
the surface/wick IP field is crowded, and several candidate processes may fail target-fluid or thickness constraints before device assembly.

## Strong reference

Reference A must represent a modern China-style UTVC:
- 0.39–0.4 mm-class sealed device;
- composite wick;
- modern wettability treatment;
- realistic liquid/vapor budget.

Evidence:
https://doi.org/10.3390/mi15050627
https://doi.org/10.1016/j.ijheatfluidflow.2025.110148
https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774

## Stage 0 — coupon + IP gate

All surface challengers use:
- same target substrate where possible;
- same target working fluid;
- same process thermal budget;
- phone-relevant thickness ceiling.

### B — Pavlenko
Candidate:
- electrochemically modified mesh / thin capillary surface.

Measure:
- functional-layer thickness;
- pore morphology;
- capillary response;
- wetting state before/after fluid exposure;
- vacuum-bake impact;
- repeated thermal cycling.

Relevant IP:
https://patents.google.com/patent/RU2793671C2/en

### C — TPU
Candidate:
- spatial contrast / biphilic layout.

Kill before device assembly if:
- wetting contrast collapses in target dielectric fluid;
- pattern requires a thick/fragile coating;
- only generic CN116989603-like functionality remains.

Prior art:
https://patents.google.com/patent/CN116989603B/en

### D — MPEI Ivanov coating line
Candidate:
- hierarchical / tunable-wettability coating.

Evidence:
https://patents.google.com/patent/RU2860061C1/en
https://mpei.ru/news/Pages/newsItem.aspx?newsID=5211

Kill before device assembly if:
- coating cannot reach phone-compatible thickness;
- target-fluid behavior is not retained;
- thermal/vacuum processing destroys function.

### E — MPEI ordered wick
Candidate only after:
- real thin coupon/prototype;
- measured capillary pressure;
- permeability;
- thickness.

Primary:
https://doi.org/10.30724/1998-9903-2026-28-4-193-205

## Stage-0 promotion rule

Promote **at most two Russian challenger arms** to sealed-device Stage 1.

A challenger must show:
- target-fluid compatibility;
- thickness/process feasibility;
- repeatable capillary/wetting improvement;
- a technically narrower IP thesis than generic hydrophilic/biphilic/laser/porous treatment.

## Stage 1 — sealed 0.4-mm-class device

Minimum:
A. strong China-style reference

Plus up to two Stage-0 Russian winners.

Hold:
- total thickness;
- footprint;
- shell material;
- working fluid;
- fill ratio;
- vapor-space budget;
- heater;
- condenser;
- degassing;
- sealing;
- orientation protocol.

## Loads

Steady:
- 5 / 8 / 12 / 15 W

Transient:
- 5 → 15 W
- repeated 8 → 15 → 8 W
- localized/moving heat source when layout supports it

## Primary metrics

- evaporator thermal resistance;
- total device resistance;
- dryout/capillary limit;
- rewetting time;
- transient overshoot;
- adverse-orientation penalty.

Reliability/process:
- wetting/capillary drift;
- 100–500 thermal cycles;
- vacuum retention;
- adhesion/corrosion;
- sample-to-sample repeatability.

## Advance gate

Russian arm must beat the strong reference with:
- >=15% lower evaporator resistance; OR
- >=20% higher dryout/capillary limit; OR
- >=20% faster rewetting;

and:
- no thickness increase;
- no material orientation penalty;
- acceptable cycling;
- credible manufacturing path.

These are internal screening gates, not literature claims.

## IP-aware foreground target

Do not target broad claims on:
- hydrophilic treatment;
- biphilic patterns;
- laser roughening;
- composite wick.

Prefer:
- fluid-specific retained wetting state;
- sub-mm dryout/rewetting structure;
- moving-hotspot liquid-return topology;
- post-seal/process reliability;
- physics + workload-aware control combination.

## Collaboration meaning

The PoC is successful only if:
1. physics performance moves the device Pareto frontier; and
2. the surviving design has a plausible, narrower joint-IP control point.
