# Patent / Prior-Art Landscape — Film, Droplet, Gas-Assisted Electronics Cooling v0.1

Status: first claim/mechanism-level landscape. This is **not a legal freedom-to-operate opinion**.

## Executive conclusion

The broad concept of using gas-driven liquid films, microdroplets and combined film/droplet flows for electronics cooling is **not new**.

Kutateladze / associated Novosibirsk researchers show a long technical and patent lineage from at least the 2004 shear-driven-film work through a sequence of Russian patents in 2016–2026.

Therefore the collaboration whitespace is **not**:
> invent film/droplet cooling.

The more credible whitespace question is:
> can this long-developed mechanism be transformed into a **sealed, thin, low-power, adaptive phone-scale module** with a better thermal/noise/power/volume tradeoff than current VC+fan or micropump-liquid systems?

---

## 1. Technical lineage

### 2004 — shear-driven thin-film cooling research
Kabov, Kuznetsov, Legros:
**Heat transfer and film dynamics in shear-driven liquid film cooling system of microelectronic equipment**

Mechanism:
- thin dielectric liquid film;
- forced gas/vapor shear;
- micro/mini-channel;
- evaporation over electronic heat sources.

This predates the modern patent chain and is important prior art for the mechanism.

### RU2581522 — condenser as film former
Priority 2014; published 2016.

Core concept:
- vapor condenser used to form a thin, smooth liquid film;
- film transported in micro/mini-channel for electronic cooling.

### RU2649170 — combined film + droplet cooling
Published 2018.

Core concept:
- gas-driven thin liquid film;
- microdroplets target dry / high-heat-flux regions;
- droplet trajectory against gas flow;
- intended to prevent dryout and raise critical heat flux.

### RU2732624 — combined film + gas-droplet flow
Priority 2019; published 2020.

Further evolution of combined film / gas-droplet electronic cooling.

### RU2755608 — microstream + droplet cooling
Published 2021.

Core concept:
- gas-driven liquid microstreams;
- microgrooves or hydrophobic-patterned lanes;
- additional droplet injection as heat load increases.

Notable feature:
**load-adaptive staging**:
gas only -> liquid microstreams -> added droplet injection.

### RU2760884 — two-phase hybrid single-component system
Published 2021/2022.

Core concept:
- hybrid boiling / film / jet architecture;
- attempts to extend cooling length and control dryout.

### RU2773679 — combined gas + microdroplet cooling
Priority 2021; published 2022.

Independent-claim-level core visible in public records:
- liquid microdroplets injected from one channel wall;
- droplet exit angle 10–90° relative to gas / working-fluid flow;
- nozzle or nozzle row;
- target is higher heat-flux electronic-component cooling.

Google Patents:
https://patents.google.com/patent/RU2773679C1/en

### RU2821687 — microcavity-enhanced gas-sheared liquid film
Published 2024.

Core concept:
- microcavities on heated surface;
- ordered boiling-site formation;
- film rupture / dynamic contact-line intensification.

Google Patents:
https://patents.google.com/patent/RU2821687C1/en

### RU2822416 — gas flow + combined film / droplet system
Priority 2023-12-14; published 2024-07-04.

Core geometry as described by later patent literature:
- flat micro/mini-channel;
- channel height roughly 100–1000 μm;
- local expansion around heat-generating component to roughly 3–10 mm;
- gas-driven liquid film;
- droplet former for targeted cooling / spray focusing.

Important interpretation:
the apparent novelty is **not the broad film+droplet concept**; it is a more specific system geometry / spray-formation implementation.

### RU2860581 — gas-droplet + film device
Priority 2025-05-30; published 2026-04-21.

Google Patents:
https://patents.google.com/patent/RU2860581C1/en

The patent explicitly identifies RU2822416 as closest prior art and modifies it.

Reported architecture:
- channel height 100–2000 μm;
- local expansion 3–7 mm;
- gas-liquid nozzles;
- nozzle diameter ~50–300 μm;
- nozzle angle 0–45° to vertical;
- staged operation under increasing heat load:
  1. gas;
  2. gas into droplet former;
  3. liquid film added;
  4. droplet flow added at highest load.

This is strong evidence of an **active, continuing patent program**, not a one-off patent.

---

## 2. External / Chinese adjacent prior art

### CN107223004B — microchannel surface spray cooling
Priority 2017.

Google Patents:
https://patents.google.com/patent/CN107223004B/en

Core:
- microchannel heat sink;
- spray droplets;
- liquid film on porous/high-conductivity surface;
- air pump in the circulation path.

Overlap:
- spray + liquid film + microchannel + active circulation.

Difference from Kutateladze line:
- does not appear to use the same gas-shear film transport / staged gas-film-droplet architecture.

### CN111540716B — electrostatic flash-evaporation micro-spray loop
Priority around 2020.

Google Patents:
https://patents.google.com/patent/CN111540716B/en

Core:
- charged droplets;
- microchannel nozzle;
- targeted deposition on heat sink;
- closed cooling circulation / temperature controller.

Overlap:
- droplet cooling;
- micro-nozzle;
- controlled closed loop.

Difference:
- electrostatic targeted spray rather than gas-sheared thin-film architecture.

### Older global synthetic/spray cooling prior art
Global electronics cooling has long-standing patents and literature in:
- spray cooling;
- droplet impingement;
- synthetic jets;
- microchannel spray enhancement.

Therefore broad claims such as “droplet cooling of electronics” or “synthetic-jet electronics cooling” are highly crowded.

---

## 3. What RU2822416 does and does not give us

### It DOES give evidence of:
- a long-lived research group with mechanism continuity;
- repeated invention around dryout / liquid distribution / staged cooling;
- electronic-equipment-specific IP;
- ability to iterate from physics to device concepts.

### It DOES NOT establish:
- a unique global right to film/droplet cooling;
- phone-scale feasibility;
- low power;
- compact sealed circulation;
- IP68-compatible packaging;
- superiority over Chinese spray / micropump / fan-liquid systems.

---

## 4. IP whitespace hypothesis

The potentially useful new space is **system integration**, not the basic mechanism.

Candidate whitespace to investigate:

### W1 — sealed sub-mm / low-mm adaptive film-droplet module
- fully closed loop;
- minimum liquid inventory;
- no large external condenser/separator;
- low-gas-flow power;
- variable heat-load response.

### W2 — hotspot-addressable droplet injection
- targeted microdroplet delivery tied to predicted hotspot location;
- multiple chip/board hotspots;
- workload-aware actuation.

### W3 — passive or self-pumping gas/film assistance
- reduce or eliminate gas compressor/blower power;
- exploit vapor momentum, capillarity, thermal transpiration or resonant actuation.

### W4 — film/droplet + phone heat spreader hybrid
- use film/droplet only locally at the highest heat-flux zone;
- conventional VC / graphite handles lateral spreading;
- avoid cooling the full phone with a complex loop.

### W5 — acoustic / control co-design
- droplet / gas injection schedule optimized for thermal demand and acoustic signature;
- connects Kutateladze physics with control and aeroacoustic partners.

---

## 5. IP risk

### High
- broad spray/droplet cooling;
- broad gas-driven film cooling;
- generic microchannel cooling;
- generic synthetic-jet cooling.

### Medium
- specific staged gas -> film -> droplet operation;
- local channel-expansion geometry;
- droplet targeting with gas shear.

### Potentially lower / unexplored
- phone-specific closed packaging;
- multi-hotspot adaptive control;
- integration with ultra-thin VC;
- low-power self-driven circulation;
- skin-temperature-aware control.

These are research hypotheses only; professional patent counsel would be required before any FTO decision.

