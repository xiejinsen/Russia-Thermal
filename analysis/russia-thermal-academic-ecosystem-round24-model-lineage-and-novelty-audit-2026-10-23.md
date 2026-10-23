# 第二十四轮｜数学原创性与模型谱系审计（2026-10-23）

**状态：** MODEL_LINEAGE_CLARIFIED / NOVELTY_CLAIMS_BOUNDED / CHINA_COUNTEREXAMPLES_STRENGTHENED / COUNTRY_LEVEL_ADVANTAGE_NOT_ESTABLISHED

## 1. 本轮核心问题

第二十三轮已描述俄罗斯 ITP 2017 下降波状液膜模型的结构。本轮进一步追问：模型的数学框架从哪里来？本文究竟贡献了新理论，还是将既有理论用于新的瞬态热传递场景？中国对应研究是否也有明确的数学方法贡献？

本轮基于俄罗斯 ITP 公开论文/摘要、清华研究论文、薄膜降阶模型方法论文，以及局部干涸实验模型的出版商记录。对无法取得正式完整排版全文的论文，结论仅限公开材料可支持的范围。

## 2. 俄罗斯 ITP：数学框架与本文贡献必须分开

### 2.1 论文所做的事

Chernyavskiy & Pavlenko (2017), “Numerical simulation of heat transfer at unsteady heat generation in falling wavy liquid films,” J. Phys.: Conf. Ser. 925, 012015, DOI 10.1088/1742-6596/925/1/012015.
- 官方会议摘要：https://www.itp.nsc.ru/htl/spaceconf-2017/file/Book_of_Abstract_TPSSGA_SYSIPHT_2017c.pdf
- 可检索全文：https://www.researchgate.net/publication/320968860_Numerical_simulation_of_heat_transfer_at_unsteady_heat_generation_in_falling_wavy_liquid_films
- 对应期刊长文：https://www.sciencedirect.com/science/article/abs/pii/S0017931016307256

研究计算波状液膜的表面形状、速度场和温度场，并在非稳态热负载下预测液氮液膜的沸腾等待时间、局部总蒸发时间和衰减工况图。公开材料报告模拟与实验总体吻合，但低热流区域存在偏差，作者将其与蒸发对传热的显著影响联系起来。

### 2.2 模型谱系：Kapitza–Shkadov 并非本文新创

Kapitza–Shkadov 型薄膜模型是已有的低维/积分边界层近似：通过薄膜长波尺度与自相似速度剖面，将完整自由界面流动降为液膜厚度 h 与流量/平均速度等少量演化变量。Kapitza–Shkadov 模型的局限，后来由 Ruyer-Quil 与 Manneville 等发展的加权余量方法（weighted-residual models, WRM）进一步改进；后者通过更灵活的速度剖面与渐近/投影方法，改善线性稳定阈值及惯性主导区间的表现。
来源：
- https://www.tandfonline.com/doi/full/10.1080/19942060.2017.1322148
- https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/robust-lowdimensional-modelling-of-falling-liquid-films-subject-to-variable-wall-heating/F5EAEC79F50416DA2D38D886ACFE3658
- https://www.sciencedirect.com/science/article/abs/pii/S0997754604000639

因此，俄罗斯 2017 研究可支持的贡献表述是：**将既有薄膜降阶流动描述与时变热传递/热负载情景结合，并用于预测液氮沸腾起始、局部蒸发和液膜衰减。** 当前证据不支持将其表述为原创 Kapitza–Shkadov 理论、新解析解或新的一般稳定性理论。

### 2.3 可确认的价值与缺口
- 价值：将模型输出连接到可观测的沸腾等待时间、蒸发时间与实验数据；分析热流密度和入口 Reynolds 数的影响；提供液膜衰减机制图。
- 缺口：低热流区域偏差明确；未找到可复核的统一 MAE/RMSE、完整不确定度预算或系统网格/时间步收敛表。
- 判定：物理场景与模型耦合具有应用贡献；数学原创性等级只能记为“既有降阶模型的情景扩展/耦合，尚未证实新理论”。

## 3. 中国清华：同样存在明确数学物理分析

### 3.1 Wang et al. (2019) 垂直下降液膜
“A study on a vertical falling liquid film on a uniformly heated plate with constant heat flux,” Chinese Journal of Computational Mechanics 36(2), 180–189, DOI 10.7511/jslx20171114003.
来源：https://pubs.cstam.org.cn/article/doi/10.7511/jslx20171114003

论文采用三维 regularized model，对流向和展向扰动进行线性稳定性分析，分析增长率随 Reynolds 数和 Marangoni 数变化的规律，并开展三维数值模拟，研究溪流状结构、换热增强和液膜破裂。

### 3.2 更相关的同方向论文
Wang et al. (2019), “Rivulet formulation in the flow of film down a uniformly heated vertical substrate,” Engineering Applications of Computational Fluid Mechanics 13(1), 396–416, DOI 10.1080/19942060.2019.1600028.
来源：https://www.tandfonline.com/doi/full/10.1080/19942060.2019.1600028

公开摘要称，研究建立三维 regularized weighted-residuals model，并通过流向和展向线性稳定性分析验证模型；结果将溪流状结构形成与展向热毛细 Marangoni 效应联系起来，并指出初始扰动影响形成过程，但不改变最终结构类型。

这一方法并非简单调用通用 CFD 求解器，而是使用降阶模型、稳定性分析与三维演化模拟来解释机制。模型谱系又与国际上 Ruyer-Quil–Manneville 的 weighted-residual 研究传统相关。故该中国案例是数学物理方法的强反例，也说明这套研究生态是国际流体力学共同发展的方法体系，不应按国家标签直接归属。

### 3.3 M1–M5
- M1：支持，三维降阶/regularized 模型；
- M2：支持线性稳定性分析；创新性须与已有 WRM/RM 文献逐项比对；
- M3：支持三维数值演化；
- M4：模型以稳定性分析核验；本轮摘要未证实实物实验验证；
- M5：支持对扰动、溪流形成、换热增强和破裂趋势的机制解释。

## 4. 中国 2023 局部干涸模型：模型贡献来自闭合与数据链

Zhang et al. (2023), “Experimental investigation and modeling of falling film heat transfer on partial dry-out condition,” Applied Thermal Engineering 229, 120550, DOI 10.1016/j.applthermaleng.2023.120550.
来源：https://www.sciencedirect.com/science/article/pii/S1359431123005793

可见全文与摘要支持：
- 通过红外设备测量液体覆盖率；
- 使用三维管壁导热模型推算润湿区换热系数；
- 建立基于守恒方程的传热模型，纳入液体覆盖率、气液界面蒸发与液体过冷；
- 研究覆盖全润湿/局部干涸、对流/沸腾等不同工况，并用多组实验数据验证。

这项工作的理论贡献更像“针对局部干涸情景的物理闭合、可观测量与守恒模型整合”，而不是已证明的原创解析理论。它体现了数学模型、实验测量和工程边界之间的结合。标准化误差指标、独立验证数据划分仍需从图表和方法细节进一步核实。

## 5. 贡献类型矩阵

| 贡献类型 | 俄罗斯 ITP 2017 | 中国清华 2019 | 中国局部干涸 2023 |
|---|---|---|---|
| 既有理论框架应用 | 明确：Kapitza–Shkadov 型降阶描述 | 明确：regularized/weighted-residual 模型谱系 | 守恒方程与界面传热闭合 |
| 新数学推导/新解析解 | 未证实 | 有稳定性分析；原创程度未判定 | 未证实新解析解 |
| 新物理情景/闭合 | 非稳态热负载、液氮沸腾/蒸发衰减 | 热毛细作用与三维溪流形成 | 局部干涸覆盖率、界面蒸发与过冷 |
| 数值预测 | 波面、速度/温度、沸腾等待、蒸发时间 | 扰动增长、溪流与破裂 | 润湿区 HTC、跨工况传热 |
| 实验联系 | 有，低热流偏差也已披露 | 摘要未确认实物实验 | 多组实验验证 |
| 已确认的量化误差/收敛 | 未找到标准化误差与系统收敛证据 | 未确认 | 多组验证有证据，统一误差指标待抽取 |

## 6. 本轮洞察与结论边界

1. 俄罗斯 ITP 的数学物理建模特征是真实可描述的：使用低维薄膜流动模型、处理非稳态热负载与移动自由界面，并预测可观测的沸腾/蒸发量。
2. 但“使用经典降阶模型”不等于“原创数学理论”。本轮尚未找到足够证据证明该 2017 研究提出新解析解或一般性稳定性理论。
3. 中国清华研究同样使用三维 regularized/weighted-residual 模型与线性稳定性分析；中国 2023 研究把守恒方程、三维固体导热、红外覆盖率测量和多组实验结合起来。
4. 因而，现有样本支持“俄罗斯 ITP 在非稳态液膜沸腾问题上具有连续建模研究”，但不支持“俄罗斯数学原创性普遍强于中国”。
5. 更可能有区分度的维度是：同一团队多年研究的机制连续性、模型对极端/非稳态工况的覆盖、误差与失效边界是否透明，以及新模型是否相对基线模型带来可量化改进。

## 7. 下一步

1. 对俄罗斯 2014、2017 两篇论文及 IJHMT 长文进行版本差异表，确认新增方程/机制与贡献；
2. 对清华 2019 两篇研究与国际 WRM/RM 基线比较，判定新理论、模型修正和机制发现各占多少；
3. 对中国 2023 论文提取各实验工况、预测/测量图、误差指标和独立验证情况；
4. 基于同一证据表分别评价理论原创性、物理机制、验证质量、研究连续性，不做单一国家总分排名。

## 8. 来源
- Russian ITP conference paper: https://www.itp.nsc.ru/htl/spaceconf-2017/file/Book_of_Abstract_TPSSGA_SYSIPHT_2017c.pdf
- Russian ITP full text: https://www.researchgate.net/publication/320968860_Numerical_simulation_of_heat_transfer_at_unsteady_heat_generation_in_falling_wavy_liquid_films
- Russian IJHMT record: https://www.sciencedirect.com/science/article/abs/pii/S0017931016307256
- Weighted residual model validity: https://www.tandfonline.com/doi/full/10.1080/19942060.2017.1322148
- Robust low-dimensional models under variable wall heating: https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/robust-lowdimensional-modelling-of-falling-liquid-films-subject-to-variable-wall-heating/F5EAEC79F50416DA2D38D886ACFE3658
- China Tsinghua falling film: https://pubs.cstam.org.cn/article/doi/10.7511/jslx20171114003
- China rivulet formation: https://www.tandfonline.com/doi/full/10.1080/19942060.2019.1600028
- China partial dry-out: https://www.sciencedirect.com/science/article/pii/S1359431123005793
