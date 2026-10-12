# Russia-Thermal｜Web 第一轮研究结题与授权口径同步实施记录

date: 2026-10-12
scope: WEB_CLOSEOUT_WAVE_A / Q01_Q10_DATA / AUTHORIZATION_COPY / P1_P2_TPU_CONSISTENCY
state: SOURCE_CHANGES_COMMITTED / REPOSITORY_STATIC_SMOKE_15_OF_15_PASS / ASTRO_BUILD_BROWSER_DEPLOY_UNVERIFIED
parent: [网页研究内容覆盖审计](web-final-research-to-site-coverage-audit-2026-10-12.md)
science_authority: [WP3 final matrix](research-closeout-wp3-q01-q10-final-matrix-2026-10-09.md), [question ledger](../../00-project/final-insight-question-ledger.tsv), [frozen portfolio](../../reports/leadership-decision-brief.md)
presentation_scope: no change to original Source/Claim/Actor/Capability/Decision, no new external collaboration, no PPT

## 一、实施完成的事项

### W-A01 Q01–Q10 被接入网页数据生成流程

- `web/adapters/export_web.py`: added `load_question_closeouts()`, joining the Q01–Q10 original TSV (`research_closeout_disposition`, historical workstream status, reference paths) with final WP3 matrix research answer, confidence, and residual limitations. Publisher and source authority have not been moved into Web.
- Exporter fails on any missing/duplicate Q question, mismatch of closeout statuses or an acceptance split other than **3 ACCEPTED_PUBLIC_EVIDENCE / 7 ACCEPTED_WITH_DISCLOSED_LIMITATION**.
- Normalized record is `questionCloseouts.json`. `web/src/types/normalized.ts`, `web/src/data/load-normalized.ts`, `web/schemas/question-closeout.schema.json` and generated-data documentation are updated together.
- Historical TSV `state=IN_PROGRESS` in older workstream rows is preserved separately from final decision-support research disposition. This prevents automatically labeling completed Q01/Q02 as unclosed.

### W-A02 可导航的研究结题页

- New `web/src/pages/research-questions.astro` creates the `/research-questions/` page: ten questions, short subject labels, complete public-research answers, confidence, remaining evidence limits, internal drill-down to existing directories and GitHub original matrix/ledger/related provenance paths.
- `web/src/components/SiteHeader.astro` adds a main navigation item; homepage links to the 10/10 answer page.
- The page uses generated research data rather than hand-writing ten separate scientific conclusions; the page's Chinese topic labels and cross-page navigation targets are presentation metadata only.

### W-A03 审批与科研能力的边界统一

- Central shared presentation copy `web/src/view-models/action-boundary.ts` states that **only internal P1 feasibility preparation is proposed; external outreach, data/IP transfer and PoC need separate future approval**. It explicitly does not create a new canonical Decision or replace Phase1 ranking.
- Home page previously said “Authorize a P1 feasibility inquiry” / “批准 P1 前期合作可行性接洽”. These ambiguous CTA phrases were replaced with the internal-only boundary; `/partners/` now prominently distinguishes partner rankings / proposed actions from actual external-contact authorization.
- `/research-questions/` also reuses the same wording.
- Homepage P1 retains original Lab1.3 mechanism-data scope; P2 keeps 42-month thermosyphon chronology conditional; TPU homepage now separates *open-droplet wettability* from a distinct laser/surface-process research line instead of implying one original paper proves both phone outcomes. The canonical Phase1 partner ranking did not change.
- Removed literal backslash-n `\\n` sequences in homepage links/CSS at source level.

### W-A04 防止以后研究变了网页未刷新

- `.github/workflows/deploy-web.yml` and `.github/workflows/web-data-check.yml` now both watch `analysis/audits/research-closeout-wp3-q01-q10-final-matrix-2026-10-09.md` in addition to their existing 00-project/web/canonical paths, so WP3 research updates can trigger data regeneration and publish checks.
- `web/scripts/check-research-closeout.mjs` validates the generated ten questions / 3+7 status and rejects old ambiguous P1 approval, missing final-Q route/nav, or conjoined TPU topic at source level.
- `web/package.json` runs `npm run check:research` inside both `npm run check` and `npm run build`. The code includes tests, but **not yet verified execution** at current HEAD.

## 二、本轮实际验证结果

GitHub connector re-read the latest source files and tests against WP3 TSV and matrix. **15/15 static/source-level smoke assertions passed**, including ten rows/ten matched statuses, exact 3+7 counts, frontend generated-data import, route/header/home linkage, shared boundary, two workflow input globs, removal of old CTA, and no literal backslash-n on homepage.

This is NOT equivalent to:
- executing `python web/adapters/export_web.py --validate-only`;
- executing `cd web && npm ci && npm run check && npm run build && npm run check:links`;
- checking generated HTML, screenshots, external publisher links, GitHub Pages latest SHA;
- confirming live mobile/header behaviour or TS/Astro compilation.

A local `git ls-remote https://github.com/xiejinsen/Russia-Thermal.git HEAD` still failed due container DNS resolution of github.com. The web fetcher also could not read GitHub Actions workflow UI or the newly deployed `/research-questions/` page. **No latest deployment PASS or runtime verification claim is made.**

## 三、验收步骤（执行环境可访问仓库后）

Run on exact latest main SHA:
```bash
python tools/v2repo.py --check
python web/adapters/export_web.py --validate-only
cd web
npm ci
npm run check:research
npm run check
npm run build
npm run check:links
```

Check actual deployment at https://xiejinsen.github.io/Russia-Thermal/ and https://xiejinsen.github.io/Russia-Thermal/research-questions/ . Inspect 1440px, 1024px, 390px layouts; actual click-throughs from homepage to Q01–Q10 → institution/paper/claim; P1/P2/TPU → original publication; all stop/outreach boundary statements, and linked source URLs. Record SHA, CI/log links, run outputs, screenshots, and any repairs. Status stays UNVERIFIED until this evidence exists.

## 四、下一步（第二轮，不要再次扩大公开资料研究）

Implement Russian Capability Atlas aggregation and Representative Works expansion based on the existing 28 recovered capability-owner roots, 25 prioritized academic profiles and named source records. Priority is **scientific people/institution identity and output provenance**, not new promotional visuals. Then improve China/global comparison table and Q09 research-package presentation, followed by actual full-site runtime QA.

Historical Web V1 acceptance is unchanged and does not cover the latest revisions. This round changes no canonical research records or approved collaboration permissions.
