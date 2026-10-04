# MPEI Multi-Year Engineered-Surface Aging vs China Pressure Test v0.1

Last updated: 2026-10-04

Status: **CURRENT decision memo**

## Purpose

Pressure-test the remaining MPEI / Ivanov country-level differentiation hypothesis:

> MPEI may retain unusual evidence in **actual multi-year operation of one engineered hierarchical two-phase evaporator surface**, with post-operation morphology / capillary-aging evidence.

This memo explicitly separates:
- **actual calendar-time two-phase operation**;
- **accelerated aging / Arrhenius lifetime prediction**;
- **post-failure analysis**;
- **manufacturing QA / oxidation grading**;
- long-duration material tests that are not a two-phase evaporator-surface analogue.

---

# 1. Russia evidence — MPEI / Ivanov

## Core paper

**[Long-term operational stability of a hierarchical evaporator surface in a two-phase thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.

### Source facts

- engineered hierarchical evaporator:
  - microgrooves;
  - Al2O3 nanoparticle layer;
- working fluid:
  - R410A;
- device:
  - two-phase thermosyphon;
- actual campaign:
  - **42 calendar months**;
- approximately monthly steady-state checks;
- repeated thermal cycling / periodic phase transition;
- representative load around 100 W;
- modified thermosyphon thermal resistance remains ~0.015 K/W;
- approximately 3x lower than smooth-surface thermosyphon in the reported system;
- post-operation analysis includes:
  - surface morphology / structural integrity;
  - residual capillary behavior;
  - discussion of surface chemical aging;
- thermal performance remains comparatively stable while capillary imbibition shows aging/degradation.

### Why this evidence is unusual

This is not:
- a 30-day high-temperature storage test;
- a short cyclic durability demonstration;
- an Arrhenius extrapolation;
- a failed-device forensic study.

It is a **real multi-year calendar-time campaign on one engineered two-phase functional surface**.

### Important limitation

It is not a smartphone VC:
- R410A rather than DI water;
- thermosyphon / gravity-influenced architecture;
- groove scale much larger than phone wick target;
- lower heat-flux regime;
- no sealed 0.4 mm-class VC demonstration.

Therefore the evidence is strong for **aging-method / surface-state knowledge**, not direct phone product readiness.

---

# 2. Strong China reliability baseline

## China A — oxygen-driven VC failure mechanism

**[Experimental study on the failure mechanism of the heat transfer performance under the action of oxygen of a copper–water vapour chamber without structural damage](https://doi.org/10.1016/j.applthermaleng.2025.125619)** — Xiaojun Guo, Yong Li, Wenjie Zhou, Rui Tang, Yue Tian, Ang Gao, Yang Yang — *Applied Thermal Engineering*, 2025.

Lead capability:
South China University of Technology + Guangdong collaborators.

### Source facts

- copper-water vapor chambers;
- failed units retain:
  - flatness;
  - seal integrity;
  - internal structural integrity;
  - wick pore structure;
- failed wick surface shows higher oxygen content;
- copper / Cu2O / CuO transformation is linked to:
  - hydrophilic → hydrophobic transition;
  - capillary pressure moving from positive toward negative;
  - reduced liquid return;
  - increased evaporation thermal resistance;
  - eventual thermal failure;
- vacuum process is identified as a key oxygen-control lever.

### Decision value

China has direct **product-path failure physics** and process control.

This is more smartphone/VC relevant than the MPEI R410A thermosyphon.

But it is primarily **failed-device mechanism analysis**, not an engineered-surface multi-year prospective campaign.

---

## China B — accelerated lifetime prediction

**[Research on a rapid prediction method for the service life of copper-water vapour chambers](https://doi.org/10.1016/j.applthermaleng.2026.131067)** — Xiaojun Guo, Yong Li, Wenjie Zhou, Yue Tian, Yang Yang, Fan Yang — *Applied Thermal Engineering*, 2026.

### Source facts

- copper-water vapor chambers;
- high-temperature aging:
  - **150–200 °C**;
- XPS / EDS surface analysis;
- wick oxidation confirmed as primary failure mechanism;
- activation energy obtained;
- rapid service-life prediction method established;
- Arrhenius-style accelerated-life framework.

### Decision value

This is strong product reliability engineering.

But:
**predicted multi-year life is not actual multi-year operation.**

Do not compare an extrapolated 13-year-equivalent result with a 42-month actual calendar-time campaign as if they were the same evidence type.

---

## China C — wick oxidation detection / production QA

**[Detection and grading of oxidation for copper–water heat pipe wicks based on the machine learning methods](https://doi.org/10.1016/j.applthermaleng.2025.126437)** — Xiaojun Guo, Yong Li, Guangwen Huang, Rui Tang, Fan Yang, Zhifeng Xin, Bowen Wu — *Applied Thermal Engineering*, 2025.

### Source facts

- heat-pipe wick oxidation;
- natural-oxidation sample set;
- color/image dataset;
- machine vision / machine learning;
- capillary climb and thermal-resistance relation;
- production-oriented oxidation grading.

### Decision value

China has strong reliability QA / manufacturability depth.

This does not supply actual multi-year engineered-surface operation.

---

## China D — mobile device accelerated-aging evidence

**[A thin and lightweight miniature loop heat pipe for cooling mobile electronic devices](https://doi.org/10.1016/j.device.2025.100783)** — Qingjie Cui, Ziyi You, Xiang Ma, Xiaoping Yang, Yonghai Zhang, Jinjia Wei *et al.* — *Device*, 2025.

### Source facts

- Xi'an Jiaotong University-led;
- 0.7 mm thickness;
- 3.95 g;
- mobile-electronics target;
- accelerated aging:
  - **30 days at 90 °C**;
- stable performance reported after aging.

### Decision value

This is much more directly mobile-scale than MPEI.

However:
- duration is short compared with 42 months;
- it is accelerated aging;
- public evidence does not provide the same hierarchy-specific multi-year morphology + capillary-aging evolution.

---

# 3. Long-duration China near-misses that do not close the gap

Targeted search recovered Chinese work with:
- 1000 h high-temperature steam oxidation of coatings;
- 10000 h thermal exposure of boiler-tube coatings;
- multi-year / field thermosyphon operation in permafrost;
- long-duration materials degradation.

These are valuable materials/reliability evidence but fail the project's comparison gate because they do not simultaneously provide:

1. an engineered **two-phase evaporator functional surface**;
2. electronics/mobile-relevant heat-transfer function;
3. actual operation of that same functional surface over multi-year calendar time;
4. thermal-performance drift;
5. post-operation morphology / chemistry / capillary-function linkage.

Therefore they are **not exact comparators** to the MPEI claim.

---

# 4. Evidence-type normalization

| Evidence type | MPEI / Ivanov | China strongest public baseline | Comparative read |
|---|---|---|---|
| actual calendar-time operation | **42 months** | no matched >= multi-year engineered VC/evaporator surface recovered | **MPEI edge** |
| same engineered surface tracked over time | yes | not matched publicly | **MPEI edge** |
| post-operation morphology | yes | yes in failure/aging studies | both strong |
| post-operation chemistry | partial / discussed | **strong XPS/EDS** | **China stronger** |
| capillary aging | yes | strong oxidation/capillary linkage | both strong |
| product-path copper-water VC | no | **yes** | **China stronger** |
| vacuum/process failure link | no direct phone path | **yes** | **China stronger** |
| accelerated lifetime model | no main advantage | **yes, 150–200 °C** | **China stronger** |
| production QA | no | **yes, oxidation grading** | **China stronger** |
| mobile geometry | low | **0.7 mm mLHP + UTVC ecosystem** | **China stronger** |
| hierarchy-specific multi-year aging | **yes** | no exact public match recovered | **MPEI edge** |

---

# 5. What is killed

Do not claim:

- Russia has broader two-phase reliability leadership;
- China lacks vapor-chamber aging/failure knowledge;
- MPEI has better product reliability engineering;
- 42 months directly proves smartphone lifetime;
- R410A thermosyphon reliability transfers automatically to copper-water VC.

All are unsupported.

---

# 6. What survives

The residual MPEI differentiation is:

> **actual multi-year operation and aging observation of one engineered hierarchical evaporator surface, preserving thermal performance while revealing morphology/capillary-state evolution.**

This is an **evidence-method / mechanism-history advantage**, not a phone-device advantage.

---

# 7. Why this may still matter to smartphone thermal R&D

Product engineering often relies on:
- accelerated aging;
- process QA;
- short cycling.

Those are necessary and China is strong at them.

MPEI's unusual evidence can complement them by helping answer:

> Which surface properties can drift substantially over real calendar time without immediately showing up as thermal-resistance failure?

That question matters because:
- capillary degradation may precede obvious thermal failure;
- surface chemistry/wettability can drift while nominal steady-state Rth remains stable;
- a phone design may need an early reliability indicator rather than waiting for a thermal-performance collapse.

Potential transferred control point:
**surface-state early-warning / aging indicator linked to future dryout margin**, not generic lifetime prediction.

---

# 8. Revised MPEI Stage-0 question

Old question:
> can the 42-month hierarchical surface be miniaturized?

Still necessary, but incomplete.

New decision question:

> Can MPEI identify a hierarchy-specific **surface-state / capillary aging indicator** that predicts loss of dryout margin before nominal thermal resistance degrades, and can that indicator survive scale-down to a phone-like copper-water surface?

Stage-0 therefore needs:
- initial and post-cycle morphology;
- coating thickness / integrity;
- capillary uptake;
- permeability;
- contact angle / wetting state where meaningful;
- high-flux dryout margin;
- repeated vacuum / thermal / DI-water process exposure;
- correlation between capillary-state drift and thermal/dryout behavior.

---

# 9. Promotion / Kill logic

## Promote if

A scaled copper-water MPEI surface shows:
- phone-compatible geometry;
- repeatable hierarchy;
- stable process/vacuum compatibility;
- measurable relationship between surface-state/capillary aging and dryout-margin evolution;
- an early-warning or durability insight not already available from domestic oxygen/oxidation QA methods.

## Downgrade if

- the 42-month advantage is entirely R410A / large-groove / gravity-thermosyphon specific;
- scale-down removes capillary benefit;
- domestic oxygen/oxidation metrics predict all relevant aging equally well;
- no useful early indicator emerges before thermal performance changes;
- MPEI cannot provide enough historical aging data to build a transfer model.

---

# 10. Current partner decision

Previous:
**Stage-0 Priority #2 / narrow differentiation + complementary reliability candidate.**

New:
**Stage-0 Priority #2 / RETAIN NARROW DIFFERENTIATION.**

Confidence in the narrow country-level distinction increases modestly because no exact independent-China public analogue was recovered after targeted multi-year / 1000 h / 5000 h / 10000 h searches.

Important wording:
> **No matched public China analogue recovered** is not proof that China does not possess such internal data.

---

# 11. Management wording

Use:

> China is stronger in copper-water VC product reliability engineering — oxygen-driven failure analysis, accelerated lifetime prediction, oxidation QA and mobile-scale devices. MPEI's narrower complementary value is unusual **actual 42-month observation of one engineered hierarchical evaporator surface**, including the fact that capillary aging can emerge while integral thermal performance remains comparatively stable.

Do not use:

> Russia has better long-term reliability than China.

---

# 12. Next gate

The public comparator gap is now sufficiently closed.

For MPEI, the next material evidence should come from:
1. historical 42-month dataset access;
2. exact fresh-vs-aged capillary curves;
3. current surface chemistry/morphology data;
4. phone-scale hierarchy coupon;
5. DI-water / vacuum / cycling transfer.

Generic China lifetime searching should stop unless a specific multi-year engineered-surface paper is identified.
