# China Top-20 University Thermal-Management Coverage Scan

status: ACTIVE
baseline: 2026 ShanghaiRanking Best Chinese Universities Ranking (main table)
scope: smartphone / mobile electronics thermal-management comparator discovery
updated_at: 2026-10-06

## Purpose

Prevent prompt-driven institution discovery. Every Top-20 university must receive an explicit scan result before the China comparator graph is considered coverage-complete.

Ranking source:
- https://www.shanghairanking.cn/rankings/bcur/2026

## Status vocabulary

- PENDING_SCAN — not yet systematically scanned
- WEAK_SIGNAL — thermal work exists but current public evidence is not yet a strong mobile/electronics comparator
- CANDIDATE_FOUND — relevant lab/person/project found; evidence qualification still needed
- EVIDENCE_QUALIFIED — sufficiently strong primary/public evidence exists for comparator use
- CANONICAL_ONBOARDED — Actor/Capability object has been added to the V2.1 graph

## Coverage ledger

| Rank | University | Status | Current signal / reason | Next action |
|---:|---|---|---|---|
| 1 | Tsinghua University | WEAK_SIGNAL | Search surfaced thermal-management work, but first pass did not yet identify a sufficiently direct current smartphone/electronics two-phase anchor. | Deeper school/lab scan before closeout. |
| 2 | Peking University | CANDIDATE_FOUND | Current work includes microchannel + thermoelectric hybrid hotspot cooling and all-diamond microchannel cooling for ultra-high-heat-flux electronics. | Qualify key lab/person and mobile-transfer boundary. |
| 3 | Zhejiang University | CANDIDATE_FOUND | Zan Wu: chip cooling, device/package thermal management, phase-change heat transfer, microchannels; current official lab/recruitment evidence. | Qualify Actor/Capability. |
| 4 | Shanghai Jiao Tong University | CANONICAL_ONBOARDED | Micro/nano phase change, dielectric-fluid ultra-thin composite wick, dryout-mitigation microchannels, chip thermal management. | Continue evidence enrichment only. |
| 5 | Fudan University | PENDING_SCAN | — | Full scan. |
| 6 | Nanjing University | PENDING_SCAN | — | Full scan. |
| 7 | University of Science and Technology of China | CANDIDATE_FOUND | Bin Xu: electronics thermal management, vacuum-chamber heat spreader, microchannel evaporation/condensation phase change. | Qualify Actor/Capability. |
| 8 | Wuhan University | PENDING_SCAN | — | Full scan. |
| 9 | Huazhong University of Science and Technology | CANDIDATE_FOUND | Ronggui Yang / X-thermal: chip thermal transport, phase-change thermal management, thin-film boiling and ultra-thin vapor-spreader devices; direct Huawei technical exchange. | Qualify key Actor/Capability and phone relevance. |
| 10 | Xi'an Jiaotong University | CANDIDATE_FOUND | Siyu Qin: ultra-thin vapor chamber two-phase transport/wettability; Xiaoping Yang: 0.6 mm flexible LHP for AR/VR/laptop/foldable phones plus chip microchannels. | High-priority qualification and onboarding. |
| 11 | Beihang University | PENDING_SCAN | First search surfaced thermal-management activity in affiliated Ningbo institute, but main-university evidence is not yet sufficiently qualified. | Deeper main-campus scan. |
| 12 | Harbin Institute of Technology | CANDIDATE_FOUND | Ultra-high-heat-flux electronic cooling research and miniaturized thermoelectric cooler demonstrated on a processor. | Qualify relevant group/person. |
| 13 | Sun Yat-sen University | PENDING_SCAN | — | Full scan. |
| 14 | Beijing Institute of Technology | PENDING_SCAN | — | Full scan. |
| 15 | Southeast University | CANDIDATE_FOUND | Wenming Li: micro-scale flow/heat transfer, high-heat-flux electronics cooling, microchannel flow boiling and advanced two-phase cooling. | Qualify Actor/Capability. |
| 16 | Sichuan University | PENDING_SCAN | — | Full scan. |
| 17 | Renmin University of China | PENDING_SCAN | Low prior probability for this technical slice but still mandatory under Top-20 coverage rule. | Bounded scan, record negative if no signal. |
| 18 | Tongji University | PENDING_SCAN | — | Full scan. |
| 19 | Beijing Normal University | PENDING_SCAN | Low prior probability for this technical slice but still mandatory under Top-20 coverage rule. | Bounded scan, record negative if no signal. |
| 20 | Tianjin University | CANDIDATE_FOUND | Current official pages list chip thermal-management direction and an industry-linked chip thermal-management team. | Qualify person/team and technical evidence. |

## Non-Top-20 high-relevance exception

| University | Status | Reason |
|---|---|---|
| South China University of Technology | CANONICAL_ONBOARDED | Strong capillary thin-film boiling / wick / VC comparator evidence. |

## First-pass evidence anchors

- Peking University institutional repository: high-heat-flux hotspot thermoelectric + embedded microchannel cooling.
- Peking University official news: all-diamond substrate + manifold microchannel cooling for ultra-high-heat-flux electronics.
- Zhejiang University official profile for Zan Wu: chip cooling; power-electronics/device thermal management; phase-change and microchannel focus.
- USTC official profile for Bin Xu: electronics thermal management; vapor-chamber heat spreader; microchannel evaporation/condensation.
- HUST X-thermal official page: chip thermal transport, phase-change thermal management, ultra-thin vapor-spreader devices, Huawei exchange.
- XJTU official profiles for Siyu Qin and Xiaoping Yang: ultra-thin VC, flexible LHP, two-phase transport and high-heat-flux chip cooling.
- Southeast University official profile for Wenming Li: microchannel flow boiling and high-heat-flux electronics cooling.
- HIT official pages: high-heat-flux electronics cooling and miniaturized thermoelectric cooling.
- Tianjin University official pages: chip thermal-management faculty/team.

## Completion rule

China Top-20 coverage is not complete until every row is no longer PENDING_SCAN and every positive signal has either:
1. been onboarded to canonical Actor/Capability objects; or
2. been explicitly rejected with a documented boundary/reason.
