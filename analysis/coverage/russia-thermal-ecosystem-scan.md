# Russia Thermal Ecosystem Coverage Scan

status: SUBSTANTIALLY_COMPLETE
scope: smartphone / compact-electronics thermal management and transferable Russian heat-transfer capability
updated_at: 2026-10-06

## Why this ledger exists

Russia's strongest thermal capabilities are distributed across universities, Russian Academy of Sciences institutes, specialized engineering institutes, and electronics / aerospace organizations. A university ranking alone is not a sufficient discovery frame.

This ledger complements the RAEX Top-20 university scan and is the mandatory anti-omission layer for the Russia side.

## Status vocabulary

- PENDING_SCAN
- FIRST_PASS_NO_STRONG_SIGNAL
- WEAK_SIGNAL
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
| Yaroslav-the-Wise Novgorod State University (NovSU) | University | CANONICAL_ONBOARDED | Yuri Kiliba: 2023-2025 electroosmotic heat-pipe / pump line for orientation-tolerant electronics cooling, including a physical pump prototype and power-electronics cooling publications. Phone transfer is bounded by high-voltage drive, pressure head, parasitic power, volume and reliability. |
| Ufa University of Science and Technology (UUST) | University | CANONICAL_ONBOARDED | Olga Solnyshkina: active 2024-2026 microfluidic / microchannel heat-transfer program with explicit electronics motivation, experimental micro/mini-channel heat exchangers, silicon processing and thermal-field diagnostics. Smartphone pumping/thickness/reliability remain unproven. |
| Kazan Federal University | University | WEAK_SIGNAL | Verified 2024 power-electronics radiator thermal-field work, but bounded follow-up found no sustained current compact-electronics cooling line. Explicitly kept outside the canonical graph unless stronger continuity appears. |
| MISIS University | University | CANONICAL_ONBOARDED | Vladimir V. Khovaylo / current thermoelectric and solid-state thermal-control materials capability is now canonical. Materials-side comparator only; smartphone cooler integration remains unproven. |
| Siberian Federal University | University | HISTORICAL_SIGNAL_ONLY | Direct electronics heat-pipe evidence was verified in the 2021 Reshetnev + ICM SB RAS collaboration, but no newer SFU-led direct continuity was found in the bounded current pass; current capability is better represented by the partner nodes. |

## Electronics / microelectronics / aerospace-adjacent institutes

| Institution | Class | Status | Why it matters / boundary |
|---|---|---|---|
| Kurchatov Institute — Division of Design Problems in Microelectronics (former IPPM RAS) | National research center | HISTORICAL_SIGNAL_ONLY | Post-2024 organizational continuity is verified. A second targeted pass still found no equally current thermal-specific program comparable with the older thermal-fault / electrothermal modeling collaboration; explicitly keep outside the graph unless new primary evidence appears. |
| Institute for Problems of Microelectronics Technology and High-Purity Materials RAS (IPTM RAS) | RAS | FIRST_PASS_NO_STRONG_SIGNAL | Current institute/lab activity in microelectronics and high-purity materials is verified, but first focused pass did not find a sufficiently direct current electronics-thermal-management capability. |
| Tomsk State University of Control Systems and Radioelectronics (TUSUR) | University / electronics | HISTORICAL_SIGNAL_ONLY | RSF project 23-29-00169 (2023-2024) directly developed high-thermal-conductivity 3D-printed multilayer PCB materials for microelectronics and demonstrated spacecraft electronics modules, but bounded follow-up did not verify comparable 2025-2026 program continuity. Retain as package/material prior capability, not a current core node. |
| NPP TAIS | Research-engineering / industry | CANONICAL_ONBOARDED | Long-running Russian heat-pipe/LHP engineering company led publicly by Konstantin Goncharov; MPEI co-organizer of the international heat-pipe conference, with flight thermal-control design/manufacturing heritage. |
| Thercon-KTT | Research-engineering / industry | CANONICAL_ONBOARDED | Current full-cycle Russian LHP/heat-pipe company with thermal modeling, own wick/process equipment, testing and serial production; processor/FPGA electronics cooling is an explicit patent/application area. Current technical lead remains a people-gap to resolve. |
| NPO Lavochkin Heat Pipe Center | Research-engineering / space | CANONICAL_ONBOARDED | Current official Heat Pipe Center retains full-cycle design, manufacturing and testing capability for axial/LHP thermal-control hardware; represented in canonical graph with spacecraft-to-mobile transfer boundary. |
| Reshetnev Information Satellite Systems | Industry / space | EVIDENCE_QUALIFIED | Current 2024 official program develops miniature loop heat pipes and thermal-control subsystems using powder metallurgy, 3D printing and laser welding. Keep outside the canonical graph for now because the distinct current technical-lead / collaboration package is unresolved; use as an industry engineering comparator, not as a mobile product claim. |
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
Current materials work includes thermoelectrics for temperature-control systems in electronics and high-thermal-conductivity alloys; value is materials-side, not yet device-level thermal architecture. Canonical onboarding is complete.

### NovSU
RSF project 23-29-10187 and NovSU's 2025 official update establish a sustained electroosmotic heat-pipe / pump line for electronics whose orientation changes. The differentiating residual is active capillary-flow assistance without moving mechanical parts; phone relevance remains low until high-voltage, parasitic-power, packaging and reliability constraints are resolved.

### UUST
RSF project 24-19-00697 plus current UUST staff/program records establish a 2024-2026 microchannel thermal program with explicit electronics motivation, micro/mini-channel heat-exchanger experiments, silicon/glass microfabrication work and temperature-field diagnostics. Treat as an adjacent research platform, not as a demonstrated phone liquid-cooling architecture.

### TUSUR
RSF project 23-29-00169 is strong direct evidence of thermally conductive multilayer PCB / package-material work for electronics, including experimental spacecraft modules, but the verified program window is 2023-2024. It remains historical/supporting evidence pending newer continuity.

## Coverage closure result

The Russia anti-omission audit is **substantially complete for Phase 1**:

1. all RAEX Top-20 universities have final classifications;
2. no tracked institution remains PENDING_SCAN;
3. thermal-conference / journal / RSF / RAS reverse scans were used to search beyond university rankings;
4. newly exposed current positive nodes (NovSU and UUST) are canonical-onboarded;
5. weaker or non-current positives (KFU, SFU, Kurchatov/IPPM, TUSUR) are explicitly bounded outside the graph;
6. Reshetnev remains evidence-qualified but intentionally outside the canonical graph until a distinct current technical-lead / collaboration package is resolved.

This is now sufficient to refresh the Russia-vs-China synthesis. New research may still add evidence, but broad ecosystem discovery should stop unless the synthesis exposes a decision-critical gap.
