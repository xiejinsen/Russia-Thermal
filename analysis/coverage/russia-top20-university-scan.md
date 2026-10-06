# Russia Top-20 University Thermal-Management Coverage Scan

status: TOP20_SCAN_COMPLETE
baseline: RAEX-100 2026
scope: smartphone / mobile electronics thermal-management and transferable heat-transfer capability discovery
updated_at: 2026-10-06

Ranking source:
- https://raex-rr.com/education/russian_universities/top-100_universities/2026/

## Coverage rule

Russia uses:
- RAEX Top 20 mandatory scan;
- plus domain-relevant exceptions outside Top 20 (for example MPEI);
- plus major Russian Academy institutes where the thermal capability is institutionally stronger than at a university.

## Status vocabulary

- PENDING_SCAN
- SCANNED_NO_STRONG_SIGNAL
- WEAK_SIGNAL
- CANDIDATE_FOUND
- EVIDENCE_QUALIFIED
- CANONICAL_ONBOARDED

## Coverage ledger

| RAEX rank | University | Status | Current project state / next action |
|---:|---|---|---|
| 1 | Lomonosov Moscow State University | CANONICAL_ONBOARDED | Institute of Mechanics / Vladimir Levashov: current nonequilibrium two-phase heat/mass-transfer project explicitly motivated by micro/nanoelectronics heat removal via evaporation and boiling. | Continue evidence enrichment; model as foundational rather than device capability. |
| 2 | Bauman Moscow State Technical University | CANONICAL_ONBOARDED | Wick / heat-pipe manufacturing-related capability already represented. |
| 3 | Moscow Institute of Physics and Technology | SCANNED_NO_STRONG_SIGNAL | Deep school/lab/publication scan found strong aerospace heat transfer, thermal-material and plasma heat-load work but no sufficiently direct current electronics/chip-cooling program for this project slice. | Reopen only if direct electronics-thermal primary evidence appears. |
| 4 | Saint Petersburg State University | CANONICAL_ONBOARDED | Mobile DVFS/software thermal background represented; hardware thermal scan still worth bounding. |
| 5 | National Research Nuclear University MEPhI | CANONICAL_ONBOARDED | Pavel Struchalin: transient pool boiling, boiling-onset diagnostics and channel-regime prediction; modeled as a failure/regime-diagnostics enabler rather than mobile hardware. |
| 6 | HSE University | CANONICAL_ONBOARDED | HSE MIEM 2026 electrothermal modeling of high-power electronic circuits/PCB overheating; Igor Kharitonov current professor. Modeled as thermal-reliability / EDA enabler rather than cooling-device hardware. |
| 7 | MGIMO University | SCANNED_NO_STRONG_SIGNAL | Bounded current engineering/thermal scan found no sustained electronics-cooling or transferable heat-transfer research program relevant to this slice. Reopen only on new primary evidence. |
| 8 | RANEPA | SCANNED_NO_STRONG_SIGNAL | Bounded current scan found no engineering thermal-management research program relevant to electronics/mobile cooling. Reopen only on new primary evidence. |
| 9 | Peter the Great St. Petersburg Polytechnic University | CANONICAL_ONBOARDED | Gradient heat-flux measurement capability represented. |
| 10 | Financial University under the Government of the Russian Federation | SCANNED_NO_STRONG_SIGNAL | Current institutional research is dominated by finance/economics/management; bounded scan found no electronics thermal-management program. |
| 11 | Sechenov University | SCANNED_NO_STRONG_SIGNAL | Current medical-electronics and biomedical engineering activity is real, but bounded scan found no sustained electronics-cooling / chip thermal-management line comparable to this project's scope. |
| 12 | Ural Federal University | CANONICAL_ONBOARDED | Valery Kiseev / Oleg Sazhin: 2025 peer-reviewed LHP nanofluid/vapor-generation work, 2025 UrFU-copyrighted two-phase thermal-control monograph and continuing 2026 UrFU affiliation establish current activity. | Continue evidence enrichment; mobile-form-factor boundary remains explicit. |
| 13 | Tomsk Polytechnic University | CANONICAL_ONBOARDED | Laser/wettability process capability represented. |
| 14 | RUDN University | SCANNED_NO_STRONG_SIGNAL | Two-pass institution/lab scan did not identify a sustained electronics thermal-management line. A highly relevant nanosatellite processor/LHP paper found in the RUDN journal was authored by BMSTU researchers and must not be attributed to RUDN. | Reopen only on direct RUDN primary evidence. |
| 15 | ITMO University | CANONICAL_ONBOARDED | Vladimir Korablev: current semiconductor-device capillary cooling, electronics thermal analysis and cooling-system engineering; 2025 microprocessor-cooling dissertation activity confirms continuity. |
| 16 | Novosibirsk State University | CANONICAL_ONBOARDED | Two-phase diagnostics bridge represented; linked to Siberian thermal research ecosystem. |
| 17 | MISIS University | CANONICAL_ONBOARDED | Vladimir V. Khovaylo and the current MISIS thermoelectric / solid-state thermal-control materials program are represented canonically. | Keep explicitly materials-side; do not infer smartphone cooler readiness. |
| 18 | Plekhanov Russian University of Economics | SCANNED_NO_STRONG_SIGNAL | Bounded current scan found no engineering electronics-thermal-management research program relevant to this slice. |
| 19 | Tomsk State University | CANONICAL_ONBOARDED | Nikita Gibanov / Nadezhda Bondareva: active/passive electronics cooling, channel/porous structures, PCM thermal control; official applicability explicitly includes phones and compact electronics. | Continue evidence enrichment only. |
| 20 | Kazan Federal University | WEAK_SIGNAL | A real 2024 Naberezhnye Chelny power-electronics radiator temperature-field paper was verified, but bounded follow-up did not establish a sustained current compact-electronics cooling program. | Keep outside the canonical graph unless repeat work / a dedicated current group appears. |

## Domain-relevant exceptions already in project

| Institution | RAEX 2026 rank / class | Status | Reason |
|---|---:|---|---|
| Moscow Power Engineering Institute (MPEI) | 24 | CANONICAL_ONBOARDED | Strong long-duration capillary aging, thermosyphon and microchannel lines; too relevant to exclude by rank cutoff. |
| Kutateladze Institute of Thermophysics SB RAS | RAS institute | CANONICAL_ONBOARDED | Core Russian heat-transfer / boiling / crisis-physics anchor. |
| Joint Institute for High Temperatures RAS | RAS institute | CANONICAL_ONBOARDED | Microchannel/boiling support. |
| Frumkin Institute | RAS institute | CANONICAL_ONBOARDED | Wettability/surface chemistry comparator. |
| Institute of Continuum Mechanics UB RAS | RAS institute | CANONICAL_ONBOARDED | Exact/interfacial stability modeling. |
| Lavrentyev Institute of Hydrodynamics SB RAS | RAS institute | CANONICAL_ONBOARDED | Microfilm/interfacial modeling. |

## Completion rule

Russia RAEX Top-20 baseline coverage is complete and candidate qualification is closed for this phase: all 20 rows now have explicit final classifications. Broader Russia ecosystem anti-omission coverage is tracked in russia-thermal-ecosystem-scan.md; rank/map density is never used as a country-level capability conclusion.
