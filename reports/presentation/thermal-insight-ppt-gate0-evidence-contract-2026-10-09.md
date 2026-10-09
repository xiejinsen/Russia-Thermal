# Russia-Thermal 汇报 PPT｜Gate 0 证据—决策契约

日期：2026-10-09
状态：EVIDENCE_LOCK_PROPOSED / 待逐页设计
依据：technical-insight-presentation v0.1.1；最终 WP4 研究报告；WP3 十问结题矩阵；Phase1 决策简报
汇报对象：具有技术背景的管理层
范围：智能手机优先、平板次要；公开科研资料；不对外联系，不声称设备级实测
优先级权威：`07-decisions/` 与 `reports/leadership-decision-brief.md`；本文件不改投资决策

## 决策目标锁定

领导最终需要决定的不是「俄罗斯是否总体领先」，而是：
1. 是否允许按公司流程启动 **P1 Kutateladze Lab1.3 数据/机理合作的有边界可行性评估**（不是批准研发项目或外部接洽）？
2. 是否认可 **MPEI 只有取得中间时序数据才重启评估**，TPU 暂缓，其他团队保持低成本方法观察？
3. 哪些可测量证据出现之前，不能升级预算、PoC 或产品路线？

## Claim-to-evidence ledger

| 证据键 | 适合投影的完整判断 | 类型 | 原始来源／引用 | 装置／条件与可引用事实 | 最强替代解释／反例 | 证明边界 | 拟用页 |
|---|---|---|---|---|---|---|---|
| E01 | 俄罗斯存在较广的相关科研布局，但不等于已覆盖全俄或具备手机产品能力 | 研究整理 OBSERVATION | [WP3 十问矩阵](../../analysis/audits/research-closeout-wp3-q01-q10-final-matrix-2026-10-09.md)，[机构比较](../russia-academic-partner-comparison-2026-10-09.md) | 已恢复数据中 28 个能力所属根机构、25 个重点学术机构画像；分母为仓库研究样本 | 可能遗漏样本外机构，人员和实验条件参差 | 不是全俄总量、排名或覆盖率；计数随版本改变 | 04 |
| E02 | 中方在超薄两相器件与 Dryout 工程缓解已有强公开证据 | 跨来源 OBSERVATION | [SJTU 实验论文](https://doi.org/10.11949/0438-1157.20230936)、[中国 BIT 官方能力主张](../../02-claims/CLM-CN-BIT-001.md) | 上海交大去离子水反向短流程微通道，和同论文平行流对比，报告 CHF/HTC 等变化 | 与封闭手机 VC 不是相同装置；BIT 机构科研能力不等于量产 | 不跨装置比较百分比，不称中国所有方向全面领先 | 03,06 |
| E03 | Kutateladze 的介电沸腾观测捕捉到了失效前的干斑时空变化 | 原始 FACT | Surtaev 等，*IJHMT*（2026），[DOI](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855)、[Source](../../01-evidence/papers/PAPER-RU-DRY-001/README.md)、[Claim](../../02-claims/CLM-PAV-002.md) | HFE-7100 / Novec 649，光学/红外测量、ML 辅助分割，干斑统计与不可逆危机相连 | 通用光学标签已有他人研究；工况局限于实验台 | 不是已验证手机封闭 UTVC；不能说预测性能提升 | 05,07 |
| E04 | 全球已具备瞬态 Dryout/Rewet 模型和内部温压观测方法 | 原始 FACT + 对照 OBSERVATION | [瞬态饱和度模型](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126837)、[内部温压观测](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127222) | 商业热管瞬态模型、screen-wick 热管脉冲加热与内部测量 | 未证明稀疏手机遥测能在线恢复内部状态 | Kut 的「额外机理标签价值」仍需证实，不能称观察方法独有 | 06,07 |
| E05 | Kutateladze 的潜在合作产品应是机理分类数据与模型否证基准 | INFERENCE / HYPOTHESIS | E03、E04；[OPP-01](../collaboration-opportunities/OPP-01-KUTATELADZE-FAILURE-GROUND-TRUTH.md) | 候选交付物：时间对齐 IR/光学历史、事件标签、独立重复试验、held-out 比较 | 内部或中国现有方法可能同样满足需求 | 数据是否存在、授权、稳定性与增益均未知 | 02,07,13–15 |
| E06 | MPEI 报告 42 个日历月的周期运行和运行后毛细变化 | 原始 FACT | Ivanov, *PES*（2026），[DOI](https://doi.org/10.1016/j.pes.2026.100314)、[Source](../../01-evidence/papers/PAPER-RU-AGE-001/README.md) | R410A thermosyphon，微槽+Al2O3，整体热表现相对稳定，运行后吸液能力下降 | 终点比较不等于时间序列；服役不是满负荷连续 42 个月 | 非手机铜水 VC；未证明退化早期在线预警 | 08,09 |
| E07 | 中国铜水 VC 的氧化失效与寿命预测研究更贴近目标产品问题 | 原始 FACT + 对照 OBSERVATION | [氧化失效](https://doi.org/10.1016/j.applthermaleng.2025.125619)、[氧含量与预测寿命](https://doi.org/10.1016/j.applthermaleng.2026.131067) | 中国铜水 VC 氧/润湿性机理、加速测试和模型推算寿命；模型 R²=0.98、约 8% 预测误差来自单篇原研究 | 预测寿命不等于真实 13 年日历运行；技术未必已产品集成 | 不把论文拟合指标写成手机产品准确率 | 03,09 |
| E08 | MPEI 仅在有中间老化状态史或未覆盖退化机理时值得重评 | INFERENCE / HYPOTHESIS | E06–E07；[CLM-MPEI-008](../../02-claims/CLM-MPEI-008.md) (OPEN)；[OPP-02](../collaboration-opportunities/OPP-02-MPEI-LONG-DURATION-RELIABILITY.md) | 需要中间温度、润湿、毛细、表面化学数据以及重复性 | 现有中国化学/质量控制模型足以解释变化 | 不把「可能早预警」写成已观测到的结果 | 09,13,14 |
| E09 | TPU 有可核查的表面润湿性/液滴热实验，但还不是封闭手机 VC 优势 | 原始 FACT + 审慎推论 | Feoktistov 等，*IJHMT* 260 (2026) 128413，[DOI](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)，[专项核对](../../analysis/academic-team-mapping/tpu-frumkin-2026-original-paper-identity-gate.md) | 开放加热表面液滴、局部温度变化、粗糙度/润湿性；与另篇 *Surfaces and Interfaces* 92:109390 区分 | 手机封闭 VC 有别的工质/工况/寿命与制造限制 | 新闻中的倍数不是整机散热提升；逐人机构未全部确认 | 10 |
| E10 | ITP Ural/TSU/ICM 提供方法储备，不应视为与 P1 同成熟度 | OBSERVATION / INFERENCE | [机构比较](../russia-academic-partner-comparison-2026-10-09.md)、[Q09 方法包](../collaboration-opportunities/academic-q09-feasibility-portfolio-2026-10-09.md) | LHP 运行边界、PCM 瞬态数值模型、ICM T 型热管实验与热路径 | 其他国家和中国也有类似方法，且应用尺寸不同 | NSU EITP PI 未知；Denis/Dmitry Nesterov 不合并 | 04,10,12 |
| E11 | 2027–2029 值得保留四个带证据触发条件的研究问题 | INFERENCE | [Q07 原始来源综合](../../analysis/trends/q07-phone-thermal-2027-2029-evidence-synthesis-2026-10-09.md) | 干斑机理、隐藏可靠性状态、PCM burst/reset、超薄毛细回流极限 | 方向重要不代表俄方必能提供优势 | 是研究监测框架，不是 2029 产品承诺 | 11 |
| E12 | 投资组合应为 P1 可行性、P2 储备、TPU HOLD，其余 WATCH，拒绝泛化领先命题 | 正式 DECISION + 归纳 | [Phase1 决策简报](../leadership-decision-brief.md)、[最终研究报告](../final-research-insight-and-collaboration-decision-2026-10-09.md) | 公开证据条件性决策；Q01–Q10 接受限制 | 合作授权、真实样品、内部 baseline、数据权属未得到确认 | 不等于已经批准对外接洽、PoC、预算或合作协议 | 02,13–15 |

## 图表与精确数字纪律

- 可展示 **42 日历月**，但必须标注「周期运行、运行后观察」；不能写成连续满载或早期预警。
- 可展示 **28 个已恢复根机构／25 个重点学术机构**，必须说明「仓库有边界样本」，不能写成全俄覆盖率。
- SJTU 微通道实验及中国寿命研究若引用性能百分比，需在备注记录原文 Fig/Table、装置、基线和单位后才上主投影；建议正文主要用机制对照，避免不能直接比较的数字。
- 2026 TPU 液滴冷却倍数只可标注为**局部温降指标，特定实验条件**，不能换算为手机热阻下降。
- 每页若使用原始论文 Figure，先确认原图编号、轴名、尺寸、工质、图注及使用权限；尚未确认具体 Figure，所以 **不预先指定虚构图号或粘贴论文图片**。

## 强制限制与审核点

不得将 V.I. 与 V.E. Zhukov、Denis 与 Dmitry Nesterov 合并；不得让 NSU LabPET 的 Naumov 充任 EITP 负责人；不得把韩国 KAIST 的独立反例叫作中国论文。不得将国内/内部能力、真实成本、IP/数据授权写成已知。所有比较必须说明不同实验平台不能直接横比。每项决策性断言必须能反向找到原始来源，不足时改窄表述而不是补造数字。

## Gate 0 判断

**可进入 Gate 1 叙事锁定**：上述事实、推断和限制已分层，P1/P2/TPU 优先级与 Phase1 一致。**Gate 3 图像引用仍待核验**：具体原始论文图片及版权、页码/图号必须在逐页设计或资产阶段查证。
