# Research Progress

Last updated: 2026-10-04

## Overall status

**Estimated research completion: ~55%**
**Estimated remaining research: ~45%**

## Current phase

**Stage-0 partner execution design + manufacturability falsification**

The increase from ~52% reflects substantive research:
- three partner-specific 3–6 month briefs;
- MPEI long-duration R410A two-phase evidence;
- TPU surface-process durability evidence;
- sharper partner-specific manufacturing/transfer kill gates.

Repository/report housekeeping is not counted as research progress.

## This round — Stage-0 Manufacturability & Partner Briefs

New:
- `09_collaboration-roadmap/partner_brief_pavlenko_stage0_v01.md`
- `09_collaboration-roadmap/partner_brief_mpei_ivanov_stage0_v01.md`
- `09_collaboration-roadmap/partner_brief_tpu_stage0_v01.md`

## New finding 1 — MPEI becomes a stronger challenger

Primary:
https://doi.org/10.1134/S0040601525600683
https://doi.org/10.1016/j.pes.2026.100314

Public evidence now includes:
- ~0.1 mm-radius hierarchical microgrooves;
- 100–200 nm Al2O3;
- R410A;
- 42-month periodic two-phase operation;
- reported Rth ~0.015 K/W after long operation;
- post-test morphology without pronounced degradation;
- some capillary-imbibition aging.

Decision:
**MPEI Ivanov moves to Stage-0 priority #2 within Tier B+.**

Not Tier A because:
- application heat flux is far below phone hotspots;
- geometry is too large for direct UTVC transfer;
- no <0.5 mm sealed device.

## New finding 2 — TPU process evidence strengthens, but exposes a new risk

Primary:
https://doi.org/10.1016/j.surfin.2026.109390

TPU demonstrates:
- laser micro/nanotexture;
- hydrocarbon-thermolysis hydrophobization;
- CA up to ~169°;
- humidity/saline/abrasion durability.

But for phone VC:
- hydrocarbon layer may outgas;
- organic residues may contaminate working fluid;
- copper/process compatibility is unknown.

Decision:
**TPU remains Tier B+ Stage-0 priority #3.**

## Stage-0 execution order

1. **Pavlenko** — high-flux mechanism; test geometry/process/fluid scaling.
2. **MPEI Ivanov** — long-life two-phase surface; test high-flux/sub-mm scaling.
3. **TPU** — precision wetting pattern; test vacuum/fluid/process compatibility.
4. **MPEI ordered wick** — pre-device until physical coupon exists.

This order is not a final partner ranking.

## Current partner experiment logic

### Pavlenko
Question:
can mechanism survive reduction to ~60–100 μm wick and water/product fluid?

### MPEI
Question:
can 42-month-stable hierarchical coating survive orders-of-magnitude heat-flux increase and geometry shrink?

### TPU
Question:
can controlled wetting pattern survive VC vacuum/process/fluid environment without contamination?

These are deliberately different falsification axes.

## Current portfolio

### Tier A
Pavlenko/Kutateladze:
working-fluid-transferable sub-mm dryout / rewetting / wetting-state control.

### Tier A-
sealed adaptive film/droplet hybrid.

### Tier B+
- MPEI Ivanov reliability/process challenger — priority #2
- TPU biphilic/pattern challenger — priority #3
- compute + cooling adaptive control

### Pre-device
MPEI ordered porous wick

### Tier B
- multi-hotspot routing
- confined microfan aeroacoustics

## Workstream maturity

| # | Workstream | Current maturity |
|---|---:|
| 01 | Global smartphone thermal problem space | ~64% |
| 02 | Thermal technology landscape | ~44% |
| 03 | Russian institution landscape | ~50% |
| 04 | Russian labs / researchers | **~58%** |
| 05 | Russian papers / patents | **~63%** |
| 06 | Active-cooling deep dive | ~45% |
| 07 | China benchmark & gap | ~56% |
| 08 | Transfer / hypotheses / falsification | **~82%** |
| 09 | Collaboration / PoC / 3-year directions | **~56%** |

## Highest-priority blockers

1. Pavlenko exact thin-mesh process / permeability / adhesion;
2. MPEI actual coating thickness + groove scale-down;
3. MPEI high-flux response;
4. TPU vacuum/outgassing and fluid contamination;
5. TPU copper transfer + RU2812668 inventor/claim;
6. promoted patent family/status;
7. Huawei/background-IP boundary;
8. MPEI ordered-wick physical prototype.

## Next smallest useful stage

Do not broaden again yet.

Next round should close the **highest-value public evidence blockers** for the three briefs:
- extract deeper MPEI geometry/process data from dissertation/papers;
- close TPU patent/process mapping;
- close Pavlenko process/mesh-treatment parameters as far as public evidence allows;
- normalize the three Stage-0 arms into one partner data-request / experiment scorecard.

If key process details remain non-public after systematic search, mark them as **partner-only data requests** rather than continuing low-yield search indefinitely.
