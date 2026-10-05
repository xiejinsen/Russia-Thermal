# Round 8 — Internal Phone Thermal Architecture Synthesis v0.1

Last updated: 2026-10-05

Status: **CURRENT INTERNAL ARCHITECTURE SYNTHESIS — NO OUTREACH / NO EXPERIMENT**

Constraint authority:
[Current Execution Constraints](../00_scope/current_execution_constraints_2026_10_05.md)

Quantitative authority:
[Round 7 Quantitative Transfer Feasibility Envelope](quantitative_transfer_feasibility_envelope_round7_v01.md)

## 1. Goal lock

Target:
future smartphone / tablet thermal architecture, smartphone primary.

Decision objective:
identify which Russian capabilities are worth inserting into a strong phone-scale thermal platform, rather than treating Russia as a full-device cooling supplier.

Time horizon:
3 years.

Current constraint:
- no direct Russian-university outreach;
- no physical experiments.

Therefore this round produces architecture / roadmap hypotheses only.

## 2. Core strategic synthesis

### Main conclusion

Russia is not currently evidenced to offer a superior end-to-end smartphone cooling platform.

The strongest collaboration logic is modular:

> **use a strong domestic / global phone-scale package + UTVC platform, and insert selected Russian failure-physics / reliability / surface-process capabilities at specific control points.**

This changes the question from:
> Which Russian cooling device should we adopt?

to:
> Which failure boundary, health state, process state or mechanism does a Russian team understand unusually well enough to improve our phone thermal architecture?

## 3. Phone thermal stack — architecture layers

| Layer | Phone-system role | Current strong baseline | Russian capability fit | Strategic ownership |
|---|---|---|---|---|
| L0 Workload / governor | workload, DVFS, task placement, thermal policy | OEM calibrated control / mobile DVFS | SPbU stochastic DVFS adjacency | **INTERNAL / OEM CORE** |
| L1 Package / die interface | junction → TIM → spreader / VC contact | package-to-VC co-design; current flagship trend | no Russia-specific lead | **INTERNAL / SUPPLY-CHAIN CORE** |
| L2 Evaporator surface | nucleation, liquid supply, dryout onset | copper-water UTVC / structured wick | **Pavlenko**, TPU, MPEI | **MIXED — key collaboration insertion layer** |
| L3 Wick / liquid return | capillary pressure, permeability, aging | composite mesh / grooved porous structures | **MPEI**, Pavlenko transfer | **MIXED** |
| L4 Vapor core / two-phase transport | vapor pressure drop, condensation, transport limit | 0.35–0.4 mm-class UTVC | Kabov/Chinnov mechanism reserve | **INTERNAL ARCHITECTURE; RUSSIA MECHANISM INPUT** |
| L5 Frame / skin / structural spread | spread to enclosure while limiting skin hot spots | metal frame / graphite / structural thermal design | no broad Russia edge | **INTERNAL / PRODUCT CORE** |
| L6 Reliability / health state | aging, contamination, wetting drift, margin loss | product QA / accelerated life | **MPEI strongest Russia insert** | **MIXED — strategic health layer** |
| L7 Failure diagnostics / model | reversible→irreversible dryout, instability, failure margin | internal sensors/models + China/global comparators | **Pavlenko**, ICM/Lavrentyev/Kutateladze/NSU | **MIXED — strategic mechanism layer** |
| L8 Optional active layer | fan/pump/gas shear / external accessory | China/OEM active products already exist | **Lab 6.6 reserve** | **RESERVE ONLY** |

## 4. What should remain internally controlled

Even if future Russian collaboration becomes available, the following should remain internal / product-platform control points:

### A. Product envelope
- phone thickness / footprint;
- battery / camera / board / antenna constraints;
- skin-temperature limit;
- acoustic budget;
- battery-energy budget.

### B. Baseline thermal architecture
- package → TIM → VC → frame path;
- strong copper-water UTVC reference;
- vapor-core budget;
- condenser / frame integration;
- product-fluid selection.

### C. Comparative decision system
- normalized baseline;
- dryout / rewetting / Rth / aging metrics;
- Green / Amber / Red thresholds;
- data format / model integration;
- final GO / HOLD / KILL.

### D. Foreground integration logic
- phone-specific geometry;
- package/VC/frame co-design;
- control policy;
- health-state estimator;
- system-level foreground IP.

Reason:
these are product architecture / platform competencies and should not depend on one external research partner.

## 5. What Russia can uniquely or complementarily supply

### 5.1 Pavlenko / Kutateladze Lab 1.3

Role type:
**FAILURE-MECHANISM + DIAGNOSTIC SOURCE**

Best insertion layers:
- L2 evaporator surface;
- L7 failure diagnostics/model.

Surviving differentiated value:
- reversible → irreversible dry-spot transition;
- crisis-mode / dryout propagation diagnostics;
- modified-surface / mesh mechanism knowledge;
- high-speed optical/IR + ML dry-spot analysis.

Do not position as:
- full phone VC supplier;
- generic mesh manufacturer;
- broad dryout/rewetting leader.

Strategic question:
> can failure-boundary knowledge create a measurable **dryout margin** advantage in a phone-scale water/copper UTVC?

## 5.2 MPEI / Ivanov–Kuzma-Kichta

Role type:
**RELIABILITY / HEALTH-STATE + HIERARCHICAL-LIQUID-RETURN SOURCE**

Best insertion layers:
- L3 wick / liquid return;
- L6 reliability / health state.

Surviving differentiated value:
- actual 42-month engineered-surface operation;
- capillary-state aging while integral thermal resistance remains comparatively stable;
- hierarchy/coating design lineage;
- external engineering/fabrication chain via Newfrost.

Do not position as:
- current phone-scale high-flux proof;
- generic reliability leadership;
- direct drop-in hierarchy.

Strategic question:
> can a measurable capillary/surface state predict **remaining dryout margin** before conventional thermal metrics visibly degrade?

## 5.3 TPU / Feoktistov–Orlova

Role type:
**SURFACE-PROCESS / MANUFACTURING CHALLENGER**

Best insertion layer:
- L2 evaporator surface.

Surviving value:
- copper + laser + water-boiling bridge;
- laser-process control;
- low-relief geometry with relatively good phone-fit potential;
- field durability of the laser process family.

Do not position as:
- unique biphilic VC concept;
- sealed-device proof;
- Russia-specific broad laser advantage.

Strategic question:
> can a low-organic low-relief copper laser process retain its surface state after VC manufacturing and shift confined rewetting/dryout?

## 5.4 Kutateladze Lab 6.6

Role type:
**RADICAL MECHANISM / ACTIVE-ARCHITECTURE RESERVE**

Best insertion layers:
- L4 two-phase transport physics;
- L8 optional active layer.

Surviving value:
- shear-driven film instability;
- dry-spot / rupture physics;
- extreme confinement;
- current gas-film-droplet electronics-cooling IP.

Do not position as:
- near-term internal-phone module;
- current power/volume winner.

Strategic question:
> can the shear-film advantage survive a **fixed total power + fixed volume + acoustic** budget?

## 5.5 Foundational Siberian network

Role type:
**MODEL / FAILURE-BOUNDARY INTERPRETATION RESERVE**

Relevant nodes:
- ICM / Altai exact/stability methods;
- Lavrentyev fluid modeling;
- Kutateladze experiment;
- NSU execution / diagnostics.

Strategic role:
not a separate product route.

Use only if it can reduce the number of physical design iterations or predict a failure boundary better than generic numerical models.

## 6. Internal target architecture — Failure-Aware Ultra-Thin Two-Phase Thermal System

This is a **project hypothesis**, not an experimentally validated architecture.

### Layer A — Product base

Strong phone-scale platform:
- package / TIM / UTVC / frame co-design;
- copper-water baseline;
- ~0.35–0.4 mm-class device;
- protected vapor-core budget;
- modern strong domestic/global comparator.

### Layer B — Failure-boundary surface

Candidate source:
Pavlenko mechanism knowledge.

Function:
- delay irreversible dryout;
- improve recovery;
- preserve vapor/liquid transport.

### Layer C — Process-stable surface option

Candidate source:
TPU low-relief laser-only copper.

Function:
- manufacturable comparator / challenger;
- spatial surface-state control if it survives sealed processing.

### Layer D — Health-state estimator

Candidate source:
MPEI long-duration capillary aging.

Function:
- estimate remaining capillary / dryout margin;
- detect functional degradation earlier than gross thermal-resistance failure.

### Layer E — Failure-margin model

Candidate source:
Pavlenko diagnostics + optional Siberian theory/model modules.

Function:
- map observable temperature/thermal-state history to distance from irreversible dryout;
- provide interpretable failure margin rather than a single temperature threshold.

### Layer F — System controller

Internal/OEM core.

Possible future inputs:
- junction / skin temperature;
- workload state;
- estimated dryout margin;
- estimated thermal-health state.

Possible outputs:
- DVFS;
- workload placement;
- transient performance allowance;
- optional active-cooling actuator if one ever becomes viable.

## 7. Why this architecture is strategically stronger than 'a better wick'

### Observation

Generic wick / surface / biphilic / laser ideas are heavily crowded by China/global work.

### Tension

Phone thermal systems increasingly operate close to:
- thickness limits;
- vapor-flow limits;
- skin-temperature limits;
- reliability/process limits.

### Inference

Differentiation shifts from:
> maximize nominal heat-transfer coefficient

toward:
> **know, shift and manage the failure margin over the device lifetime.**

### Strategic control point

Instead of one component metric, control:
**remaining thermal margin = function(geometry, surface state, fluid/process state, aging state, workload).**

This is the strongest cross-partner architecture hypothesis emerging from the project.

## 8. Opportunity portfolio after architecture synthesis

| Opportunity | Russian input | Internal/product input | Evidence maturity | Prior-art pressure | Current state |
|---|---|---|---|---|---|
| A. Irreversible-dryout margin control | Pavlenko | UTVC + package + fluid + controller | structural signal / strong mechanism | medium-high | **PRIMARY BET #1** |
| B. Thermal-health / aging-margin estimator | MPEI | product reliability data + VC metrics + model | unusual long-duration signal | medium | **PRIMARY BET #2** |
| C. Low-relief process-stable laser copper | TPU | phone process / sealing / reference | process signal | high | **CHALLENGER / ENABLER** |
| D. Failure-margin reduced-order model | Siberian network / Pavlenko | product state observability + internal model | foundational signal | medium-high | **FOUNDATIONAL RESERVE** |
| E. Low-flow shear-film active architecture | Lab 6.6 | power/volume/acoustic co-design | mechanism/IP signal | high | **HIGH-RISK RESERVE** |
| F. Generic LHP / fan / materials / biphilic / DVFS | various | already strong China/global/OEM capability | mature generic | very high | **NOT RUSSIA STRATEGIC BET** |

## 9. Keep / Narrow / Kill after Round 8

### KEEP
- Pavlenko failure-boundary collaboration thesis;
- MPEI aging / health-state thesis;
- TPU as process challenger;
- Lab 6.6 as radical reserve;
- foundational model network as optional enabler.

### NARROW
- 'better wick' → **failure-aware wick / surface state**;
- 'surface reliability' → **capillary-state / dryout-margin health indicator**;
- 'laser biphilic surface' → **sealed-process-stable low-relief copper surface**;
- 'active thin-film cooling' → **fixed-power / fixed-volume / low-flow architecture**.

### KILL as strategic Russia theses
- generic VC manufacturing;
- generic LHP miniaturization;
- generic laser/biphilic surface;
- generic thermal materials;
- generic fan acoustics;
- generic DVFS;
- generic dryout/rewetting expertise.

## 10. Collaboration-model implication

The preferred future collaboration model is **module-based, not supplier-based**.

### Partner roles
- Pavlenko: failure-mechanism / diagnostic module;
- MPEI: aging / health-state module;
- TPU: process module;
- Lab 6.6: radical mechanism reserve;
- foundational network: model interpretation module.

### Internal role
own the integration:
package + phone geometry + reference VC + data model + system controller + final product IP.

This reduces dependency risk and prevents the roadmap from collapsing if one partner is unavailable.

## 11. Round-8 architecture decision

Primary 3-year technical theme:

> **Failure-Aware / Health-Aware Ultra-Thin Two-Phase Thermal Architecture**

Not one Russian technology.

It is a phone architecture in which Russian capability may supply specific failure/aging/process knowledge while the product platform remains internally controlled.

### Current evidence status

**HYPOTHESIS / PRE-EXECUTION ARCHITECTURE.**

No partner data or physical validation has been added.

## 12. Next artifact

Companion roadmap:
`09_collaboration-roadmap/internal_3year_roadmap_round8_v01.md`

It converts this architecture into 0–12 / 12–24 / 24–36 month branches with explicit constraint-on and execution-restart paths.