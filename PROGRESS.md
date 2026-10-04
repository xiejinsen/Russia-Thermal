# Research Progress

Last updated: 2026-10-04

## Overall status

**Estimated research completion: ~52%**
**Estimated remaining research: ~48%**

## Current phase

**Stage-0 specification + packaging/fluid-transfer falsification**

This increase from ~49% reflects substantive engineering research:
- phone packaging/teardown baseline;
- UTVC internal-geometry calibration;
- Pavlenko mesh geometry closure;
- working-fluid sustainability correction;
- Stage-0 coupon matrix freeze.

It does not count repository housekeeping or report scaffolding as research progress.

## Final-report framework — 2026-10-04

The gated final decision/report layer is now established in `10-final-report/`.

Created:
- `README.md` — final-report architecture and promotion rule;
- `executive_decision_v01.md` — management-level decision shell;
- `full_technical_report_v01.md` — claim-driven full-report structure;
- `strategic_bets_v01.md` — standardized opportunity-card format;
- `collaboration_portfolio_v01.md` — partner-specific 3–6 month collaboration format;
- `three_year_roadmap_v01.md` — 0–6 / 6–18 / 18–36 month frame;
- `evidence_appendix_index.md` — audit-trail index;
- `final_report_readiness_gate.md` — mandatory promotion gate.

Important:
- Workstream 10 is **not** an evidence authority;
- it cannot override Workstreams 00–09;
- current candidate bets remain provisional;
- research completion remains ~52%.


## This round — Phone Packaging + Stage-0 Calibration

New outputs:
- `01_global-baseline/phone_packaging_teardown_baseline_v01.md`
- `09_collaboration-roadmap/poc01_stage0_coupon_matrix_v01.md`

Key updates:
- `01_global-baseline/mobile_thermal_baseline.md`
- `08_opportunities-transfer/smartphone_constraint_model_v01.md`
- `08_opportunities-transfer/direction_decision_gate_v01.md`
- `09_collaboration-roadmap/poc01_surface_utvc_v01.md`
- partner cards / patent map / source register / QA.

## Main new insight 1 — thermal architecture is cross-layer

Current teardown evidence shows flagship thermal design is increasingly coupled to:
- SoC/package;
- memory placement;
- logic board;
- TIM;
- VC;
- frame.

Therefore future collaboration value should be judged as:
**package -> interface -> VC/wick -> frame/skin co-design**, not only as standalone cooler performance.

## Main new insight 2 — PoC-1 geometry became much stricter

Strong UTVC reference:
- 0.39 mm finished device;
- ~0.2 mm internal steam-channel/support height;
- 0.06 mm mesh.

Pavlenko published mesh evidence includes:
- 100 um wire;
- 220 um wire;
- related 160 um class evidence.

Decision:
**published Russian mesh is not treated as a drop-in phone wick.**

The current collaboration question is whether Pavlenko's modification / nucleation / dryout / rewetting physics can transfer to:
- ~60–100 um-class mesh;
- or a tens-of-microns functional surface.

## Main new insight 3 — working-fluid transfer is now mandatory

3M completed its PFAS manufacturing exit at end-2025.

Therefore:
- HFE-7100 = legacy mechanism/reproduction bridge;
- DI water = primary sealed copper-VC product-path reference;
- future low-boiling dielectric = separate supply/regulatory/material screen.

Tier A is now stronger only if the Russian mechanism transfers across product-relevant fluids.

## Stage-0 matrix v0.1

Common research targets:
- ~60 um-class mesh preferred;
- <=100 um mesh transfer/stretch;
- added functional layer target <=35 um;
- total surface/wick target <=120 um;
- stretch ceiling <=150 um.

Arms:
A. modern China-style reference  
B. Pavlenko mechanism transfer  
C. TPU biphilic/contrast-wetting  
D. MPEI Ivanov hierarchical coating  
E. MPEI ordered-wick pre-screen

Process:
- as-built metrology;
- fluid soak;
- vacuum/degassing-process simulation;
- 100-cycle screen;
- 500-cycle survivor test;
- boiling/dryout/rewetting screen.

Promote at most two Russian-inspired arms.

## Current portfolio

### Tier A
Pavlenko/Kutateladze:
**working-fluid-transferable dryout / rewetting / wetting-state retention under <0.5 mm sealed confinement**

### Tier A-
sealed adaptive film/droplet hybrid

### Tier B+
- TPU target-fluid biphilic challenger
- MPEI Ivanov coating challenger
- compute + cooling adaptive control

### Pre-device
MPEI ordered porous wick

### Tier B
- multi-hotspot routing
- confined microfan aeroacoustics

## Workstream maturity

| # | Workstream | Current maturity |
|---|---:|
| 01 | Global smartphone thermal problem space | **~64%** |
| 02 | Thermal technology landscape | ~44% |
| 03 | Russian institution landscape | ~50% |
| 04 | Russian labs / researchers | **~53%** |
| 05 | Russian papers / patents | **~60%** |
| 06 | Active-cooling deep dive | ~45% |
| 07 | China benchmark & gap | **~56%** |
| 08 | Transfer / hypotheses / falsification | **~81%** |
| 09 | Collaboration / PoC / 3-year directions | **~48%** |

## Highest-priority blockers now

1. Pavlenko modification feasibility on ~60–100 um-class wick;
2. actual added layer thickness / permeability penalty;
3. TPU RU2812668 inventor + full independent claim;
4. TPU product-fluid / vacuum / cycling stability;
5. MPEI actual coating thickness + product-fluid/cycling;
6. MPEI ordered-wick physical prototype;
7. promoted patent family/status review;
8. Huawei/background-IP boundary;
9. future dielectric-fluid screen only if required by the surviving architecture.

## Next research stage

Do **not** reopen broad discovery yet.

Next:
1. close Stage-0 manufacturability/process blockers;
2. convert each surviving Russian arm into a partner-specific 3–6 month technical brief;
3. define exact partner data requests and minimum coupon deliverables;
4. then decide which two arms deserve sealed Stage-1 investment.
