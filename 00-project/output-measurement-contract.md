# Institution Research-Output Measurement Contract v0.1 — Pilot

status: PILOT / DO_NOT_PUBLISH_COMPARATIVE_TOTALS
date: 2026-10-08
scope: research-output and IP measurement for leadership's Russia-only thermal-capability atlas

## Measurement target

**Question:** What research output, IP, coauthorship, grants and engineering translation has a specified Russian organization/team produced in mobile-terminal-related thermal-management areas?

Five fully elapsed calendar years:
- 2021-01-01 through 2025-12-31, based on actual publication dates.
- 2026-01-01 through 2026-10-08 is separate YTD; NEVER combine with five-year trends.

Two independent denominators:
1. **Institution / company TOTAL** across all fields: useful for scale/context, not thermal strengths.
2. **Relevant THERMAL OUTPUT**: only relevant to mobile/compact-electronics thermal capability directly, with adjacent transferable LHP/VC/microfluidics/boiling/materials/reliability/diagnostics. Software stays LIMITED_SCAN.

Never divide (2) by or compare it with (1) unless both are measured from comparable complete sources.

## Work classes and inclusion

PAPERS:
- journal article / research conference paper, verifiable publisher DOI or stable original bibliographic identifier;
- date = actual publication year, not year retrieved or affiliation web-page update;
- journal translated Russian/English *versions* of same work map to one normalized work; conference expansion materially different from journal paper may be separate after expert review;
- avoid double-counting preprint/publisher mirrors and database duplicates;
- presentations and abstracts are separately typed, not mixed with peer-reviewed paper totals.

PATENTS:
- unique *publication identifiers* first (RU...C1, WO...A1 etc.);
- separately group by simple family ID (shared priority/linked equivalents);
- record priority year, publication year, earliest identified publication, assignee(s) AT FILING and later changes;
- yearly publication count and distinct family-start count are **different** metrics;
- 2019 RU + 2020 WO for one family do not become two families or 2021–25 filings;
- software registrations, databases, design rights, utility models and invention patents are separate bins;
- company-reported aggregate patent counts remain COMPANY_REPORTED, not normalized sample totals.

INSTITUTION / TEAM ATTRIBUTION:
- distinguish principal institutional affiliation on paper from guest affiliation, temporary appointment or grant recipient;
- record named person/team plus publication-time institutional affiliation;
- joint papers credited once to each participating institution *when measuring institution-specific output*, but dedup once across a national total;
- technology ownership must not be attributed merely because institution ranked highly or coauthor shared a patent.

COLLABORATION:
- COAUTHORSHIP / JOINT_PROJECT / FUNDED_GRANT / LICENSE / INDUSTRIAL_DELIVERY / OEM_PRODUCT are DIFFERENT types;
- only mark a current industry collaboration when the source actually names it and date/scope;
- no partner willingness inference from public web content.

## Coverage and presentation controls

Allowed coverage states:
- NOT_MEASURED — no complete recall/dedup pass, annual totals MUST be null.
- DISCOVERY_PARTIAL — official catalogs / representative entries identified, annual totals MUST be null.
- REVIEWED_BOUNDED — a fully specified and bounded retrieved set has been exhaustively reviewed; publish its count **only with exact query/source/denominator**.
- RECONCILED — independently validated institution/team five-year scope, dedup, affiliation and missing-data audit completed, potentially comparable after normalization.

Annual table values MUST be null for NOT_MEASURED / DISCOVERY_PARTIAL, not 0.
A discovered *sample* count is never the organization's annual or five-year output.
Do not show institution rankings without parity of coverage, field, language, output type, date and counting unit.

## Data ownership

- Keep existing SOURCE -> CLAIM -> CAPABILITY -> ACTOR graph untouched unless a concrete new Paper/Patent is validated and deduped first.
- Pilot measurement files live under `analysis/output-measurement/pilot-v1/`, NOT in Actor README or atlas-profile.md.
- Representative sample records are discovery/control records only, NOT new canonical SOURCE objects.
- After completeness is adequate, promote validated measurements into a distinct typed output snapshot record and build web views from it. Never duplicate canonical SOURCE facts.
- Stable evidence references and original URLs are mandatory for important measurements.

## Identity normalization

Paper: DOI -> equivalent journal-version resolution -> normalized title, authors, year, venue.
Patent: normalize grant/publication number; family by earliest priority/linked equivalents. Keep separate publication and family units.
Actor: canonical actor ID plus verified historical organization aliases / registry identifiers.
Source: official publication index + publisher + official patent register; third-party coverage supplement only.

Run existing Source preflight before promoting any candidate to canonical.

## Pilot release gates

Before marking an institution RECONCILED:
1. retrieval query log with date/source, interval, language terms and pagination;
2. data extract of every eligible item with original locator;
3. DOI/publication/family dedup report;
4. sampled recall test of 2021–2025 output against scholar/lab catalogs and alternate databases;
5. publication-time affiliation audit and organization/team split;
6. documented exclusions (unrelated fields and software/data certificates);
7. annual category counts, missing-rate/uncertainty and stable machine-derived totals;
8. comparability sign-off before leadership charts.

A missing online record is not proof that the organization published nothing.
No contact/experiments needed for the public-evidence phase.

## Academic-first sample allocation (2026-10-08 update)

Target study population for deep five-year output is academic universities and academic research institutes. Sample next:
Kutateladze -> MPEI named groups -> ITP Ural Branch RAS.

Company and industrial output is contextual only; keep self-reported patent counts and verified patent families as limited boundary evidence. Do not place academic institutions and companies in one productivity leaderboard or spend equal analyst effort on commercial patent portfolios.

Authoritative research routing:
`00-project/academic-first-research-contract.md` and
`00-project/russia-root-actor-research-routing.tsv`.
