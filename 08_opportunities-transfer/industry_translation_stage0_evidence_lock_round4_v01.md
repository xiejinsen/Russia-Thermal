# Round 4 — Industry-Translation / Stage-0 Evidence Lock v0.1

Last updated: 2026-10-05

Status: **CLOSED — current industry-translation / Stage-0 evidence-lock authority**

Purpose:
normalize industrial translation maturity across current Russian candidate lines and freeze the evidence required before Stage-1 sealed-device or broader collaboration promotion.

## 1. Translation-maturity framework

Use four separate questions rather than one vague industry-readiness score.

### T1 — formal external company collaboration
R&D agreement, consulting agreement, commercial contract or recurring industrial co-work.

### T2 — external physical implementation / fabrication
An external engineering/company actor fabricated hardware, implemented research output or used the design/process in a physical model.

### T3 — real-system / field validation
Prolonged operation in a real thermal system, non-laboratory environment or device-level long-duration validation.

### T4 — product / production evidence
Commercial product embodiment, series manufacturing, product-volume process or product-qualified mobile/electronics deployment.

A line can be strong in T1/T2/T3 and still have no T4 evidence.

## 2. Normalized industry-translation matrix

| Institution / line | T1 company collaboration | T2 external fabrication / implementation | T3 field / real-system validation | T4 product / production | Mobile-specific translation | Current interpretation |
|---|---|---|---|---|---|---|
| Kutateladze Lab 1.3 / Pavlenko | PASS — Huawei + Bel Huawei official cooperation; Air Products multi-year R&D | NOT PUBLICLY EVIDENCED for current phone candidate | PARTIAL — strong current experimental platforms, no phone-product field validation | NOT PUBLICLY EVIDENCED | PARTIAL — Huawei relationship is relevant context but public scope is unknown | strong external-R&D maturity; productization unproven |
| MPEI / Ivanov–Kuzma-Kichta hierarchy line | PASS — repeated Newfrost contract/co-work chain | PASS — Newfrost fabricated current experimental thermosyphon prototype; implementation-act lineage | PASS for thermosyphon/aging domain — 42-month device operation | NOT PUBLICLY EVIDENCED for exact hierarchy | LOW-PARTIAL — current device regime is not phone-scale | strongest public engineering-translation chain among current surface candidates |
| TPU / Feoktistov–Orlova | NOT RECOVERED for current electronics-cooling route | PARTIAL — process/IP/fabrication capability is public, but no matched external electronics hardware chain found | PASS for process robustness in another domain — 60-day operating-boiler field test | NOT PUBLICLY EVIDENCED | LOW | field-validated laser-process capability; device translation still open |
| Kutateladze Lab 6.6 / Kabov–Chinnov–Kochkin | NOT RECOVERED for current phone route | INSTITUTE ENGINEERING / IP ONLY — current electronics-cooling patent architecture | PARTIAL — deep microchannel/film experimental lineage, not external field deployment | NOT PUBLICLY EVIDENCED | DIRECT electronics framing, LOW phone readiness | engineering/IP maturity without external implementation chain |

## 3. Decision observation

The current ranking should not be read as Pavlenko having the best industrialization.

A more accurate reading is:
- MPEI has the strongest public external hardware / implementation chain.
- Pavlenko/Lab 1.3 has the strongest public large-company collaboration precedent, including Huawei.
- TPU has the strongest newly recovered field-validation signal for the laser process family, but outside electronics.
- Lab 6.6 has strong current engineering/IP continuity but weaker public external implementation evidence.

No line has decision-grade public phone product / production evidence.

## 4. Evidence anchors

### Kutateladze Lab 1.3 / Pavlenko

Canonical industry cards:
- [I-HUAWEI-001](../evidence/industry/huawei/sources/I-HUAWEI-001_kutateladze_lab13_collaboration_record.md)
- [I-HUAWEI-002](../evidence/industry/huawei/sources/I-HUAWEI-002_pavlenko_collaboration_record.md)
- [I-AIRPRODUCTS-001](../evidence/industry/air-products/sources/I-AIRPRODUCTS-001_kutateladze_structured_packing_rnd_cooperation.md)

Interpretation:
the Huawei record is not an isolated external-collaboration example; Pavlenko's line has a longer industrial R&D history.

### MPEI / Newfrost

Canonical industry cards:
- [I-NEWFROST-001](../evidence/industry/newfrost/sources/I-NEWFROST-001_mpei_dissertation_contract_implementation_chain.md)
- [I-NEWFROST-002](../evidence/industry/newfrost/sources/I-NEWFROST-002_current_thermosyphon_model_fabrication.md)

Additional primary-publication evidence:
the 2026 long-term hierarchical-surface paper acknowledges Newfrost technical assistance in fabrication of the experimental thermosyphon prototype.

Interpretation:
MPEI has a credible external physical-engineering chain, but the exact industrial embodiment of the 42-month hierarchy remains unresolved.

### TPU

Decision-grade process-translation paper:
[C4 — 60-day field validation](../evidence/10q/papers/c4_laser_surface_60_day_field_validation.md)

Public field-test facts:
- about 60-day exposure;
- operating about 400 kW brown-coal boiler;
- AISI 310S laser-modified coupons;
- real slagging/deposition environment.

Interpretation:
this upgrades process robustness / scale-up confidence, not smartphone cooling maturity.

### Lab 6.6

Current patent:
[A3 — RU2860581C1](../evidence/10q/patents/a3_ru2860581c1_staged_gas_droplet_liquid_film_electronic_cooling.md)

Public patent constraints:
- prior shear-film operation may need gas speed above 50 m/s;
- spray development from about 100–300 μm nozzles may need about 5–7 mm distance;
- new claim uses about 100–2000 μm channel height and about 3–7 mm local expansion.

Interpretation:
miniaturized channel capability is real, but system power/pressure-drop/volume/noise remains the decisive lock.

## 5. Stage-0 evidence lock — Pavlenko / Lab 1.3

Partner-data lock:
1. shareable fine-mesh / surface-process window;
2. minimum repeatable sample geometry / active area;
3. current dielectric-stand diagnostic resolution / external-coupon interface;
4. sample throughput / repeatability;
5. shareable background-IP / existing-field restriction boundary.

Experiment lock before Stage-1:
- 60–100 μm-class copper mesh / surface;
- DI-water product-path transfer;
- actual vacuum/degassing process;
- 100-cycle screen + 500-cycle survivor;
- strong current China-style UTVC reference;
- irreversible-dryout onset / propagation / recovery metrics.

Foreground-IP lock:
do not claim generic modified mesh, hydrophilic surface or boiling enhancement.

Potential foreground:
**phone-constrained fluid-specific irreversible-dryout / recovery control plus process-retained surface state under sub-mm sealed confinement.**

Kill if thin-copper transfer fails, transport collapses, process/cycling destroys function or strong reference matches the failure-boundary behavior.

## 6. Stage-0 evidence lock — MPEI

Partner-data lock:
1. current hierarchy depth/width/pitch/radius/tolerance;
2. coating thickness distribution / yield;
3. shareable Newfrost fabrication/implementation split;
4. raw/normalized 42-month capillary-aging data where shareable;
5. direct team equipment access;
6. whether the current SiC microchannel line can share fixture/process/metrology with the long-life hierarchy line.

Experiment lock:
- current hierarchy + half-scale + <=150 μm phone-target hierarchy;
- copper;
- DI water;
- vacuum/process exposure;
- high-flux dryout ladder;
- post-process capillary/permeability;
- capillary-state drift versus later dryout-margin loss.

Potential foreground:
**phone-scaled hierarchy plus manufacturing-retained capillary state plus early surface-state indicator for dryout-margin degradation.**

Kill/reframe if geometry cannot shrink, high-flux benefit disappears, capillary/permeability collapses, the aging indicator is non-predictive or a simple modern reference matches it.

## 7. Stage-0 evidence lock — TPU

Partner-data lock:
1. copper laser-only process range;
2. hydrocarbon/biphilic process range;
3. actual feature-height/profile distribution;
4. current process throughput/repeatability;
5. any vacuum/outgassing evidence;
6. background-IP boundary between RU2812668 laser process and current chemistry.

The 60-day boiler field test means the generic question "can this process survive outside a short laboratory test?" is already publicly answered for a non-mobile field environment.

Experiment lock:
- copper laser-only;
- copper hydrocarbon/biphilic;
- strong generic laser/oxidation reference;
- DI-water soak;
- actual vacuum/degassing process;
- mass-loss / contamination proxy;
- post-process wetting retention.

Only survivors enter confined rewetting/dryout testing.

Potential foreground:
**low-organic / vacuum-stable copper spatial wetting topology that retains liquid-routing / rewetting function after sealed-VC manufacturing.**

Kill hydrocarbon branch if outgassing/contamination is unacceptable or wetting contrast collapses.
Kill general phone thesis if copper transfer fails or generic control matches both TPU branches.

## 8. Stage-0 evidence lock — Lab 6.6 reserve

Partner-data lock:
1. gas/liquid flow at useful operating points;
2. channel and full-loop pressure drop;
3. actuator/compressor electrical power;
4. expansion/nozzle/condenser/separator bounding volume;
5. liquid inventory;
6. acoustic data;
7. current integrated-prototype status.

Experiment lock only if partner data passes plausibility screening:
compare strong passive UTVC / thin-film reference against a reduced Lab-6.6-inspired active cell at fixed total module volume and cooling electrical power.

Measure:
- hotspot thermal resistance;
- dryout onset;
- transient recovery;
- total parasitic power;
- acoustics.

RU2860581 already crowds gas + film + droplets, load-staged delivery and electronics cooling.

Potential foreground must be narrower:
**phone-budget-constrained actuation / control / geometry co-design that changes the power-volume-noise-failure Pareto frontier.**

Do not promote from reserve if gas/pump power erases thermal gain, the 3–7 mm expansion/nozzle architecture cannot fit, noise is unacceptable or passive reference matches net system performance.

## 9. Round-4 decision

Stage-0 ranking is unchanged:

1. Kutateladze Lab 1.3 / Pavlenko — GO WITH PREREQUISITE.
2. MPEI Ivanov hierarchy line — GO WITH PREREQUISITE.
3. TPU Feoktistov/Orlova — GO WITH PREREQUISITE.
4. Lab 6.6 — HIGH-RISK MECHANISM / IP RESERVE.
5. MPEI ordered wick — HOLD / PRE-DEVICE.

What changed:
- Pavlenko external-collaboration maturity is broader than Huawei alone.
- MPEI has the strongest public external hardware/implementation chain among the active surface candidates.
- TPU process-translation confidence upgrades due to 60-day real-system field validation.
- Lab 6.6 system-overhead risk is better evidenced by its own current patent.

No candidate gains unconditional GO, Stage-1 approval or product-readiness status.

Further public searching should not substitute for partner process data, phone-scale coupon measurements or system power/volume/noise measurements.

Round-4 translation/evidence-lock status:
**PASS / CLOSED.**

Next stage:
**Round 5 — Outreach-Ready Partner Pack Finalization + Experiment/IP Freeze Review**

Research completion after Round 4:
**~88% complete / ~12% remaining.**
