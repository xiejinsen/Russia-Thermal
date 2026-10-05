# Round 7 — Quantitative Transfer Feasibility Envelope v0.1

Last updated: 2026-10-05

Status: **PRE-EXECUTION ANALYTICAL AUTHORITY — NO OUTREACH / NO EXPERIMENT**

Purpose:
translate the surviving Russian mechanisms into quantitative phone-transfer envelopes using only public evidence, simple physics scaling and existing project screening thresholds.

This file is **not** experimental validation and **not** a product specification.

Current execution constraint:
[No outreach / no experiment](../00_scope/current_execution_constraints_2026_10_05.md)

## 1. Common phone / UTVC anchor

Public strong-reference anchors:
- 0.35 mm finished UTVC with ~0.2 mm vapor core;
- 0.39 mm finished UTVC with ~0.2 mm internal channel and 0.06 mm-class copper mesh;
- water as the primary product-path reference fluid;
- 0.39 mm reference ultimate power up to 26 W in its published test matrix.

Project screening constraints already frozen:
- added functional-surface thickness: **<=35 μm preferred**;
- total surface / wick functional element: **<=120 μm preferred**;
- stretch ceiling: **<=150 μm**;
- modern strong passive reference must be used;
- passive promotion requires at least one of:
  - >=20% higher dryout / capillary / CHF limit;
  - >=15% lower evaporator thermal resistance;
  - >=20% faster rewetting;
  - plus no unacceptable thickness / process / reliability penalty.

Modern UTVC model benchmark:
[D5 — 2026 UTVC semi-analytical vapor-core / wick trade-off model](../evidence/10q/papers/d5_2026_utvc_semi_analytical_vapor_core_model.md)

Public model result:
- below ~150 μm vapor-core thickness, vapor-property / pressure-drop sensitivity becomes much more important;
- in the reported local-hotspot case, increasing vapor core from 50 to 90 μm increased mesh-wick Qmax by ~5.3x.

Round-7 interpretation:
**do not consume vapor space simply because the total component still fits inside ~0.4 mm.**

Screening-only vapor-clearance bands:
- GREEN: architecture does not force the clear vapor path below ~150 μm;
- AMBER: ~90–150 μm clear path;
- RED: <~90 μm unless a route-specific model demonstrates compensation.

These are analytical guard bands, not universal product limits.

## 2. Scaling relations used only for sensitivity screening

### 2.1 Porous / mesh homothetic scaling proxy

For a characteristic length scaled by lambda:
- capillary pressure proxy: ΔPcap ~ 1/lambda;
- permeability proxy: K ~ lambda^2;
- simplified capillary-flow proxy: K·ΔPcap ~ lambda.

Example:
| Scale lambda | Capillary-pressure proxy | Permeability proxy | K·ΔP proxy |
|---:|---:|---:|---:|
| 0.8 | 1.25x | 0.64x | 0.80x |
| 0.6 | 1.67x | 0.36x | 0.60x |
| 0.5 | 2.00x | 0.25x | 0.50x |

Meaning:
smaller pores can increase capillary pressure while still **reducing net liquid-supply conductance**.

This is a simplified screening relation; actual mesh topology, contact angle and tortuosity matter.

### 2.2 Groove / channel hydraulic sensitivity proxy

For a similarly shaped laminar groove/channel, hydraulic resistance can scale very strongly with characteristic dimension; a simple round-channel analogy gives approximately R ~ 1/r^4.

Illustrative sensitivity:
- 0.8x scale → ~2.4x resistance;
- 0.6x scale → ~7.7x;
- 0.5x scale → ~16x.

Meaning:
**uniform half-scale is not a neutral way to miniaturize a liquid-return groove.**

### 2.3 Gas-driven active-cooling lower-bound power proxy

Using only dynamic-pressure order of magnitude:
Pfluid,ideal ≈ 0.5 · rho · v^3 · A

Illustrative gas density:
rho = 1.2 kg/m3.

Electrical input is higher by actuator/system efficiency and all additional friction/nozzle/recirculation losses.

Therefore this is an optimistic lower bound, not a prototype prediction.

## 3. Pavlenko / Lab 1.3 quantitative envelope

### 3.1 Public geometry

Published mesh family:
- 100 μm wire / 230 μm cell side;
- 160 μm wire / 315 μm aperture;
- 220 μm wire / 401 μm cell side.

Phone reference:
- ~200 μm internal-channel class;
- ~60 μm mesh in the strong 0.39 mm UTVC reference.

### 3.2 Vertical occupation screening

| Pavlenko / transfer geometry | Characteristic height | Fraction of 200 μm internal-channel anchor | Status |
|---|---:|---:|---|
| strong phone-reference mesh | 60 μm | 30% | reference |
| published 100 μm wire | 100 μm | 50% | AMBER |
| published 220 μm wire | 220 μm | 110% | RED as direct drop-in |
| target transfer range | 60–100 μm | 30–50% | analytically plausible, transport-sensitive |

Project headroom:
- 60 μm base element leaves ~60 μm before the 120 μm preferred functional-element ceiling and ~90 μm before the 150 μm stretch ceiling;
- 100 μm base element leaves only ~20 μm preferred headroom and ~50 μm stretch headroom.

The separate Kutateladze thin-coating patent discloses ~7–35 μm coating thickness, but that is **not assumed to be the same hydrogen-bubble mesh process**.

### 3.3 Miniaturization sensitivity

Homothetic thought experiment:
- 100 → 80 μm characteristic scaling: liquid-supply proxy falls to ~0.8x unless topology/wettability compensates;
- 100 → 60 μm scaling: proxy falls to ~0.6x.

Therefore:
**the 60 μm branch is the most packaging-friendly but also the most aggressive transport-risk branch.**

Analytical design implication:
- keep 60–100 μm as the overall transfer envelope;
- treat ~80–100 μm as the lower transport-risk branch if packaging permits;
- treat ~60 μm as an aggressive branch requiring explicit permeability/open-area compensation.

### 3.4 Minimum-win rule

Because China/global references already cover generic treated mesh / rewetting:
promotion requires failure-boundary value, not merely HTC uplift.

Minimum win remains:
- >=20% dryout/CHF margin; or
- >=20% faster recovery/rewetting; or
- >=15% lower evaporator Rth;
at equal thickness/fluid inventory and without a major transport penalty.

### 3.5 Dominant unknown

The single highest-value missing parameter is:
> **added morphology + open-area/permeability change after the hydrogen-bubble modification on 60–100 μm-class mesh.**

Round-7 analytical state:
**MECHANISM VALUE HIGH / GEOMETRY AMBER / TRANSPORT SENSITIVITY HIGH.**

## 4. MPEI / Ivanov–Kuzma-Kichta quantitative envelope

### 4.1 Public geometry and reliability

Representative public hierarchy:
- longitudinal groove radius ~100 μm;
- representative Al2O3 nanoparticle layer ~5 μm;
- thicker deposition states can exceed ~10–15 μm;
- 42-month R410A thermosyphon evidence;
- same group has 0.2 mm water-boiling microchannel / CHF lineage.

### 4.2 Coating thickness is not the main vertical bottleneck

Relative to the <=35 μm preferred added-layer budget:
- 5 μm coating uses ~14%;
- 15 μm coating uses ~43%.

So the nanoparticle layer itself is analytically compatible with the added-layer budget.

### 4.3 Groove / shell integration is the main geometry risk

Strong 0.39 mm UTVC manufacturing reference uses shell thicknesses around:
- ~0.15 mm bottom shell;
- ~0.25 mm top shell.

If groove depth were of the same order as the public ~100 μm radius:
- it would consume ~67% of a 150 μm shell thickness;
- or ~40% of a 250 μm shell thickness.

This is only a geometry proxy because **groove radius is not the same as groove depth**.

Decision implication:
the most valuable missing MPEI geometry number is exact groove depth/profile and which shell/plate architecture would carry it.

### 4.4 Uniform scale-down is analytically unattractive

If a ~100 μm characteristic liquid-return groove were uniformly scaled to ~50 μm, a simple laminar-channel proxy can increase hydraulic resistance by ~16x.

Therefore the preferred conceptual transfer is **non-homothetic**:
- preserve a comparatively large liquid-return highway;
- use fine coating / secondary structure to supply capillary pressure;
- reduce vertical depth without shrinking every hydraulic dimension equally.

This aligns with modern UTVC evidence that permeability and minimum capillary pore radius should be designed as partly independent variables.

### 4.5 Heat-flux extrapolation gap

Public long-life thermosyphon lineage reports roughly 200–1700 W/m2:
= ~0.02–0.17 W/cm2.

For internal sensitivity only, consider a notional 10×10 mm hotspot:
- 5 W → 5 W/cm2;
- 10 W → 10 W/cm2;
- 20 W → 20 W/cm2.

Relative to the upper ~0.17 W/cm2 long-life condition, these are roughly:
- ~29x;
- ~59x;
- ~118x.

These are **internal screening scenarios, not smartphone product specifications**.

Meaning:
the 42-month result is strong aging evidence but cannot be used as high-flux proof.

The separate 0.2 mm water-microchannel / CHF lineage reduces the institution-level mechanism gap, but it is not the exact long-life hierarchy.

### 4.6 Minimum-win rule

Thermal promotion:
- same passive thresholds as Pavlenko.

Reliability-specific secondary promotion path:
- even if initial thermal performance is near parity, the route may remain valuable if a measurable post-manufacturing capillary state can predict later dryout-margin degradation before gross thermal failure appears.

### 4.7 Dominant unknown

> **exact groove depth/cross-section + whether liquid-return conductance survives phone-scale integration.**

Round-7 analytical state:
**COATING GEOMETRY GREEN / GROOVE-SHELL INTEGRATION AMBER / HIGH-FLUX TRANSFER RED-UNKNOWN / RELIABILITY VALUE HIGH.**

## 5. TPU / Feoktistov–Orlova quantitative envelope

### 5.1 Public geometry and copper bridge

Public TPU laser-process lineage includes:
- mean laser roughness/feature height around ~9–18 μm in the disclosed steel embodiment;
- maximum feature-height range reaching roughly ~17.5–120 μm depending process condition;
- public copper + nanosecond-laser texture + degassed-water pool-boiling evidence.

### 5.2 Vertical-budget screen

Relative to the <=35 μm preferred added-surface budget:
- 9 μm = ~26%;
- 18 μm = ~51%.

Relative to the <=120 μm preferred total functional-element ceiling:
- 120 μm = 100%.

Relative to the 150 μm stretch ceiling:
- 120 μm = 80%.

Interpretation:
- low-relief laser regimes are geometrically attractive;
- extreme peak-relief regimes can consume most of the phone functional-height budget even if average roughness looks small.

Therefore the relevant control metric for phone transfer is not only Ra / mean roughness.

Required future geometry metric:
> **peak / high-percentile feature relief on thin copper after the final process.**

### 5.3 Route split

**Laser-only / low-organic branch:**
- best analytical phone-transfer fit;
- copper bridge is already public;
- main remaining issue is thin-substrate profile + sealed-process retention.

**Hydrocarbon / biphilic branch:**
- receives no product-readiness credit from virtual analysis until vacuum/outgassing / post-process wetting retention is demonstrated;
- generic biphilic VC is already crowded prior art.

### 5.4 Minimum-win rule

Same passive minimum-win thresholds apply.

Because laser-only processing is already globally crowded, a small generic HTC increase is insufficient.

Strategic value must come from:
- manufacturing-stable wetting topology;
- confined rewetting/dryout value;
- or materially simpler / cleaner processing at equal performance.

### 5.5 Dominant unknown

> **whether a low-relief copper surface state survives the actual sealed-VC vacuum / degassing / thermal process while retaining the required wetting function.**

Round-7 analytical state:
**COPPER BRIDGE GREEN / GEOMETRY GREEN-to-AMBER / SEALED-PROCESS CHEMISTRY RED-UNKNOWN.**

## 6. Kutateladze Lab 6.6 quantitative envelope

### 6.1 Public architecture

RU2860581 / current line discloses or discusses:
- ~100–2000 μm flat micro/mini-channel height;
- local expansion ~3–7 mm;
- gas-liquid nozzle diameter ~50–300 μm;
- earlier/effective gas-sheared film operation often requiring gas velocity >50 m/s.

### 6.2 Packaging screen

Relative to a ~0.39 mm passive UTVC:
- 3 mm local expansion = ~7.7x the full UTVC thickness;
- 7 mm = ~18x.

Relative to an ~8 mm phone thickness, if that expansion is vertical:
- 3 mm consumes ~38%;
- 7 mm consumes ~88%.

Therefore:
**an additive internal-phone architecture is analytically RED unless the expansion is packaged laterally, replaces another structure, or the current implementation is much thinner than the public embodiment.**

### 6.3 Gas-drive lower-bound power sensitivity

At v = 50 m/s and rho = 1.2 kg/m3:
dynamic pressure is ~1.5 kPa.

For an illustrative 2 mm2 gas-flow cross-section:
- ideal fluid power lower bound ~0.15 W;
- at 30% actuator efficiency, ~0.5 W electrical before additional friction/nozzle/recirculation loss.

At the same 2 mm2 cross-section:
- 70 m/s → ~0.41 W ideal fluid power;
- ~1.37 W electrical at 30% efficiency.

Key sensitivity:
power scales approximately with **v^3** in this lower-bound proxy.

Illustrative maximum cross-section at a total electrical gas-drive budget:
| Electrical budget | Amax at 30 m/s | Amax at 50 m/s | Amax at 70 m/s |
|---:|---:|---:|---:|
| 0.2 W | ~3.70 mm2 | ~0.80 mm2 | ~0.29 mm2 |
| 0.5 W | ~9.26 mm2 | ~2.00 mm2 | ~0.73 mm2 |
| 1.0 W | ~18.52 mm2 | ~4.00 mm2 | ~1.46 mm2 |

These are optimistic dynamic-pressure-only calculations.
Real electrical power will be higher.

### 6.4 Minimum-win rule

Current project criterion remains:
- >=20% lower hotspot-to-ambient Rth at equal total cooling power and volume; or
- >=20% lower cooling power at equal thermal result;
- with no worse product-relevant acoustic outcome.

Because active overhead is intrinsic, gross heat-transfer improvement is not enough.

### 6.5 Dominant unknown

> **useful operating-point gas velocity + full-system pressure drop.**

Those two numbers dominate the virtual feasibility more than microchannel fabrication capability.

Round-7 analytical state:
**MICROCHANNEL CAPABILITY GREEN / PHONE PACKAGING RED / PARASITIC-POWER RED-UNKNOWN / KEEP AS RESERVE.**

## 7. Cross-route sensitivity ranking

| Route | Geometry transfer | Dominant sensitivity | Current analytical interpretation |
|---|---|---|---|
| Pavlenko | AMBER | permeability/open area after 60–100 μm scaling | high mechanism value; cannot shrink homothetically without transport risk |
| MPEI | AMBER | groove depth/cross-section + heat-flux escalation | coating is thin enough; liquid-return architecture needs redesign, not simple scaling |
| TPU laser-only | GREEN–AMBER | peak relief + sealed-process retention | easiest geometric bridge; process-state survival is the real gate |
| TPU hydrocarbon/biphilic | AMBER | outgassing / chemistry retention | no virtual product-readiness credit until process stability is proven |
| Lab 6.6 | RED for internal additive route | gas velocity / ΔP / expansion volume | mechanism reserve only unless system architecture changes the overhead envelope |

Important:
this is **transfer-fit**, not scientific-value ranking.

The Stage-0 priority remains:
1. Pavlenko;
2. MPEI;
3. TPU;
4. Lab 6.6 reserve.

## 8. New design insight from Round 7

### Pavlenko
Transfer the **failure-boundary / modification physics**, not the published mesh geometry.

### MPEI
Favor a **decoupled hierarchy**:
retain hydraulic liquid-return cross-section while using a fine capillary coating / secondary structure.

Do not default to a uniform half-scale hierarchy.

### TPU
Prioritize a **low-relief laser-only copper branch** as the cleanest future product-transfer baseline.

The biphilic/hydrocarbon branch remains an optional upside route, not the assumed winner.

### Lab 6.6
The only plausible phone path is likely a **radically shortened / localized / low-flow actuation architecture** or a non-additive integration concept.

The public full gas-film-droplet embodiment is not analytically competitive as a simple drop-in replacement for a ~0.4 mm passive VC.

## 9. What Round 7 closes without experiments

Analytically closed:
- published 220 μm Pavlenko wire is not a direct phone-UTVC geometry;
- simple uniform miniaturization is risky for both mesh and groove liquid-return structures;
- MPEI coating thickness itself is not the dominant vertical problem;
- TPU geometry can plausibly fit if a low-relief copper regime is chosen;
- Lab 6.6 feasibility is dominated by v^3 parasitic-power sensitivity and packaging expansion, not by the ability to make a microchannel.

Not closed:
- actual performance gain;
- sealed-process survival;
- partner manufacturability/yield;
- actual gas-loop system power;
- legal/FTO;
- Stage-1 readiness.

## 10. Next analytical task

Round 7 next substage:
**Minimum-Win Threshold + Sensitivity-to-Decision Map**

Convert the envelopes above into:
- GREEN / AMBER / RED restart triggers;
- exact parameter ranges that would make future partner data immediately actionable;
- internal roadmap branches that can be decided without physical work.

Research-progress rule:
this analytical closure improves execution readiness but does **not** count as partner or experiment validation.