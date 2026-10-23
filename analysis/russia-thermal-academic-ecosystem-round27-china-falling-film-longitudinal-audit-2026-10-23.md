# 第二十七轮｜中国大连理工降膜蒸发研究线纵向追溯（2026-10-23）

**状态：** CHINA_RESEARCH_LINE_EXTENDED_TO_2012_2025 / LONGITUDINAL_CONTINUITY_SUPPORTED / FUNDAMENTAL_MATH_NOVELTY_NOT_ESTABLISHED / CROSS_COUNTRY_RANKING_NOT_ESTABLISHED

## 1. 本轮目标

上一轮把大连理工大学牟兴森、沈胜强及其合作者的相关研究线暂定为 2023–2025 年候选。本轮从官方高校主页、期刊出版商、开放论文页面向前追溯，确认这条研究线可至少追到 2012 年，并在 2015–2025 年持续出现。

关键限制：这是一个以研究方向、核心合作者和共享实验/建模问题串联起来的“研究网络/研究线”，不等于所有论文属于同一固定作者团队。必须把作者连续性、机构连续性和模型谱系分别编码。

## 2. 时间线及方法变化

### 2012：实验测量建立基础
Xingsen Mu, Shengqiang Shen, Yong Yang, Xiaohua Liu, “Experimental study of falling film evaporation heat transfer coefficient on horizontal tube,” *Desalination and Water Treatment* 50 (2012), 310–316. DOI: 10.1080/19443994.2012.719734.
来源：https://www.deswater.com/DWT_abstracts/vol_50/50_2012_310.pdf

建立水平管降膜蒸发实验设备，研究热流、管周位置等因素对换热系数的影响。它提供实验基线，不是原创数学理论证据。

### 2014–2015：实验、CFD 与分布式参数模型并行
1. Shen et al., “Heat transfer characteristics of horizontal tube falling film evaporation for desalination,” *Desalination and Water Treatment* 55 (2015), 3343–3349. DOI 10.1080/19443994.2014.946726.
来源：https://www.deswater.com/DWT_abstracts/vol_55_12/55_12_2015_3343.pdf
以水和不同盐度海水开展水平管外降膜蒸发实验，研究温度、喷淋密度与盐度影响。

2. Gong et al., “Three-dimensional heat transfer coefficient distributions in a large horizontal-tube falling film evaporator,” *Desalination* 357 (2015), 104–116. DOI 10.1016/j.desal.2014.10.012.
来源：https://www.sciencedirect.com/science/article/pii/S0011916414005359
基于实验数据建立分布式参数模型，分析管排方向、管长方向和管列方向的换热系数分布。这里的模型贡献主要是工程系统空间分布建模与实验数据驱动的参数化，而非已证明的解析理论。

3. Qiu et al., “Numerical study of falling film thickness over fully wetted horizontal round tube,” *International Journal of Heat and Mass Transfer* 84 (2015), 893–897; 后续发表了实验/数值研究。
来源：https://institution.dlut.edu.cn/haiyangnengyuanliyongyujienengjiaoyubuzhongdianshiyanshi/en/tdcy/1098074/content/6703.htm
这条研究线用 CFD/VOF 分析水平管表面液膜铺展、厚度和流型。公开记录显示商业 Fluent 与 VOF 的使用，故不应把 CFD 本身当作数学原创性证据。

### 2016–2018：液膜厚度、双相耦合与污垢
1. Qiu et al. (2016), “An investigation on the falling film thickness of sheet flow over a completely wetted horizontal round tube surface,” *Desalination and Water Treatment* 57(35), 16277–16287.
来源：https://www.tandfonline.com/doi/full/10.1080/19443994.2015.1079803
研究完整润湿条件下的液膜分布；摘要明确采用 Fluent 6.3.26 和二维多相流模型，分析瞬态铺展及稳态周向膜厚。这是数值模型应用与流动形态分析。

2. Zhou Yihui et al. (2017), “Numerical simulation of double-phase coupled heat transfer process of horizontal-tube falling film evaporation,” *Applied Thermal Engineering* 118 (2017), 33–40.
来源：https://faculty.dlut.edu.cn/1998011011/zh_CN/lwcg/751166/content/212540.htm
提出切片法描述管内连续两相变化，并以 VOF 研究喷淋密度对液膜厚度和周向/轴向换热系数的影响；将管内外耦合换热纳入模型。其增量在耦合建模和系统级预测，尚无证据表明是新的普适数学理论。

3. Liu et al. (2018), “Effect of the tube surface temperature on the seawater fouling process during falling film evaporation outside horizontal tubes,” *Desalination and Water Treatment* 136 (2018), 1–6. DOI 10.5004/dwt.2018.21500.
来源：https://www.deswater.com/DWT_articles/vol_136_papers/136_2018_1.pdf
以海水降膜蒸发中的污垢为对象，研究管表面温度影响。该成果拓展了系统的运行限制与结垢问题，属于实验/机理应用方向。

### 2019：低 Reynolds 数流型和阻垢
1. Liu et al., “Experimental study on droplet flow pattern of horizontal tube falling film flow with low Reynolds number,” *CIESC Journal* 70(12) (2019), 4565–4574. DOI 10.11949/0438-1157.20190658.
来源：https://hgxb.cip.com.cn/EN/abstract/abstract20681.shtml
使用高速摄像观察低 Reynolds 数、不同管间距下的滴状流型，提供液膜流动形态实验。

2. Liu et al., “Study on the performance of a scale inhibitor during horizontal-tube falling film evaporation of seawater,” *IOP Conference Series: Earth and Environmental Science* 227 (2019), 062018. DOI 10.1088/1755-1315/227/6/062018.
来源：https://doi.org/10.1088/1755-1315/227/6/062018
研究海水降膜蒸发中的阻垢剂性能，进一步拓展至材料/运行管理问题。

### 2022：空气—水耦合下的三维传热传质
Zhang, Mu & Shen, “Numerical simulation analysis of heat transfer in falling film evaporation process of air-water convection outside horizontal tube,” *Journal of Dalian University of Technology* 62(2) (2022), 172–178.
来源：https://eurekamag.com/research/097/132/097132027.php
开展三维数值模拟，改变空气表观速度和喷淋密度，分析平均换热系数与 Sherwood 数等。该研究扩展了气流影响与热质传递耦合，但本轮没有证据表明其提出新解析理论。

### 2023–2025：预测关联式、机器学习与局部机理
1. Ma et al. (2023/online 2024), “Prediction of heat transfer coefficient of horizontal tube falling film evaporation based on GA-BP neural network,” *CIESC Journal* 74(12), 4840–4851. DOI 10.11949/0438-1157.20231037.
来源：https://hgxb.cip.com.cn/EN/abstract/abstract33246.shtml
用遗传算法优化 BP 神经网络预测换热系数。属于数据驱动预测，不应等同于第一性原理推导。

2. Li et al. (2024), “A correlation of heat transfer for falling film evaporation on the horizontal tube with multiple-precision expansion method,” *International Journal of Heat and Mass Transfer* 221, 125022. DOI 10.1016/j.ijheatmasstransfer.2023.125022.
来源：https://www.sciencedirect.com/science/article/pii/S0017931023011675
在水和海水实验基础上提出换热关联式，研究范围包括管径 19–38 mm、喷淋 Reynolds 数 118–1979、饱和温度 50–70 °C、盐度 0–60 g/kg。论文提出基于液膜厚度/湍流竞争机制解释临界喷淋 Reynolds 数及液膜对换热系数的双重影响。这里的“multiple-precision expansion method”用于建立关联式的表达形式和最小二乘拟合；不能仅凭方法名称将其归类为基础数学理论创新。它的可检验贡献应由关联式在数据范围内的预测误差、相较既有相关式的提升和外部验证来评估。

3. Mu et al. (2024), “Numerical study of the spatial distribution of heat transfer coefficient during horizontal-tube falling film evaporation,” *International Communications in Heat and Mass Transfer*.
来源：https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/346349.htm
继续分析盐度、喷淋密度和蒸发温度对空间换热系数分布的影响。

4. Mu et al. (2025), “Correlations and analysis of heat transfer coefficient for seawater falling film evaporation on horizontal tube,” *Desalination* 611.
来源：https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361141.htm
研究海水降膜换热关联与局部周向分布，继续强化工程预测。

5. Mu et al. (2025), “Comprehensive analysis of single tube falling film heat transfer performance considering dynamic growth of fouling,” *Desalination* 608.
来源：https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361142.htm
将动态污垢生长纳入单管降膜换热性能分析，属于对长期运行工况的模型扩展。

## 3. 纵向结论：长期研究积累确实存在，但是什么类型的积累？

### 已支持
1. 研究网络在 2012–2025 年持续研究水平管降膜蒸发及相关传热传质问题。
2. 研究手段包括实验测量、CFD/VOF、分布式参数模型、管内外双相耦合、经验/半经验关联式、机器学习预测和动态污垢分析。
3. 研究问题逐步从平均换热系数与基本工况，拓展到空间非均匀性、低 Reynolds 数流型、盐度、气流、污垢及更广泛的预测。
4. 2024 年论文提出了液膜厚度/湍流竞争机制，提供了比纯相关式拟合更明确的物理解释；但它仍然以实验数据、关联式和工程预测为核心。

### 尚未支持
1. 尚未发现这条研究线长期持续提出新解析解、系统稳定性理论或基础控制方程的证据。
2. 尚未完成所有论文的定量误差、独立验证、参数敏感性和适用边界提取。
3. 不能将 2012–2025 的所有成果归属同一固定团队或同一模型。
4. 不能因中国候选线偏实验/工程预测就推断中国高校整体缺乏数学物理研究；清华液膜稳定性研究是明确反例。
5. 不能据此认定俄罗斯 ITP 在整体研究能力上优于中国。

## 4. 与俄罗斯 ITP 纵向线的公平对照

| 比较维度 | 俄罗斯 ITP 液膜/淬冷研究线 | 大连理工降膜蒸发研究网络 |
|---|---|---|
| 可见跨度 | 2011/2012–2017 模型/淬冷线；2021–2024 有相邻表面强化研究 | 2012–2025 连续的降膜蒸发与换热网络 |
| 主要物理场景 | 低温液氮、非稳态热负载、沸腾起始、再润湿/淬冷前沿 | 水/海水、水平管降膜蒸发、管束分布、气流、盐度和污垢 |
| 方法重心 | 降阶薄膜模型、瞬态热传导、前沿/局部蒸发预测、实验对照 | 实验、CFD/VOF、分布式参数模型、热质传递、关联式和机器学习 |
| 机制解释 | 关注沸腾危机、液膜衰减、淬冷前沿与再润湿 | 关注液膜厚度、流型、湍流、盐度、气流、换热分布和结垢 |
| 量化验证 | 有实验对照，但标准化误差/系统收敛信息不充分；公开模型假设限制 | 多项研究基于实验；关联式有宽工况数据，但各论文外部验证和误差仍需逐篇核查 |
| 数学原创性 | 新通用理论未证实 | 主要证据为工程机理建模与关联式/数据驱动预测；基础数学原创性未证实 |
| 公平比较限制 | 瞬态低温沸腾与淬冷 | 低温差海水淡化和水平管降膜蒸发；物理工况不同 |

## 5. 对核心假设的更新

- **H1：俄罗斯部分团队具有较强数学物理机理建模传统。** 保留，ITP 的瞬态液膜/淬冷线支持其存在性；仍需比较同题中国团队和更多俄罗斯样本。
- **H2：高校数学物理生态可能支撑热管理建模能力。** 本轮未直接测试；大连理工案例显示研究网络的持续性和工程热物理积累，但不能据此推断高校数学物理整体强弱。
- **H3：相关方法可能迁移到端侧热管理。** 迁移重点应放在瞬态模型、局部状态变量、空间非均匀性、失效边界和验证方法，而非直接迁移工业降膜参数。
- **中俄差异化结论：** 当前更明确的是问题选择和方法组合不同，不是数学水平国家排名。

## 6. 下一步

1. 选取大连理工 2012、2015、2017、2018、2022、2024、2025 代表论文，统一提取方程/假设/验证/误差；
2. 对 2024 多精度展开关联式与 2025 海水局部关联式做定量基线比较，确认是否真正扩大适用范围或改善预测误差；
3. 对俄罗斯 ITP 2014/2017 模型线采用同一表格，区分理论增量、场景增量与验证增量；
4. 选择一个更接近端侧热管理的共同比较任务（例如瞬态热负载下的热扩散/界面换热），避免只比较工业蒸发器。

## 7. 来源登记
- 2012 experimental HTC: https://www.deswater.com/DWT_abstracts/vol_50/50_2012_310.pdf
- 2015 seawater evaporation: https://www.deswater.com/DWT_abstracts/vol_55_12/55_12_2015_3343.pdf
- 2015 3D HTC distribution: https://www.sciencedirect.com/science/article/pii/S0011916414005359
- 2016 film thickness: https://www.tandfonline.com/doi/full/10.1080/19443994.2015.1079803
- 2017 double-phase coupled model: https://faculty.dlut.edu.cn/1998011011/zh_CN/lwcg/751166/content/212540.htm
- 2018 fouling: https://www.deswater.com/DWT_articles/vol_136_papers/136_2018_1.pdf
- 2019 droplet flow: https://hgxb.cip.com.cn/EN/abstract/abstract20681.shtml
- 2019 scale inhibitor: https://doi.org/10.1088/1755-1315/227/6/062018
- 2022 air-water 3D simulation: https://eurekamag.com/research/097/132/097132027.php
- 2023 GA-BP: https://hgxb.cip.com.cn/EN/abstract/abstract33246.shtml
- 2024 multiple-precision expansion correlation: https://www.sciencedirect.com/science/article/pii/S0017931023011675
- 2024 spatial HTC: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/346349.htm
- 2025 seawater correlation: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361141.htm
- 2025 dynamic fouling: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361142.htm
- Dalian lab publication archive: https://institution.dlut.edu.cn/haiyangnengyuanliyongyujienengjiaoyubuzhongdianshiyanshi/en/tdcy/1098074/content/6703.htm
