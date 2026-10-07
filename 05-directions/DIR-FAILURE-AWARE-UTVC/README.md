# DIR-FAILURE-AWARE-UTVC

record_state: CURRENT
role: PRIMARY_COLLABORATION_DIRECTION
investment_lane: STRATEGIC_CANDIDATE
evidence_maturity: MULTISOURCE_SUPPORT
differentiation_confidence: MEDIUM
phone_transfer_maturity: LOW_MEDIUM

Problem:
Ultra-thin phone two-phase systems can approach abrupt dryout/capillary failure. Generic external observability, transient dryout/rewet state-history models, internal temperature/pressure ground truth and boiling-aware vapor-chamber hydrodynamics are already strong global baselines. The unresolved question is whether a richer mechanism taxonomy adds decision value beyond them.

Strategic hypothesis:
Use selected Kutateladze Lab 1.3 reversible-to-irreversible crisis, confinement-dependent crisis-mode and spatial drying-front knowledge as a laboratory ground-truth / model-falsification layer for an internally controlled phone-UTVC state model, rather than importing a generic dryout observer or dryout model.

related_claims:
- CLM-PAV-003
- CLM-PAV-004
- CLM-PAV-005
- CLM-PAV-007
- CLM-PAV-008
- CLM-PAV-009
- CLM-PRESSURE-001
- CLM-PRESSURE-002
- CLM-PRESSURE-004
- CLM-PRESSURE-005
- CLM-PRESSURE-007
- CLM-OBS-001
- CLM-OBS-002
- CLM-OBS-003
- CLM-OBS-004
- CLM-OBS-007
- CLM-OBS-008
- CLM-CN-SJTU-003
- CLM-CN-BIT-001

candidate_capabilities:
- CAP-KUT-L13-DRYOUT-DIAGNOSTICS

strongest_baseline:
External temperature-difference + power dryout characterization/control prior art; physics-informed transient time-to-dryout/time-to-rewet/hysteresis models with spatiotemporal wick saturation; internal vapor temperature/pressure ground-truth experiments; boiling-aware vapor-chamber dryout models with two-phase relative permeability; independent China capillary-fed dryout/rewetting and modified-mesh engineering; SJTU micro/nano phase-change, dielectric-fluid ultra-thin-wick and dryout-mitigation microchannel work; BIT ultra-thin VC / capillary-porous / microchannel-boiling capability; strong domestic UTVC controls.

Residual differentiation:
Mechanism-resolved laboratory ground truth: reversible/irreversible crisis classes, confinement-dependent crisis-mode transitions and topology-linked drying-front behavior, only if these labels expose repeatable residual state information beyond strong internal-sensing, saturation-state and boiling-aware vapor-chamber baselines.

Internal control boundary:
phone package, UTVC geometry, product fluid, manufacturing, final controller/data model and final product foreground IP remain internally owned.

Next question:
Can Russia-informed laboratory mechanism labels explain a repeatable failure-state residual that is not already captured by internal temperature/pressure ground truth, saturation-state dynamics or boiling-aware VC hydrodynamics, and can that residual be mapped to Tier A/B phone observables?

Promotion gate:
a minimum falsifying dataset shows Russia-informed mechanism features classify reversible / irreversible crisis state materially better than both (1) a generic anomaly / RC baseline and (2) a physics-informed transient baseline using excitation history, time-to-dryout, throttling level, time-to-rewet and post-dryout hysteresis.

Kill / downgrade gate:
downgrade if value reduces to generic mesh/capillary treatment, is HFE/mm-scale specific, or does not change phone design/validation decisions.
