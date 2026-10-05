# Strategic Bets v0.1

Last reviewed: 2026-10-04

> **DRAFT SHELL — ONLY GATED DIRECTIONS MAY ENTER FINAL VERSION**

## Bet Card Template

### Bet name

**User / system problem**

What real smartphone problem is being solved?

**Why current solutions are insufficient**

What remains unsolved after the strongest China/global baseline?

**Russia-specific capability**

Which lab/team/mechanism contributes something non-trivial?

**Evidence backbone**

Primary papers / patents / official lab evidence.

**China / global baseline**

Strongest relevant comparator.

**Technical control point**

What exactly is being controlled or improved?

**Phone-transfer model**

How does it fit:
- vertical budget;
- in-plane budget;
- power;
- acoustics;
- reliability;
- manufacturing;
- working fluid;
- package/VC/frame architecture?

**IP hypothesis**

What narrow foreground position may remain?

**PoC**

Smallest discriminating experiment.

**Success criteria**

Quantitative gate.

**Kill criteria**

What result ends or downgrades the direction?

**Partner**

Current verified team / PI.

**Confidence**
- evidence
- engineering
- IP
- partner readiness

**Roadmap**
- 0–6 m
- 6–18 m
- 18–36 m

---

## Current candidate Bet A — phone-scale irreversible-dryout boundary control

Status:
**CANDIDATE PRIMARY BET — NOT FINAL**

Current lead:
Pavlenko / Kutateladze.

Current core thesis:
transfer Kutateladze's **dielectric boiling-crisis diagnostics and reversible→irreversible dry-spot control knowledge** into phone-relevant thin wick / sealed UTVC geometry, while proving additional value beyond strong independent China dryout/rewetting and wick baselines.

Current proof path:
- Stage-0 thin coupon / wick transfer
- then strong-reference sealed Stage-1 VC

Current gating file:
../09_collaboration-roadmap/poc01_stage0_coupon_matrix_v01.md

### China-pressure-test correction for Bet A

Strong independent China baseline now includes:
- GDUT dryout / steam-rewetting / repeated-cycle degradation;
- GDUT ultrathin grooved-porous wick;
- SCUT treated copper mesh;
- SJTU capillary dryout model;
- Changsha HFE confinement.

Therefore Bet A is **not**:
> Russia knows dryout/rewetting better.

It is:
> can Russian dielectric-crisis diagnostics/process knowledge shift the **irreversible-dryout onset** in a phone-scale device beyond those strong baselines?

Key unresolved blockers:
- exact electrochemical recipe is now **partner-only**, not a public-search task;
- thin-mesh modification feasibility;
- permeability penalty;
- product-fluid transfer;
- vacuum/process/cycling;
- Huawei/background-IP boundary.

---

## Current candidate Bet B — sealed adaptive film/droplet hotspot cell

Status:
**RESERVE / HIGH-RISK CANDIDATE**

Must survive:
- full-loop power;
- gas/liquid recirculation;
- separator/condenser volume;
- noise;
- sealing;
- reliability.

Do not promote until reduced-cell feasibility demonstrates a credible phone path.

---

## Current candidate Bet C — model-light compute + cooling adaptation

Status:
**RESERVE / SYSTEM BET**

Must prove:
- benefit beyond modern calibrated control;
- robustness to case/grip/ambient/aging/workload uncertainty;
- meaningful thermal/user value.

---

## Current narrow technical opportunities

Not final Strategic Bets yet:
- multi-hotspot two-phase routing;
- TPU target-fluid biphilic surface;
- MPEI hierarchical coating;
- MPEI ordered porous wick.

Watch / method reserve:
- phone-scale confined microfan tonal/aeroacoustic diagnosis — broad domestic electronic-cooling fan aeroacoustic capability is already strong; Russian differentiation is unproven.

These remain challengers or supporting mechanisms until the readiness gate is passed.


## 2026-10-04 challenger update

### MPEI / Ivanov

State:
**Reserve / Stage-0 priority #2**

New primary evidence:
- https://doi.org/10.1134/S0040601525600683
- https://doi.org/10.1016/j.pes.2026.100314

Why it matters:
- 42-month R410A two-phase stability materially improves reliability confidence;
- **China reliability comparator correction:** SCUT-led work now demonstrates copper-water VC oxygen-failure mechanisms, oxidation grading and accelerated service-life prediction, so MPEI is not differentiated by reliability in general;
- the residual MPEI signal is **actual multi-year operation of one engineered hierarchical evaporator surface**;
- 2024 dissertation closes part of the as-built coating-thickness uncertainty;
- 2017/2020 0.2 mm water-boiling/CHF lineage, including Ivanov, upgrades high-flux capability evidence to PARTIAL;
- current coating/IP/project continuity is strong.

Why it is still not a Strategic Bet:
- heat flux is far below phone-hotspot regime;
- groove geometry remains too large for direct sub-mm transfer;
- no phone-scale sealed VC.

### TPU / Feoktistov

State:
**Reserve / Stage-0 priority #3**

New process evidence:
https://doi.org/10.1016/j.surfin.2026.109390

Why it matters:
- strong surface-manufacturing durability;
- RU2812668 inventor/claim mapping is now closed to Feoktistov/Orlova/TPU;
- patent route offers a laser-only low-organic process-control branch.

Why it is still not a Strategic Bet:
- vacuum/outgassing / working-fluid contamination is unresolved;
- sealed two-phase rewetting benefit is not publicly demonstrated.

### Portfolio implication

The Stage-0 challengers now intentionally test different failure modes:
- Pavlenko: irreversible-dryout diagnostic/control transfer;
- MPEI: high-flux miniaturization of long-life surface;
- TPU: manufacturing-compatible spatial wetting.

Do not merge them into one generic "modified surface" direction.


### Stage-0 decision interpretation

Current decisions are intentionally weaker than a final Strategic Bet promotion:
- Pavlenko — **GO WITH PREREQUISITE**
- MPEI / Ivanov — **GO WITH PREREQUISITE**
- TPU / Feoktistov — **GO WITH PREREQUISITE**
- MPEI ordered wick — **HOLD**

Canonical:
../09_collaboration-roadmap/stage0_partner_technology_decision_scorecard_v01.md

A Stage-0 GO means:
**spend the minimum effort needed to falsify the mechanism under phone constraints.**

It does not mean:
**Russia-specific strategic advantage has already been proven.**


## 2026-10-04 country-differentiation convergence

### Kabov / Chinnov

Broad thin-film differentiation:
**KILLED.**

Strong China baseline:
- capillary-driven gradient-mesh thin-film boiling;
- >2000 W/cm² pressure-controlled thin-film boiling;
- broad current high-flux film activity.

Residual Russia-specific hypothesis:
**shear-driven free-surface microfilm / dry-spot / rupture / interfacial-instability control under extreme confinement.**

State:
**NARROW DIFFERENTIATION / HIGH-RISK MECHANISM RESERVE.**

Not a Strategic Bet until system overhead is bounded.

### Maydanik / ITP UB RAS

Broad LHP miniaturization:
already killed.

Residual routing / operating-limit / failure-physics differentiation:
**now also killed as a country-level Russia thesis.**

Reason:
current China academic evidence spans:
- ultra-thin multi-source LHP;
- startup / variable load;
- NCG / orientation;
- compensation chamber;
- capillary-pressure / pressure-drop failure.

Maydanik remains:
**WATCH / KNOWLEDGE RESERVE** for expert review / failure analysis.

### Portfolio interpretation

The active Russia-specific set is converging around:
1. **dielectric reversible→irreversible dry-spot / boiling-crisis diagnostics and control**;
2. long-duration surface aging;
3. shear-driven film instability / dry-spot / rupture.

This cross-cutting pattern should be tested as a possible final management thesis:
> Russia contributes failure-mechanism depth; China/our team contributes phone-scale device engineering and product integration.


### Foundational Reserve F0 — analytical failure-boundary modeling

Russia-side signal:
- ICM SB RAS / Bekezhanova–Stepanova–Goncharova exact-solution lineage;
- Lavrentyev microfilm mathematical modeling;
- linkage to Kutateladze film/interfacial experiments.

Broad thesis:
**"Russia has superior mathematics" — REJECTED.**

Residual thesis:
**exact/group-invariant analytical + stability models can expose interfacial failure boundaries with fewer experiments and better mechanism interpretability.**

China comparator:
- HIT/CAS long-wave film stability;
- Inner Mongolia nonlinear film stability;
- XJTU experimentally validated phase-change modeling;
- HUST electronics heat-source inversion.

Current state:
**FOUNDATIONAL RESERVE / not a Primary or device Strategic Bet.**

Promotion PoC:
blind stable/unstable boundary prediction in a heated confined film cell.

Internal success target:
- >=80% stable/unstable classification;
- <=15–20% boundary error;
- >=50% experiment-grid reduction;
- clearer mechanism attribution than the domestic numerical baseline.

Kill:
- no experiment reduction;
- heavy empirical calibration;
- invalid assumptions in phone-relevant regime;
- domestic method equal/better at similar cost.

IP:
protect phone-specific model-guided geometry/control/diagnostic chain, not generic mathematical equations.


### MPEI China-pressure-test closure

Broad reliability thesis:
**KILLED.**

China has strong direct evidence for:
- copper-water VC failure mechanism;
- accelerated lifetime prediction;
- oxidation QA;
- mobile two-phase device aging.

Residual MPEI hypothesis:
**actual multi-year engineered-surface aging can expose a surface/capillary degradation indicator before nominal thermal resistance fails.**

Current state:
**Strategic Reserve / Stage-0 #2 / NARROW DIFFERENTIATION RETAINED.**

Promotion requires:
- phone-compatible scaled hierarchy;
- copper-water / vacuum/process compatibility;
- repeatable link between surface/capillary aging and dryout-margin evolution;
- useful predictive value beyond domestic oxidation metrics.

Kill if:
- aging behavior is R410A / large-groove thermosyphon specific;
- domestic oxygen/oxidation metrics explain all relevant degradation;
- capillary drift provides no useful early-warning value.


### Kabov current-IP audit update

Current claim-reviewed background IP:
**RU2860581C1 — Device for Cooling Electronic Equipment Using Gas-Drop Flow and Liquid Film** — O.A. Kabov — Kutateladze Institute — 2026.

It materially strengthens:
- current activity;
- explicit electronics-cooling intent;
- partner/IP continuity.

It does not strengthen phone transfer:
- channel height ~100–2000 μm;
- local expansion ~3–7 mm;
- gas/liquid nozzles;
- active gas and liquid delivery.

Therefore Bet B remains:
**High-risk mechanism/IP Reserve.**

The relevant question is not whether the film/drop concept exists.
It is whether a phone-constrained architecture can produce a superior **thermal / power / noise / volume / failure-boundary** trade-off.
