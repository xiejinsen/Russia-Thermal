# PAPER-RU-DRY-003 — Deep Read

paper_id: PAPER-RU-DRY-003
deep_read_level: TIER_A
review_status: PRIMARY_ABSTRACT_PLUS_DECISION_REVIEW
reviewed_at: 2026-10-07
why_it_matters: This paper extends the Pavlenko line from smooth-layer crisis taxonomy to structured capillary-porous surfaces and shows directional drying-front propagation tied to 2D surface topology.
decision_use: RUSSIA_STRUCTURED_SURFACE_FAILURE_MECHANISM
related_claims: CLM-PAV-008
related_capabilities: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
related_directions: DIR-FAILURE-AWARE-UTVC
related_priorities: PRI-01-KUT-LAB13

## Q1 — Problem and target mapping

The paper investigates boiling and crisis development in a thin HFE-7100 layer on capillary-porous coatings with different thermal conductivity and structured geometry.

Its project relevance is not the absolute heat-transfer enhancement. It is the observation that drying-front propagation is anisotropic and follows the structured channels, showing that local topology can shape failure progression.

## Q2 — Novelty vs strong baseline

The paper combines additively manufactured capillary-porous surfaces with high-speed thermographic observation of crisis development.

The most decision-relevant result is directional drying-front propagation: the failure front advances along the channels of a 2D-modulated coating at about twice the transverse rate.

That provides a richer spatial failure signature than a single dryout threshold.

## Q3 — Falsifiable hypothesis

When a capillary-porous evaporator has directional / modulated transport pathways, the onset and propagation of drying need not be spatially isotropic. The surface architecture can imprint a preferred failure direction that is observable thermographically.

A phone-transfer version would test whether wick topology creates reproducible spatial-temporal failure patterns before global thermal collapse.

## Q4 — Capability lineage / competing route

This study belongs to the same Pavlenko/Kutateladze mechanism-resolved crisis lineage but adds 3D-printed structured coatings.

Strong China comparators already demonstrate capillary-enhancing mesh / nanowire surfaces with large CHF and HTC gains. Therefore the Russia-specific residual is not “structured porous surfaces improve heat transfer”; it is the spatially resolved failure dynamics and possible diagnostic labels associated with topology.

## Q5 — Technical control variables

Reported variables include:

- HFE-7100 thin-layer boiling;
- capillary-porous coatings;
- stainless-steel versus bronze coating material;
- selective laser melting / sintering fabrication;
- coating thermal conductivity;
- active nucleation behavior;
- high-speed thermographic temperature field;
- drying-front position and propagation direction;
- channel orientation of 2D-modulated structures.

## Q6 — Experiment / method design

The accessible primary abstract states that stainless-steel and bronze capillary-porous samples are fabricated by additive 3D printing using selective laser melting / sintering.

Boiling heat transfer and crisis development are observed with high-speed thermography in horizontal thin layers of HFE-7100.

The study compares coating materials and analyzes directional propagation of the drying front relative to the structured channels.

The current review has not recovered the full paper's exact pore dimensions, layer height, heat-flux range, thermography frame rate or uncertainty budget.

## Q7 — Quantitative evidence / reproducibility

The strongest accessible quantitative mechanism result is that the drying-front boundary propagates along the channels of the 2D-modulated coating at approximately twice the speed observed in the transverse direction.

The abstract also reports stronger heat-transfer intensification for the stainless-steel coating than for the bronze coating, attributed to activation of a wider range of vaporization nuclei sizes.

No unverified absolute HTC / CHF values are added to this card.

## Q8 — What it proves / does not prove

It supports:

- current Russian capability in spatially resolved crisis observation;
- topology-dependent, anisotropic drying-front behavior;
- a structured-surface mechanism link between geometry and failure propagation.

It does not prove:

- superiority of the coating over strong China UTVC wick designs;
- phone-scale additive manufacturing suitability;
- transfer of HFE-7100 open-layer failure-front speeds to a sealed water VC;
- that spatial failure patterns are observable with production phone sensors.

## Q9 — Decision contribution / control point

This paper strengthens a narrower collaboration concept: use Russian experiments to generate failure-mode ground truth tied to wick / surface topology, then use that knowledge to validate an internally owned phone UTVC design and observer.

It does not strengthen a thesis of importing Russian porous-surface hardware.

Combined with the global hidden-saturation model, a useful research question emerges: when does a low-dimensional saturation state fail to capture spatially directed crisis propagation caused by topology?

## Q10 — Next action / promotion or kill gate

Future Stage-0 work should include deliberately anisotropic / patterned wick geometries and ask whether their dryout fronts create reproducible observables that add information beyond a lumped saturation model.

If topology-dependent labels do not improve prediction / validation for phone-relevant geometries, retain this paper as mechanism background only.

## Evidence boundary

### Source facts

- stainless-steel and bronze capillary-porous coatings fabricated with additive selective laser melting / sintering;
- HFE-7100 thin-layer boiling studied;
- high-speed thermography used to observe crisis development;
- stainless-steel coating shows greater heat-transfer intensification in the reported setup;
- drying front propagates along structured channels at approximately twice the transverse speed.

### Analyst inference

- spatial failure dynamics may be the more distinctive Russian asset than generic surface enhancement;
- topology-aware ground truth could pressure-test low-dimensional hidden-saturation models;
- hardware transfer remains weakly supported.

### Unknown / request

- full paper geometric and uncertainty details;
- exact HTC / CHF values and repeatability;
- behavior in sub-mm sealed copper-water structures;
- observability of anisotropic failure fronts with realistic phone instrumentation.
