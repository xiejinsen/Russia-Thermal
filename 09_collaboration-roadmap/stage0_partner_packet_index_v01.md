# Stage-0 Partner Data Request + Experiment Packets v0.1

Last updated: 2026-10-05

Status: **CURRENT execution package index**

## Purpose

Convert the current partner decisions into the smallest shareable information request and physical falsification plan needed before any sealed Stage-1 VC build or contractual commitment.

Canonical decision source:
[Stage-0 Partner × Technology Decision Scorecard](stage0_partner_technology_decision_scorecard_v01.md)

Common experiment anchor:
[PoC-1 Stage-0 Coupon Matrix](poc01_stage0_coupon_matrix_v01.md)

## Packet set

1. [Pavlenko / Kutateladze Packet](stage0_packet_pavlenko_v01.md) — priority #1; modified-mesh dryout/rewetting transfer.
2. [MPEI / Ivanov Packet](stage0_packet_mpei_ivanov_v01.md) — priority #2; long-life hierarchy scale-down/high-flux transfer.
3. [TPU / Feoktistov Packet](stage0_packet_tpu_feoktistov_v01.md) — priority #3; low-organic laser vs hydrocarbon-biphilic process screen.

Reserve feasibility:
- [Kutateladze Institute — Lab 6.6 Reserve Feasibility Packet](reserve_packet_kutateladze_lab66_v01.md) — mechanism/IP reserve; ask system-overhead questions only.

MPEI ordered wick remains **HOLD / pre-device** and does not receive a full Stage-0 packet until a repeatable thin physical specimen exists.

## Common rules

### 1. Information request principle

Ask for:
- shareable ranges;
- as-built geometry;
- metrology;
- process boundaries;
- prior public/unpublished test existence;
- sample availability;
- background-IP boundaries relevant to the proposed field.

Do **not** ask for:
- confidential third-party contract terms;
- non-shareable customer data;
- trade-secret recipe detail beyond what the partner is willing/authorized to disclose.

A range or qualitative boundary is acceptable when an exact recipe cannot be shared.

### 2. Common phone geometry anchor

Internal Stage-0 target, not a literature standard:
- preferred functional element height: <=120 μm;
- stretch ceiling: <=150 μm;
- >=200 μm local structure is normally a reject for the 0.4 mm-class VC path unless it replaces another structural/channel function;
- copper is the preferred product-path substrate;
- DI water is the primary product-path fluid reference.

Strong UTVC comparator:
**[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.

Reference device:
- 0.39 mm finished UTVC;
- ~0.2 mm internal channel/support height;
- 0.06 mm copper mesh;
- water working fluid.

### 3. Common coupon drawing convention

For cross-partner fixture compatibility, the preferred internal coupon format is:

- overall coupon: **20 mm × 20 mm** where fabrication allows;
- characterized/treated central zone: **>=10 mm × 10 mm**;
- same carrier/substrate thickness within a matched comparison set;
- same active heated footprint within a thermal comparison;
- at least **n=3** independent samples for any result used to promote a route.

If a partner process requires another coupon size, preserve:
- one common treated/active area across challenger and control;
- identical fixture boundary;
- exact geometry reporting.

These are internal experimental conventions, not claims from literature.

### 4. Common measurement sequence

**S0 — as fabricated**
- thickness/profile;
- feature/pore distribution;
- morphology;
- mass gain/loss;
- wetting/contact metric where meaningful;
- capillary uptake;
- permeability/open-area proxy.

**S1 — product-fluid exposure**
- DI-water soak: 24 h;
- survivor follow-up: 168 h;
- record chemistry/wetting/capillary drift.

**S2 — VC-process compatibility**
- use the actual/planned VC vacuum/degassing thermal process;
- record absolute pressure, temperature, time and atmosphere;
- inspect mass change, surface chemistry/wetting, adhesion/delamination.

**S3 — cycling**
- initial screen: 100 cycles;
- survivor: 500 cycles;
- use process/material-compatible limits and record exact profile.

**S4 — thermal falsification**
- same heater footprint and condenser boundary for control/challenger;
- step heat flux upward until dryout/limit or rig-safe cap;
- report evaporator thermal resistance/superheat, dryout threshold, rewetting time, transient overshoot and repeatability.

### 5. Common Stage-1 promotion gate

Promote at most two Russian-inspired routes.

Minimum:
1. geometry fits <=150 μm Stage-0 transfer ceiling or credibly replaces another structural function;
2. function survives DI water and the relevant process sequence;
3. no catastrophic permeability/capillary penalty;
4. repeatable across >=3 samples;
5. plausible narrow foreground-IP thesis;
6. not dependent on HFE-7100 as the only useful fluid;
7. versus the strong matched reference, achieve at least one internal gate:
   - >=15% lower evaporator thermal resistance; OR
   - >=20% higher dryout/capillary limit; OR
   - >=20% faster rewetting;
   while avoiding an unacceptable thickness/process/reliability penalty.

These are **internal screening thresholds**, not literature claims.

## Decision ownership

- Partner: process know-how, native fabrication, mechanism interpretation, partner-controlled metrology.
- Our/mobile side: phone geometry, product fluid, process boundary, strong comparator, transient/hotspot boundary, Stage-1 sealed integration.
- Joint: data normalization, failure analysis, background/foreground IP boundary, progression/kill decision.

## Stage-0 closure rule

A packet closes only when each mandatory data-request item is classified:
- RECEIVED;
- NOT SHAREABLE;
- NOT AVAILABLE;
- EXPERIMENT REQUIRED.

Unanswered items must not silently become assumptions.

## Round-3 packet freeze

Public research boundaries are now frozen for:
- Pavlenko / Lab 1.3;
- MPEI Ivanov hierarchy line;
- TPU Feoktistov/Orlova;
- Lab 6.6 reserve feasibility.

Do not reopen broad searches to answer items already routed to PARTNER or EXPERIMENT.

The three primary Stage-0 packets are now **OUTREACH-DRAFT READY**.
They are not evidence of contract readiness.

## Round-4 evidence-lock authority

Industry-translation maturity, foreground-IP boundaries and Stage-0 hard evidence locks are frozen in:
[Round 4 — Industry-Translation / Stage-0 Evidence Lock](../08_opportunities-transfer/industry_translation_stage0_evidence_lock_round4_v01.md)

Packet usage rule:
- do not ask partners to re-prove public translation evidence;
- ask only for the missing process / as-built / system data identified in the evidence lock;
- do not move to Stage-1 until the corresponding experiment lock is satisfied.
