# Q08 batch 3 — mechanism-level head-to-head and falsifiable cooperation gates

date: 2026-10-09
status: PUBLISHER_AND_UNIVERSITY_PRIMARY_PAGES_CHECKED / Q08_IN_PROGRESS
scope: P1 Kutateladze versus independent best-baseline P1, P2 MPEI versus China VC aging
decision: FROZEN_P1_PRIMARY_P2_RESERVE_TPU_HOLD
method: compare actual failure modes, observables, control variables, evidence access, not cross-rig CHF or calendar-year numbers

## Required correction to Q08 batch 2

The [2026 *Multiscale hybrid wick: Two types of dry-out mechanisms and optimization strategy*](https://doi.org/10.1016/j.enconman.2025.120703) by Duhyeon Lee, Sanghun Lee, Soosik Bang, Hyunghoon Song, Joongmyeon Bae and Youngsuk Nam is **South Korean research (KAIST institutional ownership), not a China-origin paper**. Confirmed by [KAIST official scholar record](https://pure.kaist.ac.kr/en/publications/multiscale-hybrid-wick-two-types-of-dry-out-mechanisms-and-optimi/). Retain as **GLOBAL_KR comparator**, not China domestic evidence; incorrect China characterization in batch2 should not propagate.

## P1 — Not the same dryout label

| Comparable question | Russia Kutateladze | Global Korea KAIST paper | Inference / gate |
|---|---|---|---|
| Original work | [Surtaev et al., *Investigation of heat transfer, critical heat flux and dry spots dynamics during boiling of dielectric fluids HFE-7100 and Novec 649*](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855), IJHMT 255(2), 127855, **2026**, canonical PAPER-RU-DRY-001 | [Lee et al., *Multiscale hybrid wick: Two types of dry-out mechanisms and optimization strategy*](https://doi.org/10.1016/j.enconman.2025.120703), Energy Conversion and Management 348, 120703, **2026**, KAIST official metadata | Distinct paper, independent teams and architectures |
| Failure-state definition | Surface dry spots: local wet/dry region morphology, distribution near boiling crisis, large persistent spots and eventual irreversible region | Wick supply architecture: type 1 initial dryout in **primary evaporation wick** versus type 2 initial dryout in **liquid-supply wick** | Not identical labels. Neither proves the other's measured modes absent |
| Observable | Fast IR and LED reflection on sapphire, CNN dry spot density/contact line/area statistics; propagation speed of irreversible regions compared to thermal-wave models | Capillary-rise and evaporative performance experiment; geometry/flow models, wick design parameters and dryout type classifier | RU provides more directly optical local interface labels; KR provides architecture-aware dryout model and design criterion |
| Device condition | Dielectric HFE-7100 / Novec 649 pool-boiling transparent sapphire; no sealed phone UTVC | Copper-particle two-level porous supply structure, experiments/models; no equivalence to complete ultra-thin phone VC | Cannot transfer a numeric CHF across systems or rank phone superiority |
| Incremental value to internal group | Possibly expert annotations for **reversible-to-irreversible** surface morphology and related calibrated physics | Already demonstrates dryout type classification and substantial model accuracy change in its own hardware | Russian labels have to produce a **held-out decision-changing improvement** over strong baseline, or add no incremental value |
| Missing evidence | Public reusable aligned raw runs, label taxonomy and repeats not independently confirmed | Public raw dataset reuse, exact same-input match to Russia rig not independently confirmed | No claim of available licensed data or decisive superiority |

The KAIST publisher reports an approx 10-fold reduction of CHF prediction error versus *its conventional-model baseline*, and an optimized wick approximately 24-fold higher CHF than a single-scale wick at comparable thermal resistance **within its geometry and comparisons**. Neither ratio is applicable to Russia pool boiling or phone hardware.

A separate original global 2023 IR/U-Net comparator remains [Ravichandran et al., *Autonomous and online detection of dry areas on a boiling surface using deep learning and infrared thermometry*](https://doi.org/10.1016/j.expthermflusci.2023.110879). It already rejects uniqueness of optical ML segmentation. KU and RU are distinct *strong global* baselines; strongest fully matched China P1 measurement comparator still not independently proven.

P1 proposed internal test (not authorized experiment): common disjoint run splits, predeclared reversible/irreversible labels, optical-only and physics+labels baselines, change in false irreversible alarm / boundary identification / actual design decision. No phone internal optical sensor assumed; candidate use is offline supervision or mechanism calibration only.

## P2 — Observable and time-axis matrix

| Comparative dimension | Russia MPEI | China Guo et al. 2025/2026 | Incrementality gate |
|---|---|---|---|
| Original study | [Ivanov, *Long-term operational stability of a hierarchical evaporator surface in a two-phase thermosyphon*](https://doi.org/10.1016/j.pes.2026.100314), Progress in Engineering Science 3(2),100314 **2026**, PAPER-RU-AGE-001 | [Guo et al. 2025 oxygen-failure work](https://doi.org/10.1016/j.applthermaleng.2025.125619), PAPER-CN-AGE-001 and [2026 oxygen-footprint lifetime work](https://doi.org/10.1016/j.applthermaleng.2026.131067), PAPER-CN-AGE-002 | Same question: what independently predicts heat-transfer end-of-life? |
| Structure and fluid | R410A, stainless meter-scale two-phase thermosyphon, microgrooves and Al2O3 nanoparticles | Copper-water vapour chamber wick surface, oxide chemistry, high-temp accelerated aged batches | China more relevant material; neither has demonstrated matching phone UTVC geometry |
| Time axis | 42 calendar months periodic operation; thermal resistance around 0.015 K/W throughout, post-run capillary imbibition slower | 2025 failed-vs-normal material and oxygen tests; 2026 accelerated 150–200C experiments, oxygen-footprint based extrapolation | Long observation length != a high-resolution predictive time-series |
| State labels | Stable *integral* thermal resistance; after-operation capillary rate decrease without pronounced SEM/EDX damage | Copper oxidation shifts wick wetting to hydrophobic, capillary pressure reduction; oxidation level predicts failure in paper's population | Is MPEI's hidden degradation chemically different and predictive? Unknown |
| Sensor and physical method | System resistance over time, endpoint SEM/EDX, residual imbibition | oxygen wt%, XPS/EDS, wick wetting and thermal resistance, accelerated lifetime fit | Need matched precursor under held-out same-material conditions |
| Limits | Public checked source has not established repeated intermediate capillary tests, controls, replicates, rights | 2026 R² 0.98 / approx 8% error **paper-reported** within source conditions; not independently reproduced and not proven in phones | Neither is licensed reusable phone dataset |
| Proposed RU residual | A distinct long-exposure morphology and capillary change despite stable thermal resistance | Domestic oxygen-process/process-control can be simpler build/measurement baseline | If only start/end capillary measures and unchanged resistance, no proven *early-warning* collaboration contribution |

The Ivanov original explicitly frames future *spatially resolved* local diagnostics as future work; do not infer they were done during 42 months. The Chinese articles focus high-power chip packaging, not validated handheld sub-mm VC operation.

## Q08 evidence gates

P1: Require source-verified differentiating label definitions; accessible/reproducible time-aligned multi-run data and independent held-out baseline; incremental physical-model or decision benefit against segmentation + architecture-aware dryout baseline. If unavailable publicly, mark as nonproven; not automatically partner-exclusive.

P2: Require actual dated intermediate capillary readings, process controls and repeat measurements **from 42-month lineage**, or a new explicitly distinct transferable mechanism. After-use measurement alone is insufficient to establish early prediction. Test decision gain above domestic oxidation/O2 footprint baseline under matched fluid/geometry assumptions. Internal-company rigs, data, budget and man-months all UNKNOWN.

## Current recommendation

No basis yet to claim one Russia-specific irreplaceable control point on available public evidence. P1 stays conditional primary to preserve investigation of morphology truth; P2 remains conditional reserve; TPU hold. No outreach, experiment or actual partner engagement. Next Q08 action: targeted paper supplementary/dataset audit and internal build/China procurement feasibility facts only if accessible without contacting parties. If none, reach bounded public-evidence stop instead of inventing validation.
