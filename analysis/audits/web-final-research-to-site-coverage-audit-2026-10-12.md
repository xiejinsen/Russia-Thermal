# Russia-Thermal｜结题研究成果 → 网站全量覆盖审计

date: 2026-10-12
scope: PUBLIC_RESEARCH_RESULT_TO_WEB_CONTENT_COVERAGE / NAVIGATION / SCIENTIFIC_SEMANTICS
status: SOURCE_LEVEL_COVERAGE_AUDIT_COMPLETE / WEB_LATEST_HEAD_BUILD_AND_DEPLOYMENT_NOT_VERIFIED
not_in_scope: 新增文献调研、PPT、批量重做前端视觉、未获授权机构联络
science_authority: [WP3 Q01–Q10 research closure](research-closeout-wp3-q01-q10-final-matrix-2026-10-09.md) → [WP4 final insight](../../reports/final-research-insight-and-collaboration-decision-2026-10-09.md) → Canonical Source/Claim/Actor/Capability/Direction/Decision (source and decisions prevail)
matrix: [machine-readable Q01–Q10 route/coverage TSV](web-research-results-coverage-matrix-2026-10-12.tsv)
web_entry: https://xiejinsen.github.io/Russia-Thermal/

## 0. 审计结论与证据级别

**判断：网站的基础知识对象与详情页已有较好实现，但尚未完整承载 2026-10-09 最终十问结题的权威状态与决策边界。应保留 Astro + canonical exporter + view models + page components 的架构，先修科学信息同步与可查路径，再推进科研型网站设计；无理由推倒重来。**

- 本轮按 10/10 个结题问题逐一进行**源文件/页面路由级覆盖判定**，不是宣称 10/10 已完整上网。
- 核查对象：`00-project/final-insight-question-ledger.tsv`、WP3 10Q matrix、WP4 final synthesis、`web/adapters/export_web.py`、`web/src/data/load-normalized.ts`、当前主要 Astro 首页/对照/机构/学者/能力/论文/专利/Claim/方向/决策/地图/研究覆盖/代表成果/Frontier 页面及设计文件和 2026-10-09 网站审计。
- Q01/Q02/Q04/Q07/Q08/Q09 有实质内容缺口；Q03/Q05/Q06/Q10 具有相应对象/页面支撑，但最终结题/同台比较/转移边界/审批语义仍需要修正。**全部评级是“源码可覆盖的程度”，不保证在线页面按预期渲染。**
- 旧 [Web V1 acceptance](../../web/docs/production-acceptance-v1.md) 标记 2026-10-06 V1 PASS；新 [source-level sitewide audit](web-sitewide-report-readiness-audit-2026-10-09.md) 明确 2026-10-09 改版的 current SHA 构建/响应式/在线点击未验证。两者适用版本不同，**不能组合成目前的全站 PASS**。
- 实际尝试访问生产首页、`/research-coverage/`、`/institutions/` 未被 web 读取工具成功打开；本次 container `git ls-remote` 因 DNS 无法解析 github.com 而失败。因此本审计**未运行最新 Astro/TS/构建/浏览器截图/QA**；不能对在线可用性作实测判断。

## 1. 本次采用的内容覆盖标尺

- **SUBSTANTIAL_ROUTE_COVERAGE**：相关规范化对象、集合页、详情页存在，基本科学字段可展示；仍不代表完整内容或通过部署测试。
- **PARTIAL**：有部分入口但研究结论、重要机构/论文、判断门槛或来源链需要增强。
- **PARTIAL_WITH_IDENTITY_RISK**：存在机构—学者—论文人名归属可能被误解为已确认的风险。
- **DISTRIBUTED**：研究判断已在多详情分散表达，缺面向此问题的聚合答案/验证门槛页。
- **NOT_EXPOSED_AS_Q**：十问最终结题状态目前没有通过独立可维护数据契约发布。

> 不将“页面/route 在仓中存在”写成“真实构建路由已通过”，也不将“网站统计数”当全国研究覆盖率。

## 2. Q01–Q10 问题逐项网站覆盖矩阵

| 研究问题 | 已有网页入口/现状 | 覆盖判断 | 必须补足的核心信息 |
|---|---|---|---|
| **Q01 俄罗斯机构版图** | `/institutions/`、机构详情、`/research-map/russia/`、`/research-coverage/`；研究地图通过 Actor 位置/技术关系渲染 | PARTIAL | 28 已恢复根机构 vs 25 重点学术机构为**不同样本口径**；按机构→实验室→人→实际能力→代表成果可探索；未知地理点有显式缺口；非俄罗斯全国 census |
| **Q02 实验室与学者** | `/scholars/`、`/scholars/[id]/`、机构详情能展示关联人员 | PARTIAL_WITH_IDENTITY_RISK | 排除 NSU EITP 未证实负责人、Denis/Dmitry Nesterov、V.I./V.E. Zhukov 自动合并，TPU 七位作者/Frumkin affiliation 未逐人确认；对同一论文的作者与当前员工归属分开 |
| **Q03 技术能力** | `/capabilities/`、详情、`/research-coverage/` 具有 maturity/confidence/transfer 文本 | SUBSTANTIAL_ROUTE_COVERAGE | 按两相/表面/可靠性/电子热路/模型和软硬件能力分类、明确实验 vs 理论 vs 方法；研究能力≠手机产品成熟度 |
| **Q04 原始论文/专利** | `/papers/`、`/papers/[id]/`、`/patents/[id]/`、`/evidence/`、`/representative-works/`；支持部分 Deep Read | PARTIAL | `representative-works.astro` 的 panels 目前仅聚焦 Kut/MPEI 两条研究线，无法作为全俄罗斯重点机构代表论文总入口；需拓到其他学术团队，每篇含真实 DOI/作者/方法/主结论/不支持的外推/选择口径，不假设论文 Figure 已获复用许可 |
| **Q05 中俄与全球技术差异** | `/landscape/` 及方向详情，首页比较；具体 Dir/Claim/Source 可下钻 | SUBSTANTIAL_ROUTE_COVERAGE | 中国国内和**非中国的全球替代研究**单独标识；每行关键判断关联原始 Source，不跨装置比较 CHF/寿命提升；`landscape.astro` 的矩阵与逐行卡片信息重复需做真实页面去重 |
| **Q06 手机工程迁移** | capability transfer、论文 boundary、方向 phone maturity 分散存在 | DISTRIBUTED | 汇总几何/工质/封装/传感器与算力功耗/热可靠性/姿态/噪声等验证关口，区分“已证明的非手机装置事实”和“手机级尚未证实” |
| **Q07 2027–2029 研究方向** | 首页有四个条件科研问题，`/directions/` 和 `/frontier/` | PARTIAL | 增加四方向证据/触发条件/终止条件汇总；Frontier 是刊会监测，不等于 Q07 最终结题答案；不当 2029 产品时间表 |
| **Q08 与中国内部方案相比是否值得合作** | 首页对照/协作价值段、`/landscape/`、`/partners/`、方向详情 | PARTIAL | 显示**何种额外数据或验证判断不可由中国/国际/内部现有方法替代**；竞争基线不完整时显示 UNKNOWN；首页手写 comparison/candidate 段易与 canonical 漂移 |
| **Q09 与谁开展什么合作** | `/partners/`、机构和学者及方向详情；书面 OPP-01/OPP-02 还在报告档案 | PARTIAL | 页面需结构化呈现 proposed research artifact、数据可用性/许可/负责人/匹配实验/同台基线/停止条件；标注**仅论文阶段任务设想，尚无外联授权/合作承诺** |
| **Q10 排序和拒绝事项** | `/partners/`、`/decisions/`、`/directions/` 反映 Phase1 portfolio 和历史事件 | SUBSTANTIAL_ROUTE_COVERAGE_WITH_CONFLICT | 优先可行性 P1、条件储备 P2、TPU HOLD、方法 WATCH、Kill 有分层；需将**领导建议仅批准内部可行性准备、外部接洽另行授权**同步到首页/合作页，不能使 P1 卡片暗示已批准合作 |

**新增完整入口的建议：** 以 `/research-questions/` 作为 Q01–Q10 的权威研究结题阅读与索引页（不是 10 个与 Claim 重复的新数据对象），每个问题：研究回答→证据支点→限制→研究接受状态→相关 Institution/Scholar/Paper/Claim/Decision；最终结题接收 **3 ACCEPTED_PUBLIC_EVIDENCE / 7 ACCEPTED_WITH_DISCLOSED_LIMITATION**，同时保留原 TSV 历史 `state` 字段。

## 3. 被实证证实的跨页面/数据流问题

### WEB-C01 [P0] 首页授权语义冲突

- 实际文件 `web/src/pages/index.astro` 页尾英文 **“Authorize a P1 feasibility inquiry — not product development?”** 和中文 **“建议决策：是否批准 P1 前期合作可行性接洽？”**；但近期已接受的领导汇报决策口径更谨慎：**先做 P1 内部可行性评估准备；正式外联需另行批准**。
- 同段又写“尚无对外联系授权”，使行动建议容易被误读为一次批准外联。
- 最低修复：使用来自权威 Decision/Portfolio 的 action-level 表述，写明“可内部准备、不可自动对外联系”，并对 `/partners/` 中相关 CTA/合作 readiness 一并检查。不会修改冻结的 Phase1 决策记录。

### WEB-C02 [P0 内容] 十问结题状态没有进入 Web normalized data

- `00-project/final-insight-question-ledger.tsv` 有 `research_closeout_disposition` 与 `research_closeout_basis` 列；实际 `web/adapters/export_web.py` 和 `web/src/data/load-normalized.ts` 的现行输出仅覆盖 Actors、Capabilities、Directions、Priorities、Evidence、Claims、Deep Reads、Decisions、Syntheses 等，无问题结题数据集；`web/src/pages/` 未发现 Q01–Q10 正式结果页。
- 结果：可以通过对象目录了解大量研究，但网站本身不能明确回答“十个研究问题到底得出了什么结论、哪个有保留限制”。
- 最低修复：新增只读研究问题汇总 normalized JSON/TS contract，从 TSV+WP3 最终处置生成，交叉绑定原有 canonical ID，不另造研究真值；首页增加简短“研究问题/最终报告”链接。

### WEB-C03 [P1] Russia-first Atlas 聚合与口径

- `/research-map/russia/` 已是可交互研究地图，`/institutions/`及详情具 Actor/Capability/People/Output 聚合基础。
- 但 [Capability Atlas expansion contract](../../web/docs/capability-atlas-expansion-contract.md) 的 CollaborationRecord、ResearchOutputSnapshot、InfluenceSignal 仍主要是**设计/未来数据契约**；现有机构页面使用 atlas-profile 综合文字与来自已收录资料的 recovered-output snapshot，不能把项目 curated paper count 误标为该机构的全部论文。
- 修复：先充分利用已恢复的俄罗斯 28/25 有界资料，机构组织树→实验室/人→科研资产→手机适用性；有验证出处才显示公开合作及排名上下文，其他为 UNKNOWN。无需扩大中国研究版图才能上线俄罗斯主视图。

### WEB-C04 [P1 科学] 人员机构/论文归属消歧

- `/institutions/[id]/` 展示 people/collaborators/evidence，`/scholars/[id]/` 显示 affiliation、capabilities、papers，`/papers/[id]/` 由 capability owner 映射相关人员。因此不正确的权威关系有放大误导风险。
- 以 [人员归属专项审计](web-scholar-affiliation-lineage-audit-2026-10-09.md) 与 Q02/Q04 结题例外为真值边界，逐一核对 Lab1.3、MPEI、ITP Ural、ICM 两组、TPU-Frumkin、TSU、NSU、ITMO。
- 特别避免同姓合并与把 LabPET 的 Naumov 当 EITP PI；未经核实“现任负责人”和“论文作者当年所属”不能合并。

### WEB-C05 [P1] 研究能力分层

- `/capabilities/`、详情与 `/research-coverage/` 按角色/方向组织，已有研究可信度和手机转移等级。
- 下一步将**技术能力领域（两相、材料、可靠性、热模型、软件/硬件）**与**组合优先级（P1/P2/HOLD/WATCH）**分层展示；对实验研究、模型研究、实际装置论文明确标识。不要把 priority 用于代替科研技术分类，也不要凭研究机构排名推出成熟度。

### WEB-C06 [P1] 机构代表成果入口过窄

- `web/src/pages/representative-works.astro` 使用硬编码两条 `panels`，并以 `r.teamId === panel.id` 聚合：目前限于 `ACT-KUT-LAB13` 和 `ACT-MPEI`。
- 应支持研究样本中的其他重点机构，优先 ITP Ural、TPU-Frumkin、TSU、ICM 两条线、NSU/ITMO 等；不要求所有历史论文；每个机构/学者以 5–10 篇**有代表性时**为上限性展示目标，不为凑数造论文。
- 需把原始 Source 是 CANONICAL / ORIGINAL_REVIEWED / SECONDARY_ONLY 的状态可见、保留未全确认人名的限制。

### WEB-C07 [P1] 比较页内容重复、原始出处不够直接

- `web/src/pages/landscape.astro` 先渲染 `CapabilityMatrix`，后又完整 map 同一 `vm.rows` 生成逐行 compare 卡片和成熟度列；这是**源码层确认的信息重复**，但未作真实页面体验严重性判定。
- 推荐编辑式学术对照表：技术问题、中国基线、国际基线、俄方已发布证据、手机差距、处置、原始论文；每行来源 link，点击再看 Claim/论文；不使用不同装置性能柱图。

### WEB-C08 [P1] 独立的手机迁移与研究门槛索引不足

- 现有 transfer 文本存在于 Capability/Direction/Paper 多个详情中，但没有一个面向领导/工程师按**相同装置限制**复核研究的高层入口。
- 可用一页纵向纵览/跨方向表，不需引入独立战略真值：每项俄方实验附“实验装置、工质、观察变量、可迁移部分、未证实条件、所需授权”，避免将 pool boiling、R410A thermosyphon、液滴/PCM 模型称手机 VC 原型。

### WEB-C09 [P1] 学术合作 task/STOP gates 尚未被网页结构化承载

- 研究报告已有 [Q09 合作方案](../../reports/collaboration-opportunities/academic-q09-feasibility-portfolio-2026-10-09.md)、OPP-01/02，但站内 `/partners/` 主要呈 priority 和 direction 关联，难直接按**输入、交付物、核验实验、强替代、授权、终止条件**操作。
- 先做可读的任务规格页面/折叠清单，再决定是否需要新 CMS。特别标注“尚未获得对外接洽/数据/IP 授权”。

### WEB-C10 [P0 上线] 最新构建/点击/设备验收缺失

- 仓库有 `web/package.json` 的 `data:generate/check/build/check:links` 以及 `.github/workflows/deploy-web.yml` 中 Validation → Astro Check → Build → Link Audit → Pages 上传/部署的门槛，但此次没有现行 commit 对应实际成功的 job/log、产出 DOM 或 1440/1024/390 浏览器结果。
- 不能因 2026-10-06 `web/docs/production-acceptance-v1.md` 的历史 PASS 推断 2026-10-12 最新版本通过。地图依赖外部 Leaflet CDN，也需要禁网回退。
- 需要从可用环境执行 `python tools/v2repo.py --check`; `cd web && npm ci && npm run check && npm run build && npm run check:links`，记录 exact SHA/日志，再浏览器检查首页、问答、机构、学者、论文、地图、对照、Partner、Decision 具体操作路径。

### WEB-C11 [P2] Web 文档的历史状态互相矛盾

- `web/README.md` 仍在顶部说 `W2_DESIGN_SYSTEM_SKELETON`，`web/docs/roadmap.md` 说 `W3_MVP_COMPLETION`，旧 `production-acceptance-v1.md` 说 V1 PASS，10-09 设计系统说未实施，sitewide audit 说新发布未验证。
- 应改 Web README 为权威的**版本/历史分层状态**：Web V1 曾发布、最新 Overview v2 只审到源码、Atlas/十问处在改造待办、CI 未认证。旧审计不删不改历史事实。

### WEB-C12 [P2] Astro 首页正文的字面 `\\n` 字符待清理

- `web/src/pages/index.astro` 中 P1 paper direct link 和 supporting Claim link 之间有字面 `\\n`（反斜线+n）而不是真正换行；可能在生成 HTML 时形成无意义可见字符或排版噪声。
- 只需小补丁替换为空白/真实换行，编译后查渲染结果。不是科学证据问题，但属于明确的源码异常。

### WEB-C13 [P2] TPU 两项表面研究应避免网页术语混写

- 首页候选卡直接把 `Laser processing / wettability` 概括成同一研究方向；仓库 Q04 结题已明确 2026 IJHMT 开放液滴原论文和 *Surfaces and Interfaces* 激光疏水化为**两篇不同论文**。
- 不是说一句学术方向摘要必然错误，而是人物论文详情以及首页链接应使二者区分，不让浏览者误以为单篇文章同时验证激光工艺与手机 VC 提升。

## 4. 站点信息架构建议（以已有路由为基础）

三个独立任务入口，不采用 PPT 逐页复制：

1. **Understand / 研究结论：** `/` → 新 `/research-questions/`（Q01–Q10 研究结题）→ `/landscape/`（中俄/国际证据对照）→ `/partners/` 与 `/decisions/`。首页保留 5 分钟 thesis 和关键原文索引，不放完整十问正文。
2. **Explore / 俄罗斯科研版图：** `/research-map/russia/` 或 `/institutions/` → `/institutions/[id]/` → `/scholars/[id]/` → `/capabilities/[id]/` → `/representative-works/`。地图为研究导航，不是研究实力排行榜。
3. **Verify / 科研证据：** `/papers/`、`/claims/`、`/evidence/`、`/patents/[id]/` → 详情原文 DOI；直接在页面展示事实 vs 推断 vs 未知。完整中文管理结论 + 英文论文标题与技术实验说明可并存。

未来界面采用已归档的 [Research Intelligence Web Design System v1](../../web/docs/research-intelligence-design-system-v1-2026-10-09.md)：Scientific Field Notes + Claim-to-Evidence Rail；首页编辑式长文、机构档案、科研表格与验证边界，不作 PPT 多卡片复制。

## 5. 实施顺序与验收门槛（此次仅审计，不实施）

| 波次 | 优先级 | 修复项 | 必须证明的验收条件 |
|---|---|---|---|
| **A 科学与授权一致性** | P0 | C01 + C02 + C13 的语义排错 | 首页不越权；10 个研究问题处置与源 TSV 一致；P1/P2/TPU 定义同全站；TPU 两篇原文不混；可追溯来源 |
| **B 数据归属与俄方版图** | P1 | C03 + C04 + C05 + C06 | 机构/lab/scholar/论文代表成果可完整下钻；28/25 不混；未知 PI 和作者不被推断；输出计数标限定样本 |
| **C 中俄差异与合作价值** | P1 | C07 + C08 + C09 | 每条技术对比有原文和实验边界；合作任务可读但未授权；手机 transfer 条件清楚 |
| **D 体验和状态文档** | P2 | C11 + C12，UI 视觉迭代 | 无页面编译异常和字面 `\\n`；导航无重复死端；状态准确且不会误导重启 |
| **E 全站技术验收** | P0 上线门槛 | C10，贯穿 A–D 后的最终验收 | latest SHA job/log、内部链接、真实浏览器点击/筛选、桌面与移动截图、地图降级；不以旧版 PASS 替代 |

**推荐下一动作：** 先不改 CSS。开一轮局部工程修复：正式同步 Q01–Q10 数据契约；修正首页 P1 权限文本；在同一轮补齐 P1/P2/TPU 关键术语与来源一致性测试。完成后再扩展机构 Atlas/代表论文。该顺序可以最大限度复用已经较成熟的现有研究对象和 Astro 基础。

## 6. 审计的技术边界

这是一次**源码/研究资料层的覆盖审计**，不是下载全仓后完整跑出来的数值“100% coverage”。不存在已验证的 latest deployed HTML 截图、正式全量 link audit 或当前完整 front-end build。相关根源保留在 C10，后续不得无依据改为 PASS。

本次只增加审计文件及 TSV，**未修改任何网站代码、页面文案、源码数据、科研结论或部署设置**。PPT 已暂停，不应混入 Web 实施工作。
