# Russia-Thermal｜Web 第三轮：中俄/国际对照、Q06 手机迁移、Q09 科研任务验收记录

date: 2026-10-12
status: SOURCE_IMPLEMENTATION_COMPLETE / SOURCE_CONTRACT_CHECKS_13_OF_13 / REAL_ASTRO_BUILD_AND_GITHUB_PAGES_RELEASE_UNVERIFIED
scope: WEB_WAVE_C / NO_NEW_RESEARCH_OR_OUTREACH / NO_PPT
parent: [十问全站覆盖审计](web-final-research-to-site-coverage-audit-2026-10-12.md)
previous: [Russia Capability Atlas Wave B](web-russia-atlas-wave-b-implementation-2026-10-12.md)
science_authority: Canonical Source → Claim → Capability/Direction; archived Q05/Q06/Q08/Q09/Q10 WP3 / WP4 conclusions and OPP reports

## 1. 本轮已实际提交代码

### C07：对照页面去重 + 精确来源路径

- `web/src/pages/landscape.astro` 删除原先 `CapabilityMatrix` 之后用同一 `vm.rows` 再渲染一遍的方向卡片；只保留一个 Evidence-linked Matrix、科学范围说明、Q06/Q09 下一步路径。布局不是将管理汇报 PPT 展开成长网页。
- `web/src/view-models/builders.ts::buildLandscapeVM` 中每项 Direction 使用 **Direction/Capability → related Claim → supporting/contradicting original PAPER/PATENT Source** 构建引用清单；只根据 Source `countryContext=CN`、`RU`、其他/未分类分组，既有中文比较 prose 不被当成中国独占基线。
- `web/src/types/view-models.ts` 新增单条引用的 ID、title、year、sourceType、countryContext、primaryUrl 字段。
- `web/src/components/CapabilityMatrix.astro` 在每个技术方向附来源原文及 Claim/Source 详读入口，按 China、international/other/unknown、Russia 三类展示，避免从论文链接捏造“同装置优势”。
- **Important:** 显示来源是图谱关联，不代表逐篇原文确证了整个对照文字的所有细节；中文总论的 China/global/internal 混合基线仍需要原论文轴/实验条件旁读。空源并不等于当地无研究。不同 CHF、寿命、VC 工质/结构不在页面形成伪量化排名。

### C08：研究到手机工程迁移门槛

- 新 `web/src/pages/smartphone-transfer.astro`，根据规范化 Direction / Capability 字段逐条展示 science problem、lab-level transferBoundary、phoneTransferMaturity、promotionGate、killGate、internalControlBoundary。
- 四类共性物理约束：装置尺寸/热路；介电 vs R410A vs 铜水 VC/氨 LHP 等工质与界面；传感器/测量链及主动冷却寄生能耗；封装、老化、恢复与制造可靠性。它们是**需要核查的通用工程关口**，不是宣称每条俄论文已经覆盖。
- 仍保留原 Claim/Source、技术 Directions 深链接及 Q06 结题限制；不宣称任何俄方已有手机实机级认证。

### C09：合作任务与 STOP gate 的网页阅读入口

- 新 `web/src/pages/research-packages.astro`，精确链接以下**已有归档任务文件**：
  - `reports/collaboration-opportunities/OPP-01-KUTATELADZE-FAILURE-GROUND-TRUTH.md` P1 内部准备（未批准外联）。
  - `reports/collaboration-opportunities/OPP-02-MPEI-LONG-DURATION-RELIABILITY.md` P2 条件储备。
  - `reports/collaboration-opportunities/OPP-04-ITP-URAL-LHP-OPERABILITY-METHOD.md` WATCH。
  - `reports/collaboration-opportunities/OPP-05-TSU-PCM-TRANSIENT-METHOD.md` WATCH。
  - `reports/collaboration-opportunities/OPP-06-ICM-ELECTRONICS-INTEGRATION-METHOD.md` 方法储备。
- TPU HOLＤ 未捏造 OPP-03 文件；直接链接已核验的 2026 原始论文身份/迁移审计 `analysis/academic-team-mapping/tpu-frumkin-2026-original-paper-identity-gate.md`。
- 摘要包含：核心可证伪问题、若获未来授权需的最小有用学术产物、晋级条件、终止条件、当前受限状态。网页固定强调**资料和工作包本身不是批准机构接洽、数据共享、联合实验或 PoC 的权限**。
- 注意旧 `academic-q09-feasibility-portfolio` 研究档案曾建议“是否批准进行 P1 初步接洽讨论”；此历史措辞不替换当前更严格的领导汇报结论：**只建议先作内部准备，正式外联另行授权**。

### C10：可发现性与防回归

- `SiteHeader.astro` 增加 Smartphone Transfer / Research Work Packages，Russia vs China 导航调整为 China / Global comparison；`research-questions.astro` 的 Q06/Q09、`partners.astro` 增加直达相应页面。
- `web/scripts/check-comparison-transfer.mjs` 检查无重复对照、三类原文引用、Q06 源记录门槛、Q09 原报告文件存在及授权边界、页面导航与错误括号；`web/package.json` 将 `check:comparison` 插入 `check` 和 `build`。
- 动态图谱优先使用 Canonical；Q09 五个页面短描述是**阅读性摘要**而非新的 research SSOT，不得脱离归档 OPP 原文单独做科研真值。

## 2. 本轮实际检查与尚未通过的 Gate

实际通过 GitHub connector 回读最新源文件，并在本次会话执行了 13 项源码级断言：**13/13 PASS**，覆盖三个页面/导出阅读路径、研究 Source 分类与 TS 合同、无重复 `vm.rows`、Q06 动态 transfer fields、Q09 report links/权限页、Navigation、构建检查脚本。已人工确认五份 OPP 归档文件路径都存在；不存在 OPP-03 不构造它。

**以下状态只能是 NOT_VERIFIED，而非 PASS：**
- 实际运行当前 HEAD 的 `python tools/v2repo.py --check`、`python web/adapters/export_web.py --validate-only`、`cd web && npm ci && npm run check && npm run build && npm run check:links`；
- GitHub Actions 当前 HEAD deploy run 的 job/log、Pages 新内容 CDN 发布状态；
- 浏览器实测 1440/1024/390px、点击、文献打开率、屏幕阅读器表格可读性与移动端布局。

当前环境容器 DNS 请求 `xiejinsen.github.io`、`raw.githubusercontent.com` 失败；web.open 对站点根 URL 与 Atlas、十问、landscape 也报不可访问。这只能证明**本次运行无法实测**，不能反推出网站已宕机或已上线。构建与浏览器 Gate 保持 OPEN。

## 3. 直接给用户检查的网址

以下为 GitHub Pages 项目路由的**预期正式地址**，只有新 GitHub Actions 构建发布成功后才能保证页面为本次 HEAD：

- [主页](https://xiejinsen.github.io/Russia-Thermal/)
- [中俄及国际对照](https://xiejinsen.github.io/Russia-Thermal/landscape/)
- [手机工程迁移](https://xiejinsen.github.io/Russia-Thermal/smartphone-transfer/)
- [合作研究任务](https://xiejinsen.github.io/Russia-Thermal/research-packages/)
- [俄罗斯科研能力 Atlas](https://xiejinsen.github.io/Russia-Thermal/russia-atlas/)
- [代表论文目录](https://xiejinsen.github.io/Russia-Thermal/representative-works/)
- [Q01–Q10 最终研究结论](https://xiejinsen.github.io/Russia-Thermal/research-questions/)
- [GitHub Actions 构建部署结果](https://github.com/xiejinsen/Russia-Thermal/actions/workflows/deploy-web.yml)

请优先让用户打开上述网页 URL 而不是交给他们 GitHub 文件路径当可视化效果；如果浏览器提示 404/空白/旧版，先检查 Actions 的 exact SHA 和 logs，再进行内容视觉审查。

## 4. 下一验收建议

1. 优先拿到当前 HEAD 构建日志，并解决任何 Python exporter、Node integrity、Astro typecheck 和链接失败；不能把本轮静态 13 项检查当运行质量。
2. 可访问站点后对三个新/改路由做真实屏幕宽度与源链接点击检查，尤其比较矩阵的横向滚动与在窄屏证据列表的展示。
3. 保持 China baseline 真实性与方法适用性审计；重点检查“方向相关来源”是否足以支持该句比较话术，不足时进一步降低结论范围。
4. 在实际 QA 过关之后，再考虑系统化视觉统一、机构地图外链/Leaflet 降级和最终发布验收。PPT 继续暂停。
