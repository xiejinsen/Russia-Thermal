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
| 2 | Peking University | CANONICAL_ONBOARDED | Bai Song team: near-junction embedded microfluidic cooling for extreme high-heat-flux chips; active future-chip thermal program. | Continue evidence enrichment; keep smartphone transfer boundary explicit. |
| 3 | Zhejiang University | CANONICAL_ONBOARDED | Zan Wu: chip cooling, device/package thermal management, multiphase/phase-change heat transfer and microchannels. | Continue evidence enrichment only. |
| 4 | Shanghai Jiao Tong University | CANONICAL_ONBOARDED | Micro/nano phase change, dielectric-fluid ultra-thin composite wick, dryout-mitigation microchannels, chip thermal management. | Continue evidence enrichment only. |
| 5 | Fudan University | PENDING_SCAN | — | Full scan. |
| 6 | Nanjing University | CANDIDATE_FOUND | Current official research highlights thin-film electrocaloric cooling explicitly framed for chip thermal management. | Qualify team/device relevance and mobile-transfer boundary. |
| 7 | University of Science and Technology of China | CANONICAL_ONBOARDED | Bin Xu: electronics thermal management, vapor-chamber heat spreading, microchannel evaporation/condensation and thermal interfaces. | Continue evidence enrichment only. |
| 8 | Wuhan University | PENDING_SCAN | — | Full scan. |
| 9 | Huazhong University of Science and Technology | CANDIDATE_FOUND | Ronggui Yang / X-thermal: chip thermal transport, phase-change thermal management, thin-film boiling and ultra-thin vapor-spreader devices; direct Huawei technical exchange. | Qualify key Actor/Capability and phone relevance. |
| 10 | Xi'an Jiaotong University | CANONICAL_ONBOARDED | Siyu Qin: ultra-thin vapor chamber two-phase transport/wettability; Xiaoping Yang: 0.6 mm flexible LHP for AR/VR/laptop/foldable phones plus chip microchannels. | Continue evidence enrichment only. |
| 11 | Beihang University | CANDIDATE_FOUND | Main-campus faculty evidence includes micro/nanoscale heat transfer and advanced-process chip interconnect thermal resistance; also solid-state thermal-control work aimed at special chips. | Qualify strongest group and direct mobile relevance. |
| 12 | Harbin Institute of Technology | CANDIDATE_FOUND | Ultra-high-heat-flux electronic cooling research and miniaturized thermoelectric cooler demonstrated on a processor. | Qualify relevant group/person. |
| 13 | Sun Yat-sen University | CANDIDATE_FOUND | University research evidence shows pool-boiling / phase-change work explicitly motivated by electronic-chip high-heat-flux thermal management. | Identify current lead group/person and recent continuity. |
| 14 | Beijing Institute of Technology | PENDING_SCAN | — | Full scan. |
| 15 | Southeast University | CANONICAL_ONBOARDED | Wenming Li: high-heat-flux electronics cooling, microchannel flow boiling and active advanced two-phase cooling/GPU work. | Continue evidence enrichment only. |
| 16 | Sichuan University | WEAK_SIGNAL | Microchannel heat-sink work for electronic equipment exists, but first pass surfaced older evidence rather than a clearly current mobile-thermal program. | Deeper recent lab/person scan before closeout. |
| 17 | Renmin University of China | SCANNED_NO_STRONG_SIGNAL | Bounded first-pass search found no strong engineering thermal-management group relevant to this slice. | Reopen only if later cross-source evidence appears. |
| 18 | Tongji University | CANDIDATE_FOUND | Current phononics work targets thermal transport and device-level heat dissipation in high-power GaN micro/nano devices. | Qualify whether it affects phone-scale package/device decisions. |
| 19 | Beijing Normal University | WEAK_SIGNAL | Current smart thermal-management materials work explicitly includes integrated-circuit/electronic-device use, but evidence is materials-oriented rather than a device cooling stack. | Keep as materials-side comparator unless stronger device evidence appears. |
| 20 | Tianjin University | CANONICAL_ONBOARDED | Deyin Zheng and current university/industry programs establish microsystem, advanced-packaging and chip thermal-management capability. | Continue evidence enrichment; two-phase/mobile device line still unproven. |

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
- XJTU official profiles for Siyu Qin and Xiaoping Yang: ultra-thin VC, flexible LHP, two-phase transport and high-heat-flux chip cooling. Canonical onboarding complete.
- Southeast University official profile for Wenming Li: microchannel flow boiling and high-heat-flux electronics cooling.
- HIT official pages: high-heat-flux electronics cooling and miniaturized thermoelectric cooling.
- Tianjin University official pages: chip thermal-management faculty/team.
- Nanjing University official research news: electrocaloric thin-film cooling framed for chip thermal management.
- Beihang official faculty/news: chip interconnect thermal resistance and advanced solid-state chip thermal control.
- Sun Yat-sen University research page: pool-boiling heat transfer explicitly motivated by chip high-heat-flux cooling.
- Tongji University phononics center: current GaN micro/nano-device thermal transport and heat dissipation.
- Beijing Normal University faculty page: smart thermal-management materials for integrated circuits/electronic devices.

## Completion rule

China Top-20 coverage is not complete until every row is no longer PENDING_SCAN and every positive signal has either:
1. been onboarded to canonical Actor/Capability objects; or
2. been explicitly rejected with a documented boundary/reason.
