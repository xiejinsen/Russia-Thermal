/**
 * Curated visual prominence is a navigation aid, not an extra scientific claim.
 * The original Source/Claim/Decision objects remain authoritative.
 */
export type SourceEmphasis = 'decision' | 'comparator' | 'archive';
export const coreSourceContexts: Record<string, {label:string; context:string;claimId?:string;emphasis:SourceEmphasis}> = {
 'PAPER-RU-DRY-001':{label:'核心结论原文',context:'P1 · 干斑观测的实验依据',claimId:'CLM-PAV-002',emphasis:'decision'},
 'PAPER-RU-AGE-001':{label:'核心结论原文',context:'P2 · 长期老化的实际观测；早期预警仍未证实',claimId:'CLM-MPEI-008',emphasis:'decision'},
 'PAPER-CN-UTVC-WP-001':{label:'关键中国对照',context:'超薄均热板研究基线；不可跨装置直接排名',emphasis:'comparator'},
 'PATENT-CN-VC-AGING-001':{label:'关键专利对照',context:'中国 VC 老化测试现有技术；不等同服役中预警',emphasis:'comparator'},
 'PATENT-GLOBAL-DRYOUT-OBS-001':{label:'关键专利对照',context:'干涸状态监测的现有技术；不证明手机级适用',emphasis:'comparator'}
};
export const sourceEmphasis=(id:string):SourceEmphasis => coreSourceContexts[id]?.emphasis??'archive';
export const sourceContext=(id:string)=>coreSourceContexts[id];
export const sourceKindLabel=(id:string,type?:string)=>{
 if(id.startsWith('PAPER-')||type==='PAPER')return '原始论文';
 if(id.startsWith('PATENT-')||type==='PATENT')return '专利原文';
 return '官方／其他资料';
};
export const countryName=(v?:string)=>v==='RU'?'俄罗斯':v==='CN'?'中国':v==='GLOBAL'?'国际':v??'';
