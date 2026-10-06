import actorsJson from '../../data/generated/actors.json';
import capabilitiesJson from '../../data/generated/capabilities.json';
import directionsJson from '../../data/generated/directions.json';
import prioritiesJson from '../../data/generated/priorities.json';
import evidenceJson from '../../data/generated/evidence.json';
import claimsJson from '../../data/generated/claims.json';
import decisionsJson from '../../data/generated/decisions.json';
import type {
  ActorRecord,
  CapabilityRecord,
  DirectionRecord,
  Envelope,
  PartnerPriorityRecord,
  EvidenceRecord,
  ClaimRecord,
  DecisionRecord
} from '../types/normalized';

export const actors = (actorsJson as Envelope<ActorRecord>).records;
export const capabilities = (capabilitiesJson as Envelope<CapabilityRecord>).records;
export const directions = (directionsJson as Envelope<DirectionRecord>).records;

export const priorities = (prioritiesJson as Envelope<PartnerPriorityRecord>).records;

export const evidence = (evidenceJson as Envelope<EvidenceRecord>).records;
export const claims = (claimsJson as Envelope<ClaimRecord>).records;

export const decisions = (decisionsJson as Envelope<DecisionRecord>).records;
