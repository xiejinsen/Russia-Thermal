# Institute of Thermal Physics UB RAS — Loop Heat Pipe Lab Deep Dive v0.2

Status: strong evidence of current LHP capability; smartphone feasibility unresolved.

## Current lab

**Laboratory of Heat-Transfer Devices**

Current official staff page:
https://itpuran.ru/index.php/sotrudniki

Current listed team:
- **Yury F. Maydanik** — head of laboratory
- **Mariya A. Chernysheva** — senior researcher
- **Sergey V. Vershinin** — senior researcher
- Anna S. Panasenko — research engineer
- support staff

The institute's official structure describes a long-running LHP program and notes Maydanik's large patent/publication record:
https://itpuran.ru/index.php/about-us/struktura-instituta

## Why this group is technically distinct

Their value is not generic heat-pipe knowledge. The line includes:
- loop heat pipes with separated vapor/liquid transport;
- flat evaporators;
- flexible/long transport paths;
- high heat-load concentration;
- multiple/distributed heat sources;
- coupling with active temperature control / thermoelectric elements.

This maps to a future problem in smartphones: multiple, spatially separated and time-varying hotspots.

## Fresh evidence

### 2025 — operating limits / design rules
Chernysheva & Maydanik:
**An Analysis of the Key Serviceability and Efficiency Conditions of Loop Heat Pipes**
Thermal Engineering, 2025.
DOI: https://doi.org/10.56304/S0040363625701152

The paper analyzes operating conditions, working fluid / wick / pressure-loss relationships and efficiency boundaries.

### 2025 heat-pipe symposium — miniature flat evaporator
Maydanik, Vershinin, Chernysheva:
**Copper-Water Loop Heat Pipes with Flat Evaporators: Development, Tests and Application**

Proceedings:
https://ihpcs.org/wp-content/uploads/2025/04/Final-Proceedings-Update-16.4.25-V.1-2.pdf

Reported miniature LHP case:
- flat evaporator thickness: **2.3 mm**
- heat-source area: **6.6 cm²**
- maximum load: **20 W** with natural-air condenser cooling
- maximum load: **44 W** with forced convection

This is still thick for a smartphone stack, but it establishes a more relevant miniaturization starting point than conventional spacecraft-scale LHPs.

### 2024 — flexible long LHP
Maydanik, Vershinin, Chernysheva:
DOI: https://doi.org/10.31857/S0040364424010088

### Multi-source electronics relevance
Pastukhov & Maydanik studied LHP cooling of multiple heat sources of different power:
https://tptmai.ru/eng/publications.php?ID=111348&eng=Y&mobile=Y

The paper explicitly frames the problem around current electronics with spatially distributed heat-generating elements.

## Mobile-transfer opportunity

### Main hypothesis
A phone-scale LHP may become valuable **not because it beats a VC at uniform spreading**, but because it can route heat from multiple hotspots to a deliberately chosen rejection zone.

Potential architecture:
```
CPU/GPU/NPU/camera/modem hotspots
          ↓
  distributed collection
          ↓
capillary two-phase transport
          ↓
edge/back-cover/active-convection rejection zone
```

## Kill criteria

A smartphone LHP concept should be rejected if it cannot satisfy:
- sub-phone-stack thickness target;
- any-orientation startup;
- transient response fast enough for phone workloads;
- shock/bend reliability;
- condenser area compatible with industrial design;
- low-cost scalable wick manufacturing;
- acceptable working-fluid and sealing requirements.

## Highest-value collaboration question

Not “Can you make us an LHP?”

Instead:

> What is the **minimum viable LHP topology** that preserves capillary routing benefits when evaporator/compensation-chamber thickness is pushed toward smartphone limits?

That is a meaningful joint research question and is falsifiable.
