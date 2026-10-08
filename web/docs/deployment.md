# Web Preview / Deployment

status: PRODUCTION_WORKFLOW_VERIFIED
date: 2026-10-08

## Production site address

The repository has an existing Pages production acceptance record; the current GitHub Actions deployment workflow completed successfully for commit `b1cf7bae359c276d12381f70df1d310006ce5ade` on 2026-10-08: https://github.com/xiejinsen/Russia-Thermal/actions/runs/37787614367 . External browser reachability after that deployment was not independently confirmed in this audit:

https://xiejinsen.github.io/Russia-Thermal/

Astro is already configured with:
- site: `https://xiejinsen.github.io`
- base: `/Russia-Thermal`

## Deployment workflow

`.github/workflows/deploy-web.yml`

Pipeline:

`canonical repo -> repository health -> normalized data generation -> Astro static build -> Pages artifact -> GitHub Pages`

## One-time repository setting

If Pages is not yet enabled:

1. Open repository **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Re-run **Deploy Web Report** or push a new web-related commit to `main`.

## Important

The repository currently reports **public** visibility via its GitHub repository metadata (verified 2026-10-08). This replaces the stale initial private-repository setup note.
The latest verified Pages deployment workflow reported `success` on 2026-10-08. A successful deployment is distinct from an independent external-browser content/reachability test; both should be checked before claiming current production page content is synchronized.

## Review loop

Once deployed:
1. review Overview on desktop and mobile;
2. review P1/P2/P3 information density;
3. verify institution/scholar drill-down;
4. test Evidence filters;
5. inspect Decisions and Frontier Watch;
6. collect layout corrections before adding many external visual assets.
