# PAPER-RU-DGTU-TE-001 — Deep Read

paper_id: PAPER-RU-DGTU-TE-001
deep_read_level: TIER_A
review_status: FULL_TEXT_PRIMARY_REVIEW
reviewed_at: 2026-10-08
why_it_matters: This paper supplies direct experimental evidence that the Evdulov/DGTU line is not only thermoelectric materials or modeling; it has built and tested an electronics-oriented thermoelectric cooling device.
decision_use: RUSSIA_ACTIVE_HARDWARE_ATLAS
related_claims: CLM-DGTU-TE-001
related_capabilities: CAP-DGTU-THERMOELECTRIC-ELECTRONICS
related_directions:
related_priorities:

## Q1 — Problem and target mapping

The paper addresses active cooling of discrete radioelectronic elements using thermoelectric modules.

For Russia-Thermal, the relevant question is whether Russia has a current solid-state active-cooling team with actual electronics-oriented hardware rather than only thermoelectric materials or theoretical optimization.

The target is radioelectronic components, not a phone or wearable.

## Q2 — Novelty vs strong baseline

The useful contribution for this project is not a claim that thermoelectric cooling is globally novel.

The paper demonstrates a specific laboratory architecture using a primary thermoelectric section plus additional sections and heat-exchange structures, followed by full-scale temperature measurements.

Its Atlas value is evidence of current Russian device/system competence.

## Q3 — Falsifiable hypothesis

The team can design, assemble and experimentally characterize thermoelectric cooling systems for localized electronic heat sources, and can match model predictions to measured thermal response within engineering-useful error.

The terminal-transfer hypothesis is that this device/system capability may be transferable to localized hotspot control in compact electronics if parasitic power and hot-side rejection can be reduced sufficiently.

## Q4 — Capability lineage / competing route

The work sits inside the Evdulov/DGTU thermoelectric-cooling line and is explicitly linked to RSF project 23-29-00130.

The strong baseline is broad global and China thermoelectric electronics cooling, including miniature localized cooling. Therefore DGTU should not be framed as uniquely Russian at the principle level.

## Q5 — Technical control variables

The paper varies and/or measures:
- thermoelectric-module supply current;
- simulated electronic-element heat load;
- temperature at multiple locations in the thermoelectric-device structure;
- transient time to the cooled operating state;
- modeled versus measured temperature behavior.

The tested module family includes Cryotherm DRIFT-1.5.

## Q6 — Experiment / method design

The authors describe a laboratory thermoelectric device consisting of:
- a primary thermoelectric-module section;
- two additional thermoelectric-module sections;
- primary and additional heat-exchange structures;
- a simulator of the discrete radioelectronic element;
- temperature measurement across the structure.

The experiment records transient temperatures for multiple module-current and heat-source-power conditions and compares them with the calculation model.

## Q7 — Quantitative evidence / reproducibility

The paper reports:
- approximately 272 K achieved at the simulated electronic element under a supply current near 5 A for the selected module configuration;
- approximately 90 s to reach the operating regime;
- model/experiment discrepancy no more than approximately 10%.

These values demonstrate a functioning experimental system but also expose the main mobile-transfer concern: the electrical current and transient/system overhead are not yet demonstrated as acceptable for battery-powered thin terminals.

## Q8 — What it proves / does not prove

It supports:
- a real thermoelectric cooling prototype;
- direct experimental electronics relevance;
- current DGTU competence in active solid-state cooling;
- consistency between experimental and modeled behavior.

It does not prove:
- favorable coefficient of performance at smartphone heat loads;
- acceptable battery-power overhead;
- a phone-class thickness/volume solution;
- adequate hot-side heat rejection in a sealed thin chassis;
- product reliability or manufacturing readiness.

## Q9 — Decision contribution / control point

For the Russia Capability Atlas, this is sufficient to create an ACTIVE_HARDWARE Capability node.

It is not sufficient to create a new strategic collaboration Direction.

The most credible value is an adjacent solid-state cooling engineering team that can prototype and characterize thermoelectric systems; its incremental value versus China/global baselines remains unproven.

## Q10 — Next action / promotion or kill gate

Retain DGTU as an Atlas active-hardware node.

Before any strategic promotion, require matched evidence for:
1. compact electronics form factor;
2. cooling benefit per watt of electrical input;
3. hot-side heat-rejection path;
4. package thickness and mass;
5. transient response against passive VC/graphite and miniature active-air baselines.

Do not promote if those system penalties erase the localized cooling benefit.

## Evidence boundary

### Source facts

- DGTU authors built and tested a thermoelectric cooling device for a discrete radioelectronic-element simulator;
- the system used primary/additional thermoelectric-module sections and heat-exchange structures;
- reported cooled temperature reached approximately 272 K near 5 A;
- reported time to operating condition was approximately 90 s;
- model/experiment discrepancy was reported within approximately 10%.

### Analyst inference

- this is sufficient evidence of current device/system thermoelectric capability;
- mobile-terminal transfer is plausible only as an engineering hypothesis;
- the main barrier is system-level electrical and hot-side thermal overhead, not proof of the thermoelectric effect.

### Unknown / request

- tested heat load corresponding to the 272 K operating point in a mobile-relevant configuration;
- total electrical input and COP for the full device;
- hot-side rejection hardware size;
- compact package thickness;
- durability under thermal cycling and shock;
- whether current RSF work has produced smaller radioelectronics prototypes after 2023.
