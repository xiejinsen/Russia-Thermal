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

export interface OverviewPageVM {
  eyebrow: string;
  title: string;
  summary: string;
  institutions: InstitutionCardVM[];
  scholars: ScholarCardVM[];
  directions: DirectionCardVM[];
}
