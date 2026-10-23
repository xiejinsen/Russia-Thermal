# 第十九轮｜代表论文方法审计与中俄可比证据试配（2026-10-23）

**状态：** ITP-MODEL-EXPERIMENT-LINKAGE-SUPPORTED / TPU-PAPER-LEVEL-ANALYTICAL-NOVELTY-OPEN / CHINA-MECHANISTIC-MODEL-COUNTEREVIDENCE-CONFIRMED / COUNTRY-LEVEL-COMPARISON-NOT-EVALUABLE

## 1. 本轮问题

本轮不以学校排名或实验室自述判断“数学物理强”，而是审计代表论文的实际方法：模型从何而来、数学处理做了什么、如何验证、是否产生新物理认识。另加入同类中国研究，防止只收集俄罗斯正面证据。

方法编码：
- M1：从守恒方程与物理/界面条件构建模型；
- M2：新解析解、渐近约化、稳定性理论或其他数学推导；
- M3：数值方法本身的分析/比较，而非只使用求解器；
- M4：实验、独立基准、误差/收敛验证；
- M5：可检验的新机制或预测，而非仅参数趋势。
- “未确认”表示摘要/可见页面不足，不等于论文没有。

## 2. ITP / Pavlenko–Surtaev：机制实验与模型验证形成闭环，但并非每篇都以数学推导为核心

### RU-ITP-2014A：液膜沸腾与危机现象的实验研究
A. S. Surtaev, A. N. Pavlenko, “Observation of boiling heat transfer and crisis phenomena in falling water film at transient heating,” *International Journal of Heat and Mass Transfer* 74 (2014), 342–352. DOI: 10.1016/j.ijheatmasstransfer.2014.03.033.
来源：https://www.sciencedirect.com/science/article/abs/pii/S0017931014002397

可核实内容：
- 同步使用高速红外热像和高速视频，观测瞬态加热下过冷水降膜的沸腾与传热危机。
- 将实验得到的沸腾曲线与已有池沸腾模型比较。
- 观察到不同 Reynolds 数下的危机机制不同：较高 Re 下干斑形成和沿加热壁传播重要；较低 Re 的波动与热毛细作用可导致液膜破裂。
- 摘要/正文片段表明研究明确面对当时缺乏可靠宽工况预测关系的问题。

方法编码：M1=未确认（此篇主要是实验研究）；M2=低/未确认；M3=不适用；M4=强；M5=支持（识别出不同工况下不同失效机制）。
结论：它证明团队能以高时空分辨率实验识别机理并挑战简单关联式，但不能单独当作数学建模原创性的证据。

### RU-ITP-2017A：非稳态波状降膜的模型与临界热流预测
A. N. Chernyavskii, A. N. Pavlenko, “Numerical simulation of heat transfer and determination of critical heat fluxes at nonsteady heat generation in falling wavy liquid films,” *International Journal of Heat and Mass Transfer* 105 (2017), 648–654.
可检索原文摘要/馆藏记录：https://eld.bl.uk/catalog/100039226151_0x000001
研究者官方论文列表：https://www.itp.nsc.ru/lmpt/?lang=en&page_id=1257

摘要明确：建立计算波面轮廓、速度场和温度场随时间演化的数学模型；模拟液氮降膜波的形成；计算沸腾起始等待时间、局部蒸发时间和不同入口 Reynolds 数下的临界/抑制热流关系；生成液膜衰减机制的 regime map；数值结果与实验数据总体符合，但低热流区域存在偏差，作者将其与蒸发对传热的影响联系起来。

方法编码：M1=支持（模型明确涉及波面、速度、温度场）；M2=未确认（摘要未显示新解析/渐近理论）；M3=中等（耦合时变液膜模型与工况图）；M4=支持（实验对照且明确报告偏差）；M5=支持（不同衰减机制的工况图和临界热流预测）。
结论：这是比单纯实验论文更直接的“模型—预测—实验校验”证据，但当前可见材料不足以判断数学推导是否原创、网格收敛/不确定度如何，也不能说其数学物理强于同题中国研究。

### RU-ITP-2014B：过热表面再润湿
A. N. Pavlenko et al., “Dynamics of a superheated surface rewetting with a falling liquid film,” *High Temperature* 52(6) (2014), 861–868. DOI: 10.1134/S0018151X1406011X.
原刊摘要：https://www.mathnet.ru/eng/tvt1196

该研究对过热铜表面上的液氮降膜再润湿进行实验，并将实验结果与再润湿过程数值模拟比较；研究指出加热壁厚度会影响再润湿前沿的胞状结构与前沿平整化。
方法编码：M1=部分支持；M2=未确认；M3=数值模拟但算法新颖性未确认；M4=支持；M5=支持（壁厚与再润湿前沿结构的关联）。
结论：再次支持实验—模拟互证的研究文化；尚不足以证明新数学理论。

## 3. TPU：组织级“解析解”主张已确认，论文级原创性还不能直接打分

### RU-TPU-2015A：高温气体中单水滴运动/蒸发
P. A. Strizhak, R. S. Volkov, O. V. Vysokomornaya, “Numerical Investigation of Heat and Mass Transfer Processes during Motion of the Single Water Droplet in High-Temperature Gas Area,” *JP Journal of Heat and Mass Transfer* 11(1) (2015), 75–91. DOI: 10.17654/JPHMTFeb2015_075_091.
馆藏书目：https://vufind.lib.tpu.ru/vufind/Record/639614

可见摘要表明该文主要通过数值研究，分析高温气体中单水滴在相变条件下的热质传递，计算完全蒸发时间随液滴尺寸、速度和环境温度的变化，并考察阻力影响。

方法编码：M1=未充分确认；M2=未确认；M3=未确认（数值研究不等于新数值方法）；M4=摘要未确认实验验证；M5=参数趋势支持，但预测新颖性未核实。
结论：该代表样本说明 TPU 团队开展相变热质传递的数值模型研究，但它本身不能作为“解析解原创性”的证明。下一步必须从实验室列出的 analytical solution 类论文中另选样本，审计完整正文。

### 组织层面证据
TPU 官方实验室页面确实声明其研究包括含相变/化学反应的解析解、自研代码、数值模拟和光学测量：https://hmtslab.tpu.ru/en/research/
此证据只证明研究组合与方向，不能替代逐篇论文审计。

## 4. 中国同题/邻近题反例：理论建模并非俄罗斯独有

### CN-2023：降膜局部干涸条件下的实验与模型
P. Zhang, R. Chen, G. H. Su, W. Tian, S. Qiu, “Experimental investigation and modeling of falling film heat transfer on partial dry-out condition,” *Applied Thermal Engineering* 229 (2023), 120550.
来源：https://www.sciencedirect.com/science/article/pii/S1359431123005793

摘要明确：
- 进行水平铜管降膜实验，强调局部干涸；
- 使用红外设备测量液体覆盖率；
- 基于三维管壁导热模型求取润湿区域换热系数；
- 基于守恒方程建立一般降膜换热模型，考虑液体覆盖率、气液界面蒸发与液体过冷；
- 使用多组实验数据验证模型，并声称可预测全润湿/干涸、对流/沸腾以及不同工质条件。

方法编码：M1=强；M2=中等（守恒模型/界面闭合，尚未确认新解析约化）；M3=未确认新数值算法；M4=强（多组实验验证）；M5=支持（统一模型覆盖多种状态）。
意义：这是直接反驳“俄罗斯才有机理模型”的强反例。其研究对象与 ITP 降膜沸腾/干涸相关，但并非完全同一工况；可作为邻近题方法对照，不能直接判定优劣。

### CN-2024A：微结构表面液膜沸腾的传热模型
P. Li, Q. Zou, X. Liu, R. Yang, “A heat transfer model for liquid film boiling on micro-structured surfaces,” *National Science Review* 11(5) (2024), nwae090. DOI: 10.1093/nsr/nwae090.
开放全文：https://pmc.ncbi.nlm.nih.gov/articles/PMC11020273/

该研究构建热—流体模型，同时考虑毛细芯顶部蒸发与芯内核态沸腾，以预测换热系数 HTC 与临界热流 CHF；用微液层蒸发理论描述核态沸腾，并提出用于表征微液层面积随热流变化的统一尺度因子，在不同微结构表面数据上评估模型适用性。

方法编码：M1=强；M2=中等到强（机理模型与统一尺度关系，但需要阅读全文确认推导完整性）；M3=未确认独立新数值算法；M4=摘要支持模型与多种结构对比，精确误差/独立验证范围需正文审计；M5=支持（同时预测 HTC/CHF、跨结构预测）。
意义：这是一项面向高功率电子热管理的中国机理建模研究，直接说明复杂相变模型与热管理应用在中国研究中同样存在。它与俄罗斯液氮降膜工况不完全同题，但足以作为反对国家刻板二分的关键对照。

### CN-2024B：临界热流附近液汽行为的实验与理论模型
H. Liu et al., “Experimental and theoretical study on liquid-vapor behavior characteristics near CHF,” *International Journal of Thermal Sciences* 198 (2024), 108879. DOI: 10.1016/j.ijthermalsci.2024.108879.
来源：https://scholars.cityu.edu.hk/en/publications/experimental-and-theoretical-study-on-liquid-vapor-behavior-chara/

摘要报告：通过高速可视化观察临界热流附近的液膜、蒸汽层与液芯结构；基于分离流模型与失稳分析，建立蒸汽层厚度、界面波长和最大液膜厚度的预测模型，并报告相对实验的 MAE 分别约为 16.9%、12.8%、26.1%。
意义：在“实验—失稳分析—可量化预测误差”的链条上，中国团队也有明确案例。需要全文确认理论假设与样本覆盖，但不能忽略此反例。

## 5. 方法审计矩阵（仅按当前可见摘要/官方材料）

| Paper | M1 方程/闭合 | M2 新理论推导 | M3 数值方法创新 | M4 实验/误差验证 | M5 新机制/预测 | 当前解读 |
|---|---|---|---|---|---|---|
| RU-ITP-2014A 实验沸腾/危机 | OPEN | OPEN | N/A | 强 | 支持 | 强实验机理证据，不是理论创新证据 |
| RU-ITP-2017A 降膜非稳态模型 | 支持 | OPEN | 中等/待全文 | 支持 | 支持 | 模型—预测—实验闭环候选 |
| RU-ITP-2014B 再润湿 | 部分 | OPEN | OPEN | 支持 | 支持 | 实验与模拟结合 |
| RU-TPU-2015A 单滴蒸发 | OPEN | OPEN | OPEN | OPEN | 部分 | 数值参数研究，不能代表解析解主张 |
| CN-2023 降膜干涸模型 | 强 | 部分/OPEN | OPEN | 强 | 支持 | 守恒方程、界面蒸发、覆盖率和多工况验证 |
| CN-2024A 微结构液膜沸腾 | 强 | 部分/OPEN | OPEN | 部分/待全文 | 支持 | 面向电子热管理的机理模型 |
| CN-2024B CHF 附近液汽行为 | 强（分离流模型） | 支持失稳分析 | OPEN | 强/报告 MAE | 支持 | 理论模型、失稳与定量误差链 |

## 6. 当前洞察更新

1. **俄罗斯 ITP 的强项候选更像“复杂瞬态相变现象的实验识别 + 模型构建/数值模拟 + 实验对照”。** 目前这条证据链比“数学物理排名”更有说服力。
2. **TSU 的已审计样本更偏长期热流数值建模和数值方法比较。** 这有方法积累，但现阶段不应称为纯理论或全国领先。
3. **TPU 的解析解能力目前只被实验室层面声明确认；本轮选到的 2015 单滴论文是数值研究，不能替代解析论文审计。**
4. **中国存在明确的同题/邻近题机理模型反例**，包括降膜干涸守恒模型、微结构液膜沸腾模型、临界热流附近失稳分析与定量误差评估。因此“俄罗斯理论、中国工程”的二分法不能成立为当前结论。
5. 当前可支持的是若干俄罗斯团队具有模型—实验结合的研究能力；国家层面数学物理方法强弱仍 NOT EVALUABLE。需进一步控制物理工况、论文年代、团队规模与实验设施差异。

## 7. 下一轮

1. 从 TPU 实验室列出的解析解论文中，补选 2 篇真正给出解析推导的原文，区分闭式解、半解析解、近似关系与经验相关式。
2. 获取 RU-ITP-2017A 全文，审计模型方程、闭合假设、边界条件、网格/时间步敏感性、实验数据独立性与误差来源。
3. 读取 CN-2023、CN-2024A、CN-2024B 正文，统一用 M1–M5 编码，不用摘要直接定最终评分。
4. 最后按“同物理机制 + 同数学任务”形成匹配对照，而不是比较国家总量或排名。

## 8. 来源清单

- RU-ITP-2014A: https://www.sciencedirect.com/science/article/abs/pii/S0017931014002397
- RU-ITP-2017A: https://eld.bl.uk/catalog/100039226151_0x000001
- RU-ITP-2014B: https://www.mathnet.ru/eng/tvt1196
- RU-TPU-2015A: https://vufind.lib.tpu.ru/vufind/Record/639614
- TPU lab: https://hmtslab.tpu.ru/en/research/
- CN-2023: https://www.sciencedirect.com/science/article/pii/S1359431123005793
- CN-2024A: https://pmc.ncbi.nlm.nih.gov/articles/PMC11020273/
- CN-2024B: https://scholars.cityu.edu.hk/en/publications/experimental-and-theoretical-study-on-liquid-vapor-behavior-chara/
