# Q09 source trace and archive repair — sampled against current default branch

date: 2026-10-09
status: KEY_CARD_LINKS_AND_CORE_CANONICAL_IDS_CHECKED / CURRENT_HEAD_CI_UNVERIFIED / FULL_TREE_UNSCANNED
commit_baseline: e611765ad1681cc53348370688299176dd026657
audit_scope: Q09 five active-method feasibility cards, recent archive navigation, high impact evidence/provenance gaps
no_new_priority_change: true

## Verified links and evidence chain

| Card | Source original evidence anchor | Existing canonical anchor verified / scope | Strongest limitation |
| --- | --- | --- | --- |
| [OPP-01](../../reports/collaboration-opportunities/OPP-01-KUTATELADZE-FAILURE-GROUND-TRUTH.md) Kutateladze | [Surtaev et al. 2026 boiling crisis/dryspots](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855) | [PAPER-RU-DRY-001](../../01-evidence/papers/PAPER-RU-DRY-001/README.md), [its deep read](../../01-evidence/papers/PAPER-RU-DRY-001/deep-read.md), [CLM-PAV-002](../../02-claims/CLM-PAV-002.md) | Original optical field measurements ≠ accessible/synchronized labeled dataset or phone sensor labels |
| [OPP-02](../../reports/collaboration-opportunities/OPP-02-MPEI-LONG-DURATION-RELIABILITY.md) MPEI | [Ivanov 2026 long-term thermosyphon](https://doi.org/10.1016/j.pes.2026.100314) | [PAPER-RU-AGE-001](../../01-evidence/papers/PAPER-RU-AGE-001/README.md), [deep read](../../01-evidence/papers/PAPER-RU-AGE-001/deep-read.md), [CLM-MPEI-002](../../02-claims/CLM-MPEI-002.md) | Calendar observation ≠ capillary precursor chronology; large R410A thermosyphon ≠ phone copper-water VC |
| [OPP-04](../../reports/collaboration-opportunities/OPP-04-ITP-URAL-LHP-OPERABILITY-METHOD.md) ITP Ural | [2025 Chernysheva/Maydanik operating criteria](https://doi.org/10.1134/S0040601525700661) and [2025 copper-wick/ammonia experiment](https://tptmai.ru/eng/publications.php?ID=186014&mobile=Y) | [CAP-ITP-LHP-KNOWLEDGE](../../04-capabilities/CAP-ITP-LHP-KNOWLEDGE.md); [detailed source-stage audit](../academic-team-mapping/itp-ural-lhp-team-deep-read-2026-10-09.md) | Publisher DOI / apparatus identity staged in analysis, not necessarily canonical first-class newly audited sources; mm-class mismatch |
| [OPP-05](../../reports/collaboration-opportunities/OPP-05-TSU-PCM-TRANSIENT-METHOD.md) TSU | [2022 Bondareva/Sheremet PCM simulation](https://doi.org/10.1016/j.applthermaleng.2022.118695); [2024 foam PCM](https://doi.org/10.1016/j.energy.2024.131123); [2025 Gibanov et al. periodic CFD](https://doi.org/10.1016/j.icheatmasstransfer.2024.108552) | [CAP-TSU-ELECTRONICS-COOLING-MODELING](../../04-capabilities/CAP-TSU-ELECTRONICS-COOLING-MODELING.md) plus [publisher-verified team study](../academic-team-mapping/tsu-phone-relevance-decision-gate-2026-10-09.md) | Models ≠ experimental phone PCM or active cooling; phone pulse/reset and pump overhead not validated |
| [OPP-06](../../reports/collaboration-opportunities/OPP-06-ICM-ELECTRONICS-INTEGRATION-METHOD.md) ICM | [2021 Nesterov/Derevyanko/Suntsov T-HP experiment](https://doi.org/10.1016/j.applthermaleng.2021.117454); [2021 IOP LTCC module](https://doi.org/10.1088/1757-899X/1139/1/012002) | [CAP-ICM-KRASN-FLAT-HP-ELECTRONICS](../../04-capabilities/CAP-ICM-KRASN-FLAT-HP-ELECTRONICS.md) plus [method/team investigation](../academic-team-mapping/icm-krasn-two-tracks-decision-audit-2026-10-09.md) | Different SFU 'Dmitry' vs experimental Denis byline remains an identity blocker for other paper; no 0.x-mm phone transfer |

**What this verifies:** canonical path names exist in GitHub code search and source identities are present; primary publisher URLs are maintained as direct links. **What it does not verify:** every original publisher destination was re-opened in this run; actual rights/access; complete Source->Claim->Actor reachability at latest commit or GitHub Actions workflow success.

## Archive repairs and CI checks

- Latest default branch HEAD observed by GitHub commit search: `e611765ad1681cc53348370688299176dd026657` *before subsequent fixes*.
- Combined commit-status endpoint returned **empty status list** for that commit: **UNKNOWN**, not PASS/FAIL. The historic 2026-10-08 Actions run in STATUS remains the only previously documented CI outcome, no current Actions-run proof.
- Key 8 relative links in the latest archive/report entry points were fetched successfully; whole archive index has more targets than that sample. No assertion of full broken-link absence.
- The Q09 comparison report initially retained TSU as 'not audited equally' after [TSU 2026-10-09 paper gate](../academic-team-mapping/tsu-phone-relevance-decision-gate-2026-10-09.md) was finished. Update derived report to make current TSU audit status explicit and preserve rationale for no promotion.
- Preserve all earlier dated dossiers as historical research snapshots; new current source-of-truth navigation in [archive map](../research-archive-index-2026-10-09.md).
- No source/claim canonical bulk migration: requires metadata identity and graph validation, not copy-and-paste of research interpretations.

## Remaining P0 for final signoff

1. Real **latest HEAD** Actions run results / `python tools/v2repo.py --check`, graph/atlas and link validator where applicable.
2. Actual automated full tree internal relative-link scan (this limited connector batch cannot attest full tree).
3. Material primary originality / lab affiliation ambiguity and cross-claim source-to-decision line-by-line verification for P1/P2 and new method watch packages.
4. Source key + DOI alias dedup check before promoting October9 staged studies.

## Goal regression

This is an evidence-trace and archive hygiene result, not another science discovery round. Current P1 Primary / P2 reserve / TPU HOLD unchanged. Q09 is paper-stage and cannot be considered actual collaboration-feasibility passed. Q10 leadership signoff pending current CI and full-source claim consistency.
