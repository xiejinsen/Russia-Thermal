# Repository QA module

> Modular QA section. Navigation: [Repository QA Index](../README.md).

## Industry source-card architecture QA — 2026-10-05

### Goal

Prevent vendor / company / product / collaboration evidence from becoming a new monolithic evidence file or being copied into many workstream documents.

### Architecture

- canonical index: `evidence/industry/README.md`;
- organization README: thin index only;
- P0/P1 evidence: one original source → one stable Industry Source Card;
- P2 evidence: registry-only by default;
- papers and patents are never duplicated into industry cards;
- workstream files retain decision interpretation and reference Industry IDs/cards.

### Pilot implementation

Organizations:
- Huawei;
- Newfrost.

P0 cards:
- I-HUAWEI-001;
- I-HUAWEI-002;
- I-NEWFROST-001;
- I-NEWFROST-002.

### Current-authority integration

Canonical Industry IDs are now reused in:
- institution partner-readiness matrix;
- Pavlenko partner card;
- MPEI wettability / surface-IP card;
- Pavlenko Stage-0 packet;
- MPEI Stage-0 packet;
- Round-3 source-register module.

### Anti-duplication result

Detailed Huawei/Newfrost source facts now have one canonical detailed home.

Historical closed-round narrative may retain source facts for provenance, but current authority files should not create a second source-level record.

### Research-progress effect

**No research-progress increase.**

This is repository/evidence governance supporting Round 4.