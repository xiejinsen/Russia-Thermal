import { actors, capabilities, directions } from '../data/load-normalized';
import type { ActorRecord, CapabilityRecord, DirectionRecord } from '../types/normalized';
import type {
  DirectionCardVM,
  InstitutionCardVM,
  OverviewPageVM,
  PartnerGroupVM,
  PartnerPortfolioVM,
  ScholarCardVM
} from '../types/view-models';
import {
  actorKind,
  directionTitle,
  humanize,
  laneRank,
  statusFromLane
} from './helpers';

const actorById = new Map(actors.map((actor) => [actor.id, actor]));
const capabilityById = new Map(capabilities.map((capability) => [capability.id, capability]));

function capabilityLinks(direction: DirectionRecord): CapabilityRecord[] {
  return direction.capabilityIds
    .map((id) => capabilityById.get(id))
    .filter((item): item is CapabilityRecord => Boolean(item));
}

function institutionForCapability(capability: CapabilityRecord): ActorRecord | undefined {
  return actorById.get(capability.actorId);
}

function peopleForCapability(capability: CapabilityRecord): ActorRecord[] {
  return capability.keyPeopleIds
    .map((id) => actorById.get(id))
    .filter((item): item is ActorRecord => Boolean(item));
}

function directionCard(direction: DirectionRecord): DirectionCardVM {
  return {
    id: direction.id,
    title: directionTitle(direction.id),
    role: humanize(direction.role),
    lane: statusFromLane(direction.investmentLane),
    differentiationConfidence: humanize(direction.differentiationConfidence),
    phoneTransferMaturity: humanize(direction.phoneTransferMaturity),
    residualDifferentiation: direction.residualDifferentiation ?? undefined,
    nextGate: direction.promotionGate ?? undefined
  };
}

function institutionCard(
  actor: ActorRecord,
  relevantCapabilities: CapabilityRecord[],
  direction?: DirectionRecord
): InstitutionCardVM {
  const peopleIds = new Set(relevantCapabilities.flatMap((capability) => capability.keyPeopleIds));
  const summary =
    relevantCapabilities.map((capability) => capability.statement).filter(Boolean).join(' ') ||
    actor.researchRelevance ||
    'No concise capability summary is available in the normalized dataset.';

  return {
    id: actor.id,
    name: actor.name,
    country: actor.country,
    kindLabel: actorKind(actor.type),
    summary,
    capabilityCount: relevantCapabilities.length,
    peopleCount: peopleIds.size,
    status: direction ? statusFromLane(direction.investmentLane) : undefined
  };
}

function scholarCard(person: ActorRecord, affiliation: ActorRecord | undefined, direction?: DirectionRecord): ScholarCardVM {
  return {
    id: person.id,
    name: person.name,
    affiliation: affiliation?.name ?? 'Affiliation unresolved in normalized presentation data',
    role: person.currentRole ?? undefined,
    relevance: person.researchRelevance ?? 'Linked as key person through a normalized capability relation.',
    status: direction ? statusFromLane(direction.investmentLane) : undefined
  };
}

const sortedDirections = [...directions].sort(
  (a, b) => laneRank(a.investmentLane) - laneRank(b.investmentLane) || a.id.localeCompare(b.id)
);

export function buildOverviewVM(): OverviewPageVM {
  const active = sortedDirections.filter((direction) =>
    ['STRATEGIC_CANDIDATE', 'STAGE0_CHALLENGER', 'RESERVE'].includes(direction.investmentLane)
  );

  const activeCapabilities = active.flatMap(capabilityLinks);
  const institutionMap = new Map<string, CapabilityRecord[]>();
  const scholarIds = new Set<string>();

  for (const capability of activeCapabilities) {
    const list = institutionMap.get(capability.actorId) ?? [];
    list.push(capability);
    institutionMap.set(capability.actorId, list);
    capability.keyPeopleIds.forEach((id) => scholarIds.add(id));
  }

  const institutions = [...institutionMap.entries()]
    .map(([actorId, caps]) => {
      const actor = actorById.get(actorId);
      return actor ? institutionCard(actor, caps) : null;
    })
    .filter((item): item is InstitutionCardVM => Boolean(item))
    .sort((a, b) => b.capabilityCount! - a.capabilityCount! || a.name.localeCompare(b.name));

  const scholars = [...scholarIds]
    .map((id) => actorById.get(id))
    .filter((person): person is ActorRecord => Boolean(person))
    .map((person) => scholarCard(person, person.parentId ? actorById.get(person.parentId) : undefined))
    .sort((a, b) => a.name.localeCompare(b.name));

  return {
    eyebrow: 'Evidence-backed research system',
    title: 'Russian thermal capabilities, filtered for smartphone relevance',
    summary:
      'This overview is generated from normalized canonical Actors, Capabilities and Directions. It emphasizes retained strategic, challenger and reserve paths without re-authoring research facts in the frontend.',
    stats: {
      institutions: actors.filter((actor) => actor.type === 'ORGANIZATION' || actor.type === 'LAB').length,
      people: actors.filter((actor) => actor.type === 'PERSON').length,
      capabilities: capabilities.length,
      directions: directions.length,
      activeDirections: active.length
    },
    institutions: institutions.slice(0, 6),
    scholars: scholars.slice(0, 8),
    directions: active.map(directionCard)
  };
}

const groupMeta: Record<string, { title: string; description: string }> = {
  STRATEGIC_CANDIDATE: {
    title: 'Strategic candidates',
    description: 'Directions retained for highest-priority validation or future collaboration.'
  },
  STAGE0_CHALLENGER: {
    title: 'Stage-0 challengers',
    description: 'Bounded challenger routes that must clear explicit process or product-transfer gates.'
  },
  RESERVE: {
    title: 'Strategic reserves',
    description: 'Capabilities worth preserving as options, but not promoted to the primary collaboration lane.'
  },
  WATCH: {
    title: 'Watch',
    description: 'Method or knowledge reserves that do not currently justify active collaboration investment.'
  },
  HOLD: {
    title: 'Hold',
    description: 'Directions retained for provenance but intentionally not advanced at the current evidence level.'
  }
};

function buildPartnerGroup(lane: string): PartnerGroupVM | null {
  const laneDirections = sortedDirections.filter((direction) => direction.investmentLane === lane);
  if (!laneDirections.length) return null;

  const institutionCaps = new Map<string, CapabilityRecord[]>();
  const people = new Map<string, { person: ActorRecord; direction: DirectionRecord; affiliation?: ActorRecord }>();

  for (const direction of laneDirections) {
    for (const capability of capabilityLinks(direction)) {
      const current = institutionCaps.get(capability.actorId) ?? [];
      current.push(capability);
      institutionCaps.set(capability.actorId, current);

      for (const person of peopleForCapability(capability)) {
        people.set(person.id, {
          person,
          direction,
          affiliation: person.parentId ? actorById.get(person.parentId) : institutionForCapability(capability)
        });
      }
    }
  }

  const meta = groupMeta[lane] ?? { title: humanize(lane), description: 'Canonical investment lane.' };

  return {
    id: lane.toLowerCase().replace(/_/g, '-'),
    title: meta.title,
    description: meta.description,
    directions: laneDirections.map(directionCard),
    institutions: [...institutionCaps.entries()]
      .map(([actorId, caps]) => {
        const actor = actorById.get(actorId);
        const direction = laneDirections.find((item) =>
          item.capabilityIds.some((id) => caps.some((capability) => capability.id === id))
        );
        return actor ? institutionCard(actor, caps, direction) : null;
      })
      .filter((item): item is InstitutionCardVM => Boolean(item))
      .sort((a, b) => a.name.localeCompare(b.name)),
    scholars: [...people.values()]
      .map(({ person, direction, affiliation }) => scholarCard(person, affiliation, direction))
      .sort((a, b) => a.name.localeCompare(b.name))
  };
}

export function buildPartnerPortfolioVM(): PartnerPortfolioVM {
  const lanes = ['STRATEGIC_CANDIDATE', 'STAGE0_CHALLENGER', 'RESERVE', 'WATCH', 'HOLD'];
  return {
    eyebrow: 'Collaboration portfolio',
    title: 'Partners organized by canonical investment lane',
    summary:
      'This page derives partner groupings from Direction → Capability → Actor relationships. It intentionally does not invent P1/P2/P3 rankings that are not represented in the normalized canonical contracts.',
    groups: lanes
      .map(buildPartnerGroup)
      .filter((group): group is PartnerGroupVM => Boolean(group))
  };
}
