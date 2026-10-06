import type { StatusVM, Tone } from '../types/view-models';

const laneTone: Record<string, Tone> = {
  STRATEGIC_CANDIDATE: 'positive',
  STAGE0_CHALLENGER: 'accent',
  RESERVE: 'accent',
  WATCH: 'warning',
  HOLD: 'warning',
  KILL: 'critical'
};

export function statusFromLane(lane: string): StatusVM {
  return {
    label: humanize(lane),
    tone: laneTone[lane] ?? 'neutral'
  };
}

export function humanize(value: string): string {
  return value
    .replace(/^DIR-/, '')
    .replace(/[_-]+/g, ' ')
    .toLowerCase()
    .replace(/\butvc\b/g, 'UTVC')
    .replace(/\blhp\b/g, 'LHP')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function directionTitle(id: string): string {
  return humanize(id);
}

export function actorKind(type: string): string {
  return humanize(type);
}

export function laneRank(lane: string): number {
  const order: Record<string, number> = {
    STRATEGIC_CANDIDATE: 0,
    STAGE0_CHALLENGER: 1,
    RESERVE: 2,
    WATCH: 3,
    HOLD: 4
  };
  return order[lane] ?? 99;
}
