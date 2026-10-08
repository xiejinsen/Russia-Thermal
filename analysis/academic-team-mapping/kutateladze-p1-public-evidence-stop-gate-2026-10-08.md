# Kutateladze Lab 1.3 P1 — Public-evidence dataset feasibility and stop gate

date: 2026-10-08
state: BOUNDED_PUBLIC_ACCESS_AUDIT_COMPLETE / DATASET_REUSE_NOT_VERIFIED / INCREMENTAL_INFORMATION_NOT_MEASURED
decision: KEEP_P1_PRIMARY_NARROW / PUBLIC_SEARCH_SATURATION / NO_OUTREACH
control_direction: DIR-FAILURE-AWARE-UTVC
control_capability: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
gates: [11-item machine ledger](kutateladze-p1-public-data-feasibility-audit-2026-10-08.tsv)

## Executive interpretation

**Existing publicly verifiable evidence supports capability to measure dry-spot shape, contact-line statistics and irreversible thermal spreading in a laboratory dielectric-liquid boiling experiment. It does not provide a verified, independently usable run-level dataset, stable operational label/recovery criterion, repeat-run matrix, calibrated synchronization uncertainty and strong-baseline head-to-head results sufficient to establish *incremental* model value for sealed phone-scale copper-water UTVCs.**

**Stop rule:** Do not keep researching the same publicly exhausted P1 claim in small repeated rounds. Preserve P1 as academically plausible but *data feasibility gated*. Reopen when (i) stable original run-level data and label definitions become verifiably accessible, (ii) a new peer-reviewed matched comparator materially changes the status, or (iii) management authorizes a strictly scoped feasibility inquiry. No outreach is currently authorized.

## Evidence checked (publicly available, not full-publisher supplementary audit)

- [Official 2026 journal publication, Surtaev/Malakhov/Perminov/Polovnikov/Pavlenko](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855), *International Journal of Heat and Mass Transfer* 255 part 2, 127855, Feb 2026. Original publisher [article](https://www.sciencedirect.com/science/article/pii/S0017931025011901).
  - **Direct reported facts:** HFE-7100 and Novec 649; high-speed IR + underside LED reflection from heated transparent sapphire; CNN segmentation; spatial dry-spot density, contact-line and area metrics through CHF, bimodal areas near crisis and irreversible spreading compared with thermal-wave theory. Journal abstract reports HTC max ratio **1.47** and CHF ratio **1.56** between tested fluids.
  - **Limit:** These outputs are **group-level/statistical paper results** and reported analysis. Independently shareable raw frame series with run/timing/heat-input/wetting-state labels and matched pressure/temperature baselines were not verified in accessible publisher/other public-index material during this round.
- [Original authors' SSRN preprint, posted June 2025, 26 pages](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5290682), DOI [10.2139/ssrn.5290682](https://doi.org/10.2139/ssrn.5290682). Linked version of same work, not a second original institutional publication; the preprint abstract reports HTC ratio **1.9** and CHF **1.6**, unlike the journal final 1.47/1.56. The final journal controls current numeric claims.
  - **Access note:** SSRN displays a PDF link but publicly retrieved view redirected to the abstract page; a PDF link is not evidence of a machine-readable, freely licensed run-level dataset. No claim is made that a full publisher/supplementary-methods audit has been completed.
- [RSF grant 25-49-00133](https://rscf.ru/project/25-49-00133/) confirms project linkage and named publication; funding/project continuation is not proof of raw-data sharing rights.

## Diagnostic gate (what the user actually needs, not paper novelty)

| Must-have for falsification | Publicly defensible status | Why |
|---|---|---|
| Paper DOI, year, fluid, apparatus mode | CONFIRMED at publisher abstract level | scientifically grounded line |
| Dry-spot metrics and morphology evidence | CONFIRMED in summary form | high-quality mechanism observation |
| Definition of reversible/irreversible label independent of later outcomes | NOT INDEPENDENTLY VERIFIED | avoid outcome leakage |
| Raw synchronized optical+IR+power+temperature+pressure runs | NOT VERIFIED PUBLIC | necessary for fair model comparison |
| Repeats, uncertainty, calibration, withheld surfaces/fluids | NOT VERIFIED PUBLIC | avoid reporting a single illustrated case as predictive skill |
| Strong same-input comparator against hidden-saturation and internal-P/T baseline | NOT MEASURED | central Russia-vs-existing-science differentiation |
| Phone-observable proxy without optical input at inference | NOT DEMONSTRATED | necessary for product-facing application |
| Signed data rights and team cooperation willingness | UNKNOWN; NO CONTACT | first external gate, not yet authorized |

**Important logic:** “Not publicly verified/retrieved” is *not* “the authors do not possess it.” “Research method exists” is not “prediction beats China/global baseline.” No numeric accuracy or product benefit is inferred.

## Decision and next use

- P1 remains PRIMARY only as a conditional mechanism-label / model-falsification collaboration candidate, not a phone hardware/AI architecture bet.
- Do NOT ingest SSRN as duplicate journal Source; preserve existing canonical PAPER-RU-DRY-001.
- Full source fact vs inference distinction remains unchanged; no new source/claim object created.
- Next investigation is horizontal across the Russian academic landscape, beginning with MPEI named groups, then ITP Ural Branch and uncovered academic institutional profiles. P1 public-evidence reopen only if a new decision-grade event occurs.

## Research limitations of this audit

Accessible publisher snippets, article abstract/extended indexed content, SSRN abstract and official grant page were checked; full paid publisher article, every appendix, supplementary archive and authors' non-public storage were **not exhaustively retrieved**. Hence “not independently verified public” is the accurate negative-evidence state. We did not execute analysis code or any new experiment.
