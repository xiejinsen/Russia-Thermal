export type Tone = 'neutral' | 'accent' | 'positive' | 'warning' | 'critical';

export interface StatusVM {
  label: string;
  tone: Tone;
}

export interface InstitutionCardVM {
  id: string;
  name: string;
  country: string;
  kindLabel: string;
  summary: string;
  href?: string;
  officialUrl?: string;
  capabilityCount?: number;
  peopleCount?: number;
  status?: StatusVM;
}

export interface ScholarCardVM {
  id: string;
  name: string;
  affiliation: string;
  role?: string;
  relevance: string;
  href?: string;
  status?: StatusVM;
}

export interface DirectionCardVM {
  id: string;
  title: string;
  role: string;
  recommendation: string;
  problem?: string;
  collaborationFocus?: string;
  lane: StatusVM;
  differentiationConfidence: string;
  phoneTransferMaturity: string;
  residualDifferentiation?: string;
  ourControlBoundary?: string;
  nextQuestion?: string;
  nextGate?: string;
  killGate?: string;
}

export interface OverviewStatsVM {
  institutions: number;
  people: number;
  capabilities: number;
  directions: number;
  activeDirections: number;
  strategicCandidates: number;
  reserves: number;
  holds: number;
  deepReads: number;
}

export interface OverviewDecisionVM {
  id: string;
  subject: string;
  eventType: StatusVM;
  newState: string;
  rationale?: string;
}

export interface OverviewFrontierVM {
  venueCount: number;
  coveredVenueCount: number;
  matchedEvidence: number;
  latestYear?: number;
}

export interface OverviewPageVM {
  eyebrow: string;
  title: string;
  summary: string;
  thesis: string;
  theoryBasis: string[];
  thesisBoundary?: string;
  thesisAssessedAt?: string;
  stats: OverviewStatsVM;
  priorities: PartnerPriorityVM[];
  landscape: LandscapeRowVM[];
  killDecisions: OverviewDecisionVM[];
  frontier: OverviewFrontierVM;
  institutions: InstitutionCardVM[];
  scholars: ScholarCardVM[];
  directions: DirectionCardVM[];
}

export interface PartnerGroupVM {
  id: string;
  title: string;
  description: string;
  directions: DirectionCardVM[];
  institutions: InstitutionCardVM[];
  scholars: ScholarCardVM[];
}

export interface PartnerPriorityVM {
  id: string;
  rank: string;
  priorityClass: string;
  readiness?: string;
  recommendedAction?: string;
  rationale?: string;
  institutions: InstitutionCardVM[];
  directions: DirectionCardVM[];
  scholars: ScholarCardVM[];
}

export interface PartnerPortfolioVM {
  eyebrow: string;
  title: string;
  summary: string;
  priorities: PartnerPriorityVM[];
  groups: PartnerGroupVM[];
}

export interface CapabilityDetailVM {
  id: string;
  statement: string;
  maturity: string;
  evidenceConfidence: string;
  targetFit: string;
  family?: string;
  topics: string[];
  platformTransfer: Array<{ platform: string; level: string }>;
  technicalScope: string[];
  transferBoundary?: string;
  strategicUse?: string;
  portfolioDisposition: string;
}

export interface CapabilityPageVM {
  capability: CapabilityDetailVM;
  owner?: InstitutionCardVM;
  collaborators: InstitutionCardVM[];
  people: ScholarCardVM[];
  claims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
    decisionRole?: string;
    href: string;
  }>;
  evidence: EvidenceCardVM[];
  evidenceStats: {
    claimCount: number;
    evidenceCount: number;
    deepReadCount: number;
    russiaSourceCount: number;
    comparatorSourceCount: number;
    paperCount: number;
    patentCount: number;
  };
  directions: DirectionCardVM[];
}

export interface InstitutionPageVM {
  id: string;
  name: string;
  country: string;
  kindLabel: string;
  role?: string;
  relevance?: string;
  officialUrl?: string;
  parent?: InstitutionCardVM;
  children: InstitutionCardVM[];
  people: ScholarCardVM[];
  collaborators: InstitutionCardVM[];
  capabilities: CapabilityDetailVM[];
  directions: DirectionCardVM[];
  claims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
    href: string;
  }>;
  evidence: EvidenceCardVM[];
  evidenceStats: {
    claimCount: number;
    evidenceCount: number;
    deepReadCount: number;
    russiaSourceCount: number;
    comparatorSourceCount: number;
    paperCount: number;
    patentCount: number;
  };
}

export interface ScholarPageVM {
  id: string;
  name: string;
  country: string;
  role?: string;
  relevance?: string;
  officialUrl?: string;
  affiliation?: InstitutionCardVM;
  collaboratorInstitutions: InstitutionCardVM[];
  capabilityContexts: Array<{
    institution: InstitutionCardVM;
    capability: CapabilityDetailVM;
    directions: DirectionCardVM[];
  }>;
  directions: DirectionCardVM[];
  claims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
    href: string;
  }>;
  evidence: EvidenceCardVM[];
  authoredEvidence: EvidenceCardVM[];
  evidenceStats: {
    claimCount: number;
    evidenceCount: number;
    deepReadCount: number;
    russiaSourceCount: number;
    comparatorSourceCount: number;
    paperCount: number;
    patentCount: number;
  };
}

export interface EvidenceCardVM {
  id: string;
  title: string;
  sourceType: string;
  year?: number;
  venue?: string;
  authors: string[];
  primaryUrl: string;
  countryContext?: string;
  findings: string[];
  boundary?: string;
  usageRole?: string;
  deepReadLevel?: string;
  reviewStatus?: string;
  supportingClaims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
  }>;
  contradictingClaims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
  }>;
  linkedCapabilities: CapabilityDetailVM[];
  linkedDirections: DirectionCardVM[];
  institutionNames: string[];
  peopleNames: string[];
  institutionIds: string[];
  peopleIds: string[];
}

export interface EvidenceExplorerVM {
  eyebrow: string;
  title: string;
  summary: string;
  totalEvidence: number;
  totalClaims: number;
  records: EvidenceCardVM[];
  filters: {
    sourceTypes: string[];
    countries: string[];
    years: number[];
    institutions: string[];
    people: string[];
    capabilities: string[];
    directions: string[];
  };
}

export interface LandscapeRowVM {
  direction: DirectionCardVM;
  chinaLabel: string;
  russiaLabel: string;
  chinaBaseline: string;
  russiaResidual: string;
  decision: string;
  supportingClaimCount: number;
  contradictingClaimCount: number;
}

export interface LandscapePageVM {
  eyebrow: string;
  title: string;
  summary: string;
  rows: LandscapeRowVM[];
}

export interface DecisionEventVM {
  id: string;
  date?: string;
  eventType: StatusVM;
  subject: string;
  previousState?: string;
  newState: string;
  rationale?: string;
  reopenCondition?: string;
  triggerClaims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
  }>;
  triggerEvidence: EvidenceCardVM[];
}

export interface DecisionsPageVM {
  eyebrow: string;
  title: string;
  summary: string;
  events: DecisionEventVM[];
}

export interface FrontierVenueVM {
  id: string;
  name: string;
  kind: 'CONFERENCE' | 'JOURNAL';
  officialUrl: string;
  purpose: string;
  evidenceCount: number;
  latestYear?: number;
  linkedInstitutions: InstitutionCardVM[];
  linkedDirections: DirectionCardVM[];
  coverageNote: string;
}

export interface FrontierWatchVM {
  eyebrow: string;
  title: string;
  summary: string;
  venues: FrontierVenueVM[];
  policyNote: string;
}

export interface CollectionPageVM<T> {
  eyebrow: string;
  title: string;
  summary: string;
  records: T[];
}


export interface ResearchMapNodeVM {
  actorId: string;
  name: string;
  actorType: string;
  city: string;
  region?: string;
  latitude: number;
  longitude: number;
  href: string;
  scholarCount: number;
  capabilityCount: number;
  keyPeople: Array<{ id: string; name: string; href: string }>;
  directions: Array<{ id: string; title: string; recommendation: string }>;
  priorityRank?: string;
}

export interface ResearchMapVM {
  country: string;
  title: string;
  summary: string;
  nodes: ResearchMapNodeVM[];
  mappedActorCount: number;
  unmappedActorCount: number;
  scholarCount: number;
  capabilityCount: number;
  directionCount: number;
  unmappedActors: Array<{ id: string; name: string; href: string }>;
}


export interface DirectionExplorerVM {
  title: string;
  summary: string;
  records: Array<{
    direction: DirectionCardVM;
    institutionCount: number;
    scholarCount: number;
    claimCount: number;
    evidenceCount: number;
    href: string;
  }>;
}

export interface DirectionPageVM {
  direction: DirectionCardVM;
  strongestBaseline?: string;
  institutions: InstitutionCardVM[];
  scholars: ScholarCardVM[];
  capabilities: CapabilityDetailVM[];
  claims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
    href: string;
  }>;
  evidence: EvidenceCardVM[];
  evidenceStats: {
    claimCount: number;
    evidenceCount: number;
    deepReadCount: number;
    russiaSourceCount: number;
    comparatorSourceCount: number;
    paperCount: number;
    patentCount: number;
  };
  decisions: Array<{
    id: string;
    date?: string;
    eventType: StatusVM;
    previousState?: string;
    newState: string;
    rationale?: string;
    reopenCondition?: string;
  }>;
}


export interface ClaimExplorerVM {
  title: string;
  summary: string;
  records: Array<{
    id: string;
    proposition: string;
    status: string;
    confidence: string;
    decisionRole?: string;
    supportingCount: number;
    contradictingCount: number;
    directionCount: number;
    directionIds: string[];
    capabilityIds: string[];
    institutionIds: string[];
    peopleIds: string[];
    href: string;
  }>;
}

export interface ClaimPageVM {
  id: string;
  proposition: string;
  status: string;
  confidence: string;
  decisionRole?: string;
  boundary?: string;
  supportingEvidence: EvidenceCardVM[];
  contradictingEvidence: EvidenceCardVM[];
  evidenceStats: {
    claimCount: number;
    evidenceCount: number;
    deepReadCount: number;
    russiaSourceCount: number;
    comparatorSourceCount: number;
    paperCount: number;
    patentCount: number;
  };
  capabilities: CapabilityDetailVM[];
  institutions: InstitutionCardVM[];
  scholars: ScholarCardVM[];
  directions: DirectionCardVM[];
  decisions: Array<{
    id: string;
    date?: string;
    eventType: StatusVM;
    subject: string;
    newState: string;
    rationale?: string;
  }>;
}


export interface PaperExplorerVM {
  title: string;
  summary: string;
  records: Array<{
    id: string;
    title: string;
    year?: number;
    venue?: string;
    authors: string[];
    countryContext?: string;
    claimCount: number;
    directionCount: number;
    directionIds: string[];
    capabilityIds: string[];
    supportingClaimIds: string[];
    pressureClaimIds: string[];
    institutionIds: string[];
    peopleIds: string[];
    deepReadLevel?: string;
    reviewStatus?: string;
    href: string;
  }>;
}

export interface DeepReadDetailVM {
  level: string;
  reviewStatus: string;
  reviewedAt: string;
  whyItMatters: string;
  decisionUse: string;
  legacyOrigin?: string;
  sourcePath: string;
  questions: Array<{ number: number; title: string; body: string }>;
  evidenceBoundary: {
    sourceFacts: string;
    analystInference: string;
    unknownRequests: string;
  };
  relatedClaimIds: string[];
  relatedCapabilityIds: string[];
  relatedDirectionIds: string[];
  relatedPriorityIds: string[];
}

export interface PaperPageVM {
  id: string;
  title: string;
  year?: number;
  venue?: string;
  authors: string[];
  countryContext?: string;
  primaryUrl: string;
  findings: string[];
  boundary?: string;
  supportingClaims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
    href: string;
  }>;
  contradictingClaims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
    href: string;
  }>;
  capabilities: CapabilityDetailVM[];
  institutions: InstitutionCardVM[];
  scholars: ScholarCardVM[];
  directions: DirectionCardVM[];
  deepRead?: DeepReadDetailVM;
}


export interface PatentPageVM {
  id: string;
  title: string;
  year?: number;
  authors: string[];
  countryContext?: string;
  primaryUrl: string;
  findings: string[];
  boundary?: string;
  supportingClaims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
    href: string;
  }>;
  contradictingClaims: Array<{
    id: string;
    proposition: string;
    confidence: string;
    status: string;
    href: string;
  }>;
  capabilities: CapabilityDetailVM[];
  institutions: InstitutionCardVM[];
  scholars: ScholarCardVM[];
  directions: DirectionCardVM[];
  deepRead?: DeepReadDetailVM;
}
