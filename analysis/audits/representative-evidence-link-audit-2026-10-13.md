# 代表论文—正式证据图谱关联复核（2026-10-13）

status: TRACEABILITY_REPAIR / NOT_A_NEW_SCIENTIFIC_DECISION
authority: DERIVED_AUDIT / ORIGINAL_SOURCE_CLAIM_CAPABILITY_DECISION_PREVAIL
scope: 6 team representative-work TSVs / 27 selected entries
publication_count_policy: Representative selection is not the institution's complete paper corpus or a bibliometric claim.

## 核查结论

研究结题的科研证据体系与后期建设的“机构代表论文”展示清单是**两个不同层次**：

1. 已存 **60 个 canonical PAPER Source**（按 `01-evidence/papers/*/README.md` 统计），另有官方来源、专利、Claim、Capability、Direction 与决策关联；这些才是 Q01–Q10 决策证据链的主要依据。
2. 下方 27 条代表作是人工整理的**研究线索与代表成果选目**，并非 27 项结题决定性实验。早期只直接绑定 3 个 Source ID，网页状态措辞造成“整个研究没有论文支持”的错误印象。
3. 本轮修复两项源数据关联：`TPU-02` → `PAPER-RU-TPU-002`（原来误标二手）；`ITP-01` → `PAPER-RU-LHP-001`（俄文原版与英文译本的两个 DOI，经出版方题名、作者及内容一致性核对）。**它们均属于已有科研记录，并非增加了两篇新论文，也不能重复计数。**

修复后 27 项：**CANONICAL 5 / ORIGINAL_REVIEWED 17 / SECONDARY_ONLY 2 / PENDING_IDENTITY 3**。本次没有凭 DOI 或代表作身份擅自把其余 22 项提升到正式 Claim 支撑。

### 原文与翻译 DOI 消歧

- ITP Ural/Chernysheva–Maydanik 俄文原版 `PAPER-RU-LHP-001`：DOI [10.56304/S0040363625701152](https://doi.org/10.56304/S0040363625701152)，[俄文原刊](https://sciencejournals.ru/view-article/?a=TepEn2570115Chernysheva&j=tepen&n=12&v=0&y=2025)。
- 英文译本 `ITP-01`：DOI [10.1134/S0040601525700661](https://doi.org/10.1134/S0040601525700661)，[Pleiades 期刊原刊](https://www.pleiades.online/cgi-perl/search.pl?name=thermeng&number=12&page=1108&type=abstract&year=25)。同一作者/同一研究，不能当作两个独立成果。
- TPU 激光疏水化 `TPU-02`：已存在 `PAPER-RU-TPU-002`，DOI [10.1016/j.surfin.2026.109390](https://doi.org/10.1016/j.surfin.2026.109390)；它与 `TPU-01` IJHMT 260:128413 **是不同论文**。

## Q01–Q10 结论证据在哪儿？

| 结题问题 | 关键追溯入口 | 现在支持的边界 |
| --- | --- | --- |
| Q01–Q02 机构与学者 | `03-actors` / 机构研究档案 / 官方资料 / [Q02 身份例外处置](research-closeout-wp3-q02-q04-exception-disposition-2026-10-09.md) | 代表论文的作者不自动等于现任机构成员 |
| Q03–Q04 研究能力/代表作 | [P1 PAPER-RU-DRY-001](../../01-evidence/papers/PAPER-RU-DRY-001/README.md)、[P2 PAPER-RU-AGE-001](../../01-evidence/papers/PAPER-RU-AGE-001/README.md)、其它 60 个 Source / 已核验代表文献 | 代表性而非所有论文；尚未入图文献不自动支持科学 Claim |
| Q05 中俄及全球对照 | [WP2 对照原文审计](research-closeout-wp2-china-global-counterfactual-2026-10-09.md) | 不能跨不同装置/工质直接排名 |
| Q06–Q08 手机迁移和增量 | `04-capabilities`、`05-directions`、中国及全球原始对照 | 未有同等手机器件级优越性证明 |
| Q09–Q10 合作方向及判定 | [完整研究报告](../../reports/final-research-insight-and-collaboration-decision-2026-10-09.md) / `07-decisions` | 未获得对外接洽、数据授权或工程试验许可 |

### 决策级证据实例

**P1 Kutateladze：** `PAPER-RU-DRY-001` → `CLM-PAV-002` (SUPPORTED, HIGH, 仅该实验) → `CAP-KUT-L13-DRYOUT-DIAGNOSTICS` → `DIR-FAILURE-AWARE-UTVC` → 阶段性可行性研究建议。不能推断手机密闭 UTVC 已测试或已具量产性能。

**P2 MPEI：** `PAPER-RU-AGE-001` → `CLM-MPEI-008` (OPEN, MEDIUM, 早期指示为分析假说) → 长日历时间数据的条件储备。42 个月终点观察不能证明连续趋势预警。

**TPU：** 相关正式 `PAPER-RU-TPU-001..004` 与中国 `PAPER-CN-UTVC-WP-001` 等对照使泛化表面工艺创新主张保持 HOLD；`TPU-01` 2026 IJHMT 新选目与已归档 2024 Source 并非同篇，尚需正式图谱关联及方法条件审查才能用于强化新 Claim。

核心证据深读的 `Tier-A` 闭环已在 [阅读深度审计](../../00-project/paper-reading-depth-closure-audit.md) 记录；不能把该决定级闭环理解为所有 27 篇代表文献均达到相同阅读深度。

## 逐篇交叉表

| 选目 ID | 论文 / 工作 | 审查状态 | 正式 Source | 原始入口 | 选目优先级 |
| --- | --- | --- | --- | --- | --- |
| KUT-01 | A map of regimes of evaporation and boiling in horizontal liquid layers on a modified surface | 论文版本/作者归属待核验 | — | [来源](https://doi.org/10.1088/1742-6596/2039/1/012033) | CONTEXT |
| KUT-02 | Crisis phenomena and heat-transfer enhancement during boiling and evaporation in horizontal liquid films | 论文版本/作者归属待核验 | — | [来源](https://doi.org/10.1134/S0040601522110076) | CONTEXT |
| KUT-03 | Inversion of the Boiling Curve on Microstructured Porous Coatings | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.31857/S0040364423020163) | SUPPORTING |
| KUT-04 | Effect of shape and thermal conductivity of microstructured capillary-porous coatings on heat transfer during evaporation and boiling in thin horizontal liquid layers | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.ijheatmasstransfer.2024.125937) | SUPPORTING |
| KUT-05 | Heat transfer peculiarities and crisis phenomena development in spray cooling using various types of nozzles | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.icheatmasstransfer.2024.108145) | CONTEXT |
| KUT-06 | Heat transfer enhancement during boiling in horizontal layers of HFE-7100 on 2D modulated capillary-porous coatings | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.applthermaleng.2024.125344) | SUPPORTING |
| KUT-07 | Nucleate boiling heat transfer of dielectric liquid HFE-7100 in horizontal layers at various pressures | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1134/S004060152470068X) | SUPPORTING |
| KUT-08 | Measurement of Dry Spot Features during Boiling Using Neural Network Processing of High-Speed Visualization | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1134/S004060152570017X) | DECISIVE |
| KUT-09 | Enhanced Boiling and Evaporation of Dielectric Fluids on Modified Surfaces for Immersion Cooling of Electronic Components — a Review | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.applthermaleng.2025.127088) | CONTEXT |
| KUT-10 | Investigation of heat transfer, critical heat flux and dry spots dynamics during boiling of dielectric fluids HFE-7100 and Novec 649 | 正式 Source 已绑定 | [PAPER-RU-DRY-001](../../01-evidence/papers/PAPER-RU-DRY-001/README.md) | [来源](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855) | DECISIVE |
| MPEI-01 | Studying the wetting of a surface with combined structure | 二手材料/原文尚需核验 | — | [来源](https://doi.org/10.1134/S0869864321060093) | CONTEXT |
| MPEI-02 | Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.56304/S0040363625701103) | SUPPORTING |
| MPEI-03 | Investigation of the thermal resistance of a thermosiphon with improved coolant circulation and a microporous coating in an evaporator | 论文版本/作者归属待核验 | — | [来源](https://tptmai.ru/eng/publications.php?ID=187722&mobile=Y) | SUPPORTING |
| MPEI-04 | Long-term operational stability of a hierarchical evaporator surface in a two-phase thermosyphon | 正式 Source 已绑定 | [PAPER-RU-AGE-001](../../01-evidence/papers/PAPER-RU-AGE-001/README.md) | [来源](https://doi.org/10.1016/j.pes.2026.100314) | DECISIVE |
| ITP-01 | An Analysis of the Key Serviceability and Efficiency Conditions of Loop Heat Pipes | 正式 Source 已绑定 | [PAPER-RU-LHP-001](../../01-evidence/papers/PAPER-RU-LHP-001/README.md) | [来源](https://doi.org/10.1134/S0040601525700661) | DECISIVE |
| ITP-02 | Experimental study of a loop heat pipe with a copper capillary structure and ammonia as a working fluid | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://tptmai.ru/eng/publications.php?ID=186014&mobile=Y) | SUPPORTING |
| ITP-03 | Development and Results of Testing of a Long Loop Heat Pipe with Flexible Elements | 二手材料/原文尚需核验 | — | [来源](https://doi.org/10.1134/S0018151X24700044) | CONTEXT |
| TPU-01 | Heat-transfer enhancement and evaporation mechanisms on roughness-controlled wettability-contrast surfaces | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413) | DECISIVE |
| TPU-02 | Hydrophobization of metal surfaces by laser treatment and subsequent heat treatment of hydrocarbon liquids | 正式 Source 已绑定 | [PAPER-RU-TPU-002](../../01-evidence/papers/PAPER-RU-TPU-002/README.md) | [来源](https://doi.org/10.1016/j.surfin.2026.109390) | CONTEXT |
| TSU-01 | Influence of PCM heat sink shape on cooling of heat-generating elements in electronics | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.applthermaleng.2022.118695) | DECISIVE |
| TSU-02 | Numerical simulation of heat transfer performance in an enclosure filled with a metal foam and nano-enhanced phase change material | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.energy.2024.131123) | SUPPORTING |
| TSU-03 | Three-dimensional heat transport and fluid flow in a channel with heat-generating source and heat removal ribs | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.icheatmasstransfer.2024.108552) | SUPPORTING |
| ICM-01 | Experimental investigations of flat T-shaped copper and titanium heat pipes | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.applthermaleng.2021.117454) | DECISIVE |
| ICM-02 | Cooling of electronic components on the LTCC module with an embedded flat heat pipe | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1088/1757-899X/1139/1/012002) | SUPPORTING |
| ICM-03 | Heat Pipe System as a Component of Spacecraft Electronics | 正式 Source 已绑定 | [PAPER-RU-ICM-ELECTRONICS-001](../../01-evidence/papers/PAPER-RU-ICM-ELECTRONICS-001/README.md) | [来源](https://doi.org/10.17516/1999-494X-0317) | CONTEXT |
| ICM-04 | Mathematical modeling of concentration influence on evaporative convection in a bilayer system of binary mixtures | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.ijheatfluidflow.2024.109385) | DECISIVE |
| ICM-05 | Impact of the interface heat defect on the thermocapillary response of the phase boundary in a liquid-gas system upon local heating from below | 原始出处/身份已核对；尚无独立 Source ID | — | [来源](https://doi.org/10.1016/j.ijmultiphaseflow.2025.105260) | SUPPORTING |

## 待处理清单（不影响现有有界结论，但限制新推断）

1. **最优先核查：** 具有 `DECISIVE` 代表作角色但仍标为 `ORIGINAL_REVIEWED` 的 KUT-08、TPU-01、TSU-01、ICM-01、ICM-04。若要在网页或领导报告中使用这些论文独立支撑新结论，先逐条建立正式 Source → Claim，并核查摘要、方法、作者归属及适用平台。
2. **其次审查：** 其余 12 条 `ORIGINAL_REVIEWED` 的补充成果谱系与当前图谱可能重叠的科学工作；不能仅按篇名、年份或 DOI 来判断是新的独立机制。
3. **保留为未充分核实的线索：** `SECONDARY_ONLY` 2 条、`PENDING_IDENTITY` 3 条，不能用于计算正式发文量或支撑新的结论。
4. **自动化防回归：** 代表作导出脚本严格验证 `work_ref` 和 Source DOI，英文译本例外仅允许已核验的一对，不允许泛化 DOI 错配。
5. **未来实证：** 对合作意愿、原始数据授权和手机级迁移的限制仍应由未来获批活动验证，不能通过多添加文献来“补全”。

## 结题口径

Q01–Q10 是 **公开科研证据范围内的有边界接受**：3 项接受、7 项附限制接受。它不是论文库覆盖百分百、所有作者身份均已核实或手机工程优势已证明。本审计发现的是“补充代表作与正式证据图谱同步不足”，不能误读为既有关键 Source/Claim 链全部不存在，也不能忽略新补充论文未来需要纳入图谱的追溯欠账。
