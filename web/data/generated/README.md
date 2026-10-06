# Generated Web Data

This directory is the build target for normalized web datasets.

Do not hand-edit generated JSON.

Preferred workflow:

```bash
python web/adapters/export_web.py
python web/adapters/export_web.py --check
```

The exporter reuses the canonical parser / validator from `tools/v2repo.py`.

Generated datasets:
- actors.json
- evidence.json
- claims.json
- capabilities.json
- directions.json
- decisions.json
- manifest.json

The generated JSON is a presentation/build artifact, not canonical research authority.
