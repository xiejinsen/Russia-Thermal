# Research Progress

Last updated: **2026-10-05**

## Overall status

- **Overall research + validation completion:** ~94%
- **Public desk-research completion:** ~98%
- **Estimated remaining overall program:** ~6%
- **Current phase:** Phase-1 Insight Convergence / Freeze
- **Immediate stage:** **Phase 1 closure — insight synthesis frozen; validation deferred**

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

### C1 — Estimated dryout-risk state
Calibrated estimate of dryout risk / time-to-dryout under current geometry, workload and operating context; **not** a directly measured physical distance.

### C2 — Estimated thermal-health state
Hidden capillary / wetting / process degradation inferred from dynamic thermal response before gross Rth failure, if identifiability is demonstrated.

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

Round 9 materially improved:
- observability evidence;
- control-variable precision;
- generic-baseline discipline;
- falsification criteria for C1/C2.

It did **not** close:
- partner data;
- physical correlation between phone telemetry and hidden two-phase state;
- sealed-process survival;
- legal/FTO;
- product validation.

Therefore:
- public desk research remains ~98%;
- overall research + validation remains ~94%.

## Next minimum task

**No further broad desk-research task is active.**

Phase 1 is now treated as:
**INSIGHT-COMPLETE / VALIDATION-INCOMPLETE.**

Next work should be triggered by one of:
- leadership review;
- internal thermal-expert review;
- future university / partner discussion;
- new evidence that materially changes a core conclusion;
- a concrete PoC / implementation / IP decision.

The previously planned Round 10 observability-identifiability study is deferred to a later validation / expert-review phase.

## History

- [Progress History Index](history/progress/README.md)
- [Repository Changelog](CHANGELOG.md)

Historical records are provenance only and must not override this current-state file.
