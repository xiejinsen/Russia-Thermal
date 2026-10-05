# External Dependency Ledger

Last updated: 2026-10-05

Purpose:
track the evidence that can no longer be closed by broad public research.

Each partner/module is independently editable so a returned dataset or experiment result updates only the relevant dependency record.

## Active partner dependencies

- [Kutateladze Lab 1.3 / Pavlenko](pavlenko.md)
- [MPEI / Ivanov–Kuzma-Kichta](mpei.md)
- [TPU / Feoktistov–Orlova](tpu.md)
- [Kutateladze Lab 6.6 reserve](lab66.md)

## Non-core / reserve dependencies

- [Non-core watch / reserve ledger](noncore.md)

## Dependency classes

- **PUBLIC-CLOSED** — public evidence is sufficient for the current decision; do not keep searching generically.
- **PARTNER** — only partner-shareable as-built/process/ownership data can efficiently close it.
- **EXPERIMENT** — physical measurement is required.
- **LEGAL-FTO** — technical research cannot settle rights/claim scope; legal review is triggered only by a concrete winner.
- **INTERNAL-DECISION** — our own program choice, not an external evidence gap.

## Current execution constraint

At present:
- PARTNER dependencies are **deferred**, because direct university outreach is not available;
- EXPERIMENT dependencies are **deferred**, because physical Stage-0 testing is not available.

They remain valid external dependencies and must not be converted to PUBLIC-CLOSED.

Current constraint:
[../../00_scope/current_execution_constraints_2026_10_05.md](../../00_scope/current_execution_constraints_2026_10_05.md)

## Update rule

When a dependency closes:
1. update only the partner module;
2. update the Stage-0 scorecard only if a decision cell changes;
3. update PROGRESS only if project phase/completion changes;
4. do not reopen old research rounds.