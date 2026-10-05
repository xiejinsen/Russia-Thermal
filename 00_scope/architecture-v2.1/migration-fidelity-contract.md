# V2.1 Migration Fidelity Contract

Updated: 2026-10-05

## Goal

Migration changes structure, not research meaning.

The current audited V1 repository is the semantic baseline.

Baseline audit:
[Phase-1 Evidence-Chain Audit — 2026-10-05](../phase1_evidence_chain_audit_2026_10_05.md)

## Migration mode

Preferred:
- isolated non-authoritative target repository or dev branch/workspace.

Forbidden:
- destructive in-place rewrite of current V1 before fidelity proof.

## Semantic fidelity rules

Migration FAILS if it strengthens meaning.

Forbidden strengthening examples:
- "not publicly evidenced" -> "does not exist";
- "no matched public comparator recovered" -> "China lacks this";
- paper result -> product capability;
- patent publication -> deployed product;
- collaboration record -> product adoption;
- capability signal -> country superiority;
- research asset -> phone-ready solution;
- hypothesis -> demonstrated fact.

Migration FAILS if it weakens meaning.

Forbidden weakening:
- dropping phone-transfer caveats;
- dropping negative evidence;
- dropping China/global comparator pressure;
- dropping source uncertainty;
- dropping partner-data dependence;
- dropping patent claim boundary;
- dropping current role/affiliation uncertainty.

## Identity preservation

### Source
Preserve stable source identity and original URL/DOI/patent publication.

Do not create duplicate Sources merely because V1 contains:
- source registry entry;
- bibliography entry;
- brief;
- 10Q.

Those migrate into one Source object + optional deep.md.

### Claim
Material truth-condition change requires new Claim identity.

### Actor
Preserve institution / lab / person separation.

Do not flatten:
Pavlenko / Kutateladze / Lab 1.3
into one entity.

### Capability
Do not convert historical reputation into current capability without Claim support.

### Direction
Preserve current Keep/Narrow/Kill state.

## Required migration mapping

Each migrated slice emits an immutable MIGRATION_RECEIPT containing:
- V1 baseline commit;
- V1 source paths;
- V2 object IDs;
- transformation class;
- semantic-fidelity result;
- omitted/deferred material;
- discrepancy list;
- reviewer decision.

## Transformation classes

- COPY_FACT
- MERGE_DUPLICATE_REPRESENTATIONS
- SPLIT_MIXED_DOCUMENT
- DERIVE_VIEW
- ARCHIVE_HISTORY
- CORRECT_KNOWN_ERROR

`CORRECT_KNOWN_ERROR` is allowed only when the error was already established before migration or is separately recorded as a correction event.

Migration is not a hidden research round.

## Pilot slice

Recommended Pilot:
**Pavlenko / irreversible-dryout direction**

Why:
- primary paper;
- official lab/team evidence;
- Huawei collaboration context;
- China comparators;
- capability assessment;
- strategic Direction;
- deferred phone validation;
- existing Kill/Narrow history.

The Pilot must demonstrate the full chain:

```text
SOURCE
 -> CLAIM
 -> ACTOR/CAPABILITY
 -> DIRECTION
 -> EXPERIMENT
 -> DECISION_EVENT
 -> GENERATED MANAGEMENT VIEW
```

## Cutover principle

Cut over only by dependency-closed vertical slice.

Do not declare V2 authoritative while critical objects in that slice still depend on V1-only current truth.

## Post-baseline deltas

If V1 changes after migration baseline:
- record delta;
- migrate/replay it explicitly;
- do not silently assume V2 includes it.

## Final fidelity test

A reviewer comparing V1 baseline and V2 should reach the same substantive conclusions about:
- retained opportunities;
- killed broad theses;
- confidence;
- phone-transfer gaps;
- partner readiness boundaries;
- next validation needs.

If conclusions differ because of structure alone:
**migration FAIL.**
