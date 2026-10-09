# Website identity and affiliation lineage audit — 2026-10-09

status: SOURCE-BASED_IDENTITY_AUDIT / NO_NEW_PRIMARY_PERSON_VERIFICATION
scope: Q02 Q04 Q09, mobile-thermal research, author → publication affiliation → current institution → partner work package
release implication: P1 identity ambiguity must remain visible; P1/P2 broad leadership judgments unchanged

## Critical methodological separation

A paper's named author is not automatically a current employee, a member of the same laboratory, or a person authorized to collaborate. Validate separately: (a) exact original author identity, (b) the paper's publication-time affiliation, (c) present first-party roster or official title, (d) connection to the relevant scientific capability, (e) consent/data/IP feasibility. Coauthorship never means an institution owns all collaborators.

## Trace 1 — Kutateladze P1

Institution ACT-KUTATELADZE → Lab 1.3 ACT-KUT-LAB13 → **Alexander N. Pavlenko** (official Lab head) and **Anton S. Surtaev** (official senior researcher roster) → PAPER-RU-DRY-001 (Surtaev, Malakhov, Perminov, Polovnikov, Pavlenko) → CLM-PAV-002. Institutional/team ownership of the Pavlenko/Surtaev research line is well anchored in the official lab roster and paper metadata. **Not all five paper authors are thereby Lab 1.3 permanent members.** Smartphone dryout predictive advantage remains unverified.

Material same-surname ambiguity: **Vladimir E. Zhukov** is on the official lab roster, but papers include **V. I. Zhukov** in the thin-layer author line. Different initials and publisher metadata; do not merge these people or attribute V. I. Zhukov's publications automatically to the roster member. Reference: `analysis/academic-team-mapping/kutateladze-lab13-team-capability-2026-10-08.md`.

## Trace 2 — MPEI P2

ACT-MPEI → **Nikita S. Ivanov**, supported by public academic and official current research activity → PAPER-RU-AGE-001, “Long-term operational stability ...” (2026, Ivanov) → 42-month actual operation in R410A thermosyphon, stable aggregate performance, lower post-operation capillary imbibition → CLM-MPEI-008 OPEN analyst early-warning hypothesis. User-facing portfolio remains **RESERVE**. Existing reports name Kuzma-Kichta as a possible MPEI discussion counterpart but the exact division of paper authorship, official current role, Newfrost commercial position and collaborative authority must not be inferred. Non-phone publication context is explicit. No authorized outreach yet.

## Trace 3 — ICM Krasnoyarsk, two-team split and high-risk name collision

Canonical ICM institute: **ACT-ICM-KRASN**, historic alias ACT-ICM-SBRAS is **not** a second institution.

**Track A**: electronics and flat-heat-pipe experiments and LTCC integration. The 2021 Applied Thermal Engineering T-shaped copper-water and titanium-acetonitrile paper names **Denis A. Nesterov, Valery A. Derevyanko and Sergey B. Suntsov**. Suntsov is an external Reshetnev-affiliated coauthor, **not default ICM staff**. Historical departmental head vs present institute deputy-director distinction also matters for Nesterov.

**MATERIAL CONFLICT:** 2021 Journal of Siberian Federal University paper DOI 10.17516/1999-494X-0317 labels author as **Dmitry A. Nesterov** (same D.A. initials), whereas official institute colleague is **Denis A. Nesterov**. The publisher English author identity and official institute post must not be silently unified. Do not count that publication toward Denis's personal original-work corpus until reconciled.

**Track B**: theoretical bilayer liquid–gas interface/evaporative convection with **Victoria B. Bekezhanova** (department lead) and **Irina V. Stepanova**. This is not the same experimental Track A, and Goncharova coauthorship does not establish same ICM employment. Paper DOI 10.1016/j.ijheatfluidflow.2024.109385 and DOI 10.1016/j.ijmultiphaseflow.2025.105260. The lines share one institute, not one team nor demonstrated phone VC.

Existing strong audit: `analysis/academic-team-mapping/icm-krasn-two-tracks-decision-audit-2026-10-09.md`.

## Website-specific severity assessment

| ID | Severity | Finding | Public-site implication | Next action |
|---|---|---|---|---|
| PERSON-01 | P1 | V.E. vs V.I. Zhukov distinct initials and roles | Explicitly suppress any assumed equivalence in scholar affiliation & representative paper lists | Check normalized `keyPeopleIds`, output in generated scholar pages |
| PERSON-02 | P1 | Dmitry A. vs Denis A. Nesterov same initials, publisher vs official site conflict | Prevent erroneously assigning `-0317` paper to Denis | Verify exact normalized paper-person join, annotate unresolved |
| PERSON-03 | P1 | ICM experimental and analytical groups separate | No combined “ICM thermal team” or merged research score | Confirm profile and collaboration view team labels |
| PERSON-04 | P2 | MPEI Ivanov/Nikita and partner role vs publication author | Don't assert current business title, direct phone OEM contact or shared datasets | Keep conditional role, consult original institution page |
| PERSON-05 | P2 | External coauthors such as Reshetnev Suntsov and theoretical Goncharova | Never promote coauthor to current institutional staff without first-party record | Audit profile rendering |
| PERSON-06 | P2 | NSU/ITMO and TPU related author assignments incomplete | Retain **UNKNOWN/REQUIRES_PRIMARY_AFFILIATION** rather than silently join | Narrow original affiliation lookup before profile changes |

## Current completion boundary

Repository original sources and previous research audits substantiate identity caution above, but **this cycle has not programmatically enumerated every normalized person-to-paper link or inspected generated HTML**. Hence this is NOT a complete all-scholar relationship verification and does not certify correct render of every profile. Leave WEBSITE IDENTITY GATE open until normalized graph inspection and selected browser samples are completed.

No new scientific priority, collaboration permission or device performance claims are created by this audit.
