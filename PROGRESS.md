# Research Progress

Last updated: 2026-10-04

## Overall status

**Estimated research completion: ~55%**
**Estimated remaining research: ~45%**

## Scope guard reaffirmed — mobile terminal / chip thermal only

All future rounds must keep the main decision surface centered on:
- smartphone / tablet thermal management;
- mobile SoC / memory / package heat;
- ultra-thin heat spreading / two-phase devices;
- phone-compatible active cooling;
- mobile thermal control.

Non-mobile thermal systems may contribute **mechanism evidence only** until a quantified phone/chip transfer path is established.

This scope correction does not change the ~55% research completion estimate.

## Citation readability refresh — 2026-10-04

Human-facing paper/patent citations are being standardized to:

**[Title](link)** — Authors / Inventors — *Journal / Patent No. / Assignee* — Year.

Completed first-pass migration for:
- three Stage-0 partner briefs;
- surface/wick patent map;
- Russia–China surface/wick comparison;
- collaboration index;
- final-report evidence appendix.

Added:
- `evidence/readable_bibliography.md` as the preferred human entry point;
- machine-oriented `source_register.md` remains compact/raw by design.

This presentation cleanup does not change the ~55% research completion estimate.

## Paper / patent brief library — 2026-10-04

Added:
- `evidence/paper_briefs_decision_grade.md`
- `evidence/patent_briefs_decision_grade.md`

Each current decision-grade paper now has:
- review-status label;
- background/problem;
- technical method;
- main conclusion;
- implication for mobile/chip thermal insight;
- mobile relevance.

Each current decision-grade patent now has:
- review-status label;
- problem;
- claim/control point;
- strategic prior-art implication;
- implication for our mobile/IP/PoC thesis.

Coverage note:
the current library covers the **decision-grade set** in the readable bibliography. Historical/foundational long-tail sources in the source register will be backfilled only when they are promoted or materially used in the final report.

This synthesis/readability work does not change the ~55% research completion estimate.

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
- **[Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon](https://doi.org/10.1134/S0040601525600683)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, M.M. Alyautdinova — *Thermal Engineering*, 2026.
- **[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.

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
- **[Hydrophobization of Metal Surfaces by Laser Treatment and Subsequent Heat Treatment of Hydrocarbon Liquids](https://doi.org/10.1016/j.surfin.2026.109390)** — D.V. Feoktistov, E.G. Orlova, G.E. Kotelnikov *et al.* — *Surfaces and Interfaces*, 2026.

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
