# Russia-Thermal

Evidence-backed research on Russian thermal-management capabilities relevant to next-generation **smartphones**, with tablets as a secondary transfer reference.

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

## Repository health

Canonical references and generated views are checked by:

`python tools/v2repo.py --check`

GitHub Actions runs the same health check on `main` and `dev`.

## Legacy V1

V1 content is intentionally removed from the current working tree after V2.1 cutover.

It is still fully recoverable from Git history, including the frozen V1 baseline:

`c4fa8d070771531f2f912897e055621a5f5d2df4`

Do not restore legacy V1 directories into current `main` unless performing an explicit historical/fidelity investigation.
