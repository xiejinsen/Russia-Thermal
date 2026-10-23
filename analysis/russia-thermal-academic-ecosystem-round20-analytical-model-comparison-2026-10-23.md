# 第二十轮｜解析模型证据深化与中国同类反例审计（2026-10-23）

**状态：** TPU-LINKED-ANALYTICAL-MODEL-EVIDENCE-FOUND / MODEL-LIMITATIONS-EXPLICIT / CHINA-ELECTRONICS-PCM-ANALYTICAL-COUNTEREXAMPLE-FOUND / COUNTRY-LEVEL-ADVANTAGE-NOT-ESTABLISHED

## 1. 本轮目标与方法

本轮继续上一轮确定的任务：寻找真正含解析推导的 TPU 相关论文，并用相同方法标准检验中国电子热管理研究。区分：
- 研究者所属机构/共同作者关系；
- 解析解实际出现在哪个方程；
- 解析解是否构成新贡献；
- 验证是与实验比较，还是仅与另一个数值求解器比较；
- 研究对象与手机/电子热管理的距离。

## 2. TPU 相关解析模型：2026 盐溶液液膜结晶模型

**论文：** S. Ya. Misyura, D. V. Antonov, A. V. Mikulich et al., “A simple model of salt crystal formation in an evaporating liquid film,” *International Journal of Heat and Mass Transfer* 256 (2026), 128056. DOI: 10.1016/j.ijheatmasstransfer.2025.128056.
- 出版商原始记录：https://www.sciencedirect.com/science/article/pii/S0017931025013912
- TPU 的 Pavel Strizhak 出版物列表：https://portal.tpu.ru/SHARED/p/PAVELSPA/publications/Tab?p=1
- 作者记录与摘要：https://www.researchgate.net/publication/401390199_A_simple_model_of_salt_crystal_formation_in_an_evaporating_liquid_film

### 直接可核实的内容
1. 使用薄液膜热传导方程的解析解。
2. 使用组分扩散方程的解析解。
3. 结合 Kolmogorov 结晶动力学理论建立盐晶体形成模型。
4. 用团队内部实验数据验证盐溶液质量和晶体质量的时间演化。
5. 将实现的算法与 COMSOL 对同一输入条件的数值预测比较，作为数值代码验证。
6. 研究明确报告局限：模型不考虑盐晶体之间的相互作用；当晶体质量分数较大时，模型倾向于高估晶体质量。作者指出在其试验参数下，晶体比例超过初始盐质量约 40% 后，该假设就不再安全。

### M1–M5 编码
- M1 方程/物理闭合：支持。模型连接热传导、组分扩散、液膜蒸发和结晶动力学。
- M2 解析/理论方法：支持，但要准确表述。论文使用解析解并结合 Kolmogorov 理论；仅凭摘要还不能断言解析解本身是本文新创。
- M3 数值方法创新：部分支持。论文实现 MATLAB 算法并与 COMSOL 比较；这属于代码/模型验证，不自动意味着提出了新的通用数值算法。
- M4 实验验证：支持。用自有实验数据比较盐溶液与晶体质量的时间演化。
- M5 新机制/预测：部分支持。预测晶体形成位置和质量演化，且揭示了晶体相互作用忽略后模型在后期的偏差。

### 证据边界
这是与 TPU 研究网络有人员联系的解析建模实例；它不是手机热管理论文，也不能自动归为 TPU 单一团队的成果。该研究有意义之处是把解析热传导/扩散、相变/结晶动力学、实验验证和失效边界连起来，而非“俄罗斯团队有解析解”这一标签本身。

## 3. TPU 相关的第二项解析解实例：多层墙体中的相变热传递

**论文：** D. Antonov, M. Nizovtsev, E. Shchepakina, V. Sobolev, P. Strizhak, S. Sazhin, “Heat transfer through a three-layer wall considering the contribution of phase change: a novel approach to the modelling of the process,” *International Journal of Heat and Mass Transfer* 226 (2024), 125500. DOI: 10.1016/j.ijheatmasstransfer.2024.125500.
来源：https://research.brighton.ac.uk/en/publications/heat-transfer-through-a-three-layer-wall-considering-the-contribu/

### 直接证据
- 摘要明确声明得到含相变的多层墙体非稳态热传递方程新解析解。
- 用每一时间步末端的解析解作为下一步初始条件，构建新的数值算法。
- 与 COMSOL Multiphysics 在相同输入条件下的预测进行比较验证。
- 将模型用于含石蜡相变层的三层建筑墙体，预测室内侧温度波动幅度和相位滞后变化。

### M1–M5 编码
- M1：支持，非稳态多层导热与相变问题。
- M2：支持，论文摘要明确称获得新解析解。
- M3：部分支持，解析解嵌入时间步进算法；但目前看到的是与 COMSOL 对照，不是独立实验验证。
- M4：有限。摘要所述验证主要是与 COMSOL 数值预测比较，不能称为实验验证。
- M5：支持应用层预测（温度波动衰减、相位滞后），但对象是建筑围护结构，不是电子器件。

### 证据边界
这进一步证明 TPU 相关研究网络中有把解析解嵌入数值时间推进的研究实践，但具体作者贡献分布和与 TPU 实验室的组织关系应按作者单位/贡献声明继续核验。建筑墙体热惰性问题不能直接替代电子热管理证据。

## 4. 中国同类电子热管理反例：相变仪器舱结构的一维解析模型

**论文：** Jiabin Zhao, Longbin Liu, Mingkun Li, “Research on one-dimensional phase change heat transfer characteristics based on instrument compartment structure,” *Scientific Reports* 14 (2024), 17261.
- 出版商原文：https://www.nature.com/articles/s41598-024-67484-x
- PubMed 记录：https://pubmed.ncbi.nlm.nih.gov/39068226/

### 直接可核实的内容
论文针对高速飞行气动加热导致仪器舱内电子设备失效的问题，构建基于相变材料的一维相变传热理论模型，使用 Lightfoot 积分方程方法得到解析解，并开展仪器舱结构热实验；摘要称实验数据与理论计算结果吻合。

### M1–M5 编码
- M1：支持，一维相变传热理论模型。
- M2：支持，Lightfoot 积分方程方法与解析解。
- M3：未确认新数值算法。
- M4：支持，仪器舱热实验与理论计算比较。
- M5：支持，模型服务于电子设备舱的温度控制结构设计。

### 关键意义
这是与电子设备热防护直接相关的中国反例，且同时具备理论模型、解析解和实验验证。因此，“中国热管理研究普遍只做工程实验/数值仿真、缺乏数学物理推导”不能作为整体结论成立。必须缩小到特定机构、特定论文样本、特定方法任务，才能讨论相对差异。

## 5. 同题可比矩阵

| 研究案例 | 解析/理论方法 | 数值/实现 | 实验验证 | 对象相关性 | 主要缺口 |
|---|---|---|---|---|---|
| TPU 相关：2026 盐液膜结晶 | 热传导解析解 + 组分扩散解析解 + Kolmogorov 结晶动力学 | MATLAB 算法；与 COMSOL 比较 | 自有实验质量曲线 | 热质传递/蒸发，不是电子设备 | 作者贡献归属、解析解是否为本文新创、完整误差范围 |
| TPU 相关：2024 三层墙体 PCM | 含相变多层墙体新解析解 | 解析解驱动时间步算法 | 摘要显示与 COMSOL 比较，不是实验验证 | 建筑热惰性，非电子设备 | 与 TPU 团队的具体组织关系；实验独立验证 |
| 中国：2024 相变仪器舱 | Lightfoot 积分方程方法 + 一维相变解析解 | 摘要未突出新数值算法 | 仪器舱热实验与理论结果吻合 | 直接面向电子设备热防护 | 需全文审计模型假设、解析适用范围、误差与可迁移性 |

## 6. 本轮洞察

1. **解析建模确实存在于俄罗斯热质传递学术网络中**，且不只是实验室网页宣称：2026 盐液膜模型把热传导/扩散解析解与结晶动力学、实验数据结合；2024 多层墙体研究将相变解析解嵌入时间步算法。
2. **验证层级必须区分。** 与 COMSOL 比较是数值实现/模型验证，不等同于独立实验验证；盐液膜模型有实验质量曲线验证，墙体论文的摘要主要报告与 COMSOL 对照。
3. **中国存在电子热管理直接反例。** 2024 相变仪器舱研究使用 Lightfoot 积分方法得到解析解并以热实验验证，直接反驳“中方普遍缺少数学物理推导”的强版本。
4. 当前更合理的研究假设是：不同俄罗斯团队在某些相变/多相热物理课题上持续采用解析方法、机理模型、数值实现与实验验证组合；但该组合并非俄罗斯独有。
5. 目前不能判断俄罗斯在全国层面更强。下一阶段应比较“同类物理问题、相似复杂度、同等验证要求”的论文，而不是用一篇俄罗斯论文与一篇中国论文下国家结论。

## 7. 下一步

1. 对 2026 盐液膜模型做更严格全文审计：解析解的边界条件、级数/特征根、热—扩散耦合、结晶动力学参数、实验误差、模型失效边界。
2. 对中国 2024 相变仪器舱论文做相同审计：Lightfoot 积分方程的适用假设、相界面条件、解析解推导、实验误差和可迁移性。
3. 查清 2024 三层墙体论文的作者单位和贡献，避免将共同作者的成果简单等同于 TPU 实验室成果。
4. 之后再选择同题的中国与俄罗斯论文，形成小规模但可解释的匹配样本；保持国家级结论 OPEN。

## 8. 来源

- Misyura et al. (2026), salt-film crystallization model: https://www.sciencedirect.com/science/article/pii/S0017931025013912
- TPU Strizhak publications: https://portal.tpu.ru/SHARED/p/PAVELSPA/publications/Tab?p=1
- Antonov et al. (2024), three-layer wall with PCM: https://research.brighton.ac.uk/en/publications/heat-transfer-through-a-three-layer-wall-considering-the-contribu/
- Zhao et al. (2024), phase-change instrument compartment: https://www.nature.com/articles/s41598-024-67484-x
- PubMed record for Zhao et al.: https://pubmed.ncbi.nlm.nih.gov/39068226/
