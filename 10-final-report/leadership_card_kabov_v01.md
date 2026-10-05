# Leadership Decision Card — Kabov / Chinnov / Kutateladze v0.1

Last updated: 2026-10-05

Decision state: **HIGH-RISK MECHANISM/IP RESERVE — not Stage-0 top-3**

Evidence maturity: **SYSTEM_VALUE mechanism evidence / phone transfer LOW**

## Confidence badges

- **Evidence:** MEDIUM-HIGH
- **Phone Transfer:** LOW
- **Partner Readiness:** MEDIUM-HIGH
- **IP Clarity:** MEDIUM-HIGH

Interpretation: current mechanism/IP capability is credible; full phone-system feasibility is the weakest dimension.


---

# 1. Product problem

A future phone hotspot may exceed what a purely passive thin spreader can handle locally.

A gas-sheared thin liquid film could in principle provide:
- intense local evaporation;
- controllable film thickness;
- rapid hotspot response.

But it introduces new failure modes:

> film deformation → instability → dry spot → rupture / crisis.

The product question is:

> Can a shear-driven liquid-film architecture create a better thermal / power / noise / volume trade-off than passive UTVC or UTVC + microfan, while keeping film instability predictable?

---

# 2. Why Russia / why this team

Kutateladze's Kabov–Kochkin–Chinnov line has a long, coherent mechanism platform around:

- shear-driven liquid films;
- local heating;
- wave / interfacial instability;
- thermocapillary effects;
- dry spot and film rupture;
- extreme confinement;
- microelectronics cooling.

Current continuity is strengthened by:
- current Kabov ↔ Lavrentyev modeling;
- Kutateladze ↔ NSU experiment/diagnostics;
- 2026 direct electronics-cooling IP.

The differentiator is **not** headline heat flux.

It is:

> **shear-driven free-surface instability / dry-spot / rupture physics under extreme confinement.**

---

# 3. Strongest China baseline

China/global capability is already strong in:

- thin-film boiling;
- capillary-driven thin-film cooling;
- gradient mesh;
- spray/droplet cooling;
- manifold microchannels;
- embedded liquid cooling;
- electronic microfan systems.

Therefore the thesis is **not**:

> Russia has superior thin-film cooling.

The question is:

> Does the Russian shear-film mechanism produce a controllable failure boundary and system-level benefit that the stronger domestic device routes do not?

---

# 4. Residual Russia differentiation

Retained control point:

- stable/unstable film boundary;
- gas-shear / Marangoni / evaporation coupling;
- film rupture and dry-spot onset;
- load-adaptive gas / droplet / film architecture.

This is a **mechanism + IP reserve**, not a product architecture recommendation.

---

# 5. Evidence

Current / direct:

- **[Device for Cooling Electronic Equipment Using Gas-Drop Flow and Liquid Film](https://patents.google.com/patent/RU2860581C1/en)** — O.A. Kabov — RU2860581C1 — Kutateladze Institute — 2026.
- Current Kabov + V.V. Kuznetsov work on shear-driven liquid-film cooling of microelectronics is recorded in the [Siberian capability-network memo](../03_russia-institutions/siberian_theory_fluid_experiment_network_v01.md).

Foundational lineage:
- **[Locally Heated Shear-Driven Liquid Films in Microchannels and Minichannels](https://doi.org/10.1016/j.ijheatfluidflow.2006.05.010)** — O.A. Kabov, Yu.V. Lyulin, I.V. Marchuk, D.V. Zaitsev — *International Journal of Heat and Fluid Flow*.
- long film/droplet patent chain in [Film / Droplet Prior Art](../05_papers-patents/patent_prior_art_film_droplet_v01.md).

RU2860581C1 directly claims, among other elements:
- ~100–2000 μm channel;
- ~3–7 mm local expansion;
- ~50–300 μm gas-liquid nozzles;
- staged gas / droplet / gas-sheared liquid-film modes as heat load rises.

---

# 6. Phone-transfer gap

This is the largest gap of the 3 core mechanisms.

Open system penalties:
- gas supply;
- liquid supply;
- pump/blower power;
- separator/condenser volume;
- nozzle packaging;
- 3–7 mm local expansion in current claim;
- liquid inventory;
- sealing;
- acoustic signature;
- orientation / shock;
- lifetime;
- contamination / serviceability.

The risk is not primarily whether thin-film heat transfer works.

It is:

> whether the complete loop still makes sense inside a smartphone after all parasitic costs are counted.

---

# 7. Smallest discriminating PoC

Do **not** build a phone prototype first.

## Reduced feasibility cell

Russian side:
- define stable/unstable film boundary;
- predict dry-spot / rupture onset;
- provide current geometry/process and model assumptions.

Our/China side:
- impose a phone-like local transient heater;
- measure liquid inventory;
- gas/liquid flow;
- total actuator power;
- pressure drop;
- acoustic output;
- dry-spot / rupture;
- package volume.

Compare against:
1. passive strong UTVC reference;
2. UTVC + microfan / active-air reference where applicable.

The cell must account for **full-loop** overhead, not only heater-to-fluid thermal resistance.

---

# 8. Success / Kill

## Promotion requirements

No fixed literature-derived threshold exists yet.

Before promotion, require all of the following:

1. blind or predeclared prediction of instability / rupture boundary is credible;
2. stable film operation exists in a phone-relevant geometry range;
3. full-loop parasitic power is acceptable versus gained thermal margin;
4. packaging volume can be competitive;
5. acoustic burden is acceptable;
6. failure recovery is repeatable;
7. architecture provides value beyond passive UTVC / active-air alternatives.

A later internal threshold should be frozen only after the reduced-cell design is normalized.

## Kill / reframe

Kill device thesis if:
- gas/liquid parasitic power erases thermal benefit;
- separator/condenser/nozzle volume is incompatible with phone package;
- acoustic cost is unacceptable;
- instability boundary cannot be predicted/reproduced;
- passive reference reaches equivalent system-level result;
- sealing/reliability complexity dominates.

If the system fails but modeling/diagnostics remain useful:
**reframe to failure-mechanism / modeling reserve.**

---

# 9. IP / strategic control point

Kutateladze background includes a long film/droplet patent family, now including RU2860581C1.

Therefore broad foreground is **not**:
> gas + film + droplets cool electronics.

Possible joint foreground:
- phone-scale closed architecture;
- low-power/self-driven gas assistance;
- local-only film cell integrated with a passive spreader;
- workload/hotspot-aware staged actuation;
- instability-control geometry;
- film-inventory control law;
- power/noise/failure-boundary co-optimization.

This area requires explicit background-family review before any filing.

---

# 10. Leadership decision / ask

## Recommended decision

**Do not fund a full phone architecture now.**

Approve only:
- reduced feasibility modeling/bench work;
- current-data exchange;
- optional partner discussion.

## What leadership is buying

A cheap answer to:

> Is there any system-level phone path here after power, noise and volume are counted?

## Next decision

- **credible system path** → define normalized prototype and IP boundary;
- **system path fails** → keep Kabov as mechanism/modeling knowledge reserve.

---

# Management sentence

> **Kabov is scientifically strong and currently IP-active, but this is our highest-risk route because the challenge is no longer heat transfer — it is whether the complete gas/liquid system can ever beat a much simpler phone architecture.**
