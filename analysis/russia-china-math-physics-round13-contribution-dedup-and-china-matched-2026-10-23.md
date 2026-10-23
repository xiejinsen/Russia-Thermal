# 第十三轮｜俄罗斯近期非线性液膜研究贡献去重与中国强对照补充（2026-10-23）

**状态：** PRIMARY-PUBLISHER-METADATA-VERIFIED / ABSTRACT-LEVEL-RU24-RU25 / CHINA-PRIMARY-ARTICLE-VERIFIED / NO-COUNTRY-WIDE-RANKING / NO-PHONE-TRANSFER-PROOF

## 0. 本轮目标与边界

本轮按最新交接推进三件事：  
1. 识别 Prokudina 2024 与 2025 年液膜扰动论文的真实方法关系，避免重复计为独立理论突破；  
2. 继续核实 2021—2026 年中国强数学物理对照，尤其是临界稳定性、非模态放大和非线性液膜演化；  
3. 判断当前样本是否足以支持“俄罗斯特定研究线有方法特色”，以及仍缺什么证据。

**范围约束：** 主比较样本优先 2021—2026 年；2011 年以前论文不重新进入主要样本或逐式深读。旧论文只可作为方法谱系背景。此次对 RU24/RU25 的判断以原刊页面和摘要为主，虽两篇均提供全文 PDF 入口，但本轮尚未完成 PDF 逐式审阅，不能称“全文公式级审计已完成”。

## 1. 俄罗斯 Prokudina 2024 与 2025：书目和方法关系已核实

### 1.1 RU24：蒸发液膜自由表面非线性演化

- **论文：** L. A. Prokudina, “Simulation of the evolution of disturbances in an evaporating liquid film.”
- **期刊：** *Russian Journal of Cybernetics*, 5(4), 81–87 (2024).
- **DOI：** 10.51790/2712-9942-2024-5-4-11.
- **机构：** South Ural State University, Chelyabinsk, Russian Federation.
- **原刊记录与 PDF：** https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper ; https://www.mathnet.ru/links/681f0b700dcafe8450494362e49022c8/uk181.pdf

**摘要可确认的方法：**
- 研究重力驱动、具有热质交换的黏性液膜自由表面；
- 建立包含空间导数与时间导数的非线性四阶偏微分方程；
- 模型系数纳入表面张力、热毛细力和蒸发效应；
- 将连续模型转换为差分方程，并设计中等 Reynolds 数下的数值算法；
- 通过计算实验研究水膜扰动的非线性演化、Marangoni 失稳区域和液膜破裂相关的临界 Marangoni 数。

**正确定位：** 这是以自由表面高度/状态演化为目标的非线性液膜 PDE 与数值演化工作。当前证据确认模型类别、关键物理项与摘要报告的输出；具体 PDE 的全部系数、离散格式、稳定性/收敛测试和临界值复现仍需全文核验。

### 1.2 RU25：窄带波包包络的长期非线性演化

- **论文：** L. A. Prokudina, “Simulation of the long-term nonlinear evolution and interaction of disturbances in a liquid film.”
- **期刊：** *Russian Journal of Cybernetics*, 6(4), 101–105 (2025).
- **原刊记录：** https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper
- **俄文原刊记录：** https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=rus&paperid=257&wshow=paper
- **机构：** South Ural State University, Chelyabinsk, Russian Federation.
- 原刊页面提供 276 kB 全文 PDF 入口；本轮已核实摘要与书目信息，尚未逐式审读 PDF。

**摘要可确认的方法：**
- 将窄带波包的包络振幅写成一个非线性抛物型方程；
- 方程系数由液膜波的增长率、频率及其一阶、二阶导数表达；
- 在液膜失稳区域计算增长率曲线的拐点及最大增长率对应波数；
- 报告最大增长率附近的非线性扰动演化机制会发生变化，且相速度在最大增长率点附近达到最小；
- 在中性稳定曲线附近激发的波包振幅会衰减。

**正确定位：** RU25 不应被当成与 RU24 完全独立的“第二项国家优势”，也不能直接说它只是同一方程的重复。根据摘要，RU24 的中心对象是带蒸发与热质交换的自由表面四阶非线性演化；RU25 的中心对象则是以线性波特征量为系数的窄带包络模型与长期波包相互作用。二者属于**同一作者/机构研究谱系中的相关但不同模型层次**。RU25 是否真正推导出新的包络闭合、其适用尺度和相对于 RU24 的新增预测能力，必须全文公式级核验后才能确定。

### 1.3 去重判断

| 项目 | RU24 | RU25 | 计数规则 |
|---|---|---|---|
| 主要状态变量 | 液膜自由表面/膜厚状态 | 窄带波包包络振幅 | 两个不同模型目标 |
| 数学对象 | 非线性四阶 PDE 与差分离散 | 非线性抛物型包络方程 | 暂记两篇相关贡献，不预判独立创新等级 |
| 主要输出 | 膜面非线性演化、失稳区、临界 Ma | 波包长期演化、增长率拐点与最大增长率行为 | 输出不同，需检查推导是否共享同一线性谱输入 |
| 作者/机构 | Prokudina / South Ural State University | Prokudina / South Ural State University | 同一研究线，不是两个独立机构证据 |
| 证据等级 | 原刊摘要/全文入口；未完成逐式审读 | 原刊摘要/全文入口；未完成逐式审读 | 不能标为全文级确认 |

此外，Prokudina 的 Math-Net 人员出版目录列有 2025、2024 两篇相关论文，也列有 2014、2016 等较早液膜扰动研究。这支持“作者持续研究液膜扰动/Marangoni 失稳”的谱系连续性，但早期成果不进入当前主要比较分母，也不应将同一作者的连续发表简单等同于独立团队数量。

## 2. 中国近期强对照：不仅有稳定性分析，也有扰动能量机制

### 2.1 宁波大学 2022：双自由面溶质—热毛细液层

- **论文：** Chengzhuo Zhao & Kaixin Hu, “Instability in the solutal-thermocapillary liquid layer with two free surface.”
- **期刊：** *Chinese Journal of Theoretical and Applied Mechanics*, 54(2), 291–300 (2022).
- **DOI：** 10.6052/0459-1879-21-148.
- **机构：** School of Mechanical Engineering and Mechanics, Ningbo University.
- **原刊 HTML：** https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-21-148?viewType=HTML
- **原刊 PDF：** https://pubs.cstam.org.cn/data/article/lxxb/preview/pdf/lxxb-2022-2-291.pdf

摘要和原刊页面确认其使用线性稳定性理论研究双自由面溶质—热毛细液层，计算临界 Marangoni 数与 Prandtl 数的关系，识别临界模态并分析能量机制。研究还区分流向波、斜波及展向稳态模态，并指出扰动动能主要由表面张力做功供给，具体贡献依参数变化。

**比较意义：** 中国近期研究有明确的临界阈值、模态结构和能量机制分析。这反驳“俄罗斯有数学物理推导、中国缺少严密理论”的宽泛说法。但其对象是双自由面溶质—热毛细液层，并非 RU23 的显式两相蒸发气液混合物；因此它是强方法对照，不是严格同物理边界的完全匹配样本。

### 2.2 宁波大学 2022：热毛细液层非模态稳定性

- **论文：** Sheng Zheng & Kaixin Hu, “Non-modal Stability Analysis of Thermocapillary Liquid Layers.”
- **期刊：** *Chinese Journal of Space Science*, 42(2), 270–276 (2022).
- **DOI：** 10.11728/cjss2022.02.201104097.
- **机构：** School of Mechanical Engineering and Mechanics, Ningbo University.
- **原刊 HTML：** https://www.cjss.ac.cn/cn/article/doi/10.11728/cjss2022.02.201104097
- **英文入口：** https://ftp.cjss.ac.cn/en/article/doi/10.11728/cjss2022.02.201104097

原刊摘要明确采用非模态稳定性方法，以瞬态增长函数和反馈函数分析初始扰动及外加激励的放大；研究不同 Prandtl 数、Reynolds 数与激励频率下的最大放大、最优扰动波数，以及速度/温度扰动场。

**比较意义：** 这类研究分析的是“即使线性模态未显示指数增长，初始扰动是否会经历显著瞬态放大”的问题。它与俄罗斯 RU23 的 normal-mode 谱阈值方法不相同，但在失稳风险与扰动敏感性研究上是强数学方法对照。不能因为方法目标不同就判定任何一方数学层级较低。

### 2.3 宁波大学 2022：Bingham 流体双自由面稳定性

- **论文：** Sheng Wang & Kaixin Hu, “Stability analysis of thermocapillary liquid layers with two free surfaces for a Bingham fluid.”
- **期刊：** *Chinese Journal of Theoretical and Applied Mechanics*, 54(12), 3398–3407 (2022).
- **DOI：** 10.6052/0459-1879-22-364.
- **机构：** Ningbo University.
- **原刊 HTML：** https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-22-364

原刊给出不同 Bingham 数下临界 Marangoni 数与 Prandtl 数的关系，分析临界流动模态和扰动能量机制；模型包含屈服行为与双自由面边界条件。

**去重规则：** 三篇论文共享胡开鑫及宁波大学研究线，但研究问题分别涉及溶质—热毛细耦合、非模态瞬态放大、Bingham 非牛顿流体。应记录为一个持续团队下的三项不同问题研究，而非三个独立中国团队。

### 2.4 中国 2024：三维蒸发/冷凝液膜长波失稳

- **论文：** Weiyang Jiang, Runsheng Huang, Qiang Yang & Zijing Ding, “Three-Dimensional Long-Wave Instability of an Evaporation/Condensation Film.”
- **期刊：** *Fluids* 9(6), 143 (2024).
- **DOI：** 10.3390/fluids9060143.
- **原刊全文：** https://www.mdpi.com/2311-5521/9/6/143

该研究从三维长波框架推导包含重力、界面能量传递、蒸汽反冲、有效压力和蒸发/冷凝的非线性演化方程，并分析线性失稳、非线性膜破裂和自相似最小膜厚规律。

**比较意义：** 这是比一般热毛细液层更接近俄罗斯蒸发液膜专题的近期中国对照，因为它直接处理相变、膜厚演化与失稳。但它采用长波约化方程，且与 RU23 的显式两层 Boussinesq 基态和 normal-mode 谱问题并非完全相同的物理边界和数学任务。应比较模型预测的具体量，而非只比较公式形式。

## 3. 同题程度分级：俄罗斯特色仍可能成立，但必须精确限定

| 比较组 | 同题程度 | 能比较什么 | 当前不允许得出的结论 |
|---|---|---|---|
| RU23（双层蒸发 + 精确基态 + normal-mode 谱阈值） ↔ CN22 宁波三篇 | 中等：稳定性数学工具相近，物理对象不同 | 临界模态、阈值分析、扰动能量机制、研究线连续性 | 不能据此判定俄罗斯国家整体理论更强 |
| RU23 ↔ CN24 三维蒸发/冷凝长波模型 | 中高：蒸发/相变液膜问题族相近，约化与边界模型不同 | 相变界面条件、气相/蒸汽作用、临界稳定与破裂预测 | 不能仅凭解析基态比长波 PDE 更“数学” |
| RU24 ↔ CN24 | 中等：非线性液膜演化与破裂/失稳相关，但方程约化和边界设定不同 | 非线性演化变量、临界条件、破裂机制与数值验证 | 不能直接将两篇临界参数或结果横向排名 |
| RU25 ↔ CN22 非模态稳定性 | 低至中等：分别关注波包包络长期演化与瞬态放大 | 扰动初始条件、增长率、时间尺度与预测量 | 不能把包络模型与非模态分析视为同一数学任务 |
| RU23 ↔ 2024 国际挥发液膜稳定性研究（GLOBAL） | 高度相关的全球基线，但不是中俄国家比较样本 | 显式气相蒸汽扩散、蒸发机制与失稳模式 | 不能声称显式两相蒸发稳定性是俄方独有 |

2024 年国际基线：Omair A. A. Mohamed & Luca Biancofiore, “The stability analysis of volatile liquid films in different evaporation regimes,” DOI 10.48550/arXiv.2406.01289，https://arxiv.org/abs/2406.01289。其公开摘要涉及液相与蒸汽扩散、长波方程、色散关系及绝对/对流失稳。作者的中俄归属不作为本轮依据，故单列 GLOBAL。它提醒我们：必须以全球已知方法为参照，不能把普遍存在的物理模型组合误报为国家独占能力。

**本轮重要负结果：** 当前检索尚未找到一篇同时满足“2021—2026 年、中国团队、显式双层气液蒸发、部分不变精确基态、normal-mode 谱阈值”全部条件的完全同题论文。但这只是当前已检索语料的结果，不是中国不存在此类工作的证明；下一轮应继续做针对性补检索。

## 4. 当前阶段性结论（更新）

1. **俄罗斯特定研究线的连续方法传统进一步得到支持。** ICM/SFU/Altai 线的 RU23 以精确基态和线性谱稳定性为核心；South Ural State University 的 Prokudina 2024—2025 则呈现从四阶非线性自由表面演化到窄带波包包络长期演化的相关研究路线。这些是不同数学层次和不同团队的证据，不能简单合并计作同一项突破。
2. **中国近期研究也具有实质数学物理深度。** 宁波大学 2022 的临界模态、能量分析、非模态放大，和中国 2024 的三维非线性相变液膜模型均有原刊支持。因此，“俄罗斯做理论、中国主要做工程”不成立。
3. **当前可辩护的俄罗斯正向命题应限定为方法组合与研究谱系：** 某些俄罗斯团队持续将特定两相蒸发边界、解析/部分不变基态、气相传输和谱稳定性连接起来；在现有样本中，这条组合路线呈现较清晰的连续性。
4. **尚未证明的命题：** 俄罗斯全国总体数学物理水平高于中国；俄罗斯模型预测更准确；俄方方法已经能提高手机 VC 的 Qmax、降低热阻或预测局部干涸。以上均需同输入、同边界、同数据的 benchmark。
5. **原项目决策不变：** 基础数学建模继续 RESERVE；P1/P2/HOLD 不因本轮论文方法审计改变。

## 5. 下一轮必须做什么

### A. 公式级核验 RU24 / RU25（优先）

获取并逐页审阅两篇原刊 PDF，建立对照表：
- RU24：四阶 PDE 的完整表达式、无量纲参数、边界/初始条件、差分格式、数值稳定性/收敛证据、临界 Ma 的定义与复现性；
- RU25：包络方程完整形式、增长率/频率导数如何进入系数、适用的窄带/慢变假设、非线性闭合来源、与 RU24 方程的映射关系；
- 识别 RU25 的新贡献是新推导、渐近约化，还是对既有线性波谱的非线性长时间扩展。

### B. 中国同题检索（限定 2021—2026）

优先组合检索：
- “two-phase evaporation” + “exact solution/base state” + “normal-mode stability”；
- “evaporating liquid film” + vapor diffusion + spectral/linear stability；
- “液膜蒸发” + “气相扩散/两相流” + “线性稳定性/特征值”；
- 追踪中方相变边界模型与显式气相方程，而不只检索“热毛细”关键词。
如果仍无完全同题论文，要把检索式、覆盖数据库和限制写入报告，不将未命中视为不存在。

### C. 为工程迁移建立预测契约

至少挑选一个可比输出（如临界失稳温差、临界 Marangoni 数、最小膜厚/破裂时间或蒸发通量），明确：
1. 相同物理边界与输入；
2. 可用参考数据及不确定性；
3. 预测误差与参数外推范围；
4. 计算成本；
5. 与手机封闭式均热板/吸液芯物理差异及降级条件。

只有这一步显示额外预测增益，才能将数学物理方法特色升级为工程合作优先级。

## 6. 原始来源索引

- RU24 Prokudina (2024): https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper
- RU24 PDF: https://www.mathnet.ru/links/681f0b700dcafe8450494362e49022c8/uk181.pdf
- RU25 Prokudina (2025): https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper
- Prokudina Math-Net author bibliography: https://www.mathnet.ru/eng/person97845
- CN22 Zhao & Hu: https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-21-148?viewType=HTML
- CN22 Zhao & Hu PDF: https://pubs.cstam.org.cn/data/article/lxxb/preview/pdf/lxxb-2022-2-291.pdf
- CN22 Zheng & Hu: https://www.cjss.ac.cn/cn/article/doi/10.11728/cjss2022.02.201104097
- CN22 Wang & Hu: https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-22-364
- CN24 Jiang et al.: https://www.mdpi.com/2311-5521/9/6/143
- GLOBAL24 Mohamed & Biancofiore: https://arxiv.org/abs/2406.01289
