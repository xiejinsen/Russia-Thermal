# Russia-Thermal — Website report-readiness audit

date: 2026-10-09
status: SOURCE_LEVEL_ROUTE_AND_SEMANTICS_AUDIT / LIVE_DEPLOYMENT_UNVERIFIED
scope: Leadership, technical challenge and partner-planning paths
authority: QA_FINDINGS_ONLY / NO_SCIENCE_DECISION_CHANGED
source: repository main as inspected after Overview integrated v2 changes

## Verdict

**CONDITIONAL_REPORT_CONTENT / NOT_RELEASE_VERIFIED.** Overview editorial structure is directionally suitable and Q01–Q10 chapter coverage exists, but latest CI build, generated routes, deployed browser journey and real click-through remain unobserved. Do not mark the website as fully verified or formally published without those checks.

## Route inventory — corrected

**Real file locations**: `web/src/pages/institutions.astro` and `web/src/pages/scholars.astro` map to routes `/institutions` and `/scholars`; absence of `web/src/pages/institutions/index.astro` or `scholars/index.astro` was a **false negative** in the earlier scan. Existing dynamic paths include `institutions/[id].astro`, `scholars/[id].astro`, `directions/[id].astro`, `papers/[id].astro`, `claims/[id].astro`, `capabilities/[id].astro` and `patents/[id].astro`. Index routes verified in GitHub source include `/partners`, `/landscape`, `/research-coverage`, `/representative-works`, `/research-map/russia`, `/evidence`, `/papers`, `/claims`.

This is source-file route presence, not proof the corresponding static HTML has built or has correct canonical links.

## Path 1 — leadership decision

Route design: `/ → /landscape → /partners → /decisions`.

**Confirmed by code:** Overview provides bilingual editorial thesis and links; `landscape.astro` uses `buildLandscapeVM` and `CapabilityMatrix`; `partners.astro` uses `buildPartnerPortfolioVM` and priority model; `decisions.astro` exists. Phase1 decision P1 Kutateladze / P2 MPEI / TPU HOLD is consistent with the report level.

**P1 issue WEB-A01**: Overview houses manually authored `comparisons`, `candidates` technical descriptors, and Q08 collaboration-counterfactual copy while `buildOverviewVM()`, `buildLandscapeVM()`, `buildPartnerPortfolioVM()` drive detailed pages. Updating canonical objects can leave homepage scientific prose stale. Fix: centralize source-aligned editorial metadata or implement a consistency checker for P1/P2/TPU and primary claim phrases. Retain manually written UX copy only when tagged with source/provenance.

**P1 issue WEB-A02**: `landscape.astro` renders a `CapabilityMatrix` followed by a complete per-row comparison-card list with similar information. This is possible duplicate dense presentation and weak hierarchy; require actual screenshot/click review to classify visual severity before redesigning.

## Path 2 — research evidence

Route design: `/ → /directions/[id] → /claims/[id] → /papers/[id]` and original external publisher DOI.

**Confirmed by code:** detail routes use `getStaticPaths` from canonical identifiers, evidence-pressure and relationship components; `papers/[id].astro` contains a concrete `href={vm.primaryUrl}` original-source link, explicitly reports findings and limitations, supports Claim and Direction drill-down.

**P1 issue WEB-A03**: critical source routes require validating `vm.primaryUrl` for missing/placeholder/discontinued URLs and DOI author/year identity, especially sources cited by homepage. Must do source-target checks rather than merely validating Astro routes. Check paper original link rel/noreferrer and target. Check exact paper and claim links from home through generated HTML; current featured paper CTA points to `/papers` *listing*, not its specific `/papers/[id]` item, causing avoidable extra navigation. Consider direct selected Paper/Claim route after confirming canonical generated IDs.

**P1 issue WEB-A04**: Current homepage's corpus-scoped count `vm.stats.capabilities` is total normalized capability count but accompanying institution index `vm.institutions` is derived from **active investment lanes only**. Text says this explicitly, yet a casual reader may infer that six institutions cover all 34 capabilities. Make denominator/scope explicit in UI or link to `/research-coverage` immediately adjacent.

## Path 3 — partner planning

Route design: `/institutions → /scholars → /representative-works → /partners`, with original paper and permission/data-right gates.

**Confirmed by code:** `institutions.astro` and `scholars.astro` call collection builders and render explorer toolbars; detail pages are canonically generated; representative works page exists; portfolio shows rank and lane distinction; named priority cards and explicit stop/feasibility statements exist.

**P1 issue WEB-A05**: Current institutional authorship exceptions (NSU affiliation, ICM Nesterov identity, ITMO authors, TPU joint authorship) may produce wrong perceived person/team linkage if unconstrained. Audit selected public profiles and affiliations against original papers; ambiguous connections should be marked as unverified, never rendered as unqualified team membership.

## Platform, quality and deployment

**P0 release gate WEB-R01:** no verified **latest HEAD** `npm run check`, `npm run build`, `npm run check:links`; do not interpret GitHub `combined_status.statuses=[]` as a pass. Previous 2026-10-08 Actions PASS is historical and does not cover Overview v2. Required: exact latest commit SHA, successful Actions run or equivalent build output, generated internal-link scan, smoke test paper-detail and partner pages.

**P0 release gate WEB-R02:** real desktop 1440/1024 and mobile 390 browser walkthrough not completed. Need screenshots and click tests (header dropdown, all five Overview chapters, paper/claim links, filtered institution/scholar directory). Figma preview does **not** replace deployed browser validation.

**P2 platform fragility WEB-A06:** Russia research map loads Leaflet CSS/JS from `unpkg.com`; check offline/CDN failure graceful fallback and mobile usability. Not known to fail in deployment, just dependency risk.

**P2 UX issue WEB-A07:** `landscape.astro`, `partners.astro` etc still have older component/visual grammar compared to v2 editorial homepage. Harmonize only after content/click-path correctness; do not rewrite all pages solely for cosmetic consistency.

## Fast remediation order

1. Run real latest HEAD Actions/build/link check and record SHA/run URL; don't conflate historical CI.
2. Trace **one complete example for each journey**: P1 science decision from Overview to original paper, China baseline to claim; P2 from institute/scholar to 42-month study and reserve gate; TPU hold to canonical Decision.
3. Resolve same-topic homepage vs canonical-page semantic drift for P1/P2/TPU; annotate displayed denominator and source scope.
4. Inspect visuals and interactive states in actual browser at 1440, 1024, 390. Repair true broken links/overflows and accessibility first.
5. Then improve report-critical details and styling where user journeys show friction; keep Overview otherwise stable.

## Verification provenance and limits

The audit inspected via GitHub connector the actual index and detail files, `web/src/view-models/builders.ts`, `web/package.json` and `web/scripts/check-internal-links.mjs`. Confirmed route files and implementation intent, not a built site. Missing verified network/current Actions browser session prevents asserting PASS. The scientific conclusions remain conditional (no phone-scale verified RU advantage, no external contacts, no raw data permission).


## Remediation cycle 1 — 2026-10-09

- **WEB-A03 PARTIAL FIX:** homepage featured Dryout paper now links directly to `/papers/PAPER-RU-DRY-001` and `/claims/CLM-PAV-002`, whose canonical repository records were found in `01-evidence/papers/PAPER-RU-DRY-001/README.md` and `02-claims/CLM-PAV-002.md`. Source code commit `ee621ea712f6f5108c0cf8f4f2fb545ca06d7093`. User-facing paper headline still separately links to publisher DOI.
- **WEB-R01 NOT CLEARED:** `fetch_commit_workflow_runs` returned `workflow_runs: []` for previous HEAD but the connector only reports PR-triggered runs, so it cannot prove no `push` run or a failure. GitHub Actions UI and deployed GitHub Pages could not be fetched by web tool during this cycle. No `npm run check`/`build`/`check:links` was executed.
- **WEB-R02 NOT CLEARED:** no rendered browser screenshots or real mobile interaction observed. Do not assert release PASS.
- Next remediation: retrieve actual push-triggered GitHub Actions result through a capable authenticated route or user-provided Actions link, then run targeted P1/P2 click-through and canonical scientific content consistency check.


## Remediation cycle 2 — 2026-10-09 P1/P2 evidence-path audit

**P1 verified source semantics:** `01-evidence/papers/PAPER-RU-DRY-001/README.md` and `02-claims/CLM-PAV-002.md` characterize local dielectric-boiling dry-spot observations associated with irreversible crisis under that rig's conditions; direct sealed phone-UTVC predictor remains unproven. Homepage direct paper and Claim links were added in previous cycle.

**P2 verified source semantics:** `01-evidence/papers/PAPER-RU-AGE-001/README.md` describes one MPEI R410A two-phase thermosyphon with 42 calendar months periodic operation and post-operation diminished capillary imbibition, despite comparatively stable aggregate thermal performance. `02-claims/CLM-MPEI-008.md` is explicitly `OPEN`, `MEDIUM` confidence, an analyst early-indicator hypothesis **not observed in the original study**. The P2 priority file `07-decisions/priorities/PRI-02-MPEI.md` maintains `RESERVE`, contact only if long-duration data access possible.

**WEB-A03 / P2 partial fix:** commit `b13ee705d55b2f1f3191a63fec30784846d929fc` adds direct hyperlinks to `/papers/PAPER-RU-AGE-001` and `/claims/CLM-MPEI-008` in the homepage Collaboration Value comparison, adds visible “OPEN hypothesis” and distinguishes post-operation observation from a hypothetical early warning. This patch preserves P2 Reserve and no phone device claim.

**Remaining risks:** person/organization exact affiliation quality, homepage editorial hand-maintained facts against evolving canonical view models, and generated link/deployment accessibility remain open. No build / browser test was run in this cycle.
