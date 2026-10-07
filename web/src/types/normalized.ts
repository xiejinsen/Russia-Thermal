export interface Envelope<T> {
  schemaVersion: string;
  generatedAt: string;
  records: T[];
}

export interface ActorRecord {
  id: string;
  type: 'ORGANIZATION' | 'LAB' | 'PERSON' | 'COMPANY';
  name: string;
  country: string;
  parentId: string | null;
  currentRole: string | null;
  officialUrl: string | null;
  publicContact: string | null;
  researchRelevance: string | null;
  city: string | null;
  region: string | null;
  latitude: number | null;
  longitude: number | null;
  locationVerifiedAt: string | null;
  sourcePath: string;
}

export interface CapabilityRecord {
  id: string;
  actorId: string;
  statement: string;
  maturity: string;
  evidenceConfidence: string;
  targetFit: string;
  keyPeopleIds: string[];
  collaboratingActorIds: string[];
  claimIds: string[];
  technicalScope: string[];
  transferBoundary: string | null;
  strategicUse: string | null;
  portfolioDisposition: 'DIRECTION_LINKED' | 'COMPARATOR_ONLY' | 'SUPPORT_ONLY' | 'BACKGROUND_KILLED_THESIS' | 'UNRESOLVED';
  sourcePath: string;
}

export interface DirectionRecord {
  id: string;
  role: string;
  investmentLane: string;
  differentiationConfidence: string;
  phoneTransferMaturity: string;
  capabilityIds: string[];
  claimIds: string[];
  problem: string | null;
  strategicHypothesis: string | null;
  strongestBaseline: string | null;
  residualDifferentiation: string | null;
  internalControlBoundary: string | null;
  nextQuestion: string | null;
  promotionGate: string | null;
  killGate: string | null;
  sourcePath: string;
}

export interface PartnerPriorityRecord {
  id: string;
  rank: string;
  priorityClass: string;
  targetActorIds: string[];
  relatedDirectionIds: string[];
  collaborationReadiness: string | null;
  recommendedAction: string | null;
  rationale: string | null;
  sourcePath: string;
}

export interface EvidenceRecord {
  id: string;
  sourceType: string;
  title: string;
  primaryUrl: string;
  year: number | null;
  authors: string[];
  venue: string | null;
  countryContext: string | null;
  directFindings: string[];
  boundary: string | null;
  usageRole: 'CONTEXT_PROFILE' | 'RANKING_CONTEXT' | 'FRONTIER_DISCOVERY' | 'BACKGROUND_CONTEXT' | 'UNRESOLVED' | null;
  sourcePath: string;
}

export interface DeepReadQuestionRecord {
  number: number;
  title: string;
  body: string;
}

export interface DeepReadRecord {
  id: string;
  deepReadLevel: 'TIER_A' | 'TIER_B';
  reviewStatus: string;
  reviewedAt: string;
  whyItMatters: string;
  decisionUse: string;
  legacyOrigin: string | null;
  relatedClaimIds: string[];
  relatedCapabilityIds: string[];
  relatedDirectionIds: string[];
  relatedPriorityIds: string[];
  questions: DeepReadQuestionRecord[];
  evidenceBoundary: {
    sourceFacts: string;
    analystInference: string;
    unknownRequests: string;
  };
  sourcePath: string;
}

export interface ClaimRecord {
  id: string;
  proposition: string;
  status: string;
  confidence: string;
  supportingSourceIds: string[];
  contradictingSourceIds: string[];
  boundary: string | null;
  decisionRole: 'PARTNER_READINESS' | 'PORTFOLIO_RATIONALE' | 'COMPARATOR_UMBRELLA' | 'FRONTIER_DISCOVERY' | 'EVIDENCE_GAP' | 'BACKGROUND' | 'UNRESOLVED' | null;
  sourcePath: string;
}

export interface DecisionRecord {
  id: string;
  eventType: string;
  subjectId: string;
  newState: string;
  effectiveDate: string | null;
  previousState: string | null;
  triggerClaimIds: string[];
  triggerExperimentIds: string[];
  rationale: string | null;
  reopenCondition: string | null;
  sourcePath: string;
}


export interface SynthesisRecord {
  id: string;
  scope: string;
  conclusion: string;
  implication: string;
  theoryBasis: string[];
  supportingClaimIds: string[];
  supportingDirectionIds: string[];
  supportingPriorityIds: string[];
  keyEvidenceIds: string[];
  boundary: string | null;
  reopenCondition: string | null;
  assessedAt: string | null;
  sourcePath: string;
}
