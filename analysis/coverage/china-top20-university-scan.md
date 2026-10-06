# China Top-20 University Thermal-Management Coverage Scan

status: TOP20_SCAN_COMPLETE
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
| 1 | Tsinghua University | CANONICAL_ONBOARDED | Bo Sun: semiconductor thermal transport, integrated-circuit cooling and embedded two-phase microchannel cooling; additional ultra-thin VC work exists in the university. | Continue evidence enrichment; keep phone-product boundary explicit. |
| 2 | Peking University | CANONICAL_ONBOARDED | Bai Song team: near-junction embedded microfluidic cooling for extreme high-heat-flux chips; active future-chip thermal program. | Continue evidence enrichment; keep smartphone transfer boundary explicit. |
| 3 | Zhejiang University | CANONICAL_ONBOARDED | Zan Wu: chip cooling, device/package thermal management, multiphase/phase-change heat transfer and microchannels. | Continue evidence enrichment only. |
| 4 | Shanghai Jiao Tong University | CANONICAL_ONBOARDED | Micro/nano phase change, dielectric-fluid ultra-thin composite wick, dryout-mitigation microchannels, chip thermal management. | Continue evidence enrichment only. |
| 5 | Fudan University | EVIDENCE_QUALIFIED | Microsystem Packaging Group: high-power-density package thermal management, microchannel thermal management/design/manufacturing; 2026 wafer-level embedded microfluidic cooling evidence. | Identify and bind current responsible PI before canonical onboarding. |
| 6 | Nanjing University | CANONICAL_ONBOARDED | Qundong Shen team: electrocaloric chip-cooling prototype and continued 2025 self-driven/low-field progress for localized active cooling. | Continue evidence enrichment only. |
| 7 | University of Science and Technology of China | CANONICAL_ONBOARDED | Bin Xu: electronics thermal management, vapor-chamber heat spreading, microchannel evaporation/condensation and thermal interfaces. | Continue evidence enrichment only. |
| 8 | Wuhan University | CANONICAL_ONBOARDED | Chao Yuan: thermoreflectance, semiconductor thermal transport, junction-temperature measurement and chip-level thermal management. | Continue evidence enrichment only. |
| 9 | Huazhong University of Science and Technology | CANONICAL_ONBOARDED | Xiaobing Luo team: phase-change/liquid cooling, microchannel/jet chip cooling and formal technology transfer; historical X-thermal evidence remains useful but current personnel affiliation is handled separately. | Continue evidence enrichment only. |
| 10 | Xi'an Jiaotong University | CANONICAL_ONBOARDED | Siyu Qin: ultra-thin vapor chamber two-phase transport/wettability; Xiaoping Yang: 0.6 mm flexible LHP for AR/VR/laptop/foldable phones plus chip microchannels. | Continue evidence enrichment only. |
| 11 | Beihang University | CANONICAL_ONBOARDED | Tianzhuo Zhan: micro/nanoscale heat transfer, chip thermal management, advanced packaging and thermoelectric devices. | Continue evidence enrichment only. |
| 12 | Harbin Institute of Technology | CANONICAL_ONBOARDED | Jun Mao / Qian Zhang team: miniature thermoelectric cooler demonstrated on a processor for localized electronic thermal management. | Continue evidence enrichment; quantify system-level power/thickness boundary later. |
| 13 | Sun Yat-sen University | CANONICAL_ONBOARDED | Linlin Cai: advanced-integration thermal management and interconnect reliability; current microelectronics faculty anchor. | Continue evidence enrichment; two-phase device line remains unproven. |
| 14 | Beijing Institute of Technology | EVIDENCE_QUALIFIED | Thermal Engineering Institute shows ultra-thin high-performance VC heat pipes, microchannel flow boiling, thin-film heat transfer and porous-capillary transport. | Bind current responsible PI/group before canonical onboarding. |
| 15 | Southeast University | CANONICAL_ONBOARDED | Wenming Li: high-heat-flux electronics cooling, microchannel flow boiling and active advanced two-phase cooling/GPU work. | Continue evidence enrichment only. |
| 16 | Sichuan University | SCANNED_NO_STRONG_SIGNAL | Direct microchannel heat-sink evidence exists but first/second pass did not establish a clearly current, continuous mobile/electronics thermal-management program strong enough for canonical onboarding. | Reopen only if newer primary evidence appears. |
| 17 | Renmin University of China | SCANNED_NO_STRONG_SIGNAL | Bounded first-pass search found no strong engineering thermal-management group relevant to this slice. | Reopen only if later cross-source evidence appears. |
| 18 | Tongji University | CANONICAL_ONBOARDED | Jiameng Tian: high-heat-flux chip spray/flash cooling, thin-film boiling and boiling-crisis suppression; current 2026 Tongji appointment. | Continue evidence enrichment; phone-scale transfer remains bounded. |
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

China Top-20 baseline scan is complete because every row is now explicitly classified. Positive-signal follow-up is complete only when each EVIDENCE_QUALIFIED row has either:
1. been onboarded to canonical Actor/Capability objects; or
2. been explicitly rejected with a documented boundary/reason.
