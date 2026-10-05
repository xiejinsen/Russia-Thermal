# 2026-10-05 — Modular industry evidence layer

### Why

Vendor / industry facts were beginning to appear repeatedly across source modules, partner cards, comparison files and Stage-0 packets.

To prevent another class of large aggregate files and inconsistent duplicated facts, a canonical per-source industry evidence layer was added.

### Architecture

- `evidence/industry/README.md` — global thin index;
- `<organization>/README.md` — thin organization index;
- `<organization>/sources/` — one original P0/P1 source per card;
- P2 background evidence remains registry-only by default.

### Pilot

First P0 cards:
- Huawei × Kutateladze collaboration records: I-HUAWEI-001 / 002;
- Newfrost × MPEI translation/fabrication records: I-NEWFROST-001 / 002.

### Anti-duplication rule

Paper and patent evidence remains in the existing paper/patent architecture and is only linked from organization indexes.

Current partner authorities now reuse Industry IDs instead of copying source facts.

### Research-state effect

None. Research remains ~85% complete.