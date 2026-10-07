# P1 Kutateladze Lab 1.3 — Technical Data / Crisis-Label Brief

status: INTERNAL_OUTREACH_PREP
priority: PRI-01-KUT-LAB13
direction: DIR-FAILURE-AWARE-UTVC
partner: ACT-KUT-LAB13
scientific_anchor: PERSON-PAVLENKO
contact_workflow: NOT_CONTACTED

## 1. Internal objective

Determine whether Lab 1.3 can provide a falsifiable, mechanism-resolved dataset that adds state information beyond our generic / physics-informed dryout baselines.

The purpose of first contact is **data and label feasibility**, not a broad partnership proposal.

## 2. One-sentence technical framing

We are interested in whether reversible / irreversible boiling-crisis and dry-spot mechanism labels can provide incremental failure-state information for ultra-thin two-phase thermal systems beyond temperature/power thresholds, pressure/temperature sensing and saturation-state models.

## 3. Scope we should discuss

In scope:
- reversible vs irreversible crisis-state definition;
- dry-spot onset / growth / recovery;
- confinement-dependent crisis modes;
- spatial drying-front behavior;
- repeatability;
- synchronized diagnostics;
- data availability and sharing boundary.

Out of scope for first engagement:
- complete smartphone cooling design;
- generic wick/surface optimization;
- product architecture transfer;
- confidential OEM projects;
- commercial terms before technical feasibility is established.

## 4. Minimum questions for the technical team

### A. Crisis-state labels

1. What operational criteria distinguish reversible and irreversible crisis states?
2. Are labels assigned from temperature history, optical/IR observation, pressure behavior, post-event recovery, or a combination?
3. Are the same criteria valid across multiple geometries and fluids?
4. Is there a transition region where the label is ambiguous?

### B. Time-resolved data

5. Which synchronized channels are available?
   - applied heat / power;
   - wall temperature;
   - local temperature field;
   - pressure;
   - high-speed video / IR;
   - dry-spot area or front position;
   - flow / liquid-layer condition.
6. What are the sampling rates / temporal synchronization limits?
7. Can excitation history and recovery history be reconstructed?

### C. Repeatability

8. How many repeated runs exist for the same geometry / condition?
9. Are reversible / irreversible outcomes repeatable at nearby operating points?
10. Are uncertainty / calibration records available?

### D. Geometry / transfer

11. What gap height, heater geometry, liquid-layer height or confinement variables are recorded?
12. Which working fluids and pressure conditions are available?
13. Can future experiments move toward thinner confinement or a sealed-device-compatible observable set without changing the core mechanism question?

### E. Data / IP

14. Which data can be shared:
   - publicly;
   - under NDA;
   - only through on-site/joint analysis?
15. Can derived model features be used internally for validation?
16. Are there publication or patent restrictions on joint interpretation?

## 5. Minimum data fields we should request

Required:
- run ID;
- geometry;
- fluid / pressure;
- heat-input time history;
- temperature channels;
- event timing;
- crisis label or sufficient raw information to reconstruct it;
- recovery outcome;
- repeat index.

Preferred:
- pressure;
- high-speed / IR frames;
- dry-spot area or front position;
- uncertainty / calibration;
- surface topology metadata.

## 6. Internal comparison plan

Do not evaluate the Russian data in isolation.

Compare:

### Baseline A
Generic anomaly / thermal-RC state inference.

### Baseline B
Physics-informed transient model:
- excitation history;
- time-to-dryout;
- time-to-rewet;
- hysteresis;
- throttling / recovery state;
- pressure / temperature / saturation information where available.

### Challenger C
Add Lab 1.3 mechanism labels / features.

## 7. Internal go / no-go criteria

Proceed to a joint Stage-0 design only if:

- labels are reproducible;
- data have adequate temporal resolution;
- multiple runs are available;
- mechanism features add information beyond Baseline B;
- the incremental state can plausibly map to a phone observable or validation decision.

Stop if:

- only publication plots are shareable;
- labels cannot be operationally reproduced;
- mechanism state collapses to pressure/temperature/saturation state;
- the mechanism cannot be translated below the existing lab scale;
- no product validation decision would change.

## 8. Data/IP position before contact

Our default position:

Partner background:
- experimental apparatus;
- existing measurement methods;
- existing crisis datasets;
- background mechanism IP.

Internal foreground:
- phone system architecture;
- product observables;
- feature integration;
- internal model/controller;
- product validation;
- foreground product IP.

Any joint-derived interpretation requires explicit publication/IP agreement before shared development.

## 9. Public anchor

Alexander N. Pavlenko public contact recorded in canonical actor:
- pavl@itp.nsc.ru

Do not use this contact until management approves outreach.

## 10. Canonical anchors

- PRI-01-KUT-LAB13
- DIR-FAILURE-AWARE-UTVC
- CAP-KUT-L13-DRYOUT-DIAGNOSTICS
- PERSON-PAVLENKO
- OPP-01-KUTATELADZE-FAILURE-GROUND-TRUTH

## 11. Internal approval checklist

Before contact:
- [ ] confirm owner for external engagement;
- [ ] confirm data-use / NDA path;
- [ ] confirm which observables we are willing to disclose;
- [ ] confirm no confidential phone geometry is required in first discussion;
- [ ] confirm baseline comparison plan;
- [ ] confirm stop criteria.
