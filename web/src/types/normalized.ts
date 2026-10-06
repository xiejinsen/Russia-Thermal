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
  claimIds: string[];
  technicalScope: string[];
  transferBoundary: string | null;
  strategicUse: string | null;
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
  strongestBaseline: string | null;
  residualDifferentiation: string | null;
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
