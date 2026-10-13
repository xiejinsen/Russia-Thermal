# 合作机构与研究优先级：阅读与视觉验收（2026-10-13）

status: WEBSITE_PRESENTATION_ACCEPTED / NO_SCIENTIFIC_DECISION_CHANGE
scope: web/src/pages/partners.astro
source_authority: 07-decisions/priorities, 05-directions, Q09-Q10 closeout, original canonical Source / Claim records

## 原页面问题

- 第一层包含多套机构、学者、方向嵌套卡片，P1/P2/P3 的当前行动差异不突出。
- 技术方向又重复铺开展示；Primary/Reserve/Hold 与 Strategic/Challenger/Watch 混在一起，容易错把 TPU 的技术方向保留解释成新的合作推进许可。
- 英文操作标签、过小字号和很多钻取链接破坏领导快速扫描路径。
- 当前尚未批准外部接洽、原始数据共享或 PoC，需要直接说明，而不是重复长篇中英边界文本。

## 已实现的阅读顺序

1. 首屏中文摘要：**仅一个优先研究问题、一个条件储备、一个暂缓方向**，明确优先级不是合作许可。
2. 三张并列／移动端垂直卡片（P1/P2/P3）：机构、研究问题、值得关注的公开证据和不能直接证明的内容，采用同一个视觉模板与不同强度强调。
3. 统一授权边界：仅 P1 内部可行性准备；外联／数据/IP/PoC 仍须另行审批。
4. 三组溯源内容：当前处理、继续／停止门槛、原始论文、对应 Claim（若有）、正式优先级记录和机构档案。
5. 8 项技术方向放在独立的按需展开组中，解释**机构优先级 vs 技术投资/研究方向状态**之间不是一一对应，不会从 Stage-0 错误推断 TPU 已获得授权。

## 事实与身份约束

| 研究判断 | 显示依据 | 允许说明的事实 | 不允许说明 |
| --- | --- | --- | --- |
| P1 Kutateladze Lab 1.3 | PAPER-RU-DRY-001 → CLM-PAV-002 → PRI-01-KUT-LAB13 | 实验观察沸腾干斑动态；内部优先验证数据与可重复标签的附加价值 | 手机密闭 VC 已实现干涸预警，或研究所已同意合作 |
| P2 MPEI | PAPER-RU-AGE-001 → CLM-MPEI-008（OPEN）→ PRI-02-MPEI | 42 月周期运行后出现毛细状态变化；仅有条件保留时间序列数据验证问题 | 已验证早期退化预警、剩余寿命预测或第二个并行对外项目 |
| P3 TPU | PAPER-CN-UTVC-WP-001 + PRI-03-TPU | 国内真实 0.4 mm UTVC 润湿图案构成强对照；俄方表面工艺未证差异化增量 | 俄方同等手机级方案已证优越；或 HOLD 被自动解除 |

机构和人的信息通过正式 Actor/Capability 关联呈现，不自动赋予论文署名。

## 真实浏览器验收

- [Chromium 成功验收运行](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38412061959)：15 类网页路由 × 1440px 桌面、768px 平板、390px 手机，**45/45** 正常，0 页面溢出、0 损坏图片、0 JS 错误／H1 异常。
- 合作页面专用断言：三张决策摘要、三块证据/行动条、至少三组技术方向及至少七条溯源连接均存在。
- 截图已经人工审看“desktop-partners”和“mobile-partners”真实首屏，字号、网格和手机卡片可读；每次运行完整 PNG 截图作为 Actions Artifact 保存（30 天）。
- [Web UI Check 成功](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38412062275) 且 [V2.1 Repository Health 成功](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38412062107)。
- [正式 Pages 部署](https://github.com/xiejinsen/Russia-Thermal/actions/runs/38412062557)：需结合运行结果判断，不以此报告替代部署状态。

## 后续

此轮仅做网页表达与呈现，不增添或改变科学判断，不重新开启已完成的 Q01–Q10 洞察工作；未来若有重大资料纠错，必须在 SSOT 中另行记录并由页面引用。
