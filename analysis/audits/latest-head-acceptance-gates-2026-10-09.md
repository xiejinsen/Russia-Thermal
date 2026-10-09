# Latest HEAD research + archive release gates

date: 2026-10-09
status: PARTIAL_VERIFICATION_ONLY / CURRENT_CI_UNOBSERVED
last_inspected_pre_note_sha: 90fc7eadead6749997ab0d130e9df0afb5e74413
status_note_commit: 1f7f3fbd294ca03f85f989c02159964df05e9903
scope: public-evidence Russia-Thermal research archive, Q09, leadership-report signoff

## Observed checks

| Gate | Recorded evidence | Actual audit disposition |
| --- | --- | --- |
| P1 cited canonical Source | [PAPER-RU-DRY-001](../../01-evidence/papers/PAPER-RU-DRY-001/README.md): DOI 10.1016/j.ijheatmasstransfer.2025.127855; 2026 study HFE7100/Novec649 | VERIFIED REPO CHAIN: experiments include dry spots/CHF, no smartphone qualification |
| P1 canonical Claim | [CLM-PAV-002](../../02-claims/CLM-PAV-002.md) cites PAPER-RU-DRY-001 | VERIFIED REPO CLAIM SCOPE: dry-spot statistics correlate with irreversible crisis *in described experiment*; no field deployment |
| P2 cited canonical Source | [PAPER-RU-AGE-001](../../01-evidence/papers/PAPER-RU-AGE-001/README.md): DOI 10.1016/j.pes.2026.100314 | VERIFIED REPO CHAIN: 42 calendar months, R410A, modified surface, not copper-water phone VC |
| P2 canonical Claim | [CLM-MPEI-002](../../02-claims/CLM-MPEI-002.md) cites PAPER-RU-AGE-001 | VERIFIED REPO CLAIM SCOPE: stable integral thermal performance and degraded *post-operation* imbibition; no measured temporal precursor |
| Derived Q09 trace | [Five-card mapping](q09-evidence-trace-repair-2026-10-09.md) | KEY RECORDS CHECKED, not canonical graph traversal of every modern method reserve |
| Latest GitHub commit status | Combined status endpoint for 90fc7ea returned [] | UNKNOWN. Empty array is not green or red CI. |
| Direct cloning and Actions web | Container DNS could not resolve github.com; web Actions endpoint inaccessible | NOT RUN. No Python local repo validator executed |
| Full tree relative Markdown links | Eight targeted paths previously checked successfully | FULL TREE UNVERIFIED; not a 100% no-broken-links claim |

## Actual remaining release blockers

P0-A: Obtain current HEAD Actions run or run `python tools/v2repo.py --check` plus graph/atlas/source-dedup and web export tools on actual checked out repo. Record SHA, exit codes and warning summary.

P0-B: Traverse repository tree and check local relative links including generated reports, cross-file citation targets, Actor/Source/Claim targets and section anchors. Check aliases and version-specific links without modifying historical files needlessly.

P0-C: For last updated Q09 method cards, perform full source identity / author attribution / claim lineage before any canonical Source promotion. P1/P2 direct critical canonical source+claim spot-check is **PASS**; not the entire 2026-10-09 portfolio.

P1: Resolve Denis-vs-Dmitry Nesterov for distinct SFU source, NSU EITP lead, per-author TPU-Frumkin affiliation only if they affect final named collaboration recommendation. Maintain unsupported collaboration rights/data/phone-device claims as UNKNOWN.

## Decision consequence

Do not change Phase1 P1 Primary / MPEI Conditional Reserve / TPU HOLD. Do not mark final integrated insight, latest CI or full archive link integrity as CLOSED on the present evidence. The research is ready for a conditional management brief, not a full automation-certified release.


## Follow-up on 2026-10-09: link checker added, execution still OPEN

- A standard-library link-target checker was added at [tools/check_local_links.py](../../tools/check_local_links.py) (commit `f22d9cb60272d0f527401b9e72342180a7691401`).
- On an actual repository checkout, run `python tools/check_local_links.py`. This checks existing local Markdown link paths, ignores remote URLs/anchors/code fences and reports file/line for absent paths. It **does not** validate remote DOI URLs or Markdown section anchors.
- This is an added inspection tool, **NOT an execution result**: no full-tree PASS can be claimed until its output on the actual HEAD is recorded.
- GitHub Actions and `v2repo.py --check` / graph / atlas remain separately unverified on the newest commit.


## Link checker wired to GitHub Actions — 2026-10-09

- [V2.1 Repository Health](../../.github/workflows/v2repo-check.yml) now invokes `python tools/check_local_links.py` on push/PR to main (commit `140eb6ae16e779a57fefe88ddf8d6761479ec963`).
- It uses `continue-on-error: true` **temporarily** to establish the repository's existing broken-link baseline without blocking the previously enforced graph/source audit. A green workflow under this setting **does not** mean Markdown links passed; the step log/result needs review.
- External Actions web is inaccessible in the current tool session, and container git clone fails due to DNS; no post-change run is independently verified. Follow-up: capture link step errors, repair legitimate live references, classify intentionally historical links, then remove `continue-on-error` to make it an actual release gate.
