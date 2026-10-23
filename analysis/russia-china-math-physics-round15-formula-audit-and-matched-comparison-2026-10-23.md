# 第十五轮｜公式级方法审计与中俄同题对照（2026-10-23）

**阶段状态：** RU24_SOURCE_TEXT_AUDIT_PARTIAL / RU25_FULL_EQUATION_AUDIT_OPEN / CHINA_THEORY_COUNTEREXAMPLES_CONFIRMED / NATIONAL_COMPARISON_NOT_ESTABLISHED

## 0. 本轮任务

承接第十四轮，围绕两件事推进：
1. 尽可能从原刊可检索全文中提取 Prokudina (2024, 2025) 的方法事实、研究谱系和可审计边界。
2. 对中国 2021—2026 研究继续做更有判别力的反例检索，尤其区分“蒸发/冷凝液膜同题”与“相邻液膜稳定性理论”。

本轮访问到原刊摘要、Prokudina 2024 PDF 的索引文本片段，以及中国多篇原刊的全文/摘要。Math-Net 的全文 PDF 可被搜索索引，但当前浏览读取接口对 PDF 和部分页面返回 cache miss；因此，不声称已经完整逐页复核 RU24/RU25 的每一条公式。

## 1. RU24：2024 蒸发液膜非线性自由表面模型

**原刊**：L. A. Prokudina, “Simulation of the evolution of disturbances in an evaporating liquid film,” *Russian Journal of Cybernetics*, 5(4), 81–87 (2024), DOI [10.51790/2712-9942-2024-5-4-11](https://doi.org/10.51790/2712-9942-2024-5-4-11). [原刊页面](https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper) · [原刊 PDF](https://www.mathnet.ru/links/681f0b700dcafe8450494362e49022c8/uk181.pdf)

### 可确认的方法事实
- 摘要明确称模型为描述重力驱动黏性液膜自由表面、热质传递过程的非线性四阶 PDE。
- 方程系数包括表面张力、热毛细力与蒸发作用。
- 作者称将模型转为差分方程，开发计算算法，并在中等 Reynolds 数条件下做非线性扰动演化计算，识别水膜中的不稳定状态，特别是 Marangoni 不稳定性。
- 同一作者在 2014 年已发表相关方法论文：模型以 Navier–Stokes 与连续性方程及考虑热质传递的界面边界条件为基础，推导自由表面四阶非线性 PDE 并用有限差分求解。见 [Prokudina 2014 原刊/PDF 索引文本](https://www.mathnet.ru/php/archive.phtml?jrnid=vyuru&option_lang=eng&paperid=136&wshow=paper) 和 [PDF 文本](https://m.mathnet.ru/links/8eda1ba9cef02887dcae79ae48585aa8/vyuru136.pdf)。

### 贡献归属与去重判断
2014 年工作已明确出现“四阶非线性自由表面 PDE + 有限差分 + Marangoni 扰动演化”这一方法组合。因此不能把 2024 年摘要中的相同一般性方法描述自动计作首次提出。2024 年可能在蒸发/热质传递工况、参数或计算结果上有具体扩展，但**具体新增量尚未从正文逐式核实**。

这是本轮重要的去重修正：2024 论文是俄罗斯相关研究谱系持续性的证据，但在没有完成与 2014 文本的逐式比较前，不应将“四阶 PDE/有限差分”作为 2024 的独立方法创新。

### 仍需原文核验
- 2024 模型相对 2014 模型究竟增加或改变了哪些物理项；
- 完整 PDE、参数定义、初边值条件与数值差分格式；
- 是否提供网格/时间步收敛、误差界或独立实验验证；
- 2024 结果是新机制、新预测，还是对既有模型的参数化延伸。

## 2. RU25：窄带波包包络方程

**原刊**：L. A. Prokudina, “Simulation of the long-term nonlinear evolution and interaction of disturbances in a liquid film,” *Russian Journal of Cybernetics*, 6(4), 101–105 (2025). [原刊页面](https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper) · [原刊参考文献页](https://www.mathnet.ru/links/ae1714707d3014be23175ea63ecdc54e/uk_257_refs_rus.htm)

### 可确认的方法事实
- 原刊摘要称其模型是窄带波包包络振幅的非线性抛物型方程。
- 方程系数由波动特征给出，包括增长率、频率及其一阶、二阶导数。
- 数值分析讨论中等 Reynolds 数下增长率拐点、最大增长率对应波数、相速度极小点，以及中性稳定边界附近波包振幅的衰减。

### 方法定位
RU25 的建模对象是波包包络，而非直接把完整自由表面作为状态变量的 RU24 型四阶 PDE。概念上，这属于不同的模型层次：RU24 侧重非线性自由表面演化；RU25 侧重窄带波包的长时非线性演化及其波动谱特征。

但尚不能确定 RU25 包络方程的严格推导起点、渐近假设、误差阶数，以及是否直接从 RU24 方程推导。因此两篇论文应归为同一作者研究谱系的两个相关工作，不应直接算作两项互相独立的国家级突破。

## 3. 中国同题和相邻理论反例

### C1. Jiang et al. (2024)：蒸发/冷凝液膜的三维长波失稳
原文：[Three-Dimensional Long-Wave Instability of an Evaporation/Condensation Film](https://www.mdpi.com/2311-5521/9/6/143), *Fluids* 9(6), 143, DOI [10.3390/fluids9060143](https://doi.org/10.3390/fluids9060143)。

**从全文方法章节可确认：**
- 从连续性、动量和能量控制方程出发；
- 对液-汽界面施加质量通量、应力、能量和相变动力学条件；
- 使用含小参数的长波假设，对变量作渐近展开；
- 推导包含重力、界面能量传递、蒸汽反冲、有效压力与蒸发/冷凝的非线性演化方程；
- 对约化方程开展 normal-mode 线性稳定性分析与非线性演化计算，使用 Fourier spectral method 求解；
- 报告有效压力的稳定作用、蒸汽反冲的失稳作用，并分析薄膜破裂的自相似标度。

**比较意义：** 这是中国近期研究具有明确数学物理推导链的强证据：控制方程 → 相变界面条件 → 长波渐近约化 → 线性谱稳定性 → 非线性演化。它与 RU24 的液膜蒸发/自由表面主题较接近，但模型物理闭合和方法层次不同，不能据此单篇判定哪国整体更强。

### C2. Zhao & Hu (2022)：双自由面溶质—热毛细稳定性
原文：[原刊全文页](https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-21-148?viewType=HTML)，*力学学报* 54(2), 291–300，DOI [10.6052/0459-1879-21-148](https://doi.org/10.6052/0459-1879-21-148)。

原刊摘要明确报告线性稳定性理论、临界 Marangoni 数与 Prandtl 数关系、临界模态，以及扰动动能的能量机制。它是数学物理深度的反例，但对象是双自由面溶质—热毛细液层，不是同一蒸发模型。

### C3. Wang & Hu：Bingham 流体双自由面热毛细液层
原文：[原刊全文页](https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-22-364)，DOI [10.6052/0459-1879-22-364](https://doi.org/10.6052/0459-1879-22-364)。

原刊摘要报告采用线性稳定性理论，研究不同 Bingham 数下临界 Marangoni 数与 Prandtl 数的函数关系，并分析临界模态和能量机制。这进一步说明中国相关团队有持续的理论稳定性研究，而非仅有单篇孤立反例。

### C4. Su et al. (2026)：声场中幂律平面液膜的 Floquet 稳定性
原文：[原刊全文页](https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-25-363)，*力学学报* 58(3), 638–649，DOI [10.6052/0459-1879-25-363](https://doi.org/10.6052/0459-1879-25-363)。

**可确认方法链：** 建立受周期声场激励、两侧气流速度不对称的幂律液膜模型；采用 Floquet 理论开展时间不稳定性分析；推导色散关系并分析参数不稳定区间及 Kelvin–Helmholtz 失稳。这是中国在近期复杂液膜失稳数学建模上的直接反例，但应用对象是推进剂液膜，非蒸发热管理液膜；原文指出声场稳定性实验验证留待后续工作，因此理论分析也不能等同于实验验证。

## 4. 同题对照矩阵

| 维度 | RU24（2024） | RU25（2025） | China Jiang（2024） | China Zhao/Hu（2022） | China Su et al.（2026） |
|---|---|---|---|---|---|
| 核心状态/模型 | 自由表面四阶非线性 PDE | 窄带波包包络方程 | 长波约化后的三维液膜演化方程 | 双自由面液层扰动模态 | 周期声场下幂律液膜扰动 |
| 主要数学方法 | 差分离散、非线性数值演化 | 波动谱系数驱动的包络 PDE | 渐近展开、线性谱稳定性、非线性演化 | 临界稳定性、能量分析 | Floquet 分析、色散关系 |
| 物理闭合可见度 | 摘要层：蒸发、表面张力、热毛细 | 摘要层：增长率/频率及导数 | 全文可见：相变界面条件、蒸汽反冲、有效压力等 | 摘要层：溶质/热毛细耦合 | 全文索引可见：周期声场、非对称气流、幂律流体 |
| 预测/结果 | 识别 Marangoni 不稳定区 | 最大增长率附近的波包/相速行为 | 有效压力与蒸汽反冲的稳定性作用、破裂标度 | 临界 Ma、模态及能量来源 | 参数不稳定区间及模式转换 |
| 数值/实验验证 | 需要全文核验收敛与独立验证 | 需要全文核验 | Fourier 谱方法；当前已读方法章节，独立实验验证未证实 | 需要全文方法与验证审计 | 原文称实验验证为后续工作 |
| 可比等级 | 与 Jiang 部分可比，非严格同题 | 与 RU24 同谱系但不同层次 | 与 RU24 部分可比；与 RU25 不同模型层次 | 相邻理论反例 | 相邻理论反例 |

## 5. 本轮推论与假设更新

### 已支持的观察
1. **俄罗斯部分研究谱系有连续性。** Prokudina 至少在 2014、2024、2025 年围绕液膜自由表面、Marangoni 不稳定性和波包扰动发表相关工作。这比把 2024/2025 两篇单独看作孤立突破更准确。
2. **中国也存在严谨的数学物理建模路线。** Jiang et al. 2024 的控制方程—界面条件—长波渐近展开—谱稳定性—非线性演化链条已在原刊全文方法章节中可见；Zhao/Hu 与 Su 等提供相邻领域的理论稳定性反例。
3. **“俄罗斯强理论、中国偏工程”的二分法不成立。** 至少在液膜流动、热毛细与界面失稳相关领域，该表述与已找到的中国原刊证据不符。

### 尚未支持的判断
- 俄罗斯国家整体数学物理能力高于中国；
- RU24/RU25 相对中国近期同题研究有更高的原创性或预测准确性；
- 俄罗斯模型具有手机均热板/热管理器件的直接性能优势；
- 只根据摘要中的“四阶 PDE”或“非线性抛物方程”就可对方法深度作国家排序。

### 本轮状态
**STRUCTURAL_SIGNAL**，且在“国家级比较”层面仍为 **NOT_EVALUABLE**。已有证据支持研究谱系与具体建模方法的存在，但同题样本覆盖、贡献归属、复现性和预测增量尚不足。

## 6. 第十六轮最小可判别任务

1. **完成 RU24 对 RU14（2014）的同作者贡献差分。** 以两篇原文逐项对照控制方程、热质传递边界项、参数、离散格式、计算域和结果，识别 2024 的实际新增量，而不是重复计入四阶 PDE/有限差分。
2. **取得 RU25 全文并审计包络方程。** 记录推导起点、窄带假设、系数定义、渐近阶数、数值方法和验证。
3. **将中国严格同题范围收窄到蒸发/冷凝液膜。** 重点核查 Jiang et al. 的参考文献与引用链，以及显式蒸汽扩散、界面动力学、热毛细耦合的近期工作；相邻领域论文保留为反例，不混入同题分母。
4. **暂不做国家总分。** 待同题论文具备同一物理边界、可比数学任务和足够全文证据后，再比较建模贡献与验证强度。

## 7. 主要来源

- Prokudina 2014: https://www.mathnet.ru/php/archive.phtml?jrnid=vyuru&option_lang=eng&paperid=136&wshow=paper
- Prokudina 2014 PDF: https://m.mathnet.ru/links/8eda1ba9cef02887dcae79ae48585aa8/vyuru136.pdf
- Prokudina 2024: https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=181&wshow=paper
- Prokudina 2024 PDF: https://www.mathnet.ru/links/681f0b700dcafe8450494362e49022c8/uk181.pdf
- Prokudina 2025: https://www.mathnet.ru/php/archive.phtml?jrnid=uk&option_lang=eng&paperid=257&wshow=paper
- Prokudina 2025 references: https://www.mathnet.ru/links/ae1714707d3014be23175ea63ecdc54e/uk_257_refs_rus.htm
- Jiang et al. 2024: https://www.mdpi.com/2311-5521/9/6/143
- Zhao & Hu 2022: https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-21-148?viewType=HTML
- Wang & Hu Bingham layer: https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-22-364
- Su et al. 2026: https://pubs.cstam.org.cn/article/doi/10.6052/0459-1879-25-363
