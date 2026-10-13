# Russia-Thermal｜网页研究证据链与语义一致性审计

date: 2026-10-13
status: NORMALIZED_RELATION_VALIDATED / SOURCE_SEMANTICS_GATED / NO_DEVICE_OR_FULL_ORIGINAL_REAUDIT
scope: Research website + canonical research SSOT; Actor / Source / Claim / Capability / Direction / Priority / Decision / Deep Read / Q01–Q10
authority: DERIVED_AUDIT; original `01-evidence` / `02-claims` / `03-actors` / `04-capabilities` / `05-directions` / `07-decisions` prevail
non_goals: new scientific conclusions, nationwide census, phone prototype testing, partner contact, universal author-person matching, permission/data/IP proof

## 一、本轮结论

**已有的公开资料可以支持带证据限制的 Q01–Q10 结题；但完整度不等于独立科学真实性全部重新审查。**

此次真正发现、修复和防回归的问题：

1. **人员／论文署名关系误判风险**：网页 ViewModel 曾以同姓字符串子串判断某科研人员是否撰写 Source；这会在重名、姓名缩写和 Denis/Dmitry Nesterov 等人名冲突中造成误关联。已停用自动推断：没有独立的论文作者身份与 personId 映射时，仅显示“通过能力、Claim 关联的研究资料”，不得显示“该人署名”。
2. **P1 核心学者名字错误**：`PERSON-SURTAEV` 先前误写 **Anton V. Surtaev**。Kutateladze 研究所 [官方 Lab 1.3 人员名册](https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/13_laboratoriya_nizkotemperaturnoy_teplofiziki.html) 明载 **Суртаев Антон Сергеевич**，即 **Anton S. Surtaev**，研究所[报道](https://www.itp.nsc.ru/news/ekskursiya_po_laboratoriyam_it_so_ran_.html)及[论文对应邮箱](https://journals.rcsi.science/0020-4412/article/view/159224)交叉支持。已更正原始 Actor、派生领导档案，并加 CI 人名防回归断言。
3. **领导档案术语越界**：Kutateladze 研究团队原档案带 `outreach-ready` 用语，容易误读为对外接洽已批准；已改为“仅内部科学数据可行性研究候选，外联须另行授权”。同时明确 V. I. Zhukov 的论文署名不证明当前 Lab 1.3 归属，更不可与 V. E. Zhukov 合并。
4. **OPEN Claim 被引用数量遮蔽**：之前“support”引用数字可能被误读为 `SUPPORTED` 科学结论；证据与 Claim 页、能力页和中俄比较矩阵已分别强调状态与证据用途，`CLM-MPEI-008` 必须继续维持 `OPEN`。
5. **代表作清单同步欠账**：27 项代表论文与正式 Source 的两项错误归属已修复，详见[27 篇交叉对照](representative-evidence-link-audit-2026-10-13.md)。代表作清单不是全部研究 Source，也不等于人员发文量。

## 二、实际运行的跨对象检查覆盖

生产构建执行 `web/scripts/check-evidence-relations.mjs`，由 `web/package.json` 中 `check:research` 接入 `check` 和 `build`，使用由 canonical 源文件生成的 JSON，而非测试夹具。

2026-10-13 一轮成功 Actions（`web-ui`）日志的归一化数量：

| 对象 | 数量 | 质量检查重点 |
|---|---:|---|
| Actor | 155 | 唯一 ID、parent/alias 存在、Capability key person 类型、Surtaev 与 Zhukov / Nesterov 的已知例外 |
| Source | 162 | 唯一 ID、Claim 直接引用或明确 context role、ICM 实际作者文字 |
| Claim | 123 | 唯一 ID、supporting/contradicting Source 有效、不得同 Source 同时支持并反驳、SUPPORTED 有支持来源 |
| Capability | 52 | owner 存在且不是 PERSON、key people 是 PERSON、引用 Claim / collaborator 存在 |
| Direction | 8 | Capability / Claim 有效；关键 Strategic / Reserve 研究链存在实际 Source |
| Decision | 28 | triggerClaimId 有效且不重复，决策历史不被网页自行覆盖 |
| Partner Priority | 3 | 目标机构不是 PERSON，方向存在；优先级不代表联系授权 |
| Synthesis | 1 | 相关 Claim / Direction / Priority / Source ID 均存在 |
| Deep Read | 53 | 对应正式 Source；Claim / Capability / Direction / Priority 引用有效 |
| Q01–Q10 | 10 | 保持 3 条公开范围直接接受、7 条附明确限制接受 |

支持关系：
- **151 / 162** 条 Source 有直接 Claim 引用；
- **11 / 162** 条保留为明确说明用途的上下文资料；
- 123 Claim 当前状态：**103 SUPPORTED / 9 REFUTED / 11 OPEN**。

**此处的 PASS 只表示结构、引用和已编码的研究状态口径一致**。引用存在不等于该引用足以证明某一装置机制；`SUPPORTED` 仍要回到 Source 的实际实验条件解释。

## 三、逐层网页呈现规则

| 页面 | 必须显示的含义 | 禁止推断 |
|---|---|---|
| 机构/实验室详情 | 当前 Actor 层级、Capability 与相关 Claim、具有出处的代表材料 | 论文出现在机构上下文中 = 该机构署名论文或现任教师成果 |
| 学者详情 | 单独记录的身份/隶属关系；通过 Capability/Claim 关联的研究方向和文献 | 姓氏、姓名缩写匹配 = 已证实同一个作者；当前单位 = 所有文章发表单位 |
| Source / 论文/专利详情 | 原始文献所述事实、报告条件、边界以及 Claim 关联 | 缺乏 same-rig 条件仍作手机级优越性判断 |
| Claim 详情 | 研究主张的 SUPPORTED/REFUTED/OPEN 状态；支持与反证引用分开 | 任何 support 引用条数 > 0 = 整条 Claim 已 SUPPORTED |
| Capability 详情 | 哪些能力有来源与 Claim，哪些具有 Smartphone 转移限制 | Capability 关联 = 产品成熟或已获得授权 |
| 中俄对照 | 在不同装置/条件下出现的源论文，并披露可比性和限制 | 把俄罗斯、中国、全球结果用单一性能数字排名 |
| Direction/Decision | 现有方向、支持/反证压力、需验证的门槛、保留条件 | 研究可行性优先级 = 已批准外部合作 / 真机 PoC |
| Q01–Q10 | 最终回答 + 研究来源/出处 + 残余限制 | 十问结题 = 全国全收录、已获得合作或产品试验完成 |

## 四、关键决策结论实测检查

1. `PAPER-RU-DRY-001` → `CLM-PAV-002` = **SUPPORTED**（仅特定 dielectric boiling apparatus）→ `CAP-KUT-L13-DRYOUT-DIAGNOSTICS` → `DIR-FAILURE-AWARE-UTVC`。并且 `PERSON-ZHUKOV` 不能作为当前 Lab 1.3 key person。
2. `PAPER-RU-AGE-001` → `CLM-MPEI-008` = **OPEN**（退化早期指示是假说，而非 42 个月论文证实）→ MPEI 数据条件储备，不能宣称已具备产品级预警。
3. `PAPER-CN-UTVC-WP-001` 中国 0.4 mm 超薄密闭 VC 对照论文必须保持 CN 来源身份。TPU 表面处理实验不得自动升级为独特手机工程优势。
4. `PAPER-RU-ICM-ELECTRONICS-001` 必须按原出版方保留 **Dmitry A. Nesterov**，不能自动关联当前官方名为 **Denis A. Nesterov** 的研究人员；能力层的 Denis 归属由另外来源单独说明。
5. 十问处置继续是 3 / 7，且不改变原有 P1 Kutateladze、P2 MPEI、TPU HOLD 判断。

## 五、验收边界与后续具体工作

**已经可以声称：** 当前归一化图谱关键对象间的 ID、部分研究语义规则、被核实的姓名和 P1/P2 核心状态已通过构建门禁；网页内有可点击的 Source/Claim/Capability 链接，且会区别 OPEN 与 SUPPORTED。

**仍不能声称：** 155 个 Actor 的全部任职记录都经 2026-10-13 官网逐项再核实；162 条 Source 的所有出版信息、正文实验参数和外部网址都当日人工逐条验证；123 条 Claim 的科学实质全部重新同行评审；网站每个页面都已真实浏览器视觉验收；合作方已允许联系或共享数据。

剩余优先级建议：

- **P0，结论若需要升级前**：将所有可能被用于新的合作/技术方向主张的关键论文及官方人员身份，建立逐篇、逐人正式身份/原文对照，不使用自动姓氏关联替代核查。
- **P1，网页信息架构**：在证据与论文页面明确标明“直接 Source vs 通过 Capability/Claim 的派生关联”。将 Claim 状态和 Source 用途视作两个独立维度。
- **P1，质量**：真实浏览器按首页/机构/学者/论文/Claim/技术能力/比较/十问代表页抽样截图验收，不把 CI 成功冒充视觉通过。
- **P2，超越公开资料**：产品装置、原始数据使用权、IP 和机构沟通按未来正式授权另行验证。

本审计是 **网站证据追溯修复与归档验收**，不产生新的科学发现或变更冻结的技术研究判断。
