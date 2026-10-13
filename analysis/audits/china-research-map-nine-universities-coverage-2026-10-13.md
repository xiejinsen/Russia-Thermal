# 中国科研对照版图｜高校覆盖一致性修复（2026-10-13）

status: WEB_PRESENTATION_COVERAGE_RECONCILED / RESEARCH_SSOT_UNCHANGED
scope: `web/src/components/ResearchSchematicAtlas.astro` + visual browser QA
scientific_scope: CN comparator institutions for Russia-Thermal, not a China-wide excellence ranking

## 核查结论

原网页的中国科研地图虽然已有完整的中国研究 Actor/Capability 数据，但地图顶部的 `canonical` 常量**只手工列出四所高校（PKU、SEU、SJTU、SCUT）**，因而把已具有坐标的 ZJU、USTC 也排除在地图编号之外。另三所高校 BIT、HUST、HIT 已有机构档案和确认城市，但其 Actor 记录缺少核实的校区坐标；这与“没有研究能力”无关。

中国对照研究资料中实际有**9 所单独建档的高校**（并非仅 4 所）。页面新版本确保九所均具备可点击的编号与机构档案入口：

| 地图编号 | 学校 | ACT | 已有校区位置 | 地图处理 |
| --- | --- | --- | --- | --- |
| 01 | 北京大学 | ACT-PKU | 北京 39.9928, 116.3055 | 校区坐标记录；原有学校照片卡 |
| 02 | 东南大学 | ACT-SEU | 南京 32.0572, 118.786 | 校区坐标记录；原有学校照片卡 |
| 03 | 上海交通大学 | ACT-SJTU | 上海 31.0247, 121.4339 | 校区坐标记录；原有学校照片卡 |
| 04 | 华南理工大学 | ACT-SCUT | 广州 23.1513, 113.3447 | 校区坐标记录；原有学校照片卡 |
| 05 | 中国科学技术大学 | ACT-USTC | 合肥 31.8206, 117.2808 | 校区坐标记录；紧凑档案入口 |
| 06 | 浙江大学 | ACT-ZJU | 杭州 30.2636, 120.1203 | 校区坐标记录；紧凑档案入口 |
| 07 | 北京理工大学 | ACT-BIT | 无校区坐标 | 仅北京城市级近似位置，虚线区别 |
| 08 | 华中科技大学 | ACT-HUST | 无校区坐标 | 仅武汉城市级近似位置，虚线区别 |
| 09 | 哈尔滨工业大学 | ACT-HIT | 无校区坐标 | 仅哈尔滨城市级近似位置，虚线区别 |

位置规则：

- 已核验的六所高校使用 `03-actors/organizations/ACT-*/README.md` 已存经纬度，不改变 SSOT。
- 北京理工、华中科大、哈工大的城市级替代点**只存在于地图的展示层**，不写入 Actor 的校区坐标。
- 城市级点来自地名数据库：北京 [GeoNames 1816670](https://www.geonames.org/1816670/beijing.html) (39.90750, 116.39723)，武汉 [GeoNames 1791247](https://www.geonames.org/1791247/wuhan.html) (30.58333, 114.26667)，哈尔滨 [GeoNames 2037013](https://www.geonames.org/2037013/harbin.html) (45.75, 126.65)。
- 城市级地理点与精确校区点使用不同颜色／虚线边框；文字标注“城市级位置（非校区坐标）”。不能把同城城市中心与大学校门对齐解释为学校具体地址。

## 页面范围

请区别下列对象计数：
1. 中国版图顶部：**9 所特别列出的高校**，其中 6 个校区位置记录、3 个城市级替代标记；4 张学校图片是有来源的图文重点入口，不等于仅有 4 所高校。
2. `buildResearchMapVM('CN')` 在 `vm.nodes` 中包含所有已记录位置的中国根 Actor，除了高校还可能是其他组织类型；`vm.unmappedActors` 保留待核位置的非人物 Actor。这套统计口径与“9 所高校”不是一回事。
3. 中国不是此次主调研对象，不以标记数量推断中国高校总量、研究强弱或终端产品性能。核心研究结题 Q01–Q10、P1/P2/TPU HOLD 和原始 Source/Claim 没有更改。

## 网站质量门禁

- `web/scripts/check-web-quality.mjs` 要求九所高校的机构链接、九个编号节点与五所扩展机构入口存在，并且地图标注区分城市级位置与校区坐标。
- `web/scripts/browser-visual-qa.mjs` 在 1440/768/390px 下检查九个真实渲染地图编号、三所城市级标记、五个扩展档案入口及编号框之间的视觉重叠。
- 实际浏览器截图和构建结果以 GitHub Actions `Visual Browser QA` 和 `Web UI Check` 最新通过记录为准。发布链接：https://xiejinsen.github.io/Russia-Thermal/research-map/china/
