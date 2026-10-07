# Russia Capability Atlas — Active Hardware Gap Round 2

date: 2026-10-08
status: ROUND_2_CLOSED
scope: deeper Russia-language active-hardware discovery plus correction of existing capability modeling

## Questions

1. Can a current Russia-based terminal/compact-electronics MEMS fan / micro-air-mover node be recovered?
2. Does current Russian thermoelectric electronics cooling qualify as a real device/system capability rather than materials/modeling only?
3. Does the existing Kutateladze Lab 6.6 evidence already contain a distinct active-hardware capability that was previously hidden inside an Enabling capability?

## Result 1 — compact air mover remains a bounded gap

A second Russia-language / institution-oriented pass searched:
- microfan;
- MEMS fan;
- piezoelectric fan;
- synthetic jet;
- microblower;
- compact active-air cooling for electronics.

Recovered results were dominated by:
- non-Russian commercial/product pages translated into Russian;
- general Russian MEMS fabrication capability without electronics-cooling air-mover evidence;
- existing Russian aeroacoustic capability;
- old/non-current or non-terminal-adjacent material.

No sufficiently current, Russia-owned, electronics-oriented MEMS/micro-air-mover node was recovered for canonical onboarding.

Correct interpretation:
**DIRECT RUSSIA COMPACT-AIR-MOVER NODE NOT RECOVERED AFTER TWO BOUNDED PASSES.**

This is not an absence claim.

The gap remains searchable later if:
- a named Russian team/company appears;
- a patent/project lead emerges;
- leadership specifically asks about active-air cooling.

## Result 2 — Dagestan State Technical University qualifies as current thermoelectric Active Hardware

New canonical node:
**Dagestan State Technical University / Oleg V. Evdulov**

Evidence:
- RSF project 23-29-00130 explicitly targets high-current thermoelectric cooling systems for radioelectronics and medical technology;
- the RSF project reports 2024 work on radioelectronic-element and electronic-board thermal control;
- a 2023 full-text paper reports an experimental thermoelectric cooling device for discrete radioelectronic elements;
- the laboratory device used primary and additional thermoelectric-module sections and was tested under multiple electrical/thermal conditions;
- reported temperature reached approximately 272 K near 5 A in the tested configuration;
- reported time to operating regime was approximately 90 s;
- model/experiment discrepancy was reported within approximately 10%.

Canonical additions:
- ACT-DGTU
- PERSON-EVDULOV-OV
- OFFICIAL-RSCF-DGTU-TE-001
- PAPER-RU-DGTU-TE-001
- PAPER-RU-DGTU-TE-001/deep-read.md
- CLM-DGTU-TE-001
- CAP-DGTU-THERMOELECTRIC-ELECTRONICS

Classification:
- ACTIVE_HARDWARE
- THERMOELECTRIC
- target fit: ADJACENT
- disposition: SUPPORT_ONLY

Boundary:
current radioelectronics/device evidence does not establish smartphone/wearable power efficiency, millimeter-scale integration, hot-side heat rejection or battery-level value.

## Result 3 — Kutateladze Lab 6.6 had a hidden Active Hardware capability

Existing modeling:
- CAP-KUT-L66-SHEAR-FILM-INSTABILITY = ENABLING
- correctly represents gas-shear / free-surface / rupture / instability mechanism expertise.

Existing current 2026 evidence:
- PATENT-RU2860581C1;
- OFFICIAL-KABOV-ELECTRONICS-IP-001;
- CLM-FILM-006.

These sources describe an electronics-targeted active architecture using:
- staged gas flow;
- liquid droplets;
- gas-sheared liquid film;
- micro/mini-channel geometry.

This is a distinct capability from mechanism expertise.

New canonical capability:
- CAP-KUT-L66-ACTIVE-GAS-LIQUID-COOLING

Classification:
- ACTIVE_HARDWARE
- JET_SPRAY_COOLING
- MICROFLUIDIC_COOLING
- ACTIVE_FLOW_CONTROL
- target fit: ADJACENT
- disposition: SUPPORT_ONLY

The existing DIR-EXTREME-FILM-RESERVE remains mechanism-focused and is not promoted.

## Non-onboarded candidates

### SPbU EHD Lab
Official direct evidence was recovered for a 2018 student/start-up project using electrohydrodynamic pumping for processor liquid cooling.

Reason not onboarded as current Atlas node:
- direct current continuity was not recovered;
- evidence is too old and project-status continuity is unclear.

### ICM thermoelectric cooling
ICM/SB RAS has credible thermoelectric modeling and broader experimental cooling work.

Reason no new terminal Active Hardware node:
- recent electronics-specific evidence is weaker than DGTU;
- much of the recovered line is modeling or non-electronics refrigeration;
- existing ICM capabilities already capture stronger project-relevant assets.

## Current Russia Capability distribution

Before Atlas enrichment:
- PASSIVE_HARDWARE = 11
- ACTIVE_HARDWARE = 3
- ENABLING = 16
- SOFTWARE_SYSTEM = 1
- total = 31

After Round 1:
- ACTIVE_HARDWARE = 4
- total = 32

After Round 2:
- PASSIVE_HARDWARE = 11
- ACTIVE_HARDWARE = 6
- ENABLING = 16
- SOFTWARE_SYSTEM = 1
- total = 34

These are canonical-graph counts, not national market/capability shares.

## Strategic impact

No existing Phase-1 strategic Direction changes.

New nodes improve the Russia-only capability map:
- DGTU adds current thermoelectric device/system competence;
- Lab 6.6 gains a correctly separated active electronics-cooling architecture;
- compact air mover remains a documented gap.

## Recommended transition

Stop broad ACTIVE_HARDWARE gap searching for now.

Next Atlas enrichment should move to:
1. platform-transfer tagging of current Russian hardware Capabilities;
2. institution-level research-output snapshots;
3. patent-output snapshots;
4. collaboration / industry / international relationship records;
5. influence/context signals for leadership comparison.

Retain compact-air-mover/MEMS fan as an explicit reopenable gap.

SOFTWARE_SYSTEM remains LIMITED_SCAN.
