# PAPER-RU-TPU-003 — Deep Read

paper_id: PAPER-RU-TPU-003
deep_read_level: TIER_A
review_status: INSTITUTIONAL_PRIMARY_RECORD_PLUS_DECISION_REVIEW
reviewed_at: 2026-10-07
why_it_matters: This paper is strong evidence that TPU can translate laser surface modification from laboratory coupons into prolonged industrial field operation. Its relevance is process execution / durability, not phone thermal mechanism transfer.
decision_use: TPU_FIELD_PROCESS_TRANSLATION
related_claims: CLM-TPU-007; CLM-TPU-008
related_capabilities: CAP-TPU-LASER-WETTABILITY-PROCESS
related_directions: DIR-SURFACE-PROCESS-CHALLENGER
related_priorities: PRI-03-TPU

## Q1 — Problem and target mapping

The paper addresses slagging of boiler heat-transfer surfaces during brown-coal combustion.

Laser treatment creates passivated textured steel surfaces intended to reduce adhesion of slag deposits.

For Russia-Thermal, the value is not the boiler mechanism itself. The paper tests whether TPU's laser surface process can survive real industrial exposure for an extended period and preserve useful function.

## Q2 — Novelty vs strong baseline

The important feature is field translation:

- laser-treated surfaces;
- full operating boiler;
- approximately 60 days;
- direct deposit / material characterization;
- coupled heat-transfer modeling.

This is stronger manufacturing / process-readiness evidence than short laboratory wettability tests.

However, the environment, material and function are completely different from a sealed ultra-thin copper VC.

## Q3 — Falsifiable hypothesis

Laser-created microchannel / anisotropic surface texture and oxide/passivation state can reduce slag adhesion sufficiently to retain a meaningful heat-transfer benefit during prolonged real-boiler operation.

The field data support that hypothesis for the tested system.

## Q4 — Research lineage / competing route

The paper extends earlier TPU work on laser modification of heating surfaces from controlled laboratory slagging experiments into a real boiler field trial.

This demonstrates a credible capability chain:
process design -> surface characterization -> field exposure -> deposit measurement -> thermal modeling.

For phone transfer, this is evidence of execution discipline rather than unique heat-transfer physics.

## Q5 — Key process variables

Verified variables include:

- steel heating surface;
- laser-created Microchannels / anisotropic texture;
- passivation / oxide layer;
- brown-coal combustion;
- solid ferrous and sulfate-calcium deposits;
- 60-day boiler exposure;
- slag deposit mass / morphology;
- heat-transfer impact.

## Q6 — Experiment / method design

Field tests are conducted for 60 days in an operating boiler firing brown coal.

Surface / deposit analysis includes:
- scanning microscopy;
- X-ray fluorescence spectral analysis;
- mass analysis of slag deposits.

A mathematical model and original software code simulate dynamically changing slag-layer thickness in the thermal path:
hot flue gas -> slag layer -> tube wall -> liquid coolant.

## Q7 — Quantitative evidence / reproducibility

The institutional primary record reports:

- field-test duration: 60 days;
- laser-modified Microchannels surface shows higher resistance to slag adhesion;
- projected interval between furnace-cleaning procedures can increase by up to 64%;
- absorbed heat per unit area increases by approximately 1.6–2.2 times in the analyzed use case.

These values are boiler-system outcomes and must not be transferred numerically to phone cooling.

## Q8 — What it proves / does not prove

It supports:

- TPU can execute durable laser-surface engineering beyond laboratory coupons;
- textured surface functionality can survive a harsh long-duration industrial environment;
- TPU can combine process experiments with system-level thermal modeling.

It does not prove:

- copper / sub-mm fabrication;
- VC vacuum compatibility;
- sealed-water compatibility;
- wettability-pattern retention;
- confined two-phase routing or rewetting;
- phone manufacturing compatibility.

## Q9 — Decision contribution / control point

This paper raises confidence in TPU as a *process partner*, but it does not raise confidence in the retained phone thermal hypothesis.

It justifies asking TPU to fabricate and iterate a tightly specified Stage-0 coupon / mini-device, because they have evidence of real process translation.

It does not justify importing their boiler-surface process or treating field durability as phone reliability.

## Q10 — Next action / promotion or kill gate

Use TPU's field-process discipline as a collaboration-enablement signal only.

A phone Stage-0 must replace the boiler criteria with:
- thin copper deformation / dimensional control;
- contamination / outgassing;
- post-process wettability;
- sealed-fluid compatibility;
- confined capillary / rewetting performance.

If TPU cannot move its process capability into those constraints, downgrade the challenger to HOLD.

## Evidence boundary

### Source facts

- 60-day operating-boiler field test;
- brown-coal slag deposits;
- Microchannels laser texture;
- microscopy / XRF / mass analysis;
- up to 64% longer cleaning interval;
- 1.6–2.2x absorbed heat per unit area in the modeled / analyzed application.

### Analyst inference

- this is strong evidence of process translation and durability discipline;
- it is weak evidence for phone-VC transfer;
- TPU remains interesting as a fabrication/process collaborator only if phone-specific gates are passed.

### Unknown / request

- exact thin-copper dimensional control;
- vacuum / sealed-fluid process knowledge;
- transfer from steel passivation to copper wetting control;
- phone-scale yield / repeatability.

## 10Q footer

Evidence maturity: PROCESS_TRANSLATION
Decision impact: KEEP_PROCESS_PARTNER_SIGNAL_NOT_PHONE_PROOF
Open questions: thin-copper transfer; vacuum compatibility; sealed two-phase function
Primary source: DOI:10.1016/j.fuel.2024.133778
