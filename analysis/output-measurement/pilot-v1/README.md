# Russia Thermal Institution Output — 2021–2025 Feasibility Pilot

date: 2026-10-08
state: DISCOVERY_PARTIAL / SAMPLE_QA_PASS
period_full_years: 2021–2025
period_separate_ytd: 2026-01-01 through 2026-10-08

## What this round answered

The question is not yet "which institution published more?". It is:
**Can Kutateladze, MPEI and Thercon be measured using comparable, provenance-backed thermal-relevant Papers, Patent publications and Patent families with historical affiliation?**

### Feasibility verdict

| Actor | Evidence access | Can publish five-year comparable totals NOW? | Next specific block |
|---|---|---|---|
| ACT-KUTATELADZE | official 2021–2025 yearly Article/Patent catalog; candidate records with titles/years | NO | official site warns catalog is incomplete; full pagination, DOI dedup, institute-vs-relevant topic filter, external recall needed |
| ACT-MPEI | official Institute of Thermal & Nuclear Power Engineering publications page + Kuzma-Kichta 'main publications' group page; canonical 2024 team DOI | NO | those are heterogeneous/selected lists, not comparable five-year thermal-team totals; rebuild author/team set and cross-index |
| ACT-THERCON | company reports 6 invention and 3 utility-model patents; specific 2019 RU / 2020 WO family located | NO | aggregate spans unspecified years; need historical assignee/patent family register and engineering output distinct from papers |

**DO NOT compare the three as if reporting output counts at the same coverage level.**

## Operational method and objects

- Contract: `00-project/output-measurement-contract.md`
- Three institution pilot records: `ACT-*.md` in this directory
- Discovery example ledger: `sample-records.tsv` (11 records; not a census)
- Validator: `python tools/output_measurement_audit.py`
- CI runs the validator alongside Source Dedup, canonical health, graph and Atlas coverage.

The sample includes:
- **three candidate dated Kutateladze invention numbers** (2022, 2023, 2024) that need independent registry/assignee/family checks before canonical promotion;
- two sample catalogue bibliographic citations awaiting DOI identity normalization;
- one 2025 **software certificate** deliberately separated from invention patents;
- 2026 Kutateladze patent `PATENT-RU2860581C1`, deliberately excluded from the five completed years;
- verified MPEI 2024 `PAPER-RU-MPEI-SKOL-AM-001` and separate 2026 `PAPER-RU-AGE-001`;
- Thercon 2019 `RU2685078C1` and 2020 `WO2020005094A1` (linked by common 2018 priority) deliberately excluded from 2021–2025 and NOT treated as two new families.

These samples test identity/time/class semantics. Their row counts have no bibliometric meaning.

## Major correction opportunity

Kutateladze institute's general Article catalog includes combustion, fossil-energy technology, materials and CFD unrelated to terminal thermal transfer. Whole-institute article indexes therefore need TOPIC FILTERING before any 'relevant output' number.

The annual IP pages mix:
- invention patents;
- utility models;
- computer-program registration certificates;
- database registrations;
- other related rights.

These are **not interchangeable** metrics.

## Strongest primary/context links inspected

Kutateladze:
- https://www.itp.nsc.ru/publikacii.html (explicit incomplete-population warning)
- https://www.itp.nsc.ru/publikacii/2024/2024stati.html
- https://www.itp.nsc.ru/publikacii/2025/2025stati.html
- https://www.itp.nsc.ru/structura/ctt/patenty.html

MPEI:
- https://mpei.ru/Structure/Universe/tanpe/Pages/publication.aspx
- https://itf-mpei.ru/group/kuzma-kichta/
- https://doi.org/10.1134/S0869864324040085

Thercon:
- https://thercon.ru/about/
- https://patents.google.com/patent/RU2685078C1/en
- https://patents.google.com/patent/WO2020005094A1/en

Supporting OpenAlex query protocol:
- https://help.openalex.org/how-to/api-recipes/
- https://help.openalex.org/api/filtering/

OpenAlex institution records, Russian eLibrary/RSCI and external patent registry coverage have not yet been fully reconciled against these three; no total is inferred from them.

## Immediate next-phase plan

1. **Kutateladze census calibration:** retrieve yearly article pages 2021–25 with pagination, field-filter a defined mobile-thermal relevance taxonomy; DOI/translated-version dedup; reconcile missing titles against external paper indexes. Separately extract every invention/utility/patent-family candidate and explicitly exclude computer program/database certificates.
2. **MPEI team-set build:** recover verified author aliases/affiliations for Ivanov, Kuzma-Kichta, Lyulin/Dedov and Bulaeva, then perform exact 2021–25 literature and inventor/assignee searches; cross-check the MPEI institute research-group bibliographies.
3. **Thercon legal assignee/patent-family reconstruction:** obtain historical legal entity aliases and all claimed invention/utility-model publication IDs from patent registers. Test which belong to 2021–25; do not compare a company portfolio total with the university paper count.
4. **Comparability gate:** only then produce actual 2021–25 year-by-year relevant *measured* totals and a side-by-side leadership chart; leave yearly cells null/NOT_MEASURED before that gate.

No external contact or real-device testing is required for this public-source research stage.

## Strategy/leadership consequence

- No change to P1 Kutateladze / P2 MPEI / P3 TPU HOLD / LHP WATCH.
- This work increases evidence accounting reliability; it does **not** prove one Russian institution outperforms a Chinese counterpart.
- Patent and publication annual totals remain unmeasured; the original goal of institution-level five-year output intensity is still OPEN, but its measurement rules and pilot evidence paths are now established.

## User-scoped academic-first priority (2026-10-08)

The user explicitly prioritized **academic institutions and research institutes for collaboration**. Universities and RAS research organizations are the PRIMARY objects for scholar/team mapping, literature/claims review and five-year output analysis.

Company/industrial organizations remain **CONTEXT_ONLY** and no longer receive equal-depth output census or partner-ranking effort. Retain Thercon as a bounded company-reported patent-portfolio / RU-vs-WO family dedup example only.

Academic measurement queue:
1. Kutateladze Institute;
2. MPEI named thermal research groups;
3. ITP Ural Branch RAS / LHP Laboratory.

See:
- `00-project/academic-first-research-contract.md`
- `00-project/russia-root-actor-research-routing.tsv`
- `analysis/output-measurement/pilot-v1/ACT-ITP-UBRAS.md`

First web-based year-page probe confirmed the Kutateladze journal-article catalog exists with paginated official pages across 2021–2025. Estimated page counts from the probe: 2021=27, 2022=14, 2023=16, 2024=14, 2025=14. These are **page numbers**, not paper counts. Some first-page entries did not match the initial parser and need extraction QA.

Full-year relevant research output is still NOT_MEASURED; website explicitly states its public bibliography is incomplete.

## Official archive extraction and machine screening (2026-10-08)

A real GitHub Action retrieved 65/85 Kutateladze annual article listing pages and archived 1,250 raw catalog records. The 20 missing pages are all from 2021 after timeout errors; 2022–2025 site pages were retrieved with continuous ordinals.

Automated TITLE keyword triage identified 186 **unreviewed research leads**, a deliberately overinclusive review queue and NOT a measured 2021–2025 Paper output count.

Important QA:
- URL/page/site ordinal from original archive preserved;
- row-level provenance cross-check in `tools/itp_triage_audit.py`;
- `HIGH` review priority is not mobile relevance, product capability or quality rank;
- DOI HTML link href extraction not yet complete;
- publisher-linked 2025 review + corrigendum are one review plus a correction, not two new research papers.

Research report:
`analysis/output-measurement/pilot-v1/kutateladze-catalog-screening_2026_10_08.md`

Manual representative decision-use review:
`analysis/output-measurement/pilot-v1/kutateladze-curated-2024-2025.md`

Company research remains CONTEXT_ONLY; Kutateladze -> MPEI -> ITP Ural Branch academic institute output is the current deep-data priority.

## Newer status — official Article archive fully fetched (2026-10-08)

The earlier 65/85 and 2021 missing-page statements above are historical snapshots and have been **superseded**. Two low-rate retry passes successfully recovered all 20 missing 2021 Article pages, giving 85/85 visible site pages and 1,650 raw bibliography citations for 2021–2025.

Automatic unreviewed TITLE triage now flags 239 leads (2021=64, 2022=44, 2023=47, 2024=49, 2025=35). This is NOT a verified thermal-relevant output count.

DOI identity examples currently resolve 14 staged bibliographic identity records: one existing canonical paper reused, six new but NOT-yet-ingested primary-identifiable independent work candidates, one linked publisher corrigendum, six secondary DOI leads on hold. None may be extrapolated to annual output.

Current report and machine provenance:
- `kutateladze-full-archive-doi-round_2026_10_08.md`
- `kutateladze-doi-identity-review.tsv`
- `analysis/output-measurement/itp-annual-raw/retrieval-manifest.json`
- `tools/itp_doi_identity_audit.py`
- `tools/itp_triage_audit.py`

Academic-first Kutateladze -> MPEI -> ITP Ural Branch remains the publication/research-partner priority. No new canonical source ingested and no publication total asserted.
