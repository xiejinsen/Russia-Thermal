# Global Smartphone Thermal Baseline — Round 3

Last reviewed: 2026-10-04

## Purpose

Define current smartphone thermal/user/packaging boundaries that every candidate technology must survive.

Detailed packaging evidence:
[Phone Packaging & Teardown Reality Baseline](phone_packaging_teardown_baseline_v01.md)

## 1. Human-factor baseline

2026 evidence shows phone thermal experience is spatial and time-dependent.

DRS 2026:
https://doi.org/10.21606/drs.2026.2351

Source facts:
- tested 36.0 / 39.5 / 42.0 / 43.5 C;
- dissatisfaction rises with temperature and contact duration;
- thenar region becomes especially sensitive at >=42 C.

Mobile-gaming thermal-experience study:
https://doi.org/10.1016/j.ergon.2026.104014

Under the tested conditions:
- comfort generally below ~38 C;
- experience deteriorates around 39–43 C;
- strong discomfort occurs in the ~44–48 C region.

Implication:
optimize hotspot location + time-at-temperature, not only average back-cover temperature.

## 2. Current flagship outer envelope

### iPhone 18 Pro
Official:
https://www.apple.com/uk/iphone-18-pro/specs/

- 8.75 mm
- 211 g
- aluminum unibody
- IP68

### Samsung Galaxy S26 Ultra
Official:
https://www.samsung.com/uk/smartphones/galaxy-s26-ultra/

- 7.9 mm
- 214 g
- 5000 mAh

### Huawei Mate 80 Pro
Official:
https://consumer.huawei.com/cn/phones/mate80-pro/specs/

- 7.95 mm
- ~219 g
- IP68 / IP69

### REDMAGIC 11 Pro — active-cooling reference
Official:
https://uk.redmagic.gg/pages/redmagic-11-pro-specs

- 8.9 mm
- 230 g
- 7500 mAh
- 13,116 mm2 3D VC
- 24,000 RPM fan

These examples show the phone envelope is tight, but thickness alone cannot isolate cooling cost because architectures differ.

## 3. Packaging trend — thermal is becoming cross-layer architecture

### iPhone 17 Pro
Independent:
https://www.ifixit.com/News/113388/iphone-17-pro-teardown

iFixit CT/teardown shows the VC between the heat-generating chip region and the battery/frame heat-spreading structure.

### iPhone 18 Pro
Independent:
https://www.ifixit.com/News/119329/inside-the-tiny-unfixable-eye-iphone-18-pro-and-pro-max-teardown

Source facts:
- A20 Pro moved to the outside of the logic-board sandwich;
- RAM moved beside the processor;
- a more direct thermal path to the cooling system is created;
- TIM couples SoC to VC;
- VC extends across much of the body;
- iFixit reports Apple specifies ~3x VC surface area vs prior generation.

Cross-source observation:
future phone thermal gains can require **SoC/package/memory/board/VC/frame co-design**, not merely adding a better cooler.

## 4. Ultra-thin VC internal geometry anchor

Primary:
https://doi.org/10.3390/mi15050627

Reported:
- finished UTVC: 82 x 58 x 0.39 mm;
- ~0.2 mm steam-channel/support height;
- 0.06 mm copper mesh;
- two copper-mesh layers plus SWMs;
- water working fluid;
- maximum reported heat-transfer power 26 W in its test matrix.

This is a stronger geometry anchor than total phone thickness for internal surface/wick research.

## 5. Active-cooling boundary

REDMAGIC official:
https://uk.redmagic.gg/blogs/product-information/freeze-frame-redmagic-aquacore-cooling-system

Independent review:
https://www.notebookcheck.net/Powerful-gamer-with-Snapdragon-8-Elite-Gen-5-RedMagic-11-Pro-review.1172247.0.html

Notebookcheck reported at maximum load:
- upper average ~53.7 C;
- upper maximum ~55.4 C;
- bottom maximum ~54.1 C.

Therefore:
active cooling does not automatically solve skin-temperature or acoustic problems.

Benchmark-integrity caution:
https://www.notebookcheck.net/UL-Solutions-details-benchmark-cheating-behavior-of-RedMagic-11-Pro-series.1271420.0.html

Do not use RedMagic benchmark scores alone as proof of thermal-system advantage.

## 6. Working-fluid update

Pavlenko's recent mechanism evidence uses HFE-7100.

3M official:
https://www.3m.com/3M/en_US/pfas-stewardship/operations-innovation/

3M completed its PFAS manufacturing exit at the end of 2025.

Decision:
- HFE-7100 is a **legacy mechanism-bridge fluid**, not the assumed future phone product fluid;
- water is the first sealed-VC product-path reference because current ultra-thin copper VC evidence uses it;
- any future low-boiling dielectric candidate requires a separate supply/regulatory/material-compatibility screen.

## 7. Updated objective

> maximize sustained useful performance under constraints on high-contact skin temperature, time-at-temperature, vertical and in-plane packaging budget, cooling power, acoustics, ingress, orientation, reliability, manufacturing and fluid sustainability.

See:
[Smartphone Thermal Constraint Model](../08_opportunities-transfer/smartphone_constraint_model_v01.md)
