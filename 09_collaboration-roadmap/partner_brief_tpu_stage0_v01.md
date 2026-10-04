# TPU / Feoktistov — 3–6 Month Stage-0 Collaboration Brief v0.1

Last reviewed: 2026-10-04

Status: **Stage-0 priority #3 — pattern/process challenger**

## Decision question

Can TPU's laser + wettability-contrast surface engineering create a **stable, low-outgassing, phone-compatible spatial wetting pattern** that improves rewetting or liquid routing inside a sealed ultra-thin VC beyond a strong modern reference?

## Current strengths

### Biphilic heat-transfer physics

2024:
**Biphilic heat exchange surfaces for drip irrigation cooling systems**
https://doi.org/10.1016/j.ijheatmasstransfer.2024.125316

Source facts:
- laser-textured biphilic surfaces;
- superhydrophilic rings / controlled droplet localization;
- water droplet evaporation / cooling;
- dry-spot formation conditions studied.

### 2026 wettability-contrast mechanism

https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413

Source facts:
- aluminum biphilic surface;
- laser processing;
- hydrophobization via alkyl-group grafting from oil thermolysis products;
- water droplet tests at 80–300 °C;
- detailed optical / PIV / PLIF diagnostics;
- strong local cooling effects in the reported open-droplet regime.

### 2026 process durability paper

**Hydrophobization of metal surfaces by laser treatment and subsequent heat treatment of hydrocarbon liquids**
https://doi.org/10.1016/j.surfin.2026.109390

Publisher highlights:
- AlMg3 alloy;
- nanosecond laser texture;
- thermolysis-derived hydrocarbon hydrophobic layer;
- water contact angle up to ~169°;
- roll-off angle <10°;
- durability under humidity, saline corrosion and sand abrasion.

This strengthens **surface-manufacturing durability**, but it is not two-phase VC cycling evidence.

## Important manufacturing concern

The 2026 hydrophobization route includes:
- laser texture;
- surface heating around ~270 °C in the described process discussion;
- hydrocarbon thermolysis/deposition.

For a sealed phone VC this creates new questions:
- outgassing under vacuum;
- organic residue compatibility;
- long-term fluid contamination;
- copper compatibility;
- post-weld thermal stability.

Therefore "durable in sand/saline/humidity" does not equal "VC-manufacturing compatible."

## Proposed 3–6 month package

### Phase T0 — process transfer check
Weeks 0–4

Request:
1. exact laser fluence/pulse/repetition/pitch for best biphilic surfaces;
2. texture depth / roughness;
3. hydrophobic-layer chemistry and thickness;
4. processing temperature/time;
5. contact-angle drift with aging;
6. any vacuum/outgassing data;
7. any copper/stainless tests;
8. any boiling or sealed two-phase data;
9. any exposure to refrigerants / non-water working fluids.

Patent request:
clarify inventor/claim mapping for TPU RU2812668C1 if relevant to the current team.

### Phase T1 — phone-metal coupon
Month 1–2

Substrate:
- copper primary;
- AlMg3 process-control coupon.

Create:
- T-A strong reference hydrophilic/oxidized;
- T-B TPU superhydrophilic pattern;
- T-C TPU biphilic pattern;
- T-D lower-organic / low-outgassing variant if possible.

Measure:
- profile height;
- contact angle;
- pattern fidelity;
- capillary directionality;
- mass/chemistry.

### Phase T2 — process compatibility
Month 2–3

Run:
- water soak;
- vacuum/degassing-process simulation;
- thermal exposure matching intended VC manufacturing;
- 100 cycles.

Measure:
- wetting contrast retention;
- outgassing/contamination proxy;
- morphology;
- adhesion.

Kill:
- hydrocarbon layer materially contaminates fluid or vacuum process;
- contact contrast collapses;
- equivalent performance is achievable with simpler standard oxidation/laser process.

### Phase T3 — rewetting-specific test
Month 3–5

Do not use open-droplet cooling as the primary metric.

Instead compare:
- thin liquid redistribution;
- rewetting after local dryout;
- capillary directionality;
- transient recovery.

Question:
does spatial wetting pattern create a new liquid-routing function inside confinement?

### Phase T4 — Stage-1 decision
Month 5–6

Advance only if:
- process fits phone metal / thickness;
- vacuum/fluid compatibility passes;
- rewetting or routing benefit exceeds strong generic reference;
- foreground IP is narrower than generic biphilic patterning.

## Proposed role split

### TPU
- laser process;
- wettability pattern design;
- optical flow/surface diagnostics;
- durability/process optimization.

### Our / phone engineering side
- copper VC substrate;
- low-outgassing manufacturing boundary;
- sealed-fluid environment;
- strong reference;
- transient/moving-hotspot use case.

## Current judgment

**KEEP as Stage-0 priority #3.**

TPU has strong process/pattern expertise and improving durability evidence.

MPEI moves ahead of TPU in current Stage-0 priority because MPEI now has 42-month two-phase working-fluid durability evidence, while TPU remains mainly open-droplet / dry-surface durability.

TPU can move back ahead if it demonstrates:
- vacuum-compatible patterned wetting;
- sealed two-phase rewetting benefit;
- copper/process compatibility.

## Evidence confidence

- current team/activity: HIGH
- patterning process: HIGH
- open-droplet heat-transfer evidence: HIGH
- mechanical/environmental surface durability: MEDIUM-HIGH
- sealed two-phase durability: LOW
- phone process compatibility: LOW
- specific patent mapping: LOW-MEDIUM
