# Surface/Wick Partner Readiness v0.2

Last updated: 2026-10-04

Purpose: separate technical attractiveness from actual partner readiness.

## Current Stage-0 priority

1. **Pavlenko / Kutateladze** — mechanism lead
2. **MPEI / Ivanov** — reliability/process challenger
3. **TPU / Feoktistov** — pattern/process challenger
4. **MPEI ordered wick** — pre-device

This is a Stage-0 execution priority, not a final partner ranking.

---

## 1. Kutateladze — Pavlenko line

### Current people verified

**Alexander N. Pavlenko**
- Professor;
- Head, Laboratory of Low-Temperature Thermophysics;
- Corresponding Member RAS.

Official:
https://www.itp.nsc.ru/lmpt/?lang=ru&page_id=855

Official contact:
pav@itp.nsc.ru

**Dmitry A. Shvetsov**
- Researcher;
- Candidate of Physical and Mathematical Sciences;
- Laboratory of Low-Temperature Thermophysics.

Official:
https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/13_laboratoriya_nizkotemperaturnoy_teplofiziki.html

### Technical readiness
**High for technical discussion / Stage-0 priority #1**

Strength:
- dielectric-fluid boiling;
- dryout / CHF;
- modified mesh;
- current team;
- relevant surface IP.

Main unresolved:
- process transfer to ~60–100 μm-class phone wick;
- exact added morphology/thickness/permeability;
- product-fluid transfer;
- vacuum/cycling.

### IP readiness
**Needs explicit boundary discussion**

Official project page records Huawei-related work:
https://www.itp.nsc.ru/lmpt/?lang=en&page_id=1257

Do not infer exclusivity/product use.

Detailed brief:
[partner_brief_pavlenko_stage0_v01.md](partner_brief_pavlenko_stage0_v01.md)

---

## 2. MPEI — Ivanov / Alyautdinova coating line

### Current lead verified

**Nikita S. Ivanov**
- Associate Professor;
- Candidate of Technical Sciences;
- MPEI thermophysics.

Official staff:
https://mpei.ru/sveden/employees/Pages/default.aspx?short=%2Fsveden%2Femployees%2Fpps%2Fteplofizika_01997bd2-acf9-796f-b02e-854ac5e10dd0.html

2024 dissertation:
https://mpei.ru/diss/Lists/FilesDissertations/757-%D0%94%D0%B8%D1%81%D1%81%D0%B5%D1%80%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf

### New direct reliability evidence

Performance paper:
https://doi.org/10.1134/S0040601525600683

Reported:
- ~0.1 mm-radius grooves;
- 100–200 nm Al2O3;
- Rth reduction ~2.4–3.0x in tested thermosyphon.

Long-term paper:
https://doi.org/10.1016/j.pes.2026.100314

Reported:
- R410A;
- 42-month periodic operation;
- Rth ~0.015 K/W;
- ~3x lower than smooth reference in that system;
- no pronounced coating erosion/degradation/contamination by post-test SEM/EDX;
- capillary imbibition rate decreased after aging.

### Readiness change
**Medium-high → high for Stage-0 technical discussion; priority #2**

This closes much of the prior "no long-duration two-phase evidence" gap.

It does **not** close:
- phone heat-flux transfer;
- <0.5 mm geometry;
- exact coating thickness in phone stack;
- copper compatibility.

Important non-comparability:
the MPEI thermosyphon operates at ultra-low heat flux compared with phone hotspot cooling.

Detailed brief:
[partner_brief_mpei_ivanov_stage0_v01.md](partner_brief_mpei_ivanov_stage0_v01.md)

---

## 3. TPU — Feoktistov line

### Current lead verified

**Dmitry V. Feoktistov**
- Candidate of Technical Sciences;
- Associate Professor;
- Deputy Director, Research School of High-Energy Process Physics.

Official:
https://staff.tpu.ru/personal/employee?lid=119971

### Technical evidence

Current biphilic / cooling:
https://doi.org/10.1016/j.ijheatmasstransfer.2024.125316
https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413

Surface-process durability:
https://doi.org/10.1016/j.surfin.2026.109390

This strengthens:
- laser processing;
- wettability control;
- environmental/mechanical durability.

### Readiness
**Stage-0 priority #3**

Main unresolved:
- vacuum outgassing;
- hydrocarbon-layer contamination;
- copper transfer;
- sealed two-phase durability;
- RU2812668 inventor / claim mapping.

TPU remains valuable because its optical/surface-control capability can create a highly discriminating patterning experiment.

Detailed brief:
[partner_brief_tpu_stage0_v01.md](partner_brief_tpu_stage0_v01.md)

---

## 4. MPEI — ordered-wick line

People:
- Veronika Bulaeva
- Natalia Savchenkova
- Anton Savchenkov

Primary:
https://doi.org/10.30724/1998-9903-2026-28-4-193-205

Readiness:
**pre-device**

Need:
- physical thin specimen;
- actual thickness;
- permeability;
- capillary pressure / uptake;
- repeatability.

---

## Normalized readiness table

| Team | Direct phase-change evidence | Long-duration two-phase evidence | Phone geometry | Process/IP evidence | Stage-0 priority |
|---|---|---|---|---|---|
| Pavlenko/Kutateladze | **strong** | limited | low-medium | strong / gaps | **#1** |
| MPEI Ivanov | strong in thermosyphon | **strong — 42 months R410A** | low | strong | **#2** |
| TPU Feoktistov | strong surface/open-droplet | low for sealed two-phase | low | medium-strong | **#3** |
| MPEI ordered wick | modeled | none | low | incomplete | pre-device |

No team is contract-ready.

Current order is based on the smallest evidence gap to a discriminating Stage-0 experiment, not prestige.
