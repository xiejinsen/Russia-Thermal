/** Russia-first scientific capability atlas, derived from existing normalized objects.
 * An evidence edge means a source supports/constrains a Claim connected to
 * a capability. It does NOT establish article authorship or current staff membership.
 */
import { actors, capabilities, claims, evidence, priorities } from '../data/load-normalized';
import type { ActorRecord, CapabilityRecord, EvidenceRecord } from '../types/normalized';

const actorById = new Map(actors.map(a => [a.id, a]));
const evidenceById = new Map(evidence.map(s => [s.id, s]));
const claimById = new Map(claims.map(c => [c.id, c]));
const familyLabels: Record<string, string> = {
  PASSIVE_HARDWARE: '被动散热与两相传输',
  ACTIVE_HARDWARE: '主动冷却',
  ENABLING: '测试、机理与可靠性方法',
  SOFTWARE_SYSTEM: '软件与系统热管理',
  UNCLASSIFIED: '能力类型待完善',
};
const depthRank: Record<string, number> = { PRIMARY: 0, SELECTIVE: 1, CONTEXT_ONLY: 2 };

function descendantInstitutions(rootId: string): Set<string> {
  const ids = new Set([rootId]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const actor of actors) {
      if (actor.parentId && actor.type !== 'PERSON' && ids.has(actor.parentId) && !ids.has(actor.id)) {
        ids.add(actor.id);
        changed = true;
      }
    }
  }
  return ids;
}

function rootInstitution(actor: ActorRecord): ActorRecord {
  let node = actor;
  const visited = new Set<string>();
  while (node.parentId && !visited.has(node.id)) {
    visited.add(node.id);
    const parent = actorById.get(node.parentId);
    if (!parent || parent.type === 'PERSON' || parent.country !== 'RU') break;
    node = parent;
  }
  return node;
}

export interface RussiaAtlasEntry {
  id: string;
  name: string;
  city: string;
  researchClass: string;
  researchDepth: string;
  profileSummary: string;
  publicGaps: string[];
  officialUrl: string | null;
  teamCount: number;
  people: Array<{ id: string; name: string; role: string | null }>;
  capabilities: Array<{ id: string; statement: string; transferBoundary: string | null; family: string }>;
  families: string[];
  topicIds: string[];
  priorityRanks: string[];
  // Linked paper records are context/evidence nodes, NEVER implied author publications.
  linkedRuPapers: Array<{ id: string; title: string; year: number | null; url: string }>;
  searchText: string;
}

export const russiaAtlas = actors
  .filter(actor => actor.country === 'RU' && actor.type !== 'PERSON')
  .filter(actor => actor.recordState !== 'HISTORICAL_ALIAS' && !actor.identityAliasOf)
  .filter(actor => rootInstitution(actor).id === actor.id)
  .filter(actor => actor.researchClass?.startsWith('ACADEMIC_') || actor.researchDepth === 'PRIMARY' || actor.researchDepth === 'SELECTIVE')
  .map(root => {
    const institutionIds = descendantInstitutions(root.id);
    const scoped = capabilities.filter(cap => institutionIds.has(cap.actorId));
    const people = actors
      .filter(person => person.type === 'PERSON' && person.parentId && institutionIds.has(person.parentId))
      .map(person => ({ id: person.id, name: person.name, role: person.currentRole }))
      .sort((a,b) => a.name.localeCompare(b.name));

    const sourceIds = new Set(scoped
      .flatMap(cap => cap.claimIds)
      .map(cid => claimById.get(cid))
      .filter((claim): claim is NonNullable<typeof claim> => Boolean(claim))
      .flatMap(claim => [...claim.supportingSourceIds, ...claim.contradictingSourceIds]));
    const linkedRuPapers = [...sourceIds]
      .map(id => evidenceById.get(id))
      .filter((item): item is EvidenceRecord => Boolean(item && item.sourceType === 'PAPER' && item.countryContext === 'RU'))
      .sort((a,b) => (b.year ?? 0) - (a.year ?? 0))
      .map(p => ({ id:p.id, title:p.title, year:p.year, url:p.primaryUrl }));

    const families = [...new Set(scoped.map(cap => cap.capabilityFamily ?? 'UNCLASSIFIED'))];
    const topics = [...new Set(scoped.flatMap(cap => cap.capabilityTopics ?? []))];
    const rank = priorities.filter(priority => priority.targetActorIds.some(id => institutionIds.has(id))).map(p => p.rank);
    const teamCount = [...institutionIds].filter(id => id !== root.id && !actorById.get(id)?.identityAliasOf && actorById.get(id)?.recordState !== 'HISTORICAL_ALIAS').length;
    const profileSummary = root.atlasProfile?.leadershipSummary ?? root.researchRelevance ?? '该机构已纳入有界科研样本，公开能力和手机迁移边界请查看原始档案。';

    return {
      id: root.id,
      name: root.name,
      city: root.city ?? '城市尚未确认',
      researchClass: root.researchClass ?? '未分类',
      researchDepth: root.researchDepth ?? 'CONTEXT_ONLY',
      profileSummary,
      publicGaps: root.atlasProfile?.publicGaps ?? [],
      officialUrl: root.officialUrl,
      teamCount,
      people,
      capabilities: scoped.map(cap => ({
        id: cap.id, statement: cap.statement, transferBoundary: cap.transferBoundary,
        family: cap.capabilityFamily ?? 'UNCLASSIFIED'
      })),
      families,
      topicIds: topics,
      priorityRanks: rank,
      linkedRuPapers,
      searchText: [
        root.name, root.city ?? '', profileSummary, root.researchClass ?? '',
        ...people.map(person => person.name),
        ...scoped.flatMap(cap => [cap.statement, ...cap.technicalScope, ...(cap.capabilityTopics ?? [])]),
      ].join(' ').toLowerCase()
    };
  })
  .sort((a,b) =>
    (depthRank[a.researchDepth] ?? 9) - (depthRank[b.researchDepth] ?? 9) ||
    a.name.localeCompare(b.name)
  );

export const russiaAtlasFamilies = familyLabels;
