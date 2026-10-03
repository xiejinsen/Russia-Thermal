# Film / Droplet Full-Loop Budget — Feasibility v0.1

Last updated: 2026-10-03

Status: order-of-magnitude engineering screen, not a final design.

## Evidence inputs

Published Kutateladze-associated shear-driven-film experiments report:
- channel heights from ~0.17 to 2.0 mm;
- superficial gas velocities ~2.5–50 m/s in channel-height studies;
- representative channel widths around 30 mm in several rigs;
- forced liquid supply and forced gas supply.

2007 foundation:
https://doi.org/10.1016/j.ijheatfluidflow.2006.05.010

2026 patent:
https://patents.google.com/patent/RU2860581C1/en

## First volume-flow implication

For a 30 mm-wide channel:

### 0.17 mm height
Cross-sectional area:
~5.1e-6 m²

Gas volumetric flow:
- at 2.5 m/s: ~0.76 L/min
- at 50 m/s: ~15.3 L/min

### 0.25 mm height
Cross-sectional area:
~7.5e-6 m²

Gas volumetric flow:
- at 2.5 m/s: ~1.13 L/min
- at 30 m/s: ~13.5 L/min
- at 50 m/s: ~22.5 L/min

These are simple geometry conversions from published superficial velocity ranges.

They are **not** claims that a phone implementation needs these exact flows.

## Why this matters

Even when the channel itself is thin, the gas-moving subsystem may dominate:
- blower volume;
- pressure head;
- acoustic output;
- inlet/outlet;
- sealing;
- separator / condenser architecture.

Therefore channel thickness alone is a misleading miniaturization metric.

## Still-missing quantities

A reliable auxiliary-power calculation still needs:
- full channel pressure drop;
- nozzle pressure drop;
- two-phase pressure drop;
- blower efficiency;
- liquid flow;
- separator pressure loss;
- condenser pressure loss.

Without these:
**do not quote a phone power estimate.**

## Feasibility architecture options

### F1 — direct forced gas + liquid
Closest to laboratory mechanism.

Assessment:
**unlikely phone-optimal** unless pressure drop is exceptionally low.

### F2 — vapor-driven / self-sheared film
Use generated vapor momentum as the gas/shear source.

Potential benefit:
remove external gas mover.

Risk:
stability, startup and load range.

### F3 — local film/droplet hotspot cell + passive VC
Only the hotspot cell contains active film/droplet physics.
VC handles:
- lateral transport;
- condensation / redistribution.

Potential benefit:
shrinks active fluid system.

Current view:
**most promising H1 reframing.**

### F4 — resonant/piezo gas actuation
Use a thin resonant air mover for local shear/droplet transport.

Risk:
still adds acoustic / actuator complexity;
synthetic-jet prior art is crowded.

## Current GO / NO-GO

### NO-GO for direct phone prototype
The evidence does not justify building a phone-integrated H1 system yet.

### GO for feasibility bench
Build a reduced hotspot cell and measure:
- required gas velocity;
- pressure drop;
- minimum liquid flow;
- heat removal at 10/15/25 W;
- orientation;
- acoustic signature.

## Next kill gate

H1 remains alive only if a reduced architecture demonstrates a plausible path to:
- <=2 W auxiliary power;
- <=10–15 cm³ research envelope;
- sealed operation;
- no external high-pressure gas source;
- 15 W sustained heat-load class.

