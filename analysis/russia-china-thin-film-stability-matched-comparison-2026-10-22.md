# 首个对照专题：俄罗斯与中国的薄膜蒸发、热毛细流动和界面稳定性研究

- 日期：2026-10-22
- 状态：FIRST-PASS MATCHED-TOPIC REVIEW / NOT A COUNTRY-WIDE RANKING
- 研究目标：在同一物理问题族内比较数学建模方法、推导深度、机理预测和验证方式。
- 本文与主审计的关系：配套文件 `analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md`。
- 证据原则：使用已核验的论文深读与出版页信息；摘要级证据和全文级证据明确区分。

---

## 1. 为什么选择这个专题作为第一组对照

薄膜蒸发/冷凝、热毛细流动和界面稳定性，是当前中俄双方都有明确论文积累的研究问题族。它比“所有热管理论文”更适合先做方法对照，因为两边都研究：
- 温度和浓度梯度导致的表面张力变化；
- 蒸发/冷凝引起的界面运动；
- 流动、传热、传质之间的耦合；
- 扰动增长、稳定性阈值、液膜破裂或流型转变；
- 控制参数如何改变临界状态。

但它仍然不是一个完全同质的样本：俄罗斯有较突出的开放气液双层通道、共流气体和群不变精确解研究；中国部分样本则包括双自由面液层、环形液池、可蒸发薄膜和非线性薄膜破裂。因此，以下属于“同一物理问题族的配对审查”，不是同一装置的直接性能对比。

---

## 2. 俄罗斯研究线：现有证据具体显示什么

### RU-1. Bekezhanova / Goncharova：蒸发对流的精确解研究线

代表文献：
- V. B. Bekezhanova, O. N. Goncharova, “Analysis of the exact solution for the evaporative convection problem and properties of the characteristic perturbations,” *International Journal of Thermal Sciences*, 2018. DOI: 10.1016/j.ijthermalsci.2018.05.001.
- V. B. Bekezhanova, I. V. Stepanova, “Mathematical modeling of concentration influence on evaporative convection in a bilayer system of binary mixtures,” *International Journal of Heat and Fluid Flow*, 2024. DOI: 10.1016/j.ijheatfluidflow.2024.109385.
- V. B. Bekezhanova, O. N. Goncharova, “On One Exact Solution of an Evaporative Convection Problem with the Dirichlet Boundary Conditions,” *Journal of Siberian Federal University. Mathematics & Physics*, 17(2), 207–219 (2024), EDN: GTRJTD.
- V. B. Bekezhanova, O. N. Goncharova, “Application of a Partially Invariant Exact Solution ... for Studying the Instability of an Evaporative Flow in a Channel Heated from Above,” *Symmetry* (2023), DOI: 10.3390/sym15071447.

出版页和可访问全文显示，该研究线以热/溶质对流控制方程、Oberbeck–Boussinesq 近似、液气两层界面、蒸发传质和共流气体为对象，利用部分不变/群性质精确解构造基态，再研究热负载、层厚、组分浓度、气体流量与稳定性特征的关系。2023 年论文进一步将精确基态用于谱线性稳定性分析，给出中性稳定曲线、临界参数和振荡胞状扰动。

**可确认的数学物理特征：**
1. 先构造明确的方程和边界值问题，而不是只用输入/输出数据拟合温度。
2. 使用精确解/部分不变解将耦合物理问题化为可解释的基态。
3. 在基态上进行谱稳定性分析，输出临界条件和最危险扰动。
4. 研究参数如何改变蒸发率、速度/温度/浓度场和失稳状态。
5. 部分论文报告与实验数据比较，但各论文的验证精度、完整参数范围和不确定度必须逐篇检查。

**边界：** 这些工作主要针对开放或狭缝通道中的蒸发液气双层流，不是手机密封超薄均热板。数学方法的价值是机制理解、稳定性边界和实验设计，不等于直接手机预测能力。

### RU-2. ICM / Altai 的精确模型当前贡献

现有 deep read 对 2026 年模型的判断是：精确解能给出耦合蒸发、气体泵送、热/质传递的可解释参数关系，并可用整体流量条件反推其他运行参数；但完整全文细节与量化预测误差在现有审阅路径中未全部复核。因此，不能把“精确解存在”直接转换成“模型比中国模型更准确”。

---

## 3. 中国研究线：同样存在数学物理和稳定性研究

### CN-1. Zhao Chengzhuo / Hu Kaixin：双自由面溶质—热毛细液层稳定性

- 题目： “Instability in the solutal-thermocapillary liquid layer with two free surface.”
- 期刊：*Chinese Journal of Theoretical and Applied Mechanics*, 54(2), 291–300 (2022).
- DOI: 10.6052/0459-1879-21-148.
- 单位：宁波大学机械工程与力学学院。

期刊页面摘要显示，研究采用线性稳定性理论，得到临界 Marangoni 数与 Prandtl 数的关系，分析临界模态的流场和能量机制。研究区分了不同的流向/斜向/展向模态，并指出扰动动能的主要来源为表面张力做功，溶质毛细力和热毛细力的作用符号随参数改变。

**这是一项明确的数学物理研究，而非“实验后用仿真验证”即可概括的工程工作。** 它与俄罗斯的热/溶质毛细稳定性在物理机制上相近，但几何和挥发边界条件不同，不能直接作数值胜负比较。

### CN-2. Chen Qisheng / He Meng / Hu Kaixin：中国科学院力学研究所的热毛细线性稳定性

- 题目：“Linear Stability Analysis of Thermocapillary Convection in Annular Pools.”
- 期刊：*Chinese Journal of Space Science*, 36(4), 476–480 (2016).
- DOI: 10.11728/cjss2016.04.476.
- 单位：中国科学院力学研究所微重力重点实验室。

出版页明确说明采用 Chebyshev 配点法研究临界状态，并通过能量分析识别表面张力在扰动能量变化中的主导作用。它包含临界 Marangoni 数、波数和振荡频率的分析。

这不是解析闭式解，与俄罗斯的部分不变精确解路线不同；但它是正式稳定性理论、谱数值方法与物理能量机制分析的直接证据。它足以否定“中方没有严密稳定性研究”的说法。

### CN-3. Zheng Sheng / Hu Kaixin：非模态稳定性分析

- 题目：“Non-modal Stability Analysis of Thermocapillary Liquid Layers.”
- 期刊：*Chinese Journal of Space Science*, 42(2), 270–276 (2022).
- DOI: 10.11728/cjss2022.02.201104097.
- 单位：宁波大学机械工程与力学学院。

公开期刊摘要显示，研究采用非模态稳定性方法，分析亚临界热毛细液层对初始扰动和外部激励的敏感性，并给出扰动放大与 Reynolds/Prandtl 数关系。这说明中国研究不只关注常规特征值稳定性，也研究瞬态扰动放大。

### CN-4. Li Zhen 等：蒸发超薄液膜的润湿/破裂动力学

- 题目：“Effects of elasticity of substrate on dewetting process of evaporating ultra-thin liquid film.”
- 期刊：*Chinese Journal of Theoretical and Applied Mechanics*, 43(4), 699–706 (2011).
- DOI: 10.6052/0459-1879-2011-4-lxxb2010-459.
- 单位：上海大学应用数学和力学研究所。

论文从长波近似推导液膜厚度演化方程，结合线性稳定性分析和数值模拟研究基底弹性、范德华力与蒸发对扰动增长和液膜破裂的影响。它是较早的中国理论样本，能证明该研究类型在中国存在，但不能单独代表当代中国的研究分布。

### CN-5. 中国三维非线性蒸发/冷凝液膜稳定性

- 题目：“Three-Dimensional Long-Wave Instability of an Evaporation/Condensation Film.”
- 期刊：*Fluids*, 9(6), 143 (2024).
- DOI: 10.3390/fluids9060143.

已完成的仓库 deep read 记录显示，该研究建立三维非线性长波演化模型，研究蒸汽反冲、有效压力、重力、界面能量输运、跨向扰动和非线性破裂动力学，并给出不同主导机制下的自相似膜厚标度关系。它是反驳“严密的非线性界面数学只有俄罗斯在做”的直接对照。

**边界：** 这篇论文与俄罗斯精确解的数学方法不同：中方侧重非线性长波演化、三维扰动与破裂；俄方侧重精确基态和稳定性边界。二者都属于机理建模，不能简单用“解析解比数值演化更高级”排序。

---

## 4. 第一组对照矩阵

| 方法维度 | 俄罗斯精确蒸发对流线 | 中国稳定性/薄膜线 | 初步判断 |
|---|---|---|---|
| 控制方程与物理机制 | 有明确的热/溶质对流、传热传质、界面蒸发和边界值问题 | 同样有热毛细、溶质毛细、液膜演化、界面力和相变模型 | 双方均有物理机理建模 |
| 解析解 / 部分不变解 | 当前俄罗斯代表研究线的鲜明方法标签 | 已检索到中国解析/渐近解研究，但尚未发现与俄方完全同题、同边界条件的等价方法链 | 俄罗斯可能在此窄方法谱系上更集中；尚不能说整体数学能力更强 |
| 线性稳定性 | 精确基态上进行谱稳定性分析，构造中性曲线和危险模态 | 有 Chebyshev 谱方法、临界 Marangoni 数、能量分析和不同模态分类 | 双方都有正式稳定性理论 |
| 非模态/非线性动力学 | 当前核心俄罗斯样本强调精确基态、稳定边界和流型/失效机制 | 中国候选包含非模态扰动放大、三维非线性演化和破裂标度 | 中国在相邻理论方法上并不弱；需扩充俄罗斯对应样本后再比较分布 |
| 理论—实验关系 | 部分俄方精确模型有实验比较或历史理论—实验联系；逐篇误差需补齐 | 部分中国论文以理论/数值为主，另有其他中国热管理研究具备模型—实验—器件闭环 | 不能将理论论文未做实验简单视为弱项，也不能假设俄方验证更充分 |
| 手机/UTVC 工程相关性 | 当前精确解几何和边界与密封 UTVC 有明显差异 | 中国/国际另有面向 UTVC 的半解析模型、器件结构与工程研究 | 手机工程相关性必须另行评估，不可从数学复杂度直接推出 |

---

## 5. 当前最可靠的判断

### 可以成立的判断

1. 俄罗斯 ICM / Altai 研究线确实存在持续的精确解/部分不变解、蒸发对流和稳定性边界研究；这是具体且可描述的方法积累。
2. 中国也存在明确的数学物理研究，包括线性/非模态稳定性、长波演化方程、渐近/解析方法、三维非线性界面动力学与能量分析。
3. 两国研究路线在方法分布上可能不同：当前俄罗斯核心样本更集中于精确/部分不变解与稳定性边界；当前中国候选样本覆盖多种稳定性和薄膜动力学方法。
4. 若要识别俄罗斯的差异化价值，最值得检验的不是“俄罗斯有没有数学物理”，而是精确解谱系是否提供了中国对应模型未提供的解释、边界预测或实验设计增量。

### 不能成立的判断

- “中国热管理研究基本不做严密数学物理推导。”
- “中国主要是实验、工程，再用数值仿真验证。”
- “俄罗斯整体数学物理能力强于中国。”
- “解析解天然比数值模型更严密或更有预测力。”
- “俄罗斯数学物理更强，所以手机热管理产品也会更强。”

### 下一步要回答的关键问题

对俄罗斯与中国核心论文使用统一编码，进一步确认：
- 俄罗斯的精确/部分不变解是否是少数团队的研究谱系特征，还是在更广的机构范围内具有代表性；
- 中国是否有与俄罗斯同样深度的精确解/群不变解研究，以及两者的研究问题和发表时间是否可比；
- 在双方都进行稳定性分析的论文中，模型是否给出同等可解释的阈值、模态和可证伪预测；
- 俄罗斯模型是否比中国/国际强基线更准确地预测某个边界，或减少实验点数；
- 上述差异是否对手机相关热管理具有实际价值。

**当前结论级别：METHOD-SPECIFIC SIGNAL / COUNTRY-LEVEL SUPERIORITY NOT ESTABLISHED。**

---

## 6. 原始来源清单

以下链接仅作为核验入口；主要研究内容、方法和比较意义已在正文展开。

1. Bekezhanova & Goncharova (2024), *On One Exact Solution of an Evaporative Convection Problem with the Dirichlet Boundary Conditions*, Journal of Siberian Federal University. Mathematics & Physics, 17(2), 207–219. EDN GTRJTD. 全文入口：https://www.mathnet.ru/php/getFT.phtml?jrnid=jsfu&option_lang=eng&paperid=1150&what=fullt
2. Bekezhanova & Stepanova (2024), *Mathematical modeling of concentration influence on evaporative convection in a bilayer system of binary mixtures*, DOI: https://doi.org/10.1016/j.ijheatfluidflow.2024.109385
3. Bekezhanova & Goncharova (2023), *Application of a Partially Invariant Exact Solution ...*, DOI: https://doi.org/10.3390/sym15071447
4. Zhao & Hu (2022), *Instability in the solutal-thermocapillary liquid layer with two free surface*, DOI: https://doi.org/10.6052/0459-1879-21-148
5. Chen, He & Hu (2016), *Linear Stability Analysis of Thermocapillary Convection in Annular Pools*, DOI: https://doi.org/10.11728/cjss2016.04.476
6. Zheng & Hu (2022), *Non-modal Stability Analysis of Thermocapillary Liquid Layers*, DOI: https://doi.org/10.11728/cjss2022.02.201104097
7. Li et al. (2011), *Effects of elasticity of substrate on dewetting process of evaporating ultra-thin liquid film*, DOI: https://doi.org/10.6052/0459-1879-2011-4-lxxb2010-459
8. China three-dimensional long-wave evaporation/condensation-film instability (2024), DOI: https://doi.org/10.3390/fluids9060143

---

## 7. 状态与后续工作

- [x] 已识别俄罗斯精确蒸发对流/稳定性方法谱系。
- [x] 已识别中国多条同物理问题族的稳定性、薄膜演化和解析/渐近研究线。
- [x] 已形成首轮方法对照矩阵，并明确不可作出的国家整体结论。
- [ ] 对 CN-CAND-01 至 CN-CAND-07 完成全文逐式复核与统一编码。
- [ ] 对俄罗斯 2018、2023、2024 精确解/稳定性论文补齐同等深度的全文审阅。
- [ ] 按论文谱系去重，避免将同一研究组的连续论文视为独立样本。
- [ ] 再进行两相流/临界热流与干涸机理专题的配对对照。
- [ ] 最终形成以证据分布、同领域配对和反例为基础的研究范式判断。



---

## 8. 全文核验推进：CN-1 双自由面溶质—热毛细稳定性论文（2026-10-22）

本轮进一步打开并审阅了 CN-1 的期刊全文 PDF（10 页），不再只依赖摘要。论文第 1–3 页已确认以下方法细节：

- 明确建立双自由面液层物理模型；
- 将表面张力表示为温度和浓度的函数；
- 给出无量纲连续性方程、动量方程、能量方程、传质方程及本构关系；
- 纳入 Soret 效应，说明忽略 Dufour 效应的建模假设；
- 明确给出上下自由面的应力、速度、热边界和传质边界条件；
- 构造平行剪切基本流，随后叠加正则小扰动；
- 使用模态分析/线性稳定性方法研究临界模态；
- 给出临界 Marangoni 数与 Prandtl 数的关系，并分析扰动流场与能量机制。

该论文不是只用实验结果做数值拟合，而是明确的物理方程—无量纲化—边界条件—基态—扰动/稳定性分析链条。

### CN-1 正式试编码（全文级）

| 维度 | 分数 | 依据 |
|---|---:|---|
| PHYS | 3 | 明确的动量、能量、传质方程、表面张力关系和边界条件 |
| MATH | 3 | 无量纲建模、基本流构造、线性模态稳定性分析 |
| MECH | 3 | 区分热毛细与溶质毛细作用，并以能量分析解释扰动增长机制 |
| PRED | 3 | 给出临界 Marangoni/Prandtl 关系和临界模态；这些预测在其模型假设内可检验 |
| VALID | 0（该论文范围内） | 本文核心是理论稳定性分析；当前全文审阅未发现对该特定模型的独立实验验证。0 只表示本篇论文未展示此类验证，不表示论文质量低 |
| TRANS | 0 | 研究对象是双自由面液层，不是封闭手机 VC 或手机器件原型 |
| EVID | 全文级 | 已打开期刊提供的全文 PDF，并检查模型、方程、边界条件与方法章节 |

### 与俄罗斯 PAPER-RU-MODEL-002 的比较

| 维度 | 俄罗斯：PAPER-RU-MODEL-002 | 中国：CN-1 | 当前解释 |
|---|---|---|---|
| 物理问题 | 乙醇—空气等挥发性液体/气体双层通道，含蒸发、气体共流与热/溶质耦合 | 双自由面溶质—热毛细液层，研究表面张力梯度驱动的流动稳定性 | 物理边界不同，不能作为完全匹配样本 |
| 理论基础 | 热/溶质对流方程，部分不变精确基态 | 无量纲控制方程、双自由面边界条件、平行剪切基态 | 双方均从物理方程和边界条件出发 |
| 数学方法 | 部分不变精确解 + 谱线性稳定性 | 线性模态稳定性 + 能量分析 | 俄方方法特色在精确基态；中方方法也有严格稳定性分析 |
| 可解释输出 | 中性稳定曲线、临界参数、振荡胞状模态 | 临界 Marangoni/Prandtl 关系、临界模态、扰动能量机制 | 双方均能产生可解释的稳定性结果 |
| 独立实验 | 当前论文深读未确认本篇完成同条件独立实验验证 | 本篇全文主要是理论分析，未确认独立实验验证 | 当前均不能因理论深度就宣称已验证手机预测 |
| 手机迁移 | 未验证 | 未验证 | 两篇都不能直接作为手机 VC 模型 |

**这一对照的含义：** 它支持“俄罗斯有鲜明的精确解方法谱系”，但不支持“中国缺乏严密数学物理推理”。中国论文的 PHYS/MATH/MECH/PRED 维度同样达到高档，虽然所研究的物理系统和数学路线不同。

### 这一轮仍然没有回答的问题

- 中国是否有与俄罗斯相同或近似的“蒸发双层流 + 群不变精确解 + 稳定性边界”完整研究链？
- 俄罗斯精确解路线是否比中国其他理论方法更能预测临界边界，或减少实验点数？
- 这种差异是否在同一组物理方程、边界条件和验证数据上仍然存在？
- 俄罗斯该方法的持续性是否来自多个独立团队，还是集中于少数研究谱系？

这些问题需要更多同题论文和方法级全文复核，不能由这组跨几何比较直接回答。
