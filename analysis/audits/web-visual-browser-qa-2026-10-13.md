# Russia-Thermal｜网页真实浏览器视觉验收与中文呈现修复

date: 2026-10-13
scope: WEB_VISUAL_QA / UI_LANGUAGE / SOURCE_VISUAL_PROVENANCE / RESPONSIVE_LAYOUT
scientific_authority: NO_RESEARCH_CONCLUSION_CHANGED
release_gate: BROWSER_RENDER_AND_INTERACTION / NOT_A_FULL_ACCESSIBILITY_CERTIFICATION

## 一、验收方法

在 GitHub Actions 真实 Chromium（Chrome）浏览器中，使用**刚从研究 SSOT 构建的 Astro 生产静态网页**而非设计效果图，分别以 1440×900（桌面）、768×940（平板）、390×844（手机）访问 14 类代表路由：

- 首页；俄罗斯与中国科研版图；
- Q01–Q10 结题页；Kutateladze 机构；Surtaev 学者；
- 原始论文总目录、原始证据目录、研究主张目录；
- 单条 Claim、专利、技术能力详情；
- 中俄／全球对照、全站内容目录。

**14 × 3 = 42 个浏览器页面视图**。每页保存全页 PNG；还在 Actions 日志留有桌面、平板、手机的首屏真实 JPEG，用于主观视觉检查。保存 `results.json` 和 `summary.json`，检测页面响应状态、横向溢出、损坏图片、JS 异常、页面 H1 数量、无文本链接和原始证据重点显示区域；对论文、Source、Claim 三个目录测试关键词筛选以及一键重置（3 种尺寸×3 类目录=9 次交互）。

中文浏览器字体采用 Noto CJK。第一次在无 CJK 字体的 runner 上截图出现中文方框，属于 QA 字体缺失；安装字体后重新截图验证中文正常显示。

**截图与可复现结果：** [Chromium 42 视图/交互已成功的 Actions 记录](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38403463173)；自动截图包在该 run 的 Artifacts 栏（保留 30 天）。最终 mobile-map 改进已在 [新一轮浏览器验收](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38404072459) 成功通过，并输出 [42 张全页截图和机器报告（ZIP）](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38404072459/artifacts/11816901595)。

## 二、已修复的用户可见问题

| 项 | 浏览器发现 / 原始情况 | 修复 | 判断 |
|---|---|---|---|
| 中文字体 | Ubuntu 运行器中文字呈方框，无法进行有效视觉判读 | QA 安装 Noto CJK 后重拍全部尺寸 | 已复测字体正常 |
| 首层导航 | 中文导航已存在，多个研究页面主标题仍为英文 | 机构/学者、技术能力、方向、合作、决策、前沿、论文/证据/Claim 目录使用中文主标题 | 文献原题和英文专业术语不翻译 |
| 筛选条 | 多筛选项在手机使用横向滚动，英语 Search/Reset/All | 组件改为响应式多行布局和中文检索、清除筛选、结果计数；主要目录筛选项中文化 | 操作规则与 URL 参数未改变 |
| 首页俄罗斯地图 | Novosibirsk 与 Tomsk 位置接近，英文城市名重叠 | 两侧错位展开城市标签，保留地理位置点 | 桌面、平板截图已查 |
| 中俄科研地图手机首屏 | 开场说明过高，实际地图被推到第一屏后方 | 压缩说明并减少冗余块，让地图更早出现 | 已做截图确认 |
| 中国地图手机轮廓 | 680px 固定宽使 390px 视口只看见左半轮廓，机构标记须横向滚动 | 改为完整国界优先、编号标记简化，机构全称在图下卡片 | 真实浏览器再次验证，完整国界与编号均在 390px 手机宽度可见 |
| 原始资料分级 | 论文、专利与背景资料主要靠长列表文本，关键原文不突出 | 2 篇决策核心论文、1 篇中国对照论文及 2 件技术对照专利采用不同卡片/边框/标签；普通资料保持中性 | 视觉分级已见于桌面/手机截图 |
| 页面语言元数据 | 文档默认 `lang=en`，不利于中文朗读 | 全站 `lang=zh-CN` | 不改变论文作者、原文题目与 ID |

### 原始资料的视觉等级及法律/科研语义

- **核心结论原文（蓝色）**：`PAPER-RU-DRY-001` 对应 Kutateladze 的干斑实验；`PAPER-RU-AGE-001` 对应 MPEI 的长期运行终点观察。前者限源实验条件，后者**不证明**早期退化预测；两者没有因视觉突出被提升为手机性能证明。
- **关键中国对照（灰紫色）**：`PAPER-CN-UTVC-WP-001`，用于中国超薄均热板研究基线，而不是与俄罗斯实验做未配平设备性能排名。
- **关键专利对照（灰紫色）**：`PATENT-CN-VC-AGING-001`（老化试验设备）及 `PATENT-GLOBAL-DRYOUT-OBS-001`（干涸监控现有技术）。这些是技术 prior art 与对照限制，**不是法律 FTO 意见，也不等于手机产品验证**。
- 其它 Source 不因为未被突出就被视为无效；全部仍留在按类型、国家、时间、Claim、能力过滤的证据目录。

## 三、自动浏览器结果（已成功的第一个完整交互版）

[本轮 42 页面 Chromium 验收](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38403463173)：

- 42/42 页面 HTTP 正常且有唯一 H1；
- 0 横向页面溢出，0 损坏图片，0 JS 异常；
- 论文目录初始 60 → 搜索 1 → 清除回 60；
- 原始资料目录初始 162 → 搜索 1 → 清除回 162；
- Claim 目录初始 123 → 搜索 1 → 清除回 123；
- 筛选 9 次（桌面/平板/手机）均成功；
- 原始证据页面 5 个关键 Source 卡片 + 5 条索引条目的可见重点标记均存在。

截图从真实浏览器捕获，**不是图像生成器制作的模拟 UI**。截图中首屏视觉人工检查确认了：中文可显示、主导航有明确中文、首页图文比例一致、关键原始资料的视觉等级与普通条目明显不同、手机页不产生横向页面溢出。

## 四、最终移动地图验收与发布结果

[最终 Chromium 42 视图验收 run 38404072459](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38404072459) 完成 SUCCESS，0 页面溢出、0 损坏图片、0 JS/主标题异常；9 项筛选/重置交互全部通过。用安装 CJK 字体的 Chrome 实际预览确认：390px 中国科研地图可同时看到完整轮廓及 01–04 机构编号，不再依赖水平滑动才看见地点。原始数据、Source/Claim/Direction/Decision 未改动。

[正式 Pages 部署 run 38404072338](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38404072338) 以及 [Web UI Check run 38404072265](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38404072265) 均 SUCCESS。

## 五、验收限制

- Chrome/Chromium 的 42 个页面截图和 DOM 行为检查，不能代替所有浏览器版本、所有屏幕或人工对每篇论文内容重新核查。
- 浏览器截图未构成完整 WCAG 无障碍规范验收；需要另行处理键盘遍历、读屏、对比度细项等全面验证。
- “图片加载成功”表示在 QA 运行时外部媒体实际返回并解码，不担保外部网站之后不会变更/封锁。
- 研究结论 **Q01–Q10 已结题**、P1 Kutateladze/P2 MPEI/TPU HOLD 的状态不因网站美化改变。
- 后续只需按已确认的用户体验问题维护网站，不再为此重启 123 条 Claim 的学术复核。

## 六、维护门禁

`.github/workflows/visual-browser-qa.yml` + `web/scripts/browser-visual-qa.mjs` 在网页源码变动时运行 Chromium 多尺寸截图与筛选交互验收，发布 `russia-thermal-browser-screenshots`。结构测试 `web/scripts/check-web-quality.mjs` 会检查关键原始资料能否在证据入口见到，并拒绝恢复英文为主的主要筛选控件。


## 附：2026-10-13 关键证据入口范围纠偏

网页先前在“核心研究依据与技术对照”下**只列 5 项人工精选资料**，与已归档的研究证据链覆盖范围不相称，且名称容易误导读者以为全部研究仅依据五条资料。这是**网页导读范围设计错误**，不是科学洞察结论或原始 Source 数据缺失。

已调整为“**按结题判断查看关键原始资料**”：四组共 **17 条从正式 Source 中选择的阅读入口**，每条保留原论文/专利/官方原文链接及不同技术边界。
- P1/P2 直接实验依据：2 条；
- 中国及国际关键技术对照：8 条；
- 其他俄罗斯科研方法与适用边界：4 条；
- 学者身份和研究活动的官方材料：3 条。

该 17 条列表是**便于领导和技术专家浏览的导览，不是“全部结论证据”或新形成的强弱排名**。网页原有 162 条正式 Source 目录仍完整展示，其中 151 条有 Claim 直接关联、11 条作为显式上下文材料保留。另提供“按机构查看 27 项代表作”跳转；该选目清单和正式 Source 的概念与验证状态不同，不得把 27 项都等同于已形成独立 Source→Claim 证据关系。

代码位置：`web/src/view-models/source-emphasis.ts`（严格以已核验的 canonical Source ID 定义分组及页面语义）、`web/src/pages/evidence.astro`（分组展示、全部目录）、`web/scripts/check-web-quality.mjs`（防回归）。全站研究决策和科学结题未改变。
