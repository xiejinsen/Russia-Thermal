# OPP-01 — Kutateladze Mechanism-Resolved Failure Ground Truth

status: PRIMARY
priority: PRI-01-KUT-LAB13
direction: DIR-FAILURE-AWARE-UTVC
capability: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
partner: ACT-KUT-LAB13
key_person: PERSON-PAVLENKO
management_action: CONTACT_FIRST_WHEN_OUTREACH_IS_POSSIBLE

## 1. Management decision

This is the **only current collaboration package that should move first** when external outreach becomes possible.

The value is deliberately narrow:

> use Kutateladze Lab 1.3 as a mechanism-resolved crisis-state ground-truth / model-falsification partner, not as a supplier of a complete smartphone thermal solution.

Do not position the engagement around generic dryout detection, generic wick/surface enhancement or phone-UTVC architecture.

## 2. Decision question

Can Lab 1.3's reversible / irreversible crisis labels, confinement-dependent crisis modes and spatial drying-front observations expose repeatable state information that is **not already explained** by:

- external temperature/power thresholds;
- internal pressure/temperature ground truth;
- saturation-state dynamics;
- boiling-aware VC hydrodynamics;
- strong China dryout-mitigation hardware and microchannel baselines?

If yes, can that incremental mechanism information be mapped to phone-observable Tier-A / Tier-B features?

## 3. What the partner contributes

Public evidence supports:

- dielectric boiling-crisis / dry-spot experiments;
- high-speed thermal/optical diagnostics;
- reversible-to-irreversible crisis interpretation;
- confinement-dependent crisis-mode observations;
- topology-linked drying-front behavior;
- current failure-mechanism research continuity.

Primary scientific anchor:
- Alexander N. Pavlenko.

Additional Lab 1.3 people already normalized:
- PERSON-SURTAEV
- PERSON-SHVETSOV
- PERSON-ZHUKOV

## 4. What we must keep internally

Internal ownership must remain over:

- phone package and geometry;
- actual phone-class UTVC architecture;
- product fluid/process selection;
- manufacturing process;
- phone telemetry / observability definition;
- final failure-state model / controller;
- product validation;
- foreground product IP.

The Russian contribution is a **ground-truth layer**, not product ownership.

## 5. First engagement objective

The first contact should answer feasibility before any joint PoC is designed.

Request clarification on:

1. What current dry-spot / crisis datasets are shareable publicly, under NDA or through collaboration?
2. How are reversible and irreversible crisis states operationally labelled in their experiments?
3. What synchronized measurements exist: wall temperature, local temperature fields, pressure, heat input, high-speed imaging and timing?
4. Which geometries / gap heights / working fluids have repeated runs rather than one-off demonstrations?
5. Can excitation history, time-to-dryout, time-to-rewet and hysteresis be reconstructed from raw data?
6. What data / IP restrictions would apply to model training or model-validation use?
7. Can a future experiment be configured around a geometry or observable set closer to an ultra-thin sealed device?

## 6. Minimum useful data package

A collaboration is worth continuing only if at least one dataset can provide:

- experiment geometry and confinement;
- working-fluid / pressure condition;
- heat-input history;
- synchronized time series;
- crisis-state labels or raw signals sufficient to recreate them;
- repeat runs;
- reversible / irreversible outcomes;
- time-to-dryout / time-to-rewet where applicable;
- imaging or spatial dry-spot information when available.

A paper PDF alone is not a sufficient collaboration deliverable.

## 7. Proposed Stage-0 falsification test

This is a **future proposed test**, not current evidence.

Use one shareable dataset to compare three inference layers:

### Baseline A — generic
A generic anomaly / thermal RC baseline using product-like temperature/power history.

### Baseline B — physics-informed
A transient baseline using excitation history, throttling level, time-to-dryout, time-to-rewet and post-dryout hysteresis, plus internal pressure/temperature or saturation-state features when available.

### Challenger C — Russia-informed
Add mechanism labels / features derived from reversible-vs-irreversible crisis, confinement mode and spatial drying-front behavior.

The test question is not whether Challenger C fits the lab data better.

The test is whether it adds **repeatable out-of-sample state information** that changes a phone-relevant design or validation decision.

## 8. Promotion gate

Promote toward a joint Stage-0 only if a minimum falsifying dataset shows that Russia-informed features:

- distinguish reversible / irreversible crisis materially better than both baselines;
- remain useful across repeated runs rather than one trace;
- do not collapse to internal pressure/temperature or saturation-state features;
- can be mapped to an observable or controllable phone-relevant variable;
- change a validation, protection or design-margin decision.

The quantitative success threshold should be preregistered only after the accessible dataset and class balance are known.

## 9. Kill / downgrade gate

Stop or downgrade if:

- mechanism labels are redundant with internal pressure/temperature or saturation models;
- the effect remains specific to HFE / mm-scale open rigs without a credible phone mapping;
- labels are not repeatable;
- data cannot be shared at sufficient temporal/spatial resolution;
- no phone design/validation decision changes.

Generic mesh/capillary treatment does not rescue the package; that route is already excluded.

## 10. IP and data boundary

Preferred structure:

- partner retains pre-existing experimental methods / background IP;
- raw partner data remains under agreed data rights;
- our team owns phone architecture, feature integration, internal models and product foreground IP;
- jointly created experiment-specific interpretation should have explicit publication / patent rules before work starts.

## 11. Evidence anchors

Canonical:
- PRI-01-KUT-LAB13
- DIR-FAILURE-AWARE-UTVC
- CAP-KUT-L13-DRYOUT-DIAGNOSTICS
- PERSON-PAVLENKO
- CLM-PAV-009
- CLM-PRESSURE-004
- CLM-OBS-007
- CLM-OBS-008

Decision-grade comparator pressure includes:
- PAPER-CN-DRY-003
- PAPER-CN-DRY-004
- PAPER-CN-SJTU-DRY-001
- PAPER-GLOBAL-DRY-TRANSIENT-001
- PAPER-GLOBAL-INTERNAL-DRYOUT-001
- PAPER-GLOBAL-VC-DRYOUT-MODEL-001
- PATENT-GLOBAL-DRYOUT-OBS-001

## 12. Immediate next action

Prepare a one-page technical outreach brief around **data availability + crisis-state labelling**, not a broad partnership proposal.
