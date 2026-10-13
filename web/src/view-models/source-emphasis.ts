/**
 * A curated reading/navigation layer over research SSOT, never a new
 * scientific conclusion or a claim of exhaustive primary-source coverage.
 * Each item must point to an independently canonicalized Source.
 */
export type SourceEmphasis = 'decision' | 'comparator' | 'method' | 'identity' | 'archive';
export type SourceGroupId = Exclude<SourceEmphasis,'archive'>;
export interface SourceContext {
 label:string;
 context:string;
 group:SourceGroupId;
 claimId?:string;
 emphasis:SourceEmphasis;
}
export const sourceGroups: Array<{id:SourceGroupId;title:string;scope:string;open:boolean}> = [
 {id:'decision',title:'P1 / P2 的直接实验依据',scope:'决定为何优先考虑或保留研究问题，不代表手机实机验证。',open:true},
 {id:'comparator',title:'中国及国际关键技术对照',scope:'用于评估俄罗斯方法是否具有额外研究价值；实验条件不能直接横向排名。',open:true},
 {id:'method',title:'其他俄罗斯科研方法与适用边界',scope:'用于认识能力与 HOLD / WATCH 的原因，不与 P1/P2 赋予同等决策权重。',open:false},
 {id:'identity',title:'研究人员与团队的官方材料',scope:'确认学者身份、机构关系或现有研究活动；不能代替论文实验结论。',open:false}
];
export const coreSourceContexts: Record<string,SourceContext> = {
 'PAPER-RU-DRY-001':{group:'decision',label:'P1 直接实验',context:'Kutateladze · 干斑动态与危机观测；只在原实验条件下成立。',claimId:'CLM-PAV-002',emphasis:'decision'},
 'PAPER-RU-AGE-001':{group:'decision',label:'P2 直接实验',context:'MPEI · 42 个月周期运行结果；不证明已发现早期退化先兆。',claimId:'CLM-MPEI-008',emphasis:'decision'},
 'PAPER-CN-SJTU-DRY-001':{group:'comparator',label:'中国干涸控制对照',context:'上交大微通道流动沸腾研究；设备类型不同于干斑诊断实验。',emphasis:'comparator'},
 'PAPER-GLOBAL-DRY-TRANSIENT-001':{group:'comparator',label:'国际瞬态模型对照',context:'毛细饱和度与干涸／再润湿动态预测；不是手机在线监测证明。',emphasis:'comparator'},
 'PAPER-GLOBAL-INTERNAL-DRYOUT-001':{group:'comparator',label:'国际内部监测对照',context:'压力、蒸汽温度等内部量观测；不能直接转化为手机可观测量。',emphasis:'comparator'},
 'PAPER-CN-AGE-001':{group:'comparator',label:'中国 VC 可靠性对照',context:'铜水均热板中氧相关退化的机理证据；装置与 MPEI 不同。',emphasis:'comparator'},
 'PAPER-CN-AGE-002':{group:'comparator',label:'中国寿命预测对照',context:'加速老化推算铜水 VC 寿命；预测值不等于实历运行年限。',emphasis:'comparator'},
 'PAPER-CN-UTVC-WP-001':{group:'comparator',label:'中国超薄 VC 对照',context:'0.4 mm 封装 UTVC 的毛细结构与润湿图案对照；影响 TPU 差异化判断。',emphasis:'comparator'},
 'PATENT-CN-VC-AGING-001':{group:'comparator',label:'中国可靠性专利',context:'VC 老化测试方案的既有公开技术；非服役中退化预警。',emphasis:'comparator'},
 'PATENT-GLOBAL-DRYOUT-OBS-001':{group:'comparator',label:'国际干涸监测专利',context:'热管温差／功率干涸识别的现有技术；不是法律自由实施意见。',emphasis:'comparator'},
 'PAPER-RU-DRY-002':{group:'method',label:'俄方机理补充',context:'HFE-7100 液层厚度影响沸腾危机；不是手机密封均热板测试。',emphasis:'method'},
 'PAPER-RU-LHP-001':{group:'method',label:'LHP 运行边界',context:'俄方环路热管服务性和效率条件；手机薄型结构迁移未证实。',emphasis:'method'},
 'PAPER-RU-TPU-002':{group:'method',label:'TPU 表面处理',context:'激光疏水化与耐久性研究；封装污染／释气相容性未证实。',emphasis:'method'},
 'PAPER-RU-ICM-ELECTRONICS-001':{group:'method',label:'ICM 电子散热方法',context:'航天电子热管系统研究；原论文作者 Dmitry Nesterov 不能自动等同 Denis。',emphasis:'method'},
 'OFFICIAL-RAS-PAVLENKO-001':{group:'identity',label:'俄罗斯科学院官网',context:'Pavlenko 的科学院身份、机构归属；不是实验或产品能力证明。',emphasis:'identity'},
 'OFFICIAL-MPEI-IVANOV-001':{group:'identity',label:'MPEI 官方来源',context:'Ivanov 相关热虹吸研究线的公开持续性；不是手机应用验证。',emphasis:'identity'},
 'OFFICIAL-TPU-FEOKTISTOV-ROLE-001':{group:'identity',label:'TPU 官方人员页',context:'Feoktistov 的官方岗位与身份；不替代论文作者逐篇核验。',emphasis:'identity'}
};
export const sourceEmphasis=(id:string):SourceEmphasis => coreSourceContexts[id]?.emphasis??'archive';
export const sourceContext=(id:string)=>coreSourceContexts[id];
export const sourceKindLabel=(id:string,type?:string)=>{
 if(id.startsWith('PAPER-')||type==='PAPER')return '原始论文';
 if(id.startsWith('PATENT-')||type==='PATENT')return '专利原文';
 return '官方／其他资料';
};
export const countryName=(v?:string)=>v==='RU'?'俄罗斯':v==='CN'?'中国':v==='GLOBAL'?'国际':v??'';
