# Kutateladze 2025 — bounded title-screen of 41 raw-only leads and independently seeded 24 dual-negative controls

date: 2026-10-08
status: COMPLETE_FOR_DEFINED_41_RAW_ONLY_TITLES_AND_24_SEEDED_NEGATIVE_TITLES / NOT_FULL_TEXT_OR_PUBLISHER_RECONCILED / ANNUAL_COUNTS_NULL
source_population: [2025 archived institute site, 270 rows](../itp-annual-raw/2025-candidates.tsv)
selection_differences: [67-vs-35 queue reconciliation](kutateladze-2025-keyword-coverage-reconciliation_2026-10-08.md)
row_level_review: [65 independent topic and count-safety decisions](kutateladze-2025-raw-only-41-and-dual-negative-24-topic-screen.tsv)

## Results; these numbers are topic-screen decisions, NEVER counted scientific outputs

| Category in 41 previously raw-only title leads | Rows |
|---|---:|
| Direct P1 diagnostics or film-model research | 2 |
| Transferable generic heat-transfer mechanisms | 10 |
| Enabling model/metrology | 3 |
| Background/review | 2 |
| Broader background outside phone-specific mechanism | 11 |
| Adjacent different-platform apparatus | 3 |
| Out of current scoped thermal transfer | 10 |
| **Total title-reviewed raw-only** | **41** |

For the deterministic 24-sample from the **194 records hit by neither of the two keyword queues**, title-screen categories are: 13 OUT_OF_SCOPE; 6 BROAD_ACADEMIC_BACKGROUND; 5 ENABLING_OR_TRANSFERABLE including surface wetting contact-angle algorithm #34, narrow HFE-7100 heated droplet #106, laboratory flow measurement #147, gas–liquid stratified-annular transition #197, and multi-view triangulation precision #76 (metrology other device). **24 are a subset of 194; they are NOT all remaining nonmatches or a statistical recall sensitivity estimate.**

### Sampling provenance and reproducibility

- Raw 2025 site archive: 270 original mixed-field bibliography rows.
- First-class raw `KEYWORD_CANDIDATE` 67; curated 35 (26 overlap), hence RAW_ONLY 41, CURATED_ONLY 9, union 76, both-negative **194**. The 35-curated title reviews remain valid but were not all original signals.
- Choose 24 entries from the both-negative 194 in **ascending official site ordinal order** using deterministic JavaScript uint32 linear congruential generator with seed `20261008`: `state = (1664525 * state + 1013904223) mod 2^32`; draw `state mod 194` and keep distinct values until 24 unique positions, then sort ascending. This is **pseudorandom convenience sampling, not an independent unbiased random design** (modulo selection and low bits may be biased). Selected ordinal IDs **2,11,34,41,64,75,76,84,106,109,147,152,154,156,169,197,207,219,221,232,241,254,263,267**. Sampling without replacement by PRNG does not itself justify confidence limits, and current 194 external DOI recall is unverified.
- 2025 #262 from the earlier **different** systematic raw-negative sample is outside curated 35 but not necessarily in today's dual-negative sample, and its original Russian bibliographic identity remains to be resolved against #196. Do not silently merge.

### Most decision-relevant recovered raw-only title cases

- **#46: Dynamics of bubbles and dry spots under a heated downward-facing substrate**, Kabov, Mungalov, Chinese-affiliated coauthors (Luo/Sun/Bai) and collaborators. Mechanism ground-truth candidate near P1; original [Kutateladze 2025 page](https://www.itp.nsc.ru/publikacii/2025/2025stati/3.html). DOI mentioned in prior staging **10.1615/InterfacPhenomHeatTransfer.2024054467** remains **SECONDARY / publisher identity on HOLD**. International coauthorship is already a counterexample to a strictly unique domestic school; phone observer, signed active project and raw repeatable annotated masks NOT VERIFIED.
- **#98: Heat Transfer and Fluid Dynamics Modeling in Shear-Driven Liquid Film Cooling System of Microelectronic Equipment**, Kabov and current Lavrentyev lab leader Kuznetsov; [2025 journal original DOI](https://doi.org/10.1134/S0015462825604279), existing canonical **PAPER-RU-NET-001**, not a new 2025 work; narrow math benchmark not phone VC.
- **#97: thin-film YBCO heat flux sensor** and **#137: Schlieren measurements of porous-droplet film thickness** are enabling measurement methods not established as rugged phone-embedded sensors. Other raw-only #51 bubble detachment, #131 two-phase bubble-flux measurement, #194 film stability underpin physics, not phone prototypes.
- **#164: HFE-7100 pool nucleate boiling on stainless-steel heater** publisher [DOI 10.1134/S004060152470068X](https://doi.org/10.1134/S004060152470068X) links selected pressures/layer thickness under **120-mm** source and Kutateladze plus Novosibirsk State Technical University affiliations; not 0.5-mm sealed copper-water phone VC.
- **#9 and #116** analyze active water cooling of Novosibirsk synchrotron vacuum components. They establish knowledge about cooling high-load physics instruments but are distinctly NOT smartphone-scale passive VC results.
- **#100 and #110** are condensation on large horizontal tube-bank **reviews**, do not include as new original experiment counts.
- **#117** high-temp film/mist cooling on gas turbine is outside phone pump/power scope. Large power/station structures must not become phone capability proof.

### Both-negative recovery signal and original-source gate

- **#106: HFE-7100 droplet interaction with a superheated surface** — title is clearly about a dielectric wetting/heat-transfer experiment, yet BOTH title rules excluded it. Need original publisher abstract, experimental geometry/fluid and significance to boiling/CHF before research-paper *admission*, not just title screening.
- **#34: contact-angle estimation on textured surfaces for MD** — relevant algorithmic wetting/surface-reconstruction enabling context, but whether it has evidence of microscale wick transfer depends on a matched surface/geometry model.
- **#197: stratified-to-annular transition in a horizontal pipe** — valid two-phase flow regime mechanism candidate. Different geometry from high-confinement phone pipes. Its DOI, author group and relation to 2025 #196 and #262 must be checked separately; no Russian-English work grouping by similar titles alone.
- **#267: narrow-channel turbulence near trench dimples** — foundational channel fluid-dynamics context, not evidence of cooling gain.

**Meaning for Q04:** The **41 title-screen records are now reviewed** and 24 additional previously dual-negative entries have a repeatable row-level academic screening decision. This improves the *coverage-discovery stage* but the recognized candidate universe is **still incomplete** because: 170 of 194 dual negatives remain unscreened, the institute itself says its website bibliography is incomplete, and Crossref/RSCI/OpenAlex plus translation DOI, issue-versus-online date and publication-time affiliation review are not done.

No annual output total, academic ranking, patent total, new canonical Paper or scientific-strategy promotion is authorized. Strong China/global prior art and P1 public raw-label increment remain unresolved. Q04 stays `IN_PROGRESS`.

## Next bounded action

1. Original full abstracts and publisher work identity for 2025 #46, #97, #106, #137, #164 and #197; verify #262/#196 dual Russian-English manifestations by exact authors/DOI.
2. Human-screen remaining 170 both-negative entries **only if the policy goal demands an exhaustive site-corpus keyword false-negative census**, otherwise use true random stratified sample with proper design and uncertainty (24 present is deterministic convenience sample).
3. Full 2025 candidate union + independent publisher index recall across missing site publications; then 2024 analogous; MPEI team-specific research output and same-year/issue/translated version reconciliation.
4. Actual per-institution relevant output totals remain `null` until complete enrollment/dedup and affiliation validation.
