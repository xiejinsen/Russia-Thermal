# Research Map Contract

status: CURRENT DESIGN
updated: 2026-10-06

## Purpose

Research maps are exploration/navigation surfaces for the research graph.

They answer:
- where relevant capability clusters are located;
- which institutions/labs and people sit in each cluster;
- which Directions and evidence are connected to that geography.

They do not rank a country or infer superiority from marker density.

## Map node

A map marker is generated from a non-PERSON Actor with usable geography.

Minimum:
- actorId
- name
- country
- actorType
- city / region
- location

Derived relations:
- child labs
- key people
- capabilities
- directions
- partner priority
- evidence count

## Person location

PERSON records do not need duplicate coordinates.

Default:
PERSON -> parent Actor -> geographic location.

Only create independent person geography if a research use case materially requires it.

## Shared country view model

One view model must power both Russia and China:

ResearchMapVM
- country
- conclusion
- coverage note
- nodes[]
- regions[]
- filters

ResearchMapNodeVM
- actor
- location
- scholarCount
- capabilityCount
- directionIds
- priorityRank?
- href

No RU-specific or CN-specific hardcoded map truth in the component.

## Visual behavior

Desktop:
- map occupies the visual anchor;
- searchable/filterable actor list beside or below;
- marker click opens details without losing map context.

Mobile:
- list-first;
- map collapses to a secondary view.

Use the current light-blue Intelligence visual language.
