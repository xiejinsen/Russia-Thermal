# Round 7 — Pre-Execution Minimum-Win & Restart Thresholds v0.1

Last updated: 2026-10-05

Status: **INTERNAL ANALYTICAL SCREEN — NO OUTREACH / NO EXPERIMENT**

Parent analysis:
[Quantitative Transfer Feasibility Envelope](../08_opportunities-transfer/quantitative_transfer_feasibility_envelope_round7_v01.md)

Purpose:
convert public-evidence envelopes into future GREEN / AMBER / RED decision triggers.

These are **project screening thresholds**, not published product specifications.

## 1. Common passive-route thresholds

### Geometry

| Metric | GREEN | AMBER | RED |
|---|---|---|---|
| added functional-surface height | <=35 μm | 35–50 μm | >50 μm unless architecture removes equivalent volume elsewhere |
| total functional surface/wick element | <=120 μm | 120–150 μm | >150 μm |
| clear-vapor-path screening band | >=150 μm | 90–150 μm | <90 μm without route-specific compensation model |

Note:
the vapor-path bands are analytical guards based on modern UTVC sensitivity evidence, not universal manufacturing specifications.

### Minimum performance win

A passive route earns promotion only if at least one primary metric reaches:
- >=20% higher dryout / capillary / CHF limit;
- >=15% lower evaporator thermal resistance;
- >=20% faster rewetting / recovery;
with no unacceptable geometry, fluid, process or reliability penalty.

Below these thresholds:
- do not call the route a winner;
- retain only if it creates a separate strategic reliability/IP value.

## 2. Pavlenko future decision triggers

### Geometry / transport

| Parameter | GREEN | AMBER | RED |
|---|---|---|---|
| total modified mesh functional height | <=120 μm | 120–150 μm | >150 μm |
| characteristic scale vs 100 μm published wire | >=0.8x | 0.6–0.8x | <0.6x without explicit transport compensation |
| simplified capillary-flow proxy after homothetic scaling | >=0.8x | 0.6–0.8x | <0.6x |

Interpretation:
- ~80–100 μm route is lower transport-risk;
- ~60 μm route is aggressive and needs open-area/permeability compensation;
- published 220 μm wire remains RED as direct phone-UTVC geometry.

### Restart trigger

When future access becomes available, prioritize Pavlenko only if the route can plausibly provide:
- <=120–150 μm modified functional element;
- quantified open-area/permeability retention;
- and a dryout/recovery hypothesis capable of meeting the common minimum-win threshold.

## 3. MPEI future decision triggers

### Coating

| Coating thickness | State |
|---:|---|
| <=15 μm | GREEN — consistent with current public lineage |
| 15–35 μm | AMBER |
| >35 μm | RED for current phone added-layer target |

### Groove / shell integration

Use depth-to-local-shell-thickness ratio once exact groove depth is known:

| groove depth / local shell thickness | State |
|---:|---|
| <=0.40 | GREEN |
| 0.40–0.67 | AMBER |
| >0.67 | RED unless shell/structural architecture is redesigned |

### Scale-down

Avoid treating uniform 0.5x scale as the default plan.

If a proposed geometry halves all groove dimensions without preserving hydraulic area, mark it RED for analytical review because simple laminar scaling can increase hydraulic resistance by ~16x.

Preferred future design:
- large hydraulic return path;
- fine capillary layer / secondary hierarchy;
- non-homothetic vertical reduction.

### Heat-flux ladder for future data triage

Internal 10×10 mm hotspot sensitivity scenarios:
- 5 W = 5 W/cm2;
- 10 W = 10 W/cm2;
- 20 W = 20 W/cm2.

These are not product specifications.

If future exact-hierarchy data remain below ~1 W/cm2, treat them primarily as reliability/mechanism evidence rather than phone high-flux proof.

### Restart trigger

High priority only if:
- exact groove depth/profile can fit the shell architecture;
- coating stays in <=35 μm added-layer budget;
- thin-copper route is credible;
- and the exact hierarchy can be tested far above the 42-month low-flux regime.

## 4. TPU future decision triggers

### Laser geometry

| Peak / high-percentile feature relief on thin copper | State |
|---:|---|
| <=35 μm | GREEN |
| 35–120 μm | AMBER |
| >120 μm | RED for current preferred functional-height envelope |

Do not judge the process only by mean roughness.

### Route state

**Laser-only copper:**
- geometry can be GREEN if low-relief process is retained;
- remains AMBER until sealed-process wetting retention is known.

**Hydrocarbon / biphilic:**
- analytically RED-UNKNOWN for product path until vacuum/outgassing and post-process state are proven;
- generic biphilic function alone cannot earn promotion because prior art is crowded.

### Restart trigger

Prioritize TPU when a thin-copper process can simultaneously show:
- <=35 μm preferred peak/added relief or a justified <=120 μm geometry;
- low-organic / contamination-compatible process;
- and a confined rewetting/dryout hypothesis capable of meeting the common minimum-win threshold.

## 5. Lab 6.6 future decision triggers

### Gas-drive lower-bound calculation

Use:
Pideal ≈ 0.5 · rho · v^3 · A

Then:
Pelectrical >= Pideal / actuator efficiency

before adding friction / nozzle / recirculation losses.

At rho = 1.2 kg/m3 and 30% efficiency, illustrative maximum gas cross-sections are:

| Total electrical budget | 30 m/s | 50 m/s | 70 m/s |
|---:|---:|---:|---:|
| 0.2 W | 3.70 mm2 | 0.80 mm2 | 0.29 mm2 |
| 0.5 W | 9.26 mm2 | 2.00 mm2 | 0.73 mm2 |
| 1.0 W | 18.52 mm2 | 4.00 mm2 | 1.46 mm2 |

This is intentionally optimistic.

### Packaging

Current public local expansion ~3–7 mm is RED for a simple additive internal-phone interpretation.

Future reconsideration requires one of:
- much smaller current implementation;
- lateral rather than vertical expansion;
- structural replacement / co-design;
- accessory/non-internal architecture.

### Minimum active-system win

Promotion requires:
- >=20% lower hotspot-to-ambient Rth at equal total cooling power and volume; or
- >=20% lower cooling power at equal thermal result;
- no worse acoustic outcome.

### Restart trigger

Do not promote Lab 6.6 from reserve until a credible operating point supplies:
- actual v;
- full ΔP;
- actuator efficiency/power;
- complete bounding volume;
- acoustic behavior.

## 6. Current analytical transfer-fit ordering

This is **not** the scientific/partner priority.

By geometry/process transfer ease only:
1. TPU laser-only;
2. Pavlenko thin-mesh transfer;
3. MPEI hierarchy transfer;
4. Lab 6.6 active film/droplet.

By current scientific/strategic Stage-0 priority, remain:
1. Pavlenko;
2. MPEI;
3. TPU;
4. Lab 6.6 reserve.

Reason:
the easiest structure to package is not necessarily the most differentiated research capability.

## 7. Use when execution becomes available

Future partner/experiment restart should not begin with a new literature review.

Start with this file:
1. plug in returned geometry/process/system numbers;
2. classify GREEN / AMBER / RED;
3. update the corresponding dependency module;
4. only then decide whether a physical test or targeted patent/FTO review is justified.