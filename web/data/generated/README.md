# Generated Web Data

This directory is the local/build target for normalized web datasets.

Do not hand-edit generated JSON.

Commands:

```bash
# Validate canonical -> normalized transformation without writing files
python web/adapters/export_web.py --validate-only

# Generate datasets locally/build-time
python web/adapters/export_web.py
```

The exporter reuses the canonical parser / validator from `tools/v2repo.py`.

`questionCloseouts.json` is generated from the final WP3 Q01–Q10 acceptance matrix and the historical question ledger. The build checks ten unique questions and the 3 accepted / 7 limitation-accepted disposition split. The legacy workstream state remains separate; no final research conclusion is hand-maintained in Astro code.

`npm run check:research` additionally checks site navigation and the explicit external-outreach authorization boundary.

Generated datasets:
- actors.json
- evidence.json
- claims.json
- capabilities.json
- directions.json
- decisions.json
- priorities.json
- deepReads.json
- representativeWorks.json
- syntheses.json
- questionCloseouts.json — WP3 Q01–Q10 final answers + ledger provenance / limitations
- manifest.json

## Repository policy

Generated JSON is **not required to be committed**.

CI regenerates and validates it from canonical objects. The future Astro build should do the same before rendering.

This prevents stale generated JSON from becoming another manually synchronized artifact.

The generated JSON is a presentation/build artifact, not canonical research authority.
