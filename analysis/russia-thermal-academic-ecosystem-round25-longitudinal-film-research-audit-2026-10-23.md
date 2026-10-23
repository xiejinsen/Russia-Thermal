# 第二十五轮｜ITP 下降液膜/淬冷研究的纵向积累审计（2026-10-23）

**状态：** LONGITUDINAL_RESEARCH_LINE_CONFIRMED / MODEL_IMPROVEMENT_NOT_FULLY_QUANTIFIED / APPLICATION_FOCUS_EVOLVED / COUNTRY_LEVEL_ADVANTAGE_NOT_ESTABLISHED

## 1. 本轮问题

沿着 ITP（库塔捷拉泽热物理研究所）及 A. N. Pavlenko、A. N. Chernyavskiy、I. P. Starodubtseva、A. S. Surtaev 等研究者的公开发表记录，追踪下降液膜、沸腾危机、淬冷/再润湿方向是否形成连续研究积累。区分：
- 同一物理机制上的模型改进；
- 相关团队在相邻问题上的研究拓展；
- 论文数量增加与真正的理论/预测能力提升；
- 实验验证存在与量化预测精度得到证明。

本轮依据出版商摘要、ITP 官方实验室出版目录、期刊索引与研究者公开发表记录。未获得所有论文的正式全文，故不能声称完成了逐篇公式复核或量化误差再计算。

## 2. 时间线：从非稳态模型到复杂表面与工程强化

### 2011：自持蒸发前沿与沸腾危机
Pavlenko、Zhukov、Starodubtseva 等研究“Propagation of self-sustained evaporation fronts at step-wise heat generation and crisis phenomena at pool boiling”（Computational Thermal Sciences, 2011，DOI 10.1615/ComputThermalScien.2011004011）。
来源记录：https://orcid.org/0000-0003-0624-3954
可确认其属于同一研究网络对热负载突变、蒸发前沿和沸腾危机的早期研究线索。由于本轮未取得全文，具体方程、模型假设与误差指标记为 OPEN。

### 2012：过热表面的液膜再润湿
Starodubtseva、Pavlenko、Volodin、Surtaev，“The features of rewetting dynamics of the overheated surface by a falling film of cryogenic liquid,” *Thermophysics and Aeromechanics* (2012), DOI 10.1134/S0869864312020138。
来源记录：https://orcid.org/0000-0003-0624-3954
这条研究把焦点落在低温液膜与过热表面接触恢复的动态过程，与后续淬冷前沿和表面温度场研究在物理机制上相关。

### 2014：非稳态热负载下波状液膜的沸腾等待与衰减
Chernyavskiy & Pavlenko，“Calculation of decay parameters for the wavy film flow at unsteady heat release,” *Thermophysics and Aeromechanics* 21 (2014), 57–64，DOI 10.1134/S0869864314010065。
来源：https://www.sibran.ru/en/journals/issue.php?ARTICLE_ID=155044&ID=165276&PAGEN_1=253
摘要明确称，建立用于计算沸腾等待时间与局部总蒸发量的数学模型，数值模拟液氮下降波状液膜的波形成，并比较模型与实验数据。此处可确认“模型—可观测预测—实验对照”的方法链。

### 2014：过热表面再润湿的动态研究
Pavlenko、Surtaev、Tsoi、Starodubtseva、Serdyukov，“Dynamics of a superheated surface rewetting with a falling liquid film,” *High Temperature* 52 (2014), 861–868，DOI 10.1134/S0018151X1406011X。
来源：https://orcid.org/0000-0003-0624-3954
这与 2012 再润湿研究及 2017 淬冷研究形成主题连续性线索；但需对照全文确认各篇模型是否继承、改进或只是实验场景不同。

### 2017：非稳态波状液膜的临界热流预测
Chernyavskiy & Pavlenko，“Numerical simulation of heat transfer and determination of critical heat fluxes at nonsteady heat generation in falling wavy liquid films,” *International Journal of Heat and Mass Transfer* 105 (2017), 648–654，DOI 10.1016/j.ijheatmasstransfer.2016.09.017。
来源：
- https://www.sciencedirect.com/science/article/abs/pii/S0017931016307256
- ITP 实验室目录：https://www.itp.nsc.ru/lmpt/?lang=en&page_id=1257
摘要指出模型预测波面、速度和温度场随时间演化，计算不同入口 Reynolds 数和热流密度下的沸腾等待时间与局部总蒸发时间，给出液膜衰减机制图。高热流区计算关系近似一致；低热流区存在偏差，作者认为蒸发对传热的影响在该区不可忽略。论文报告与实验总体吻合，但本轮未找到标准化 MAE/RMSE、完整不确定度预算或系统收敛表。

### 2017：液氮液膜淬冷的前沿与动态热流
Starodubtseva、Pavlenko、Surtaev，“Heat transfer during quenching of high temperature surface by the falling cryogenic liquid film,” *International Journal of Thermal Sciences* 114 (2017), 196–204，DOI 10.1016/j.ijthermalsci.2016.12.015。
来源：https://www.sciencedirect.com/science/article/abs/pii/S1290072915302052
摘要确认冷冻实验与数值模拟研究了液氮液膜对过热垂直铜板的淬冷；发现淬冷前沿附近存在异常传热，最大热流高于准稳态平均值；提出前沿停滞时间关联式，并将前沿几何、速度与表面温度随时间的变化和实验比较。
重要限制：全文片段明确承认模型包含强假设，例如干区热流设为零、湿润区换热系数取常数；模型结果因此具有定性特征，湿润区换热系数与再润湿温度的不确定性也限制预测能力。这是对模型失效边界的明确披露，不应忽略。

### 2021–2024：向表面结构、涂层与换热器应用拓展
ITP 官方实验室成果清单显示，Pavlenko 及合作者的研究进一步涉及：
- 2021：R21 下降液膜在 MAO 涂层水平管束上的换热强化实验；
- 2023：改性 MAO 涂层水平管束中的 R21 液膜换热；
- 2023：粗糙水平管上的液膜润湿/蒸发/沸腾；
- 2024：微弧氧化涂层下降液膜沸腾中的滞后现象；
- 2024：垂直圆柱上单层/梯度双层网状涂层的液膜换热；
- 2024：3D 打印双尺度涂层上制冷剂混合物液膜蒸发/沸腾。
官方来源：
- https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/rezultaty_lab_1.3.html
- https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/2024_lab1.3.html

这些成果支持研究团队的主题连续性与应用范围扩展，但多数是表面强化、润湿、换热器或实验传热方向，不能自动视为 2011–2017 数学模型的直接延伸或数学理论升级。应将“同一实验室的相关研究积累”和“同一模型谱系的连续改进”分开编码。

## 3. 纵向审计结论

### 3.1 已支持的判断
1. ITP 的下降液膜、过热表面再润湿、沸腾危机与淬冷前沿研究至少从 2011/2012 延续到 2017，并在 2021–2024 继续发展到涂层与换热器中的液膜传热。
2. 2014 与 2017 的波状液膜论文在研究者、物理问题和预测量上高度相关；2017 论文将问题扩展到临界热流/衰减工况图，构成研究连续性的强线索。
3. 2017 淬冷研究把前沿几何、速度、表面温度与实验对照，且公开讨论模型假设与参数不确定性。
4. 该研究线体现了模型、实验与机制解释相互连接的研究方式，而不是单纯报告数值仿真图。

### 3.2 尚未支持的判断
1. 还没有证明 2017 模型在定量精度上显著优于 2014 模型；缺少可比误差指标、统一基准与收敛数据。
2. 还没有证明早期低热流区偏差在后续论文中被解决。
3. 还没有证明团队原创了新的通用数学理论；现有证据更多支持既有降阶模型与传热/沸腾场景耦合。
4. 不能把 2021–2024 涂层和换热器实验直接当作 2011–2017 模型的数学演进证据。
5. 不能由一个俄罗斯研究团队的纵向积累推出俄罗斯整体优于中国。

## 4. 与中国比较时应采用的纵向指标

对中国同类团队也应收集 5–10 年论文链，并使用相同指标：
- 模型结构变化：新控制方程、闭合关系、边界条件或尺度约化；
- 理论增量：相对已有模型增加了什么可验证的数学/物理内容；
- 预测量扩展：是否从平均换热系数拓展到前沿、瞬态场、临界条件或失效图；
- 验证质量：独立实验、误差、参数敏感性、收敛性；
- 失败边界：是否明确报告模型在哪些工况下失效；
- 技术迁移：是否解决移动终端类似的瞬态、局部热点或失稳问题。

## 5. 对端侧热管理的初步迁移判断

直接迁移性有限：液氮淬冷、工业下降液膜和手机芯片封装的材料、尺度、流动状态与边界条件差异很大。值得借鉴的不是液氮参数，而是建模思路：
- 对热负载突变显式求解瞬态响应，而不是只用稳态热阻；
- 将局部接触/润湿状态与热流变化联系起来；
- 用可观测前沿或状态变量刻画热状态转变；
- 把模型失效边界和参数不确定性纳入预测；
- 以实验/公开基准分别验证数值实现与物理模型。

这些原则可能适用于手机局部热点、界面接触热阻变化、热扩散路径切换或热失稳分析，但具体可迁移性仍需对应的端侧论文与数据验证。

## 6. 下一步

1. 获取 2014 与 2017 波状液膜论文可比较的模型方程、参数和图表，确认模型增量及低热流偏差是否变化。
2. 对 2012/2014/2017 再润湿与淬冷论文建立“模型假设—预测量—实验量—已知局限”矩阵。
3. 选择中国同一研究团队的 5–10 年下降液膜/沸腾/局部干涸论文链，按相同指标做纵向审计。
4. 再评估差异究竟来自俄罗斯研究连续性、问题选择、实验平台、数学原创性还是验证规范。

## 7. 来源
- ITP laboratory publications: https://www.itp.nsc.ru/lmpt/?lang=en&page_id=1257
- ITP results 2021 onward: https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/rezultaty_lab_1.3.html
- ITP results 2024: https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/2024_lab1.3.html
- Chernyavskiy 2014: https://www.sibran.ru/en/journals/issue.php?ARTICLE_ID=155044&ID=165276&PAGEN_1=253
- Chernyavskiy & Pavlenko 2017: https://www.sciencedirect.com/science/article/abs/pii/S0017931016307256
- Starodubtseva et al. 2017: https://www.sciencedirect.com/science/article/abs/pii/S1290072915302052
- Pavlenko et al. 2014 rewetting: https://orcid.org/0000-0003-0624-3954
