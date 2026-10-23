# 第十四轮｜近期液膜论文原文核验状态与中国强对照扩展（2026-10-23）

**状态：** PRIMARY-PUBLISHER-METADATA-VERIFIED / RU24-ABSTRACT-AND-PDF-EXTRACT-VERIFIED / RU25-ABSTRACT-VERIFIED / CHINA-RECENT-COUNTEREXAMPLES-EXPANDED / FORMULA-LEVEL-RU24-RU25-OPEN

## 0. 本轮目标与边界

承接第十三轮，优先推进两项工作：
1. 对 South Ural State University 的 Prokudina (2024, 2025) 两篇近期液膜论文做原刊记录与方法关系核验，厘清哪些方法事实能由现有可读原文直接支持，哪些仍需 PDF 逐式审计。
2. 扩展 2021—2026 年中国近期强理论/机理对照，尤其是稳定性分析、非线性液膜演化、蒸发干斑模型和实验—模型闭环。

本轮不把“原刊摘要/索引文本可读”冒充“全文公式级审阅”。当前运行环境无法成功下载并逐页核对 RU25 的完整 PDF；RU24 可读到原刊 PDF 的提取文本及摘要，但本轮仍未完成所有公式、边界条件和数值格式的逐式复核。所有相关结论因此按摘要/原刊元数据级或有限正文摘录级标记。

## 1. 俄罗斯 Prokudina 2024：四阶非线性自由表面演化模型

**原刊记录**
- L. A. Prokudina, “Simulation of the evolution of disturbances in an evaporating liquid film.”
- *Russian Journal of Cybernetics*, 5(4), 81–87 (2024).
- DOI: [10.51790/2712-9942-2024-5-4-11](https://doi.org/10.51790/2712-9942-2024-5-4-11)
- [原刊页面及 PDF 入口](https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper)；[可检索的 PDF 文本入口](https://www.mathnet.ru/links/681f0b700dcafe8450494362e49022c8/uk181.pdf)

**可直接确认的来源事实**
- 原刊摘要称，该研究建立描述重力驱动黏性液膜自由表面在热质传递过程中的非线性模型。
- 模型是包含空间与时间导数的四阶非线性偏微分方程；系数涉及表面张力、热毛细作用和蒸发。
- 作者将模型转化为差分方程并开发计算算法，在中等 Reynolds 数范围开展数值计算，研究扰动的非线性演化与 Marangoni 不稳定性。
- 摘要报告了不稳定流动状态，但仅凭摘要不能确认数值格式的阶数、收敛性、网格/时间步独立性、与独立实验的验证程度，或是否提供可复现数据。

**审计判断**
这篇论文的可见贡献是“自由表面非线性 PDE + 差分离散 + 数值实验”，属于明确的数学建模与非线性数值分析证据；不能仅凭“四阶 PDE”就将其认定为精确解析解或比稳定性谱分析更深。它也不自动证明俄方有高于中国的数学物理能力。下一步需核对正文中的原始方程、无量纲化、初边值条件、差分格式和稳定性/收敛证据。

## 2. 俄罗斯 Prokudina 2025：窄带波包包络的长期非线性演化

**原刊记录**
- L. A. Prokudina, “Simulation of the long-term nonlinear evolution and interaction of disturbances in a liquid film.”
- *Russian Journal of Cybernetics*, 6(4), 101–105 (2025).
- [原刊页面与全文 PDF 入口](https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper)；[俄文原刊页](https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=rus&paperid=257&wshow=paper)

**可直接确认的来源事实**
- 原刊摘要将模型描述为窄带波包包络振幅的非线性抛物型方程。
- 方程系数用波动特征表达，包括增长率、频率及其一阶、二阶导数。
- 作者报告在中等 Reynolds 数下，考察液膜不稳定区的增长率拐点、最大增长率对应波数、相速度极小值，以及中性稳定边界附近波包振幅的衰减。
- 该摘要没有给出完整包络方程、渐近展开过程、闭合假设、误差/收敛分析或与 2024 模型的逐项映射。

**与 2024 论文的关系：当前可作的有限判断**
两篇论文来自同一作者、同一大学，研究对象均为液膜扰动，且都关注非线性演化；2024 的摘要直接描述自由表面状态的四阶 PDE，2025 则描述窄带波包的包络方程。它们是**相关研究谱系中的不同模型层次**，不应简单计为两个完全独立的国家级理论突破。

但尚不能确认 2025 方程是否严格从 2024 的 PDE 渐近约化而来，或基于另一套线性波谱/先前理论建立。必须逐式比对两篇论文正文及其引用文献后，才能将两者定性为“新推导”“既有模型的渐近约化”或“不同层次的延伸”。

## 3. 中国近期强对照：不仅有工程实验，也有数学物理与机理建模

以下是新增或重新确认的 2021—2026 年对照锚点。它们的物理边界并不完全一致，不能全部作为 RU24/RU25 的严格一对一匹配，但足以作为研究方法反例和相邻领域对照。

| 样本 | 可确认的方法证据 | 对本研究的意义 | 可比性/限制 |
|---|---|---|---|
| Zhao & Hu, 2022, “Instability in the solutal-thermocapillary liquid layer with two free surface”, *Chinese Journal of Theoretical and Applied Mechanics*, DOI [10.6052/0459-1879-21-148](https://doi.org/10.6052/0459-1879-21-148) | 双自由面溶质—热毛细液层；线性稳定性理论；临界 Marangoni 数与 Prandtl 数关系；临界模态和能量机制 | 直接反驳“中国近期研究缺少严谨稳定性分析”的说法 | 不是蒸发液膜的完全同题模型；原刊元数据/摘要级确认 |
| Zhang & Hu, 2021, “Convective instability in thermocapillary migration of a viscoelastic droplet”, *Acta Mechanica Sinica* / 力学学报相关原刊记录，https://pubs.cstam.org.cn/lxxb/article/Y2021/I5/1313 | 线性稳定性、临界 Ma、Pr/弹性参数依赖、临界模态流场与扰动能量分析 | 展示近期中国团队在临界阈值与能量机制上的理论深度 | 对象是黏弹性液滴，不是降膜蒸发；相邻方法对照 |
| Jiang et al., 2024, “Three-Dimensional Long-Wave Instability of an Evaporation/Condensation Film”, *Fluids* 9(6), 143, DOI [10.3390/fluids9060143](https://doi.org/10.3390/fluids9060143) | 三维长波框架；推导含重力、界面能量传递、蒸汽反冲、有效压力和相变的非线性演化方程；线性稳定性与非线性膜破裂分析 | 当前最接近的中国近期蒸发/冷凝液膜理论对照之一 | 方程为长波约化模型；与俄方双层 Boussinesq 精确基态/谱问题的边界与数学任务不同 |
| Zheng et al., 2025, “倾斜壁面上液膜的流动不稳定性与烧干机制探究”, *化工进展* 44(4), 1876–1887, DOI [10.16085/j.issn.1000-6613.2024-1760](https://doi.org/10.16085/j.issn.1000-6613.2024-1760) | 对加热/绝热倾斜壁面液膜进行实验测量，研究临界喷淋密度和干斑形成；提出考虑热毛细与蒸发作用的三维模型，并报告实验与模型分析 | 说明中国样本中也有“模型 + 失稳/干斑机理 + 实验”的闭环路线，不应一概归为纯工程 | 与开放式降膜/换热器相关，不是手机 VC；方法证据来自期刊摘要 |
| Wang et al., 2022/2023 原刊记录（江苏大学），“Liquid film flow and heat transfer characteristics of falling film evaporation on horizontal corrugated tube”, DOI [10.3969/j.issn.1671-7775.2023.01.013](https://doi.org/10.3969/j.issn.1671-7775.2023.01.013) | 降膜蒸发流动与换热特性研究 | 作为中国偏器件/工程工况的样本，可与理论样本分层比较 | 目前可读元数据有限；不作为数学物理深度的强证据 |
| 中国科学院力学研究所等，2026，“非均匀温度场下液滴蒸发迁移与热对流测量”, *实验流体力学* 40(4), 117–129, DOI [10.11729/syltlx20250125](https://doi.org/10.11729/syltlx20250125) | 高速显微成像、红外热成像与 micro-PIV；比较乙醇与 HFE-7200；以 Ma/Ra/Bo/Bd 分析热毛细与浮力竞争，并与润滑理论预测比较 | 近期中国在热毛细蒸发机理与高分辨实验方面的反例/补充证据 | 主要是实验机制与理论参照，不等于谱稳定性论文；在线发表日期在 2026 年 |

**重要区分：** 这些样本说明中国有近期数学物理、机理建模和理论—实验研究；它们不证明中国在所有子领域与俄罗斯完全相同，也不排除俄罗斯某些窄方法组合的特色。

## 4. 本轮收敛：假设状态与证据等级

| 命题 | 本轮状态 | 依据 |
|---|---|---|
| 俄罗斯部分研究线持续使用液膜非线性模型与不稳定性分析 | 支持，但当前 Prokudina 两篇仍主要为摘要级方法确认 | RU24 四阶自由表面 PDE；RU25 窄带波包包络 PDE |
| RU24 与 RU25 是两项独立数学方法创新 | 未证实 | 同一作者研究谱系；方程之间的推导关系尚未逐式审计 |
| 中国缺乏近期数学物理/机理研究 | 被现有证据反驳 | 中国 2022 稳定性研究、2024 三维相变液膜模型及其他近期机理样本 |
| 俄罗斯整体数学物理能力高于中国 | 未证实，不可作此结论 | 样本非随机、物理问题未完全匹配、俄方 RU24/RU25 公式级证据未齐 |
| 俄罗斯方法对手机 VC 性能有直接增益 | 未证实 | 当前研究对象主要是开放式液膜、液滴或其他两相系统；没有手机级同条件 benchmark |

本轮结论属于 **STRUCTURAL_SIGNAL**：支持某些俄罗斯研究线具有连续的非线性液膜建模工作，但尚不能升级为国家级能力排名、预测性能优势或手机产品候选。

## 5. 下一轮任务（按优先级）

1. **RU24 / RU25 公式级审计**：逐页取得 PDF 并记录原始方程、无量纲参数、初边值条件、差分/包络方程、渐近假设、稳定性/收敛证据与引用依赖。若全文无法稳定取得，应明确登记访问限制，不从摘要推造公式。
2. **中国同题检索继续收窄**：限定 2021—2026，针对“显式气相蒸汽扩散 + 双层蒸发 + 精确基态 + normal-mode 谱阈值”；保留未命中检索记录，不把未找到写成不存在。
3. **同作者/同团队贡献去重**：将 RU24/RU25 作为一个作者谱系的两个不同模型层次；分别评估创新内容、可证伪预测与验证成熟度。
4. **暂不进行国家总分排名**：先构建同题矩阵；只有当物理边界、数学任务和证据深度足够匹配，才比较具体方法增量。
5. **手机迁移单独建门槛**：任何后续迁移主张都要说明开放式液膜与密封铜—水 VC 的差异，并定义可比预测量、参考数据、不确定性与停止条件。

## 6. 本轮来源

- Prokudina 2024 原刊：https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper
- Prokudina 2024 PDF：https://www.mathnet.ru/links/681f0b700dcafe8450494362e49022c8/uk181.pdf
- Prokudina 2025 原刊：https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper
- Prokudina 作者书目：https://www.mathnet.ru/eng/person97845
- 中国 Zhao & Hu 2022：https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-21-148?viewType=HTML
- 中国 Zhang & Hu 2021：https://pubs.cstam.org.cn/lxxb/article/Y2021/I5/1313
- 中国 Jiang et al. 2024：https://www.mdpi.com/2311-5521/9/6/143
- 中国 Zheng et al. 2025：https://hgjz.cip.com.cn/CN/volumn/volumn_260.shtml
- 中国科学院力学所 2026：https://pubs.cstam.org.cn/article/doi/10.11729/syltlx20250125
- 江苏大学降膜蒸发研究：https://zzs.ujs.edu.cn/xbzkb/CN/10.3969/j.issn.1671-7775.2023.01.013
