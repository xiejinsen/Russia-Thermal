# 第十六轮｜Prokudina 2014/2024/2025 方法谱系差分审计（2026-10-23）

**状态：** RU14-RU24_METHOD-FAMILY-OVERLAP-CONFIRMED / RU24_INCREMENTAL-NOVELTY-OPEN / RU25_ENVELOPE-LINEAGE-OVERLAP-CONFIRMED / RU25_INCREMENTAL-NOVELTY-OPEN / NATIONAL-COMPARISON-NOT-EVALUABLE

## 0. 本轮问题

本轮聚焦一个最小判别任务：对 Prokudina 2014、2024、2025 年的公开原刊摘要、可检索全文片段和书目关系做差分，识别“已经明确出现过的方法”与“仍可能是新增贡献的部分”。不把同一作者连续发表的相近研究当成互相独立的证据。

## 1. 2014 与 2024：四阶自由表面 PDE 的方法框架不是新出现的

### RU14-A：Prokudina 2014
L. A. Prokudina, “Modelling the Influence of Temperature Gradients on the State of a Free Liquid Surface,” *Bulletin of the South Ural State University. Series: Mathematical Modelling, Programming & Computer Software*, 7(2), 118–123 (2014), DOI [10.14529/mmp140211](https://doi.org/10.14529/mmp140211). [原刊记录](https://www.mathnet.ru/php/archive.phtml?jrnid=vyuru&option_lang=eng&paperid=136&wshow=paper) · [原刊 PDF 文本](https://m.mathnet.ru/links/8eda1ba9cef02887dcae79ae48585aa8/vyuru136.pdf)

原刊摘要明确：研究重力驱动、Re 中等的液膜及 Marangoni 界面不稳定性；从 Navier–Stokes 方程、连续性方程和考虑热质传递的边界条件出发，推导自由表面方程；所得模型是非线性四阶 PDE，并使用有限差分法求解。温度梯度影响表面张力与热毛细作用，数值结果显示其可增强也可抑制扰动。

### RU24-A：Prokudina 2024
L. A. Prokudina, “Simulation of the Evolution of Disturbances in an Evaporating Liquid Film,” *Russian Journal of Cybernetics*, 5(4), 81–87 (2024), DOI [10.51790/2712-9942-2024-5-4-11](https://doi.org/10.51790/2712-9942-2024-5-4-11). [原刊记录](https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper) · [原刊 PDF 文本](https://www.mathnet.ru/links/681f0b700dcafe8450494362e49022c8/uk181.pdf)

摘要明确：描述重力驱动黏性液膜在热质传递下的自由表面状态；采用四阶非线性 PDE，系数包含表面张力、热毛细力和蒸发；将模型转化为差分方程并进行中等 Reynolds 数下的非线性扰动数值实验，识别 Marangoni 不稳定状态。

### 差分结论
- **已知方法家族重合：** 自由表面状态变量、四阶非线性 PDE、热质传递/温度梯度、Marangoni 作用、有限差分/数值扰动演化，这些在 2014 年已明确出现。
- **2024 可能的新增点：** 更明确地针对蒸发液膜；系数中明确列出蒸发作用；新参数区间、模型项或计算发现可能有所扩展。
- **尚不能确认的内容：** 2024 是否改变了方程的推导、增加独立相变闭合、引入新的蒸发通量边界条件、给出新稳定性阈值/预测，或提供更强验证。现有可读取的 2024 原刊 PDF 搜索文本主要覆盖题录和摘要，无法完整核对方程正文、离散格式和结果图表。
- **严格结论：** 不能将“四阶 PDE + 差分法 + Marangoni 扰动演化”本身认定为 2024 的新方法创新。2024 是相关方法谱系延续和蒸发工况研究的证据；其增量贡献仍 OPEN。

## 2. 2014 与 2025：非线性波包/包络方程也不是在 2025 年才首次出现

### RU14-B：Prokudina 2014
L. A. Prokudina, “Nonlinear Evolution of Perturbations in a Thin Fluid Layer during Wave Formation,” *Journal of Experimental and Theoretical Physics*, 118(3), 480–488 (2014), DOI [10.1134/S1063776114020046](https://doi.org/10.1134/S1063776114020046). [可检索书目/摘要](https://www.researchgate.net/publication/271745366_Nonlinear_Evolution_of_Perturbations_in_a_Thin_Fluid_Layer_during_Wave_Formation)

公开摘要明确：在蒸发/冷凝和非均匀表面张力条件下，研究连续波数带的非线性扰动；使用非线性抛物型方程；波包载波接近最大增长率对应谐波时会自组织并形成单色波；靠近中性稳定曲线时会出现向最大增长率谐波附近的定向能量传递。

### RU25-A：Prokudina 2025
L. A. Prokudina, “Simulation of the Long-Term Nonlinear Evolution and Interaction of Disturbances in a Liquid Film,” *Russian Journal of Cybernetics*, 6(4), 101–105 (2025). [原刊记录与摘要](https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper)

公开摘要明确：以窄带波包包络振幅为对象，建立非线性抛物型方程；系数由增长率、频率及其一阶、二阶导数表达；分析中等 Reynolds 数下的增长率拐点、最大增长率波数、相速度极小点，以及中性稳定附近的波包振幅衰减。

### 差分结论
- **已知方法家族重合：** 2014 年已经存在液膜扰动的非线性抛物型方程、连续波数带、波包自组织和最大增长率谐波相关分析。因此，2025 年“非线性包络方程”不能仅凭摘要被当作首次提出。
- **2025 可能的新增点：** 聚焦长时演化与扰动相互作用；以增长率/频率及其导数构造包络方程系数；发现特定波数附近的非线性演化变化、相速度极小值及中性稳定附近的衰减。
- **尚不能确认：** 2025 方程是否为 2014 包络模型的严格推广；渐近推导假设与阶数；新系数/新项相对早期论文的差分；是否提供误差、收敛、实验或独立基准验证。必须审阅 2025 PDF 正文与其参考文献后才能定性。
- **严格结论：** 2025 是同作者方法谱系的进一步研究证据；“包络方程”这一方法类别本身并非新出现。具体数学增量仍 OPEN。

## 3. 对俄罗斯研究谱系的判断更新

### 事实
1. Prokudina 2014 与 2024 都报告了从流体控制方程/界面边界条件到自由表面四阶非线性 PDE、再到数值扰动演化的路线。
2. Prokudina 2014 已报告液膜连续波数带扰动的非线性抛物型方程、波包自组织与最大增长率谐波；2025 又研究窄带波包包络的长时非线性演化。
3. 这三项论文具有作者和研究对象连续性，不是三个独立的国家级证据样本。

### 观察与推论
- **观察：** 这位研究者的公开成果显示了跨年持续围绕同一类液膜机理问题发展模型、分析扰动并做数值计算的研究连续性。
- **推论：** 俄罗斯相关研究谱系可能具备持续深化特定数学模型的能力；该判断是团队/研究线层级，而不是俄罗斯全国层级。
- **不能推出：** 俄罗斯整体比中国更重数学物理、原创性更高、预测更准确，或这些模型可以直接提升手机均热板性能。
- **替代解释：** 该样本反映一位研究者/团队的持续研究计划，不能代表国家样本分布；出版数量和数学表达复杂度也不能替代贡献差分、可复现性或外部验证。

## 4. 证据成熟度与剩余问题

| 问题 | 当前状态 | 理由 |
|---|---|---|
| 2014 已有四阶 PDE + 有限差分路线？ | 支持 | 原刊摘要与 PDF 索引文本明确 |
| 2024 同一方法家族延续？ | 支持 | 原刊摘要明确 |
| 2024 新增蒸发工况？ | 支持（描述层面） | 摘要明确点名蒸发作用；具体方程增量未知 |
| 2024 相对 2014 的原创增量已确定？ | OPEN | 缺正文逐式差分 |
| 2014 已有非线性波包/抛物方程研究？ | 支持 | 公开摘要明确 |
| 2025 首次提出包络方程？ | 不支持 | 2014 已有相关方程家族 |
| 2025 具体新系数/渐近推导已确认？ | OPEN | 缺 2025 全文公式审计 |
| 俄罗斯全国理论方法强于中国？ | NOT EVALUABLE | 单一作者谱系、样本偏差、缺同题匹配 |
| 手机 VC 直接收益？ | NOT EVALUABLE | 无产品级物理映射与同条件基准 |

## 5. 下一步（第十七轮建议）

1. 取得并完整审阅 RU24 与 RU25 原刊 PDF（若访问环境仍不能完整读取，登记为全文获取限制，不猜测公式）。
2. 从 RU24 参考文献与正文中逐项抽取模型来源，明确其蒸发项、界面热质通量条件、系数和初边值条件相对 RU14 的变化。
3. 从 RU25 参考文献与正文中追踪包络方程的先前版本，确认系数公式、渐近参数和新预测。
4. 对照中国 Jiang et al. (2024) 的长波模型，只比较有可比物理项/数学任务的具体能力；不做国家总分。
5. 继续保留现有决策边界：P1/P2/HOLD 与数学建模 RESERVE 不变；不执行实验、不联系机构、不推断产品增益。

## 6. 原始来源

- Prokudina 2014 free-surface PDE: https://www.mathnet.ru/php/archive.phtml?jrnid=vyuru&option_lang=eng&paperid=136&wshow=paper
- Prokudina 2014 PDF: https://m.mathnet.ru/links/8eda1ba9cef02887dcae79ae48585aa8/vyuru136.pdf
- Prokudina 2014 wave-packet/nonlinear parabolic equation: https://doi.org/10.1134/S1063776114020046
- Prokudina 2024 evaporating film: https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper
- Prokudina 2024 PDF: https://www.mathnet.ru/links/681f0b700dcafe8450494362e49022c8/uk181.pdf
- Prokudina 2025 envelope model: https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper
- Jiang et al. 2024 China comparator: https://www.mdpi.com/2311-5521/9/6/143
