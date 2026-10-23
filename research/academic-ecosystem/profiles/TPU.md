# 机构档案｜Tomsk Polytechnic University（TPU）

- 机构 ID：AE-TPU
- 状态：ACTIVE_WAVE_A
- 最近核查：2026-10-23
- 当前判断：TPU 相关研究网络中存在解析热传导/扩散模型实例；必须区分共同作者网络、具体实验室归属与研究对象的电子热管理相关性。

## 官方研究资源
- RAEX 2026 俄罗斯高校数学学科排名第 15，仅作背景：https://raex-rr.com/education/subject_ranking/Maths/2026/
- 实验室官方页面列出含相变/化学反应的热质传递解析解、自研代码、数值模拟与光学测量：https://hmtslab.tpu.ru/en/research/
- Pavel Strizhak 出版物目录：https://portal.tpu.ru/SHARED/p/PAVELSPA/publications/Tab?p=1

## 代表论文 A：液膜蒸发与盐结晶（2026）
S. Ya. Misyura, D. V. Antonov, A. V. Mikulich et al., “A simple model of salt crystal formation in an evaporating liquid film,” *International Journal of Heat and Mass Transfer* 256 (2026), 128056. DOI 10.1016/j.ijheatmasstransfer.2025.128056.
来源：https://www.sciencedirect.com/science/article/pii/S0017931025013912

可核实的方法：
- 使用薄液膜热传导方程解析解和组分扩散方程解析解；
- 结合 Kolmogorov 结晶动力学；
- 使用自有实验数据验证盐溶液质量与晶体质量的时间演化；
- 与 COMSOL 的数值解比较验证代码；
- 明确报告忽略晶体相互作用导致后期晶体质量高估的局限。

**方法编码：** M1 支持；M2 解析方法与理论框架支持，但解析解是否为本文新创 OPEN；M3 数值实现验证支持，但新通用算法未确认；M4 实验验证支持；M5 部分支持。
**边界：** Pavel Strizhak 为共同作者，但不可将整项成果归于 TPU 单一团队。对象是盐溶液液膜蒸发/结晶，不是电子设备热管理。

## 代表论文 B：三层墙体中的相变热传递（2024）
D. Antonov, M. Nizovtsev, E. Shchepakina, V. Sobolev, P. Strizhak, S. Sazhin, “Heat transfer through a three-layer wall considering the contribution of phase change,” *International Journal of Heat and Mass Transfer* 226 (2024), 125500.
来源：https://research.brighton.ac.uk/en/publications/heat-transfer-through-a-three-layer-wall-considering-the-contribu/

摘要称论文得到含相变的多层墙体非稳态热传递方程新解析解，并将其嵌入时间步进算法；验证主要是与 COMSOL 在同一输入条件下比较。模型应用于含石蜡层的建筑墙体。
**边界：** 这是解析解的明确实例，但摘要未报告独立实验验证；建筑围护结构不能直接替代电子热管理；需核实作者单位与具体贡献后才能归入 TPU 机构能力。

## 方法判断
目前有证据表明 TPU 相关研究网络包含解析热传导/扩散、相变建模、数值实现和实验验证的组合。尚不能据此判断该方法在俄罗斯普遍领先，也不能证明每项成果来自 TPU 实验室本身。

## 下一步
1. 核对 2026 论文全文中的边界条件、特征根/级数、热—扩散耦合、实验误差和失效边界。
2. 核对 2024 三层墙体论文作者单位与贡献声明。
3. 与中国 2024 相变仪器舱论文按同一标准比较解析推导、实验误差、适用假设与对象相关性。
