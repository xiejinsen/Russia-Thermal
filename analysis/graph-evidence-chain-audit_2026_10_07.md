# Graph / Database / Evidence-Chain Closure Audit — 2026-10-07

record_state: CURRENT
authority: V2_1_RESEARCH_CONTROL
audit_status: PASS
scope: CANONICAL_DATABASE_GRAPH_NORMALIZED_WEB_DECISION_EVIDENCE
audited_commit_family: post patent-closure / graph-audit integration
broad_discovery: CLOSED

## Executive judgment

The current V2.1 Russia-Thermal repository is structurally closed enough to serve as the authoritative public-evidence SSOT for the current Phase-1 portfolio.

This judgment is stronger than the original repository-health check. The audit now verifies four layers:

1. canonical object integrity and generated-view freshness;
2. semantic visibility closure;
3. end-to-end graph reachability;
4. decision-level evidence sufficiency and Russia-vs-China/global comparator pressure.

Current hard-failure count: 0.

Non-blocking warnings: 2.

## Canonical database inventory

| Object class | Count |
| --- | ---: |
| Sources | 132 |
| Claims | 120 |
| Actors | 122 |
| Capabilities | 49 |
| Directions | 8 |
| Validation experiments | 10 |
| Decision events | 28 |
| Priorities | 3 |
| Syntheses | 1 |
| Deep Reads | 52 |

Deep Reads:
- papers: 36;
- patents: 16.

Canonical research corpus:
- papers: 50;
- patents: 17.

The remaining non-Deep-Read items have explicit Tier-B / Reference-Only disposition from the paper and patent closure audits.

## Database integrity closure

Validated automatically by `tools/v2repo.py` and `tools/graph_audit.py`:

- duplicate object IDs: 0;
- duplicate source keys: 0;
- unresolved typed references: 0;
- stale generated views: 0;
- semantic orphan Sources: 0;
- semantic orphan Claims: 0;
- Capabilities without portfolio disposition: 0;
- Direction / Priority / Synthesis graph isolation: 0;
- actor graph isolation after remediation: 0;
- Deep Reads without canonical Source: 0;
- Tier-A Deep Reads without Claim linkage: 0;
- unresolved visibility dispositions: 0.

## Graph-model remediation completed in this audit

### Collaborating actors are now first-class graph edges

The previous one-owner Capability model hid real cross-institution execution relationships.

Added canonical `collaborating_actors` edges and typed validation.

Normalized examples:
- CAP-MPEI-LONGTERM-CAPILLARY-AGING -> ACT-NEWFROST;
- CAP-MPEI-AM-THERMOSYPHON -> ACT-SKOLTECH;
- CAP-RU-AEROACOUSTIC-METHODS -> ACT-PNRPU.

This removes one actual actor orphan and prevents external collaborators from being misrepresented as belonging to the primary institution.

### NSU person gap is explicit, not fabricated

CAP-NSU-TWOPHASE-DIAGNOSTICS-BRIDGE retains:
- actor: ACT-NSU-EITP-LAB;
- key_people: empty;
- key_people_status: PUBLIC_PERSON_NOT_NORMALIZED_FROM_CURRENT_SOURCE.

The graph therefore exposes an evidence gap instead of inventing a responsible scholar.

### Aeroacoustic WATCH baseline is explicit

DIR-AEROACOUSTIC-METHOD-RESERVE now records the China narrow-space electronics-fan aeroacoustic comparator as its strongest baseline.

### Patent Deep Reads are now part of normalized web data

The web export previously normalized only paper Deep Reads.

It now:
- scans both paper and patent deep-read roots;
- accepts `paper_id` or `patent_id`;
- parses both Q1–Q10 and P1–P10, including compact legacy Patent headings;
- validates PAPER and PATENT Deep Reads;
- exports all 52 Deep Reads.

This closes the repository -> normalized data -> web path for patent evidence.

## Direction evidence-chain audit

The table counts the full reachable chain:

Direction -> direct Claims + Capability Claims -> supporting / contradicting Sources.

| Direction | Lane | Capabilities | Claims | Reachable sources | Russia | China/global comparator | Deep Reads |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| DIR-FAILURE-AWARE-UTVC | STRATEGIC_CANDIDATE | 1 | 21 | 22 | 5 | 17 | 18 |
| DIR-HEALTH-AWARE-UTVC | RESERVE | 1 | 18 | 19 | 5 | 14 | 14 |
| DIR-SURFACE-PROCESS-CHALLENGER | HOLD | 1 | 11 | 15 | 6 | 9 | 12 |
| DIR-EXTREME-FILM-RESERVE | RESERVE | 1 | 7 | 9 | 5 | 4 | 8 |
| DIR-FOUNDATIONAL-MODELING-ENABLER | RESERVE | 3 | 10 | 7 | 4 | 3 | 4 |
| DIR-LHP-KNOWLEDGE-RESERVE | WATCH | 2 | 5 | 7 | 3 | 4 | 1 |
| DIR-MPEI-ORDERED-WICK-HOLD | HOLD | 1 | 2 | 6 | 1 | 5 | 5 |
| DIR-AEROACOUSTIC-METHOD-RESERVE | WATCH | 1 | 3 | 2 | 1 | 1 | 0 |

## Evidence sufficiency judgment

### Decision-grade / active portfolio

DIR-FAILURE-AWARE-UTVC:
- strongly closed for public-evidence decision purposes;
- 22 reachable sources;
- 18 Deep Reads;
- heavy China/global pressure rather than Russia-only confirmation;
- surviving residual remains narrow mechanism-resolved crisis ground truth.

DIR-HEALTH-AWARE-UTVC:
- sufficiently pressure-tested for RESERVE disposition;
- 19 sources / 14 Deep Reads;
- China reliability / aging / production-QA baseline is stronger than the original project framing;
- MPEI residual is correctly bounded to rare long-calendar mechanism ground truth.

DIR-EXTREME-FILM-RESERVE:
- sufficient for RESERVE;
- 9 sources / 8 Deep Reads;
- Russia mechanism/IP continuity is real, while system parasitic / phone package questions remain open.

DIR-FOUNDATIONAL-MODELING-ENABLER:
- sufficient for RESERVE, not sufficient for promotion;
- 7 sources / 4 Deep Reads;
- balanced 4 Russia vs 3 comparator sources;
- exact/stability residual is bounded and current global mobile-model baselines are represented.

### WATCH / HOLD lanes

The lower evidence depth in WATCH / HOLD lanes is intentional and adequate for their current disposition:
- Aeroacoustic WATCH has one Russia + one China source and no Tier-A Deep Read because the broad advantage thesis is already refuted and no active investment is proposed.
- LHP WATCH has 7 sources and explicit China/global failure-boundary pressure.
- Ordered-wick HOLD has 6 sources, dominated by 5 China/OEM comparator sources and 5 Deep Reads.
- TPU HOLD has a particularly strong closure chain: 15 sources / 12 Deep Reads.

## Evidence-chain guardrails now enforced by CI

`tools/graph_audit.py` is now part of the V2.1 Repository Health workflow.

Hard failures include:
- unresolved / duplicate canonical objects;
- semantic orphan Sources / Claims;
- graph-isolated decision-tier nodes;
- Direction without Capability or Claim;
- Direction without Russia-side evidence;
- Direction without China/global comparator evidence;
- active/reserve Direction with insufficient source reach;
- active/reserve Direction without reachable Deep Read;
- Tier-A Deep Read without canonical Source or Claim linkage;
- malformed Deep Read evidence boundary;
- invalid actor/person relations;
- missing Priority / Synthesis graph relations;
- unresolved collaborating actors.

This converts the audit from a one-time review into a repository invariant.

## Non-blocking warnings

### 1. NSU current named-person normalization

CAP-NSU-TWOPHASE-DIAGNOSTICS-BRIDGE has no safely normalized current key person from the current official source.

Disposition:
keep explicit as a person-level evidence gap. Do not invent a scholar.

Impact:
none on the Foundational Modeling RESERVE decision because NSU is represented as an execution / diagnostics bridge, not mechanism/IP owner.

### 2. Foundational Modeling source count

DIR-FOUNDATIONAL-MODELING-ENABLER reaches 7 sources, below the audit's preferred 8-source review warning threshold for an active/reserve lane.

However:
- it has 4 Deep Reads;
- 4 Russia sources;
- 3 China/global comparators;
- its conclusion is only RESERVE / bounded enabler;
- no Primary or Stage-0 investment claim relies on it.

Disposition:
evidence is sufficient for RESERVE. Promotion above RESERVE requires additional matched phone-relevant evidence.

## What this PASS does and does not mean

PASS means:
- the database is internally consistent;
- the graph is traceable and closed at current decision level;
- current strategic conclusions have reachable evidence;
- strategic/reserve conclusions are comparator-pressure-tested rather than Russia-only;
- legacy decision-critical paper and patent evidence has been reconciled;
- normalized web data preserves the same evidence graph.

PASS does not mean:
- product validation has been performed;
- partner willingness is proven;
- public evidence replaces phone-scale experiments;
- patent analysis is a legal FTO opinion;
- no future evidence can change the portfolio.

## CI / delivery validation

At closure:
- V2.1 Repository Health: PASS;
- Graph Audit: PASS;
- Web Data Check: PASS;
- normalized records include 52 Deep Reads;
- Web UI / Astro type check: PASS;
- static build: PASS;
- internal-link audit: PASS;
- GitHub Pages build: PASS;
- GitHub Pages deploy: PASS.

## Closure verdict

Database integrity: PASS.

Graph integrity: PASS.

Semantic orphan closure: PASS.

Decision-level evidence traceability: PASS.

Russia-vs-China/global comparator closure: PASS for current portfolio decisions.

Decision-critical paper/patent Deep Read closure: PASS.

Current project mode may return to bounded web detail-page design-system consolidation without reopening broad discovery.
