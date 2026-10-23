# 第二十九轮｜预测精度、验证独立性与模型适用边界审计（2026-10-23）

**状态：** VALIDATION-TYPES-CLASSIFIED / QUANTITATIVE-EXTERNAL-BASELINES-FOUND / RU_CN_SAME_BENCHMARK_UNAVAILABLE / NATIONAL-SUPERIORITY-NOT-EVALUABLE

## 0. 任务与边界

承接第二十八轮，核对俄罗斯 ITP 2014、2017 年非稳态波状液膜论文，中国大连理工 2015 三维管束模型及 2024 水/海水关联式的预测验证质量，重点区分：
1. 作者定性描述的实验符合；
2. 建模/拟合使用的实验数据；
3. 与同一机构但未参与拟合的实验数据对比；
4. 外部独立实验数据或独立研究组复现；
5. 数值实现验证（code verification）和物理模型验证（model validation）。

公开网页核验截至 2026-10-23。本轮能读取原刊摘要、方法片段和若干外部基准研究；俄罗斯论文图表/方程、2015 模型全套误差表以及 2024 中国论文完整误差表不可可靠获取。**未获取不等于论文不存在这些数据**。不得声称完整全文公式审计、论文间统一 MAE/RMSE 比较或重新计算预测误差。

## 1. 验证证据分层

| Level | 要求 | 举例 | 不能推出 |
|---|---|---|---|
| V0 | 作者只说 good/satisfactory agreement | ITP 2014 原刊摘要 | 无法推出误差大小或优于基线 |
| V1 | 提供本研究实验数据支持建模/参数化 | 大连理工 2015 的单管/冷凝/阻力数据 | 尚不能确认样本外泛化 |
| V2 | 同项目留出工况/数据作验证，并披露划分方法 | 需明确 calibration vs test | 不能推断跨装置/工质泛化 |
| V3 | 多实验室/跨文献数据集，报告范围及统一误差 | Shah 2021 的 22 来源数据库 | 如果部分数据用于调参，不能称全量独立 |
| V4 | 可复核的独立实验/跨机构盲预测/开放代码数据再现 | 本轮未找到严格满足的同题中俄实例 | 不能将普通实验对照自动标为 V4 |

这些等级不是论文质量总分，只表示当前已核实的验证证据类型。一个研究可能有内部强验证却未被公开摘要展示。

## 2. 俄罗斯 ITP

### RU 2014：Chernyavskiy
原刊：https://www.sibran.ru/en/journals/issue.php?ID=155038
DOI: 10.1134/S0869864314010065

摘要：模型预测非稳态液氮波状液膜的沸腾等待时间、局部总蒸发量，模拟波形成，比较数值预测与实验数据，称符合较好。
- **可确认**：物理模型对实验数据的定性比较，V0+。
- **OPEN**：误差计算公式、逐工况误差、数据是否用于调参、收敛/参数不确定度。
- **禁止推论**：2014 模型精度达到任何具体百分比。

### RU 2017：Chernyavskiy & Pavlenko
期刊/索引：https://eld.bl.uk/catalog/100039226151_0x000001
DOI: 10.1016/j.ijheatmasstransfer.2016.09.017

与前一研究线相比，2017 论文关注更丰富的临界热流/液膜衰减输出。摘要明确出现 **low heat fluxes discrepancy**。
- **可确认**：模型与实验关系、低热流区域计算偏差，V0+并披露局限。
- **OPEN**：与 2014 是否在相同工况、相同实验装置与同一误差定义下比较；新版是否改进偏差；统一 MAD/MAE/RMSE、可信区间与网格收敛。
- **禁止推论**：时间较晚、输出更多就等于精度更高。

## 3. 中国大连理工

### CN 2015：Gong et al., Desalination 357, 104–116
原刊：https://www.sciencedirect.com/science/article/pii/S0011916414005359
DOI: 10.1016/j.desal.2014.10.012

原刊可见方法部分说明：分别开展单管降膜蒸发、单管内凝结、管束蒸汽流动阻力实验，据此获得多个经验关联式，再嵌入分布式参数模型，计算大型水平管降膜蒸发器的换热系数三维分布。
- **可确认**：工程模型由实验关联式构成，具有可明确追溯的物理/经验输入；公开片段给出边界假设，包括每根加热管上部液膜均匀分布、忽略蒸汽剪切力等。
- **验证独立性**：虽然存在不同实验子模块，但这些实验同时为关联式开发服务；在未核实整机测试数据来源及调参过程前，只能标为“有实验驱动建模，独立模型验证 OPEN”，不能标为 V3/V4。
- **OPEN**：管束整机测量与预测的误差、是否使用同一套数据进行参数选择、是否有独立运行工况和 uncertainty budget。

### CN 2024：Li et al., IJHMT 221, 125022
原刊：https://www.sciencedirect.com/science/article/pii/S0017931023011675
DOI: 10.1016/j.ijheatmasstransfer.2023.125022

出版商说明实验在 **non-boiling** 条件下开展，数据范围：
- D = 19–38 mm；
- s/D = 1.3–2.25；
- T_sat = 50–70°C；
- Re_Γ = 118–1979；
- salinity = 0–60 g/kg。

模型通过 multi-precision expansion 形式构造关联式中未知变量影响并结合 least squares，提出液膜厚度与湍流竞争的物理解释；作者称相较已有研究有更好、较宽的适用性。
- **可确认**：完整列明的实验工况边界、拟合/关联式方法性质、作者相对既有模型的定性对照主张。
- **OPEN**：**该论文专属** MAD/MAE/RMSE、训练/测试数据划分、外部验证、不同盐度及管径子群误差与完整系数。
- **关键风险**：ScienceDirect 引用该文的“Cited by”栏目含其他论文的 MAD 16.8% 等指标，不能误归给 Li et al. 2024。

## 4. 新增国际外部验证基线（不能当作中俄同工况排名）

### Shah (2021)
“A general correlation for heat transfer during evaporation of falling films on single horizontal plain tubes,” *International Journal of Refrigeration*.
原刊：https://www.sciencedirect.com/science/article/pii/S014070072100150X

出版商摘要明确：22 个数据来源、11 种工质、1237 数据点，平均绝对偏差 17.4%；管径 12.7–50.8 mm，热流 1–208 kW/m²，液膜 Reynolds 数 19–10734。
- **价值**：有明确数据库宽度、误差指标与覆盖范围的 benchmark。
- **限制**：开发/验证数据是否完全独立、各工质/条件的子群误差需审正文；不可直接与 Li et al. 2024 的不同数据集、不同条件关联式比较。

### Lin et al. (2024)
“On falling film evaporator – A review of mechanisms and critical assessment of correlation on a horizontal tube bundle with updated development,” *International Communications in Heat and Mass Transfer* 150, 107165.
来源：https://www.ornl.gov/publication/falling-film-evaporator-review-mechanisms-and-critical-assessment-correlation
期刊：https://www.sciencedirect.com/science/article/pii/S0735193323005547

摘要明确：4114 数据点来自 8 个来源，6 种制冷剂、多种表面结构，提出的关联式 MAD 28.3%、R² 0.86，覆盖液膜蒸发、核态沸腾、局部干涸等机制。
- **价值**：体现按数据覆盖度和复杂机制分层报告误差的方法。
- **限制**：管束、制冷剂和增强管等与 Shah 的单根光管和大连理工水/海水非沸腾工况并不一致。**28.3% 不能解释为比 17.4% 差**。

## 5. 贡献与验证的对照矩阵

| 样本 | 输出/研究目的 | 可核实验证形式 | 已知定量误差 | 关键 OPEN |
|---|---|---|---|---|
| RU ITP 2014 | 沸腾等待、局部总蒸发 | 作者摘要称实验吻合 | 无 | 实验来源、误差、收敛 |
| RU ITP 2017 | 临界热流、衰减/等待 | 实验对照；披露低热流偏差 | 无 | 2014→2017 真正增益 |
| CN 大连理工 2015 | 大型管束三维 HTC 分布 | 三类子实验支撑模型关联式 | 无（当前已读片段） | 整机独立验证与误差 |
| CN 大连理工 2024 | 水/海水单管蒸发 HTC 关联 | 实验拟合与已有研究关联式对照 | 无（当前已读片段） | MAD/MAE、外部测试 |
| Shah 2021（国际） | 单根光管蒸发 HTC 关联 | 22 来源、1237 点 | MAD 17.4% | 训练/验证重合及子群 |
| Lin et al. 2024（国际） | 管束多机制 HTC 关联 | 8 来源、4114 点 | MAD 28.3%、R² 0.86 | 数据分层及独立性 |

**不应进行模型精度国家排序**：输出量不同（时间/临界热流 vs. HTC）、工质不同、几何不同、机制不同、误差定义和独立性不同。

## 6. 本轮可落地的审计改进

以后所有模型卡必须分开记录：

```
model_id:
source_and_version:
physical_problem:
predicted_quantity_and_units:
governing_equations_and_closures:
calibration_data_ids:
validation_data_ids:
calibration_validation_overlap: OPEN | YES | NO
error_metric_name:
error_metric_definition:
error_value:
error_units:
parameter_and_physics_domain:
uncertainty_and_convergence:
independent_replication: OPEN | YES | NO
failure_modes:
evidence_quality: abstract | indexed_section | full_text | reproduced
status: CONFIRMED | AUTHOR_CLAIM | OPEN | CONTRADICTED
```

不得将作者自报的定性“吻合”映射为任意精度数字，也不得将其他文献或 Cited by 摘要的 MAD 移植为目标论文自身的误差。

## 7. 下一轮可判别任务

1. 获取 ITP 2014/2017 论文图表与参数，抽取模型输出、实测点、计算点、误差和相同工况集合；若不可得就维持 OPEN。
2. 获取 2015 三维管束研究的实验—关联式—整机验证血缘，判断数据是否独立。
3. 获取 2024 Li 等正文完整误差表和各工况/外部文献对照，审计其专属预测 MAD、R²、偏差和可能数据泄露。
4. 引入国际基线，但只在工质、几何、机制、输出和评估协议可比时做排名。
5. 当前项目 P1/P2/HOLD 和数学建模 RESERVE 均不因本轮变化。

## 8. 主要来源

- RU 2014: https://www.sibran.ru/en/journals/issue.php?ID=155038
- RU 2017: https://eld.bl.uk/catalog/100039226151_0x000001
- CN 2015: https://www.sciencedirect.com/science/article/pii/S0011916414005359
- CN 2024: https://www.sciencedirect.com/science/article/pii/S0017931023011675
- Shah 2021: https://www.sciencedirect.com/science/article/pii/S014070072100150X
- Lin et al. 2024: https://www.ornl.gov/publication/falling-film-evaporator-review-mechanisms-and-critical-assessment-correlation
