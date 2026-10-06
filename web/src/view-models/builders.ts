import { actors, capabilities, directions, priorities, evidence, claims, decisions, syntheses } from '../data/load-normalized';
import type { ActorRecord, CapabilityRecord, DirectionRecord, EvidenceRecord, ClaimRecord } from '../types/normalized';
import type {
  CapabilityDetailVM,
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
  PaperPageVM
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
    nextGate: direction.promotionGate ?? undefined
  };
}

function capabilityDetail(capability: CapabilityRecord): CapabilityDetailVM {
  return {
    id: capability.id,
    statement: capability.statement,
    maturity: humanize(capability.maturity),
    evidenceConfidence: humanize(capability.evidenceConfidence),
    targetFit: humanize(capability.targetFit),
    technicalScope: capability.technicalScope,
    transferBoundary: capability.transferBoundary ?? undefined,
    strategicUse: capability.strategicUse ?? undefined
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
      activeDirections: active.length
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
    title: 'Partners organized by canonical investment lane',
    summary:
      'Partner priority and technical investment lane are separate dimensions. P1/P2/P3 come from canonical priority decision objects; lane groupings continue to come from Direction records.',
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

  const ownCapabilities = capabilities.filter((capability) => capability.actorId === actor.id);
  const childActors = actors.filter((candidate) => candidate.parentId === actor.id && candidate.type !== 'PERSON');
  const directPeople = actors.filter((candidate) => candidate.parentId === actor.id && candidate.type === 'PERSON');
  const capabilityPeople = ownCapabilities.flatMap(peopleForCapability);
  const peopleMap = new Map([...directPeople, ...capabilityPeople].map((person) => [person.id, person]));

  const linkedDirections = sortedDirections.filter((direction) =>
    direction.capabilityIds.some((capabilityId) => ownCapabilities.some((capability) => capability.id === capabilityId))
  );

  const parent = actor.parentId ? actorById.get(actor.parentId) : undefined;

  return {
    id: actor.id,
    name: actor.name,
    country: actor.country,
    kindLabel: actorKind(actor.type),
    role: actor.currentRole ?? undefined,
    relevance: actor.researchRelevance ?? undefined,
    officialUrl: actor.officialUrl ?? undefined,
    parent: parent && parent.type !== 'PERSON' ? institutionCard(parent, capabilities.filter((c) => c.actorId === parent.id)) : undefined,
    children: childActors
      .map((child) => institutionCard(child, capabilities.filter((c) => c.actorId === child.id)))
      .sort((a, b) => a.name.localeCompare(b.name)),
    people: [...peopleMap.values()]
      .map((person) => scholarCard(person, actor))
      .sort((a, b) => a.name.localeCompare(b.name)),
    capabilities: ownCapabilities.map(capabilityDetail),
    directions: linkedDirections.map(directionCard)
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
    capabilityContexts
  };
}


const claimById = new Map(claims.map((claim) => [claim.id, claim]));
const evidenceById = new Map(evidence.map((item) => [item.id, item]));

function claimSummary(claim: ClaimRecord) {
  return {
    id: claim.id,
    proposition: claim.proposition,
    confidence: humanize(claim.confidence),
    status: humanize(claim.status)
  };
}

function evidenceCard(item: EvidenceRecord): EvidenceCardVM {
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
    supportingClaims: supportingClaims.map(claimSummary),
    contradictingClaims: contradictingClaims.map(claimSummary),
    linkedCapabilities: linkedCaps.map(capabilityDetail),
    linkedDirections: linkedDirs.map(directionCard)
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
    eyebrow: 'Evidence graph',
    title: 'Evidence Explorer',
    summary:
      'Primary sources are shown with the Claims they support or contradict, then connected onward to Capabilities and Directions. Filters operate on derived normalized relations and never rewrite canonical research state.',
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
      chinaLabel: 'China · SJTU / domestic & global baseline',
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
      'This landscape does not score countries by publication counts. Each row starts from a canonical Direction and shows the strongest comparator baseline, the residual Russian differentiation that survived pressure testing, maturity, and decision lane.',
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


export function buildCapabilitiesCollectionVM(): import('../types/view-models').CollectionPageVM<CapabilityDetailVM> {
  return {
    eyebrow: 'Collection',
    title: 'Capabilities',
    summary: 'Browse all normalized technical capabilities. Each record remains owned by its canonical actor and linked onward to claims and strategic directions.',
    records: [...capabilities]
      .sort((a, b) => a.id.localeCompare(b.id))
      .map(capabilityDetail)
  };
}

export function buildInstitutionsCollectionVM(): import('../types/view-models').CollectionPageVM<InstitutionCardVM> {
  const records = actors
    .filter((actor) => actor.type === 'ORGANIZATION' || actor.type === 'LAB')
    .map((actor) => institutionCard(actor, capabilities.filter((capability) => capability.actorId === actor.id)))
    .sort((a, b) => a.name.localeCompare(b.name));
  return {
    eyebrow: 'Collection',
    title: 'Institutions & labs',
    summary: 'Browse the organizations and laboratories represented in the canonical Actor graph.',
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

  const relatedClaims = direction.claimIds
    .map((claimId) => claimById.get(claimId))
    .filter((item): item is ClaimRecord => Boolean(item));

  const sourceIds = new Set(
    relatedClaims.flatMap((claim) => [...claim.supportingSourceIds, ...claim.contradictingSourceIds])
  );

  const linkedEvidence = [...sourceIds]
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item))
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    .map(evidenceCard);

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
          supportingCount: claim.supportingSourceIds.length,
          contradictingCount: claim.contradictingSourceIds.length,
          directionCount: linkedDirections.length,
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

  const supportingEvidence = claim.supportingSourceIds
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item))
    .map(evidenceCard);

  const contradictingEvidence = claim.contradictingSourceIds
    .map((sourceId) => evidenceById.get(sourceId))
    .filter((item): item is EvidenceRecord => Boolean(item))
    .map(evidenceCard);

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
    boundary: claim.boundary ?? undefined,
    supportingEvidence,
    contradictingEvidence,
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

export function buildPaperExplorerVM(): PaperExplorerVM {
  const papers = evidence
    .filter((item) => item.id.startsWith('PAPER-'))
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title));

  return {
    title: 'Papers',
    summary:
      'Peer-reviewed and scholarly paper records connected to the Claim / Capability / Direction graph. Paper pages summarize only canonical extracted findings and boundaries.',
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
        href: `/papers/${item.id}`
      };
    })
  };
}

export function buildPaperPageVM(id: string): PaperPageVM | null {
  const item = evidenceById.get(id);
  if (!item || !item.id.startsWith('PAPER-')) return null;

  const card = evidenceCard(item);
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
    directions: card.linkedDirections
  };
}
