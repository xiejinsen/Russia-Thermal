# Smartphone Thermal Constraint Model v0.2

Last reviewed: 2026-10-04

Status: research/PoC screening model. It separates evidence-backed boundaries from internal engineering targets.

## 1. Objective

> maximize sustained useful performance while respecting human thermal comfort, product geometry, cooling energy, acoustic quality, ingress protection, reliability, orientation, manufacturing and working-fluid sustainability.

This is not a product specification.

## 2. Evidence-backed external constraints

### Human thermal comfort

DRS 2026:
https://doi.org/10.21606/drs.2026.2351

Gaming thermal-experience study:
https://doi.org/10.1016/j.ergon.2026.104014

Research screening zones:
- preferred/stretch: <=38–40 C in sustained contact regions;
- caution: 40–42 C;
- strong penalty: >=42 C in grip-sensitive regions;
- early PoC kill: sustained >45 C in defined high-contact region.

These are research screening values, not universal safety standards.

### Current phone envelope

Apple iPhone 18 Pro:
https://www.apple.com/uk/iphone-18-pro/specs/
- 8.75 mm, 211 g, IP68.

Samsung Galaxy S26 Ultra:
https://www.samsung.com/uk/smartphones/galaxy-s26-ultra/
- 7.9 mm, 214 g.

Huawei Mate 80 Pro:
https://consumer.huawei.com/cn/phones/mate80-pro/specs/
- 7.95 mm, ~219 g, IP68/IP69.

### Packaging reality

iPhone 18 Pro teardown:
https://www.ifixit.com/News/119329/inside-the-tiny-unfixable-eye-iphone-18-pro-and-pro-max-teardown

Evidence shows thermal path is co-designed with:
- SoC location;
- memory placement;
- TIM;
- VC;
- aluminum structure.

Therefore phone integration is not represented adequately by a single module-volume number.

### UTVC internal anchor

Primary:
https://doi.org/10.3390/mi15050627

Reference:
- 0.39 mm completed UTVC;
- ~0.2 mm steam-channel/support height;
- 0.06 mm copper mesh;
- water working fluid.

For surface/wick concepts, **internal channel/wick height** is the primary geometry gate.

## 3. Architecture classification

Every candidate must be labeled as one of:

1. **integrated modification**
   - modifies surface/wick inside an existing VC/device envelope;

2. **replacement**
   - replaces a current VC/wick/spreader component;

3. **additive module**
   - consumes new thickness/area/volume;

4. **structural thermal element**
   - frame/midplate/cover becomes part of heat path;

5. **package-level change**
   - changes SoC/memory/board/interface layout.

Packaging penalty generally rises from integrated/replacement toward additive, unless the additive module produces a large system-level frontier shift.

## 4. Geometry metrics

Always report:

### Vertical
- total phone/device thickness;
- local thermal-stack thickness;
- component thickness;
- internal channel height;
- wick height;
- functional coating added thickness.

### In-plane
- footprint area;
- overlap with SoC/DRAM;
- coverage/spreading area;
- conflict with camera/mainboard/battery/wireless-charging area.

### Mechanical
- mass;
- structural role;
- sealing/opening requirement;
- service/assembly impact.

## 5. Internal screening targets — active modules

These remain project assumptions for active-cooling architecture comparison, not product facts:

Thickness sweep:
- 0.8 / 1.2 / 1.5 / 2.0 mm

Module-volume classes:
- 5 / 10 / 15 cm3

But these are **not the primary geometry model for PoC-1 internal VC surface/wick work**.

## 6. Internal screening targets — surface/wick PoC-1

Strong reference:
~0.4 mm total-class UTVC with ~0.2 mm internal channel.

Stage-0 research targets:
- ~60 um-class thin mesh where feasible;
- <=100 um mesh as transfer/stretch route;
- added functional layer target <=35 um;
- total functional wick/surface element target <=120 um;
- stretch ceiling <=150 um.

These are internal gates informed by the current reference, not published industry standards.

A >=200 um local structure is disfavored for a 0.4 mm-class reference unless it replaces another structural/channel function.

See:
../09_collaboration-roadmap/poc01_stage0_coupon_matrix_v01.md

## 7. Working-fluid gate

### Product-path reference
DI water for sealed copper VC comparison.

### Mechanism bridge
HFE-7100 only where available/appropriate to reproduce Pavlenko literature.

3M:
https://www.3m.com/3M/en_US/pfas-stewardship/operations-innovation/

3M completed PFAS manufacturing exit at end-2025.

Therefore HFE-7100 is not assumed to be a sustainable future product fluid.

### Future dielectric candidate
TBD after:
- supply;
- regulatory trajectory;
- thermophysical properties;
- material compatibility;
- flammability;
- environmental profile;
- sealing/vacuum compatibility.

A Russian surface route is stronger if benefits transfer across product-relevant fluids.

## 8. Heat-load normalization

Internal research loads:
- 8 W sustained;
- 15 W sustained;
- 25 W transient/burst.

Multi-source:
- 3 or 5 heat sources;
- moving/alternating hotspots.

These are normalization loads, not claims about a specific SoC.

For PoC-1 Stage 1, retain:
- 5 / 8 / 12 / 15 W steady;
- 5 -> 15 W transient;
- repeated 8 -> 15 -> 8 W.

## 9. Cooling power — active routes

Sweep:
- 0.25 / 0.5 / 1.0 / 2.0 W

Report:
- extra heat rejected per cooling W;
- sustained compute gain;
- net system energy.

## 10. Acoustic evaluation

Measure:
- overall SPL;
- 1/3-octave spectrum;
- tonal prominence;
- blade-passing components;
- loudness/sharpness proxy;
- vibration.

Compare against same-envelope installed baseline, not free-air fan data alone.

## 11. Orientation / environment

Orientation:
- face up;
- face down;
- portrait;
- landscape;
- adverse gravity orientation.

Ambient:
- 20 / 25 / 35 C.

Later:
- humidity;
- dust;
- shock/drop;
- long aging.

## 12. Reliability

Early mechanism/coupon:
- fluid soak;
- vacuum/process exposure;
- 100 thermal cycles;
- survivor 500 cycles.

Active system:
- 100 h continuous;
- 500 start/stop;
- repeated orientation startup.

Later:
- ingress;
- fatigue;
- permeation/liquid loss;
- corrosion/adhesion.

## 13. Primary normalized metrics

Thermal:
- hotspot temperature;
- skin/contact-zone temperature;
- evaporator/device thermal resistance;
- dryout/capillary limit;
- rewetting time;
- time to thermal threshold.

Performance:
- sustainable heat load;
- sustained compute proxy.

Energy:
- cooling power;
- net energy.

Mechanical:
- vertical budget;
- in-plane footprint;
- mass.

Reliability:
- process/cycle drift;
- orientation;
- sample repeatability.

Product:
- ingress;
- manufacturability;
- assembly;
- BOM proxy;
- working-fluid sustainability.

## 14. Decision rule

A technology advances only if:
1. mechanism survives a plausible phone-scale geometry;
2. strong China/global comparator is beaten on a normalized metric;
3. packaging role is credible;
4. reliability/process path exists;
5. Russian capability is non-trivial to reproduce;
6. a small falsifiable PoC exists;
7. product path is not dependent on an obsolete/unsustainable fluid or process.

Visualize candidates on a Pareto surface:
**sustained heat load / skin temperature / power / noise / vertical+in-plane space / reliability / manufacturability**.
