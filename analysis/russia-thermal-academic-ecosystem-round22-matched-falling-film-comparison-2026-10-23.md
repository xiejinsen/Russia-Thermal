# 第二十二轮｜中俄下降液膜研究的同题方法对照（2026-10-23）

**状态：** MATCHED_PHYSICS_FAMILY_IDENTIFIED / METHOD_DIFFERENCES_PRELIMINARY / NATIONAL_ADVANTAGE_NOT_ESTABLISHED

## 1. 本轮目标

将比较对象从不同物理任务的“盐液膜结晶 vs. PCM 仪器舱”转向更接近的物理问题：垂直下降液膜、波动、瞬态加热、沸腾、局部干涸与稳定性。

仍采用 M1–M5：
- M1 控制方程与物理闭合；
- M2 数学推导/理论分析；
- M3 数值方法与计算分析；
- M4 实验、基准、误差和收敛验证；
- M5 新机制、可检验预测与适用边界。

当前只对公开摘要、官方索引和可见正文片段编码；“未确认”不等于论文没有。

## 2. 俄罗斯样本

### RU-ITP-2014：非稳态波状降膜模型
A. N. Chernyavskiy, A. N. Pavlenko, “Calculation of decay parameters for the wavy film flow at unsteady heat release,” *Thermophysics and Aeromechanics* 21(1) (2014), 57–64. DOI: 10.1134/S0869864314010065.
来源：https://www.sibran.ru/en/journals/issue.php?ARTICLE_ID=155044&ID=165276&PAGEN_1=253

公开摘要称，该研究建立用于确定沸腾起始等待时间和局部总蒸发量的数学模型，数值模拟液氮下降波状液膜的波形成，并计算逐级提高热负载时沸腾起始时间与热流密度的关系；模拟结果与实验数据取得满意一致。

编码：
- M1：部分支持，公开摘要确认数学模型，但完整控制方程和闭合细节需全文；
- M2：OPEN，摘要未证明新解析解或稳定性理论；
- M3：支持数值模拟液膜波形成和瞬态传热；
- M4：支持摘要级实验比较，误差指标/独立验证未确认；
- M5：支持预测沸腾起始与局部蒸发、描述液膜衰减参数。
解读：模型—预测—实验对照存在直接证据，但不能只凭摘要称其具有原创数学理论。

### RU-ITP-2017：非稳态波状降膜传热与临界热流
A. N. Chernyavskiy, A. N. Pavlenko, “Numerical simulation of heat transfer and determination of critical heat fluxes at nonsteady heat generation in falling wavy liquid films,” *International Journal of Heat and Mass Transfer* 105 (2017), 648–654.
摘要/全文索引：https://www.researchgate.net/publication/320968860_Numerical_simulation_of_heat_transfer_at_unsteady_heat_generation_in_falling_wavy_liquid_films
DOI/会议版本：https://doi.org/10.1088/1742-6596/925/1/012015

公开可见材料说明模型计算波面轮廓、速度和温度场，模拟液氮下降波状液膜，预测沸腾等待时间和局部蒸发时间，并形成描述液膜不同衰减机制的工况图；结果与实验数据总体吻合。

编码：
- M1：支持模型涉及波面、速度与温度场；
- M2：OPEN，尚未确认原创渐近理论或解析推导；
- M3：支持耦合数值模拟和工况图；
- M4：支持摘要级实验对照；网格/时间步收敛与定量误差待全文；
- M5：支持对液膜衰减机制与临界热流的预测。
解读：它与 2014 年论文形成同团队、相近物理问题的连续研究线，比单篇论文更能支持“长期研究积累”的假设。但两篇论文之间的新增理论贡献还需要全文比较。

### RU-ITP-2017-Q：高温表面液氮降膜淬冷
I. P. Starodubtseva, A. N. Pavlenko, A. S. Surtaev, “Heat transfer during quenching of high temperature surface by the falling cryogenic liquid film,” *International Journal of Thermal Sciences* 114 (2017), 196–204. DOI: 10.1016/j.ijthermalsci.2016.12.015.
来源：https://www.sciencedirect.com/science/article/abs/pii/S1290072915302052

摘要说明研究结合低温实验与数值模拟，考察液氮降膜冷却高温垂直铜板；模型预测淬冷前沿速度和加热壁温度场，并直接与前沿几何、速度及表面温度随时间的实验数据比较。

编码：M1 部分支持；M2 OPEN；M3 支持瞬态数值模型；M4 支持直接实验比较；M5 支持对淬冷前沿和局部高热流机制的预测。
解读：进一步支持该团队研究瞬态液膜传热与热失稳/淬冷问题的连续性，但仍需区分实验机理发现与数学理论原创性。

## 3. 中国样本

### CN-TSINGHUA-2017：垂直等热流下降液膜的线性稳定性分析
Wang Meng, Liu Jie-bin, Jiang Sheng-yao, Duan Ri-qiang, “A study on a vertical falling liquid film on a uniformly heated plate with constant heat flux,” *Chinese Journal of Theoretical and Applied Mechanics*.
来源：https://pubs.cstam.org.cn/article/doi/10.7511/jslx20171114003

公开摘要指出，研究使用等热流密度加热条件下的三维模型方程进行线性稳定性分析和数值模拟；分析了流向/展向扰动增长率随 Reynolds 数与 Marangoni 数变化的规律，并指出扰动波数存在不稳定区间。

编码：
- M1：支持三维模型方程；
- M2：支持线性稳定性分析，属于明确数学分析任务；
- M3：支持数值模拟；
- M4：摘要未确认实验验证；
- M5：支持对扰动增长率和不稳定区间的理论预测。
解读：这是重要的中国反例：在下降液膜问题中，中国研究也采用模型方程和稳定性理论，而不只是实验或工程仿真。与俄罗斯液氮沸腾论文并非完全同工况，但在液膜动力学/失稳方法上可作方法层对照。

### CN-ATE-2023：局部干涸下降液膜传热实验与模型
P. Zhang, R. Chen, G. H. Su, W. Tian, S. Qiu, “Experimental investigation and modeling of falling film heat transfer on partial dry-out condition,” *Applied Thermal Engineering* 229 (2023), 120550.
来源：https://www.sciencedirect.com/science/article/pii/S1359431123005793

公开摘要指出，研究在水平铜管上进行下降液膜实验，用红外设备测量液体覆盖率；基于三维管壁导热模型求取润湿区换热系数，并根据守恒方程建立考虑液体覆盖率、气液界面蒸发和液体过冷的一般传热模型；模型使用多组实验数据验证，目标涵盖全润湿/局部干涸、对流/沸腾和不同工质。

编码：
- M1：强，守恒方程和界面蒸发/覆盖率闭合；
- M2：部分，机理模型明确，但原创数学推导的深度需全文；
- M3：OPEN，未确认新通用数值方法；
- M4：强，摘要称多组实验验证；
- M5：支持统一模型跨工况预测。
解读：这是中国侧较强的“机理模型 + 实验验证”样本，反驳“中国普遍只做工程仿真”的概括。

## 4. 方法对照矩阵

| 样本 | 数学/理论任务 | 数值计算 | 实验验证 | 暂时可支持的判断 |
|---|---|---|---|---|
| RU-ITP-2014 | 沸腾起始/局部蒸发模型；理论原创性 OPEN | 波形成与瞬态热传递模拟 | 摘要称吻合 | 俄罗斯团队有模型—实验结合 |
| RU-ITP-2017 | 波面/速度/温度场模型与衰减工况图 | 耦合数值模拟 | 摘要称吻合 | 同团队连续研究，预测对象更丰富 |
| RU-ITP-2017-Q | 淬冷前沿与壁温瞬态模型 | 数值模拟 | 前沿、速度、壁温直接比较 | 瞬态机制与模型验证结合 |
| CN-TSINGHUA-2017 | 线性稳定性分析 | 数值模拟 | 摘要未确认 | 中国也有数学稳定性分析 |
| CN-ATE-2023 | 守恒方程、液体覆盖率、界面蒸发模型 | 管壁 3D 导热与模型实现 | 多组实验验证 | 中国也有机理模型与跨工况预测 |

## 5. 本轮洞察

1. **更有希望的俄罗斯差异化线索是研究连续性和多环节组合**：同一研究团队持续研究液膜波动、瞬态加热、沸腾起始、临界热流与淬冷前沿，并将模型预测与实验相比较。
2. **目前还没有证明俄罗斯的数学推导比中国更深。** 俄罗斯样本中的数值模拟和实验对照很明确，但摘要尚不足以证明原创渐近理论、稳定性理论或新解析解的优势。
3. **中国反例具有实质性。** 清华样本明确使用线性稳定性分析；2023 年样本以守恒方程建立机理模型，并用多组实验验证。因此“俄罗斯理论、中国工程”的简单二分不成立。
4. 更值得检验的差异可能不是是否使用数学，而是：是否持续研究复杂瞬态机制；是否把波动/失稳分析与工程可观测量连接；是否构建跨工况预测图；是否有更强的模型适用边界意识。
5. 这些都是待检验的研究假设，不能直接升级为国家级结论。

## 6. 下一步

1. 获取 RU-ITP 2014/2017 原文，对照两篇论文的方程、假设、边界条件、算法和实际新增贡献。
2. 获取清华 2017 论文全文，审计线性稳定性推导、扰动边界条件、增长率与不稳定区间的数学依据。
3. 获取中国 2023 降膜干涸论文全文，审计守恒方程、界面闭合、实验误差与模型外推范围。
4. 以“理论贡献、研究连续性、验证质量、预测范围、失效边界”五个维度做成证据矩阵；若全文仍显示双方各有强项，则按具体问题分项描述，而非强行总排名。

## 7. 来源清单

- RU-ITP 2014: https://www.sibran.ru/en/journals/issue.php?ARTICLE_ID=155044&ID=165276&PAGEN_1=253
- RU-ITP 2017: https://www.researchgate.net/publication/320968860_Numerical_simulation_of_heat_transfer_at_unsteady_heat_generation_in_falling_wavy_liquid_films
- RU-ITP quenching 2017: https://www.sciencedirect.com/science/article/abs/pii/S1290072915302052
- CN Tsinghua 2017: https://pubs.cstam.org.cn/article/doi/10.7511/jslx20171114003
- CN ATE 2023: https://www.sciencedirect.com/science/article/pii/S1359431123005793
