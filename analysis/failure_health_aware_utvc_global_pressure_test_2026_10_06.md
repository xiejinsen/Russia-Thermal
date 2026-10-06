# Failure-Aware + Health-Aware UTVC — Global / China Pressure Test

Date: 2026-10-06
Research mode: Phase-1 public evidence
Decision goal: pressure-test the two current primary collaboration Directions against 2024–2026 global/China evidence and older decision-critical prior art.

## Executive result

**NARROW BOTH; KEEP BOTH.**

Neither Direction is killed, but neither should be framed around generic monitoring.

### Failure-Aware UTVC
- KEEP as strategic candidate.
- NARROW from “dryout observability” to **mechanism-specific reversible→irreversible crisis classification / failure-boundary knowledge**.
- differentiation confidence: MEDIUM after pressure test.

### Health-Aware UTVC
- KEEP as strategic candidate.
- NARROW from “health monitoring” to **actual multi-year engineered-surface / capillary-state aging knowledge whose incremental value must be proven beyond strong China reliability baselines**.
- differentiation confidence: MEDIUM after pressure test.

## Evidence that changed the decision

### 1. Generic external dryout observability is prior art

US10788847B2 directly claims electronic heat-pipe control using component power plus temperature difference across heat-pipe sections, including thresholds indicative of dryout and performance reduction.

Decision impact:
broad novelty of “infer dryout from practical temperature/power telemetry” is killed.

### 2. Transient dryout / rewetting signatures are already well characterized

2024 transient recovery experiments expose:
- thermal hysteresis;
- time-to-rewet;
- recovery-power dependence.

2025 transient modeling adds:
- dynamic wick saturation;
- prediction of time-to-dryout;
- time-to-rewet;
- hysteresis;
- validation on multiple commercial heat pipes.

Decision impact:
time-domain signatures are a strong mandatory baseline, not Russia-specific differentiation.

### 3. China product-path reliability baseline is stronger than before

Existing China evidence already included:
- copper-water oxidation-driven VC failure;
- rapid lifetime prediction using oxidation state.

New pressure-test evidence adds:
- CN120404563A pre-encapsulation VC aging testing with temperature / humidity / vacuum-positive-pressure stress and real-time visual monitoring.

Decision impact:
Health-Aware UTVC cannot be sold as generic aging/reliability monitoring.

## Surviving whitespace

### Failure-Aware
Potential residual:
- mechanism-specific reversible→irreversible dry-spot / crisis transition;
- ability to distinguish true two-phase failure-state evolution from generic temperature rise / package drift;
- failure-boundary information useful before gross thermal collapse.

This remains a hypothesis until phone-relevant sealed copper/water evidence exists.

### Health-Aware
Potential residual:
- actual multi-year operation of one engineered hierarchical evaporator surface;
- capillary-state evolution despite comparatively stable integral thermal behavior;
- possible mechanism knowledge for degradation modes not captured by oxygen-only/process-QA metrics.

Online early warning is still an analyst hypothesis.

## Strong baseline for any future observer

Any “thermal health” or “remaining thermal margin” concept must beat at least:

1. absolute temperatures;
2. workload / power history;
3. temperature difference across available locations;
4. calibrated RC / thermal-impedance residual;
5. transient time-to-dryout / hysteresis / recovery features;
6. package/interface aging proxies;
7. copper-water oxygen / oxidation / vacuum-process QA.

If mechanism-specific features do not add incremental predictive value, collapse the concept to a generic thermal-health index.

## Evidence gap

This round did **not publicly recover** a smartphone ultra-thin-VC system that demonstrably:
- estimates mechanism-specific remaining dryout margin online;
- separates two-phase degradation from generic package/interface aging;
- uses only practical product telemetry.

This is negative public evidence only, not proof such internal OEM capability does not exist.

## Final decision

- DIR-FAILURE-AWARE-UTVC: **KEEP + NARROW**
- DIR-HEALTH-AWARE-UTVC: **KEEP + NARROW**
- combined observer idea: **HYPOTHESIS ONLY**
- generic dryout monitoring novelty: **KILL**
- generic VC aging-monitoring novelty: **KILL**

## Next smallest useful stage

Do **not** search broadly again.

Next:
design a decision-grade observability matrix that maps:
- latent physical state;
- practical phone observables;
- generic baseline features;
- Russia-specific mechanism knowledge;
- identifiability/confounding;
- minimum falsifying dataset.

Goal:
determine whether a mechanism-specific observer is even theoretically identifiable from phone-available telemetry before proposing any physical PoC.
