# Research Progress

Last updated: **2026-10-05**

## Overall status

- **Overall research + validation completion:** ~94%
- **Public desk-research completion:** ~98%
- **Estimated remaining overall program:** ~6%
- **Current phase:** Observability / Pre-Execution Controller Closure
- **Immediate stage:** **Round 10 — Observability Identifiability & Controller Falsification (No Outreach / No Experiment)**

This file is the single authoritative **current-state** page.

## Current execution constraint

At present:
- no direct Russian-university outreach;
- no physical Stage-0 coupon / thermal experiment.

Authority:
[Current Execution Constraints](00_scope/current_execution_constraints_2026_10_05.md)

Therefore analytical/design work may advance readiness but does not count as partner or experimental validation.

## Current Stage-0 order

1. **Kutateladze Institute of Thermophysics SB RAS — Lab 1.3 / Pavlenko**
   - irreversible-dryout / boiling-crisis diagnostics
   - **GO WITH PREREQUISITE**
   - future execution deferred.

2. **Moscow Power Engineering Institute — Ivanov / Kuzma-Kichta / Alyautdinova**
   - engineered-surface aging / capillary-state reliability
   - **GO WITH PREREQUISITE**
   - future execution deferred.

3. **Tomsk Polytechnic University — Feoktistov / Orlova**
   - laser / wettability process challenger
   - **GO WITH PREREQUISITE**
   - future execution deferred.

4. **Kutateladze Institute — Lab 6.6 / Kochkin / Kabov / Chinnov**
   - shear-driven microfilm / dry-spot / instability
   - **HIGH-RISK MECHANISM / IP RESERVE**

5. **MPEI ordered-wick line**
   - **HOLD / PRE-DEVICE**

## Last closed round

**Round 9 — Dryout-Margin / Thermal-Health Observability Study**

Closed:
- confirmed that transient dryout has measurable temperature/history signatures;
- added a latent wick-saturation model baseline for time-to-dryout / time-to-rewet;
- added transient thermal-impedance and adaptive-observer method comparators;
- separated Android/device thermal headroom from internal two-phase dryout margin;
- defined an O0–O5 observability ladder;
- narrowed "absolute dryout margin" to a calibrated **estimated dryout-risk / thermal-health state**;
- created the opportunistic thermal-system-identification hypothesis;
- defined Keep / Narrow / Kill observability gates.

Current observability authority:
[Round 9 Dryout / Thermal-Health Observability](08_opportunities-transfer/dryout_thermal_health_observability_round9_v01.md)

Current architecture authority:
[Round 8 Internal Phone Thermal Architecture](08_opportunities-transfer/internal_phone_thermal_architecture_round8_v01.md)

Current roadmap authority:
[Round 8 Internal 3-Year Technology Roadmap](09_collaboration-roadmap/internal_3year_roadmap_round8_v01.md)

Historical record:
[Round 9 progress record](history/progress/00g_2026_10_05_round9_dryout_thermal_health_observability.md)

## Current strategic architecture

Primary theme:

> **Failure-Aware / Health-Aware Ultra-Thin Two-Phase Thermal Architecture**

Interpretation:
- strong phone-scale package / UTVC / frame platform remains internally controlled;
- Russian capability is inserted only where differentiated:
  - Pavlenko → irreversible-dryout boundary / diagnostics;
  - MPEI → aging / capillary-health state;
  - TPU → surface-process challenger;
  - Lab 6.6 → radical active-flow reserve;
  - Siberian theory/model network → optional failure-boundary interpretation.

## Round-9 observability decision

The product control variable is now intentionally narrower than the Round-8 wording.

Do not claim:
> a directly measured physical distance to dryout.

Current hypothesis:
> **Estimated Thermal Risk / Health State = observer(power history, temperature history, operating context, calibrated device model).**

Candidate outputs:
- thermal-path health index;
- dryout-risk / time-to-dryout estimate;
- recovery / rewetting confidence;
- estimator confidence with fallback to conventional limits.

## Current control points

### C1 — Dryout margin
Distance to irreversible dryout under current geometry / surface / fluid / load state.

### C2 — Thermal health state
Capillary / wetting / process degradation before gross Rth failure.

### C3 — Process-retained surface function
Whether the designed surface state survives product manufacturing and life.

### C4 — Active-flow frontier
Only a reserve if fixed power / volume / acoustic budget is credible.

## Current roadmap state

- **G1 Architecture readiness:** ADVANCED / near closure.
- **G2 Stage-0 selection:** DEFERRED.
- **G3 sealed-device transfer:** NOT STARTED.
- **G4 repeatable product capability:** NOT STARTED.

No route is Stage-1 ready.

## External dependencies

[External Dependency Ledger](09_collaboration-roadmap/dependencies/README.md)

PARTNER and EXPERIMENT items remain deferred, not closed.

## Why progress percentages did not change

Round 8 materially improved:
- architecture clarity;
- strategic control-point definition;
- collaboration modularity;
- 3-year gate structure.

It did **not** close:
- partner data;
- physical performance;
- sealed-process survival;
- legal/FTO;
- product validation.

Therefore:
- public desk research remains ~98%;
- overall research + validation remains ~94%.

## Next minimum task

**Round 10 — Observability Identifiability & Controller Falsification**

Research question:

> Can a practical phone telemetry vector distinguish a two-phase-specific health/dryout state from generic package/interface thermal drift strongly enough to justify a dedicated estimator?

Target areas:
1. minimum telemetry vector;
2. strongest generic RC / package-aging baseline;
3. two-phase-specific latent-state hypotheses;
4. excitation / probing budget;
5. ambient, orientation and unit-variation confounders;
6. synthetic / literature-derived expected signatures;
7. future blind Stage-0 identification protocol;
8. Keep / collapse decision for separate C1 dryout-risk and C2 thermal-health states.

Round 10 remains compatible with the no-outreach/no-experiment constraint.

## History

- [Progress History Index](history/progress/README.md)
- [Repository Changelog](CHANGELOG.md)

Historical records are provenance only and must not override this current-state file.
