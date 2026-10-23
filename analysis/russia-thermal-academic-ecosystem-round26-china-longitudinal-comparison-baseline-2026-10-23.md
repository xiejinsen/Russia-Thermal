# 第二十六轮｜中国液膜传热团队的纵向对照基线（2026-10-23）

**状态：** CHINA_APPLIED_LINE_2023_2025_IDENTIFIED / CHINA_THEORY_COUNTEREXAMPLE_CONFIRMED / 5_TO_10_YEAR_CONTINUITY_NOT_YET_ESTABLISHED / COUNTRY_LEVEL_ADVANTAGE_NOT_ESTABLISHED

## 1. 本轮目标与选择

本轮开始构建中国侧纵向样本。现有公开证据中，大连理工大学牟兴森、沈胜强及合作者的液膜蒸发/传热论文线在 2023–2025 年较清晰，包含薄液膜闪蒸实验、水平管降膜蒸发换热关联、空间换热系数分布、盐水降膜传热传质与结垢影响等。它适合作为俄罗斯 ITP 液膜传热研究的应用型对照线索。

但该线当前可确认的年份跨度约为 2023–2025，**尚不满足我们原定的 5–10 年纵向样本要求**。本轮将其标为候选线，不夸大为已完成的长期审计；下一轮应从其团队公开档案和引用关系向前追溯，并寻找更长时间跨度的中国团队。

同时保留清华大学下降液膜线性稳定性研究作为数学物理方法的独立反例。它不是与 ITP 液氮沸腾的同工况对照，但能检验“中国缺少理论建模”这一宽泛假设是否成立。

## 2. 中国候选线 A：大连理工大学液膜蒸发与换热

### 2.1 可确认的研究节点

**2023：薄液膜闪蒸蒸发热特性实验**
Shengqiang Shen, Xingsen Mu 等， “Experimental study on thermal characteristics of pure water flashing evaporation from thin-liquid film,” *Applied Thermal Engineering* 233 (2023)。
官方作者主页记录：https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361160.htm

当前可确认研究关注纯水薄液膜闪蒸蒸发的热特性，属于实验驱动的传热机制研究。仅凭作者主页索引，具体模型方程与不确定度需进一步读取正式论文。

**2024：水平管降膜蒸发的换热系数空间分布**
牟兴森团队，“Numerical study of the spatial distribution of heat transfer coefficient during horizontal-tube falling film evaporation,” *International Communications in Heat and Mass Transfer*（官方个人主页记录 2024-12-25）。
来源：https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/346349.htm

研究对象由薄膜闪蒸实验扩展到水平管外降膜蒸发的空间换热系数分布与盐度、喷淋密度等因素。具体数值模型的原创程度和实验验证边界需全文核查。

**2024：氯化钠溶液降膜蒸发传热传质参数分布**
官方主页记录该成果发表于《工程热物理学报》45(10), 3170–3177，出版时间 2024-01-01（主页条目发布时间为 2025-03-03）。
来源：https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/346351.htm

该研究将关注点拓展到盐水降膜蒸发中的浓度分布与热质传递参数，显示团队研究对象不仅是纯水传热，也包括溶液性质与传质耦合。

**2025：海水降膜蒸发换热关联**
牟兴森、沈胜强等，“Correlations and analysis of heat transfer coefficient for seawater falling film evaporation on horizontal tube,” *Desalination* 611（2025）。
来源：https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361141.htm

团队继续研究海水水平管降膜蒸发的换热系数关联，体现出从薄膜闪蒸/局部换热分布到含盐工质与工程关联的延伸。

**2025：动态污垢生长对单管降膜换热性能的影响**
官方主页记录 “Comprehensive analysis of single tube falling film heat transfer performance considering dynamic growth of fouling,” *Desalination* 608（2025）。
来源：https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361142.htm

这一成果将动态污垢作为影响因素纳入单管降膜传热分析。模型细节与实验/关联式的贡献边界仍需全文审计。

### 2.2 可暂时编码的研究演进

- 物理对象：纯水薄膜闪蒸 → 水平管外降膜蒸发 → 盐水/海水热质传递 → 动态污垢影响。
- 方法组合：公开记录显示实验研究、数值空间分布分析、传热传质参数研究和换热关联式并存。
- 研究连续性：2023–2025 年存在多项同方向发表记录，支持近期连续研究主题。
- 数学原创性：当前官方作者主页只提供题录/关键词，不能证明原创解析理论或稳定性分析。
- 验证质量：尚需逐篇核查误差、独立验证数据、参数敏感性与模型适用范围。
- 局限：这条线与 ITP 的低温液氮、瞬态沸腾危机和淬冷前沿不同；适合比较液膜传热建模策略，不宜直接比较预测性能。

## 3. 中国候选线 B：清华大学下降液膜稳定性与溪流形成

### 3.1 2019 年线性稳定性研究
Wang Meng, Liu Jie-bin, Jiang Sheng-yao, Duan Ri-qiang, “A study on a vertical falling liquid film on a uniformly heated plate with constant heat flux,” *Chinese Journal of Computational Mechanics* (2019), 180–189. DOI 10.7511/jslx20171114003.
来源：https://pubs.cstam.org.cn/article/doi/10.7511/jslx20171114003

论文采用三维 regularized model，对流向与展向扰动进行线性稳定性分析和三维数值模拟，讨论 Reynolds 数、Marangoni 数、扰动增长率、不稳定波数区间、溪流结构与液膜破裂趋势。

### 3.2 2019 年溪流形成研究
Wang et al., “Rivulet formulation in the flow of film down a uniformly heated vertical substrate,” *Engineering Applications of Computational Fluid Mechanics* 13(1) (2019), 396–416. DOI 10.1080/19942060.2019.1600028.
来源：https://www.tandfonline.com/doi/full/10.1080/19942060.2019.1600028

公开摘要称研究采用三维 regularized weighted-residuals model，并通过线性稳定性分析研究展向/流向不稳定性；将溪流状结构形成与展向热毛细 Marangoni 效应联系起来。

### 3.3 对假设的意义
这两篇论文是中国团队使用数学模型、线性稳定性分析、无量纲参数与机制解释的直接反例。它们不能证明中国整体的理论研究强于或等于俄罗斯，也不属于液氮沸腾同工况对照；但它们足以反驳“中国热管理/液膜研究只有实验和工程仿真、缺少数学物理推理”的笼统说法。

目前仅能确认 2017–2019 的投稿/发表线索，尚未形成完整 5–10 年团队论文链。需进一步核查该团队更早/更晚研究及其模型与国际 weighted-residual 方法谱系的关系。

## 4. 与俄罗斯 ITP 的初步纵向对照

| 维度 | 俄罗斯 ITP 液膜/淬冷线 | 中国大连理工液膜蒸发线 | 中国清华液膜稳定性线 |
|---|---|---|---|
| 可见时间跨度 | 2011/2012–2017，另有 2021–2024 应用研究 | 当前确认 2023–2025 | 当前确认 2017–2019 相关论文 |
| 核心物理问题 | 低温液氮、瞬态加热、沸腾起始、淬冷/再润湿 | 薄膜闪蒸、水平管降膜蒸发、盐水/海水热质传递、污垢 | 垂直液膜稳定性、热毛细效应、溪流形成与破裂 |
| 方法证据 | 降阶薄膜模型、瞬态热传导、实验对照 | 实验、数值空间分布、热质传递参数与换热关联 | 3D regularized/weighted-residual model、线性稳定性分析 |
| 数学原创性 | 新通用理论未证实 | 仅凭题录不能判断 | 有明确理论分析，原创程度需与既有 WRM 方法比较 |
| 验证质量 | 有实验比较，但标准化误差/系统收敛证据不完整；有公开失效假设 | 需全文提取误差与独立验证信息 | 公开摘要未确认实物实验验证 |
| 当前能支持的判断 | 连续建模与实验—机制联系 | 近期应用研究主题连续 | 中国有明确数学物理方法反例 |

## 5. 本轮洞察

1. 中国侧并非只有工程仿真：清华的线性稳定性分析明确研究扰动增长和不稳定区间，是数学物理分析的直接证据。
2. 大连理工团队在 2023–2025 年有连续的降膜蒸发与传热研究，方法覆盖实验、空间分布建模、热质传递参数和换热关联，但目前无法从作者主页题录判定数学原创性深度。
3. 俄罗斯 ITP 的研究线在低温液膜沸腾、瞬态热负载与淬冷前沿方面更聚焦于危机/瞬态机制；中国候选线分别更偏溶液蒸发/换热器应用和液膜稳定性理论。这是研究问题与方法组合的差异，不等于总体能力高低。
4. 由于中国侧尚未形成 5–10 年完整链，本轮是“纵向基线建立”，不是完成了中俄纵向排名。
5. 当前最有价值的下一步是追踪中国大连理工团队更早论文，并取得 2023–2025 论文全文，确认模型、实验、误差和新贡献；同时继续补齐清华团队论文谱系。

## 6. 下一步

1. 从大连理工牟兴森、沈胜强官方成果目录向前追溯至 2015–2022，寻找同一团队的降膜蒸发、闪蒸、热质传递、换热关联论文。
2. 取得 2023/2024/2025 代表论文全文，抽取模型假设、控制方程、验证工况、误差、独立验证和参数敏感性。
3. 对清华 2019 稳定性论文比较其 regularized/weighted-residual 模型与国际基线，避免把方法应用误写为原创理论。
4. 最终以统一 M1–M5 及研究连续性指标比较，不以国家标签或论文数量代替贡献审计。

## 7. 来源
- Dalian University of Technology, Mu Xingsen publication list: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/list/index.htm
- Dalian 2023 thin-film flashing experiment: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361160.htm
- Dalian 2024 spatial HTC study: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/346349.htm
- Dalian 2024 NaCl solution falling-film study: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/346351.htm
- Dalian 2025 seawater correlation: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361141.htm
- Dalian 2025 fouling model: https://faculty.dlut.edu.cn/muxingsen/en/lwcg/667916/content/361142.htm
- Tsinghua 2019 stability paper: https://pubs.cstam.org.cn/article/doi/10.7511/jslx20171114003
- Tsinghua 2019 rivulet paper: https://www.tandfonline.com/doi/full/10.1080/19942060.2019.1600028
- Chinese partial dry-out model (2023): https://www.sciencedirect.com/science/article/pii/S1359431123005793
