# TPU / Feoktistov — 3–6 Month Stage-0 Collaboration Brief v0.1

Last reviewed: 2026-10-04

Status: **Stage-0 priority #3 — pattern/process challenger**

## Execution packet

The actionable data-request / coupon / measurement / success-kill / IP package is maintained in:
[Stage-0 Partner Data Request + Experiment Packet](stage0_packet_tpu_feoktistov_v01.md).


## Decision question

Can TPU's laser + wettability-contrast surface engineering create a **stable, low-outgassing, phone-compatible spatial wetting pattern** that improves rewetting or liquid routing inside a sealed ultra-thin VC beyond a strong modern reference?

## Current strengths

### Biphilic heat-transfer physics

**[Biphilic Heat Exchange Surfaces for Drip Irrigation Cooling Systems](https://doi.org/10.1016/j.ijheatmasstransfer.2024.125316)** — D.V. Feoktistov, A. Abedtazehabadi, A.V. Dorozhkin *et al.* — *International Journal of Heat and Mass Transfer*, 2024.

Source facts:
- laser-textured biphilic surfaces;
- superhydrophilic rings / controlled droplet localization;
- water droplet evaporation / cooling;
- dry-spot formation conditions studied.

### 2026 wettability-contrast mechanism

**[Heat-Transfer Enhancement and Evaporation Mechanisms on Roughness-Controlled Wettability-Contrast Surfaces](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)** — D.V. Feoktistov, E.G. Orlova, E.Yu. Laga *et al.* — *International Journal of Heat and Mass Transfer*, 2026.

Source facts:
- aluminum biphilic surface;
- laser processing;
- hydrophobization via alkyl-group grafting from oil thermolysis products;
- water droplet tests at 80–300 °C;
- detailed optical / PIV / PLIF diagnostics;
- strong local cooling effects in the reported open-droplet regime.

### 2026 process durability paper

**[Hydrophobization of Metal Surfaces by Laser Treatment and Subsequent Heat Treatment of Hydrocarbon Liquids](https://doi.org/10.1016/j.surfin.2026.109390)** — D.V. Feoktistov, E.G. Orlova, G.E. Kotelnikov *et al.* — *Surfaces and Interfaces*, 2026.

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
RU2812668C1 inventor/claim mapping is now closed publicly; use it as Feoktistov/Orlova partner-line background IP, then clarify only copper/mobile field relevance.

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


## Patent blocker closure — RU2812668C1

Research date: 2026-10-04

Direct patent review closes the previous attribution uncertainty.

**[Method for Forming Micro- and Nanostructures on the Heat-Exchange Surface of a Steel Product](https://patents.google.com/patent/RU2812668C1/en)** — Darya A. Kuznechenkova, Evgeniya G. Orlova, Dmitry V. Feoktistov — RU2812668C1 — Tomsk Polytechnic University — 2024.

Confirmed:
- TPU assignee;
- Feoktistov and Orlova are named inventors;
- one independent method claim;
- defined abrasive/ultrasonic-cleaning + 1064 nm nanosecond-laser window;
- disclosed steel roughness mean height ~9–18 μm, max feature height ~17.5–120 μm.

### Important technical interpretation

RU2812668 is **not** the same as TPU's hydrocarbon-derived hydrophobic route.

It gives a useful:
**laser-only / low-organic process-control branch**

while the 2026 hydrophobization route remains:
**laser + organic chemistry / higher contamination-risk branch.**

### Revised Stage-0 design

Do not test one TPU coupon family.

Test two branches on copper:
1. laser-only / low-organic;
2. biphilic/hydrocarbon-functionalized.

Matched control:
- standard oxidation / laser hydrophilic reference.

First gate before two-phase performance:
- feature height;
- wetting state;
- vacuum/process exposure;
- mass-loss / contamination proxy;
- DI-water soak;
- post-process wetting retention.

### Remaining blockers

**CLOSED publicly**
- RU2812668 inventor identity;
- Feoktistov-team linkage;
- independent process claim.

**EXPERIMENT-ONLY**
- copper transfer;
- vacuum/outgassing;
- fluid contamination;
- post-degassing/weld stability;
- sealed two-phase rewetting benefit.

### Stage-0 decision

**GO WITH PREREQUISITE.**

Prerequisite:
> the Stage-0 plan must explicitly separate the low-organic laser-only branch from the hydrocarbon-wetting branch, with contamination/process compatibility as the first gate.

TPU remains priority #3.
