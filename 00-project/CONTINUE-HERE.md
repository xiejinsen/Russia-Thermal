# 最新接续状态（2026-10-23：第十五轮）

- 当前专项：中俄热管理相关数学物理方法对照；优先窗口 2021—2026。不要重开 Q01–Q10、机构普查或已经完成的早期机构地图。
- 最新记录：[第十五轮公式级方法审计与中俄同题对照](../analysis/russia-china-math-physics-round15-formula-audit-and-matched-comparison-2026-10-23.md)。
- RU24 Prokudina 2024：原刊摘要确认蒸发液膜自由表面四阶非线性 PDE、热毛细/表面张力/蒸发项及差分计算；完整方程和数值验证尚未逐式审计。
- **去重修正：** Prokudina 2014 论文已明确包含自由表面四阶非线性 PDE、有限差分与 Marangoni 扰动演化。不得将 RU24 中相同的一般性描述自动视作首次方法创新。RU24 具体新增物理项与预测仍待 2014/2024 正文差分。
- RU25 Prokudina 2025：摘要确认窄带波包包络非线性抛物方程，系数依赖增长率、频率及其导数；全文推导、渐近假设及与 RU24 的关系仍 OPEN。
- 中国强对照：Jiang et al. 2024 原文方法章节包含控制方程/相变界面条件、长波渐近展开、非线性演化方程、normal-mode 线性稳定性及 Fourier 谱方法；Zhao/Hu 2022、Wang/Hu Bingham 液层、Su et al. 2026 Floquet 稳定性是相邻理论反例，不应全部当成严格同题样本。
- 当前判断：俄罗斯部分研究线持续开展液膜非线性建模与失稳分析的结构性信号存在；国家整体优于中国、同题原创性更强、手机 VC 直接性能增益均未证实。证据成熟度仍为 STRUCTURAL_SIGNAL；国家级比较 NOT_EVALUABLE。
- 下一步：逐项对照 Prokudina 2014/2024 方程、物理项、初边值条件、离散格式与结果；取得 RU25 全文并审计包络推导；继续检索中国近期蒸发/冷凝液膜同题研究。当前 P1/P2/HOLD 与建模 RESERVE 决策不变。
- 限制：本轮未完成 RU24/RU25 全文逐式审计，也未运行全仓库当前 SHA 的机械 QA；不得宣称这两项已通过。

---

# 最新接续状态（2026-10-23：第十四轮）

- 当前专项：中俄热管理相关数学物理方法对照；近期论文优先，主要样本窗口 2021—2026。不要重开 Q01–Q10、机构普查或 2008 年旧论文全文审计。
- 最新记录：[第十四轮近期液膜论文原文核验状态与中国强对照扩展](../analysis/russia-china-math-physics-round14-recent-film-papers-and-china-counterexamples-2026-10-23.md)。
- RU24 Prokudina (2024)：原刊与可检索 PDF 文本确认四阶非线性自由表面 PDE、差分离散及表面张力/热毛细/蒸发作用；完整公式、边界条件、收敛/验证仍未逐式核验。
- RU25 Prokudina (2025)：原刊摘要确认窄带波包包络非线性抛物方程，系数依赖增长率、频率及其导数；全文方程和渐近假设未逐式核验。两篇属于同一作者研究谱系，不可自动计为独立突破。
- 中国近期对照新增/重新确认：Zhao & Hu 2022 双自由面溶质—热毛细稳定性；Jiang et al. 2024 三维蒸发/冷凝液膜长波失稳；Zheng et al. 2025 液膜干斑三维模型与实验；中科院力学所 2026 热毛细蒸发实验。它们在数学任务和边界条件上并不全与俄方同题。
- 当前判断：俄罗斯部分研究线的液膜非线性建模与失稳分析呈现连续性；国家整体优于中国、预测精度更高、手机 VC 性能有直接增益，均未证实。原 P1/P2/HOLD 与建模 RESERVE 决策不变。
- 下一步：优先逐页审计 RU24/RU25 PDF 的方程、初边值条件、离散/包络推导和验证；随后针对 2021—2026 年中国“显式气相传输 + 双层蒸发 + 精确基态 + normal-mode 谱阈值”继续同题检索，并记录检索未命中边界。
- 注意：本轮 PDF 下载/逐式审计尚未完成，不得把原刊摘要或索引文本标成全文公式级证据。

---

# CONTINUE HERE — Russia-Thermal

# 最新研究接续：中俄数学物理研究范式对照（2026-10-22）

用户已批准一项范围受控的专项研究：检验俄罗斯部分热管理研究线是否在数学物理机理、精确解、稳定性边界及理论—实验连接方面具有相对中国的差异化积累。**不要把用户希望得到某种结论当成编码标准；必须同领域、同标准、明确证据等级并保留反例。**

## 本轮已经完成
- 审查 60 篇 canonical papers / 37 篇 deep reads 的覆盖状态，确认不能将所有深读论文都直接视为数学物理比较样本。
- 建立 PHYS / MATH / MECH / PRED / VALID / TRANS 多维编码规则与初始试编码。
- 对中国薄膜蒸发、热毛细流动和界面稳定性开展定向检索，识别多篇中国解析、渐近、线性/非模态稳定性和非线性薄膜研究。
- 创建首个同领域对照专题，明确俄罗斯精确解谱系的窄方法特色，以及中国理论研究的强反例。
- 未修改既有正式决策（P1/P2/HOLD），未授权外部接洽或数据获取。

## 当前工作文件
1. [专项审计工作底稿](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)
2. [首个同领域对照：薄膜蒸发、热毛细流动与界面稳定性](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)
3. [既有研究深读覆盖台账](paper-deep-read-coverage.md)
4. [基础建模保真度审计](../analysis/pilot-foundational-modeling-fidelity-review.md)

## 下一步必须继续
1. 对中国候选 CN-CAND-01 至 CN-CAND-07 逐篇补齐全文方法证据并按统一维度正式编码。
2. 对俄罗斯 2018、2023、2024 精确解/稳定性论文补齐同等深度的全文审阅；摘要级与全文级证据不能等权。
3. 优先匹配物理问题相近的论文，记录控制方程、边界条件、数学方法、预测内容、验证方式和手机迁移边界。
4. 检查作者谱系集中度、年份、研究主题与全文可得性偏差；避免把同一团队连续论文当作独立国家样本。
5. 再开展两相流/临界热流与干涸机理专题的配对对照。
6. 最终结论可为局部优势、研究类型分布差异但深度差异未证实，或差异主要来自样本偏差；不预设结果。

---

## 最新网页交接：真实浏览器验收完成（2026-10-13）

网站已完成 Chromium 真实浏览器的 14 类代表页面 × 桌面/平板/手机 = **42 视图**测试，并用中文字体截图人工检查主要首页、论文/证据页及手机中国地图。9 项论文/资料/Claim 筛选恢复测试通过；无页面横向溢出、图片损坏或 JS 异常。关键实验论文与中国/国际对照论文及专利现有不同视觉标识。[截图包与 CI](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38404072459) · [审计与优化记录](../analysis/audits/web-visual-browser-qa-2026-10-13.md)。

科研 **Q01–Q10 已结题**，P1/P2/TPU HOLD 保持原判断；后续只处理已发现的 UI 或可追溯性错误，不因为网站工作重开学术调研。浏览器 QA 不等于手机真机测试或全套无障碍认证。

## 当前接续状态（2026-10-13）：网页证据链已复核

本项目的决策目标仍是从公开原始资料判断俄罗斯热管理科研对智能手机是否具有相对中国／国际研究的可验证增量。Q01–Q10 研究结题为 **10/10（3 项接受、7 项附限制接受）**；P1 Kutateladze、P2 MPEI、TPU HOLD 的研究结论没有变更，任何外部接洽、实验或数据授权均未获批准。

**恢复项目首先阅读：** [权威状态](STATUS.md) → [2026-10-13 全站证据链语义审计](../analysis/audits/web-evidence-chain-audit-2026-10-13.md) → [27 篇代表论文与正式 Source 对照](../analysis/audits/representative-evidence-link-audit-2026-10-13.md) → [Q01–Q10 结题矩阵](../analysis/audits/research-closeout-wp3-q01-q10-final-matrix-2026-10-09.md)。

**本轮结果：** 155 Actor / 162 Source / 123 Claim / 52 Capability / 8 Direction / 28 Decision 已通过生产构建中的 ID 与关键语义检查；151 Source 被 Claim 直接引用、11 条仅作明确角色的背景资料。曾误写为 Anton V. Surtaev 的核心研究人员已依据官方俄文名册更正为 Anton S. Surtaev。网页不再利用姓氏自动推断论文作者；`OPEN` Claim 的支持引文不代表假说已证明。浏览器逐屏视觉验收、完整原文独立再审和真实设备测试仍未完成。

**已核验 CI：** [Web UI Check](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38398953372) 与 [GitHub Pages Deploy](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38398953469) 均通过。保留以下 2026-10-09 的交接说明作为历史记录，不要把当时的“网页尚未构建”误认为当前状态。

## 历史交接记录（2026-10-09）

Use this file when resuming the project in a new chat/window.

## Pre-PPT research handoff

The [pre-PPT repository audit](../analysis/audits/research-closeout-pre-ppt-repository-final-audit-2026-10-09.md) confirms current research decision coherence and the exact remaining **mechanical full-tree QA** gap; do not mistake research-level acceptance for full-file check PASS. Source content for future slides is the [final WP4 research insight](../reports/final-research-insight-and-collaboration-decision-2026-10-09.md), qualified by the Q01–Q10 acceptance matrix and canonical Phase1 sources. Web and PPT implementation are deferred.

## Current research-only closeout (2026-10-09)

Start with the [curated closeout evidence index](research-closeout-evidence-index-2026-10-09.md) and [WP1–WP5 work plan](research-closeout-workplan-2026-10-09.md). Q01–Q10 research acceptance is currently prioritized over web/PPT; dated website checks are not scientific evidence gates. The index resolves recent academic partner comparison, Q09 tasks, 2026 TPU–Frumkin lead, identity cautions and accepted public-data limits. Do not treat derived reports as new canonical portfolio decisions.

## Read in this order

1. [STATUS.md](STATUS.md) — authority, research mode, current phase and next action.
2. [restart-snapshot.md](restart-snapshot.md) — generated current Direction snapshot.
3. [Final Insight Acceptance Contract](final-insight-acceptance-contract.md) — ten final questions, scientific closure and decision gates.
4. [Ten-Question Live Ledger](final-insight-question-ledger.tsv) — current answer, confidence/status, evidence pointer and remaining action.
5. [Academic Collaboration Card Template](../reports/collaboration-opportunities/decision-card-template.md) — partner-level management output format.
6. [paper-deep-read-coverage.md](paper-deep-read-coverage.md) — current canonical Paper deep-read coverage and decision-sensitive queue (always verify denominator in STATUS.md; latest 37/60).
7. [Phase-1 Management Table](../views/russia-vs-china/phase1-management.md) — strategic / reserve / Watch / Hold portfolio.
8. [Kill / Downgrade Ledger](../07-decisions/kill-ledger.md) — theses that must not silently reappear.
9. [charter.md](charter.md) — project goal and scope.
10. [methodology.md](methodology.md) — evidence and decision method.
11. [architecture.md](architecture.md) + [taxonomy.md](taxonomy.md) — object ownership and hierarchy.

For a concise Chinese leadership overview of final acceptance, see [Final Insight Ten-Question Overview](../reports/final-insight-acceptance-overview-cn.md). The overview is a **snapshot**; STATUS and the ten-question ledger are authoritative.

## Resume rule

Do not restart research from scratch.

Before doing new research:
- identify which Q01–Q10 acceptance gap the round will close; avoid bibliography for its own sake;
- read current Direction(s);
- inspect linked Claims/Sources;
- preserve explicit China/global comparator pressure;
- preserve phone-transfer caveats;
- update canonical objects first;
- regenerate views;
- record material strategic transitions as Decision Events / Transactions.

## Human presentation rule

Use:
Institution -> Lab/Team -> Key People -> Capability -> Direction.

Institutions and people are both important.
The organization hierarchy comes first so capability ownership stays unambiguous.

## Historical files

Historical V1 round notes can be used for provenance and fidelity checks, but they should not be required to know current V2.1 truth.

V2.1 on main is now authoritative. Always trust [STATUS.md](STATUS.md) for the current authority state.

## Latest integrated-research handoff (2026-10-09)

Before restarting individual institute literature searches, use the [current research archive map](../analysis/research-archive-index-2026-10-09.md). It points to the [latest Russian academic partner comparison](../reports/russia-academic-partner-comparison-2026-10-09.md), [Q09 conditional academic task portfolio](../reports/collaboration-opportunities/academic-q09-feasibility-portfolio-2026-10-09.md), and [final-insight/archive audit](../analysis/audits/final-insight-and-archive-audit-2026-10-09.md).

**Freshness caveat:** the 2026-10-07 graph PASS and the CI run recorded in 2026-10-08 STATUS predate new 2026-10-09 analysis/reports. Do not describe them as a current HEAD full-tree/CI result. Canonical Phase1 P1 Primary / P2 Conditional Reserve / TPU HOLD remains unchanged. Current audit found no basis for unauthorized collaboration, phone prototype assertion or automatic research-source promotion.

## 2026-10-22 最新增量：首篇中国理论论文完成全文级试编码

- 已审阅赵诚卓、胡开鑫（宁波大学）2022 年“双自由面溶质—热毛细液层的不稳定性”全文 PDF；确认其包含无量纲控制方程、物理边界条件、基态构造、线性稳定性与能量分析。
- 该论文在 PHYS/MATH/MECH/PRED 四个维度均为高档，直接反驳“中国缺少严密数学物理研究”的宽泛说法。
- 与俄罗斯 PAPER-RU-MODEL-002 对照后，俄方的部分不变精确解路线仍具方法特色，但两篇物理边界不同，不能据此判定国家整体优劣。
- 最新更新见 [首个同领域对照报告第 8 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)。

**继续动作：** 对中国候选的非模态稳定性、环形液池稳定性和三维非线性蒸发薄膜研究继续全文编码；同步复核俄罗斯 2018/2023/2024 精确解论文，保持同等级别证据审查。

## 2026-10-22 下一轮进展：完成三篇论文的方法级复核

新增到 [首个同领域对照报告第 9–10 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md) 和 [专项审计第 12 节](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)：

- **中国 CN-2（2022）**：审查郑晟、胡开鑫《热毛细液层非模态稳定性分析》的方法文本，核对无量纲控制方程、自由面边界、瞬态增长函数、外部激励响应函数及 Re/Pr 依赖。评分 PHYS=3、MATH=3、MECH=2、PRED=2、VALID=0、TRANS=0。
- **中国 CN-3（2024）**：审查三维蒸发/冷凝薄膜论文的控制方程、相变边界、长波渐近展开、线性稳定性、非线性演化和自相似破裂标度。评分 PHYS=3、MATH=3、MECH=3、PRED=3、VALID=0、TRANS=1。
- **俄罗斯 RU-2（2023）**：完成 13 页开放全文的方法复核，确认部分不变精确解、广义特征值问题、Abramov–Godunov 数值算法、中性稳定曲线和失稳阈值。评分 PHYS=3、MATH=3、MECH=3、PRED=3、VALID=0、TRANS=0。

### 本轮判断
俄罗斯 2023 年论文的“精确基态 → 特征值问题 → 稳定性阈值”链条已经得到全文级证据支持。与此同时，中国论文在非模态稳定性和三维非线性薄膜演化方面也有严密的方法贡献。当前差异更可能是**方法组合和研究谱系不同**，尚不能推出俄罗斯整体数学物理更强。三篇论文的物理几何和边界条件不完全相同，不能直接当作同题国家对照。

### 下一步
1. 继续核验中国 2016 年环形液池稳定性和中国 2022 年双自由面稳定性论文的方法细节。
2. 逐项审查俄罗斯 2018 年精确解/特征扰动论文与 2024 年 Dirichlet 精确解论文的结果和适用边界。
3. 搜寻中国与俄方“蒸发双层通道 + 精确解/稳定性阈值”更接近的同题对照。
4. 做研究谱系去重和年代/主题分布检查，再判断窄方法优势是否稳健。

## 2026-10-22 再下一轮：俄罗斯 2024 精确解全文与三维模型对照

新增内容见：
- [同领域对照报告第 11 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)
- [专项审计第 13 节](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)

### 本轮完成
- 逐页审阅 Bekezhanova & Goncharova (2024) 开放全文，核对两相控制方程、Soret/Dufour、界面质量/热量条件、Birikh 类部分不变精确解、流型分类及作者自述限制。
- 对照一篇与中国天舟一号两相流实验项目相关的 FC-72 三维蒸发液层研究，核实其有限体积 CFD、网格收敛、与实验表面温度剖面/PIV 流型的比较。
- 明确两种方法的取舍：俄罗斯模型显式保留气液两层与热/质扩散耦合，但限于稳态、平直界面和特定解族；中国航天实验相关模型可解析三维流型转变且有更直接的验证呈现，但采用单侧蒸发、忽略气相动力学并固定液层厚度。
- 国家归属边界：该 2020 论文与中国航天实验项目有明确关联，但在未完成作者机构与贡献审计前，暂不作为“中国独立成果”的无条件计数。

### 当前阶段判断
现有证据支持俄罗斯 ICM/Altai 研究线在“显式双层气液 + 非均匀蒸发 + Soret/Dufour + 部分不变精确解”的组合上具有持续的方法积累。该判断比“俄罗斯整体数学物理更强”更窄且更可靠。下一步仍需寻找中国同题模型，并核验俄方 2018/2022 论文全文与实验比较证据。

### 下一步
1. 继续寻找中国同题的显式气相/热质交叉扩散模型，尤其是双层流、非均匀蒸发和稳定性分析的组合。
2. 补齐俄罗斯 2018、2022 论文的全文和验证证据。
3. 核实俄方理论组与 Institute of Thermophysics SB RAS 实验线之间的实际合作关系，并与中国对应团队比较。

## 2026-10-22 最新增量：补入中国蒸发耦合候选与国际双侧模型基线

新增内容见：
- [同领域对照报告第 13 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)
- [专项审计第 14 节](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)

### 本轮新增发现
- 中国期刊论文候选 Ji, Liu & Liu (2008) 研究蒸发与热毛细对流耦合，基于二维瞬态 Navier–Stokes 和能量方程，分析蒸发 Biot 数与 Marangoni 数。当前仅掌握摘要级方法证据；气相处理、Soret/Dufour 与作者机构归属待全文核验。
- 国际强基线 Grigoriev & Qin (2018, *Journal of Fluid Mechanics*) 显式求解液相/气相、气相空气与蒸汽输运、界面相变通量，并进行线性稳定性分析。作者单位为美国 Georgia Tech，因此只作国际方法基线，不计入中国样本。
- 该国际基线说明“双侧气液 + 气相热质传递 + 相变界面 + 稳定性”并非俄罗斯独有。俄罗斯可能的窄差异在于 ICM/Altai 连续研究谱系中，部分不变精确解、Soret/Dufour、非均匀蒸发与稳定性分析的组合。

### 当前判断
研究已从泛泛的“俄罗斯理论更强”收敛为一个可审计的窄假设：俄罗斯 ICM/Altai 研究线是否在特定两层蒸发流问题中，具有比中国同题研究更连续、更集中或更具解释/预测增量的方法组合。尚不能推断俄罗斯整体数学物理能力强于中国。

### 下一步
1. 对中国 2008 年论文全文编码，确认气相方程、界面条件、数学方法与验证。
2. 补齐俄罗斯 2018、2022 年论文全文及验证证据。
3. 对中俄同题研究做机构/作者谱系去重，并将国际基线单独呈现。

## 2026-10-22 第五轮：补入中国 2008 蒸发耦合模型与俄罗斯 2014 长波模型

详细内容见：
- [同领域比较报告第 14 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)
- [专项审计第 15 节](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)

### 本轮新发现
- 中国 Ji, Liu & Liu (2008) 的 *Chinese Physics Letters* 论文明确求解二维瞬态 Navier–Stokes 与能量方程，研究蒸发 Biot 数和 Marangoni 数对界面热/质传递耦合的影响。这是中国机理建模的直接样本；出版社 PDF 入口已找到，详细方程和边界条件尚待逐页核验。
- 俄罗斯 Goncharova、Rezanova 等 (2014) 论文使用长波近似、零阶/一阶小参数展开和广义蒸发界面条件，推导考虑重力、毛细、热毛细、黏性、蒸发及共流气体切向应力的液膜厚度演化方程。
- 方法论修正：俄罗斯研究线不仅有双层精确解，也有长波渐近与液膜演化；中国也有蒸发—热毛细方程模型。不能用“俄罗斯理论、中国工程”二分。

### 当前判断
更可信的俄罗斯候选特色仍是特定研究线中“显式双层气液 + 非均匀蒸发 + Soret/Dufour + 部分不变精确解 + 稳定性”的组合积累；是否相较中国同题研究更强，仍需全文级匹配和样本去重。

### 下一步
1. 逐页核对中国 2008 与俄罗斯 2014 论文全文。
2. 对俄罗斯 2018、2022、2023 论文做贡献去重。
3. 建立按方法类别和验证等级编码的中俄样本矩阵。
4. 单独评估数学物理方法差异与手机热管理迁移价值。

## 2026-10-22 第六轮：建立俄罗斯数学物理方法谱系正向证据链

详细内容：
- [薄膜蒸发与界面稳定性对照报告第 15 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)
- [数学物理范式专项审计第 16 节](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)

### 本轮完成
- 将俄罗斯 2014、2017、2018、2020、2023、2024 年相关论文按方法谱系整理，识别长波渐近/演化方程、三维精确解扩展、精确基态与线性稳定性、气相热质传递与 Soret/Dufour、重力/流型机制等反复出现的方法链。
- 明确本项目采取假设驱动的倾向性策略：优先深化支持“俄罗斯特定热物理研究线具有较强数学物理机理传统”的证据；中国样本用于检验差异范围，而不是泛泛做国家优缺点罗列。
- 找到中国 Ji、Liu、Liu (2008) 的二维瞬态蒸发—热毛细模型，承认中国存在机理方程研究；目前摘要尚未显示与俄方完全相同的方法组合，全文核验仍是重点。

### 当前可用于阶段汇报的结论
在蒸发对流、热毛细效应与气液界面热质传递专题中，俄罗斯 ICM/Siberian Federal University、Institute of Thermophysics SB RAS 和 Altai State University 相关研究人员形成了持续的数学物理建模谱系。公开论文反复出现经典对流方程、广义相变界面条件、Ostroumov–Birikh 类精确/部分不变解、Soret/Dufour、长波渐近、膜厚演化方程和线性稳定性分析。与目前已编码的中国同题样本相比，该方法组合的连续性信号更清晰；相对集中度与实际预测增量仍待同题样本扩充和全文级配对确认。

### 下一步
1. 对 2018 年稳定性论文、2023 年重力—流型论文做全文级审计。
2. 对中国 2008 年论文做全文编码，尤其核对气相模型、界面条件和验证方式。
3. 按作者谱系去重，区分方法创新和参数拓展。
4. 分别评价解析可解释性、稳定性预测、三维扩展和实验验证能力。

## 2026-10-22 第七轮：俄罗斯 2023 年论文完成全文级审计

详细内容见：
- [薄膜蒸发与界面稳定性对照报告第 16 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)
- [数学物理范式专项审计第 17 节](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)

### 新完成的证据
- 逐页审阅 Makarov (2023) 的公开 PDF。确认作者机构为 Altai State University 与 Institute of Computational Modelling SB RAS。
- 核对两相 Navier–Stokes / Oberbeck–Boussinesq 方程、气相蒸汽对流扩散、Soret/Dufour 交叉扩散、热毛细应力、潜热平衡、饱和蒸汽界面条件，以及 Ostroumov–Birikh 型精确解如何将 PDE 约化为 ODE/代数系统。
- 该文提供俄罗斯特定研究线的直接正向证据：方程—界面条件—结构化解析约化—边界条件求解—参数机制解释。
- 同时记录限制：平直界面、特定精确解结构、被动蒸汽假设；不能将其当成通用瞬态模型或已完成独立实验定量验证的手机热管理模型。

### 当前下一步
1. 对俄罗斯 2018 年稳定性论文做全文级审计，检查精确基态、特征扰动与临界稳定曲线。
2. 对中国 Ji、Liu、Liu (2008) 论文全文编码，并补入中国科学院力学研究所相关实验论文。
3. 建立作者去重后的对照矩阵，区分数学建模方法、实验验证能力和国家层面研究分布。

## 2026-10-22 第八轮：补入 2023 年稳定性研究的出版商证据

详细内容见：
- [薄膜蒸发与界面稳定性对照报告第 17 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)
- [数学物理范式专项审计第 18 节](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)

### 本轮新增
- 核实 Bekezhanova & Shefer (2023), *Computational Continuum Mechanics*, DOI 10.7242/1999-6691/2023.16.2.19 的出版商页面。
- 该文用部分不变精确解构造两相蒸发稳态基态，再对平面与空间正弦波扰动进行 normal-mode 线性稳定性分析，研究稳定性阈值、中性曲线拓扑和几何变化导致的失稳形式；摘要称预测的失稳形态与热物理实验观察一致。
- 与 Makarov (2023) 全文级证据合并后，形成更清晰的互补方法链：双相精确解与交叉扩散解释流型/传质；精确基态进一步用于稳定性谱分析和临界阈值预测。

### 下一步
1. 对中国 Ji et al. (2008) 理论论文全文编码。
2. 编码中国科学院力学研究所 2008/2010 年蒸发热毛细实验论文，区分实验贡献与理论验证。
3. 继续审计俄罗斯 2018 稳定性论文的推导细节，追踪从精确解到临界曲线的方法演进。

## 2026-10-22 第九轮：俄罗斯稳定性与中国理论—实验配对审计

详细记录：
- [数学物理范式专项审计第 19 节](../analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)
- [薄膜蒸发与界面稳定性比较第 18 节](../analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)

### 本轮完成
- 核对俄罗斯 Bekezhanova & Shefer (2018) 稳定性论文的摘要、出版商预览、机构出版目录和索引全文片段：两层 Boussinesq 方程、精确不变基态、气相热扩散、流型分类、线性稳定性和临界特征。
- 明确标注限制：完整扰动 ansatz、特征方程和临界曲线求解尚未逐式核对，避免把部分全文预览误报为公式级全文审计。
- 核对中国 Ji–Liu–Liu (2008) 理论模型：二维瞬态 Navier–Stokes/能量方程、二阶投影法/有限差分、纯蒸发特例解析表达式、蒸发 Biot 数和 Marangoni 数参数分析。
- 核对中国科学院力学研究所 Zhu 等 (2008) 实验：热电偶、激光共焦位移仪、PIV；界面温差变化下单胞→多胞→湍流转变。
- 中俄比较收敛为方法组合差异：俄罗斯研究线的突出路径是“精确不变基态—线性稳定性—临界特征”；中国 2008 年样本则同时有瞬态耦合建模和直接实验测量。

### 当前判断
本轮支持俄罗斯特定热物理研究线具有较强数学物理机理研究传统，尤其在精确基态与稳定性阈值的衔接方面呈现连续谱系；中国也有机理方程建模和实验验证积累。不能将结论泛化为国家整体排名。

### 下一步
1. 继续获取俄罗斯 2018 论文的完整 PDF，逐式复核扰动和临界条件。
2. 完成中国 2008 年理论论文的全文公式级审计。
3. 对中方 2008/2009/2010 年实验论文按作者和实验数据去重。
4. 将俄罗斯 2016–2023 年稳定性工作按作者谱系去重，识别真正的方法创新。


## 2026-10-22 第十轮：中俄数学物理方法贡献去重

- 新增专项审计：`analysis/russia-china-math-physics-round10-method-contribution-dedup-2026-10-22.md`。
- 原始期刊再核：Ji/Liu/Liu (2008) *Chinese Physics Letters*；Ji/Liu/Zhu (2008) *Chinese Journal of Space Science*；Bekezhanova/Shefer (2018) *Microgravity Science and Technology* 与 ICM/SFU 机构出版目录。
- 重要收敛：俄方 ICM/SFU/Altai 的连续数学物理研究谱系有较强证据，但 2016–2024 年同作者解族的综述、稳定性延伸及边界参数扩展不能当作彼此独立的新数学方法；中国 2008 年两篇相关理论文章亦属于有重叠的研究簇。
- 仍需：2018 俄文/英文稳定性论文完整扰动方程逐式核验，中国 2008 年耦合模型公式/边界条件全文核验，同题同方法独立研究贡献对照；全文未取得不得编造。
- 决策不变：基础建模 RESERVE、P1/P2/HOLD 不变，尚不形成俄罗斯整体超越中国的比较结论。


## 2026-10-22 第十一轮：采用近期文献优先规则

- 用户明确要求：**不再研究超过 15 年的旧模型**。以 2026 年为评估点，2011 年以前论文退出当前数学物理中俄对照与全文审读计划；主要深研 2021—2026 年原始论文，2011—2020 年仅用于必要的方法谱系背景。
- 已归档 `analysis/russia-china-math-physics-round11-recent-only-2026-10-22.md`。当轮新审查俄罗斯 Bekezhanova/Shefer (2023) 精确基态—线性稳定性、Prokudina (2024) 非线性膜厚 PDE；中国 Jiang/Huang/Yang/Ding (2024) 三维长波蒸发/冷凝液膜失稳、中国科学院力学研究所 (2026) 近期界面实验；另记录 2024 国际两相失稳强反证基线。
- 重要：中方 2024 论文同样属于高水平数学物理研究，不能推断中方缺乏理论。当前俄方方法谱系特色较强，但中俄总体数学物理强弱排名仍未核实。
- **前面第九/第十轮提到的『继续补读中国 2008 论文』现在作废**；不能让后续 Agent 再沿旧 backlog 执行。
- 下一步：以 RU23/RU24/CN24 的模型和边界条件做同题比较，寻找 2021—2026 年中国精确基态/谱稳定性最强反例，区分理论方法深度与手机迁移价值。P1/P2/HOLD/建模 RESERVE 不变。


## 2026-10-23 第十二轮：近五年中俄稳定性方法严格配对

- 新报告：`analysis/russia-china-math-physics-round12-spectral-exact-recent-matched-2026-10-23.md`。
- 研究样本仍优先 2021—2026，**不要重开 2008 年方法全文审计**。
- 本轮首次加入 2022 年中国宁波大学 Zhao/Hu 溶质热毛细双自由面线性稳定性、Zheng/Hu 非模态稳定性、Wang/Hu Bingham 热毛细稳定性三篇原刊记录。证明中国近期也有临界 Ma、谱模态与非模态放大的深入理论研究；避免把谱稳定性方法本身表述为俄罗斯独有。
- 俄罗斯优势假设收窄为 ICM/SFU/Altai 2023—24 多篇的“显式双层蒸发模型 + 特殊精确基态 + 气相热扩散 + normal-mode 阈值”连续研究组合；新增 Goncharova 2023 三维精确解/约化论文及 2024 双语期刊同一工作去重，Prokudina 2024 属另一个俄罗斯独立研究线。
- 尚未逐式复核所有 PDF；不宣称俄罗斯相对中国有国家级数学优势或手机级 VC 性能优势。建模 RESERVE 和 P1/P2/HOLD 不变。
- 下一轮：找近期中方双层蒸发/精确基态同题样本，补方程/边界与同条件预测比较，再判断窄增量。


## 2026-10-23 第十二轮：RU23 PDF 全文方法验证与 CN24 三维长波模型比较

- 新研究文件：`analysis/russia-china-math-physics-round12-fulltext-matched-methods-2026-10-23.md`。继续执行 **2021—2026 近期论文优先**，不重启 2008 年模型深读。
- **实际新增证据：** 完整读取 Bekezhanova/Shefer (2023) *Computational Continuum Mechanics* 13 页期刊原始 PDF：验证部分不变精确基态、平面/空间 normal-mode 扰动的指数 ansatz、正文式 (9)—(12) 的耦合谱边界问题和正交化谱求解方法；未独立复算全部谱根或中性曲线。
- **中国对照：** Jiang/Huang/Yang/Ding (2024) *Fluids* 的公开全文公式/搜索内容核实三维长波展开、相变界面条件、色散关系、非线性膜破裂及蒸汽反冲/有效压力作用。双方都是较强数学物理研究，不允许称“中国只会工程”。
- **扩展俄方近期谱系：** South Ural State University Prokudina (2024) 非线性四阶液膜 PDE，以及 (2025) 波包非线性包络方程（目前书目与摘要级，公式待核）；视为同作者持续路线而非两项已验证独立理论突破。
- **新结论：** RU23 的精确基态—线性谱阈值方法特色在原文公式级获得加强；CN24 的三维非线性长波演化同样有深数学推导。方法任务差异不等于国家强弱排名。基础建模继续 RESERVE，既有 P1/P2/HOLD 均不变。
- **下一轮：** RU24/RU25 全文贡献去重；寻找 2021—2026 中国精确基态+谱稳定性同问题对照；建立同输入/阈值/误差/计算开销的模型预测对比契约。


## 2026-10-23 第十三轮：Prokudina 2024—2025 贡献去重与中国近期强对照

详细记录：[第十三轮专项报告](../analysis/russia-china-math-physics-round13-contribution-dedup-and-china-matched-2026-10-23.md)。

### 本轮新增核实
- 原刊确认 Prokudina 2024《Simulation of the evolution of disturbances in an evaporating liquid film》：四阶非线性自由表面 PDE，系数含表面张力、热毛细与蒸发，数值差分研究非线性演化、Marangoni 失稳及临界值；原刊 PDF 可访问，但本轮尚未逐式审读。
- 原刊确认 Prokudina 2025《Simulation of the long-term nonlinear evolution and interaction of disturbances in a liquid film》：以窄带波包包络振幅为变量的非线性抛物方程，系数与增长率、频率及其导数相关；研究增长率拐点、最大增长率附近的非线性演化和相速度。两篇是同一作者/机构研究谱系中的不同模型层次，不应计为两个独立团队或自动认定两项独立理论突破。
- 核实中国宁波大学 2022 年三项近期理论研究：双自由面溶质—热毛细液层临界模态与能量分析；热毛细液层非模态瞬态放大；Bingham 双自由面液层稳定性。它们是中国数学物理强对照，但物理边界与 RU23 显式双层蒸发问题不完全相同。
- 将中国 Jiang/Huang/Yang/Ding 2024 三维蒸发/冷凝长波失稳模型继续作为相变液膜近邻对照；另将 Mohamed/Biancofiore 2024 国际挥发液膜稳定性单列 GLOBAL，不计入中俄任一方。
- 当前尚未找到同时满足“中国团队 + 2021—2026 + 显式双层气液蒸发 + 精确基态 + normal-mode 谱阈值”的完全同题论文；这只是已检索样本的未命中，不代表中国不存在此类工作。

### 当前判断
俄罗斯特定研究线持续将部分不变精确基态、两相传输和谱稳定性连接起来的特色仍值得支持性检验；South Ural State University 的 Prokudina 2024—2025 也呈现从自由表面四阶 PDE 到波包包络模型的连续研究路线。与此同时，中国近期在临界模态、能量机制、非模态放大和非线性相变液膜方面同样有扎实理论成果。因此，不得使用“俄罗斯做理论、中国主要做工程”的表述；目前支持的是特定团队/专题的方法谱系特色，不是国家整体排名或手机器件性能优势。

### 下一步（覆盖本文件中早期与 2008 年有关的旧待办）
1. 取得并逐页审阅 RU24、RU25 PDF，核对完整方程、假设、离散/包络推导、适用范围、验证和两篇之间的真正新增贡献。
2. 继续只针对 2021—2026 年中国文献检索“显式气相输运 + 相变界面 + 精确基态/谱稳定性”；记录数据库、查询式和未命中限制。
3. 建立可用于工程判断的同条件预测契约：共同输入/边界、输出阈值、参考数据及不确定性、预测误差、计算成本、手机 VC/吸液芯的机制适用边界。
4. 不重开 2008 年全文审计，不将作者连续发表重复计为独立机构优势；不更改 P1/P2/HOLD 或基础建模 RESERVE。
