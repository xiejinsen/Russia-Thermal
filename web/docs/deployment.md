# Web Preview / Deployment

status: PREPARED
date: 2026-10-06

## Intended URL

When GitHub Pages is enabled for this repository using **GitHub Actions** as the source:

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

The repository is currently private.
Page visibility and whether GitHub permits Pages for the repository depend on the GitHub plan / organization policy.
Do not assume the site is reachable until the deployment workflow reports a successful `github-pages` deployment.

## Review loop

Once deployed:
1. review Overview on desktop and mobile;
2. review P1/P2/P3 information density;
3. verify institution/scholar drill-down;
4. test Evidence filters;
5. inspect Decisions and Frontier Watch;
6. collect layout corrections before adding many external visual assets.
