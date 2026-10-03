# PoC-1 — Russian Surface × Ultra-Thin VC v0.1

Last updated: 2026-10-03

## Decision status

**GO for lab PoC design.**

This does not mean GO for product development or final partner selection.

## Research question

Can Kutateladze phase-change / wettability / porous-surface knowledge improve a modern sub-mm VC under phone-relevant thickness and transient/orientation constraints?

## Candidate interventions

### Variant A — baseline
Modern composite mesh / printed wick reference.

### Variant B — electrochemically modified mesh
Inspired by Brester/Shvetsov/Zhukov/Pavlenko HFE-7100 work.

### Variant C — miniaturized 2D modulated porous surface
Inspired by Shvetsov/Zhukov/Pavlenko SLM/SLS coatings.

### Variant D — optional negative/control
Black-silicon-inspired surface to study fluid-specific wettability degradation.

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

