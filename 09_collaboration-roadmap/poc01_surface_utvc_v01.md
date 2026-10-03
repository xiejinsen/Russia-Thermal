# PoC-1 — Russian Surface × Ultra-Thin VC v0.2

Last updated: 2026-10-03

## Decision status

**GO for lab PoC design.**

This does not mean GO for product development or final partner selection.

## Evidence base — original links

### Russian surface capability
1. Shvetsov, Zhukov, Pavlenko — 2D-modulated capillary-porous coatings, HFE-7100:
   https://doi.org/10.1016/j.applthermaleng.2024.125344

2. Brester, Shvetsov, Zhukov, Pavlenko — electrochemically modified steel mesh, HFE-7100:
   https://doi.org/10.1134/S1810232825700183

3. Volodin et al. — black silicon / HFE-7100 negative evidence:
   https://doi.org/10.1134/S1810232825700225

4. Pavlenko laboratory / current project / Huawei collaboration:
   https://www.itp.nsc.ru/lmpt/?lang=en&page_id=1257

### China / modern UTVC comparator
5. Zhang et al. — 0.35 mm ultra-thin VC with composite mesh wick:
   https://doi.org/10.1016/j.applthermaleng.2024.122813

6. SCUT composite-wick UTVC optimization:
   https://doi.org/10.1115/1.4065170

### Evidence caveat
The Russian boiling papers use test geometries and liquid-layer heights that are **not directly comparable** with a 0.3–0.5 mm sealed phone VC. Therefore this PoC tests transferability; it does not assume the published percentage gains will carry over.

## Research question

Can Kutateladze phase-change / wettability / porous-surface knowledge improve a modern sub-mm VC under phone-relevant thickness and transient/orientation constraints?

## Candidate interventions

### Variant A — baseline
Modern composite mesh / printed wick reference.

### Variant B — electrochemically modified mesh
Inspired by:
https://doi.org/10.1134/S1810232825700183

### Variant C — miniaturized 2D modulated porous surface
Inspired by:
https://doi.org/10.1016/j.applthermaleng.2024.125344

### Variant D — optional negative/control
Black-silicon-inspired surface to study fluid-specific wettability degradation:
https://doi.org/10.1134/S1810232825700225

## Fixed constraints

Target total VC thickness classes:
- 0.3 mm
- 0.4 mm
- 0.5 mm

Hold constant:
- shell material;
- footprint;
- working fluid;
- fill ratio;
- heater dimensions;
- condenser boundary;
- test pressure;
- assembly method.

## Workloads

Steady:
- 5 W
- 8 W
- 12 W
- 15 W

Transient:
- 5 -> 15 W step
- 8 -> 15 -> 8 W
- repeated burst cycles

## Orientation

- horizontal favorable
- horizontal inverted
- portrait
- landscape
- adverse gravity orientation

## Main metrics

- evaporator thermal resistance
- total VC thermal resistance
- dryout/capillary limit
- startup overshoot
- rewetting time
- maximum wall temperature
- orientation penalty
- cycle drift

## Success gate

Advance collaboration if one Russian-inspired variant gives repeatable:
- >=15% lower evaporator resistance; or
- >=20% higher dryout/capillary limit; or
- >=20% faster rewetting;

while:
- total thickness is unchanged;
- orientation penalty does not materially worsen;
- process survives cycling;
- manufacturing path looks scalable.

These thresholds are project screening criteria, not claims from the cited papers.

## Kill / downgrade gate

Downgrade if:
- gains vanish under 0.3–0.5 mm confinement;
- modified surfaces lose wettability after boiling / cycling;
- added structure consumes vapor space and hurts total resistance;
- fabrication variability is high;
- strong Chinese composite-wick baseline matches the result.

## Collaboration split

### Kutateladze
- select surface physics;
- define modification parameters;
- explain nucleation / dryout / rewetting;
- characterize surfaces pre/post test.

### Our side / China manufacturing partner
- fabricate sub-mm VC test coupons;
- assemble controlled devices;
- run phone-relevant transient/orientation tests;
- perform reliability cycling.

## IP target

Potential joint claims should focus on:
- surface + wick + confinement geometry;
- fluid-specific wettability retention;
- transient rewetting;
- integration into sub-mm mobile two-phase device.

Avoid broad claims on modified boiling surfaces; prior art is crowded.
