# Russia-Thermal｜Web 第二轮：俄罗斯科研能力 Atlas 与机构代表论文实施记录

date: 2026-10-12
scope: RUSSIA_FIRST_ATLAS / ACADEMIC_INSTITUTION_SCHOLAR_CAPABILITY_WORKS / SOURCE_PROVENANCE
status: SOURCE_PATCHES_COMMITTED / BOUNDED_TSV_INTEGRITY_CHECK_PASS / NEW_ASTRO_BUILD_AND_BROWSER_QA_NOT_CERTIFIED
parent_audit: [全站研究成果覆盖审计](web-final-research-to-site-coverage-audit-2026-10-12.md)
previous_round: [第一轮十问结题与授权边界同步](web-closeout-wave-a-implementation-2026-10-12.md)
science_authority: Canonical Actor / Capability / Claim / Source objects; existing academic team original-paper audits
not_changed: Phase1 partner priorities; Q01-Q10 research-level closeout; original P1/P2 claims; outreach authorization; PPT work

## 1. 本轮实际提交的功能

### W-B01 俄罗斯科研能力 Atlas

- 新建 `web/src/view-models/russia-atlas.ts` 和 `web/src/pages/russia-atlas.astro`，以**现有规范化 Actor → 下属机构/实验室 → Capability → Claim → Source** 组成俄方专属研究版图。
- **递归组织层级聚合**，不只统计直属实验室。人物列表仅按已有 `person.parentId` 聚合，不把关联的论文作者推断成当前实验室员工；科研 Claim 链接论文明确标为“研究证据关联，不等于该机构论文署名或总发文量”。
- 支持关键词、管理层能力 Family（被动硬件、主动硬件、使能诊断与软件系统）筛选；每机构展示研究范围、收录实验室和已建档人员、技术能力、迁移边界、有限原始证据及已披露缺口。
- 网页入口加至 `SiteHeader`、首页研究能力区域、Q01 结题页；原有俄罗斯地图、机构页不删改为 PPT 式静态卡片。
- **分母注意：** 新 Atlas 页的 root/children/capability 是运行时由图谱筛出的视图计数，**不声明与研究结题报告中 28 个当前已恢复能力所属根机构和 25 个优先学术机构画像相同**；不将任何分母解释为俄罗斯全国总量。

### W-B02 代表性原创研究由两组扩展到六组

`tools/representative_works.py` 的来源映射明确对应 Actor ID、Path 和源状态；验证 Selection ID 不重复、DOI 与 Canonical Source 相符、未入 Source 的记录不得标 CANONICAL；允许非 Direction 的观察型研究使用 `decision_ref=NONE`，不为每条论文虚构投资方向。

| 已核定选录研究线 | 代表性条目 | 所在文件 | 研究能力及证据边界 |
|---|---:|---|---|
| Kutateladze Lab 1.3 | 10（既有） | `03-actors/labs/ACT-KUT-LAB13/representative-works.tsv` | 介电沸腾与干斑失效，非手机 sealed copper-water VC |
| MPEI Ivanov | 4（既有） | `03-actors/organizations/ACT-MPEI/representative-works.tsv` | 42 个月周期运行及后验毛细证据，非已证实在线老化预警 |
| ITP Ural | **3（新）** | `03-actors/organizations/ACT-ITP-UBRAS/representative-works.tsv` | 2025 服务边界和铜毛细芯-氨工质环路实验；尺寸转移未证实 |
| TPU | **2（新）** | `03-actors/organizations/ACT-TPU/representative-works.tsv` | 2026 *IJHMT* 液滴研究与另一篇 *Surfaces and Interfaces* 激光表面处理**明确分开** |
| TSU | **3（新）** | `03-actors/organizations/ACT-TSU/representative-works.tsv` | 2022/2024 PCM、2025 周期热负载，**数值模拟不是实机验证** |
| ICM Krasnoyarsk | **5（新）** | `03-actors/organizations/ACT-ICM-KRASN/representative-works.tsv` | **A 实验/电子模块**与**B 液气界面理论**两线并列且互不归属 |

合计 **27 条有限研究样本**，新增 **13 条**，不是整个俄罗斯学术机构或每所学校的全部论文。选录依据已存在的研究档案：
- [ITP Ural 实验室及原始论文审计](../academic-team-mapping/itp-ural-lhp-team-deep-read-2026-10-09.md)
- [TPU–Frumkin 2026 DOI/署名与方法边界审计](../academic-team-mapping/tpu-frumkin-2026-original-paper-identity-gate.md)
- [TSU 代表论文与手机迁移审计](../academic-team-mapping/tsu-phone-relevance-decision-gate-2026-10-09.md)
- [ICM 两条实验/理论研究线审计](../academic-team-mapping/icm-krasn-two-tracks-decision-audit-2026-10-09.md)

`web/src/pages/representative-works.astro` 将导航由原先两个写死卡片改为按规范化选录 `teamId` 自动构造，指向机构页和（仅当 Source ID 真实存在时）规范化论文页；原文 DOI / HTML URL 可直接访问。显示 `CANONICAL`、`ORIGINAL_REVIEWED`、`SECONDARY_ONLY`、`PENDING_IDENTITY` 四类不等效状态，论文姓名/出处不足时保留“待核实”而不是补造归属。

### W-B03 机构与学者归属显示修复

- `buildInstitutionPageVM` 改为聚合**所有层级后代**能力，而不是一层 child；当前关联学者显示其 Actor 上记录的 `person.parentId` 机构，**不再直接显示当前打开的机构名称作为此人的已确认 affiliation**。
- 机构详情提供代表论文的可追溯入口；论文关联与员工身份不是同一关系。代表性研究并不承诺任一人员愿意合作。
- 将规范化 `ActorRecord` 添加原有 Canonical 的 `record_state` / `identity_alias_of` 派生字段，并同步 `web/schemas/actor.schema.json`；历史 ICM `ACT-ICM-SBRAS` 指向当前 `ACT-ICM-KRASN`，其历史别名不能重复计为现行根机构或正式子实验室，原始记录仍可追溯。
- **高风险身份保留：** `PAPER-RU-ICM-ELECTRONICS-001` 的出版物作者字面为 **Dmitry A. Nesterov**；ICM 已验证当前研究人员为 **Denis A. Nesterov**，未将两者合并。ICM A 线外部公司合作者、B 线 Goncharova 合作者不被默认视为当前 ICM staff。TPU 原论文 7 位作者逐人 affiliation 尚未完全确认；NSU EITP PI 仍 UNKNOWN，未自行填充。

### W-B04 测试与网站更新触发

- 新建 `web/scripts/check-russia-atlas.mjs`，对 6 个团队、27 条选录、源状态、ICM 两条组别、姓名冲突、TPU 两论文、Atlas 页和菜单/机构详情导航、历史别名可见性做数据与源码回归核查。
- `web/package.json` 将 `npm run check:atlas` 纳入 `check` 与 `build` 的**实际命令路径**，Python 出口 `export_web.py` 也会调用 `checked_records()` 校验 TSV。
- `.github/workflows/deploy-web.yml` 和 `.github/workflows/web-data-check.yml` 追加 `tools/representative_works.py` 为影响网站数据的依赖，避免以后验证脚本变化不触发构建。
- `web/README.md` 同步说明本轮行为及未完成的 Gate。

## 2. 已实际核对的内容（受限范围）

**使用 GitHub connector 实际回读所有 6 份 TSV 并执行了静态数据核查**：字段数 14、行内容非空、URL 协议 https、选录 ID 去重、TPU 两篇 DOI 独立、ICM A/B 两个研究线并存、Dmitry 作者冲突保留、未入 canonical 的论文不自称 CANONICAL。**6 份 TSV：27/27 条形状与来源字段检查通过。**

另通过 canonical 文件内容确认：`ACT-ICM-SBRAS` 原始 `record_state=HISTORICAL_ALIAS`、`parent_actor_id=ACT-ICM-KRASN`、`identity_alias_of=ACT-ICM-KRASN`；`PAPER-RU-ICM-ELECTRONICS-001` 原始出版物作者为 Dmitry。此核对不等于完整学者论文图谱逐边现场验证。

**尚未通过/未运行，绝不写作 PASS：**
- `python tools/v2repo.py --check`
- `python web/adapters/export_web.py --validate-only`
- `cd web && npm ci && npm run check && npm run build && npm run check:links`
- 最新生产 SHA 的 GitHub Actions 日志、部署路由、实体搜索筛选、浏览器截屏及 390px 移动端测试；
- 发布商 DOI 的实时 URL/授权重验、所有 28 根机构的单独 browser screenshot。

上述环境级验收仍是 Web 上线 P0 门槛，不因源码测试可执行就宣称已经完成。

## 3. 重要边界和下一轮

这轮新增的是**研究样本可读性及机构关系可追溯**，不是新文献发现/科研重大结论，也不改变 P1 Kut 仅内部可行性准备、P2 仅有数据才重启、TPU HOLD 与其余 WATCH 的优先级。

**下一轮 W-C：** 对 `/landscape/` 中俄及全球实验基线进行去重复和逐行出处呈现，整合 Q06 跨装置手机迁移条件、Q09 合作研究任务与 STOP Gate。然后以真实构建/部署/浏览器验收为正式上线门槛。网站科研 Atlas 属“提交实现，运行验证待做”，**不是最终可用性验收通过**。
