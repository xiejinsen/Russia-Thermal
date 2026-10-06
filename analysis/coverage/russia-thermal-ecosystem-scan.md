# Russia Thermal Ecosystem Coverage Scan

status: ACTIVE
scope: smartphone / compact-electronics thermal management and transferable Russian heat-transfer capability
updated_at: 2026-10-06

## Why this ledger exists

Russia's strongest thermal capabilities are distributed across universities, Russian Academy of Sciences institutes, specialized engineering institutes, and electronics / aerospace organizations. A university ranking alone is not a sufficient discovery frame.

This ledger complements the RAEX Top-20 university scan and is the mandatory anti-omission layer for the Russia side.

## Status vocabulary

- PENDING_SCAN
- FIRST_PASS_NO_STRONG_SIGNAL
- CANDIDATE_FOUND
- EVIDENCE_QUALIFIED
- CANONICAL_ONBOARDED
- COVERED_UNDER_PARENT
- HISTORICAL_SIGNAL_ONLY

## Core thermal-physics / two-phase institutes

| Institution | Class | Status | Why it matters / boundary |
|---|---|---|---|
| S.S. Kutateladze Institute of Thermophysics SB RAS | RAS | CANONICAL_ONBOARDED | Core Russian boiling, CHF/dryout, dielectric-fluid boiling, microchannels, modified surfaces and electronics-cooling anchor. Current 2025-2028 work explicitly includes microelectronics and Huawei-linked boiling research. |
| Joint Institute for High Temperatures RAS (JIHT) | RAS | CANONICAL_ONBOARDED | Engineering thermophysics, heat/mass transfer, boiling/microchannel support and thermophysical methods. |
| Institute for Thermophysics of Extreme States, JIHT RAS | RAS center | COVERED_UNDER_PARENT | Current organizationally belongs to JIHT; do not create a duplicate top-level Actor unless a distinct collaboration package emerges. |
| Institute of Thermal Physics UB RAS / LHP laboratory | RAS | CANONICAL_ONBOARDED | Long-running loop-heat-pipe expertise represented via ACT-ITP-UBRAS / ACT-ITP-LHP-LAB. |
| Lavrentyev Institute of Hydrodynamics SB RAS | RAS | CANONICAL_ONBOARDED | Microfilm/interfacial modeling relevant to evaporation and thin-film transport. |
| Institute of Continuum Mechanics UB RAS | RAS | CANONICAL_ONBOARDED | Exact/interfacial stability modeling. |
| Frumkin Institute of Physical Chemistry and Electrochemistry RAS | RAS | CANONICAL_ONBOARDED | Wettability / surface chemistry comparator. |
| Institute of Computational Modeling SB RAS, FRC KSC SB RAS | RAS | CANDIDATE_FOUND | Mathematical models and software for two-phase flat heat pipes and thermal design of onboard electronics; direct overlap with heat-pipe thermal architecture. Need current responsible person / continuity check. |

## University / academic engineering nodes outside the narrow two-phase core

| Institution | Class | Status | Why it matters / boundary |
|---|---|---|---|
| Moscow Power Engineering Institute (MPEI) | University | CANONICAL_ONBOARDED | Long-duration capillary aging, thermosyphon, microchannels, ordered-wick and reliability lines. |
| Bauman Moscow State Technical University | University | CANONICAL_ONBOARDED | Wick/heat-pipe manufacturing-related capability. |
| Peter the Great St. Petersburg Polytechnic University | University | CANONICAL_ONBOARDED | Gradient heat-flux measurement / diagnostics. |
| Tomsk Polytechnic University | University | CANONICAL_ONBOARDED | Laser/wettability process capability. |
| Novosibirsk State University | University | CANONICAL_ONBOARDED | Two-phase diagnostics bridge into the Novosibirsk thermophysics ecosystem. |
| Tomsk State University | University | CANONICAL_ONBOARDED | Active/passive electronics cooling, porous/channel structures and PCM thermal control with explicit phone applicability. |
| HSE University / MIEM | University | EVIDENCE_QUALIFIED | Current 2026 electrothermal modeling of high-power electronic circuits/PCB overheating and cooling conditions; useful thermal-reliability/modeling enabler, not a cooling-device lab. |
| ITMO University | University | CANDIDATE_FOUND | Thermal-physics education and historical/current electronics-cooling / microprocessor cooling work. Need current PI / lab continuity. |
| MEPhI | University | CANDIDATE_FOUND | Boiling-onset diagnostics, transient pool boiling and channel heat-transfer regime prediction; mechanism/diagnostics relevance rather than phone hardware. |
| MISIS University | University | CANDIDATE_FOUND | 2025 thermoelectric material for electronic temperature-control systems plus high-thermal-conductivity alloys/materials; primarily materials-side comparator. |
| Siberian Federal University | University | CANDIDATE_FOUND | Flat heat pipe systems for radio-electronic equipment / spacecraft electronics; need current continuity and current PI confirmation. |

## Electronics / microelectronics / aerospace-adjacent institutes

| Institution | Class | Status | Why it matters / boundary |
|---|---|---|---|
| Kurchatov Institute — Division of Design Problems in Microelectronics (former IPPM RAS) | National research center | CANDIDATE_FOUND | Micro/nanoelectronics design methods; historical joint work on thermal-fault detection / thermal simulation of electronic components. Need current post-2024 organizational continuity check. |
| Institute for Problems of Microelectronics Technology and High-Purity Materials RAS (IPTM RAS) | RAS | PENDING_SCAN | Strong microelectronics/materials relevance; thermal-management-specific evidence still needs focused scan. |
| Reshetnev Information Satellite Systems | Industry / space | CANDIDATE_FOUND | Repeated coauthorship on flat heat-pipe systems for onboard electronics; useful aerospace heat-pipe comparator but outside academic-only map. |
| TSAGI | Research institute | CANONICAL_ONBOARDED | Aeroacoustic methods; supporting relevance to active-cooling noise rather than core two-phase hardware. |

## Search-wave findings to retain

### HSE / MIEM
2026 official HSE material reports electrothermal modeling of powerful electronic circuits on PCBs, with explicit use for overheating prediction, cooling-condition correction and reliability. Igor Kharitonov remains a current professor / senior researcher with thermal-effects expertise.

### Kutateladze
2025-2028 official institute records show boiling/evaporation on modified surfaces, dielectric-fluid immersion-cooling work, Huawei-linked heat-transfer research, and a 2026-2028 program explicitly mentioning microelectronics.

### ICM SB RAS + Siberian Federal University
The Krasnoyarsk ecosystem has direct flat-heat-pipe / heat-pipe-system work for radio-electronic and spacecraft electronics, including mathematical optimization and dedicated thermal-design software for two-phase flat heat pipes.

### ITMO
Current university structure still includes Information Technologies in Thermal Physics, while its publication/dissertation system contains electronics thermal-analysis and microprocessor-cooling work. Current mobile relevance remains unproven.

### MEPhI
Current supervisor/repository records show pool-boiling, transient heat-flux and boiling-onset diagnostics. This is a diagnostics/mechanism candidate rather than a mobile product node.

### MISIS
Current materials work includes thermoelectrics for temperature-control systems in electronics and high-thermal-conductivity alloys; value is materials-side, not yet device-level thermal architecture.

## Mandatory completion rule

Russia coverage is not complete until:

1. every RAEX Top-20 university has an explicit final classification;
2. all institutions in this ecosystem ledger are no longer PENDING_SCAN;
3. specialized RAS institutes discovered through Russian thermal conferences/journals are checked for duplication and current activity;
4. electronics / space / microelectronics organizations that repeatedly appear in thermal evidence are assessed even if they are not universities;
5. every positive node is either canonical-onboarded or explicitly kept outside the graph with a documented reason;
6. no Russia-vs-China conclusion is updated until this coverage audit is substantially complete.
