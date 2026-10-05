# Round 8 — Internal 3-Year Technology Roadmap v0.1

Last updated: 2026-10-05

Status: **CURRENT INTERNAL ROADMAP — GATE-BASED / NO OUTREACH / NO EXPERIMENT AT PRESENT**

Architecture authority:
[Internal Phone Thermal Architecture Synthesis](../08_opportunities-transfer/internal_phone_thermal_architecture_round8_v01.md)

Quantitative authority:
- [Round 7 Transfer Feasibility Envelope](../08_opportunities-transfer/quantitative_transfer_feasibility_envelope_round7_v01.md)
- [Round 7 Minimum-Win Thresholds](pre_execution_minimum_win_thresholds_round7_v01.md)

Constraint authority:
[Current Execution Constraints](../00_scope/current_execution_constraints_2026_10_05.md)

## 1. Roadmap principle — two clocks

### Calendar clock
0–12 / 12–24 / 24–36 months from the current planning point.

### Validation clock
starts only when:
- partner access is allowed; and/or
- physical experiment capability is available.

Do not claim that calendar progress alone advances physical evidence maturity.

## 2. Three-year north star

Primary technical theme:

> **Failure-Aware / Health-Aware Ultra-Thin Two-Phase Thermal Architecture**

Product-platform objective:
- retain internal ownership of package / UTVC / frame / control integration;
- use Russian capability only where it contributes differentiated failure, aging, process or instability knowledge;
- convert thermal design from nominal performance optimization toward **remaining failure-margin management**.

### Three strategic control points

**C1 — Dryout margin**
How far is the current operating state from irreversible dryout?

**C2 — Health state**
How much capillary / wetting / process margin has been lost over life?

**C3 — Process-retained function**
Does the functional surface state survive actual product manufacturing and aging?

Optional long-term control point:
**C4 — Active flow frontier**
Can an active film architecture improve net power-volume-noise performance?

## 3. Portfolio structure

### Primary Bet A — Failure-boundary-aware UTVC

Russian source:
Pavlenko / Lab 1.3.

Internal/product ownership:
- phone geometry;
- UTVC base;
- product fluid;
- package/frame integration;
- dryout-margin estimator / control integration.

Success concept:
measureably increase irreversible-dryout margin or recovery at phone geometry without consuming vapor/transport margin.

### Primary Bet B — Aging-aware thermal health

Russian source:
MPEI / Ivanov–Kuzma-Kichta.

Internal/product ownership:
- reliability state model;
- product telemetry / test metric;
- accelerated-life correlation;
- final remaining-life / dryout-margin estimator.

Success concept:
a surface/capillary health metric provides earlier warning of future dryout-margin loss than nominal Rth alone.

### Challenger C — Process-stable laser copper

Russian source:
TPU / Feoktistov–Orlova.

Role:
- manufacturable surface-process challenger;
- possible enabler for Bet A / B;
- independent process path if Russia failure-mechanism routes cannot be transferred.

Success concept:
low-relief copper surface retains function after sealed-VC manufacturing and clears the same minimum-win threshold.

### High-Risk Reserve D — Low-flow shear-film active architecture

Russian source:
Kutateladze Lab 6.6.

Activation condition:
only if future system numbers show credible gas/pump power + volume + acoustic budget.

## 4. 0–12 months — architecture / evidence-to-design closure

### 4.1 Constraint-on work — executable now

#### Workstream A — reference architecture specification

Freeze an internal reference envelope using existing public evidence:
- ~0.35–0.4 mm passive UTVC class;
- ~0.2 mm internal/vapor-core class;
- water as primary reference fluid;
- <=35 μm preferred added surface height;
- <=120 μm preferred functional-element height;
- <=150 μm stretch ceiling;
- Green/Amber/Red vapor-space guard.

Deliverable:
**Phone Thermal Reference Envelope v1**.

#### Workstream B — failure-margin state model

Define model variables without claiming calibrated accuracy:
- heat load / hotspot footprint;
- evaporator temperature;
- condenser / frame boundary;
- liquid-supply proxy;
- vapor-pressure-drop proxy;
- dryout-state variable;
- aging / capillary-health variable.

Target output:
an interpretable state vector:
**{thermal load, transport state, surface health, estimated dryout margin}**.

Deliverable:
model specification + input/output contract.

#### Workstream C — partner-independent design candidates

Maintain three internal conceptual candidates:

A1 — Pavlenko-inspired 80–100 μm transfer branch;
A2 — aggressive ~60 μm branch with explicit permeability compensation;
B1 — MPEI non-homothetic liquid-return hierarchy;
C1 — TPU low-relief laser-only copper reference/challenger.

No physical-performance claim.

#### Workstream D — decision-data schema

Define one common future dataset:
- geometry;
- peak feature height;
- permeability / uptake proxy;
- wetting state;
- Rth;
- dryout onset;
- irreversible transition;
- recovery time;
- post-process state;
- aging state.

Reason:
all future partner or experiment data should enter one comparable model.

#### Workstream E — technical-IP hypothesis ledger

Keep only narrow hypotheses:
- manufacturing-retained irreversible-dryout control;
- capillary-health predictor of dryout-margin loss;
- low-organic process-stable copper wetting topology;
- fixed-power/volume/noise active control.

Do not expand broad claims.

### 4.2 If execution access reopens during 0–12 months

Run only the frozen restart sequence:
1. refresh contact/current role;
2. request the single highest-value partner datum from each active route;
3. plug returned numbers into Round-7 thresholds;
4. eliminate RED routes before any coupon work;
5. run the smallest Stage-0 matrix only for surviving routes.

### 4.3 0–12 month gate

Gate G1 — **Architecture readiness**

Pass when:
- reference envelope is frozen;
- common state model is defined;
- candidate geometries map to phone stack;
- minimum-win metrics are unambiguous;
- no broad prior-art thesis remains.

This gate can pass without experiments.

## 5. 12–24 months — evidence convergence / sealed-device candidate

This phase is conditional on execution access.

### If access remains blocked

Do not manufacture confidence.

Allowed:
- refresh major public evidence when triggered;
- refine model architecture;
- re-evaluate roadmap against new OEM/product architecture;
- maintain partner packet freshness.

Do not:
- call a route validated;
- promote to product candidate;
- perform speculative FTO on non-winning geometry.

### If access is available

#### Gate G2 — Stage-0 selection

Select **maximum two** physical candidates.

Preferred competition:
- Bet A: Pavlenko-inspired failure-boundary route;
- Bet B or C: MPEI health-aware hierarchy or TPU process challenger.

Kill all routes that fail:
- phone geometry;
- process compatibility;
- minimum-win threshold;
- transport/vapor-space budget.

#### Gate G3 — sealed-device transfer

For surviving route(s):
- sealed copper-water VC;
- strong China/global-style reference;
- package-relevant heater footprint;
- transient load;
- dryout/recovery;
- process / orientation / cycling.

Add MPEI health-state measurements only if they produce a useful precursor signal.

### 12–24 month technical objective

Move from:
**mechanism signal**

to:
**one sealed-device architecture/product candidate or a clear KILL.**

### Candidate foreground-IP milestone

Only after a winner:
- targeted claims-level prior-art refresh;
- legal/FTO trigger;
- foreground design-around / filing decision.

## 6. 24–36 months — product/platform integration

Conditional on G3 pass.

### Workstream A — package / VC / frame co-design

Integrate:
- SoC/package thermal path;
- TIM;
- evaporator location;
- VC footprint;
- frame / midplate / skin spreading;
- battery/camera/wireless-charging conflicts.

### Workstream B — thermal margin observability

Goal:
turn the physical mechanism into a system variable.

Potential product state:
**estimated remaining dryout margin / thermal health**.

Possible use:
- dynamic performance allowance;
- workload placement;
- graceful degradation;
- reliability QA;
- lifetime calibration.

This is a hypothesis until physical correlation exists.

### Workstream C — manufacturing / reliability

Need:
- process window;
- yield;
- contamination/outgassing;
- vacuum/degassing stability;
- cycling;
- long-duration drift;
- supplier compatibility.

### Workstream D — partner model

By this point decide whether Russian involvement remains:
- joint IP / joint research;
- mechanism consulting / diagnostics;
- process source;
- reliability/model source;
- or no continuing dependency.

### 24–36 month gate

Gate G4 — **repeatable product capability**

Pass only if:
- phone-level performance/value exists;
- process is repeatable;
- reliability is acceptable;
- foreground/background IP is clear;
- Russian contribution remains differentiated and strategically useful.

## 7. Roadmap by strategic bet

| Horizon | Bet A — dryout margin | Bet B — health state | Bet C — TPU process | Reserve D — active film |
|---|---|---|---|---|
| 0–12 m | model failure-margin variables; preserve 60–100 μm transfer envelope | define health-state metric / aging-to-margin hypothesis | low-relief copper process envelope | maintain v³ power/volume model only |
| 12–24 m if access | Stage-0 then sealed-device winner | correlate capillary state with failure margin | process-stability / sealed-device challenger | system-budget plausibility before hardware |
| 24–36 m if winner | package + VC + control integration | reliability/lifetime estimator | manufacturing route / process fallback | only if net frontier clearly beats passive |

## 8. Internal vs external responsibility

| Capability | Internal / product team | Russian partner value |
|---|---|---|
| phone package constraints | **own** | none required |
| strong UTVC baseline | **own / domestic supply** | none required |
| product-fluid choice | **own** | mechanism-transfer input only |
| irreversible-dryout labels/physics | integrate/model | **Pavlenko high value** |
| multi-year capillary aging | productize/model | **MPEI high value** |
| laser surface process | benchmark/integrate | **TPU possible value** |
| extreme shear-film physics | system-budget/filter | **Lab 6.6 reserve value** |
| thermal-health estimator | **own foreground** | mechanism/data input |
| package/VC/frame co-design | **own foreground** | consulting only |
| product controller | **own foreground** | SPbU or others only as optional method input |

## 9. Scenario branches

### Scenario S1 — no Russian access for 12+ months

Outcome:
- do not stop the internal architecture program;
- continue package/UTVC/failure-margin modeling;
- treat Russia as a future mechanism source, not a dependency.

Roadmap state:
**architecture continues; validation gates paused.**

### Scenario S2 — only one partner becomes accessible

If Pavlenko:
prioritize Bet A.

If MPEI:
prioritize Bet B reliability / health-state path.

If TPU:
use as process challenger; do not inflate into broad Russia differentiation.

If Lab 6.6 only:
request system-budget data first; do not redirect the whole roadmap to active film cooling.

### Scenario S3 — physical experiment becomes available but partner access does not

Use strong global/public controls only.

Internal goal:
- establish baseline dryout/rewetting/aging observability;
- prepare test/data framework;
- do not claim Russia mechanism transfer.

### Scenario S4 — partner access + experiment both return

Execute frozen Stage-0 sequence immediately.

Do not reopen broad literature discovery.

## 10. 3-year Keep / Kill discipline

### Keep through year 1
- Bet A;
- Bet B;
- TPU process challenger;
- Lab 6.6 reserve only.

### By end of Stage-0 / G2

Kill at least one of the three passive candidate routes unless evidence clearly supports multiple orthogonal value propositions.

### By G3

Carry maximum:
- one primary physical surface/wick architecture;
- one reliability/health-state capability;
- one radical reserve.

### By G4

Do not preserve a Russia collaboration solely because the science is prestigious.

Keep only if it controls a differentiated product-relevant variable.

## 11. Roadmap success definition

The project succeeds even if no Russian surface becomes a product component, provided it produces one of:
- a better failure-margin model;
- a useful aging-health indicator;
- a stronger internal dryout/reliability test methodology;
- a narrow strategic collaboration capability;
- a decisive KILL that prevents wasted product investment.

## 12. Current roadmap state

**G1 Architecture readiness: ADVANCED / nearing closure.**

**G2 Stage-0 selection: DEFERRED by current execution constraints.**

**G3 sealed-device transfer: NOT STARTED.**

**G4 repeatable product capability: NOT STARTED.**

Current next work under existing constraints:
finish Round-8 portfolio/control-point synthesis and freeze the internal architecture model; do not simulate partner evidence.