# PPT 视觉生产路线 A/B 实测试制记录

日期：2026-10-10
状态：4_SLIDES_X_2_HTML_PROTOTYPES_RENDERED / VISUAL_REVIEW_PENDING / NOT_PPTX_EXPORT_VERIFIED
适用对象：18 页演示的 P02、P04、P08、P17

## 背景

此前 PNG→可编辑 PPTX 还原对复杂渐变、照片融合、图标和排版保真存在问题。决定优先验证 HTML 原生演示路线，保留双部分讲稿备注，并以实际浏览器渲染而非宣传示例评价。四页使用以下已归档内容契约：
- [P01–02/P13–18](thermal-insight-ppt-gate2-pages01-02-13-18-complete-2026-10-09.md)
- [P03–06](thermal-insight-ppt-gate2-pages03-06-russia-landscape-2026-10-09.md)
- [P07–12](thermal-insight-ppt-gate2-pages07-12-china-comparison-core-evidence-2026-10-09.md)
- [跨页审计](thermal-insight-ppt-gate2-cross-page-logic-audit-2026-10-09.md)

## 两套已制作的视觉路线

**A：Frontend Slides 方法适配样张。** 单文件、无外部依赖的 HTML 演示，暖白编辑式科研版式、深蓝文字和暖铜重点；用于检验专业感和大信息量可读性。[公开 Skill](https://github.com/zarazhangrui/frontend-slides)。

**B：Baoyu Design 方法适配样张。** 1920×1080 HTML 演示，深色精密实验室主题、冷青重点、SVG 原生科研概念示意与流程，强调复杂视觉效果。[公开项目](https://github.com/JimLiu/baoyu-design)。

实际已创建两套独立 HTML（各四页，P02/P04/P08/P17）；支持方向键/空格翻页、F 全屏、N 展开对应 Part I/II 备注。文字为可修改 HTML；技术示意采用独立 SVG；不是整页位图。

**执行状态诚实声明：** 运行环境无法通过 DNS 下载 GitHub 代码。两套样张均基于公开文档设计原则独立实现；本轮**并未**运行 Frontend Slides 官方插件或 Baoyu 的 deck-stage/gen_pptx 组件，因此不能宣称完成了两套官方工具链的端到端实测，更不能用此证明官方 PPTX 导出效果。实际 Chromium Playwright 已通过页面 set_content 完成 8 次 1920×1080 截图。

## 逐页实测

| 评价项 | A | B |
|---|---|---|
| P02 研究底座及管理判断 | 已渲染 | 已渲染 |
| P04 八行能力矩阵 | 已渲染；初版越界已调整 | 已渲染；初版越界已调整 |
| P08 介电沸腾观测概念图 | 已渲染；明确非原始论文 Figure | 已渲染；明确非原始论文 Figure |
| P17 五门槛/STOP 条件 | 已渲染 | 已渲染 |
| 逐页 DOM 边界溢出 | 0/4 | 0/4 |
| 页面自带双部分讲稿 | 4/4 | 4/4 |

科研边界：28/25 样本数非全俄统计；不同装置不做伪量化对比；P08 HFE-7100/Novec649 的 Lab1.3 干斑实验不能写成手机 VC 实验；P17 当前无外联授权。原始 Figure 编号和使用许可未核查，不制造“原始实验图”。

## 对比结论（待用户审美验收）

- **A 的优势：** 大密度文字/矩阵适配较好，清晰、稳重，弱项是视觉张力相对克制。
- **B 的优势：** 科技层次、实验示意与条件决策流程的会议投影效果更强，弱项是深底投影亮度及高密度文字仍需现场验证。
- **初步推荐：** B 视觉系统作为大框架，吸收 A 在 P04 的清楚表格布局；但不立刻复制到全部 18 页。需先得到视觉样张反馈，并对 P04/P08 实际投影环境做进一步检查。

本轮的完整 HTML、PNG、源码、QA JSON 和 PDF 审阅版存放在当前聊天下载包 `Russia_Thermal_AB_4slides_html_and_previews.zip`，**未上传这些演示文件到 GitHub**；本 Markdown 只用于仓库记录 A/B 方法及验收边界。后续正式成品归档时需要再将文件加入 GitHub。

## 下一门槛

1. 用户选择 B、A 或指定局部混合后的视觉系统。
2. 用被认可的版式完成 18 页全套 HTML，并逐页检查文案、图表、原始文献和备注。
3. 若要求 PPTX，单独进行可编辑导出与同页渲染对比；不能把截图 PPTX 充当可编辑文稿。
