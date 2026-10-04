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
https://doi.org/10.3390/mi15050627

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
https://www.3m.com/3M/en_US/pfas-stewardship/operations-innovation/

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
https://doi.org/10.3390/mi15050627
https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774

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
https://doi.org/10.1134/S1810232825700183

Mesh-geometry evidence:
https://doi.org/10.1134/S0040601525700454

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
https://patents.google.com/patent/RU2793671C2/en

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

## 5. Arm C — TPU biphilic / contrast-wetting coupon

Primary:
https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413

### Stage-0 strategy

Use the **pattern principle**, not a blind copy of the original open-droplet experiment.

C1:
- copper substrate / thin mesh;
- spatial wetting contrast;
- minimal added vertical thickness.

C2:
- same pattern pitch/fraction sweep under W1.

C3:
- W3 test only after fluid selection.

### Required outcomes

- initial wetting contrast;
- contrast after working-fluid soak;
- contrast after vacuum/thermal processing;
- capillary directionality / redistribution;
- boiling/rewetting behavior;
- pattern durability.

### Current evidence gap

No direct public evidence found in this research round for:
- HFE-7100 operation;
- sealed sub-mm VC;
- long vacuum/cycling stability.

This is recorded as **NOT PUBLICLY EVIDENCED**, not proof of absence.

### Kill gate

Kill before Stage 1 if:
- wetting contrast collapses in W1/W3;
- process adds unacceptable coating thickness;
- only generic prior-art biphilic behavior remains;
- no rewetting/capillary benefit beyond Arm A.

---

## 6. Arm D — MPEI Ivanov hierarchical/coating coupon

Evidence:
https://patents.google.com/patent/RU2727406C1/en
https://patents.google.com/patent/RU2860061C1/en
https://mpei.ru/news/Pages/newsItem.aspx?newsID=5211

### Stage-0 strategy

D1:
- reproduce current hierarchical/tunable-wetting coating on reference substrate.

D2:
- quantify actual **total functional coating thickness**, not only micro/nanoparticle feature scale.

D3:
- test W1 first; W3 after selection.

### Required outcomes

- total layer thickness;
- adhesion;
- porosity / morphology;
- capillary uptake;
- permeability impact where applicable;
- wetting state after soak/vacuum/cycling;
- thermal response.

### Current evidence gap

No direct current public evidence found in this round for:
- HFE-7100 / product dielectric fluid;
- <0.5 mm sealed VC;
- phone manufacturing cycle.

Again:
**not publicly evidenced**, not proof of absence.

### Kill gate

- functional layer cannot fit <=150 um total surface/wick budget;
- wetting behavior fails in W1/W3;
- adhesion/cycling unstable;
- thermal benefit is generic and matched by Arm A.

---

## 7. Arm E — MPEI ordered-wick pre-screen

Primary:
https://doi.org/10.30724/1998-9903-2026-28-4-193-205

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

Most ready:
1. **Pavlenko mechanism transfer** — 60–100 um-class mesh / thin functional surface.
2. **TPU biphilic pattern** and **MPEI Ivanov coating** — parallel small coupons.

Pre-device:
3. MPEI ordered wick.

The purpose is to **kill weak transfer paths quickly**, not guarantee a Russian arm wins.
