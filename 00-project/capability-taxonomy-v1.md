# Thermal Capability Taxonomy v1.0

status: FROZEN
date: 2026-10-08
scope: Russia-Thermal Capability classification for research storage and leadership presentation

## 1. Design principle

Use two levels:

- **Capability Family** — coarse management-facing classification.
- **Capability Topic** — optional research-facing technical tags.

Rule:
**store enough detail for research; present the coarse Family by default.**

A Capability has exactly one primary Family.
A Capability may have multiple Topics.

Sources / Papers / Patents do not duplicate these tags.
They inherit technical context through Claim -> Capability relations.

## 2. Capability Families

### SOFTWARE_SYSTEM

Meaning:
software/runtime/system methods that manage thermal behavior without being a cooling device themselves.

Examples:
- DVFS;
- thermal-aware scheduling;
- workload placement;
- thermal control policy;
- runtime thermal management;
- system thermal optimization.

Research priority:
**LIMITED_SCAN**

Project rule:
- retain representative Russian institutions / people / capabilities;
- capture clearly important current work;
- do not expand into broad compiler, scheduler, OS or runtime landscape research;
- do not perform exhaustive bibliometric coverage unless a later leadership question explicitly requires it.

Reason:
software thermal management expands quickly into CPU scheduling, compiler optimization, OS policy and system architecture, which is outside the main value of this project.

### PASSIVE_HARDWARE

Meaning:
thermal transport / spreading / heat removal that does not require externally powered flow or refrigeration to operate.

Examples:
- vapor chamber;
- heat pipe;
- loop heat pipe;
- wick / capillary structure;
- graphite / heat spreader;
- TIM;
- passive PCM;
- passive two-phase transport;
- passive surface/capillary enhancement.

Research priority:
**PRIMARY**

### ACTIVE_HARDWARE

Meaning:
thermal hardware that requires active power, driven flow, electromechanical actuation or active refrigeration.

Examples:
- fan / blower;
- MEMS fan / micro air mover;
- pump-driven liquid cooling;
- electroosmotic pumping;
- jet / spray systems requiring driven flow;
- thermoelectric / electrocaloric active cooling;
- active flow-control hardware.

Research priority:
**PRIMARY**

Boundary:
phase change itself does not make a system active.
A sealed VC remains PASSIVE_HARDWARE.
A pumped liquid loop is ACTIVE_HARDWARE.

### ENABLING

Meaning:
capabilities that improve design, observation, reliability, manufacturing or validation but are not themselves the primary heat-removal architecture.

Examples:
- sensing / diagnostics;
- thermal imaging / heat-flux measurement;
- dryout / failure-state detection;
- reliability / aging / health;
- modeling / CFD / reduced-order model / stability analysis;
- aeroacoustics;
- manufacturing / sealing / process control;
- packaging / integration;
- surface/process characterization.

Research priority:
**PRIMARY_WHEN_TRANSFER_RELEVANT**

Enabling capability can be strategically valuable even when it is not a standalone cooling solution.

## 3. Capability Topics

Topics are optional multi-select tags.
They are for research drill-down and filtering, not the default leadership navigation.

Initial controlled vocabulary:

### Passive-hardware topics
- VC_HEAT_PIPE
- LOOP_HEAT_PIPE
- CAPILLARY_WICK
- HEAT_SPREADER_GRAPHITE
- TIM_INTERFACE
- PASSIVE_PCM
- PASSIVE_PHASE_CHANGE
- PASSIVE_SURFACE_ENGINEERING

### Active-hardware topics
- FAN_BLOWER
- MEMS_MICRO_AIR_MOVER
- PUMPED_LIQUID
- MICROFLUIDIC_COOLING
- JET_SPRAY_COOLING
- ELECTROOSMOTIC_PUMP
- THERMOELECTRIC
- ELECTROCALORIC
- ACTIVE_FLOW_CONTROL

### Enabling topics
- BOILING_DRYOUT_PHYSICS
- SENSING_DIAGNOSTICS
- HEAT_FLUX_MEASUREMENT
- RELIABILITY_AGING
- HEALTH_MONITORING
- MODELING_CFD
- MODELING_REDUCED_ORDER
- STABILITY_ANALYSIS
- AEROACOUSTICS
- SURFACE_PROCESS
- MANUFACTURING_PROCESS
- PACKAGING_INTEGRATION
- MATERIAL_CHARACTERIZATION

### Software/system topics
- DVFS
- THERMAL_AWARE_SCHEDULING
- WORKLOAD_PLACEMENT
- RUNTIME_THERMAL_CONTROL
- SYSTEM_THERMAL_MODEL

## 4. Maintenance rule

Do not create a new Topic merely because one paper uses a new phrase.

Create a Topic only when it supports:
- repeated filtering;
- leadership drill-down;
- comparison across multiple capabilities;
- or a distinct research program that cannot be represented by an existing tag.

Topic growth should be slow.

## 5. Presentation rule

Leadership views:
- show Family first;
- normally hide Topic detail until drill-down.

Research/Atlas views:
- allow Family and Topic filters;
- allow one Capability to expose multiple Topics.

Default leadership grouping:

Thermal Management
- Software & System
- Hardware
  - Passive
  - Active
- Enabling Capabilities

Software & System should receive less visual emphasis than Passive / Active Hardware in this project.

## 6. Existing-project compatibility

Existing Capability objects remain valid.

Migration rule:
- add `capability_family` during Atlas enrichment;
- add `capability_topics` only where useful;
- do not rewrite existing Claims or Sources merely to add taxonomy;
- no existing Direction / Decision meaning changes because of classification.
