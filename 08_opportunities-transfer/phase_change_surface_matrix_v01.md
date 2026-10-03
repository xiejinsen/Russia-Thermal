# Phase-Change Surface Technology Matrix v0.1

Last updated: 2026-10-03

## Normalized comparison

| Surface route | Russia evidence | Manufacturing route | Main benefit | Main weakness | Phone-transfer status |
|---|---|---|---|---|---|
| 2D-modulated capillary-porous metal | Pavlenko/Shvetsov/Zhukov | SLM/SLS additive metal | very large CHF uplift in tested HFE-7100 thin layers | current geometry/liquid layer too thick | **promising mechanism; miniaturization required** |
| Electrochemically modified steel mesh | Brester/Shvetsov/Zhukov/Pavlenko | hydrogen-bubble electrochemical modification | up to ~81% HTC uplift vs unmodified mesh in reported test | durability/thickness not yet public | **best first integration candidate** |
| Black silicon | Kutateladze + Alferov-linked collaborators | low-temp plasma-chemical etching | improved wicking + HTC | HFE-7100 CHF not improved due wettability loss | **negative/control candidate** |
| Generic modern Chinese composite UTVC wick | multiple SCUT/China lines | mesh, printing, laser, sintering | proven sub-mm manufacturability | already strong baseline | **mandatory comparator** |
| Printed multi-scale powder wick | recent China research | powder printing + pore forming / sintering | 0.3 mm wick, strong permeability/capillary gains | device integration varies | **high-bar comparator** |

## Most important insight

**Cross-source observation:**
The best Russian published percentage gains are measured in thermal test geometries much thicker than current phone VC stacks.

Therefore the correct PoC is **not**:
> reproduce the published boiling experiment.

It is:
> preserve the surface mechanism while collapsing the liquid/vapor space by roughly an order of magnitude into a modern UTVC envelope.

## Three competing hypotheses

### H2a — surface chemistry is the main transferable value
Electrochemically modified mesh retains benefit when compressed into a sub-mm VC.

Falsifier:
benefit disappears after assembly / vacuum bake / fill / cycling.

### H2b — macro/micro porous geometry is the main value
2D modulation improves dryout because it reorganizes liquid/vapor pathways even after thickness scaling.

Falsifier:
required structure height consumes too much vapor space or creates pressure drop.

### H2c — wettability alone is insufficient
Transient, fluid-specific wetting stability matters more than initial contact angle.

Evidence:
black-silicon HFE-7100 result.

Falsifier:
stable superhydrophilic treatment provides same CHF benefit after cycling.

## Proposed first A/B/C test

A. contemporary Chinese composite-mesh reference  
B. same mesh with electrochemical modification  
C. miniaturized Russian-inspired 2D porous structure

Hold:
- outer VC thickness: 0.3–0.5 mm class
- working fluid
- fill ratio
- footprint
- heater
- condenser boundary condition

Measure:
- capillary transport
- startup
- thermal resistance
- dryout
- rewetting
- five orientations
- 100–500 thermal cycles

