# 第十二轮｜2021—2026 俄中液膜稳定性研究：原始全文方法比较与新近研究谱系（2026-10-23）

status: NEW_PRIMARY_METHOD_EVIDENCE / RUSSIAN_2023_FULL_TEXT_READ / CHINESE_2024_WEB_FULL_TEXT_READ / NO_PHONE_PROOF / NO_PORTFOLIO_CHANGE

## 一、研究目标与范围

本轮延续用户最新指示：**2021—2026 年研究是主比较样本；2011 年以前研究仅作历史背景，不再专门深读。** 本轮对俄罗斯 2023 年原始 PDF 与中国 2024 年全文可读原始研究做控制方程、模型简化、稳定性问题、验证方式和迁移边界的同维度审计；俄罗斯 2024/2025 年相关后续文献补充研究谱系。任何 2016 年以前论文只是引用/方法前史，不纳入比较分母。

中心假设不是预定“俄方更强”，而是寻找**俄罗斯团队在明确物理假设下构造精确流动基态、发展谱稳定性预测并给出临界边界的可辨识研究特色**；对中国采用强对照，不允许因俄方 PDF 更易获得或解的形式不同而推断中国数学物理能力较弱。

## 二、俄罗斯 2023：取得原始 13 页 PDF 并核对核心数学结构（本轮真正新增）

**论文**：V. B. Bekezhanova, I. A. Shefer, “Influence of the liquid layer thickness on the stability of a plane-parallel flow in a two-phase system with evaporation,” *Computational Continuum Mechanics* 16(2):219–231 (2023), DOI **10.7242/1999-6691/2023.16.2.19**。研究机构：Institute of Computational Modeling SB RAS（ICM）和 Siberian Federal University。期刊正文 **PDF 13 页**：https://journal.permsc.ru/index.php/ccm/en/article/view/CCMv16n2a19/2161；期刊摘要：https://journal.permsc.ru/index.php/ccm/en/article/view/CCMv16n2a19。

**本轮实际读到的正文证据**：

1. 前言对比直接多相数值模拟与保留连续介质方程对称性的精确解路线，指出后者有望便于分析参数机制和边界；这是作者提出的方法目的，**不等于经过客观测速证明优于所有 CFD**（PDF 第 2 页）。
2. 基态是两层液体/气-蒸汽模型，气相热扩散、蒸发界面条件和温度/质量输运；正文定义壁面与界面边界，气层给定流量作为闭合条件（PDF 第 3—4 页）。这不是只有单层温度扩散的经验模型。
3. 论文明确限制所考虑的相变通量为**扩散传质**，没有把界面穿越的对流质量通量和界面形变完整加入模型。PDF 第 4 页指出“只考虑通过界面的扩散质量传递；不考虑对流质量传递”，故运动学条件被简化。这个限制对于手机密封 VC 迁移尤其重要。
4. **扰动与谱问题：** PDF 第 7 页将平面/空间正则模态写为 exp[i(α_x ξ + α_z ζ − λ τ)] 的形式；α_x/α_z 为方向波数，λ 为复特征量。随后给出两相各自的线性幅值 ODE 系统（文中式 (9)、(10)）、壁面条件式 (11)、不形变界面上的耦合边界条件式 (12)。这意味着“精确基态→线性化→带界面条件的谱问题”链条已由**实际公式**确认，而不是仅基于摘要。
5. **数值谱解：** PDF 第 8 页明确说问题对 λ 构成谱问题，并采用**正交化方法（orthogonalization method）**求解。结果显示中性稳定曲线随液层厚度变化，且产生振荡不稳定；论文展示不同厚度的相速度与扰动流型（PDF 第 8—9 页，图 4/5、表 2）。
6. **具体机理输出：** 随液层增厚，基态由纯热毛细流转向混合或 Poiseuille 型流；质量传递特征变化，稳定性阈值和危险模态改变。其数学物理贡献是“明确的条件→可计算的不稳定边界与模式分类”，不是整机温降百分比。

**新的证据升级：** RU23 不再是单纯 “publisher abstract verified”。现在能声明：**论文控制方程、关键模型边界、扰动 ansatz、式 (9)—(12) 的谱问题和采用正交化求解的文本已在原始 13 页全文中直接见到**。但**本轮未独立复算**谱根、全部中性曲线或全部数值结果，也未对 PDF 做独立符号计算校验。可以标“全文方法级审计”，不可标“公式和数值全部复现”。

## 三、中国 2024：三维长波薄膜方程、线性稳定性、非线性破裂

**论文**：Weiyang Jiang, Ruiqi Huang, Qiang Yang, Zijing Ding, “Three-Dimensional Long-Wave Instability of an Evaporation/Condensation Film,” *Fluids* 9(6):143 (2024)，DOI **10.3390/fluids9060143**，2024-06-14；作者机构包括 Harbin Institute of Technology 和 Institute of Mechanics CAS。全文/公式网页：https://www.mdpi.com/2311-5521/9/6/143。

**原文公开可核查的方法链**：

1. 研究三维蒸发/凝结液膜在受热或受冷倾斜平面上的流动；液体满足不可压缩连续性方程、动量 Navier–Stokes 与能量方程（式 (2)—(4)），固壁给定无滑移与固定温度。
2. 在气液界面考虑质量守恒、应力平衡、热量平衡与相变动力学条件。文中使用较复杂的相变边界条件，而非简单 Hertz–Knudsen–Langmuir 闭合。这意味着该论文亦重视界面物理基础，不能称其“纯经验 CFD”。
3. 用膜厚/水平尺度比 ε=h₀/l 作长波渐近（文中展示 ε=0.2 的典型设置）、将速度/温度/压力/质量通量在 ε 上展开（式 (21)—(27)），得到低维非线性膜厚演化方程。
4. 同时研究线性扰动的增长率/色散关系与二维/三维非线性演化。公开正文给出 leading-order 色散关系（式 (68)）及关键简化工况的非线性膜厚演化（式 (71)）。
5. 结果分离了**蒸汽反冲 (vapor recoil)** 与**有效压力 (effective pressure)** 对失稳的不同作用：展向扰动可强化蒸汽反冲的致不稳定影响；有效压力在其工况下可稳定并推迟膜破裂；界面能量输运可改变线性波速而稳定性作用有限。
6. 还推导自相似破裂尺度：蒸发主导时最小膜厚随剩余时间约按 (t_r−t)^(1/2) 缩减，反冲主导时约按 (t_r−t)^(1/3) 缩减。**这是明确的数学预测输出**，不能以“只会数值模拟”描述这篇中方论文。

**证据边界**：网页/搜索可读取完整方法与公式内容，但网站直接打开可能受 429 限流；本轮未独立复算所有渐近步骤，亦不应将固定斜板上的开放液膜断裂规律移植为密闭铜-水手机 VC 的寿命结论。

## 四、俄中同维度对照（新结论）

| 对照维度 | RU23 Bekezhanova/Shefer | CN24 Jiang 等 | 可成立的解释 |
|---|---|---|---|
| 物理对象 | 水平通道内液相与载气/蒸汽双层流，界面有扩散型蒸发 | 倾斜受热/冷固壁上的三维开放蒸发/凝结液膜 | **不是同一装置**，不能按数值或数学公式长度排名 |
| 方程起点 | 双层 Oberbeck–Boussinesq、热量/蒸汽输运与界面条件 | 不可压缩 Navier–Stokes、热量方程、相变界面守恒/动力学边界 | 两边都有扎实的连续介质物理 |
| 主要简化 | 特定部分不变**精确基态**，平直不可变形界面 | **长波渐近** ε 展开，允许膜厚和界面随时间与空间变化 | 数学方法侧重点有区别，而非哪边更有数学能力 |
| 稳定性问题 | 基态 normal modes→两相线性谱 ODE/界面耦合边界→中性曲线 | 低维演化方程→色散增长率、三维扰动→非线性膜破裂 | RU23 较强调临界失稳谱/模态；CN24 同时处理线性与非线性形态演化 |
| 能解释的变量 | 液层厚度、热负荷、气相流动改变流型/失稳阈值、相速度 | 蒸发、反冲、有效压力、三维展向扰动与断膜幂律 | 各自有可检验的机理预测 |
| 试验验证 | 与已有热物理实验的失稳形态定性一致的论文报告 | 主要是数学推导和数值/解析推演 | 此两篇本身不构成同平台定量验证胜负 |
| 可迁移到手机吗 | 需解决封闭环境、真实 VC 界面形变、毛细回流与材料/传感等差异 | 需解决薄膜假设、真实 wick、多孔介质、封装及热源/工质差异 | 当前均属于方法参考，而非手机器件成果 |

**核心结论**：俄罗斯 RU23 的“精确基态与谱阈值一体化”已获得比前几轮更强的**原始公式级方法证据**。但 CN24 证明中国近期也能完成一套深入的“守恒方程→界面动力学→三维长波约化→线性/非线性演化→断膜尺度预测”数学物理分析。最可信的差异是**问题和方法选择**，不是“俄罗斯理论普遍更强、中国主要做工程”。

## 五、俄罗斯 2024/2025 第二条非线性演化研究线：避免单团队偏差

**俄方 2024：** L. A. Prokudina, “Simulation of the evolution of disturbances in an evaporating liquid film,” *Russian Journal of Cybernetics* 5(4):81–87 (2024)，DOI **10.51790/2712-9942-2024-5-4-11**，South Ural State University。MathNet 原始书目/摘要：https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper。摘要确认：包含表面张力、热毛细、蒸发项的四阶非线性 PDE，利用差分方案研究中等 Reynolds 数下 Marangoni 不稳定以及膜表面扰动发展。**目前仅摘要/书目，全文未在本轮完成公式核对**。

**俄方 2025 新增：** L. A. Prokudina, “Simulation of the long-term nonlinear evolution and interaction of disturbances in a liquid film,” *Russian Journal of Cybernetics* 6(4):101–105 (2025)，MathNet：https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper。期刊摘要明确：狭带波包包络的非线性抛物方程，系数与增长率、频率及其导数相关；研究增长率极值附近的扰动演化与中性点附近的阻尼。它补充第二条团队的**2024→2025 近期延续证据**。

**重要去重**：Prokudina 2024 和 2025 是同一作者研究线两篇相关方法/问题研究，不能据此宣布“两所独立强团队”或“2025 全新理论”。若无全文贡献比对，应记录为“2024 非线性液膜 PDE → 2025 波包包络/长时间演化”的**研究谱系候选**。

## 六、新增全球强对照与跨论文验证方向

2026 年 *International Journal of Heat and Mass Transfer* 的 “Thermocapillary convection and interface deformation in evaporating liquid films on a structured surface”，DOI **10.1016/j.ijheatmasstransfer.2026.128633**，公开报告通过 chromatic-confocal line sensor 和 Schlieren 影像测量 HFE-7100 及 HFE-7100/HFE-7500 在正弦结构铜壁上蒸发时的界面形变，并与长波理论比较。它提供**国际同类液膜方程与实验配对的参考类型**，但作者国籍/中俄归属未在本轮核实，因此单列 GLOBAL，不归为中国或俄罗斯证据。

关键点：如果我们要声称俄罗斯的数学物理方法会降低实验次数、提高阈值预测准确度，必须寻找**在相同物理对象、相同可测变量和已标定不确定性下**的预测对照，而不是仅比较推导的繁简。

## 七、本轮确立的研究判断和下一步

### 可以提升置信度的命题
1. **特定俄罗斯团队具有较强、持续的数学物理方法特色：支持度进一步增强。** RU23 全文公式确认部分不变精确基态、界面扰动/耦合谱问题以及正交化数值求谱；Prokudina 的 2024—2025 论文说明另一研究单位在非线性膜演化方面有延续。
2. **俄罗斯相对中国的“独占数学物理能力”主张继续不成立。** CN24 在同类物理现象上做了三维长波、非线性演化、自相似断膜规律等深入推导。
3. **俄罗斯与中国的方法差异更具体**：俄方 RU23 的解释目标侧重精确基态与临界扰动谱；中方 CN24 侧重可形变膜厚的三维非线性与破裂尺度。两篇题目/边界不同，尚不能升级为国家级普遍性比例差异。
4. **产品迁移仍为 RESERVE**：没有看到俄方数学方法对手机封闭、铜-水、毛细吸液芯的 Qmax、热阻、保护阈值等提供同平台额外预测。

### 下一轮最有价值的动作
- 获取 RU24 与 RU25 Prokudina 原始全文，比较控制方程、四阶 PDE 与波包包络近似的关系，确定是新方程、尺度约化还是相同问题扩展；
- 寻找 2021—2026 年中国更加**严格的同题**精确基态+normal-mode 谱稳定性论文，确保强对照不是只用 long-wave 另一类问题代替；
- 给出可以跨方法比较的“同问题预测契约”：模型输入、输出/阈值、参考测量、计算成本、误差与适用区间，进而评估哪种方法值得手机 UTVC 辅助验证；
- 不进行 2011 年以前旧模型深读；不增加没有贡献去重的论文数量；
- 不改变 P1 Kutateladze、P2 MPEI、TPU HOLD 和数学建模 RESERVE 既有正式投资优先级。

## 附：本轮可核查原始来源
- RU23 journal and PDF: https://journal.permsc.ru/index.php/ccm/en/article/view/CCMv16n2a19 ; https://journal.permsc.ru/index.php/ccm/en/article/view/CCMv16n2a19/2161
- CN24 original: https://www.mdpi.com/2311-5521/9/6/143 ; DOI 10.3390/fluids9060143
- RU24 Prokudina: https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper
- RU25 Prokudina: https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper
- Global 2026 mechanism/experiment: https://www.sciencedirect.com/science/article/pii/S0017931026003091
