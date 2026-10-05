# A3 — RU2860581C1: staged gas / droplet / liquid-film electronic cooling

> **10Q card:** A3 · **Evidence class:** Patent · **Track:** A. Kutateladze / Pavlenko background IP
>
> Navigation: [Patent 10Q Index](README.md) · [10Q Method](../../mobile_thermal_insight_10q_method.md)

**[Device for Cooling Electronic Equipment Using Gas-Drop Flow and Liquid Film](https://patents.google.com/patent/RU2860581C1/en)** — O.A. Kabov — RU2860581C1 — Kutateladze Institute of Thermophysics SB RAS — 2026.

**Review status:** DIRECT PATENT / INDEPENDENT-CLAIM REVIEWED.

### P1 — engineering problem
Maintain efficient cooling of an electronic heat source across a wide and changing heat-load range, including local high-heat-flux conditions.

### P2 — target relevance
**DIRECT ELECTRONICS / PARTIAL PHONE.**

Electronics cooling is explicit.
Phone relevance remains partial because the claimed system uses active gas/liquid delivery and millimeter-class local expansion.

### P3 — prior-art crowding
Broad gas-driven film, spray/droplet and microchannel cooling are crowded.

The Kutateladze line itself has older patents:
- RU2732624;
- RU2755608;
- RU2773679;
- RU2822416;
plus older shear-driven film papers.

Therefore the strategic value is current capability/IP continuity, not broad novelty.

### P4 — independent-claim control point
Required architecture includes:
- electronic heat-generating component on substrate;
- flat micro-/mini-channel ~100–2000 μm high;
- local expansion over the component ~3–7 mm;
- gas-flow operation;
- droplet-forming device with one or more gas-liquid nozzles;
- nozzle angle ~0–45°;
- nozzle diameter ~50–300 μm;
- liquid supplied into the channel to form an evaporating film driven by gas;
- additional liquid supplied to the droplet former at highest load.

The operating logic is load staged:
gas
→ gas-assisted droplet mode
→ gas-sheared liquid film
→ combined film + droplets.

### P5 — dependent claims / embodiment bounds
Public record indicates a compact claim set; the principal useful numeric boundaries are embedded in the independent claim / disclosed embodiment rather than a deep dependent-claim ladder.

Before legal/FTO use, family/status and exact Russian-claim wording should be reviewed by counsel.

### P6 — implementability / productization
Positive:
- explicit device architecture;
- electronics target;
- load-adaptive mode logic;
- current institute/IP continuity.

Negative for phone:
- active gas/liquid delivery;
- local 3–7 mm expansion;
- nozzle / pumping system;
- likely parasitic power and acoustic cost;
- packaging complexity.

### P7 — inventor / assignee / lineage
Inventor:
**O.A. Kabov.**

Assignee:
**Kutateladze Institute of Thermophysics SB RAS.**

This is a strong current partner-readiness/IP-lineage signal.

### P8 — overlap / design-around
High overlap with Kutateladze's own older film/droplet background IP.

Potential design-around / foreground hypotheses:
- passive or self-driven gas assistance;
- much thinner sealed phone package;
- local-only hybrid evaporator embedded in an existing VC/spreader;
- workload/hotspot-aware actuation;
- different droplet-generation mechanism.

This is technical prior-art analysis, not legal FTO.

### P9 — background vs foreground
Treat RU2860581 and related film/droplet family as **Kutateladze background IP**.

Do not define joint foreground as:
> use gas + liquid film + droplets to cool electronics.

Possible foreground:
> phone-constrained architecture/control that achieves a new power-volume-noise-failure-boundary trade-off.

### P10 — next action
1. add RU2860581 to Kabov background-IP discussion;
2. request current prototype / parasitic-power / volume data if partner engagement starts;
3. run system-level feasibility before any Stage-1 device investment;
4. only then do deeper family/legal review.

**Decision:** **CURRENT BACKGROUND IP / PARTNER-ACTIVITY UPGRADE; PHONE TRANSFER STILL LOW.**

Prior-art pressure: **HIGH**  
Decision impact: Kabov current-activity and G6/G7 confidence up modestly; strategic rank unchanged  
Claim-review completeness: independent claim reviewed; legal family review not complete  
Open questions: parasitic power, acoustic cost, sealed phone volume, exact prototype maturity  
Primary patent source: Google Patents RU2860581C1

### Round-4 system-overhead evidence lock

The patent description itself supplies useful negative feasibility evidence.

It states that prior gas-sheared film systems may require gas-phase velocities **often above 50 m/s** for effective operation.

It also explains:
- film systems commonly operate in flat micro/mini-channels around **1–2 mm** high;
- a liquid jet through a ~100–300 μm nozzle typically needs about **5–7 mm** distance to develop a mature microdroplet stream;
- very small channels therefore create a spray-development / focusing conflict.

The claimed 2026 architecture responds with:
- channel height ~**100–2000 μm**;
- local expansion ~**3–7 mm**;
- gas-liquid nozzle diameter ~**50–300 μm**;
- load-staged gas / film / droplet modes.

Decision implication:
the miniaturization problem is not merely channel thickness.
The public patent itself confirms a **system-level gas-flow / spray-development / volume trade-off**.

Therefore Stage-0 promotion now requires measured:
- gas and liquid flow;
- channel + loop pressure drop;
- actuator/compressor electrical power;
- full module volume;
- acoustic behavior.

Do not accept "100 μm-class channel" as evidence of phone readiness without these system-budget measurements.
