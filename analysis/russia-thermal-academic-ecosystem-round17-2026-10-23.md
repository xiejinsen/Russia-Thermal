# 第十七轮｜俄罗斯热管理机构的数学物理学术生态旁证调查（2026-10-23）

**阶段状态：** ECOSYSTEM-REGISTRY-ESTABLISHED / TSU-TPU-NSU-ENVIRONMENT-EVIDENCE-FOUND / DIRECT-TRANSFER-LINKAGE-OPEN / NATIONAL-COMPARISON-NOT-EVALUABLE

## 0. 本轮目标

用户提出：除了直接阅读热管理论文，是否能调查既有俄罗斯热管理研究机构所在高校是否拥有强数学学科、数学物理实验室和相关学者，从侧面判断这些团队是否处于高水平理论研究生态中。

本轮先建立可持续维护的 GitHub 结构，再以公开官方来源开展首轮调查。研究不是为预设的国家结论搜集背书；学校声誉只作为背景，核心问题是能否证明“数学物理资源 → 热管理团队 → 热管理论文中的具体方法”存在真实传导关系。

## 1. GitHub 维护结构已建立

新增目录：research/academic-ecosystem/

- README.md：目标、证据等级、维护规则、调查顺序和当前状态。
- registry/institution-matrix.tsv：候选机构总表，统一记录排名、研究资源、关联证据、状态与下一步。
- evidence/source-register.md：来源登记册，区分官方资料、原始论文、排名与推论。
- profiles/NSU.md、profiles/TPU.md、profiles/MPEI.md：一机构一档案，避免把所有材料塞进大文件。
- 本报告：本轮研究结果与待验证问题。

TSU 档案创建请求在本轮被工具安全检查拦截，尚未创建；相关证据已经登记在来源册与本报告，后续用更短内容单独补建。不得把被拦截的写入视为成功。

## 2. 排名：只作环境背景，不作为团队实力结论

RAEX 2026 俄罗斯高校数学学科排名列出：
- Novosibirsk State University（NSU）：第 6，56.40 分；
- ITMO University：第 7，52.51 分；
- Tomsk State University（TSU）：第 10，50.79 分；
- Tomsk Polytechnic University（TPU）：第 15，44.57 分；
- Siberian Federal University（SFU）：第 20，40.16 分。

原始来源：https://raex-rr.com/education/subject_ranking/Maths/2026/

RAEX 的对象是俄罗斯高校，不是全球数学排名；其数学学科口径覆盖数学、基础数学、应用数学、数学建模、统计等，综合使用科研出版、研究生培养、教学/在线课程等信息。该排名可帮助确定优先调查顺序，但不能证明某所高校的热管理团队具备更强的数学物理能力，更不能单独支持国家级比较。

## 3. NSU—新西伯利亚学术城：存在强数学/力学网络的环境证据

NSU 数学与力学系的公开材料说明，多个俄罗斯科学院西伯利亚分院研究所参与高水平科研人才培养合作，包括：
- Sobolev Institute of Mathematics；
- Institute of Computational Mathematics and Mathematical Geophysics；
- Institute of Computational Technologies；
- Lavrentyev Institute of Hydrodynamics；
- Khristianovich Institute of Theoretical and Applied Mechanics；
- A. P. Ershov Institute of Informatics Systems。

来源：https://math.nsc.ru/~crypto/master-in-crypto/19-booklet-master-in-crypto.pdf

这比“学校排名高”多了一层组织结构证据：高校数学与力学教育和科学院研究所网络有正式关联。但本轮还没有证明上述机构与 Russia-Thermal 已纳入的 Kutateladze Institute Lab 1.3 / Pavlenko–Surtaev 研究线存在具体共同作者、共同项目或指导关系。地理邻近和同属西伯利亚科学院生态不能代替直接关联证据。

## 4. TSU：最适合做“热传递团队与数学物理资源是否传导”的案例

### 已确认的两个独立单元

1. Centre for Fundamental and Mathematical Physics：TSU 官方页面列出该中心及理论与数学物理实验室，研究方向涉及数学物理方法、量子场论、引力、凝聚态等。
来源：https://en.science.tsu.ru/centers/centre-for-fundamental-and-mathematical-physics/

2. Laboratory on Convective Heat and Mass Transfer：官方实验室页面称该实验室于 2014 年建立，研究对流热质传递的理论与实际问题，采用解析与数值方法；公开人员包括 Mikhail A. Sheremet、Nadezhda S. Bondareva、Igor V. Miroshnichenko、Nikita S. Gibanov 等。
来源：https://chmt.tsu.ru/；人员目录：https://chmt.tsu.ru/node/2

TSU 官方研究者目录也将 Mikhail A. Sheremet 列为对流热质传递相关实验室负责人，另将 Semyon L. Lyakhovich 列为理论与数学物理实验室负责人/首席研究员。
来源：https://en.science.tsu.ru/faculty/leading-researchers/

### 解释与限制

TSU 的价值在于：同一高校内同时存在直接研究热质传递的解析/数值建模团队和独立的数学物理研究单元。这是“理论资源共存”的直接证据，但尚不是“理论资源影响了热管理团队”的证据。现阶段没有确认两组的共同论文、项目、人员双聘或共同指导。

因此 TSU 被列为第一优先案例：接下来应追踪共同作者、项目号、论文致谢、学者履历及具体方法，而不是简单引用数学排名。

## 5. TPU：已有热质传递解析解研究的直接官方证据

TPU 官方 Heat and Mass Transfer Laboratory 研究页面列出：
- 包含相变和化学反应的热质传递问题解析解；
- 物理/化学过程的数值模拟，包括自研代码和数学模拟软件；
- 液滴、射流和液膜的热质传递与流体动力学；
- 高速成像和非接触光学测量。

来源：https://hmtslab.tpu.ru/en/research/

TPU 官方研究入口也列出热质传递、相变、流体/气体力学及凝聚态理论等研究领域，并将 Geny Kuznetsov 列为相关研究方向的教授线索。
来源：https://tpu.ru/en/research/physics_and_mathematics/

RAEX 2026 数学学科排名中 TPU 为第 15。上述资料证明 TPU 存在与热管理物理直接相关的解析与数值方法资源；仍需原始论文核验解析解的具体形式、假设、原创性与验证。也尚未证明该实验室与校内其他数学/理论物理单位存在直接人员或项目传导关系。

## 6. MPEI：保留为待核对象

MPEI 已经是既有热管理研究中的对象，但本轮没有找到足以支撑正式结论的具体数学物理实验室/人员关联链。因此新建档案仅登记研究任务，不预填未经核实的排名或专家名单。下一轮必须先从 MPEI 官方部门和实验室页面定位研究组，再回连既有热虹吸论文的作者与方法。

## 7. 首轮对照矩阵

| 对象 | 排名/环境证据 | 数学物理资源 | 热传递关联 | 与既有热管理团队的直接传导 | 当前结论 |
|---|---|---|---|---|---|
| NSU + SB RAS ecosystem | RAEX 数学第 6；高校与多家 SB RAS 研究所参与人才培养 | 数学、计算数学、水动力学、理论/应用力学研究所网络 | 区域内存在热物理/流体研究环境 | OPEN | 强生态候选，具体边待证 |
| TSU | RAEX 数学第 10 | 基础与数学物理中心、理论/数学物理实验室 | 对流热质传递实验室明确使用解析/数值方法 | OPEN | 最适合追踪校内跨团队传导 |
| TPU | RAEX 数学第 15 | 基础物理与数学研究入口；热质传递实验室有解析解方向 | 直接涉及相变、液滴、液膜、热质传递 | OPEN | 有较强直接相关方法资源，原创贡献需看论文 |
| MPEI | 本轮未核实排名 | 具体数学物理单元待查 | 既有热工研究线已知 | OPEN | 不能凭工程声誉推断理论实力 |
| ITMO | RAEX 数学第 7 | 相关具体单元待查 | 与既有热管理研究的直接联系未确认 | OPEN | 候选，不因排名自动升级 |
| SFU | RAEX 数学第 20 | 相关具体单元待查 | 可能存在区域联系 | OPEN | 地理邻近不是关联证据 |

## 8. 本轮结论

### 支持的结论
- 俄罗斯部分热管理研究所处的高校/科学院生态中，确实存在数学、计算数学、理论力学、数学物理与水动力学研究资源。
- TSU 和 TPU 的官方资料中，已能直接找到与热质传递有关的解析/数值方法；NSU 则有与多个科学院研究所协同培养人才的明确材料。
- 这些证据值得作为既有热管理论文分析的旁证，并可用于提出更精确的人员/组织关联检索问题。

### 不能支持的结论
- 不能仅凭高校排名或实验室共存就说热管理团队“因此”具有更强数学物理能力。
- 不能说俄罗斯高校整体数学物理前沿性高于中国。
- 不能把理论物理中心的量子场论研究直接当成热管理方法证据。
- 不能将解析/数值建模自动视作高原创性；需读具体论文的控制方程、假设、推导、预测与验证。
- 不能据此推断手机 VC 的直接性能增益。

当前成熟度：环境证据 = 初步支持；热传递方法资源 = TSU/TPU 初步支持；跨团队传导 = OPEN；国家级比较 = NOT_EVALUABLE。

## 9. 下一轮优先任务

1. TSU 作者网络差分：收集 Sheremet、Bondareva、Miroshnichenko、Gibanov 的代表论文，编码解析/渐近/稳定性/数值/实验验证，并检查与理论数学物理实验室人员是否共同署名或共同项目。
2. TPU 论文实质审计：从实验室页面挑选明确标为 analytical solution 的代表论文，核验它们是否包含解析推导、精确解、渐近/稳定性方法，以及验证深度。
3. NSU—SB RAS 传导链：从 Kutateladze Institute 的热管理研究线回查共同作者、学位指导、正式兼职/合作项目，不以地域关系代替证据。
4. MPEI 官方单位核验：找到当前正式的热质传递、流体力学、计算数学/理论力学单位及学者。
5. 只在存在明确关系时扩展到 ITMO、SFU 等候选机构。

## 10. 来源

- RAEX 2026 数学排名：https://raex-rr.com/education/subject_ranking/Maths/2026/
- NSU/科学院研究所人才培养材料：https://math.nsc.ru/~crypto/master-in-crypto/19-booklet-master-in-crypto.pdf
- TSU 基础与数学物理中心：https://en.science.tsu.ru/centers/centre-for-fundamental-and-mathematical-physics/
- TSU 对流热质传递实验室：https://chmt.tsu.ru/
- TSU 实验室人员：https://chmt.tsu.ru/node/2
- TSU 研究者目录：https://en.science.tsu.ru/faculty/leading-researchers/
- TPU 热质传递实验室研究方向：https://hmtslab.tpu.ru/en/research/
- TPU 基础物理与数学研究入口：https://tpu.ru/en/research/physics_and_mathematics/
