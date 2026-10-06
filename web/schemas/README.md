# Schemas

status: IMPLEMENTED_W1

This directory defines the normalized web-data contracts produced by the canonical exporter.

## Current schemas

- `actor.schema.json`
- `capability.schema.json`
- `claim.schema.json`
- `decision.schema.json`
- `direction.schema.json`
- `envelope.schema.json`
- `evidence.schema.json`
- `priority.schema.json`

## Rules

- schemas describe generated web data, not canonical Markdown syntax;
- schema validation failure blocks the generated-data pipeline;
- breaking contract changes require coordinated exporter and consumer migration;
- frontend components do not redefine these domain contracts locally.
