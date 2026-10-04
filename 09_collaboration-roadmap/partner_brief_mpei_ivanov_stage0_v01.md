# MPEI / Ivanov — 3–6 Month Stage-0 Collaboration Brief v0.1

Last reviewed: 2026-10-04

Status: **Stage-0 priority #2 — reliability/process challenger**

## Decision question

Can MPEI's hierarchical microgroove + Al2O3 nanoparticle surface retain its unusually strong **long-term two-phase durability** after aggressive scaling into a phone-relevant thin VC surface geometry and high heat-flux regime?

## Why this line moved up

Two new primary evidence points materially improve MPEI readiness.

### 2025/2026 thermosyphon performance paper

**[Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon](https://doi.org/10.1134/S0040601525600683)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, M.M. Alyautdinova — *Thermal Engineering*, 2026.

Publicly indexed quantitative details:
- longitudinal microgrooves with radius ~0.1 mm;
- Al2O3 nanoparticles ~100–200 nm;
- AISI304 stainless-steel thermosyphon test section;
- heat flux ~200–1700 W/m2;
- reported thermal-resistance reduction ~2.4–3.0x versus smooth reference;
- strongest effect near horizontal / mildly inclined evaporator orientation.

### 2026 long-term stability paper

**[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.

Source facts:
- hierarchical microgroove + Al2O3 nanoparticle evaporator;
- stainless-steel thermosyphon;
- R410A refrigerant;
- **42-month periodic operation campaign**;
- thermal resistance remained ~0.015 K/W;
- approximately 3x lower than smooth thermosyphon in the reported system;
- SEM/EDX after operation did not show pronounced erosion/degradation/contamination;
- capillary imbibition rate decreased after long operation.

This directly closes part of the previous reliability/fluid-transfer uncertainty.

## Critical transfer caveat

The 2026 paper explicitly describes an **ultra-low heat-load thermosyphon regime**:
- q < ~2000 W/m2 in the studied application class.

This is orders of magnitude below localized smartphone chip heat flux.

Therefore:
**long-term durability evidence is strong; phone heat-flux relevance is weak.**

Do not extrapolate the 3x thermal-resistance result to phone cooling.

## Geometry issue

Current public geometry:
- microgroove radius ~0.1 mm;
- nanoparticle scale 100–200 nm.

A ~100 μm groove radius is already large relative to the ~200 μm internal channel of the modern 0.39 mm UTVC reference.

The phone question is whether the same hierarchical transport principle can be scaled to:
- shallower/narrower grooves;
- <=35 μm added functional layer;
- <=120–150 μm total surface/wick budget.

## Proposed 3–6 month package

### Phase M0 — process/geometry disclosure
Weeks 0–4

Request:
1. groove depth, width, pitch and fabrication tolerance;
2. actual nanoparticle-layer thickness;
3. coating mass/area;
4. adhesion measurement;
5. capillary uptake before/after 42-month test;
6. coating morphology before/after;
7. exact process temperatures;
8. compatible substrates;
9. whether copper coupons have been attempted;
10. R410A charge / saturation regime relevant to the stability data.

Partner deliverable:
**one complete as-built vs aged surface dataset.**

### Phase M1 — geometry-scaled coupons
Month 1–2

Build:
- M-A: existing hierarchical coating geometry;
- M-B: half-scale microgroove geometry;
- M-C: phone-target shallow geometry;
- matched smooth / strong-reference controls.

Preferred target:
- <=35 μm added coating;
- <=120 μm total surface element;
- <=150 μm stretch ceiling.

If 0.1 mm-radius groove cannot be substantially scaled:
**downgrade phone relevance.**

### Phase M2 — fluid and process screen
Month 2–3

Use:
- water first;
- R410A only as durability lineage / cross-fluid reference where appropriate;
- future product dielectric only if later required.

Test:
- soak;
- vacuum/degassing-process simulation;
- 100 cycles.

Question:
does the capillary/wetting function survive without relying on the geotechnical thermosyphon environment?

### Phase M3 — higher heat-flux step-up
Month 3–5

Use a controlled boiling/evaporation coupon to increase local heat flux progressively toward the phone/VC regime.

Do not jump directly from 1700 W/m2 to an extreme target without intermediate failure mapping.

Measure:
- onset;
- thermal resistance / superheat;
- dryout behavior;
- capillary recovery;
- morphology change.

Kill:
- hierarchical advantage disappears once heat flux rises materially;
- permeability/liquid supply becomes the limiting failure;
- groove geometry consumes too much vapor space.

### Phase M4 — Stage-1 comparison decision
Month 5–6

Advance only if:
- thin geometry works;
- water/product-path function survives;
- process/cycling remains stable;
- high-flux trend remains favorable vs strong reference.

## Proposed role split

### MPEI / Ivanov line
- hierarchical coating process;
- long-term degradation knowledge;
- surface/capillary characterization;
- thermosyphon mechanism/model.

### Our / phone engineering side
- micron-scale geometry target;
- high-flux phone boundary;
- sealed-VC comparator;
- package/process sequence;
- transient workload.

## IP position

Relevant MPEI background:
- RU2727406C1
- RU2750831C1
- RU2860061C1

Need to identify:
- which process step is essential background IP;
- whether scaled groove + product-fluid + phone-process retention creates clean foreground space.

## Current judgment

**UPGRADE within Tier B+: Stage-0 priority #2.**

Not Tier A because:
- heat flux/application are far from phone;
- geometry remains too large;
- no <0.5 mm sealed VC proof.

But among challengers, this line now has the **strongest public long-duration two-phase reliability evidence**.

## Evidence confidence

- team continuity: HIGH
- thermosyphon device evidence: HIGH
- long-term durability: HIGH
- cross-fluid evidence: MEDIUM-HIGH
- phone heat-flux transfer: LOW
- thin-phone geometry: LOW
- IP lineage: HIGH
