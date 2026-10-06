import actorsJson from '../../data/generated/actors.json';
import capabilitiesJson from '../../data/generated/capabilities.json';
import directionsJson from '../../data/generated/directions.json';
import prioritiesJson from '../../data/generated/priorities.json';
import type {
  ActorRecord,
  CapabilityRecord,
  DirectionRecord,
  Envelope,
  PartnerPriorityRecord
} from '../types/normalized';

export const actors = (actorsJson as Envelope<ActorRecord>).records;
export const capabilities = (capabilitiesJson as Envelope<CapabilityRecord>).records;
export const directions = (directionsJson as Envelope<DirectionRecord>).records;

export const priorities = (prioritiesJson as Envelope<PartnerPriorityRecord>).records;
