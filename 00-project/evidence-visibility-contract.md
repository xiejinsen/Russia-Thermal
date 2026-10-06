# Evidence Visibility Contract

record_state: CURRENT
scope: PHASE1_WEB_RESULTS_CONVERSION
effective_date: 2026-10-06

## Purpose

Prevent researched assets from disappearing merely because they are not promoted into a strategic Direction.

The web product must support two distinct reading paths:

1. **Decision path**  
   Portfolio -> Direction -> Capability -> Claim -> Source

2. **Research-coverage path**  
   Source / Institution / Scholar / Capability -> disposition -> why promoted / why not promoted

A research object does not need to become a Direction in order to remain visible.

## Source closure rule

Every CURRENT Source must satisfy at least one of:

- referenced by a Claim; or
- carry / inherit an explicit non-strategic usage role.

Allowed non-strategic usage roles:

- CONTEXT_PROFILE — identity / role / authority confirmation;
- RANKING_CONTEXT — institutional ranking / prestige context only;
- FRONTIER_DISCOVERY — venue / journal / conference discovery surface;
- BACKGROUND_CONTEXT — useful background that does not support a strategic Claim;
- UNRESOLVED — temporary exception requiring explicit follow-up.

A Source with no Claim and no explicit usage role is a semantic orphan.

## Claim closure rule

Every CURRENT Claim must satisfy at least one of:

- consumed by a Capability;
- referenced by a Direction;
- referenced by a Decision Event;
- referenced by a current Synthesis;
- explicitly classified into one of the non-Direction decision roles below.

Allowed non-Direction decision roles:

- PARTNER_READINESS — collaboration / execution / engagement evidence;
- PORTFOLIO_RATIONALE — cross-partner decision logic;
- COMPARATOR_UMBRELLA — comparator statement spanning several technical objects;
- FRONTIER_DISCOVERY — discovery-system or authority-map statement;
- EVIDENCE_GAP — explicit statement of what remains unproven;
- BACKGROUND — bounded contextual claim;
- UNRESOLVED — temporary exception requiring explicit follow-up.

A Claim that only exists in 02-claims/ and has no downstream consumer or decision role is a semantic orphan.

## Capability closure rule

Every CURRENT Capability must have a portfolio disposition, independent of whether it is linked to a Direction.

Allowed dispositions:

- DIRECTION_LINKED — explicitly consumed by one or more strategic / reserve / watch / hold Directions;
- COMPARATOR_ONLY — capability exists to strengthen the China/global comparator baseline;
- SUPPORT_ONLY — real capability worth retaining, but not a standalone strategic Direction;
- BACKGROUND_KILLED_THESIS — retained to preserve evidence for a killed / background-only thesis;
- UNRESOLVED — temporary exception requiring explicit follow-up.

A Capability without a Direction and without a portfolio disposition is weakly surfaced even if an Institution page can technically render it.

## Presentation requirements

The web layer must not use "has Direction" as the only test for visibility.

It must expose:

- promoted strategic assets;
- supporting / pressure-tested Russian nodes;
- China/global comparator capabilities;
- investigated-but-not-promoted objects;
- profile/ranking/context Sources;
- frontier discovery Sources;
- explicit evidence-gap Claims.

P1/P2/P3 must remain visually dominant. Supporting and comparator material must be discoverable without being visually promoted to the same level.

## Health metrics

The following metrics should be reportable:

- semantic_orphan_sources;
- claim_only_without_role;
- capabilities_without_disposition;
- direction_linked_capabilities;
- comparator_only_capabilities;
- support_only_capabilities;
- background_killed_capabilities;
- evidence_gap_claims;
- web_discoverability_exceptions.

Target after remediation:

- semantic_orphan_sources = 0
- claim_only_without_role = 0
- capabilities_without_disposition = 0
- web_discoverability_exceptions = 0

## Guardrail

Do not create a technical Direction merely to make an object visible.

Visibility closure and strategic promotion are separate decisions.
