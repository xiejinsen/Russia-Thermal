# Source Identity and Deduplication Contract v1.0

status: FROZEN
date: 2026-10-08
scope: all canonical SOURCE objects, especially papers, patents and official/vendor pages

## 1. Goal

A Source represents one underlying evidentiary object, not one search result or one database landing page.

Different discovery routes must not create duplicate canonical Sources for the same underlying paper, patent publication or webpage.

Examples:
- publisher page + DOI resolver + Google Scholar result -> one Paper Source;
- Google Patents + Espacenet page for the same publication number -> one Patent Source;
- HTTP / HTTPS / tracking variants of the same official page -> one Official Source.

## 2. Canonical identity hierarchy

### Papers

Preferred identity order:
1. DOI;
2. stable repository identifier when no DOI exists;
3. normalized title + publication year + author metadata review.

DOI is normalized before comparison:
- case-insensitive;
- `DOI:`, `doi.org/` and `dx.doi.org/` forms collapse to the same identity;
- surrounding URL/query/fragment noise is ignored.

### Patents

Exact publication identity is the normalized patent publication number.

Example:
- `RU2860581C1` from Google Patents and the same `RU2860581C1` from another patent database are one Source.

Patent-family members are **not automatically collapsed**.
A WO, CN, US or RU family publication may remain separate when jurisdiction/claims/history matter.

Family-level similarity should trigger review, not automatic deletion.

### Official / vendor / institutional pages

Canonical identity is the normalized page URL:
- hostname normalized;
- fragment removed;
- common tracking parameters removed;
- trailing slash normalized;
- HTTP/HTTPS variants treated as the same page identity when host/path/query otherwise match.

Do not collapse different content pages merely because titles are similar.

## 3. Repository fields

Every Source should keep one `source_key` as the primary identity key.

Optional consolidation fields:

`alternate_source_keys:`
- identifiers encountered through other databases or legacy records.

`alternate_urls:`
- alternate landing pages that resolve to the same underlying Source.

`dedup_distinct_from:`
- explicit Source IDs reviewed and confirmed to be distinct despite strong similarity.

`patent_family_id:`
- optional family identifier when family-level grouping is known and useful.

These fields are metadata only; they do not create new evidentiary claims.

## 4. Pre-ingest rule

Before creating a new Source:

1. extract the strongest stable identity:
   - DOI for paper;
   - publication number for patent;
   - canonical URL for official/vendor page;
2. check the repository for that normalized identity;
3. search normalized title / key authors when identity is missing or ambiguous;
4. if the underlying Source already exists:
   - do **not** create a new Source;
   - reuse the existing Source ID;
   - add alternate URL/key metadata to the existing Source if useful;
5. if similarity is high but identity is uncertain:
   - review title, year, authors/inventors, venue/assignee and abstract/claims;
   - merge only when the same underlying Source is established;
   - otherwise keep both and record `dedup_distinct_from` when future confusion is likely.

## 5. Automated enforcement

Repository health must fail on:
- duplicate normalized DOI;
- duplicate normalized patent publication number;
- duplicate normalized canonical URL when that URL is the Source identity;
- exact normalized Paper title + same publication year unless explicitly reviewed as distinct.

Repository health should warn, not automatically fail, on:
- highly similar Paper titles with matching year/author signals;
- highly similar Patent titles that may represent patent-family members;
- other strong metadata similarity without a stable identifier match.

Warnings require review before a newly discovered Source is treated as a new canonical object.

## 6. Search-engine / database result rule

Search results are discovery artifacts, not Sources.

Do not create separate canonical Sources for:
- Crossref record;
- Google Scholar result;
- Semantic Scholar result;
- ResearchGate copy;
- publisher landing page;
- institutional repository mirror;

when they all represent the same paper.

Prefer the original DOI/publisher or authoritative repository as `primary_url`.
Keep useful mirrors only as `alternate_urls`.

## 7. Paper versions

Do not automatically merge:
- conference paper vs later journal extension;
- preprint vs materially revised peer-reviewed paper;
- correction/erratum vs original;
- thesis vs derived paper.

Review whether they are the same evidentiary object or distinct publications.

When distinct, retain separate Sources and connect them through analysis/lineage rather than deduplicating them away.

## 8. Patent-family rule

Do not confuse:
- exact publication duplicate;
- family member;
- continuation/divisional;
- translated publication;
- granted publication vs application.

Exact same publication number -> one Source.

Different publication numbers -> retain separately when claims/jurisdiction/status are decision-relevant, while grouping with `patent_family_id` where known.

## 9. Audit principle

Deduplication protects source identity only.

It must not:
- merge different experiments because their titles resemble each other;
- discard contradictory papers;
- collapse repeated studies from the same group;
- replace evidence-quality review.

The goal is:
**one canonical record per underlying source object, while preserving genuinely distinct evidence.**


## 10. Operational preflight

Before writing a newly discovered Source, use the repository preflight helper when working from a local checkout:

`python tools/source_dedup.py --source-type PAPER --source-key "DOI:..." --title "..." --year 2026 --authors "..."`

Interpretation:
- exit 2 / EXACT SOURCE MATCH -> reuse the existing Source ID;
- exit 1 / POSSIBLE SOURCE DUPLICATE -> review metadata before writing;
- exit 0 -> no current duplicate candidate found.

Existing corpus scan:
`python tools/source_dedup.py --scan`

CI enforcement remains in `tools/v2repo.py --check`, so exact canonical identity collisions cannot silently land on main.

Deprecated Source IDs created by a merge are preserved in:
`00-project/source-aliases.md`.
