# Information Architecture

status: DESIGN
scope: navigation, page hierarchy and drill-down

## 1. Primary user journeys

### Journey A — leadership
Goal:
understand the conclusion in 5–10 minutes.

Path:
`Overview → Partner Portfolio → Priority Partner → Decision / Action`

### Journey B — technical reviewer
Goal:
challenge a conclusion.

Path:
`Technology Landscape → Capability → Claim → Evidence`

### Journey C — collaboration planning
Goal:
decide who to contact and what to ask.

Path:
`Partners → Institution → Key People → Collaboration Role → First Questions`

### Journey D — research maintenance
Goal:
see what changed recently.

Path:
`Frontier Watch → New Source / Node → Decision Impact`

## 2. Main navigation

1. **Overview**
2. **Partners**
3. **Technology Landscape**
4. **Russia vs China**
5. **Institutions**
6. **Scholars**
7. **Evidence**
8. **Decisions**
9. **Frontier Watch**

## 3. Home / Overview

Above the fold:
- one-sentence bottom line;
- P1/P2/P3 partner recommendation;
- Russia-vs-China summary heatmap;
- collaboration model.

Below:
- partner comparison;
- supporting nodes;
- explicit Kill / Do-Not-Invest;
- latest frontier-watch update.

No dense relationship graph on home.

## 4. Institution hierarchy

Human-facing hierarchy:

`Institution → Lab/Team → Key People → Capability → Evidence`

Never:
`Institution ↔ Person` as peer siblings in the same management tree.

Institution page:
- leadership summary;
- labs/teams;
- key people;
- capability modules;
- collaboration readiness;
- related directions;
- representative evidence;
- boundaries / risks.

## 5. Scholar page

Sections:
1. identity / current role;
2. institution / team;
3. why this person matters;
4. research themes;
5. representative works;
6. collaboration history;
7. project-specific role;
8. first outreach question;
9. evidence links.

The scholar page is not a CV dump.

## 6. Technology page

Each capability topic:
- one-line judgment;
- China baseline;
- Russia residual;
- Russian nodes;
- maturity / confidence;
- Keep / Reserve / Watch / Kill;
- evidence drill-down.

## 7. Evidence explorer

Filters:
- source type;
- year;
- country;
- institution;
- person;
- capability;
- strategic direction;
- decision impact.

Evidence card:
- title;
- source type;
- year;
- authors;
- institution;
- direct finding;
- boundary;
- linked claim/capability/direction.

## 8. Decision page

Timeline:
- decision date;
- subject;
- transition;
- trigger evidence;
- rationale;
- current state.

Main purpose:
show why a broad thesis was narrowed or killed.

## 9. Frontier Watch

Separate venue cards:
- AVTFG;
- RNKT;
- Thermophysics and Aeromechanics;
- High Temperature.

Each card:
- what it covers;
- latest scan;
- new nodes found;
- whether portfolio changed.

## 10. URL strategy

Stable ID-based routes where possible:

```
/institutions/{actor-id}
/scholars/{person-id}
/capabilities/{capability-id}
/evidence/{source-id}
/directions/{direction-id}
/decisions/{decision-id}
```

Optional human-readable aliases can redirect, but IDs remain stable.

## 11. Progressive disclosure

Leadership pages show conclusions first.

Technical detail appears through:
- expandable sections;
- drill-down links;
- evidence pages.

This avoids making every page encyclopedic.
