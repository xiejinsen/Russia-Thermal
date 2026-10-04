# Phone Packaging & Teardown Reality Baseline v0.1

Last reviewed: 2026-10-04

## Purpose

Replace coarse "module volume" assumptions with evidence about how current flagship phones actually allocate thermal space.

This is not a full mechanical CAD model. It is a constraint baseline for deciding whether a Russian thermal mechanism can replace or integrate with an existing phone thermal stack.

## Executive insight

Modern smartphone thermal design is increasingly **co-designed with the package, logic board, battery/frame and VC**, rather than added as an independent cooling module.

For the current Surface/Wick PoC, the correct geometry question is therefore:

> can the mechanism fit **inside or replace part of an existing ultra-thin VC/wick budget**?

not:

> can we find 5–15 cm3 of free phone volume?

---

## 1. Current flagship outer envelopes

### Apple iPhone 18 Pro — 2026

Official:
https://www.apple.com/uk/iphone-18-pro/specs/

Source facts:
- 150.0 x 71.9 x 8.75 mm
- 211 g
- aluminum unibody
- IP68

### Samsung Galaxy S26 Ultra — 2026

Official:
https://www.samsung.com/uk/smartphones/galaxy-s26-ultra/

Source facts:
- 7.9 mm thick
- 214 g
- 5000 mAh battery

### Huawei Mate 80 Pro — 2026

Official:
https://consumer.huawei.com/cn/phones/mate80-pro/specs/

Source facts:
- 161.85 x 76 x 7.95 mm
- about 219 g
- IP68 / IP69

### REDMAGIC 11 Pro — current active-cooling reference

Official:
https://uk.redmagic.gg/pages/redmagic-11-pro-specs

Source facts:
- 163.82 x 76.54 x 8.9 mm
- 230 g
- 7500 mAh
- 13,116 mm2 3D VC
- 24,000 RPM fan
- AquaCore active-cooling system

Caution:
cross-phone thickness differences cannot be attributed only to cooling because battery, cameras, frame, display and other architecture differ.

---

## 2. iPhone 17 Pro — VC integrated into phone structure

Independent teardown:
https://www.ifixit.com/News/113388/iphone-17-pro-teardown

Source facts from iFixit:
- first iPhone generation with vapor chamber;
- logic board remains above the battery / close to camera plateau;
- CT shows VC located between heat-generating chips and the large battery/frame heat-spreading structure;
- heat is spread from A19 Pro through the VC into the aluminum frame;
- large camera and battery structures occupy substantial internal area.

iFixit's own thermal test reported under its test conditions:
- iPhone 16 Pro Max throttling onset around 37.8 C external temperature;
- iPhone 17 Pro continuing at about 34.8 C.

Use:
independent architecture / boundary evidence, not a universal performance comparison.

### Cross-source observation

The VC is not occupying a clean rectangular "free module bay."
It is integrated into a crowded stack involving:
- SoC / logic board;
- battery;
- camera region;
- frame;
- wireless charging assembly.

---

## 3. iPhone 18 Pro — package-to-VC co-design goes further

Independent teardown:
https://www.ifixit.com/News/119329/inside-the-tiny-unfixable-eye-iphone-18-pro-and-pro-max-teardown

Source facts:
- A20 Pro moved to the **outside** of the logic-board sandwich;
- the prior A19 Pro was inside the board sandwich with RAM stacked above;
- memory is now placed beside A20 Pro;
- this clears a more direct heat path to the cooling system;
- conformable TIM is placed between A20 Pro and the cooling assembly;
- A20 Pro sits directly against the improved VC;
- VC extends across much of the phone;
- iFixit reports Apple specifies about **3x VC surface area** versus the prior generation;
- aluminum unibody remains part of the heat-spreading system.

### Analyst inference

This is an important strategic trend:

> phone thermal improvement can require **package / memory / board placement changes**, not only a better standalone cooler.

A future Russian collaboration becomes more valuable if its mechanism can be integrated into:
**package -> interface -> VC/wick -> frame/skin**
co-design.

---

## 4. Samsung Galaxy S26 Ultra — packaging remains highly contested

Official dimensions:
https://www.samsung.com/uk/smartphones/galaxy-s26-ultra/

Independent teardown:
https://www.ifixit.com/News/116328/samsungs-galaxy-s26-ultra-pairs-a-brilliant-display-with-a-brutal-repair

Source facts:
- interior architecture remains broadly similar to recent Galaxy Ultra designs;
- battery occupies a large central region;
- motherboard and camera modules occupy the upper region;
- USB-C is on a modular lower daughterboard;
- selfie camera is partly tucked beneath the motherboard.

No exact public VC dimensions were recovered from this teardown.

### Implication

Available thermal area is irregular and mechanically coupled to:
- camera modules;
- board placement;
- battery;
- service/assembly paths.

Do not model an active cooler as a generic cuboid without a location/footprint constraint.

---

## 5. REDMAGIC 11 Pro — active cooling is possible, but not a free thermal win

Official:
https://uk.redmagic.gg/pages/redmagic-11-pro-specs
https://uk.redmagic.gg/blogs/product-information/freeze-frame-redmagic-aquacore-cooling-system

Vendor-reported architecture:
- 13,116 mm2 3D VC;
- flowing liquid cooling;
- liquid metal;
- 24,000 RPM fan;
- airflow duct;
- aluminum mid-frame;
- large battery.

Independent review:
https://www.notebookcheck.net/Powerful-gamer-with-Snapdragon-8-Elite-Gen-5-RedMagic-11-Pro-review.1172247.0.html

Notebookcheck reported under maximum load:
- upper-side average about 53.7 C;
- upper-side maximum about 55.4 C;
- bottom maximum about 54.1 C;
- room temperature about 21.6 C.

Notebookcheck's qualitative verdict:
- active fan supports high performance;
- surface can still become uncomfortably hot;
- fan can be very loud.

Benchmark-integrity caveat:
UL Solutions later delisted the RedMagic 11 Pro series for benchmark-specific behavior.
Reference:
https://www.notebookcheck.net/UL-Solutions-details-benchmark-cheating-behavior-of-RedMagic-11-Pro-series.1271420.0.html

Therefore:
do not treat its 3DMark scores as clean proof of cooling-system superiority.

### Cross-source observation

Active cooling can enter a phone, but:
- it consumes architectural freedom;
- user skin temperature can remain problematic;
- acoustics remain a product constraint;
- benchmark performance alone is not a sufficient thermal success metric.

---

## 6. Huawei Mate 80 — package-level thermal relevance

TechInsights current teardown summary:
https://www.techinsights.com/blog/summary-huawei-mate-80-pro-sgt-al50-deep-dive-teardown

Kirin 9030 Pro packaging summary:
https://www.techinsights.com/blog/hisilicon-kirin-9030-pro-huawei-mate-80-series-advanced-packaging

Public summary facts:
- current 2026 Mate 80 series deep-dive teardown exists;
- Kirin 9030 Pro uses iPoP advanced packaging;
- TechInsights states the package includes innovations it believes are designed to help processor thermal performance.

Detailed construction/dimensions are behind the paid analysis and are not inferred here.

### Strategic implication

For a Huawei-oriented future direction, **package + VC + frame co-design** should be treated as a first-class opportunity layer.

---

## 7. Ultra-thin VC internal geometry — stronger engineering anchor

Primary open-access reference:
https://doi.org/10.3390/mi15050627
https://www.mdpi.com/2072-666X/15/5/627

Reported design:
- finished UTVC: 82 x 58 x 0.39 mm;
- internal cavity footprint: 54 x 78 mm;
- top-shell etch depth: 0.2 mm;
- support-column height / steam channel: 0.2 mm;
- bottom-shell etch depth: 0.11 mm;
- top shell nominal thickness: 0.25 mm;
- bottom shell nominal thickness: 0.15 mm;
- copper mesh thickness: 0.06 mm;
- mesh size: 250;
- two copper-mesh layers plus spiral-woven meshes;
- working fluid: water;
- secondary degassing + resistance welding;
- maximum reported heat-transfer power: 26 W in the tested matrix.

Important:
the paper's nominal shell/channel dimensions should be treated as its own manufacturing geometry, not summed naively as independent stacked thickness values.

### Design implication

For our Stage-0 surface/wick study, a **~200 um internal channel height** is a much more useful geometry anchor than a generic "0.4 mm total VC."

---

## 8. Consequences for Russia Surface/Wick transfer

### Pavlenko mesh evidence

2025:
https://doi.org/10.1134/S0040601525700454

Reported HFE-7100 tests use stainless meshes with:
- wire diameters 100 and 220 um;
- cell side 230 and 401 um.

Additional single-layer analysis reports:
- mesh 80: wire 100 um / aperture 230 um;
- mesh 50: wire 160 um / aperture 315 um;
- mesh 40: wire 220 um / aperture 401 um.

### Falsification insight

A 220 um wire is already comparable to or larger than the **entire ~200 um steam-channel height** in the strong UTVC reference.

Even a 100 um wire consumes roughly half that height before:
- surface modification;
- liquid inventory;
- vapor flow;
- support features.

Therefore:

> the published Pavlenko mesh hardware is **not a drop-in 0.4 mm UTVC wick**.

The transferable object should be:
- modification physics;
- surface morphology;
- nucleation/dryout/rewetting knowledge;

applied to **thinner phone-relevant mesh**, rather than copying the demonstrated mesh geometry.

RU2793671C2 remains encouraging because its dependent functional coating thickness is only 7–35 um:
https://patents.google.com/patent/RU2793671C2/en

But that is a different surface/process family and still needs target-fluid/device validation.

---

## 9. Working-fluid reality gate

Pavlenko's strongest recent boiling evidence uses HFE-7100 / Novec 7100.

3M official:
https://investors.3m.com/news-events/press-releases/detail/5/3m-to-exit-pfas-manufacturing-by-the-end-of-2025
https://www.3m.com/3M/en_US/pfas-stewardship/operations-innovation/

Source fact:
3M completed its exit from PFAS manufacturing at the end of 2025, including fluorinated fluids.

### Decision implication

Do not define HFE-7100 as the future smartphone product fluid.

Use it only as:
- a legacy mechanism-reproduction fluid, if available;
- a bridge to reproduce published Pavlenko behavior.

For the product path:
- water is a valid primary sealed-VC reference because the modern 0.39 mm UTVC baseline uses water;
- if a low-boiling dielectric architecture is required, select a currently manufacturable/regulatorily viable candidate in a separate fluid-screening step.

### New collaboration question

Can the Russian surface/dryout advantage **transfer across working fluids**, rather than depending on one legacy fluorinated fluid?

This is now a Stage-0 discriminator.

---

## 10. Revised phone integration metrics

Every future thermal concept should report both:

### Vertical budget
- total device thickness;
- local stack thickness;
- internal VC/channel height;
- functional coating/wick height.

### In-plane budget
- footprint area;
- overlap with SoC/DRAM;
- conflict with camera/mainboard/battery/wireless charging;
- heat-spreading coverage.

### Architecture role
Classify as:
- **replacement** of existing VC/wick;
- **integrated modification** inside existing VC;
- **additive module**;
- **structural thermal component** (frame/midplate);
- **package-level change**.

Replacement/integrated approaches have a lower packaging penalty than additive modules, all else equal.

---

## 11. Current decision

For PoC-1 Surface/Wick:

**Do not use the old 5/10/15 cm3 module-volume abstraction as the primary geometry gate.**

Use:
- ~0.4 mm total reference class;
- ~0.2 mm internal channel reference;
- wick/functional-layer vertical budget;
- in-plane footprint;
- package-to-VC path;
- replacement-vs-additive architecture.

The old volume sweep remains useful for future active-cooling modules, not for an internal VC surface/wick PoC.
