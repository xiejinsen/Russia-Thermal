# PAPER-RU-FILM-002 — Deep Read

paper_id: PAPER-RU-FILM-002
deep_read_level: TIER_A
review_status: PUBLISHER_FULL_WEB_TEXT_REVIEW
reviewed_at: 2026-10-07
why_it_matters: This paper is unusually strong evidence of experimental access to gas-liquid flow physics at 12.5 micrometers confinement and directly maps instability / wettability-controlled flow-pattern transitions.
decision_use: RUSSIA_EXTREME_CONFINEMENT_FLOW_MAP
related_claims: CLM-FILM-002; CLM-FILM-005
related_capabilities: CAP-KUT-L66-SHEAR-FILM-INSTABILITY
related_directions: DIR-EXTREME-FILM-RESERVE

## Q1 — Problem and target mapping

The paper asks how adiabatic gas-liquid two-phase flow behaves in an extremely shallow slit channel where existing microchannel flow maps are poorly applicable.

The channel height is 12.5 μm and width 10 mm, giving an aspect ratio of 1:800.

This is highly relevant to extreme-confinement physics, but not directly to a heated phone cooler.

## Q2 — Novelty vs strong baseline

The important contribution is the combination of:

- 12.5 μm confinement;
- very high width/height aspect ratio;
- five liquids spanning different physical properties;
- broad gas/liquid velocity ranges;
- surface characterization;
- new flow-pattern classification and transition analysis.

This is a stronger Russian residual than generic high-CHF claims because it directly probes the regime where interfacial effects, wettability and pressure-gradient instabilities dominate.

## Q3 — Falsifiable hypothesis

At extreme slit confinement, conventional inertia-dominated microchannel intuition breaks down and flow-pattern boundaries are instead governed strongly by capillarity, gas inertia, Saffman–Taylor instability, transverse pressure-gradient instability and wettability.

The experimental flow maps make that hypothesis directly testable.

## Q4 — Research lineage / competing route

The paper belongs to the Kabov / Chinnov / Kochkin extreme-confinement experimental line.

Strong China/global thin-film work competes on heat-flux performance but does not fully duplicate the same gas-liquid slit-flow pattern mapping at 12.5 μm.

Therefore this paper is one of the strongest pieces of evidence for a narrow mechanism residual.

## Q5 — Key mechanism / control point

Key variables include:

- slit height: 12.5 μm;
- width: 10 mm;
- aspect ratio: 1:800;
- liquid superficial velocity;
- gas superficial velocity;
- surface tension;
- contact angle / wettability;
- liquid Capillary number;
- gas Weber number;
- Saffman–Taylor instability;
- transverse pressure-gradient instability.

## Q6 — Experiment / method design

The channel is fabricated using photolithography, anisotropic etching and thermal-anode bonding.

Channel height, roughness and contact angles are characterized using SEM, profilometry, AFM and sessile-drop measurements.

Gas is supplied through a controlled gas-flow system and liquid through a syringe pump. Five liquids are tested:

- HFE-7100;
- 92.8 wt% ethanol-water;
- 40 wt% ethanol-water;
- 10 wt% ethanol-water;
- Milli-Q water.

## Q7 — Data / reproducibility

Reported ranges:

- liquid superficial velocity: 0.0026–0.266 m/s;
- gas superficial velocity: 0.266–7.73 m/s.

Five characteristic flow patterns are identified:

- Jet-Droplet;
- Jet;
- Jet-Churn;
- Churn;
- Droplet-Annular.

For completely wetting liquids, flow-pattern maps can be generalized in liquid Capillary number and gas Weber number coordinates.

The authors conclude that liquid inertia is negligible for the mapped pattern boundaries, while increasing surface tension expands the Jet regime.

## Q8 — Evidence vs hypothesis

It strongly supports:

- a real experimental capability at 12.5 μm confinement;
- identifiable instability-controlled regime transitions;
- strong wettability / capillarity effects.

It does not support:

- heated CHF performance;
- net cooling efficiency;
- closed-loop electronics cooling;
- phone-scale packaging feasibility.

## Q9 — Real decision contribution

This paper is the strongest reason not to Kill the Extreme Film reserve entirely.

Its value is not cooling capacity; it is access to a hard-to-study interfacial regime that could inform future microgap gas-liquid architectures or failure-boundary design.

That remains reserve-level knowledge because the step from adiabatic flow map to useful phone cooling is large.

## Q10 — Next action

If a phone-relevant experiment is ever pursued, first test whether the dimensionless flow-pattern boundaries remain meaningful in a heated, recirculating, sealed configuration.

The minimum transfer test should measure:

- pattern transition;
- pressure drop;
- film thickness;
- dryout onset;
- heat flux;
- blower / pump power.

Kill the device path if favorable flow regimes require impractical gas velocity or pressure drop.

## Evidence boundary

### Source facts

- 12.5 μm × 10 mm slit channel;
- aspect ratio 1:800;
- five liquids;
- liquid superficial velocity 0.0026–0.266 m/s;
- gas superficial velocity 0.266–7.73 m/s;
- five flow patterns;
- Capillary / Weber-number generalization for fully wetting liquids;
- Saffman–Taylor, transverse-pressure-gradient instability and wettability are pattern-determining factors.

### Analyst inference

- extreme-confinement flow mapping is a more defensible Russian residual than high heat flux;
- gas-velocity requirements may become a system-level barrier in phone transfer.

### Unknown / request

- pressure drop across the full operating map;
- heated behavior;
- net system power;
- acoustic cost;
- closed-loop packaging.

## 10Q footer

Evidence maturity: STRUCTURAL_SIGNAL
Decision impact: KEEP_MECHANISM_RESERVE
Open questions: heated transfer; pressure drop; parasitic power; phone packaging
Primary source: DOI:10.1016/j.expthermflusci.2024.111153
