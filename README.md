# Russia-Thermal

Evidence-backed research on Russian thermal-management capabilities relevant to next-generation **smartphones**, with tablets as a secondary transfer reference.

## Web research intelligence

**Live site:** [Open Russia-Thermal Research Intelligence ↗](https://xiejinsen.github.io/Russia-Thermal/)

> GitHub README links open in the current tab by default. Use **Ctrl/Cmd+Click** or the **middle mouse button** to open the web UI in a new tab.

Use the web UI for leadership review, research navigation, and evidence drill-down:

- [Overview ↗](https://xiejinsen.github.io/Russia-Thermal/) — current portfolio thesis, priorities, comparator pressure and management actions
- [Research Maps ↗](https://xiejinsen.github.io/Russia-Thermal/research-map/) — geographic discovery for Russia / China research capability
- [Partner Portfolio ↗](https://xiejinsen.github.io/Russia-Thermal/partners/) — P1/P2/P3 collaboration packages and investment lanes
- [Russia vs China ↗](https://xiejinsen.github.io/Russia-Thermal/landscape/) — comparator baseline and residual Russian differentiation
- [Directions ↗](https://xiejinsen.github.io/Russia-Thermal/directions/) — strategic directions and validation gates
- [Institutions ↗](https://xiejinsen.github.io/Russia-Thermal/institutions/) / [Scholars ↗](https://xiejinsen.github.io/Russia-Thermal/scholars/) — organization and key-person drill-down
- [Papers ↗](https://xiejinsen.github.io/Russia-Thermal/papers/) / [Claims ↗](https://xiejinsen.github.io/Russia-Thermal/claims/) / [Evidence ↗](https://xiejinsen.github.io/Russia-Thermal/evidence/) — research-object and source traceability
- [Decisions ↗](https://xiejinsen.github.io/Russia-Thermal/decisions/) — Keep / Narrow / Kill / Watch / Hold decision history

The website is a **derived presentation layer**. Canonical research truth remains in the repository objects and governance structure below.

## Start here

For a new chat or a fresh reading session:

1. [00-project/CONTINUE-HERE.md](00-project/CONTINUE-HERE.md)
2. [00-project/STATUS.md](00-project/STATUS.md)
3. [00-project/restart-snapshot.md](00-project/restart-snapshot.md)
4. [views/russia-vs-china/phase1-management.md](views/russia-vs-china/phase1-management.md)
5. [07-decisions/kill-ledger.md](07-decisions/kill-ledger.md)

## Current architecture

The repository uses the V2.1 canonical model:

SOURCE -> CLAIM -> ACTOR / CAPABILITY -> DIRECTION -> VALIDATION -> DECISION_EVENT

Current canonical directories:

- `00-project/` — charter, methodology, governance, status, restart protocol
- `01-evidence/` — primary papers, patents, official/vendor sources
- `02-claims/` — supportable/refutable propositions
- `03-actors/` — institutions, labs, people and companies
- `04-capabilities/` — demonstrated external technical capabilities
- `05-directions/` — current strategic directions
- `06-validation/` — data/model/PoC validation objects
- `07-decisions/` — immutable Keep/Narrow/Kill/Watch/Hold transitions
- `analysis/` — research analyses and audits
- `history/` — research transactions and migration provenance
- `reports/` — derived leadership-facing summaries; never canonical authority
- `tools/` — deterministic repository generator/health checker
- `views/` — generated human-readable management views
- `web/` — derived modular presentation system

## Human presentation model

Institution -> Lab/Team -> Key People -> Capability -> Direction

Institutions and people are both first-class research entities.
Organization hierarchy comes first so capability ownership stays clear.

## Research scope

Primary platform:
- smartphones

Secondary:
- tablets when the mechanism transfers.

Other domains are used only as mechanism, method, reliability, or capability evidence.

The project explicitly distinguishes:
- source fact;
- analyst synthesis;
- hypothesis;
- negative/public-evidence gap.

“Not publicly evidenced” must never be rewritten as “does not exist”.

## Current strategic state

Do not duplicate detailed current conclusions in this README.

Authoritative current state lives in:
- [STATUS](00-project/STATUS.md)
- [Direction Portfolio](05-directions/portfolio.md)
- [Phase-1 Management View](views/russia-vs-china/phase1-management.md)
- [Kill / Downgrade Ledger](07-decisions/kill-ledger.md)
- [Leadership Dossiers](reports/leadership-dossiers/README.md)
- [Final Management Synthesis](reports/final-management-synthesis.md)
- [Web Report System](web/README.md)

## Repository health

Canonical references and generated views are checked by:

`python tools/v2repo.py --check`

GitHub Actions runs the health check on the authoritative `main` branch.

## Branch policy

`main` is the single authoritative working branch.
Historical migration branches are not part of the reading or research workflow.

## Legacy V1

V1 content is intentionally removed from the current working tree after V2.1 cutover.

It is still fully recoverable from Git history, including the frozen V1 baseline:

`c4fa8d070771531f2f912897e055621a5f5d2df4`

Do not restore legacy V1 directories into current `main` unless performing an explicit historical/fidelity investigation.
