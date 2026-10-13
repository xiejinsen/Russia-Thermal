import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=(file)=>JSON.parse(readFileSync(new URL('../data/generated/'+file+'.json',import.meta.url),'utf8')).records;
const datasets={
 actors:read('actors'), evidence:read('evidence'), claims:read('claims'),
 capabilities:read('capabilities'), directions:read('directions'), decisions:read('decisions'),
 priorities:read('priorities'), syntheses:read('syntheses'),
 deepReads:read('deepReads'), questionCloseouts:read('questionCloseouts')
};
const errors=[];
const index={};
for(const [name,records] of Object.entries(datasets)){
  index[name]=new Map();
  for(const item of records){
    if(index[name].has(item.id))errors.push(name+': duplicate '+item.id);
    index[name].set(item.id,item);
  }
}
const by=(name,id)=>index[name].get(id);
const refs=(owner,ids,name)=>{for(const id of ids??[])if(!by(name,id))errors.push(owner+': missing '+name+' '+id);};
const uniq=(owner,ids)=>{if(new Set(ids??[]).size!==(ids??[]).length)errors.push(owner+': repeated relation ID');};
const cite=(claim)=>{
  const yes=claim.supportingSourceIds??[],no=claim.contradictingSourceIds??[];
  refs(claim.id,yes,'evidence');refs(claim.id,no,'evidence');
  if(claim.status==='SUPPORTED'&&yes.length===0)errors.push(claim.id+': SUPPORTED Claim without supporting source');
  if(yes.some(id=>no.includes(id)))errors.push(claim.id+': same source is both supporting and contradicting');
  return [...new Set([...yes,...no])];
};
const claimSource=new Map(datasets.claims.map(c=>[c.id,cite(c)]));
for(const a of datasets.actors){
  if(a.parentId&&!by('actors',a.parentId))errors.push(a.id+': parent does not exist');
  if(a.identityAliasOf&&!by('actors',a.identityAliasOf))errors.push(a.id+': identityAliasOf does not exist');
}
for(const cap of datasets.capabilities){
  const owner=by('actors',cap.actorId);
  if(!owner||owner.type==='PERSON')errors.push(cap.id+': invalid capability owner');
  refs(cap.id,cap.claimIds,'claims');
  refs(cap.id,cap.keyPeopleIds,'actors');
  refs(cap.id,cap.collaboratingActorIds,'actors');
  for(const personId of cap.keyPeopleIds??[]){
    const person=by('actors',personId);
    if(person&&person.type!=='PERSON')errors.push(cap.id+': key person not PERSON '+personId);
  }
  uniq(cap.id+': people',cap.keyPeopleIds);
}
for(const dir of datasets.directions){
  refs(dir.id,dir.capabilityIds,'capabilities');
  refs(dir.id,dir.claimIds,'claims');
  const allClaims=new Set([...(dir.claimIds??[]),...(dir.capabilityIds??[]).flatMap(cid=>by('capabilities',cid)?.claimIds??[])]);
  const linkedSources=new Set([...allClaims].flatMap(id=>claimSource.get(id)??[]));
  if(['STRATEGIC_CANDIDATE','RESERVE'].includes(dir.investmentLane)&&linkedSources.size===0)
    errors.push(dir.id+': strategic/reserve direction without any Source-Claim support/pressure chain');
}
for(const decision of datasets.decisions){
  refs(decision.id,decision.triggerClaimIds,'claims');
  uniq(decision.id+': trigger claims',decision.triggerClaimIds);
  // A Decision can cite experiments not in the public, published Source dataset;
  // never assume trial results or cooperation authorization from this field.
}
for(const priority of datasets.priorities){
  refs(priority.id,priority.targetActorIds,'actors');
  refs(priority.id,priority.relatedDirectionIds,'directions');
  for(const actorId of priority.targetActorIds??[]){
    const a=by('actors',actorId);
    if(a?.type==='PERSON')errors.push(priority.id+': individual is used as institution-level target');
  }
}
for(const syn of datasets.syntheses){
  refs(syn.id,syn.supportingClaimIds,'claims');
  refs(syn.id,syn.supportingDirectionIds,'directions');
  refs(syn.id,syn.supportingPriorityIds,'priorities');
  refs(syn.id,syn.keyEvidenceIds,'evidence');
}
for(const deep of datasets.deepReads){
  if(!by('evidence',deep.id))errors.push(deep.id+': deep read without canonical Source');
  refs(deep.id,deep.relatedClaimIds,'claims');
  refs(deep.id,deep.relatedCapabilityIds,'capabilities');
  refs(deep.id,deep.relatedDirectionIds,'directions');
  refs(deep.id,deep.relatedPriorityIds,'priorities');
}
// These traces are the acceptance-grade anchors, with a crucial difference:
// P1 Claim is SUPPORTED only in its source apparatus; P2 early-warning is OPEN.
const p1=by('claims','CLM-PAV-002'),p2=by('claims','CLM-MPEI-008');
if(!p1||p1.status!=='SUPPORTED'||!p1.supportingSourceIds.includes('PAPER-RU-DRY-001'))
  errors.push('P1 decisive Claim-Source chain damaged');
if(!p2||p2.status!=='OPEN'||!p2.supportingSourceIds.includes('PAPER-RU-AGE-001'))
  errors.push('P2 hypothesis incorrectly promoted or lost aging Source');
const surtaev=by('actors','PERSON-SURTAEV');
if(!surtaev||!/^Anton S\. Surtaev$/.test(surtaev.name)||
   surtaev.parentId!=='ACT-KUT-LAB13')
  errors.push('Surtaev person identity/affiliation regressed against official Anton Sergeevich roster');
const diagnostic=by('capabilities','CAP-KUT-L13-DRYOUT-DIAGNOSTICS');
if(!diagnostic||!diagnostic.claimIds.includes('CLM-PAV-002')||diagnostic.keyPeopleIds.includes('PERSON-ZHUKOV'))
  errors.push('Kutateladze capability: missing core Claim or reintroduced unverified V.I. Zhukov');
const direction=by('directions','DIR-FAILURE-AWARE-UTVC');
if(!direction||!direction.capabilityIds.includes('CAP-KUT-L13-DRYOUT-DIAGNOSTICS'))
  errors.push('P1 Direction no longer connected to verified diagnostic capability');
const complex=by('evidence','PAPER-RU-ICM-ELECTRONICS-001');
if(!complex||!complex.authors.some(a=>/Dmitry.*Nesterov/i.test(a))||
   complex.authors.some(a=>/Denis.*Nesterov/i.test(a)))
  errors.push('ICM unresolved Denis/Dmitry person-identity collision masked');
const china=by('evidence','PAPER-CN-UTVC-WP-001');
if(!china||china.countryContext!=='CN')errors.push('China 0.4 mm UTVC comparator lost or mistagged');
const closeouts=datasets.questionCloseouts;
if(closeouts.length!==10||closeouts.filter(q=>q.disposition==='ACCEPTED_PUBLIC_EVIDENCE').length!==3)
  errors.push('Q01-Q10 closed status distribution changed');

// Source usage classification is not measured by number of papers selected.
// An explicit context role is allowed even when there is no Claim edge.
const usedSources=new Set([...claimSource.values()].flat());
const contextOnly=datasets.evidence.filter(s=>!usedSources.has(s.id));
const withoutContextRole=contextOnly.filter(s=>!s.usageRole);
if(withoutContextRole.length)errors.push('Sources without Claim link or context role: '+withoutContextRole.map(x=>x.id).join(', '));

const report={
 counts:Object.fromEntries(Object.entries(datasets).map(([k,v])=>[k,v.length])),
 linkedSources:usedSources.size, contextOnlySources:contextOnly.length,
 claimStatuses:Object.fromEntries([...new Set(datasets.claims.map(c=>c.status))].map(s=>[s,datasets.claims.filter(c=>c.status===s).length])),
 priorityChainCount:datasets.priorities.length,
 warnings:[
  'Capability-associated person is NOT a publication author',
  'Source supporting an OPEN Claim is NOT hypothesis confirmation',
  'No institution-wide publication volume is inferred from related Source counts',
  'Collaboration priority is NOT partner consent or dataset rights'
 ]
};
if(errors.length){console.error('EVIDENCE SEMANTICS CONTRACT FAIL\n'+errors.map(e=>' - '+e).join('\n'));console.error(JSON.stringify(report,null,2));process.exit(1);}
console.log('EVIDENCE SEMANTICS CONTRACT PASS\n'+JSON.stringify(report,null,2));
