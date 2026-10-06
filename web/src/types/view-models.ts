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
  lane: StatusVM;
  differentiationConfidence: string;
  phoneTransferMaturity: string;
  residualDifferentiation?: string;
  nextGate?: string;
}

export interface OverviewStatsVM {
  institutions: number;
  people: number;
  capabilities: number;
  directions: number;
  activeDirections: number;
}

export interface OverviewPageVM {
  eyebrow: string;
  title: string;
  summary: string;
  stats: OverviewStatsVM;
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
  technicalScope: string[];
  transferBoundary?: string;
  strategicUse?: string;
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
  capabilities: CapabilityDetailVM[];
  directions: DirectionCardVM[];
}

export interface ScholarPageVM {
  id: string;
  name: string;
  country: string;
  role?: string;
  relevance?: string;
  officialUrl?: string;
  affiliation?: InstitutionCardVM;
  capabilityContexts: Array<{
    institution: InstitutionCardVM;
    capability: CapabilityDetailVM;
    directions: DirectionCardVM[];
  }>;
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
