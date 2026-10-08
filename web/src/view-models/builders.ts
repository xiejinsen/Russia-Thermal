import { actors, capabilities, directions, priorities, evidence, claims, decisions, syntheses, deepReads } from '../data/load-normalized';
import type { ActorRecord, CapabilityRecord, DirectionRecord, EvidenceRecord, ClaimRecord } from '../types/normalized';
import type {
  CapabilityDetailVM,
  CapabilityPageVM,
  DirectionCardVM,
  InstitutionCardVM,
  InstitutionPageVM,
  OverviewPageVM,
  OverviewDecisionVM,
  PartnerGroupVM,
  PartnerPortfolioVM,
  PartnerPriorityVM,
  ScholarCardVM,
  ScholarPageVM,
  EvidenceCardVM,
  EvidenceExplorerVM,
  LandscapePageVM,
  DecisionsPageVM,
  DecisionEventVM,
  FrontierWatchVM,
  FrontierVenueVM,
  ResearchMapVM,
  ResearchMapNodeVM,
  DirectionExplorerVM,
  DirectionPageVM,
  ClaimExplorerVM,
  ClaimPageVM,
  PaperExplorerVM,
  PaperPageVM,
  PatentPageVM
} from '../types/view-models';
import {
  actorHref,
  actorKind,
  directionTitle,
  humanize,
  laneRank,
  statusFromLane
} from './helpers';

const actorById = new Map(actors.map((actor) => [actor.id, actor]));
const capabilityById = new Map(capabilities.map((capability) => [capability.id, capability]));

function institutionLineageIds(actorId: string): string[] {
  const ids: string[] = [];
  const seen = new Set<string>();
  let current = actorById.get(actorId);

  while (current && current.type !== 'PERSON' && !seen.has(current.id)) {
    ids.push(current.id);
    seen.add(current.id);
    current = current.parentId ? actorById.get(current.parentId) : undefined;
  }

  return ids;
}

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

function directionsForCapability(capabilityId: string): DirectionRecord[] {
  return sortedDirections.filter((direction) => direction.capabilityIds.includes(capabilityId));
}

function recommendationFromLane(lane: string): string {
  const labels: Record<string, string> = {
    STRATEGIC_CANDIDATE: 'Advance for validation',
    STAGE0_CHALLENGER: 'Run a bounded challenger test',
    RESERVE: 'Keep as strategic reserve',
    WATCH: 'Monitor only',
    HOLD: 'Do not advance now',
    KILL: 'Do not invest'
  };
  return labels[lane] ?? humanize(lane);
}

function directionCard(direction: DirectionRecord): DirectionCardVM {
  return {
    id: direction.id,
    title: directionTitle(direction.id),
    role: humanize(direction.role),
    recommendation: recommendationFromLane(direction.investmentLane),
    problem: direction.problem ?? undefined,
    collaborationFocus: direction.strategicHypothesis ?? undefined,
    lane: statusFromLane(direction.investmentLane),
    differentiationConfidence: humanize(direction.differentiationConfidence),
    phoneTransferMaturity: humanize(direction.phoneTransferMaturity),
    residualDifferentiation: direction.residualDifferentiation ?? undefined,
    ourControlBoundary: direction.internalControlBoundary ?? undefined,
    nextQuestion: direction.nextQuestion ?? undefined,
    nextGate: direction.promotionGate ?? undefined,
    killGate: direction.killGate ?? undefined
  };
}

function capabilityDetail(capability: CapabilityRecord): CapabilityDetailVM {
  return {
    id: capability.id,
    statement: capability.statement,
    maturity: humanize(capability.maturity),
    evidenceConfidence: humanize(capability.evidenceConfidence),
    targetFit: humanize(capability.targetFit),
    family: capability.capabilityFamily ? humanize(capability.capabilityFamily) : undefined,
    topics: (capability.capabilityTopics ?? []).map(humanize),
    platformTransfer: (capability.platformTransfer ?? []).map((item) => ({
      platform: humanize(item.platform),
      level: humanize(item.level)
    })),
    technicalScope: capability.technicalScope,
    transferBoundary: capability.transferBoundary ?? undefined,
    strategicUse: capability.strategicUse ?? undefined,
    portfolioDisposition: humanize(capability.portfolioDisposition)
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
    href: actorHref(actor.id, actor.type),
    officialUrl: actor.officialUrl ?? undefined,
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
    href: actorHref(person.id, person.type),
    status: direction ? statusFromLane(direction.investmentLane) : undefined
  };
}

const sortedDirections = [...directions].sort(
  (a, b) => laneRank(a.investmentLane) - laneRank(b.investmentLane) || a.id.localeCompare(b.id)
);

export function buildOverviewVM(): OverviewPageVM {
  const portfolioSynthesis = syntheses.find((item) => item.scope === 'CURRENT_PORTFOLIO_THESIS');
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

  const overviewPriorities = [...priorities]
    .sort((a, b) => Number(a.rank.slice(1)) - Number(b.rank.slice(1)))
    .slice(0, 3)
    .map(buildPriorityVM);

  const overviewLandscape = buildLandscapeVM().rows
    .filter((row) => ['Strategic Candidate', 'Stage0 Challenger', 'Reserve'].includes(row.decision))
    .slice(0, 4);

  const killDecisions: OverviewDecisionVM[] = [...decisions]
    .filter((event) => event.eventType === 'KILL' || event.newState.includes('DO_NOT_USE_AS_COUNTRY_ADVANTAGE'))
    .sort((a, b) => (b.effectiveDate ?? '').localeCompare(a.effectiveDate ?? ''))
    .slice(0, 5)
    .map((event) => ({
      id: event.id,
      subject: event.subjectId,
      eventType: { label: humanize(event.eventType), tone: decisionTone(event.eventType) },
      newState: event.newState,
      rationale: event.rationale ?? undefined
    }));

  const frontier = buildFrontierWatchVM();
  const coveredVenues = frontier.venues.filter((venue) => venue.evidenceCount > 0);
  const latestYears = frontier.venues
    .map((venue) => venue.latestYear)
    .filter((year): year is number => typeof year === 'number');

  return {
    eyebrow: 'Leadership view',
    title: portfolioSynthesis?.conclusion ?? 'Current portfolio thesis unavailable',
    summary: portfolioSynthesis?.implication ?? 'No current management implication is available.',
    thesis: portfolioSynthesis?.implication ?? 'No current management implication is available.',
    theoryBasis: portfolioSynthesis?.theoryBasis ?? [],
    thesisBoundary: portfolioSynthesis?.boundary ?? undefined,
    thesisAssessedAt: portfolioSynthesis?.assessedAt ?? undefined,
    stats: {
      institutions: actors.filter((actor) => actor.type === 'ORGANIZATION' || actor.type === 'LAB').length,
      people: actors.filter((actor) => actor.type === 'PERSON').length,
      capabilities: capabilities.length,
      directions: directions.length,
      activeDirections: active.length,
      strategicCandidates: directions.filter((direction) => direction.investmentLane === 'STRATEGIC_CANDIDATE').length,
      reserves: directions.filter((direction) => direction.investmentLane === 'RESERVE').length,
      holds: directions.filter((direction) => direction.investmentLane === 'HOLD').length,
      deepReads: deepReads.length
    },
    priorities: overviewPriorities,
    landscape: overviewLandscape,
    killDecisions,
    frontier: {
      venueCount: frontier.venues.length,
      coveredVenueCount: coveredVenues.length,
      matchedEvidence: frontier.venues.reduce((sum, venue) => sum + venue.evidenceCount, 0),
      latestYear: latestYears.length ? Math.max(...latestYears) : undefined
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

  const meta = groupMeta[lane] ?? { title: humanize(lane), description: 'Current investment lane.' };

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


function buildPriorityVM(priority: import('../types/normalized').PartnerPriorityRecord): PartnerPriorityVM {
  const priorityDirections = priority.relatedDirectionIds
    .map((id) => directions.find((direction) => direction.id === id))
    .filter((item): item is DirectionRecord => Boolean(item));

  const priorityCapabilities = priorityDirections.flatMap(capabilityLinks);
  const institutionMap = new Map<string, CapabilityRecord[]>();
  const peopleMap = new Map<string, { person: ActorRecord; direction?: DirectionRecord; affiliation?: ActorRecord }>();

  for (const actorId of priority.targetActorIds) {
    institutionMap.set(actorId, priorityCapabilities.filter((capability) => capability.actorId === actorId));
  }

  for (const capability of priorityCapabilities) {
    if (!institutionMap.has(capability.actorId)) {
      institutionMap.set(capability.actorId, [capability]);
    }
    for (const person of peopleForCapability(capability)) {
      peopleMap.set(person.id, {
        person,
        direction: priorityDirections.find((direction) => direction.capabilityIds.includes(capability.id)),
        affiliation: person.parentId ? actorById.get(person.parentId) : actorById.get(capability.actorId)
      });
    }
  }

  return {
    id: priority.id,
    rank: priority.rank,
    priorityClass: humanize(priority.priorityClass),
    readiness: priority.collaborationReadiness ? humanize(priority.collaborationReadiness) : undefined,
    recommendedAction: priority.recommendedAction ? humanize(priority.recommendedAction) : undefined,
    rationale: priority.rationale ?? undefined,
    institutions: [...institutionMap.entries()]
      .map(([actorId, caps]) => {
        const actor = actorById.get(actorId);
        const direction = priorityDirections.find((item) =>
          item.capabilityIds.some((id) => caps.some((capability) => capability.id === id))
        );
        return actor ? institutionCard(actor, caps, direction) : null;
      })
      .filter((item): item is InstitutionCardVM => Boolean(item)),
    directions: priorityDirections.map(directionCard),
    scholars: [...peopleMap.values()]
      .map(({ person, direction, affiliation }) => scholarCard(person, affiliation, direction))
      .sort((a, b) => a.name.localeCompare(b.name))
  };
}

export function buildPartnerPortfolioVM(): PartnerPortfolioVM {
  const lanes = ['STRATEGIC_CANDIDATE', 'STAGE0_CHALLENGER', 'RESERVE', 'WATCH', 'HOLD'];
  return {
    eyebrow: 'Collaboration portfolio',
    title: 'Partner portfolio by current investment lane',
    summary:
      'Partner rank and technical investment status are separate dimensions. P1/P2/P3 preserve the partner shortlist, while each connected technical direction is managed independently as Strategic Candidate, Reserve, Watch or Hold.',
    priorities: [...priorities]
      .sort((a, b) => Number(a.rank.slice(1)) - Number(b.rank.slice(1)))
      .map(buildPriorityVM),
    groups: lanes
      .map(buildPartnerGroup)
      .filter((group): group is PartnerGroupVM => Boolean(group))
  };
}

export function institutionIds(): string[] {
  return actors
    .filter((actor) => actor.type !== 'PERSON')
    .map((actor) => actor.id);
}

export function scholarIds(): string[] {
  return actors
    .filter((actor) => actor.type === 'PERSON')
    .map((actor) => actor.id);
}

export function buildInstitutionPageVM(id: string): InstitutionPageVM | null {
  const actor = actorById.get(id);
  if (!actor || actor.type === 'PERSON') return null;

  const childActors = actors.filter((candidate) => candidate.parentId === actor.id && candidate.type !== 'PERSON');
  const scopedActorIds = new Set([actor.id, ...childActors.map((child) => child.id)]);
  const ownCapabilities = capabilities.filter((capability) => scopedActorIds.has(capability.actorId));
  const directPeople = actors.filter((candidate) => candidate.parentId === actor.id && candidate.type === 'PERSON');
  const childPeople = actors.filter(
    (candidate) => candidate.type === 'PERSON' && candidate.parentId && scopedActorIds.has(candidate.parentId)
  );
  const capabilityPeople = ownCapabilities.flatMap(peopleForCapability);
  const peopleMap = new Map([...directPeople, ...childPeople, ...capabilityPeople].map((person) => [person.id, person]));

  const linkedDirections = sortedDirections.filter((direction) =>
    direction.capabilityIds.some((capabilityId) => ownCapabilities.some((capability) => capability.id === capabilityId))
  );

  const claimIds = new Set(ownCapabilities.flatMap((capability) => capability.claimIds));
  const linkedClaims = [...claimIds]
    .map((claimId) => claimById.get(claimId))
    .filter((item): item is ClaimRecord => Boolean(item));

  const sourceIds = new Set(
    linkedClaims.flatMap((claim) => [...claim.supportingSourceIds, ...claim.contradictingSourceIds])
  );
  const profileSourceIds = new Set([
    ...(actor.atlasProfile?.contextSourceIds ?? []),
    ...(actor.atlasProfile?.collaborationSourceIds ?? []),
    ...(actor.atlasProfile?.influenceSourceIds ?? [])
  ]);
  profileSourceIds.forEach((sourceId) => sourceIds.add(sourceId));
  const linkedEvidenceRecords = [...sourceIds]
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item))
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

  const collaboratorIds = new Set(ownCapabilities.flatMap((capability) => capability.collaboratingActorIds ?? []));
  const collaboratorCards = [...collaboratorIds]
    .map((collaboratorId) => actorById.get(collaboratorId))
    .filter((item): item is ActorRecord => Boolean(item))
    .filter((item) => item.type !== 'PERSON')
    .map((collaborator) =>
      institutionCard(
        collaborator,
        capabilities.filter((capability) => capability.actorId === collaborator.id)
      )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const parent = actor.parentId ? actorById.get(actor.parentId) : undefined;
  const researchOutputYears = linkedEvidenceRecords
    .filter((item) => item.id.startsWith('PAPER-') || item.id.startsWith('PATENT-'))
    .map((item) => item.year)
    .filter((year): year is number => typeof year === 'number');
  const evidenceForIds = (ids: string[]) =>
    ids
      .map((sourceId) => evidenceById.get(sourceId))
      .filter((item): item is EvidenceRecord => Boolean(item))
      .map(evidenceCard);

  return {
    id: actor.id,
    researchClassification: actor.researchClass ? humanize(actor.researchClass) : undefined,
    researchDepth: actor.researchDepth ? humanize(actor.researchDepth) : undefined,
    name: actor.name,
    country: actor.country,
    kindLabel: actorKind(actor.type),
    role: actor.currentRole ?? undefined,
    relevance: actor.researchRelevance ?? undefined,
    officialUrl: actor.officialUrl ?? undefined,
    atlasProfile: actor.atlasProfile ? {
      assessedAt: actor.atlasProfile.assessedAt,
      leadershipSummary: actor.atlasProfile.leadershipSummary,
      collaborationSummary: actor.atlasProfile.collaborationSummary,
      influenceSummary: actor.atlasProfile.influenceSummary,
      outputInterpretation: actor.atlasProfile.outputInterpretation,
      publicGaps: actor.atlasProfile.publicGaps,
      contextEvidence: evidenceForIds(actor.atlasProfile.contextSourceIds),
      collaborationEvidence: evidenceForIds(actor.atlasProfile.collaborationSourceIds),
      influenceEvidence: evidenceForIds(actor.atlasProfile.influenceSourceIds)
    } : undefined,
    outputSnapshot: {
      label: 'Recovered relevant corpus',
      firstYear: researchOutputYears.length ? Math.min(...researchOutputYears) : undefined,
      latestYear: researchOutputYears.length ? Math.max(...researchOutputYears) : undefined,
      paperCount: linkedEvidenceRecords.filter((item) => item.id.startsWith('PAPER-')).length,
      patentCount: linkedEvidenceRecords.filter((item) => item.id.startsWith('PATENT-')).length,
      officialCount: linkedEvidenceRecords.filter((item) => item.id.startsWith('OFFICIAL-')).length
    },
    parent: parent && parent.type !== 'PERSON' ? institutionCard(parent, capabilities.filter((c) => c.actorId === parent.id)) : undefined,
    children: childActors
      .map((child) => institutionCard(child, capabilities.filter((c) => c.actorId === child.id)))
      .sort((a, b) => a.name.localeCompare(b.name)),
    people: [...peopleMap.values()]
      .map((person) => scholarCard(person, actor))
      .sort((a, b) => a.name.localeCompare(b.name)),
    collaborators: collaboratorCards,
    capabilities: ownCapabilities.map(capabilityDetail),
    directions: linkedDirections.map(directionCard),
    claims: linkedClaims.map((claim) => ({
      id: claim.id,
      proposition: claim.proposition,
      confidence: humanize(claim.confidence),
      status: humanize(claim.status),
      href: `/claims/${claim.id}`
    })),
    evidence: linkedEvidenceRecords.map(evidenceCard),
    evidenceStats: evidencePressureStats(linkedClaims, linkedEvidenceRecords)
  };
}

export function buildScholarPageVM(id: string): ScholarPageVM | null {
  const person = actorById.get(id);
  if (!person || person.type !== 'PERSON') return null;

  const affiliation = person.parentId ? actorById.get(person.parentId) : undefined;
  const relatedCapabilities = capabilities.filter((capability) => capability.keyPeopleIds.includes(person.id));

  const capabilityContexts = relatedCapabilities.map((capability) => {
    const institution = actorById.get(capability.actorId);
    return {
      institution: institution
        ? institutionCard(institution, [capability])
        : {
            id: capability.actorId,
            name: capability.actorId,
            country: 'Unknown',
            kindLabel: 'Institution',
            summary: capability.statement
          },
      capability: capabilityDetail(capability),
      directions: directionsForCapability(capability.id).map(directionCard)
    };
  });

  const relatedDirections = [...new Map(
    relatedCapabilities
      .flatMap((capability) => directionsForCapability(capability.id))
      .map((direction) => [direction.id, direction] as const)
  ).values()];

  const claimIds = new Set(relatedCapabilities.flatMap((capability) => capability.claimIds));
  const linkedClaims = [...claimIds]
    .map((claimId) => claimById.get(claimId))
    .filter((item): item is ClaimRecord => Boolean(item));

  const sourceIds = new Set(
    linkedClaims.flatMap((claim) => [...claim.supportingSourceIds, ...claim.contradictingSourceIds])
  );
  const linkedEvidenceRecords = [...sourceIds]
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item))
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

  const surname = person.name.trim().split(/\s+/).at(-1)?.toLowerCase() ?? '';
  const authoredEvidenceRecords = linkedEvidenceRecords.filter((item) =>
    surname && item.authors.some((author) => author.toLowerCase().includes(surname))
  );

  const collaboratorIds = new Set(relatedCapabilities.flatMap((capability) => capability.collaboratingActorIds ?? []));
  const collaboratorInstitutions = [...collaboratorIds]
    .map((collaboratorId) => actorById.get(collaboratorId))
    .filter((item): item is ActorRecord => Boolean(item))
    .filter((item) => item.type !== 'PERSON')
    .map((collaborator) =>
      institutionCard(
        collaborator,
        capabilities.filter((capability) => capability.actorId === collaborator.id)
      )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return {
    id: person.id,
    name: person.name,
    country: person.country,
    role: person.currentRole ?? undefined,
    relevance: person.researchRelevance ?? undefined,
    officialUrl: person.officialUrl ?? undefined,
    affiliation:
      affiliation && affiliation.type !== 'PERSON'
        ? institutionCard(affiliation, capabilities.filter((capability) => capability.actorId === affiliation.id))
        : undefined,
    collaboratorInstitutions,
    capabilityContexts,
    directions: relatedDirections.map(directionCard),
    claims: linkedClaims.map((claim) => ({
      id: claim.id,
      proposition: claim.proposition,
      confidence: humanize(claim.confidence),
      status: humanize(claim.status),
      href: `/claims/${claim.id}`
    })),
    evidence: linkedEvidenceRecords.map(evidenceCard),
    authoredEvidence: authoredEvidenceRecords.map(evidenceCard),
    evidenceStats: evidencePressureStats(linkedClaims, linkedEvidenceRecords)
  };
}


const claimById = new Map(claims.map((claim) => [claim.id, claim]));
const evidenceById = new Map(evidence.map((item) => [item.id, item]));
const deepReadById = new Map(deepReads.map((item) => [item.id, item]));

function sourceBucket(item: EvidenceRecord): 'RU' | 'COMPARATOR' {
  const country = (item.countryContext ?? '').trim().toUpperCase();
  if (country === 'RU' || country === 'RUSSIA') return 'RU';
  if (
    item.id.startsWith('PAPER-RU-') ||
    item.id.startsWith('PATENT-RU') ||
    item.id.startsWith('OFFICIAL-RU-') ||
    item.id.startsWith('OFFICIAL-KUT-') ||
    item.id.startsWith('OFFICIAL-MPEI-') ||
    item.id.startsWith('OFFICIAL-TPU-') ||
    item.id.startsWith('OFFICIAL-RAS-')
  ) return 'RU';
  return 'COMPARATOR';
}

function evidencePressureStats(claimSet: ClaimRecord[], linkedEvidence: EvidenceRecord[]) {
  const russiaSourceCount = linkedEvidence.filter((item) => sourceBucket(item) === 'RU').length;
  const paperCount = linkedEvidence.filter((item) => item.id.startsWith('PAPER-')).length;
  const patentCount = linkedEvidence.filter((item) => item.id.startsWith('PATENT-')).length;
  const deepReadCount = linkedEvidence.filter((item) => deepReadById.has(item.id)).length;

  return {
    claimCount: claimSet.length,
    evidenceCount: linkedEvidence.length,
    deepReadCount,
    russiaSourceCount,
    comparatorSourceCount: linkedEvidence.length - russiaSourceCount,
    paperCount,
    patentCount
  };
}


function claimSummary(claim: ClaimRecord) {
  return {
    id: claim.id,
    proposition: claim.proposition,
    confidence: humanize(claim.confidence),
    status: humanize(claim.status)
  };
}

function evidenceCard(item: EvidenceRecord): EvidenceCardVM {
  const deepRead = deepReadById.get(item.id);
  const supportingClaims = claims.filter((claim) => claim.supportingSourceIds.includes(item.id));
  const contradictingClaims = claims.filter((claim) => claim.contradictingSourceIds.includes(item.id));
  const allClaimIds = new Set([...supportingClaims, ...contradictingClaims].map((claim) => claim.id));

  const linkedCaps = capabilities.filter((capability) =>
    capability.claimIds.some((id) => allClaimIds.has(id))
  );

  const linkedDirs = sortedDirections.filter((direction) =>
    direction.claimIds.some((id) => allClaimIds.has(id)) ||
    direction.capabilityIds.some((id) => linkedCaps.some((capability) => capability.id === id))
  );

  const institutionNames = [...new Set(
    linkedCaps
      .map((capability) => actorById.get(capability.actorId)?.name)
      .filter((name): name is string => Boolean(name))
  )].sort();

  const peopleIds = [...new Set(linkedCaps.flatMap((capability) => capability.keyPeopleIds))].sort();
  const peopleNames = peopleIds
    .map((id) => actorById.get(id)?.name)
    .filter((name): name is string => Boolean(name))
    .sort();

  const institutionIds = [...new Set(
    linkedCaps.flatMap((capability) => institutionLineageIds(capability.actorId))
  )].sort();

  return {
    id: item.id,
    title: item.title,
    sourceType: humanize(item.sourceType),
    year: item.year ?? undefined,
    venue: item.venue ?? undefined,
    authors: item.authors,
    primaryUrl: item.primaryUrl,
    countryContext: item.countryContext ?? undefined,
    findings: item.directFindings,
    boundary: item.boundary ?? undefined,
    usageRole: item.usageRole ? humanize(item.usageRole) : undefined,
    deepReadLevel: deepRead ? humanize(deepRead.deepReadLevel) : undefined,
    reviewStatus: deepRead ? humanize(deepRead.reviewStatus) : undefined,
    supportingClaims: supportingClaims.map(claimSummary),
    contradictingClaims: contradictingClaims.map(claimSummary),
    linkedCapabilities: linkedCaps.map(capabilityDetail),
    linkedDirections: linkedDirs.map(directionCard),
    institutionNames,
    peopleNames,
    institutionIds,
    peopleIds
  };
}

export function buildEvidenceExplorerVM(): EvidenceExplorerVM {
  const records = [...evidence]
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title))
    .map(evidenceCard);

  const sourceTypes = [...new Set(records.map((record) => record.sourceType))].sort();
  const countries = [...new Set(records.map((record) => record.countryContext).filter((v): v is string => Boolean(v)))].sort();
  const years = [...new Set(records.map((record) => record.year).filter((v): v is number => typeof v === 'number'))].sort((a, b) => b - a);
  const linkedCapabilityIds = new Set(records.flatMap((record) => record.linkedCapabilities.map((capability) => capability.id)));
  const linkedDirectionIds = new Set(records.flatMap((record) => record.linkedDirections.map((direction) => direction.id)));
  const institutions = [...new Set(
    capabilities
      .filter((capability) => linkedCapabilityIds.has(capability.id))
      .map((capability) => actorById.get(capability.actorId)?.name)
      .filter((v): v is string => Boolean(v))
  )].sort();
  const people = [...new Set(
    capabilities
      .filter((capability) => linkedCapabilityIds.has(capability.id))
      .flatMap((capability) => capability.keyPeopleIds)
      .map((id) => actorById.get(id)?.name)
      .filter((v): v is string => Boolean(v))
  )].sort();

  return {
    eyebrow: 'Evidence audit',
    title: 'Evidence Explorer — All Sources',
    summary:
      'The complete verified source collection: papers, patents, official profiles, rankings, conference and journal sources. Use the filters to trace how each source supports or pressures the current research conclusions.',
    totalEvidence: evidence.length,
    totalClaims: claims.length,
    records,
    filters: {
      sourceTypes,
      countries,
      years,
      institutions,
      people,
      capabilities: [...linkedCapabilityIds].sort(),
      directions: [...linkedDirectionIds].sort()
    }
  };
}

export function buildLandscapeVM(): LandscapePageVM {
  const rows = sortedDirections.map((direction) => {
    const relatedClaims = direction.claimIds
      .map((id) => claimById.get(id))
      .filter((item): item is ClaimRecord => Boolean(item));

    const russianActors = [...new Set(
      capabilityLinks(direction)
        .map((capability) => actorById.get(capability.actorId)?.name)
        .filter((name): name is string => Boolean(name))
    )];

    return {
      direction: directionCard(direction),
      chinaLabel: 'China · domestic & global comparator baseline',
      russiaLabel: russianActors.length
        ? `Russia · ${russianActors.slice(0, 3).join(' / ')}`
        : 'Russia · linked capability owners',
      chinaBaseline: direction.strongestBaseline ?? 'No explicit comparator baseline recorded.',
      russiaResidual: direction.residualDifferentiation ?? 'No residual differentiation recorded.',
      decision: humanize(direction.investmentLane),
      supportingClaimCount: relatedClaims.filter((claim) => claim.supportingSourceIds.length > 0).length,
      contradictingClaimCount: relatedClaims.filter((claim) => claim.contradictingSourceIds.length > 0).length
    };
  });

  return {
    eyebrow: 'Comparator pressure',
    title: 'Russia vs China thermal-management landscape',
    summary:
      'This landscape does not score countries by publication counts. Each row starts from a strategic direction and shows the strongest comparator baseline, the Russian residual that survived pressure testing, its maturity and current decision lane.',
    rows
  };
}


function decisionTone(eventType: string): import('../types/view-models').Tone {
  if (eventType === 'KILL') return 'critical';
  if (eventType === 'DOWNGRADE') return 'warning';
  if (eventType === 'KEEP') return 'positive';
  return 'neutral';
}

export function buildDecisionsVM(): DecisionsPageVM {
  const events: DecisionEventVM[] = [...decisions]
    .sort((a, b) => (b.effectiveDate ?? '').localeCompare(a.effectiveDate ?? '') || b.id.localeCompare(a.id))
    .map((event) => {
      const triggerClaims = event.triggerClaimIds
        .map((id) => claimById.get(id))
        .filter((item): item is ClaimRecord => Boolean(item));
      const evidenceIds = new Set(
        triggerClaims.flatMap((claim) => [...claim.supportingSourceIds, ...claim.contradictingSourceIds])
      );
      return {
        id: event.id,
        date: event.effectiveDate ?? undefined,
        eventType: { label: humanize(event.eventType), tone: decisionTone(event.eventType) },
        subject: event.subjectId,
        previousState: event.previousState ?? undefined,
        newState: event.newState,
        rationale: event.rationale ?? undefined,
        reopenCondition: event.reopenCondition ?? undefined,
        triggerClaims: triggerClaims.map(claimSummary),
        triggerEvidence: [...evidenceIds]
          .map((id) => evidenceById.get(id))
          .filter((item): item is EvidenceRecord => Boolean(item))
          .map(evidenceCard)
      };
    });

  return {
    eyebrow: 'Decision history',
    title: 'Why the portfolio narrowed',
    summary:
      'Decision events preserve the transition from broad hypotheses to retained, downgraded or killed positions. Trigger claims and their primary evidence remain drillable.',
    events
  };
}

const frontierVenueDefinitions = [
  {
    id: 'avtfg',
    name: 'AVTiFG / АВТиФГ',
    kind: 'CONFERENCE',
    officialUrl: 'https://www.itp.nsc.ru/conferences/avtfg25/',
    purpose: 'All-Russian school-conference for thermophysics and physical fluid/gas dynamics; useful for emerging researchers, mechanisms and new topic discovery.',
    aliases: ['AVTFG', 'AVTiFG', 'АВТиФГ']
  },
  {
    id: 'rnkt',
    name: 'Russian National Heat Transfer Conference (RNKT)',
    kind: 'CONFERENCE',
    officialUrl: 'https://rnkt.ru/',
    purpose: 'Broad Russian heat-transfer discovery surface for institutions, teams and emerging topics.',
    aliases: ['RNKT', 'Russian National Heat Transfer Conference', 'РНКТ']
  },
  {
    id: 'thermophysics-aeromechanics',
    name: 'Thermophysics and Aeromechanics',
    kind: 'JOURNAL',
    officialUrl: 'https://journals.rcsi.science/0869-8635/index',
    purpose: 'Russian journal covering thermophysical mechanisms, heat/mass transfer, transport, fluid dynamics and diagnostics.',
    aliases: ['Thermophysics and Aeromechanics']
  },
  {
    id: 'high-temperature',
    name: 'High Temperature',
    kind: 'JOURNAL',
    officialUrl: 'https://energy.ihed.ras.ru/en/main',
    purpose: 'Russian thermal-physics journal covering heat/mass transfer, boiling, condensation, thermophysical properties and related experimental methods.',
    aliases: ['High Temperature', 'Teplofizika Vysokikh Temperatur']
  }
] as const;

function venueMatches(item: EvidenceRecord, aliases: readonly string[]): boolean {
  const haystack = [item.venue ?? '', item.title].join(' ').toLowerCase();
  return aliases.some((alias) => haystack.includes(alias.toLowerCase()));
}

export function buildFrontierWatchVM(): FrontierWatchVM {
  const venues: FrontierVenueVM[] = frontierVenueDefinitions.map((definition) => {
    const matchedEvidence = evidence.filter((item) => venueMatches(item, definition.aliases));
    const matchedIds = new Set(matchedEvidence.map((item) => item.id));
    const relatedClaims = claims.filter((claim) =>
      [...claim.supportingSourceIds, ...claim.contradictingSourceIds].some((id) => matchedIds.has(id))
    );
    const claimIds = new Set(relatedClaims.map((claim) => claim.id));
    const relatedCapabilities = capabilities.filter((capability) =>
      capability.claimIds.some((id) => claimIds.has(id))
    );
    const institutionMap = new Map<string, CapabilityRecord[]>();
    for (const capability of relatedCapabilities) {
      const list = institutionMap.get(capability.actorId) ?? [];
      list.push(capability);
      institutionMap.set(capability.actorId, list);
    }
    const relatedDirections = sortedDirections.filter((direction) =>
      direction.claimIds.some((id) => claimIds.has(id)) ||
      direction.capabilityIds.some((id) => relatedCapabilities.some((capability) => capability.id === id))
    );
    const years = matchedEvidence.map((item) => item.year).filter((year): year is number => typeof year === 'number');

    return {
      id: definition.id,
      name: definition.name,
      kind: definition.kind,
      officialUrl: definition.officialUrl,
      purpose: definition.purpose,
      evidenceCount: matchedEvidence.length,
      latestYear: years.length ? Math.max(...years) : undefined,
      linkedInstitutions: [...institutionMap.entries()]
        .map(([actorId, caps]) => {
          const actor = actorById.get(actorId);
          return actor ? institutionCard(actor, caps) : null;
        })
        .filter((item): item is InstitutionCardVM => Boolean(item)),
      linkedDirections: relatedDirections.map(directionCard),
      coverageNote: matchedEvidence.length
        ? 'Coverage is derived from normalized evidence venue/title metadata and linked claims.'
        : 'No normalized evidence record is currently tagged to this venue; this is a coverage gap, not evidence of inactivity.'
    };
  });

  return {
    eyebrow: 'Research maintenance',
    title: 'Frontier Watch',
    summary:
      'These venues remain discovery surfaces for lightweight monitoring. The page reports current normalized evidence coverage; it does not infer partner quality from publication or attendance alone.',
    venues,
    policyNote:
      'A new node should only be promoted when evidence shows current continuity plus direct or transferable mobile relevance, device/process evidence, or a distinct control point not already represented.'
  };
}


export function capabilityIds(): string[] {
  return capabilities.map((capability) => capability.id);
}

export function buildCapabilityPageVM(id: string): CapabilityPageVM | null {
  const capability = capabilityById.get(id);
  if (!capability) return null;

  const ownerActor = actorById.get(capability.actorId);
  const relatedClaims = capability.claimIds
    .map((claimId) => claimById.get(claimId))
    .filter((item): item is ClaimRecord => Boolean(item));

  const sourceIds = new Set(
    relatedClaims.flatMap((claim) => [...claim.supportingSourceIds, ...claim.contradictingSourceIds])
  );

  const linkedEvidenceRecords = [...sourceIds]
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item))
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title));
  const linkedEvidence = linkedEvidenceRecords.map(evidenceCard);

  const collaborators = (capability.collaboratingActorIds ?? [])
    .map((actorId) => actorById.get(actorId))
    .filter((item): item is ActorRecord => Boolean(item))
    .filter((item) => item.type !== 'PERSON')
    .map((actor) =>
      institutionCard(
        actor,
        capabilities.filter((candidate) => candidate.actorId === actor.id)
      )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return {
    capability: capabilityDetail(capability),
    owner:
      ownerActor && ownerActor.type !== 'PERSON'
        ? institutionCard(ownerActor, [capability])
        : undefined,
    collaborators,
    people: peopleForCapability(capability)
      .map((person) =>
        scholarCard(
          person,
          person.parentId ? actorById.get(person.parentId) : ownerActor
        )
      )
      .sort((a, b) => a.name.localeCompare(b.name)),
    claims: relatedClaims.map((claim) => ({
      id: claim.id,
      proposition: claim.proposition,
      confidence: humanize(claim.confidence),
      status: humanize(claim.status),
      decisionRole: claim.decisionRole ? humanize(claim.decisionRole) : undefined,
      href: `/claims/${claim.id}`
    })),
    evidence: linkedEvidence,
    evidenceStats: evidencePressureStats(relatedClaims, linkedEvidenceRecords),
    directions: directionsForCapability(capability.id).map(directionCard)
  };
}

export function buildCapabilitiesCollectionVM(): import('../types/view-models').CollectionPageVM<CapabilityDetailVM> {
  return {
    eyebrow: 'Collection',
    title: 'Capabilities',
    summary: 'Browse the documented technical capabilities, who demonstrates them, how they are bounded, and which claims or strategic directions they influence.',
    records: [...capabilities]
      .sort((a, b) => a.id.localeCompare(b.id))
      .map(capabilityDetail)
  };
}

export function buildInstitutionsCollectionVM(): import('../types/view-models').CollectionPageVM<InstitutionCardVM> {
  const records = actors
    .filter((actor) => actor.type === 'ORGANIZATION' || actor.type === 'LAB' || actor.type === 'COMPANY')
    .map((actor) => institutionCard(actor, capabilities.filter((capability) => capability.actorId === actor.id)))
    .sort((a, b) => a.name.localeCompare(b.name));
  return {
    eyebrow: 'Collection',
    title: 'Institutions & labs',
    summary: 'Browse the institutions and laboratories covered by the research, including their people, capabilities and strategic relevance.',
    records
  };
}

export function buildScholarsCollectionVM(): import('../types/view-models').CollectionPageVM<ScholarCardVM> {
  const records = actors
    .filter((actor) => actor.type === 'PERSON')
    .map((person) => scholarCard(person, person.parentId ? actorById.get(person.parentId) : undefined))
    .sort((a, b) => a.name.localeCompare(b.name));
  return {
    eyebrow: 'Collection',
    title: 'Key people',
    summary: 'Browse researchers and collaborators linked to institutions, capabilities and directions.',
    records
  };
}


function actorDescendantIds(rootId: string): Set<string> {
  const ids = new Set<string>([rootId]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const actor of actors) {
      if (actor.parentId && ids.has(actor.parentId) && !ids.has(actor.id)) {
        ids.add(actor.id);
        changed = true;
      }
    }
  }
  return ids;
}

export function buildResearchMapVM(country = 'RU'): ResearchMapVM {
  const countryActors = actors.filter((actor) => actor.country === country);
  const roots = countryActors.filter(
    (actor) => actor.type !== 'PERSON' && (!actor.parentId || actorById.get(actor.parentId)?.country !== country)
  );

  const nodes: ResearchMapNodeVM[] = [];
  const unmappedActors: Array<{ id: string; name: string; href: string }> = [];
  const allScholarIds = new Set<string>();
  const allCapabilityIds = new Set<string>();
  const allDirectionIds = new Set<string>();

  for (const root of roots) {
    const descendantIds = actorDescendantIds(root.id);
    const scopedCapabilities = capabilities.filter((cap) => descendantIds.has(cap.actorId));
    const scopedCapabilityIds = new Set(scopedCapabilities.map((cap) => cap.id));
    const scopedPeopleIds = new Set<string>();

    for (const cap of scopedCapabilities) {
      allCapabilityIds.add(cap.id);
      cap.keyPeopleIds.forEach((id) => scopedPeopleIds.add(id));
    }
    for (const actor of countryActors) {
      if (actor.type === 'PERSON' && actor.parentId && descendantIds.has(actor.parentId)) {
        scopedPeopleIds.add(actor.id);
      }
    }
    scopedPeopleIds.forEach((id) => allScholarIds.add(id));

    const linkedDirections = sortedDirections.filter((direction) =>
      direction.capabilityIds.some((id) => scopedCapabilityIds.has(id))
    );
    linkedDirections.forEach((direction) => allDirectionIds.add(direction.id));

    const priority = [...priorities]
      .sort((a, b) => Number(a.rank.slice(1)) - Number(b.rank.slice(1)))
      .find((item) => item.targetActorIds.some((id) => descendantIds.has(id)));

    const href = actorHref(root.id, root.type);
    if (typeof root.latitude !== 'number' || typeof root.longitude !== 'number' || !root.city) {
      unmappedActors.push({ id: root.id, name: root.name, href });
      continue;
    }

    nodes.push({
      actorId: root.id,
      name: root.name,
      actorType: actorKind(root.type),
      city: root.city,
      region: root.region ?? undefined,
      latitude: root.latitude,
      longitude: root.longitude,
      href,
      scholarCount: scopedPeopleIds.size,
      capabilityCount: scopedCapabilities.length,
      keyPeople: [...scopedPeopleIds]
        .map((id) => actorById.get(id))
        .filter((person): person is ActorRecord => Boolean(person))
        .slice(0, 6)
        .map((person) => ({
          id: person.id,
          name: person.name,
          href: actorHref(person.id, person.type)
        })),
      directions: linkedDirections.map((direction) => ({
        id: direction.id,
        title: directionTitle(direction.id),
        recommendation: recommendationFromLane(direction.investmentLane)
      })),
      priorityRank: priority?.rank
    });
  }

  nodes.sort((a, b) => {
    const ar = a.priorityRank ? Number(a.priorityRank.slice(1)) : 99;
    const br = b.priorityRank ? Number(b.priorityRank.slice(1)) : 99;
    return ar - br || a.city.localeCompare(b.city) || a.name.localeCompare(b.name);
  });

  return {
    country,
    title: country === 'RU' ? 'Russia research map' : `${country} research map`,
    summary:
      'Geographic navigator for institutions, labs, scholars, capabilities and strategic directions. Marker density is not a country capability score.',
    nodes,
    mappedActorCount: nodes.length,
    unmappedActorCount: unmappedActors.length,
    scholarCount: allScholarIds.size,
    capabilityCount: allCapabilityIds.size,
    directionCount: allDirectionIds.size,
    unmappedActors: unmappedActors.sort((a, b) => a.name.localeCompare(b.name))
  };
}


export function directionIds(): string[] {
  return sortedDirections.map((direction) => direction.id);
}

export function buildDirectionExplorerVM(): DirectionExplorerVM {
  return {
    title: 'Strategic Directions',
    summary:
      'Each Direction is a decision object: what problem matters, what collaboration hypothesis survives comparator pressure, and what must be proven before promotion.',
    records: sortedDirections.map((direction) => {
      const caps = capabilityLinks(direction);
      const institutionIds = new Set(caps.map((cap) => cap.actorId));
      const scholarIds = new Set(caps.flatMap((cap) => cap.keyPeopleIds));
      const relatedClaims = direction.claimIds
        .map((id) => claimById.get(id))
        .filter((item): item is ClaimRecord => Boolean(item));
      const sourceIds = new Set(
        relatedClaims.flatMap((claim) => [...claim.supportingSourceIds, ...claim.contradictingSourceIds])
      );

      return {
        direction: directionCard(direction),
        institutionCount: institutionIds.size,
        scholarCount: scholarIds.size,
        claimCount: relatedClaims.length,
        evidenceCount: sourceIds.size,
        href: `/directions/${direction.id}`
      };
    })
  };
}

export function buildDirectionPageVM(id: string): DirectionPageVM | null {
  const direction = directions.find((item) => item.id === id);
  if (!direction) return null;

  const linkedCapabilities = capabilityLinks(direction);
  const institutionMap = new Map<string, CapabilityRecord[]>();
  const peopleMap = new Map<string, ActorRecord>();

  for (const capability of linkedCapabilities) {
    const list = institutionMap.get(capability.actorId) ?? [];
    list.push(capability);
    institutionMap.set(capability.actorId, list);
    for (const person of peopleForCapability(capability)) {
      peopleMap.set(person.id, person);
    }
  }

  const relatedClaimIds = new Set([
    ...direction.claimIds,
    ...linkedCapabilities.flatMap((capability) => capability.claimIds)
  ]);
  const relatedClaims = [...relatedClaimIds]
    .map((claimId) => claimById.get(claimId))
    .filter((item): item is ClaimRecord => Boolean(item));

  const sourceIds = new Set(
    relatedClaims.flatMap((claim) => [...claim.supportingSourceIds, ...claim.contradictingSourceIds])
  );

  const linkedEvidenceRecords = [...sourceIds]
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item))
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  const linkedEvidence = linkedEvidenceRecords.map(evidenceCard);

  const directionDecisions = [...decisions]
    .filter((event) => event.subjectId === direction.id)
    .sort((a, b) => (b.effectiveDate ?? '').localeCompare(a.effectiveDate ?? ''))
    .map((event) => ({
      id: event.id,
      date: event.effectiveDate ?? undefined,
      eventType: { label: humanize(event.eventType), tone: decisionTone(event.eventType) },
      previousState: event.previousState ?? undefined,
      newState: event.newState,
      rationale: event.rationale ?? undefined,
      reopenCondition: event.reopenCondition ?? undefined
    }));

  return {
    direction: directionCard(direction),
    strongestBaseline: direction.strongestBaseline ?? undefined,
    institutions: [...institutionMap.entries()]
      .map(([actorId, caps]) => {
        const actor = actorById.get(actorId);
        return actor ? institutionCard(actor, caps, direction) : null;
      })
      .filter((item): item is InstitutionCardVM => Boolean(item))
      .sort((a, b) => a.name.localeCompare(b.name)),
    scholars: [...peopleMap.values()]
      .map((person) =>
        scholarCard(person, person.parentId ? actorById.get(person.parentId) : undefined, direction)
      )
      .sort((a, b) => a.name.localeCompare(b.name)),
    capabilities: linkedCapabilities.map(capabilityDetail),
    claims: relatedClaims.map((claim) => ({
      id: claim.id,
      proposition: claim.proposition,
      confidence: humanize(claim.confidence),
      status: humanize(claim.status),
      href: `/claims/${claim.id}`
    })),
    evidence: linkedEvidence,
    evidenceStats: evidencePressureStats(relatedClaims, linkedEvidenceRecords),
    decisions: directionDecisions
  };
}


export function claimIds(): string[] {
  return claims.map((claim) => claim.id);
}

export function buildClaimExplorerVM(): ClaimExplorerVM {
  return {
    title: 'Claims',
    summary:
      'Claims are the explicit propositions connecting primary evidence to capability and strategic Direction judgments.',
    records: [...claims]
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((claim) => {
        const linkedCapabilities = capabilities.filter((cap) => cap.claimIds.includes(claim.id));
        const linkedCapabilityIds = new Set(linkedCapabilities.map((cap) => cap.id));
        const linkedDirections = sortedDirections.filter(
          (direction) =>
            direction.claimIds.includes(claim.id) ||
            direction.capabilityIds.some((id) => linkedCapabilityIds.has(id))
        );
        return {
          id: claim.id,
          proposition: claim.proposition,
          status: humanize(claim.status),
          confidence: humanize(claim.confidence),
          decisionRole: claim.decisionRole ? humanize(claim.decisionRole) : undefined,
          supportingCount: claim.supportingSourceIds.length,
          contradictingCount: claim.contradictingSourceIds.length,
          directionCount: linkedDirections.length,
          directionIds: linkedDirections.map((direction) => direction.id),
          capabilityIds: linkedCapabilities.map((capability) => capability.id),
          institutionIds: [...new Set(linkedCapabilities.flatMap((capability) => institutionLineageIds(capability.actorId)))],
          peopleIds: [...new Set(linkedCapabilities.flatMap((capability) => capability.keyPeopleIds))],
          href: `/claims/${claim.id}`
        };
      })
  };
}

export function buildClaimPageVM(id: string): ClaimPageVM | null {
  const claim = claimById.get(id);
  if (!claim) return null;

  const linkedCapabilities = capabilities.filter((capability) => capability.claimIds.includes(claim.id));
  const linkedCapabilityIds = new Set(linkedCapabilities.map((capability) => capability.id));
  const linkedDirections = sortedDirections.filter(
    (direction) =>
      direction.claimIds.includes(claim.id) ||
      direction.capabilityIds.some((capabilityId) => linkedCapabilityIds.has(capabilityId))
  );

  const institutionMap = new Map<string, CapabilityRecord[]>();
  const peopleMap = new Map<string, ActorRecord>();
  for (const capability of linkedCapabilities) {
    const current = institutionMap.get(capability.actorId) ?? [];
    current.push(capability);
    institutionMap.set(capability.actorId, current);
    for (const person of peopleForCapability(capability)) peopleMap.set(person.id, person);
  }

  const supportingEvidenceRecords = claim.supportingSourceIds
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item));

  const contradictingEvidenceRecords = claim.contradictingSourceIds
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item));

  const supportingEvidence = supportingEvidenceRecords.map(evidenceCard);
  const contradictingEvidence = contradictingEvidenceRecords.map(evidenceCard);
  const allEvidenceRecords = [...new Map(
    [...supportingEvidenceRecords, ...contradictingEvidenceRecords].map((item) => [item.id, item] as const)
  ).values()];

  const linkedDecisions = [...decisions]
    .filter((event) => event.triggerClaimIds.includes(claim.id))
    .sort((a, b) => (b.effectiveDate ?? '').localeCompare(a.effectiveDate ?? ''))
    .map((event) => ({
      id: event.id,
      date: event.effectiveDate ?? undefined,
      eventType: { label: humanize(event.eventType), tone: decisionTone(event.eventType) },
      subject: event.subjectId,
      newState: event.newState,
      rationale: event.rationale ?? undefined
    }));

  return {
    id: claim.id,
    proposition: claim.proposition,
    status: humanize(claim.status),
    confidence: humanize(claim.confidence),
    decisionRole: claim.decisionRole ? humanize(claim.decisionRole) : undefined,
    boundary: claim.boundary ?? undefined,
    supportingEvidence,
    contradictingEvidence,
    evidenceStats: evidencePressureStats([claim], allEvidenceRecords),
    capabilities: linkedCapabilities.map(capabilityDetail),
    institutions: [...institutionMap.entries()]
      .map(([actorId, caps]) => {
        const actor = actorById.get(actorId);
        return actor ? institutionCard(actor, caps) : null;
      })
      .filter((item): item is InstitutionCardVM => Boolean(item)),
    scholars: [...peopleMap.values()]
      .map((person) => scholarCard(person, person.parentId ? actorById.get(person.parentId) : undefined)),
    directions: linkedDirections.map(directionCard),
    decisions: linkedDecisions
  };
}


export function paperIds(): string[] {
  return evidence.filter((item) => item.id.startsWith('PAPER-')).map((item) => item.id);
}

export function patentIds(): string[] {
  return evidence.filter((item) => item.id.startsWith('PATENT-')).map((item) => item.id);
}

export function buildPaperExplorerVM(): PaperExplorerVM {
  const papers = evidence
    .filter((item) => item.id.startsWith('PAPER-'))
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title));

  return {
    title: 'Papers — Scholarly Sources & Deep Reads',
    summary:
      'The scholarly-paper subset of the Evidence collection. Every Paper is also an Evidence Source; only decision-critical papers receive an additional Deep Read / 10Q layer.',
    records: papers.map((item) => {
      const card = evidenceCard(item);
      return {
        id: item.id,
        title: item.title,
        year: item.year ?? undefined,
        venue: item.venue ?? undefined,
        authors: item.authors,
        countryContext: item.countryContext ?? undefined,
        claimCount: card.supportingClaims.length + card.contradictingClaims.length,
        directionCount: card.linkedDirections.length,
        directionIds: card.linkedDirections.map((direction) => direction.id),
        capabilityIds: card.linkedCapabilities.map((capability) => capability.id),
        supportingClaimIds: card.supportingClaims.map((claim) => claim.id),
        pressureClaimIds: card.contradictingClaims.map((claim) => claim.id),
        institutionIds: card.institutionIds,
        peopleIds: card.peopleIds,
        deepReadLevel: deepReadById.get(item.id)?.deepReadLevel
          ? humanize(deepReadById.get(item.id)!.deepReadLevel)
          : undefined,
        reviewStatus: deepReadById.get(item.id)?.reviewStatus
          ? humanize(deepReadById.get(item.id)!.reviewStatus)
          : undefined,
        href: `/papers/${item.id}`
      };
    })
  };
}

export function buildPaperPageVM(id: string): PaperPageVM | null {
  const item = evidenceById.get(id);
  if (!item || !item.id.startsWith('PAPER-')) return null;

  const card = evidenceCard(item);
  const deepRead = deepReadById.get(item.id);
  const linkedCapabilityIds = new Set(card.linkedCapabilities.map((cap) => cap.id));
  const linkedCapabilities = capabilities.filter((cap) => linkedCapabilityIds.has(cap.id));
  const institutionMap = new Map<string, CapabilityRecord[]>();
  const peopleMap = new Map<string, ActorRecord>();

  for (const capability of linkedCapabilities) {
    const current = institutionMap.get(capability.actorId) ?? [];
    current.push(capability);
    institutionMap.set(capability.actorId, current);
    for (const person of peopleForCapability(capability)) peopleMap.set(person.id, person);
  }

  return {
    id: item.id,
    title: item.title,
    year: item.year ?? undefined,
    venue: item.venue ?? undefined,
    authors: item.authors,
    countryContext: item.countryContext ?? undefined,
    primaryUrl: item.primaryUrl,
    findings: item.directFindings,
    boundary: item.boundary ?? undefined,
    supportingClaims: card.supportingClaims.map((claim) => ({ ...claim, href: `/claims/${claim.id}` })),
    contradictingClaims: card.contradictingClaims.map((claim) => ({ ...claim, href: `/claims/${claim.id}` })),
    capabilities: linkedCapabilities.map(capabilityDetail),
    institutions: [...institutionMap.entries()]
      .map(([actorId, caps]) => {
        const actor = actorById.get(actorId);
        return actor ? institutionCard(actor, caps) : null;
      })
      .filter((item): item is InstitutionCardVM => Boolean(item)),
    scholars: [...peopleMap.values()]
      .map((person) => scholarCard(person, person.parentId ? actorById.get(person.parentId) : undefined)),
    directions: card.linkedDirections,
    deepRead: deepRead
      ? {
          level: humanize(deepRead.deepReadLevel),
          reviewStatus: humanize(deepRead.reviewStatus),
          reviewedAt: deepRead.reviewedAt,
          whyItMatters: deepRead.whyItMatters,
          decisionUse: humanize(deepRead.decisionUse),
          legacyOrigin: deepRead.legacyOrigin ?? undefined,
          sourcePath: deepRead.sourcePath,
          questions: deepRead.questions,
          evidenceBoundary: deepRead.evidenceBoundary,
          relatedClaimIds: deepRead.relatedClaimIds,
          relatedCapabilityIds: deepRead.relatedCapabilityIds,
          relatedDirectionIds: deepRead.relatedDirectionIds,
          relatedPriorityIds: deepRead.relatedPriorityIds
        }
      : undefined
  };
}

export function buildPatentPageVM(id: string): PatentPageVM | null {
  const item = evidenceById.get(id);
  if (!item || !item.id.startsWith('PATENT-')) return null;

  const card = evidenceCard(item);
  const deepRead = deepReadById.get(item.id);
  const linkedCapabilityIds = new Set(card.linkedCapabilities.map((cap) => cap.id));
  const linkedCapabilities = capabilities.filter((cap) => linkedCapabilityIds.has(cap.id));
  const institutionMap = new Map<string, CapabilityRecord[]>();
  const peopleMap = new Map<string, ActorRecord>();

  for (const capability of linkedCapabilities) {
    const current = institutionMap.get(capability.actorId) ?? [];
    current.push(capability);
    institutionMap.set(capability.actorId, current);
    for (const person of peopleForCapability(capability)) peopleMap.set(person.id, person);
  }

  return {
    id: item.id,
    title: item.title,
    year: item.year ?? undefined,
    authors: item.authors,
    countryContext: item.countryContext ?? undefined,
    primaryUrl: item.primaryUrl,
    findings: item.directFindings,
    boundary: item.boundary ?? undefined,
    supportingClaims: card.supportingClaims.map((claim) => ({ ...claim, href: `/claims/${claim.id}` })),
    contradictingClaims: card.contradictingClaims.map((claim) => ({ ...claim, href: `/claims/${claim.id}` })),
    capabilities: linkedCapabilities.map(capabilityDetail),
    institutions: [...institutionMap.entries()]
      .map(([actorId, caps]) => {
        const actor = actorById.get(actorId);
        return actor ? institutionCard(actor, caps) : null;
      })
      .filter((item): item is InstitutionCardVM => Boolean(item)),
    scholars: [...peopleMap.values()]
      .map((person) => scholarCard(person, person.parentId ? actorById.get(person.parentId) : undefined)),
    directions: card.linkedDirections,
    deepRead: deepRead
      ? {
          level: humanize(deepRead.deepReadLevel),
          reviewStatus: humanize(deepRead.reviewStatus),
          reviewedAt: deepRead.reviewedAt,
          whyItMatters: deepRead.whyItMatters,
          decisionUse: humanize(deepRead.decisionUse),
          legacyOrigin: deepRead.legacyOrigin ?? undefined,
          sourcePath: deepRead.sourcePath,
          questions: deepRead.questions,
          evidenceBoundary: deepRead.evidenceBoundary,
          relatedClaimIds: deepRead.relatedClaimIds,
          relatedCapabilityIds: deepRead.relatedCapabilityIds,
          relatedDirectionIds: deepRead.relatedDirectionIds,
          relatedPriorityIds: deepRead.relatedPriorityIds
        }
      : undefined
  };
}

