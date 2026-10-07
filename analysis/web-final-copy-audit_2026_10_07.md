# Final Web Copy Audit — 2026-10-07

status: CLOSED
scope: PRODUCTION_WEB_COPY_ONLY

## Purpose

Perform a final product-copy pass after research, detail-page, leadership-overview and evidence-graph closure.

This pass changes user-facing language only. It does not change:
- canonical research facts;
- Claims;
- Directions;
- investment lanes;
- evidence relationships;
- visual layout.

## Main corrections

### Removed implementation / backend terminology

User-facing copy no longer exposes terms such as:
- `priority_class`;
- `dense rows`;
- `canonical actor`;
- `normalized relation`;
- `collaborating_actors`;
- `Claim-level deduplication`;
- `graph-linked set`.

Internal code identifiers remain unchanged where they are not rendered to users.

### Improved management language

Partner Portfolio now explains:
- P1/P2/P3 are historical partner ranks;
- they are not equal outreach priorities;
- partner status and technical Direction lane jointly determine action.

The technical portfolio section is framed around investment lanes rather than implementation details.

### Improved explorer language

Collection pages now use reader-facing labels:
- Technical capability explorer;
- Decision claim explorer;
- Paper evidence explorer;
- Institution & lab explorer;
- Scholar & key-person explorer.

Internal layout terms are not shown.

### Improved detail-page descriptions

Capability, Institution and Scholar pages now describe:
- ownership;
- collaboration;
- people;
- evidence;
- boundaries

in user-facing research language rather than schema language.

### Improved empty states

Mechanical strings such as:
- "not normalized";
- "no normalized relation";
- "canonical capability"

were replaced with natural statements about what is or is not currently recorded.

### Standardized actions

Preferred action vocabulary:
- Open detail;
- View evidence;
- View related claims;
- Original source.

### Research maps

Old P1/P2/P3 "priority" language was replaced with current partner-disposition language.

## Dynamic summary cleanup

View-model summaries were also revised so user-facing dynamic text no longer exposes:
- canonical;
- normalized;
- internal graph/model terminology.

## Validation

Final code path:
- V2.1 Repository Health: PASS;
- Graph Audit: PASS;
- Astro type check: PASS;
- static build: PASS;
- internal-link audit: PASS.

## Residual policy

No further site-wide copy rewrite is required for Phase 1.

Future web changes should be:
- specific user-feedback fixes;
- factual updates caused by a canonical research change;
- accessibility/usability corrections;
- a future Phase-2 product requirement.

Do not reopen broad copy editing merely for stylistic churn.
