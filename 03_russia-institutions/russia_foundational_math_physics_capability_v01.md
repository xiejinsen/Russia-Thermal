# Russia Foundational Math-Physics → Thermal Capability Map v0.1

Last updated: 2026-10-04

Status: **CURRENT focused foundational-capability scan; not a national mathematics ranking**

## Purpose

Test the hypothesis:

> Russia's value in mobile thermal management may partly come from foundational applied mathematics / mathematical physics that reveals thermal failure mechanisms, instability boundaries and controllable variables before device-scale experimentation.

This file does **not** claim that Russia is generally stronger than China in mathematics.

It asks only whether there is a current, transferable Russia capability chain:

**mathematical method**
→ **thermal-fluid mechanism**
→ **predictive / interpretable boundary**
→ **experiment or design leverage**
→ **mobile/chip thermal value**

---

## 1. Capability taxonomy

Five subtracks are evaluated:

1. nonlinear stability / bifurcation;
2. multiphase / interfacial mathematical physics;
3. exact / reduced-order / asymptotic models;
4. inverse problems / thermal diagnostics;
5. numerical thermal-fluid mathematics / model-experiment closure.

---

## 2. High-signal Russian capability cluster

### A. Institute of Computational Modelling SB RAS — Bekezhanova / Stepanova / Goncharova lineage

This is the strongest current foundational signal recovered.

#### 2026 — exact solution with experiment-informed closure

**[The effect of gas flow rate on evaporative convection in a multicomponent bilayer system subjected to linear boundary heating](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128594)** — V.B. Bekezhanova, I.V. Stepanova — *International Journal of Heat and Mass Transfer*, 2026.

Source facts:
- narrow two-layer liquid / gas-vapor channel;
- Navier–Stokes + heat/mass-transfer formulation;
- exact analytical solution of group origin;
- nonlinear surface-tension dependence for binary liquid;
- experimental gas flow can be used as an integral condition to infer other parameters;
- qualitative comparison against experimental evaporation-convection data;
- explicitly discusses cooling / heat-removal applications.

Decision relevance:
this is stronger than a generic CFD model because the exact solution can act as:
- analytical benchmark;
- parameter-screening tool;
- mechanism-separation tool;
- preliminary operating-condition optimizer.

#### 2024 — exact-solution / experiment comparison

**[Study of the gas flow rate effect on the parameters of evaporative convection regimes using an exact solution](https://doi.org/10.1016/j.ijthermalsci.2024.109179)** — V.B. Bekezhanova, O.N. Goncharova, E.V. Laskovets — *International Journal of Thermal Sciences*, 2024.

Source facts:
- exact thermosolutal-convection solution;
- evaporation/convection in liquid–gas–vapor bilayer;
- calculated evaporation rate compared with experiment;
- gas-flow effect on stability and convective regimes analyzed;
- three instability-wave modes predicted.

#### 2024 — concentration / binary-mixture control

**[Mathematical modeling of concentration influence on evaporative convection in a bilayer system of binary mixtures](https://doi.org/10.1016/j.ijheatfluidflow.2024.109385)** — V.B. Bekezhanova, I.V. Stepanova — *International Journal of Heat and Fluid Flow*, 2024.

Source facts:
- new exact thermosolutal solution;
- water–ethanol / gas-vapor two-sided system;
- concentration affects evaporation and heat-transfer parameter;
- proposed problem statement is compared with known experimental behavior.

#### 2023 — explicit instability threshold

**[Application of a Partially Invariant Exact Solution of the Thermosolutal Convection Equations for Studying the Instability of an Evaporative Flow in a Channel Heated from Above](https://doi.org/10.3390/sym15071447)** — V.B. Bekezhanova, O.N. Goncharova — *Symmetry*, 2023.

Source facts:
- exact solution;
- linear stability analysis;
- neutral/stability thresholds;
- oscillatory cellular modes;
- competition among buoyancy, gas shear and thermocapillary effects;
- thermal boundary condition can stabilize the basic flow.

### Capability interpretation

This is not one isolated paper.

The line extends through earlier work on:
- exact Ostroumov–Birikh-type solutions;
- thermocapillary two-layer flows;
- evaporation / condensation;
- Soret / Dufour effects;
- gravity;
- stability of characteristic perturbations.

Current evidence therefore supports a **continuous analytical-mechanism lineage**, not merely a historical reputation.

---

## 3. Lavrentyev Institute of Hydrodynamics SB RAS — film / microchannel mathematical modeling

**[Dependence of Heat Exchange in an Evaporating Liquid Film in a Microchannel on Heater Size](https://doi.org/10.1134/S0021894424050092)** — V.V. Kuznetsov — *Journal of Applied Mechanics and Technical Physics*, 2024.

Source facts:
- 3D model of an evaporating liquid film in a microchannel;
- co-current gas flow;
- local heater;
- heat and mass transfer;
- temperature-dependent fluid properties;
- thermocapillary effect;
- surface deformation;
- evaporation / condensation.

Decision relevance:
the model links heater geometry to:
- temperature extrema;
- film deformation;
- thermal behavior.

This is directly compatible with the project's interest in:
**moving/local hotspot → film deformation → dry-spot / instability risk**.

---

## 4. Mathematical-physics capability matrix

| Foundational subtrack | Russia current evidence | Strength | Direct mobile/chip mapping | Current decision |
|---|---|---:|---|---|
| **Exact / group-invariant solutions for evaporation-convection** | ICM SB RAS continuous 2023–2026 line | **STRONG** | indirect but strong mechanism mapping | **NARROW FOUNDATIONAL DIFFERENTIATION CANDIDATE** |
| **Linear / nonlinear stability of thermocapillary interfacial flow** | exact-solution stability + Kabov/Chinnov experimental instability lineage | **STRONG** | strong for thin-film / dry-spot / failure boundary | KEEP, compare China |
| **Interfacial heat/mass-transfer mathematical physics** | two-sided gas–liquid models, concentration, evaporation, Marangoni/shear coupling | **STRONG** | medium-high for active/shear-film concepts | KEEP |
| **Reduced-order / fast model for product design** | exact solution can serve as reduced analytical benchmark; direct phone ROM not evidenced | **PARTIAL** | potentially high | RESEARCH GAP |
| **Inverse thermal diagnostics / heat-source reconstruction** | no coherent current Russia-specific electronics line recovered in this pass | **NOT PUBLICLY EVIDENCED** | high if found | DO NOT CLAIM |
| **Interface-resolved / numerical phase-change engineering** | present but not uniquely Russian | **MEDIUM-GOOD** | high | generic capability; no national advantage |
| **Model ↔ experiment closure** | 2024/2026 exact-solution papers explicitly use experimental evaporation data / conditions | **STRONG SIGNAL** | mechanism-to-PoC useful | possible key differentiator |

---

## 5. What is potentially differentiated

The strongest Russia-specific foundational hypothesis is **not**:

> Russia has stronger mathematics.

It is:

> Russian groups maintain an unusually continuous capability to construct interpretable exact / semi-analytical solutions for coupled evaporative thermocapillary systems and use them to expose stability thresholds, dominant mechanisms and experiment-relevant parameter relations.

Potential value:
1. reduce the number of expensive two-phase experiments;
2. construct fast analytical benchmarks for CFD/ML models;
3. identify which dimensionless groups or boundary conditions actually control failure;
4. distinguish shear-, thermocapillary-, buoyancy- and evaporation-driven instability;
5. design falsifying experiments instead of blind parameter sweeps.

---

## 6. Direct linkage to current Russia thermal candidates

### Pavlenko — dryout / rewetting

Link strength: **MEDIUM / indirect**

The exact-solution line does not currently model Pavlenko's nucleate-boiling modified-mesh dryout directly.

Potential use:
- define gas/liquid/thermal boundary effects;
- derive reduced parameter maps;
- help separate fluid-property and thermal-boundary contributions.

Do not overclaim this connection.

### MPEI / Ivanov — long-term aging

Link strength: **LOW**

No current evidence was found that the exact-solution/stability line directly models hierarchical-surface chemical aging.

Foundational mathematics does **not** explain the 42-month aging advantage by itself.

### Kabov / Chinnov — shear-driven film / dry spot / instability

Link strength: **HIGH**

This is the clearest bridge:
- shear-driven liquid film;
- gas–liquid interfacial coupling;
- thermocapillarity;
- evaporation;
- wave / stability threshold;
- local heating;
- microchannel geometry.

The foundational math-physics layer materially strengthens the interpretation of the Kabov/Chinnov route as a **mechanism platform**, even though system integration remains high risk.

---

## 7. Smallest collaboration / PoC concept

### Foundation-PoC — interpretable failure-boundary model

Target problem:
phone-relevant locally heated thin-film / confined two-phase cell.

Russian role:
- exact / reduced analytical model;
- stability map;
- dominant-mechanism decomposition;
- predicted instability boundary.

Our / China-side role:
- phone geometry and thermal boundary;
- high-fidelity CFD / interface-resolved simulation;
- experimental cell;
- transient hotspot excitation.

Test:
1. define a 3–5 parameter space;
2. Russian analytical model predicts stable/unstable regions;
3. high-fidelity numerical model predicts same boundary;
4. physical experiment checks dry-spot / wave / rupture onset.

Success:
- >=70–80% of instability-boundary classification correct in blind test; and/or
- reduce required experimental matrix by >=50% without missing the failure region.

These thresholds are **internal PoC targets**, not literature claims.

Kill:
- exact/reduced model requires so many calibration parameters that it offers no experiment reduction;
- error near the phone-relevant boundary is too large;
- high-fidelity domestic model is equally interpretable and faster;
- mechanism is irrelevant after product geometry/power constraints.

---

## 8. Current verdict

**FOUNDATIONAL CAPABILITY: KEEP / NARROW**

Specific retained thesis:

> **exact-solution / stability-based analysis of evaporative thermocapillary interfacial systems, with experiment-informed mechanism closure.**

Do not promote:
- "Russian mathematics is superior";
- "Russia has better CFD";
- "Russia owns inverse thermal diagnostics";
- "Russia can predict phone dryout from theory alone."

Next gate:
matched China foundational comparator.


## 9. Siberian network verification update — 2026-10-04

The earlier "Siberian cluster" hypothesis has now been pressure-tested.

### Verified current core

**Kutateladze ↔ Lavrentyev**
- current Kabov + V.V. Kuznetsov publication on shear-driven liquid-film cooling of microelectronics;
- direct model/mechanism collaboration;
- older joint work confirms continuity.

**Kutateladze ↔ NSU**
- current dual affiliations;
- NSU laboratories explicitly cover boiling, evaporation, 10–100 μm films, advanced optical diagnostics and electronics/mobile cooling;
- NSU functions as a talent / execution / experiment bridge.

### Verified historical theory–experiment bridge

**ICM/Altai exact-solution line ↔ Kutateladze**
- Goncharova/Kabov direct coauthorship;
- Bekezhanova/Kabov stability work;
- exact-solution papers explicitly linked to Institute of Thermophysics experiments;
- current 2024/2026 exact-solution papers still use/cite the Lyulin/Kabov experimental lineage.

### Still unverified

No decision-grade public proof was recovered for:
- a 2023–2026 formal ICM–Kutateladze joint grant/lab on this thermal problem;
- current direct ICM ↔ Lavrentyev collaboration.

### Updated interpretation

Do not call this one integrated consortium.

Use:
**Siberian modular capability network**

Current architecture:
- analytical stability: ICM/Altai — optional theory module;
- detailed fluid model: Lavrentyev — verified current technical link;
- experiment/diagnostics: Kutateladze — anchor;
- talent/execution: NSU — verified current bridge.

Canonical network memo:
[Siberian Theory–Fluid–Experiment Capability Network](siberian_theory_fluid_experiment_network_v01.md).

### Collaboration consequence

Preferred outreach hypothesis:
**Kutateladze-anchored modular team**, with Lavrentyev/NSU included where relevant and ICM/Altai added only after current relationship/ownership is confirmed.
