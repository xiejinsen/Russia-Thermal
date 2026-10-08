# Institution Atlas Profile Contract v1.0

status: FROZEN
date: 2026-10-08
scope: Russia Capability Atlas institution-level leadership profile

## Purpose

Keep Actor identity separate from institution-level Atlas interpretation.

Storage:
`03-actors/<actor-kind>/<ACT-ID>/atlas-profile.md`

The Actor `README.md` remains the canonical identity record.
The Atlas Profile is a companion interpretation module for leadership views.

## Required fields

- `profile_state`
- `actor_id`
- `assessed_at`
- `leadership_summary`
- `collaboration_summary`
- `influence_summary`
- `output_interpretation`

Optional evidence-reference lists:
- `context_sources`
- `collaboration_sources`
- `influence_sources`

Open limitations:
- `public_gaps`

## Output-count rule

Do **not** manually store publication/patent counts in Atlas Profile files.

Leadership counts must be derived from the canonical evidence graph:
Actor/Lab -> Capability -> Claim -> Source.

Default label:
**Recovered relevant corpus**

This number means:
"relevant Papers/Patents currently recovered into this project's canonical evidence graph."

It does **not** mean:
- all papers published by the institution;
- complete Scopus/Web of Science bibliometrics;
- national share of research;
- total institutional patent portfolio.

If a later bibliometric campaign produces a database-backed external total, keep it as a separate explicitly scoped metric.

## Child-team aggregation

A parent organization leadership profile must aggregate Capability / People / Evidence from its child Labs.

Do not copy Lab Capability objects onto the parent Actor.

## Platform transfer

Platform transfer remains Capability-owned.

Institution leadership views may summarize the strongest transfer levels across its Capabilities, but must not store a second manually maintained transfer matrix.

## Collaboration rule

Differentiate:
- PUBLIC COLLABORATION: explicit joint project/agreement/partner evidence;
- FUNDING: grant/funder relationship only;
- PRODUCT USE: use of a commercial component, not collaboration;
- UNKNOWN: no public evidence currently recovered.

Do not convert product usage into a company collaboration.

## Influence rule

Institution ranking, RAS status, world-class-center status, conference leadership and scholar editorial roles are context only.

They do not prove:
- technical superiority;
- partner readiness;
- product-transfer value.

## Web rule

Institution page should show:
1. leadership summary;
2. derived recovered-output snapshot;
3. child-team aggregated capabilities/people;
4. platform-transfer badges from Capabilities;
5. collaboration context;
6. influence context;
7. public evidence gaps.

The page should preserve a clear distinction between:
**what the institution can do** and **why it may matter as a partner**.
