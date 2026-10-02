# Five Whitespace Hypotheses — Success / Kill Criteria v0.1

Status: research screening definitions. These are designed to **falsify** attractive ideas quickly.

---

# H1. Sealed thin-film / droplet hybrid cooling

## Technical hypothesis
A sealed system using thin liquid film and/or droplets, optionally driven by gas shear, can reject phone-class heat with a better volume/power/noise tradeoff than conventional microfan or pumped-liquid baselines.

## Russia signal
Kutateladze Institute:
- thin-film / gas-liquid flow;
- droplet generation;
- microchannels;
- electronics-cooling patent RU 2822416.

## Minimum PoC
Three same-envelope systems:
A. VC + rotary microfan  
B. pumped liquid loop  
C. sealed film/droplet hybrid

Heat:
- 15 W sustained
- 25 W transient

Cooling power:
- 0.5 / 1.0 / 2.0 W sweep

## Success criteria
Advance if C demonstrates at least one meaningful frontier shift while not catastrophically worsening the others:
- >=20% lower hotspot-to-ambient thermal resistance at equal cooling power and volume; or
- >=20% lower cooling power at equal thermal result; or
- materially lower tonal/noise signature at equal heat rejection;
- stable operation in all required orientations;
- no uncontrolled liquid accumulation or dryout over 100 h.

## Kill criteria
Kill or radically redesign if:
- orientation causes >20% thermal-performance loss;
- stable liquid distribution cannot be maintained;
- pump/gas-drive power erases thermal benefit;
- required sealing / reservoir volume pushes module beyond the target envelope;
- clogging / contamination causes repeatability failure;
- external airflow path destroys realistic ingress protection.

## Key unanswered question
Can the mechanism be **closed and self-contained**, rather than a laboratory flow loop?

---

# H2. Sub-mm phase-change surface / capillary physics

## Technical hypothesis
Russian boiling / porous-surface / wettability expertise can improve an ultra-thin VC or evaporator beyond what current Chinese product-oriented designs achieve.

## Russia signal
Pavlenko / Kutateladze:
- dielectric-fluid boiling;
- capillary-porous coatings;
- modified micro/nano surfaces;
- CHF / dryout physics.

## Minimum PoC
Use an existing sub-mm VC-style envelope.

Baseline:
- reference mesh / sintered / etched wick

Russian-inspired variants:
- microstructured coating;
- capillary-porous layer;
- wettability-engineered surface.

## Success criteria
At the same thickness and fluid inventory:
- >=20% higher dryout/CHF limit; or
- >=15% lower evaporator thermal resistance; or
- >=20% faster recovery after transient dryout;
- no loss in startup reliability;
- manufacturable coating over relevant phone-scale area.

## Kill criteria
- benefit only appears at thickness / pressure / fluid conditions incompatible with phones;
- coating increases thermal contact resistance;
- capillary benefit disappears after cycling;
- surface process cannot be scaled / controlled;
- benefit is already matched by Chinese wick/surface literature and patents.

## Key unanswered question
Does Russian mechanism depth translate into a **sub-mm manufacturable structure**, not just a better boiling curve in a test cell?

---

# H3. Multi-hotspot two-phase heat routing

## Technical hypothesis
A routed two-phase device can outperform a conventional large-area VC when heat sources are spatially separated and time-varying.

## Russia signal
Maydanik / ITP Ural:
- LHP operating limits;
- multi-source history;
- flexible transport;
- capillary routing.

## Minimum PoC
Phone-sized thermal test board with:
- CPU hotspot
- GPU/NPU hotspot
- camera/ISP hotspot
- modem/PMIC hotspot
- programmable time-varying workload traces

Compare:
A. large-area VC  
B. ultra-thin Chinese-style LHP reference  
C. Russian-inspired routed/multi-source topology

## Success criteria
At the same total thickness class:
- >=15% lower maximum hotspot temperature over dynamic traces; or
- >=20% better temperature uniformity across sources;
- stable startup in all orientations;
- no source starving another during hotspot migration;
- transient overshoot materially below the VC baseline.

## Kill criteria
- compensation chamber / evaporator cannot be reduced to phone-compatible thickness;
- startup latency is longer than representative workload bursts;
- routing benefit disappears when source positions change;
- orientation sensitivity is high;
- equivalent Chinese ultra-thin LHP solution matches the result with less complexity.

## Key unanswered question
Is there a real benefit from **routing** heat, versus simply using a larger/better VC?

---

# H4. Confined microfan aeroacoustics / active tonal control

## Technical hypothesis
Aeroacoustic methods can reduce perceptually annoying tonal noise at equal useful airflow / pressure, improving the cooling-noise Pareto frontier of phone-scale blowers.

## Russia signal
TsAGI / PNRPU / CIAM:
- fan aeroacoustics;
- source identification;
- microphone arrays;
- active/passive noise control.

## Minimum PoC
Same:
- blower motor class;
- outer envelope;
- inlet/outlet opening;
- cooling electrical power.

Design variants:
A. product-style baseline  
B. geometry-only aeroacoustic optimization  
C. geometry + active tonal-control concept if feasible

## Success criteria
At equal system operating point:
- >=3 dB reduction in dominant tonal component; or
- large reduction in tonal prominence / sharpness without >5% thermal penalty;
- no increase in vibration;
- no more than ~10% additional control power for active approach;
- repeatable benefit across at least three system impedances.

## Kill criteria
- only free-air noise improves while installed system worsens;
- thermal performance loss >10%;
- control system consumes excessive power or volume;
- solution requires acoustic treatment volume unavailable in a phone;
- China baseline methods achieve the same result with simpler geometry.

## Key unanswered question
Can aerospace-grade source-control methods still work when the fan, duct and casing dimensions are only centimeters / millimeters?

---

# H5. Compute + cooling joint adaptive control

## Technical hypothesis
Joint control of CPU/GPU/NPU workload and active cooling can improve sustained user performance while reducing skin-temperature excursions, cooling energy and acoustic peaks.

## Russia signal
SPbU:
- Android DVFS;
- SPSA stochastic online optimization;
- EAS context;
- real smartphone experiments.

## Minimum PoC
Android prototype with controllable:
- CPU/GPU frequency;
- task placement;
- active fan or pump;
- workload quality / FPS option.

Workloads:
- game;
- camera/video;
- local AI inference;
- mixed workload.

## Baselines
A. stock thermal governor  
B. reactive fan/pump control  
C. predictive/model-based controller  
D. stochastic/adaptive joint controller

## Success criteria
Against A/B:
- >=10% sustained-performance improvement under the same skin-temperature ceiling; or
- >=15% lower cooling energy at equal performance; or
- >=20% reduction in time spent above 42°C in high-contact zones;
- fewer / smaller high-RPM acoustic events;
- controller overhead negligible relative to workload;
- adapts to case / ambient / grip changes without retraining.

## Kill criteria
- convergence is slower than workload thermal transients;
- oscillatory fan/DVFS behavior appears;
- optimization causes user-visible frame-time instability;
- gains vanish once modern OEM thermal policies are used;
- controller needs device-specific calibration as expensive as a detailed model.

## Key unanswered question
Can model-light adaptation handle **real thermal uncertainty** better than an OEM-style calibrated controller?

---

# Cross-hypothesis decision rule

A hypothesis advances only if:
1. it beats a relevant Chinese/product baseline on a normalized phone metric;
2. the advantage survives product constraints;
3. the Russian team brings a capability not cheaply reproducible elsewhere;
4. there is a clear 3–6 month discriminating PoC.

If not, kill or downgrade the direction early.
