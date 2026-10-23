# 第二十八轮｜中俄代表论文定量贡献审计（第一阶段）（2026-10-23）

**状态：** REPRESENTATIVE_PAPERS_AUDITED_AT_ABSTRACT/SECTION_LEVEL / QUANTITATIVE_ERROR_EVIDENCE_PARTIAL / CONTRIBUTION_TYPES_SEPARATED / COUNTRY_LEVEL_ADVANTAGE_NOT_ESTABLISHED

## 1. 审计范围与证据等级

本轮按上一轮约定，比较俄罗斯 ITP 2014/2017 非稳态波状液膜研究，与中国大连理工 2012 实验、2015 三维换热分布模型、2024 多精度展开关联式。

本轮可直接读取的来源包括：
- 俄罗斯 2014 期刊目录/摘要；
- 俄罗斯 2017 期刊记录/摘要；
- 中国 2012 开放论文 PDF；
- 中国 2015 出版商摘要及部分章节；
- 中国 2024 出版商页面、摘要、方法描述片段与结论入口。

**限制：** 俄罗斯 2014/2017 完整公式和图表未能在本轮可靠提取；2015 中国论文完整表格/误差细节也未全部可读。因此本轮不声称逐项重算误差或完成公式级复现。定量结论只在公开页面明确报告时记录。

## 2. 俄罗斯 ITP：2014 → 2017 的模型增量

### 2014 论文
Chernyavskiy, A.N. “Calculation of decay parameters for the wavy film flow at unsteady heat release,” *Thermophysics and Aeromechanics* 21(1) (2014), 57–64. DOI 10.1134/S0869864314010065.
来源：https://www.sibran.ru/en/journals/issue.php?ARTICLE_ID=155044&ID=165276&PAGEN_1=253

公开摘要明确：
- 建立数学模型，计算非稳态热释放下波状下降液膜的沸腾等待时间与局部总蒸发量；
- 数值模拟液氮下降液膜的波形成；
- 计算逐级提高热负载时，沸腾等待时间对热流密度的依赖；
- 报告数值模拟与实验数据“令人满意的一致”。

### 2017 论文
Chernyavskiy & Pavlenko, “Numerical simulation of heat transfer and determination of critical heat fluxes at nonsteady heat generation in falling wavy liquid films,” *International Journal of Heat and Mass Transfer* 105 (2017), 648–654. DOI 10.1016/j.ijheatmasstransfer.2016.09.017.
来源：
- https://www.sciencedirect.com/science/article/abs/pii/S0017931016307256
- https://eld.bl.uk/catalog/100039226151_0x000001

公开摘要/目录记录支持：
- 系统方程被提出；
- 计算热流密度变化下的沸腾等待时间；
- 研究题目和摘要进一步强调临界热流/衰减参数；
- 明确指出低热流密度区域计算曲线存在偏差。

### 2014→2017 可确认的增量
| 增量类型 | 当前判断 | 证据与边界 |
|---|---|---|
| 理论增量 | 未证实新通用理论/解析解 | 公开摘要均描述特定液膜模型与数值计算；公式级差异尚未核实 |
| 场景/输出增量 | 有迹象 | 2017 标题明确加入临界热流判定，公开记录继续讨论等待时间与偏差 |
| 验证增量 | 有实验比较，但量化不充分 | 2014 报告与实验满意一致；2017 同时披露低热流区偏差；未找到可直接比较的 MAE/RMSE 或不确定度 |
| 适用范围增量 | 未量化 | 尚无共同工况表、同基准误差表、网格/时间步收敛数据 |

**结论：** 2017 研究可以谨慎描述为对既有研究线的扩展（尤其临界热流/衰减分析），但现有公开材料不足以证明模型精度相对 2014 有提升。低热流区偏差是必须保留的反证，而不是删去的瑕疵。

## 3. 中国大连理工：2012 实验 → 2015 空间模型 → 2024 关联式

### 2012：实验基线
Mu, Xingsen; Shen, Shengqiang; Yang, Yong; Liu, Xiaohua. “Experimental study of falling film evaporation heat transfer coefficient on horizontal tube,” *Desalination and Water Treatment* 50 (2012), 310–316. DOI 10.1080/19443994.2012.719734.
来源：https://www.deswater.com/DWT_abstracts/vol_50/50_2012_310.pdf

可读 PDF 摘要确认：团队搭建水平管降膜蒸发实验设备，测量热流、管周位置、喷淋密度、蒸发温度和工质对换热系数的影响。结果包括：
- 换热系数随喷淋密度先略升后下降；
- 沿管周方向整体下降，但管底出现回升；
- 比较海水与淡水换热系数。

贡献分类：**实验基线/现象识别**。它为后续模型和关联式提供数据与问题定义；没有证据表明此文提出原创数学理论。

### 2015：三维换热系数分布模型
Gong et al., “Three-dimensional heat transfer coefficient distributions in a large horizontal-tube falling film evaporator,” *Desalination* 357 (2015), 104–116. DOI 10.1016/j.desal.2014.10.012.
来源：https://www.sciencedirect.com/science/article/pii/S0011916414005359

出版商片段显示：
- 研究建立综合模型来预测大型水平管降膜蒸发器的换热分布；
- 使用单管外降膜蒸发、单管内蒸汽冷凝和管束蒸汽流动阻力等实验；
- 使用实验数据获得多个经验关联式，再用于系统模型；
- 计算预热区与蒸发区、不同管排方向的换热系数差异。

贡献分类：**工程系统/空间分布模型**。新意在将多个实验关联与管束尺度模型结合，预测空间非均匀性；不应称为新基础理论。定量预测误差与独立验证情况仍需全文表格审计。

### 2024：多精度展开关联式
Li et al., “A correlation of heat transfer for falling film evaporation on the horizontal tube with multiple-precision expansion method,” *International Journal of Heat and Mass Transfer* 221 (2024), 125022. DOI 10.1016/j.ijheatmasstransfer.2023.125022.
来源：https://www.sciencedirect.com/science/article/pii/S0017931023011675

出版商页面明确：
- 实验工况为非沸腾条件；
- 管径 19–38 mm、管距比 s/D=1.3–2.25、饱和温度 50–70 °C、喷淋 Reynolds 数 118–1979、盐度 0–60 g/kg；
- 研究喷淋密度、温度、管距、周向位置和盐度；
- 建立同时适用于水和海水的换热系数关联式；
- 提出基于液膜厚度与湍流竞争的机制解释，分析临界喷淋 Reynolds 数及液膜对换热的双重作用；
- 与既有研究的关联式比较，作者报告更好的预测能力与更宽适用范围。

需要精确区分：
- “multiple-precision expansion method”在该论文中被描述为表达未知变量影响、从而应用最小二乘拟合的表达构造方法；
- 这不自动等于原创基础数学方法；
- 可识别贡献是实验覆盖范围、统一水/海水关联式与竞争机制解释；
- 当前可读页面未提供足够明确的该文专属 MAE/RMSE 数字，因此不写具体精度百分比。页面中其他 2024/2025 论文的误差数值不属于这篇论文，不能移植使用。

## 4. 统一贡献矩阵

| 维度 | 俄罗斯 ITP 2014 | 俄罗斯 ITP 2017 | 大连理工 2012 | 大连理工 2015 | 大连理工 2024 |
|---|---|---|---|---|---|
| 核心输出 | 沸腾等待时间、局部蒸发 | 等待时间、临界热流/衰减分析 | 实测换热系数和参数趋势 | 管束三维换热系数分布 | 水/海水统一换热关联式 |
| 主要增量 | 非稳态液膜模型应用 | 临界热流/衰减问题扩展 | 实验平台与现象基线 | 多实验关联集成到系统分布模型 | 更宽工况关联式与液膜/湍流竞争机制 |
| 新基础数学理论 | 未证实 | 未证实 | 不适用/未证实 | 未证实 | 未证实 |
| 实验联系 | 摘要报告满意一致 | 实验比较，但低热流偏差 | 直接实验 | 以多项实验关联支撑 | 直接实验，覆盖范围明确 |
| 可用定量误差 | 未找到 | 未找到；低热流偏差明确 | 本轮未提取不确定度 | 本轮未提取完整误差 | 本轮公开片段未确认该文专属 MAE/RMSE |
| 主要限制 | 缺少误差/收敛细节 | 低热流偏差、缺少统一误差 | 参数趋势依赖装置/工况 | 关联式与系统模型误差需分开 | 非沸腾、管径/温度/盐度范围有限；外部验证待审 |

## 5. 本轮最重要的洞察

1. 两侧都存在从实验或已有模型出发、逐步扩展输出量/工况范围的工程热物理研究。
2. 俄罗斯 ITP 研究线的显著特征是面向非稳态热负载、沸腾等待、临界热流与液膜衰减；中国大连理工研究线的显著特征是多工况实验、空间换热分布、工程系统模型与关联式。
3. 当前证据不支持把俄罗斯描述为“数学原创理论领先”，也不支持把中国描述为“只有经验拟合”。中国 2024 论文提出了液膜厚度与湍流竞争机制；其理论深度应以可验证的推导和预测增益评估。
4. “模型比旧模型更好”必须有统一数据集、同一误差定义、相同工况和最好独立验证。论文摘要中的“good agreement”“better adaptability”属于作者结论，不等于已独立验证的精度优势。
5. 对端侧热管理真正有迁移价值的是瞬态响应建模、局部状态/几何与热流关系、物理机制解释、参数敏感性及失效边界透明度，而非液氮或海水的具体数值。

## 6. 下一步

- 获取俄罗斯 2014/2017 正式全文并逐式比较模型、参数、边界条件与图表；
- 从中国 2015/2024 正式全文提取关联式系数、误差定义、验证集和参数不确定度；
- 对同一论文分别记录作者自报误差与独立外部验证，不混为一项；
- 在证据不足处保持 OPEN，而不是用定性描述填补。

## 7. 来源
- Russian 2014 paper: https://www.sibran.ru/en/journals/issue.php?ARTICLE_ID=155044&ID=165276&PAGEN_1=253
- Russian 2017 publisher record: https://www.sciencedirect.com/science/article/abs/pii/S0017931016307256
- British Library bibliographic record for Russian 2017 paper: https://eld.bl.uk/catalog/100039226151_0x000001
- China 2012 open PDF: https://www.deswater.com/DWT_abstracts/vol_50/50_2012_310.pdf
- China 2015 distributed HTC model: https://www.sciencedirect.com/science/article/pii/S0011916414005359
- China 2024 correlation: https://www.sciencedirect.com/science/article/pii/S0017931023011675
