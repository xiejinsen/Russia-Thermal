# Evidence Visibility Closure Audit — 2026-10-06

status: PASSED_WAVE0_VISIBILITY_CLOSURE
scope: SOURCE -> CLAIM -> CAPABILITY / DIRECTION / DECISION / DISPOSITION closure after Russia/China coverage expansion
baseline_branch: main
baseline_head_at_start: 801e6cb180cdabbd4f8362863145688cb7020f67

## Executive result

The repository is structurally healthy, but strategic visibility and research-coverage visibility are not yet equivalent.

The key issue is **not missing research data**. The issue is that the current model over-relies on Direction linkage to provide semantic visibility.

This audit confirms the user's concern: researched assets can remain technically present in Evidence / Institution pages while still feeling "missing" because their non-Direction role is not explicit.

## Inventory

- Evidence Sources: **115**
- Claims: **115**
- Capabilities: **49**
- Direction-linked Capabilities: **11**
- Capabilities not linked to a Direction: **38**

Among the 38 non-Direction Capabilities:
- China comparator Capabilities: **18**
- Russia support/background Capabilities: **20**

## A. Source closure

### A1. Sources already consumed by Claims

The overwhelming majority of Sources are already referenced by at least one Claim.

### A2. Sources with no Claim consumer: 6

These are not bad or duplicate Sources. They are semantically valid context assets whose role is currently implicit.

#### Profile / authority context
- OFFICIAL-MPEI-KUZMA-2026
- OFFICIAL-RAS-PAVLENKO-001
- OFFICIAL-TPU-FEOKTISTOV-ROLE-001

Recommended usage role:
**CONTEXT_PROFILE**

#### Ranking context
- OFFICIAL-RANK-MPEI-2026
- OFFICIAL-RANK-RAEX-2026
- OFFICIAL-RANK-TPU-2026

Recommended usage role:
**RANKING_CONTEXT**

Interpretation:
Do **not** invent technical Claims merely to consume these Sources. Their correct closure is an explicit context disposition that the web can display as profile / ranking evidence.

## B. Explicit evidence-gap Claims

Four CURRENT Claims intentionally have empty supporting_sources because they state what remains unproven:

- CLM-MPEI-007
- CLM-PAV-007
- CLM-TPU-008
- CLM-WICK-002

Recommended decision role:
**EVIDENCE_GAP**

These are valid negative-space research objects, not provenance defects.

## C. Claims that currently stop at the Claim layer

After excluding search/index artifacts and checking actual downstream canonical consumers, **8 Claims** need explicit non-Direction decision roles.

### Comparator umbrella
- CLM-CN-SJTU-002

Recommended role:
**COMPARATOR_UMBRELLA**

Reason:
It summarizes how SJTU strengthens the China baseline across mechanism + chip architecture + microchannel engineering. It is broader than one Capability and does not need a new Direction.

### Partner readiness / portfolio rationale
- CLM-COLLAB-001
- CLM-COLLAB-002
- CLM-COLLAB-003
- CLM-COLLAB-004
- CLM-COLLAB-005
- CLM-PAV-006

Recommended roles:
- CLM-COLLAB-001..004 -> **PARTNER_READINESS**
- CLM-COLLAB-005 -> **PORTFOLIO_RATIONALE**
- CLM-PAV-006 -> **PARTNER_READINESS**

Reason:
These Claims explain why P1/P2/P3 differ in collaboration readiness and why Lab 6.6 stays reserve. Current Priority objects expose rationale text but do not explicitly consume these Claims, so the evidence chain is weaker on the web than in the research repository.

### Frontier discovery
- CLM-VENUE-001

Recommended role:
**FRONTIER_DISCOVERY**

Reason:
It supports the authority/discovery system (AVTFG, RNKT, Thermophysics and Aeromechanics, High Temperature), not a product Direction.

## D. Capability closure

### D1. Direction-linked Capabilities: 11

These are already explicitly consumed by the strategic portfolio:

- CAP-RU-AEROACOUSTIC-METHODS
- CAP-KUT-L66-SHEAR-FILM-INSTABILITY
- CAP-KUT-L13-DRYOUT-DIAGNOSTICS
- CAP-ICM-EXACT-STABILITY-MODELING
- CAP-LAVRENTYEV-MICROFILM-MODELING
- CAP-NSU-TWOPHASE-DIAGNOSTICS-BRIDGE
- CAP-MPEI-LONGTERM-CAPILLARY-AGING
- CAP-ITP-LHP-KNOWLEDGE
- CAP-NOVSU-ELECTROOSMOTIC-HEATPIPE
- CAP-MPEI-ORDERED-WICK-MODELING
- CAP-TPU-LASER-WETTABILITY-PROCESS

Recommended disposition:
**DIRECTION_LINKED**

### D2. China comparator-only Capabilities: 18

- CAP-CN-BIT-ULTRATHIN-VC-MICROCHANNEL
- CAP-CN-BUAA-CHIP-THERMAL
- CAP-CN-FUDAN-WAFER-MICROFLUIDIC-PACKAGING
- CAP-CN-HIT-MINI-THERMOELECTRIC
- CAP-CN-HUST-PHASECHANGE-LIQUID
- CAP-CN-NJU-ELECTROCALORIC
- CAP-CN-PKU-EMBEDDED-MICROFLUIDIC
- CAP-CN-SCUT-CAPILLARY-WICK
- CAP-CN-SEU-MICROCHANNEL-BOILING
- CAP-CN-SJTU-PHASECHANGE-INTEGRATION
- CAP-CN-SYSU-INTEGRATION-THERMAL
- CAP-CN-TJU-CHIP-PACKAGE-THERMAL
- CAP-CN-TONGJI-SPRAY-BOILING
- CAP-CN-TSINGHUA-CHIP-THERMAL
- CAP-CN-USTC-VC-MICROCHANNEL
- CAP-CN-WHU-THERMAL-DIAGNOSTICS
- CAP-CN-XJTU-MOBILE-TWOPHASE
- CAP-CN-ZJU-CHIP-MULTIPHASE

Recommended disposition:
**COMPARATOR_ONLY**

Interpretation:
These objects should be visible in the China comparator / research-coverage path without being misrepresented as Russian collaboration candidates.

### D3. Russia support-only Capabilities: 18

- CAP-BMSTU-DEFORM-CUT-WICK
- CAP-FRUMKIN-WETTABILITY-CHEMISTRY
- CAP-HSE-ELECTROTHERMAL-RELIABILITY
- CAP-ICM-KRASN-FLAT-HP-ELECTRONICS
- CAP-ITMO-ELECTRONICS-CAPILLARY-COOLING
- CAP-JIHT-MICROCHANNEL-BOILING-SUPPORT
- CAP-LAVOCHKIN-HEATPIPE-ENGINEERING
- CAP-MEPHI-BOILING-REGIME-DIAGNOSTICS
- CAP-MISIS-SOLIDSTATE-THERMAL-MATERIALS
- CAP-MPEI-AM-THERMOSYPHON
- CAP-MPEI-SIC-MICROCHANNEL-CURRENT
- CAP-MSU-NONEQUILIBRIUM-PHASECHANGE
- CAP-SPBPU-GRADIENT-HEATMETRY
- CAP-TAIS-LHP-ENGINEERING
- CAP-THERCON-ELECTRONICS-LHP-PRODUCTION
- CAP-TSU-ELECTRONICS-COOLING-MODELING
- CAP-URFU-LHP-PHASECHANGE
- CAP-UUST-MICROCHANNEL-THERMAL

Recommended disposition:
**SUPPORT_ONLY**

Interpretation:
These are exactly the objects most vulnerable to "disappearance". They are real researched assets but intentionally not promoted into a Direction.

### D4. Background / killed-thesis Capabilities: 2

- CAP-RU-THERMAL-MATERIALS-BACKGROUND
- CAP-SPBU-MOBILE-DVFS

Recommended disposition:
**BACKGROUND_KILLED_THESIS**

## E. What the current web already does

The current web export includes all Evidence records and all Claims, so these objects are not physically absent from the site data.

Institution pages also render owned Capabilities.

Therefore the problem is not binary presence/absence.

The failure mode is:
**low discoverability + missing semantic role + Direction-centric navigation**.

## F. Required canonical remediation

Before Web Wave A/B visual changes, add explicit semantic roles:

1. six non-Claim Sources -> usage_role;
2. four empty-source OPEN Claims -> decision_role = EVIDENCE_GAP;
3. eight Claim-only objects -> decision_role;
4. all 49 Capabilities -> portfolio_disposition.

The web adapter should export these fields.

## G. Required web remediation

The site must expose two paths:

### Decision path
Portfolio -> Direction -> Capability -> Claim -> Source

### Coverage path
Research Coverage -> Institution / Scholar / Capability / Source -> disposition -> why promoted / why not promoted

Minimum new surfaces:
- Supporting / Pressure-tested Nodes;
- Comparator-only capabilities;
- Investigated but not promoted;
- context/profile/ranking Sources;
- evidence-gap Claims;
- Capability detail pages.

## Exit criteria for Wave 0

Wave 0 is complete only when:

- semantic_orphan_sources = 0;
- claim_only_without_role = 0;
- capabilities_without_disposition = 0;
- web export carries the new role/disposition fields;
- repository health passes.

Closure update:
- canonical visibility registry created under `00-project/visibility-dispositions/`;
- six non-Claim Sources now inherit explicit usage roles;
- four source-less evidence-gap Claims and eight Claim-only objects now inherit explicit decision roles;
- all 49 Capabilities now inherit explicit portfolio dispositions;
- web export now carries `usageRole`, `decisionRole`, and `portfolioDisposition`;
- Web Data Check enforces semantic-orphan, downstream-Claim, and capability-disposition closure;
- commit `84f190a7`: Web Data Check PASS, Web UI Check PASS, V2.1 Repository Health PASS.

Current status:
**WAVE 0 PASSED. NEXT: implement the disposition-aware web research-coverage surfaces without changing the frozen research thesis.**
