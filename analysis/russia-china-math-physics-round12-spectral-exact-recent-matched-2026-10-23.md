# 第十二轮｜2021—2026 中俄数学物理方法严格配对：谱稳定性、精确基态与非线性液膜（2026-10-23）

status: PUBLIC_ORIGINAL_SOURCE_MATCHED_AUDIT / PRIMARY_ABSTRACT_AND_CN24_METHODS / NO_PHONE_PROOF / NO_CANONICAL_DECISION_CHANGE

## 0. 研究目标、样本边界和本轮实质进展

用户明确停止深读 15 年前的模型。本轮主样本仅使用 **2021—2026 年原始研究**，旧论文仅可作为方法来源背景，不再进入比较分母。

这一轮最重要的纠偏：首次加入 **中国宁波大学 2022 年同类线性/非模态稳定性研究**，而不是只拿中国 2024 年非线性长波薄膜模型与俄方 2023 年线性谱分析进行不等价比较。中国存在最近期明确的临界 Marangoni 数、扰动模态、谱/非模态增长和能量收支研究；因此“俄罗斯会做谱稳定性、中国不会”已被原始来源反驳。俄罗斯仍具有特定的“**显式两层蒸发体系 + 部分不变精确基态 + 气相热扩散 + normal-mode 稳定性阈值**”方法组合，并呈现跨篇团队连续性。

## 1. 原始来源与证据级别

| ID | 国家/团队 | 论文 | 此轮实际可核查内容 | 证据等级 |
|---|---|---|---|---|
| RU23-SPECTRAL | 俄罗斯 ICM SB RAS；V. B. Bekezhanova / I. A. Shefer；Shefer 另有 SFU 归属 | “Influence of the liquid layer thickness on the stability of a plane-parallel flow in a two-phase system with evaporation”, *Computational Continuum Mechanics* 16(2), 219–231 (2023), DOI **10.7242/1999-6691/2023.16.2.19**，https://journal.permsc.ru/index.php/ccm/en/article/view/CCMv16n2a19 | 原期刊全文摘要、人员单位与研究术语：Boussinesq、部分不变精确基态、气相热扩散、线性 normal modes、平面/空间扰动、中性曲线及阈值、厚度变动导致振荡失稳；作者报告预测形态与热物理实验一致 | **出版商摘要级**；站点提供俄文 PDF，但本轮未审全套谱算子/求根 |
| RU23-3D | 俄罗斯 Altai State University + ICM，O. N. Goncharova | “Three-dimensional convection regimes in a two-layer system with evaporation for different types of thermal loads on a substrate”, *Computational Continuum Mechanics* 16(2) (2023), DOI **10.7242/1999-6691/2023.16.2.17**，https://journal.permsc.ru/index.php/ccm/en/article/view/CCMv16n2a17 | 原期刊摘要：将 Ostroumov–Birikh 类型解推广到三维两层蒸发系统，通过精确解把问题约化为若干二维形式，用纵横有限差分研究不同热负载下涡旋结构、流型、温度与蒸汽浓度 | **出版商摘要级**，不能声称三维通用 DNS |
| RU24-NONLINEAR | 俄罗斯 South Ural State University，L. A. Prokudina | “Simulation of the evolution of disturbances in an evaporating liquid film”, *Russian Journal of Cybernetics* 5(4), 81–87 (2024), DOI **10.51790/2712-9942-2024-5-4-11**；https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper | 原书目/英文摘要：四阶非线性液膜演化 PDE，系数包括表面张力、热毛细与蒸发；转换成差分方程，数值研究中等 Re 下波动和 Marangoni 失稳，俄文摘要报告临界 Marangoni 数 | **原始出版摘要级**，有 PDF 链接，但尚未完成公式级核对 |
| RU24-EXACT | 俄罗斯 Altai + ICM，O. N. Goncharova | “Application of the three-dimensional Ostroumov–Birikh solution analog to describe thermocapillary flows in the presence of evaporation”, *J. Appl. Mech. Tech. Phys.* 65(5), 866–874 (2024)，DOI **10.1134/S0021894424050079**；俄文版 DOI **10.15372/PMTF202415482**；https://www.mathnet.ru/php/archive.phtml?jrnid=pmtf&option_lang=eng&paperid=9281&wshow=paper | 同一工作俄英版本：三维精确解/数值耦合；摘要报告实验与计算的蒸发质量率和热毛细应力对照 | **书目/摘要级**；俄英双版本必须去重为一个研究成果 |
| CN22-LINEAR | 中国宁波大学，赵诚卓、胡开鑫 | “双自由面溶质−热毛细液层的不稳定性”, *力学学报* 54(2), 291–300 (2022), DOI **10.6052/0459-1879-21-148**；https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-21-148?viewType=HTML | **期刊 HTML 正文/摘要可读**：线性稳定性、临界 Ma–Pr 关系、不同 η 下模态结构、流向/展向/斜波、扰动动能来源与溶质/热毛细做功的分解 | **原刊 HTML 方法/结果级**，但未逐式重建全部线性算子 |
| CN22-NONMODAL | 中国宁波大学，郑盛、胡开鑫 | “Non-modal Stability Analysis of Thermocapillary Liquid Layers”, *空间科学学报* 42(2), 270–276 (2022)，DOI **10.11728/cjss2022.02.201104097**；https://www.cjss.ac.cn/en/article/doi/10.11728/cjss2022.02.201104097 | 原刊摘要：亚临界流对初始扰动和外部激励的增长/响应函数，Pr/Re 参数、最优响应波数和速度/温度扰动放大 | **原刊摘要级**；不是蒸发双层模型，不应假装 same-rig |
| CN22-BINGHAM | 中国宁波大学，王盛、胡开鑫 | “Stability analysis of thermocapillary liquid layers with two free surfaces for a Bingham fluid”, *力学学报* 54(12), 3398–3407 (2022)，DOI **10.6052/0459-1879-22-364**；https://pubs-en.cstam.org.cn/article/doi/10.6052/0459-1879-22-364 | 原刊摘要：宾汉流体双自由面热毛细液层的线性稳定性、临界 Ma–Pr–Bingham/几何参数关系、斜波及流向模态、扰动能量来源 | **原刊摘要级**，应用背景为非牛顿聚合物/空间制造，非蒸发密封 VC |
| CN24-LONGWAVE | 中国哈尔滨工业大学、中国科学院力学研究所与国内其他单位，Jiang/Huang/Yang/Ding | “Three-Dimensional Long-Wave Instability of an Evaporation/Condensation Film”, *Fluids* 9(6), 143 (2024)，DOI **10.3390/fluids9060143**；https://www.mdpi.com/2311-5521/9/6/143 | 公开正文/数学描述：沿倾斜平面流动的三维蒸发/冷凝薄膜；基于 Benney 型长波模型推导非线性演化方程；明确考虑 effective pressure、vapor recoil、界面能量输运；分析线性失稳和非线性破裂，自相似极限的最小膜厚指数 | **原刊正文结构与摘要可核**，全文页面偶发 429；现阶段不声称重现其推导 |
| GLOBAL24-REGIME | 国际（非中俄）Mohamed/Biancofiore | “Stability analysis of volatile liquid films in different evaporation regimes”, *Physical Review Fluids* 9, 094006 (2024)，DOI **10.1103/PhysRevFluids.9.094006** | 显式两相/蒸汽扩散的近年国际方法对照 | **比较背景**；不归于中国或俄罗斯 |

## 2. 严格配对矩阵：相同技术问题不一定相同物理装置

| 方法维度 | 俄方 2023 谱稳定性 | 中方宁波 2022 线性/非模态 | 中方 2024 三维非线性膜 | 可以得出的结论 |
|---|---|---|---|---|
| 控制对象 | 液体 + 气/蒸汽双层，扩散蒸发，共流气体 | 双自由面液层，溶质/热毛细；另有宾汉流体 | 倾斜壁面降膜，蒸发/冷凝且界面可演化 | 不同物理装置和自由度，**不得比较临界 Ma 数值高低** |
| 守恒与机理 | Boussinesq 两层模型与气相热扩散 | 线性稳定性与扰动能量机制 | 质量/动量/能量与相变边界、有效压力、蒸汽反冲 | 三方均属于明确的物理机理数学建模 |
| 特征数学对象 | 部分不变精确基态 | 临界 Ma、波数、角频率、模态能量；非模态增长函数 | Benney 型非线性膜厚方程与自相似破裂律 | “理论深度”不可用单一维度排序 |
| 稳定性 | 基态上的 normal-mode 线性谱问题、中性曲线 | 线性模态 / 非模态瞬态放大，含能量机制 | 线性失稳 + 非线性演化、破裂尺度 | **中方明确有谱/非模态临界预测**，不能称俄罗斯独占 |
| 相变气相建模 | **强特色候选**：显式气/蒸汽层和热扩散 | 这些宁波样本并非同题蒸发气相模型 | 蒸发/冷凝和蒸汽反冲；并非与俄方完全相同气体输运 | 俄方特色必须限定为特定方法/装置的组合 |
| 实验和设备 | RU23 摘要报告与已知实验形态一致，无当前手机验证 | CN22 主要是数学/数值结果 | CN24 主要是数学/数值结果 | 三方都没有在本组里证明手机级 UTVC 性能 |
| 结果用途 | 流动形态、厚度相关中性曲线和阈值 | 特定热毛细液层临界模态/亚临界放大 | 预测蒸发膜失稳、破裂、自相似尺度 | 选择方法应由待预测的物理变量决定 |

## 3. 这轮需要修正的关键观点

**错误旧推论：** “中国主要做瞬态 CFD 或产品验证，所以俄罗斯在谱稳定性和中性曲线方面更强。”

**新的证据结果：** 中国宁波大学在 2022 年已从线性、非模态两个角度系统研究热毛细液层失稳，涉及临界 Marangoni 数、不同扰动模态、波数与增长/响应函数等；这直接反驳了仅把谱稳定性/临界阈值归给俄罗斯的二分判断。俄罗斯仍有扎实、连续的解析基态与稳定性研究，但必须寻找更窄且可验证的组合增量。

**俄罗斯值得保留的特点：** ICM/SFU/Altai 研究生态的 “双层蒸发控制方程 → 部分不变精确基态或结构化三维约化 → 气相热扩散/相变界面条件 → 线性稳定性/流型机制” 有多篇 2023–24 原始作品持续支撑。

**中国的近期同类强项：** 宁波大学 2022 年线性与非模态稳定性、扰动能量机制，HIT/CAS 2024 年蒸发/冷凝液膜长波非线性方程、破裂动力学。这些都属于数学物理研究，不能称中国没有机制理论。

## 4. 俄罗斯 2023/2024 同一研究谱系的贡献去重

- RU23-SPECTRAL (Bekezhanova/Shefer) 的目标是二维/空间 normal-mode 谱稳定性及阈值；RU23-3D (Goncharova) 是三维形态的精确结构与二维数值约化，属于**不同科学问题**，但共享 Ostroumov–Birikh 类方法与俄罗斯 RSF 22-11-00243 的科研生态，不可简单视为两个相互独立的俄罗斯优势机构。
- RU24-EXACT 的俄文及英文期刊 DOI 属于同一研究工作不同语种刊载，**研究贡献只计一次**。
- RU24-NONLINEAR 是南乌拉尔国立大学另一个明确机构与作者的非线性液膜计算路线，不应自动并入 ICM/SFU 学者谱系；研究对象也不同。
- 宁波 2022 三篇有共用学者胡开鑫，但分别处理溶质/热毛细模态、非模态放大和宾汉流体，应记录为**一个连续团队，三个有差异的论文/问题**，而不是三个独立中国研究机构。

## 5. 可迁移到手机热管理的窄技术任务（研究建议，不是已验证成果）

| 可能问题 | 对应数学能力 | 需要的实际输出 | 失败/降级条件 |
|---|---|---|---|
| 低剖面两相器件的失稳边界 | 解析基态、normal-mode 谱阈值 | 在与手机代理装置匹配的无量纲参数域输出临界条件与不确定性 | 俄方模型的气层/自由界面结构与密封 VC 物理机制不匹配 |
| 热周期导致的瞬态风险 | 非模态增长和相变历史 | 对不同负载历史预测亚临界瞬态放大或风险区域 | 无新增预测增益，相比国内方法不足 |
| 局部干涸与回润的判别 | 相变/毛细机理、机制标签 | 使用独立实验检查可逆/不可逆标签和阈值 | 无原始数据或标签不能稳定区分 |
| 薄膜破裂与设计裕量 | 长波演化、稳定性/破裂方程 | 复现膜厚动态与临界边界，验证尺度律 | 密闭吸液芯环境下的主导机理不同，预测无外推性 |

**关键判断：** 当前俄罗斯的方法特色较强，但是否比中国方案更擅长预测手机失效边界，必须在同物理边界和同数据条件下证明；不能直接以学校/国籍/数学公式数量决定投资优先级。

## 6. 证据等级、未完成项与后续收口

1. 已确认：俄罗斯 RU23-SPECTRAL、RU23-3D 原始期刊方法摘要；中国宁波 2022 线性/非模态/宾汉研究原刊摘要，其中 CN22-LINEAR 的期刊 HTML 实质分析可读；CN24-LONGWAVE 期刊原始数学描述；俄方 RU24-NONLINEAR 的原刊索引摘要。
2. 尚未完成：俄方 RU23 谱算子、边界行列式与中性曲线数值的逐式审计；RU24-NONLINEAR 的四阶 PDE 的完整项和数值离散核对；CN24-LONGWAVE 的各阶长波展开全文复核与数值收敛/误差；相同装置、相同参数的中俄计算 benchmark。
3. 下一轮优先：用**2021—26 中国近期原始论文**继续寻找双层气液蒸发/精确基态同题强反例，而非旧 2008 文献；对 RU23 与 CN22-CN24 进行相变/气层边界条件的准确分类；如果全文可得，优先补充公式级而不是再无限扩论文目录。
4. 不变事项：当前数学物理基础建模方向仍为 RESERVE；俄罗斯 P1 Kut mechanism-label feasibility、P2 MPEI conditional reserve、TPU HOLD 的正式决策不因本次学术方法对照改变。不存在手机真机或数据权利证明。

## 7. 能用于内部技术专家交流的阶段性结论

> **俄罗斯在热物理数学建模方面的可信特色，不是“只有俄方会做稳定性理论”，而是某些跨机构研究谱系持续使用可解释的两层蒸发精确解，将边界条件、气相输运、流型与谱稳定性阈值连接起来。** 与此同时，中国 2022 年的线性/非模态稳定性成果和 2024 年的三维非线性蒸发液膜研究表明，中国在这些数学工具及临界机制研究方面同样有较强能力。当前可以确认俄方存在值得保留和进一步匹配验证的**方法传统与专题积累**；还不能断言相对中国具有更高预测精度、更强理论研究总体水平或已可应用于手机 VC 的产品优势。
