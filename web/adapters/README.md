# Adapters

status: IMPLEMENTED_W1

This directory owns deterministic canonical-to-web transformation.

## Current implementation

- `export_web.py` parses canonical V2.1 objects.
- Output is normalized for presentation use.
- Validation is handled against `web/schemas/`.
- Generated data is derived and must not become a second source of truth.

## Rules

- parse / normalize / resolve only;
- no CSS or UI concerns;
- no page-specific narrative;
- no new strategic inference;
- preserve stable IDs and relationships;
- deterministic output for the same canonical state.

Frontend code must consume normalized data through view-model boundaries and must never bypass this layer to parse canonical Markdown.
