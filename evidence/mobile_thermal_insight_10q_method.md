# Mobile Thermal Insight — Paper & Patent 10Q Method

Last reviewed: 2026-10-04

## Why this exists

The classic "Ten Questions for Reading a Paper" is valuable because it forces a reader to reconstruct:
problem -> novelty -> hypothesis -> related work -> key method -> experiment -> quantitative evidence -> support -> contribution -> next step.

For Russia-Thermal, the goal is not academic note-taking alone.

Our final purpose is:
- identify mobile-terminal / chip thermal opportunities;
- determine whether a Russian capability is differentiated;
- identify credible partners;
- define a falsifiable PoC;
- understand IP/background-rights boundaries;
- decide whether to invest, hold or kill.

Therefore the classic 10Q is adapted into a **decision-oriented thermal insight card**.

---

# Part I — Paper 10Q for Mobile/Chip Thermal Insight

## Q1 — What problem is the paper trying to solve?

Record:
- physical / engineering problem;
- application context;
- why it matters.

Required extra:
> What mobile-terminal or chip-thermal problem could this map to?

If no credible mapping exists, classify as:
**mechanism-source / supporting-only**.

---

## Q2 — Is this actually a new problem or a new solution?

Do not accept the paper's novelty wording at face value.

Compare against:
- strong China/global baseline;
- major OEM/product state;
- recent prior art;
- earlier work from the same team.

Record:
- new problem?
- new mechanism?
- new geometry/process?
- new evidence/reliability?
- or only a new parameter combination?

For this project, "new to the authors' application domain" is not automatically new for smartphones.

---

## Q3 — What scientific / engineering hypothesis is being tested?

Write one falsifiable sentence.

Examples:
- modifying mesh morphology increases nucleation while retaining capillary return;
- hierarchical grooves + nanoparticles improve liquid supply and lower evaporator resistance;
- wettability contrast redirects liquid toward the dry/hot region.

If the paper does not state a formal hypothesis, reconstruct it conservatively and label:
**Analyst reconstruction**.

---

## Q4 — What is the related-work / capability lineage, and who matters?

Record:
- key predecessor papers;
- competing methods;
- same-team technical lineage;
- important researchers/labs;
- whether this paper strengthens a current collaboration candidate.

This question is especially important for partner discovery.

Output:
> Research lineage: paper -> team -> lab -> current project -> patent/process capability.

---

## Q5 — What is the key technical method / control variable?

Avoid generic descriptions.

Record the actual controlled variables:
- structure / geometry;
- pore/feature size;
- coating thickness;
- working fluid;
- surface chemistry/wettability;
- process method;
- heat-source geometry;
- active power/flow/pressure if applicable;
- control algorithm/state variable.

Question:
> What exactly did the authors change that caused the claimed benefit?

---

## Q6 — How was the experiment / evaluation designed?

For thermal papers this replaces a generic "dataset" mindset.

Record:
- sample count if available;
- heater area;
- heat flux / total heat;
- device/channel thickness;
- working fluid;
- pressure / saturation condition;
- condenser / ambient boundary;
- orientation;
- transient vs steady;
- cycle duration;
- baseline/control;
- measurement method / uncertainty.

For active cooling also record:
- fan/pump/EHD power;
- airflow/static pressure;
- acoustic condition.

---

## Q7 — What quantitative evidence is available and is it reproducible?

Classic paper-reading methods often ask for dataset/code.

For thermal research, record instead:
- raw/derived performance metrics;
- geometry/process details needed to reproduce;
- error bars / uncertainty;
- number of samples;
- repeatability;
- data/code/CAD/process openness where relevant.

Classify reproducibility:
- HIGH
- MEDIUM
- LOW
- UNKNOWN

Critical distinction:
> "good result" is not the same as "reproducible process."

---

## Q8 — Do the results really support the hypothesis?

Use an adversarial reviewer mindset.

Record:
- what the data actually proves;
- what it does not prove;
- missing controls;
- non-comparable conditions;
- alternative explanations;
- short-duration vs long-duration gap;
- scale-up / scale-down risk.

For transferred non-mobile evidence, explicitly normalize:
- heat flux;
- thickness;
- working fluid;
- geometry;
- power;
- reliability.

---

## Q9 — What is the real contribution and strategic control point?

Separate:
1. academic contribution;
2. engineering contribution;
3. process/know-how contribution;
4. partner capability signal;
5. possible IP/control point.

Question:
> If we collaborated with this team, what capability would be difficult to reproduce elsewhere?

If the answer is only "they published a good paper," partner value is weak.

---

## Q10 — What should we do next?

This is the most important project-specific adaptation.

Every decision-grade paper must end with:

### Mobile transfer
- direct / plausible / weak / none

### Partner action
- contact / ask for data / ask for coupon / no action

### Smallest discriminating PoC
What experiment can falsify the transfer hypothesis fastest?

### Success / kill
What result advances or kills it?

### IP action
What background patent/process must be clarified?

### Decision state
- PROMOTE
- KEEP / CHALLENGER
- MECHANISM-ONLY
- HOLD
- KILL / REFRAME

---

# Part II — Patent 10Q for Mobile/Chip Thermal Insight

The paper 10Q cannot be copied directly to patents because patents are about **claim scope and control rights**, not scientific proof.

## P1 — What problem / product function is the patent targeting?

Record the thermal/product problem in plain engineering language.

## P2 — Is the target directly mobile/chip relevant?

Classify:
- direct phone/electronics;
- direct chip/package;
- transferable mechanism;
- adjacent / low relevance.

## P3 — What prior art / crowded space does it sit in?

Record:
- earlier families;
- competing university/OEM patents;
- whether novelty is broad or narrow.

## P4 — What does the independent claim actually control?

Summarize:
- required structural elements;
- required relationships;
- process steps;
- functional constraints.

Never infer scope from the abstract alone when claim text is available.

## P5 — What do dependent claims add?

Record useful implementation bounds:
- dimensions;
- materials;
- wettability;
- pore size;
- thickness;
- process temperature;
- fluid;
- device integration.

## P6 — Is there an implementation / embodiment that looks manufacturable?

Record:
- example geometry;
- process sequence;
- materials;
- device envelope;
- whether a real prototype/test is disclosed.

Patent existence != manufacturability.

## P7 — Who are the inventors / assignee and what capability lineage does this reveal?

Map:
inventor -> lab/company -> papers -> later patents/projects.

This is useful for identifying collaboration ownership and hidden capability clusters.

## P8 — How does it overlap with our target / other OEM prior art?

Classify:
- direct overlap;
- adjacent;
- design-around likely;
- claim analysis incomplete.

No legal FTO conclusion without appropriate legal review.

## P9 — What does it imply for collaboration IP boundaries?

Record:
- likely background IP;
- partner-owned process/structure;
- potential clean foreground space;
- prior collaboration that may affect rights.

## P10 — What should we do next?

Choose:
- deeper claim/family review;
- legal-status check;
- partner clarification;
- design-around study;
- PoC avoiding claim;
- no action.

---

# Part III — Compact decision record

Every decision-grade paper/patent should end with a compact block:

| Field | Record |
|---|---|
| Mobile/chip relevance | HIGH / MEDIUM / LOW |
| Evidence directness | direct device / direct electronics / mechanism transfer / adjacent |
| Reproducibility | HIGH / MEDIUM / LOW / UNKNOWN |
| Strong comparator available? | yes / partial / no |
| Partner signal | strong / medium / weak |
| IP/control-point relevance | high / medium / low |
| Biggest transfer gap | one sentence |
| Smallest PoC | one sentence |
| Kill condition | one sentence |
| Current decision | promote / challenger / mechanism-only / hold / kill |

---

# Part IV — How this maps to the classic Paper 10Q

| Classic question | Russia-Thermal adaptation |
|---|---|
| What problem? | Q1 problem + mobile/chip mapping |
| Is it new? | Q2 novelty vs strong current baseline |
| What hypothesis? | Q3 falsifiable mechanism |
| Related work / key researchers? | Q4 lineage + partner network |
| Key solution? | Q5 actual technical control variable |
| Experiment design? | Q6 normalized thermal test conditions |
| Dataset/code? | Q7 quantitative evidence + process reproducibility |
| Do results support hypothesis? | Q8 adversarial evidence check |
| Contribution? | Q9 academic + engineering + partner/IP control point |
| What's next? | Q10 mobile transfer + partner action + PoC + kill |

---

# Rule

A decision-grade paper brief is incomplete if it only summarizes:
- background;
- method;
- conclusion.

It must also answer:
- **is it new against our real benchmark?**
- **does the experiment actually prove the claimed mechanism?**
- **who owns the capability?**
- **can it move into a phone/chip thermal architecture?**
- **what should we do with this evidence?**

That is the difference between a literature note and a technology-insight record.
