import type {
  DirectionCardVM,
  InstitutionCardVM,
  ScholarCardVM
} from '../types/view-models';

export const institutionFixtures: InstitutionCardVM[] = [
  {
    id: 'fixture-institution-standard',
    name: 'Example Thermal Institute',
    country: 'Fixture country',
    kindLabel: 'Institution',
    summary: 'A bounded fixture summary used to test hierarchy, metadata density and standard card rhythm.',
    capabilityCount: 3,
    peopleCount: 4,
    status: { label: 'Priority', tone: 'positive' }
  },
  {
    id: 'fixture-institution-long',
    name: 'Example Institute with an intentionally long organization name for wrapping validation',
    country: 'Fixture country',
    kindLabel: 'Institution',
    summary: 'This intentionally long text validates that card height and typography remain readable when summaries are substantially longer than the preferred editorial length. It is presentation test data only.',
    capabilityCount: 12,
    peopleCount: 9,
    status: { label: 'Reserve', tone: 'accent' }
  },
  {
    id: 'fixture-institution-sparse',
    name: 'Sparse Institution Fixture',
    country: 'Fixture country',
    kindLabel: 'Institution',
    summary: 'Optional metrics and status are deliberately absent.'
  }
];

export const scholarFixtures: ScholarCardVM[] = [
  {
    id: 'fixture-scholar-standard',
    name: 'Alex Example',
    affiliation: 'Example Thermal Institute',
    role: 'Research lead',
    relevance: 'Tests compact identity, affiliation, role and relevance hierarchy.',
    status: { label: 'Key person', tone: 'positive' }
  },
  {
    id: 'fixture-scholar-sparse',
    name: 'Longname Example-Scholar for wrapping',
    affiliation: 'An intentionally long fixture affiliation used to verify resilient text wrapping',
    relevance: 'No role or status is supplied, validating optional-state rendering.'
  }
];

export const directionFixtures: DirectionCardVM[] = [
  {
    id: 'fixture-direction-standard',
    title: 'Failure-aware thermal direction fixture',
    role: 'Strategic direction',
    recommendation: 'Advance for validation',
    lane: { label: 'Strategic candidate', tone: 'positive' },
    differentiationConfidence: 'Medium',
    phoneTransferMaturity: 'Low–Medium',
    residualDifferentiation: 'Fixture residual value text that explains why the direction remains interesting after comparator pressure.',
    nextGate: 'Fixture gate: demonstrate a measurable product-relevant advantage over a strong baseline.'
  },
  {
    id: 'fixture-direction-watch',
    title: 'Method reserve fixture',
    role: 'Reserve direction',
    recommendation: 'Monitor only',
    lane: { label: 'Watch', tone: 'warning' },
    differentiationConfidence: 'Low',
    phoneTransferMaturity: 'Low'
  }
];
