# V2.1 Target Layout

Updated: 2026-10-05  
Lifecycle: PROPOSAL

```text
00-project/
  STATUS.md
  charter.md
  methodology.md
  taxonomy.md
  architecture.md
  CONTINUE-HERE.md
  restart-snapshot.md              # GENERATED

01-evidence/
  README.md
  papers/
    PAPER-xxx/
      README.md                    # canonical Source
      deep.md                      # optional 10Q/deep reading
  patents/
    PATENT-xxx/
      README.md
      deep.md
  official/
    OFFICIAL-xxx/
      README.md
  vendors/
    VENDOR-xxx/
      README.md
  datasets/
    DATASET-xxx/
      README.md
  indexes/                         # GENERATED

02-claims/
  README.md
  CLM-xxx.md
  indexes/                         # GENERATED

03-actors/
  README.md
  organizations/
    ACT-KUTATELADZE/
      README.md
    ACT-MPEI/
      README.md
    ACT-TPU/
      README.md
  labs/
    ACT-KUT-LAB13/
      README.md
    ACT-KUT-LAB66/
      README.md
  people/
    PERSON-PAVLENKO/
      README.md
    PERSON-IVANOV/
      README.md
  companies/
    COMPANY-NEWFROST/
      README.md
  indexes/                         # GENERATED

04-capabilities/
  README.md
  CAP-xxx.md
  indexes/                         # GENERATED

05-directions/
  README.md
  index.md                         # GENERATED
  portfolio.md                     # GENERATED
  DIR-failure-aware-utvc/
    README.md
  DIR-health-aware-utvc/
    README.md
  DIR-extreme-film-reserve/
    README.md
  DIR-surface-process-challenger/
    README.md
  DIR-analytical-boundary-enabler/
    README.md

06-validation/
  README.md
  index.md                         # GENERATED
  shared/
    measurement-contract.md
    evidence-gates.md
    baseline-policy.md
  DIR-xxx/
    EXP-xxx/
      README.md
      results/

07-decisions/
  README.md
  index.md                         # GENERATED
  kill-ledger.md                   # GENERATED
  events/
    DEC-xxx.md

08-roadmap/
  README.md
  current.md
  collaboration-plan.md
  validation-plan.md

views/
  russia/
  china/
  russia-vs-china/
  institutions/
  capabilities/
  technologies/
  collaboration/
  smartphone/
  evidence-map/

reports/
  README.md
  STATUS.md                        # GENERATED staleness view
  current/
  leadership/
  technical/

history/
  README.md
  research-log/
  transactions/
    TXN-xxx.md
  migrations/
    receipts/
      MIG-xxx.md
    origin-index.md                # GENERATED

analysis/
prototype/
```

## Structural rules

### Evidence is object-local
One source folder contains compact canonical metadata and optional deep reading.

This replaces the V1 parallel pattern:
source register + bibliography + brief + 10Q.

### Claims are flat
Grouping by Russia/China/technology is generated.

### Actors are identity objects
Institution, lab/team and person hierarchy is explicit.

### Capabilities are separate from Actors
"Who they are" and "what evidence says they can do" are not mixed.

### Directions are living strategic folders
They may contain local notes if needed, but current strategic state stays in the Direction README.

### Country / technology / collaboration are Views
They do not own independent truth.

### Reports are derived
Leadership table, final report and management heatmap read canonical objects.

### History stays history
Round reports are preserved but never required to know current truth.

### Generated files
Must begin:
> DO NOT EDIT — GENERATED FROM CANONICAL OBJECTS
