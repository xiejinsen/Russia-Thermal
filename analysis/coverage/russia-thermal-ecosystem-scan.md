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
| Institute of Computational Modeling SB RAS, FRC KSC SB RAS | RAS | CANONICAL_ONBOARDED | Current Denis Nesterov / 2025 institute activity plus flat-heat-pipe electronics integration, two-phase thermal modeling, thermal stabilization and dryout-limit prediction; strongest application evidence is onboard electronics rather than smartphones. |

## University / academic engineering nodes outside the narrow two-phase core

| Institution | Class | Status | Why it matters / boundary |
|---|---|---|---|
| Lomonosov Moscow State University | University | CANONICAL_ONBOARDED | Institute of Mechanics / Vladimir Levashov: current nonequilibrium two-phase heat/mass-transfer and phase-change modeling explicitly motivated by micro/nanoelectronics heat removal. |
| Moscow Power Engineering Institute (MPEI) | University | CANONICAL_ONBOARDED | Long-duration capillary aging, thermosyphon, microchannels, ordered-wick and reliability lines. |
| Bauman Moscow State Technical University | University | CANONICAL_ONBOARDED | Wick/heat-pipe manufacturing-related capability. |
| Peter the Great St. Petersburg Polytechnic University | University | CANONICAL_ONBOARDED | Gradient heat-flux measurement / diagnostics. |
| Tomsk Polytechnic University | University | CANONICAL_ONBOARDED | Laser/wettability process capability. |
| Novosibirsk State University | University | CANONICAL_ONBOARDED | Two-phase diagnostics bridge into the Novosibirsk thermophysics ecosystem. |
| Ural Federal University | University | CANONICAL_ONBOARDED | 2025 LHP experiments plus the 2025 UrFU-copyrighted two-phase thermal-control monograph and 2026 UrFU-affiliated Sazhin work establish current Kiseev/Sazhin continuity. |
| Tomsk State University | University | CANONICAL_ONBOARDED | Active/passive electronics cooling, porous/channel structures and PCM thermal control with explicit phone applicability. |
| HSE University / MIEM | University | CANONICAL_ONBOARDED | Current 2026 electrothermal modeling of high-power electronic circuits/PCB overheating and cooling conditions; represented as thermal-reliability/modeling enabler rather than a cooling-device lab. |
| ITMO University | University | CANONICAL_ONBOARDED | Current Vladimir Korablev line includes semiconductor-device capillary cooling, electronics thermal analysis and cooling-system engineering; 2025/2026 activity confirms continuity. |
| MEPhI | University | CANONICAL_ONBOARDED | Pavel Struchalin: current boiling-onset diagnostics, transient pool boiling and channel heat-transfer regime prediction; represented as a failure/regime-diagnostics enabler. |
| Kazan Federal University | University | CANDIDATE_FOUND | 2024 power-electronics cooling-radiator thermal-field work in Naberezhnye Chelny Institute; needs continuity and direct compact-electronics relevance qualification. |
| MISIS University | University | CANDIDATE_FOUND | 2025 thermoelectric material for electronic temperature-control systems plus high-thermal-conductivity alloys/materials; primarily materials-side comparator. Current PI/device relevance still needs qualification. |
| Siberian Federal University | University | CANDIDATE_FOUND | Flat heat pipe systems for radio-electronic equipment / spacecraft electronics; need current continuity and current PI confirmation. |

## Electronics / microelectronics / aerospace-adjacent institutes

| Institution | Class | Status | Why it matters / boundary |
|---|---|---|---|
| Kurchatov Institute — Division of Design Problems in Microelectronics (former IPPM RAS) | National research center | HISTORICAL_SIGNAL_ONLY | Current post-2024 organizational continuity is verified, but first focused pass did not yet find equally current thermal-specific work comparable with its older thermal-fault / electrothermal modeling collaboration. Keep open for targeted evidence, do not onboard yet. |
| Institute for Problems of Microelectronics Technology and High-Purity Materials RAS (IPTM RAS) | RAS | FIRST_PASS_NO_STRONG_SIGNAL | Current institute/lab activity in microelectronics and high-purity materials is verified, but first focused pass did not find a sufficiently direct current electronics-thermal-management capability. |
| NPP TAIS | Research-engineering / industry | CANONICAL_ONBOARDED | Long-running Russian heat-pipe/LHP engineering company led publicly by Konstantin Goncharov; MPEI co-organizer of the international heat-pipe conference, with flight thermal-control design/manufacturing heritage. |
| Thercon-KTT | Research-engineering / industry | CANONICAL_ONBOARDED | Current full-cycle Russian LHP/heat-pipe company with thermal modeling, own wick/process equipment, testing and serial production; processor/FPGA electronics cooling is an explicit patent/application area. Current technical lead remains a people-gap to resolve. |
| NPO Lavochkin Heat Pipe Center | Research-engineering / space | CANONICAL_ONBOARDED | Current official Heat Pipe Center retains full-cycle design, manufacturing and testing capability for axial/LHP thermal-control hardware; represented in canonical graph with spacecraft-to-mobile transfer boundary. |
| Reshetnev Information Satellite Systems | Industry / space | EVIDENCE_QUALIFIED | Current 2024 official program develops miniature loop heat pipes and thermal-control subsystems using powder metallurgy, 3D printing and laser welding; direct engineering comparator for compact two-phase devices, but space-industry rather than academic capability. |
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
