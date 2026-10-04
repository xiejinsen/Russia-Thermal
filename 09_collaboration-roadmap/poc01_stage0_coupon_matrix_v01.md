# PoC-1 Stage-0 Coupon Matrix v0.1

Last reviewed: 2026-10-04

Status: **first frozen research matrix for coupon screening**.
This is not a product specification.

## Objective

Select at most **two Russian-inspired surface/wick routes** for sealed-device Stage 1.

Stage 0 must answer, before expensive VC builds:

1. does the surface/wick fit a phone-relevant vertical budget?
2. does the mechanism survive the target working fluid?
3. does it survive vacuum/process/thermal cycling?
4. does it create a measurable capillary/wetting/dryout control benefit?
5. is the technical/IP thesis narrower than generic hydrophilic/biphilic/laser/porous treatment?

## Engineering anchor

Strong reference:
**[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.

Reference facts:
- 0.39 mm finished UTVC;
- ~0.2 mm steam-channel/support-column height;
- 0.06 mm copper mesh;
- two mesh layers + SWM;
- water working fluid.

Therefore Stage-0 screening is anchored to **tens-to-low-hundreds of microns**, not millimeter-class porous samples.

---

## 1. Common coupon platform

### Base materials

Primary:
- copper coupon / copper mesh, because contemporary UTVC reference uses copper.

Secondary:
- stainless steel, only where needed to reproduce a Russian process before transfer to copper.

Every result must state substrate explicitly.

### Geometry classes — internal screening targets

These are project targets, not literature standards.

**Class P — product-path thin**
- mesh / structural element: ~60 um class where feasible;
- functional surface added thickness: target <=35 um;
- total functional wick/surface element: target <=120 um.

**Class T — transfer/stretch**
- total wick/surface element: <=150 um.

**Reject for Stage-1 0.4 mm reference**
- local structure requiring >=200 um vertical height unless it replaces another channel/support function.

Reason:
the modern reference provides only ~200 um internal steam-channel height.

### Required metrology

Before thermal test:
- total thickness;
- added functional-layer thickness;
- pore / feature size distribution;
- porosity where measurable;
- roughness / morphology;
- mass gain;
- contact angle where meaningful;
- capillary rise / uptake;
- permeability proxy.

---

## 2. Working-fluid matrix

### Fluid W1 — product-path reference

**DI water**

Why:
- used in the strong 0.39 mm sealed UTVC reference;
- widely relevant to conventional copper VC physics;
- does not depend on a discontinued 3M fluorinated-fluid supply chain.

### Fluid W2 — Russian evidence bridge

**HFE-7100 / legacy equivalent only if legally and practically available**

Purpose:
- reproduce / connect to Pavlenko published mechanism;
- not the assumed future product fluid.

Important supply context:
3M completed PFAS manufacturing exit at end-2025:
**[PFAS Stewardship — Operations & Innovation](https://www.3m.com/3M/en_US/pfas-stewardship/operations-innovation/)** — 3M — current.

### Fluid W3 — future low-boiling dielectric candidate

**TBD after supply/regulatory/property screen.**

Do not nominate a product fluid merely because it resembles HFE-7100.

Selection criteria:
- commercial availability;
- regulatory trajectory;
- boiling point / vapor pressure;
- latent heat;
- surface tension;
- material compatibility;
- flammability;
- environmental profile;
- vacuum/seal compatibility.

### Stage-0 rule

A Russian surface is strategically stronger if its benefit transfers from W2 evidence lineage to W1 and/or W3.

If benefit exists only in legacy HFE-7100:
**downgrade product relevance.**

---

## 3. Arm A — modern China-style reference coupon

Purpose:
avoid weak controls.

Reference features:
- thin copper mesh;
- modern wettability treatment / chemical oxidation;
- thickness measured and matched;
- same fluid and substrate as challenger.

Evidence:
- **[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.
- **[Effect of Laser Ablation Surface Modification on the Capillary Performance of the Wick Structure for Ultra-Thin Vapor Chamber](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774)** — Jiu Yu, Wenqi Fang, Guoliang Hu *et al.* — *International Journal of Heat and Mass Transfer*, 2025.

Measurements:
- capillary uptake;
- wetting state;
- permeability proxy;
- boiling/evaporation response;
- post-cycle drift.

---

## 4. Arm B — Pavlenko mechanism-transfer coupon

### Published evidence

HFE-7100 modified mesh:
**[Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100](https://doi.org/10.1134/S1810232825700183)** — A.E. Brester, D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Journal of Engineering Thermophysics*, 2025.

Mesh-geometry evidence:
**[Effect of Layer Height on Heat Transfer during Boiling of Dielectric Liquid on Mesh Coatings](https://doi.org/10.1134/S0040601525700454)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Thermal Engineering*, 2025.

Published mesh family includes:
- 100 um wire / 230 um aperture;
- 160 um wire / 315 um aperture;
- 220 um wire / 401 um aperture.

### Critical correction

Do **not** use 220 um mesh as the default Stage-0 phone coupon.

Reason:
220 um is comparable to/exceeds the ~200 um channel height in the strong UTVC reference.

### Stage-0 transfer strategy

B1:
- reproduce modification on the thinnest published mesh if practical (~100 um class).

B2:
- transfer the same modification principle to ~60 um-class copper or stainless mesh.

B3:
- optional thin capillary/coating route based on RU2793671-style tens-of-microns functional layer, recognizing it is a different process family.

Patent:
**[Heat Transfer Wall of a Heat Exchanger and Method for Forming a Coating to Intensify Heat Transfer](https://patents.google.com/patent/RU2793671C2/en)** — A.A. Nikiforov, A.N. Pavlenko, M.Yu. Kuprikov *et al.* — RU2793671C2 — Kutateladze Institute of Thermophysics SB RAS / A.A. Nikiforov — 2023.

### Required outcomes

- added modification thickness;
- pore morphology;
- capillary uptake;
- permeability penalty;
- W1 water behavior;
- W2 HFE behavior if available;
- wetting retention after cycling;
- adhesion/process compatibility.

### Pavlenko promotion logic

Advance if the **mechanism survives thickness scaling**.

Kill/reframe if:
- the enhancement disappears on 60–100 um-class mesh;
- modification blocks permeability;
- benefit only exists on thick 220 um mesh or millimeter liquid layers;
- W1/W3 transfer fails.

---

## 5. Arm C — TPU laser / wettability-contrast coupon

Primary evidence:
- **[Heat-Transfer Enhancement and Evaporation Mechanisms on Roughness-Controlled Wettability-Contrast Surfaces](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)** — D.V. Feoktistov, E.G. Orlova, E.Yu. Laga *et al.* — *International Journal of Heat and Mass Transfer*, 2026.
- **[Hydrophobization of Metal Surfaces by Laser Treatment and Subsequent Heat Treatment of Hydrocarbon Liquids](https://doi.org/10.1016/j.surfin.2026.109390)** — D.V. Feoktistov, E.G. Orlova, G.E. Kotelnikov *et al.* — *Surfaces and Interfaces*, 2026.
- **[Method for Forming Micro- and Nanostructures on the Heat-Exchange Surface of a Steel Product](https://patents.google.com/patent/RU2812668C1/en)** — Darya A. Kuznechenkova, Evgeniya G. Orlova, Dmitry V. Feoktistov — RU2812668C1 — TPU — 2024.

### Stage-0 strategy

Do **not** treat TPU as one coupon family.

C1 — **laser-only / low-organic control**
- copper substrate / thin mesh;
- transfer the Feoktistov/Orlova laser-texture capability without the hydrocarbon-derived hydrophobic layer;
- purpose: isolate topology/roughness benefit with lower contamination risk.

C2 — **hydrocarbon-functionalized biphilic branch**
- copper substrate;
- spatial wetting contrast;
- same geometry envelope as C1;
- purpose: test whether wetting contrast adds confined liquid-routing / rewetting value beyond laser topology alone.

C3 — matched strong generic control
- standard oxidation / hydrophilic laser-treated reference;
- same copper, thickness and test sequence.

W3 is tested only after a future dielectric candidate is selected.

### Required outcomes

Before two-phase thermal ranking:
- actual profile / feature height;
- initial wetting state and spatial contrast;
- vacuum/process mass-loss or contamination proxy;
- W1 water soak;
- contact/wetting retention after vacuum/thermal exposure;
- capillary directionality / redistribution.

Then:
- boiling / dryout / rewetting behavior;
- pattern durability;
- comparison C1 vs C2 vs Arm A.

### Current evidence state

Publicly closed:
- RU2812668 inventor/team linkage;
- independent laser-process claim;
- quantitative laser window;
- steel roughness range.

Still not publicly demonstrated:
- copper transfer;
- vacuum/outgassing;
- sealed sub-mm VC;
- long sealed two-phase cycling.

This is **EXPERIMENT-ONLY** for Stage-0.

### Kill gate

Kill / reframe before Stage 1 if:
- hydrocarbon branch shows unacceptable contamination/outgassing;
- wetting contrast collapses in W1/W3 or after processing;
- laser-only / standard reference matches C2;
- no confined rewetting/capillary benefit beyond Arm A;
- feature height/process consumes unacceptable vertical budget.

---

## 6. Arm D — MPEI Ivanov hierarchical/coating coupon

Evidence:
- **[Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon](https://doi.org/10.1134/S0040601525600683)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, M.M. Alyautdinova — *Thermal Engineering*, 2026.
- **[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.
- **[Heat Transfer Crisis Investigation in a Microchannel with and without Nanoparticles Coating](https://doi.org/10.1088/1742-6596/1683/2/022087)** — Yu.A. Kuzma-Kichta, A.V. Lavrikov, M. Shustov, E.A. Kustova, N.S. Ivanov *et al.* — *Journal of Physics: Conference Series*, 2020.
- **[Method of Forming a Porous Coating of Nanoparticles](https://patents.google.com/patent/RU2727406C1/en)** — Yu.A. Kuzma-Kichta, N.S. Ivanov, D.S. Kiselev, A.V. Lavrikov — RU2727406C1 — MPEI — 2020.
- **[Method for Forming Heat Transfer Surface with Adjustable Wettability Properties](https://patents.google.com/patent/RU2860061C1/en)** — N.S. Ivanov, M.M. Alyautdinova — RU2860061C1 — MPEI — 2026.

Public process lineage:
- ~100 μm groove-radius hierarchy;
- representative ~5 μm Al2O3 coating state;
- thicker >10–15 μm deposition states under other conditions;
- ~0.2 mm water-boiling/CHF capability in the same MPEI/Ivanov lineage;
- 42-month R410A durability for the later hierarchy.

### Stage-0 strategy

D1 — current/as-built hierarchy control
- obtain or reproduce the current partner geometry;
- measure actual groove depth / width / pitch / tolerance;
- measure current coating-thickness distribution and sample variation.

D2 — half-scale hierarchy
- reduce groove geometry while preserving the coating process.

D3 — phone-target shallow hierarchy
- fit the <=120–150 μm functional-element budget where possible.

For D1–D3:
- W1 water first;
- copper primary transfer substrate;
- high-flux step-up before sealed-VC build.

### Required outcomes

- true surface profile / total functional height;
- coating thickness distribution;
- adhesion;
- capillary uptake;
- measured permeability or robust proxy;
- wetting/capillary state after soak/vacuum/cycling;
- high-flux dryout/CHF/rewetting trend;
- comparison versus Arm A.

### Current evidence state

The old questions:
- "is any thin-channel/high-flux capability present?"
- "is coating thickness completely unknown?"

are now partly closed by public lineage.

The decisive unknown is narrower:
> does the **exact long-life hierarchical surface** keep its liquid-supply / dryout advantage when geometry is aggressively scaled and heat flux is raised toward the phone/UTVC regime?

### Kill gate

- hierarchy cannot scale below the Stage-0 geometry ceiling;
- permeability/liquid supply collapses during scale-down;
- high-flux advantage disappears;
- copper/process/cycling is unstable;
- thermal benefit is generic and matched by Arm A.

---

## 7. Arm E — MPEI ordered-wick pre-screen

Primary evidence:
[MPEI ordered-wick capillary/permeability model](https://doi.org/10.30724/1998-9903-2026-28-4-193-205) — primary paper, 2026; full readable citation remains a P1 bibliography backfill item.

Status:
**not yet a full thermal coupon arm.**

Before promotion require:
- physically manufactured thin specimen;
- actual thickness;
- permeability;
- capillary pressure / uptake;
- repeatability.

Geometry target:
- <=150 um preferred for Stage-0 relevance;
- any thicker proof remains mechanism-only.

Do not consume sealed-device resources until this gate passes.

---

## 8. Common process-stability sequence

For A–D:

### S0 — as fabricated
Measure:
- geometry;
- contact/wetting;
- capillary/permeability proxy.

### S1 — fluid soak
- 24 h initial;
- 168 h follow-up for survivors.

### S2 — vacuum / degassing simulation
Use a controlled process compatible with planned VC manufacturing.

Record:
- surface chemistry/wetting change;
- mass loss;
- delamination.

### S3 — thermal cycling
Initial screen:
- 100 cycles.

Survivor:
- 500 cycles.

Temperature limits to be chosen to match material/process route; do not exceed what the final VC seal/material can tolerate merely to create an artificial failure.

### S4 — boiling / dryout / rewetting screen
Measure:
- onset behavior;
- evaporator superheat;
- dryout signature;
- rewetting time;
- repeatability.

---

## 9. Normalized Stage-0 outputs

Every arm reports:

### Geometry
- substrate;
- base thickness;
- functional added thickness;
- total wick/surface height;
- feature/pore distribution.

### Fluid
- fluid identity;
- supply/regulatory status;
- saturation/ambient test condition.

### Surface/capillary
- wetting/contact metric;
- capillary uptake;
- permeability proxy;
- before/after process drift.

### Thermal
- heat flux/load;
- heater footprint;
- temperature/superheat;
- dryout point;
- rewetting time.

### Reliability
- soak hours;
- vacuum/process exposure;
- cycle count;
- morphology/adhesion change.

### Manufacturing
- process temperature;
- process time;
- area uniformity;
- sample-to-sample variation.

### IP
- background patent/process;
- proposed foreground control point;
- blocking/adjacent prior art.

---

## 10. Promotion criteria to sealed Stage 1

Promote at most two Russian-inspired arms.

Minimum:
1. total surface/wick element fits <=150 um Stage-0 transfer target or shows a credible replacement architecture;
2. functional state survives W1 and relevant process sequence;
3. no catastrophic permeability/capillary penalty;
4. measurable dryout/rewetting or evaporator benefit versus Arm A;
5. repeatable across >=3 samples;
6. plausible narrow foreground-IP thesis;
7. no dependency on legacy HFE-7100 as the only viable fluid.

Preferred quantitative gate, retained from PoC-1:
- >=15% lower evaporator resistance; OR
- >=20% higher dryout/capillary limit; OR
- >=20% faster rewetting.

These thresholds are **internal screening criteria**, not literature claims.

---

## 11. Current predicted sequence

Stage-0 priority:
1. **Pavlenko mechanism transfer** — 60–100 μm-class mesh / thin functional surface.
2. **MPEI Ivanov hierarchy** — current / half-scale / phone-target geometry ladder with water high-flux step-up.
3. **TPU** — laser-only low-organic vs hydrocarbon-biphilic copper screen.

Pre-device:
4. MPEI ordered wick.

The purpose is to **kill weak transfer paths quickly**, not guarantee a Russian arm wins.
