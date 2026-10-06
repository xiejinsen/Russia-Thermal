# Russia Top-20 University Thermal-Management Coverage Scan

status: ACTIVE
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
- CANDIDATE_FOUND
- EVIDENCE_QUALIFIED
- CANONICAL_ONBOARDED

## Coverage ledger

| RAEX rank | University | Status | Current project state / next action |
|---:|---|---|---|
| 1 | Lomonosov Moscow State University | PENDING_SCAN | Mandatory systematic scan still required. |
| 2 | Bauman Moscow State Technical University | CANONICAL_ONBOARDED | Wick / heat-pipe manufacturing-related capability already represented. |
| 3 | Moscow Institute of Physics and Technology | PENDING_SCAN | Mandatory systematic scan required. |
| 4 | Saint Petersburg State University | CANONICAL_ONBOARDED | Mobile DVFS/software thermal background represented; hardware thermal scan still worth bounding. |
| 5 | National Research Nuclear University MEPhI | PENDING_SCAN | Mandatory systematic scan required. |
| 6 | HSE University | PENDING_SCAN | Bounded scan; expected low hardware-thermal prior probability. |
| 7 | MGIMO University | PENDING_SCAN | Bounded scan; likely negative for technical scope, but must be recorded. |
| 8 | RANEPA | PENDING_SCAN | Bounded scan; likely negative for technical scope, but must be recorded. |
| 9 | Peter the Great St. Petersburg Polytechnic University | CANONICAL_ONBOARDED | Gradient heat-flux measurement capability represented. |
| 10 | Financial University under the Government of the Russian Federation | PENDING_SCAN | Bounded negative-control scan required. |
| 11 | Sechenov University | PENDING_SCAN | Bounded scan for thermal/biothermal methods; relevance likely low. |
| 12 | Ural Federal University | PENDING_SCAN | Engineering/thermal scan required. |
| 13 | Tomsk Polytechnic University | CANONICAL_ONBOARDED | Laser/wettability process capability represented. |
| 14 | RUDN University | PENDING_SCAN | Thermal/engineering scan required. |
| 15 | ITMO University | PENDING_SCAN | Electronics/photonics thermal-management scan required. |
| 16 | Novosibirsk State University | CANONICAL_ONBOARDED | Two-phase diagnostics bridge represented; linked to Siberian thermal research ecosystem. |
| 17 | MISIS University | PENDING_SCAN | Materials / thermal-interface / electronics cooling scan required. |
| 18 | Plekhanov Russian University of Economics | PENDING_SCAN | Bounded negative-control scan required. |
| 19 | Tomsk State University | PENDING_SCAN | Thermal/physics scan required. |
| 20 | Kazan Federal University | PENDING_SCAN | Thermal/engineering scan required. |

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

Russia coverage is not complete until:
- all RAEX Top 20 rows have an explicit scan result;
- all positive signals are qualified or rejected;
- relevant non-university RAS institutes remain included;
- no country-level conclusion is inferred from rank or map density alone.
