# Russia-Thermal｜俄罗斯智能手机热管理科研洞察

本仓库研究**俄罗斯科研机构、实验室与学者在智能手机热管理领域的实际能力，以及相对中国的差异化价值和潜在合作方向**。目标不是单纯收集论文，而是形成**有原始证据、可解释技术边界、可用于团队和领导决策**的研究结论。

> **原项目结题与网页验收状态（2026-10-13；数学物理专项研究更新至 2026-10-22）**：Q01–Q10 在公开资料范围内全部形成结题判断（3 项接受、7 项附明确限制接受）。GitHub Actions 最新归一化研究图检查和 Astro/链接检查已实际成功运行；网页已发布，并完成 **14 类页面 × 3 种视口（42 次）的真实 Chromium 浏览器验收**，截图、移动端修复与论文／专利视觉分级已归档；每条科学事实的全量独立再审不在本轮网站验收范围内。本轮扩展检查 155 个 Actor、162 条 Source、123 条 Claim、52 项 Capability、8 个 Direction、28 条 Decision，以及 P1/P2/TPU 关键证据链；确认并纠正了 Surtaev 的人物姓名首字母错误，清理了对论文作者身份、OPEN Claim、合作授权容易产生误解的网页措辞。详见[网页证据链审计（2026-10-13）](analysis/audits/web-evidence-chain-audit-2026-10-13.md)。

## 一、项目目标与研究范围

围绕未来手机热管理技术与俄方学术合作，回答以下问题：

- **找谁**：哪些俄罗斯大学、研究所、实验室和具体研究人员值得关注？他们实际完成过什么研究？
- **有什么价值**：论文、专利及公开实验能证明哪些硬件散热、两相流、热可靠性、热建模或软件方法能力？
- **与中国相比如何**：哪些方向已有强势中国/国际技术基线，俄罗斯还剩什么可验证的增量？
- **能否用于手机**：从公开实验装置迁移到超薄、低功耗、可靠的手机系统，需要跨过哪些边界？
- **如何决策**：2027–2029 年哪些问题值得研究；应该优先、储备、暂缓还是不投入？如果未来获准合作，应要求什么交付物与停止条件？

**智能手机优先，平板仅作次要迁移参考**；其他平台只作为机理或方法证据。研究主要依据公开论文、专利、官方机构与产业资料，**不包含真机验证、未获授权的机构联系或非公开数据访问**。

完整的 [Q01–Q10 研究问题与验收标准](00-project/final-insight-acceptance-contract.md) 可供逐项追踪。

## 二、当前最重要的研究结论

**核心判断：俄罗斯更可能提供有针对性的失效机理、实验数据和科研方法补充，而不是替代中国已有的手机散热器件、制造及可靠性体系。**

| 决策级别 | 研究机构／方向 | 结论与证据边界 |
| --- | --- | --- |
| **P1：优先可行性研究** | Kutateladze Institute，Lab 1.3；Pavlenko／Surtaev | 介电液体沸腾的干斑与失效机理观测具有潜在研究价值；须证明可获取、可重复的机理标签对内部模型或验证决策确有增量。**尚未证明手机 VC 性能优势。** |
| **P2：条件储备** | Moscow Power Engineering Institute（MPEI）；Ivanov | 42 个月运行后的毛细状态变化提供长期暴露证据；但缺少证明早期预警所需的中间时序数据。 |
| **HOLD：暂缓** | TPU／Frumkin 表面润湿性与蒸发研究 | 有明确的原始学术成果，但中国的目标器件与表面工艺基线已经较强，尚不足以升级合作优先级。 |
| **WATCH／方法储备** | ITP Ural、TSU、ICM 等 | 关注 LHP 运行极限、瞬态 PCM 模型、电子设备热路径方法；不等同于已获得手机级验证。 |
| **不建议投入** | 泛化的“俄罗斯手机散热全面优于中国”等命题 | 现有公开比较证据不支持。 |

上述是**研究建议和未来可行性条件**，不代表已批准合作、PoC、数据授权或投资立项。投资排序以仓库内冻结的 [Phase-1 决策依据](reports/leadership-decision-brief.md) 为准。

## 三、项目进展与下一阶段

| 工作阶段 | 当前状态 |
| --- | --- |
| WP1 — 证据与研究仓库核对 | 已完成主要结构/证据引用校验，2026-10-13 归一化研究图 CI 通过；不等于全部原文重新审查 |
| WP2 — 关键论文、作者、中俄国际对照 | 重点研究线已完成有边界的复核 |
| WP3 — Q01–Q10 逐项验收 | **10/10 形成公开资料范围内的结题处置** |
| WP4 — 最终研究洞察与合作判断 | **已形成正式研究综合报告** |
| WP5 — 最终仓库归档与健康验收 | 归一化证据链、网站构建、42 次浏览器截图/交互与 Pages 发布已通过；未授权合作、实机试验及全部原文重新核验不在结题范围 |

**当前工作重点**：PPT 暂停；科研网站已经发布并完成多轮内容整理，本轮重点验证网页每个 Actor/Source/Claim/Capability/Direction/Decision 的**真实语义关系**。最新结构/引用/类型 CI 已经实际通过；对尚未核实的作者身份、数据使用权和手机器件性能继续保留明确限制；**浏览器 42 视图验收已实际通过**。参见[最新证据链审计](analysis/audits/web-evidence-chain-audit-2026-10-13.md)。

## 四、关键信息入口

### 读研究结论和管理建议

1. **[最终研究洞察与合作决策报告](reports/final-research-insight-and-collaboration-decision-2026-10-09.md)** — 当前最完整的研究结论、证据对照、2027–2029 年方向及合作停止条件。
2. [Q01–Q10 最终研究结题矩阵](analysis/audits/research-closeout-wp3-q01-q10-final-matrix-2026-10-09.md) — 每个问题的答案、可信度与接受限制。
3. [Phase-1 领导决策简报](reports/leadership-decision-brief.md) — **P1／P2／HOLD 的正式决策来源**。
4. [俄罗斯学术机构与合作方向比较](reports/russia-academic-partner-comparison-2026-10-09.md) — 各团队与中国对照、研究价值及具体课题。
5. [Q09 合作可行性任务清单](reports/collaboration-opportunities/academic-q09-feasibility-portfolio-2026-10-09.md) — 未来若获授权，优先要求哪些数据和交付物。

### 查证据、进度与恢复项目

- **[研究证据总索引](00-project/research-closeout-evidence-index-2026-10-09.md)** — 从研究问题、机构、代表论文进入原始证据链。
- [项目权威状态 STATUS](00-project/STATUS.md) — 当前阶段、历史检查记录和技术限制。
- [跨窗口继续工作 CONTINUE-HERE](00-project/CONTINUE-HERE.md) — 新聊天窗口从这里恢复，不重新启动调研。
- [Q01–Q10 原始跟踪台账](00-project/final-insight-question-ledger.tsv) — 保留历史任务状态及独立的研究结题处置字段。
- **[网页 42 视图真实浏览器验收与中文／原始证据分级（2026-10-13）](analysis/audits/web-visual-browser-qa-2026-10-13.md)** — 真实截图、中文标题和筛选项优化、关键原始论文及专利视觉区分、移动端优化与回归测试。
- **[最新网页证据链与语义验收（2026-10-13）](analysis/audits/web-evidence-chain-audit-2026-10-13.md)** — 汇总 Actor→Source→Claim→Capability→Direction→Decision/Q01–Q10 的自动核查、姓名修复、残余限制与质量门禁。
- [27 篇代表论文与正式 Source 关联审计](analysis/audits/representative-evidence-link-audit-2026-10-13.md) — 逐篇交叉确认核验状态，不能与 60 个正式论文 Source 混为一谈。
- [PPT 前研究仓库审计](analysis/audits/research-closeout-pre-ppt-repository-final-audit-2026-10-09.md)
- [网页最终研究成果覆盖审计](analysis/audits/web-final-research-to-site-coverage-audit-2026-10-12.md) — 逐项核对 Q01–Q10、机构、论文及决策页面与遗留问题。
- [网页第一轮实施记录](analysis/audits/web-closeout-wave-a-implementation-2026-10-12.md) — 最新十问网页入口、授权口径修复与待验收运行项。
- [网页第二轮 Russia Capability Atlas 实施记录](analysis/audits/web-russia-atlas-wave-b-implementation-2026-10-12.md) — 六组科研研究线、27 条代表论文、人员与机构消歧、Atlas 展示及验收边界。
- [网页第三轮比较与研究任务实施记录](analysis/audits/web-comparison-transfer-wave-c-2026-10-12.md) — 中俄/国际源论文矩阵、Q06 手机工程迁移门槛、Q09 研究交付及停止条件，含直接线上检查网址。
- [研究对照网页](https://xiejinsen.github.io/Russia-Thermal/landscape/)｜[手机迁移](https://xiejinsen.github.io/Russia-Thermal/smartphone-transfer/)｜[合作任务](https://xiejinsen.github.io/Russia-Thermal/research-packages/) — 已发布的网页入口；代码构建/链接审计及代表页 Chromium 浏览器 1440/768/390px 截图验收均已通过。
- [俄罗斯科研能力 Atlas 页面源码](web/src/pages/russia-atlas.astro) — 研究机构、下属实验室、学者、能力与论文证据的可追溯浏览入口。

## 五、仓库数据结构与权威关系

研究对象按照以下证据链组织，而不是把结论散放在一篇长文中：

```text
原始资料 Source（论文／专利／官方来源）
  → 可核查断言 Claim
  → 机构／实验室／学者 Actor + 技术能力 Capability
  → 研究方向 Direction
  → 未来验证条件 Validation
  → 决策与变化记录 Decision
```

| 路径 | 保存内容 |
| --- | --- |
| `00-project/` | 项目目标、规则、状态、十问台账、跨窗口恢复 |
| `01-evidence/`、`02-claims/` | 原始论文／专利／官方资料及其可核查主张 |
| `03-actors/`、`04-capabilities/` | 机构、实验室、学者身份，以及有证据边界的技术能力 |
| `05-directions/`、`06-validation/`、`07-decisions/` | 技术方向、未来验证任务及正式决策历史 |
| `analysis/` | 原始证据复核、中俄对照、学者归属审计和结题记录 |
| `reports/` | 综合研究报告及汇报型材料（**派生成果，不覆盖原始证据**） |
| `tools/`、`views/`、`history/` | 仓库校验与生成视图、历史变更及迁移记录 |
| `web/` | 科研网页呈现层；Q01–Q10、论文与证据关系已接入，静态构建/引用检查以及多尺寸真实浏览器截图和筛选交互检查已通过 |

**权威性原则**：原始 Source、Claim、Actor、Capability、Direction 与正式 Decision 是可追溯的依据；研究报告和网页是对它们的综合表达。不能用汇报文字反向覆盖原始论文事实。对于公开资料无法确认的人员归属、手机迁移效果或数据授权，应保留“未知”，而不是推断已证实。

## 六、仓库维护与复核

`main` 为当前权威分支；旧版 V1 仅保留于 Git 历史，不参与现行研究判断。已有校验工具包括：

```bash
python tools/v2repo.py --check
python tools/graph_audit.py
python tools/atlas_coverage_audit.py --summary
```

这些命令用于核对权威对象、生成视图与研究图结构。**当前已增设** `web/scripts/check-evidence-relations.mjs`，并在网页构建中运行。2026-10-13 最新 CI 已验证归一化的跨对象 ID 引用、重点证据状态和人员姓名。该结构检查不替代全论文原文审阅或现场验证。详见[本轮证据链审计](analysis/audits/web-evidence-chain-audit-2026-10-13.md)。


## 七、2026-10-22 新增专项研究：中俄数学物理研究范式对照

在原有热管理调研结题后，新增一项经用户明确提出的、范围受控的研究问题：检验俄罗斯部分热管理研究线是否在精确解析解、数学物理机理、稳定性边界和理论—实验闭环方面具有相对中国的差异化积累。此项研究**不预设国家整体结论**，也不重开宽泛的俄罗斯机构普查。

- **[专项审计工作底稿](analysis/russia-china-mathematical-physics-paradigm-audit-2026-10-22.md)** — 现有 60 篇规范化论文、37 篇决策导向深读的语料审计，方法编码规则、试编码、样本偏差和后续验证门槛。
- **[首个同领域对照：薄膜蒸发、热毛细流动与界面稳定性](analysis/russia-china-thin-film-stability-matched-comparison-2026-10-22.md)** — 对照俄罗斯精确/部分不变解研究线与中国的线性/非模态稳定性、长波演化方程及三维非线性薄膜研究；明确方法差异和不可作出的国家整体结论。

**阶段结论（更新至 2026-10-22）：** 本研究以“俄罗斯热管理相关研究具有较强数学物理机理研究传统，并可能在部分方向形成相对中国的差异化优势”为工作主假设，优先深化支持性证据。蒸发对流、热毛细效应与气液界面热质传递专题已发现俄罗斯相关研究人员在 2014–2024 年间持续使用长波渐近/液膜演化方程、Ostroumov–Birikh 类精确/部分不变解、显式气相蒸汽输运与 Soret/Dufour、线性稳定性分析和三维流型计算，呈现出从控制方程到解析约化、参数机制分析与稳定性研究的连续方法链。中国也有机理导向的瞬态方程模型；因此相对优势应聚焦于特定方法组合的连续性、集中度和实际预测增量，而非泛化为俄罗斯整体能力高于中国。下一步优先完成俄罗斯 2018/2023 论文与中国 2008 论文的全文级方法编码、作者谱系去重和同题对照。

---

*项目状态概览原始网站审计日期为 2026-10-13；数学物理专项研究于 2026-10-22 新增。原始对象与决策事件优先于派生报告及网页。*
