# Pavlenko / Kutateladze — 3–6 Month Stage-0 Collaboration Brief v0.1

Last reviewed: 2026-10-04

Status: **Stage-0 priority #1 — technical-discussion ready; not contract-ready**

## Decision question

Can the Pavlenko/Kutateladze surface-modification / boiling / dryout knowledge be transferred from published HFE-7100 experiments and relatively thick meshes into a **phone-relevant 60–100 μm-class wick / <=35 μm added functional layer**, while retaining benefit in a product-path working fluid?

## Why this partner is first

Current strongest differentiators:
- direct dielectric-fluid boiling evidence;
- dryout / CHF / nucleation depth;
- negative wettability-retention evidence;
- electrochemically modified metal mesh;
- thin capillary-surface IP in the broader team;
- current lab and researchers verified.

Primary evidence:

- **[Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100](https://doi.org/10.1134/S1810232825700183)** — A.E. Brester, D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Journal of Engineering Thermophysics*, 2025.
- **[Effect of Layer Height on Heat Transfer during Boiling of Dielectric Liquid on Mesh Coatings](https://doi.org/10.1134/S0040601525700454)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Thermal Engineering*, 2025.
- **[Heat Transfer Enhancement during Boiling in Horizontal Layers of HFE-7100 on 2D Modulated Capillary-Porous Coatings](https://doi.org/10.1016/j.applthermaleng.2024.125344)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Applied Thermal Engineering*, 2025.
- **[Capillary Wicking and Heat Transfer during Boiling of HFE-7100 on Black Silicon Surfaces with Different Morphologies](https://doi.org/10.1134/S1810232825700225)** — O.A. Volodin, E. Vyacheslavova, A. Baranov *et al.* — *Journal of Engineering Thermophysics*, 2025.
- **[Heat Transfer Wall of a Heat Exchanger and Method for Forming a Coating to Intensify Heat Transfer](https://patents.google.com/patent/RU2793671C2/en)** — A.A. Nikiforov, A.N. Pavlenko, M.Yu. Kuprikov *et al.* — RU2793671C2 — Kutateladze Institute of Thermophysics SB RAS / A.A. Nikiforov — 2023.

## Known transfer problem

Published mesh evidence includes wire diameters around:
- 100 μm
- 220 μm

while the strong 0.39 mm UTVC reference has about:
- 0.2 mm internal steam-channel/support height
- 0.06 mm mesh

Reference:
**[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.

Therefore the published mesh hardware is not the target product geometry.

The collaboration target is **mechanism/process transfer**, not geometry copy.

## Publicly unresolved manufacturing detail

The 2025/2026 modified-mesh paper states:
- steel mesh 40;
- dynamic hydrogen-bubble matrix modification;
- three process regimes;
- up to ~81% HTC improvement in the reported HFE-7100 experiment.

The exact transferable manufacturing recipe needed for a 60–100 μm-class wick was **not recovered from the public abstract/index evidence in this round**.

Treat this as a partner data request, not as a known process.

## Proposed 3–6 month package

### Phase P0 — information / feasibility exchange
Target: weeks 0–4

Request:
1. exact mesh-40 wire/aperture used in modified-surface experiment;
2. electrolyte chemistry;
3. current density / voltage;
4. modification time;
5. resulting layer/feature thickness;
6. SEM/pore-size distribution;
7. permeability before/after modification;
8. adhesion / handling limits;
9. compatible mesh metals;
10. any water / non-HFE fluid data;
11. any vacuum / bake / repeated-boiling data.

Partner deliverable:
**shareable process window + 3 representative SEM/metrology datasets.**

Kill:
- process inherently requires thick wire / geometry that cannot scale below ~100 μm;
- modification blocks too much open area;
- process cannot transfer to copper or a phone-compatible metal stack.

### Phase P1 — thin-mesh transfer coupons
Target: month 1–2

Minimum coupon set:
- P-A: original/published reference mesh/process;
- P-B: ~100 μm-class mesh;
- P-C: ~60–80 μm-class mesh if manufacturable;
- P-D: unmodified matched controls.

Preferred substrate/material:
- copper where process-compatible;
- stainless transfer control if copper is not initially feasible.

Measure:
- wire/base thickness;
- added functional thickness;
- morphology / pore size;
- capillary uptake;
- permeability proxy;
- mass gain;
- wetting state.

### Phase P2 — product-fluid transfer
Target: month 2–3

Fluid:
- water = primary product-path reference;
- HFE-7100 = literature bridge only if practically available;
- future dielectric = later only if architecture requires it.

Question:
Does the improvement survive a fluid change?

Kill / downgrade:
- benefit exists only with legacy HFE-7100;
- water/product-path behavior loses the capillary/rewetting advantage.

### Phase P3 — manufacturing-state stability
Target: month 3–4

Sequence:
- fluid soak;
- vacuum/degassing-process simulation;
- 100 thermal cycles;
- survivor 500 cycles.

Measure:
- wetting change;
- capillary change;
- morphology;
- adhesion;
- permeability;
- thermal response.

### Phase P4 — dryout / rewetting discrimination
Target: month 4–6

Compare:
- strong reference;
- best Pavlenko thin-transfer coupon.

Primary:
- evaporator resistance;
- dryout/capillary limit;
- rewetting time;
- transient peak;
- sample repeatability.

Internal Stage-1 gate:
- >=15% lower evaporator resistance; OR
- >=20% higher dryout/capillary limit; OR
- >=20% faster rewetting;

with acceptable thickness/process/cycling.

## Proposed role split

### Kutateladze / Pavlenko team
- surface-modification recipe;
- boiling/dryout physics;
- morphology interpretation;
- HFE literature reproduction where useful.

### Our / phone engineering side
- 60–100 μm wick constraint;
- product-path fluid;
- phone-equivalent process sequence;
- strong China-style control;
- transient/moving-hotspot requirements;
- device integration.

## IP discussion before Stage 1

Clarify:
- institute background IP;
- RU2793671 and related surface/process background;
- prior Huawei-related collaboration boundaries as far as shareable;
- foreground ownership for phone-specific thin-wick / fluid-transfer / process-retention results.

Do not ask for confidential prior-contract terms not available for disclosure; ask only whether any restriction affects the proposed field.

## Current judgment

**KEEP as Stage-0 priority #1.**

Reason:
best direct phase-change mechanism evidence.

Main risk:
published geometry/process may not scale to the phone wick budget.

## Evidence confidence

- current team/activity: HIGH
- dielectric boiling mechanism: HIGH
- thin-phone manufacturability: LOW-MEDIUM
- product-fluid transfer: LOW
- long-cycle evidence: LOW
- IP clarity: MEDIUM-LOW
