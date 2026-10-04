# Partner-to-Hypothesis Matching v0.7

Last updated: 2026-10-04

Status: provisional map after manufacturability / durability research and 3–6 month partner-brief definition.

| Hypothesis | Russian partner signal | Role | Immediate action | State |
|---|---|---|---|---|
| Working-fluid-transferable dryout/rewetting under sub-mm confinement | **Kutateladze — Pavlenko / Shvetsov** | mechanism lead | thin-mesh process-transfer Stage 0 + IP boundary | **Tier A / priority #1** |
| Hierarchical coating with long-term two-phase stability | **MPEI — Ivanov / Alyautdinova** | reliability/process challenger | geometry-scaled high-flux Stage 0 | **Tier B+ / priority #2** |
| Target-fluid biphilic / contrast-wetting | TPU — Feoktistov | pattern/process challenger | vacuum-compatible copper-pattern Stage 0 | **Tier B+ / priority #3** |
| Ordered porous wick | MPEI — Bulaeva / Savchenkov / Savchenkova | pre-device challenger | manufacture and measure thin coupon | **Pre-device** |
| Sealed film/droplet hybrid | Kutateladze — Kabov/Kochkin/Chinnov | radical architecture | reduced feasibility bench | **Tier A-** |
| Compute + cooling adaptive control | SPbU | control hypothesis | compare with modern calibrated MPC/RL | **Tier B+** |
| Multi-hotspot heat routing | ITP UB RAS | routing physics | normalize vs Chinese UTLHP | **Tier B** |
| Confined microfan aeroacoustics | TsAGI / PNRPU / CIAM | acoustic methods | phone-scale tonal/source test | **Tier B** |

## Why MPEI moved ahead of TPU for Stage 0

Primary MPEI evidence:
- https://doi.org/10.1134/S0040601525600683
- https://doi.org/10.1016/j.pes.2026.100314

Newly verified:
- R410A two-phase operation;
- 42-month periodic campaign;
- long-duration coating morphology / thermal-performance retention.

This materially reduces reliability uncertainty.

But MPEI is **not promoted to Tier A** because:
- heat-flux regime is far below smartphone hotspots;
- ~0.1 mm-radius grooves are geometrically large for a ~0.2 mm internal UTVC channel;
- no <0.5 mm sealed VC exists publicly.

## TPU current role

TPU remains a strong pattern/process challenger.

New durability evidence:
https://doi.org/10.1016/j.surfin.2026.109390

But durability under:
- humidity;
- saline corrosion;
- abrasion

does not establish:
- vacuum outgassing;
- sealed working-fluid compatibility;
- two-phase cycling.

## Current outreach posture

### #1 Pavlenko
Technical-discussion ready.
Ask for thin-mesh process-transfer data and background-IP boundary.

### #2 MPEI Ivanov
Technical-discussion ready for Stage 0.
Ask for exact groove/coating geometry, aged-vs-fresh capillary data, and high-flux scale-up feasibility.

### #3 TPU Feoktistov
Stage-0 technical-query ready.
Ask for low-outgassing process, copper transfer and sealed-fluid compatibility.

### Ordered-wick line
Pre-PoC; request physical prototype first.

Detailed briefs:
- partner_brief_pavlenko_stage0_v01.md
- partner_brief_mpei_ivanov_stage0_v01.md
- partner_brief_tpu_stage0_v01.md

No team is contract-ready.
