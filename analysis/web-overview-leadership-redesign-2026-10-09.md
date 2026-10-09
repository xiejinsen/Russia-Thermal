# Leadership Overview redesign — design and evidence handoff

date: 2026-10-09
status: SOURCE_EDIT_COMPLETE / POST_COMMIT_BUILD_AND_DEPLOY_UNVERIFIED
source: [Astro Overview](../web/src/pages/index.astro)
navigation: [SiteHeader](../web/src/components/SiteHeader.astro)
canonical_authority: unchanged V2.1 objects and Phase1 leadership brief

## Readiness judgment

Research is **conditionally reportable**: original research, academic group ownership, China comparison, 2027–29 bounded trends and hypothetical cooperation packages can support a leadership discussion. No phone-class performance, professor willingness, raw dataset access or current full CI PASS is claimed. Technical publish gate remains OPEN.

## Homepage narrative and visual requirements implemented

1. Hero: one explicit Chinese conclusion — China/domestic stronger for phone-product engineering, Russia selectively helpful in mechanism, calendar aging and diagnostics.
2. Right-hand scientific co-work diagram: Russia laboratory evidence -> falsifiable comparison -> China/internal device, architecture and validation. Not a product pipeline claim.
3. Three partner decisions: Kutateladze Lab1.3 P1 feasibility, MPEI P2 conditional reserve, TPU HOLD. Each names a real mechanism question, actionable input gate, and linked institution.
4. Country capability comparison with interpretation, no fake side-by-side CHF/cooling percentage rankings.
5. Four conditional future 2027–29 scientific research problems (failure, aging, transient reset, thin two-phase boundary); not four active projects.
6. Evidence/authority footer and final yes/no management decision about feasibility-only P1 conversation.
7. Kept deeper institution/scholar/works/claims/evidence/coverage and Decision links in tertiary research navigation; removed duplicated home large direction matrix, repetitive counter grid, abstract exploration hero metrics.

## Visual / accessibility pass on authored code

- Large 29–43px Chinese headline and 17px hero explanatory copy; body 14–15px; explicit high-contrast heading and colored link hierarchy.
- Flat academic blue/teal, white sections, consistent borders; no decorative icon reliance, fake arrows or gradients being sold as scientific insight.
- Links are **specific labels only**; research card paragraphs remain selectable. Two consistent primary/secondary CTA treatments instead of four competing CTAs.
- Layout responsive at 1100px and 760px, three decision cards stack with borders; comparison reorganizes on narrow screens.
- Global research navigation height reduced to about 2.35rem on desktop; dropdown remains keyboard-accessible details/summary.

## Real validation this round

- GitHub default-branch file read-back: 5 opening and 5 closing section tags; redesigned science copy present, old eight-direction homepage matrix removed.
- GitHub commit status endpoint for latest head returned zero statuses, **UNKNOWN not PASS**.
- Container git clone unavailable (DNS resolution of github.com failed). External deployed GitHub Pages inaccessible for independent browser inspection.
- Therefore no `astro check`, `astro build`, live responsive screenshot or latest deploy success is asserted.

## Next bounded implementation gate

1. Obtain workflow/PR build result on `main` for `web/src/pages/index.astro` and SiteHeader.
2. Run `cd web && npm ci && npm run check && npm run build && npm run check:links` in an environment with dependencies; capture errors.
3. Inspect actual hosted homepage at desktop 1440/1080 and narrow 390 widths, check menu dropdown positioning, heading line breaks, card length and links; iterate visual spacing based on real screenshots.
4. Audit displayed text against P1/P2/TPU current canonical decisions. The homepage does not claim that research proposals were authorized.
5. If successful, record deployed URL/SHA and change status to PRESENTATION_VERIFIED.

No decision objects changed; this is a derived web presentation improvement.
