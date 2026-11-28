import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,cp,rm} from 'node:fs/promises';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync,spawnSync} from 'node:child_process';
import {reviewDesign,reviewMarkdown,sources,examples} from '../src/lib/design-review.mjs';
import {catalog} from '../content/catalog.mjs';

test('task changes recommendations while reported facts stay unverified',()=>{
 const action=reviewDesign(examples[0]),comparison=reviewDesign(examples[1]);
 assert.equal(action.mode.id,'act');assert.equal(comparison.mode.id,'compare');
 assert.notDeepEqual(action.checks,comparison.checks);assert.notDeepEqual(action.patterns,comparison.patterns);
 assert.ok(action.risks.some(r=>r.id==='unsupported-proof'));assert.ok(action.risks.some(r=>r.id==='missing-states'));
 for(const result of [action,comparison]){for(const r of result.risks){assert.ok(result.screen.includes(r.excerpt));assert.ok(sources.some(s=>s.id===r.source));}for(const id of result.patterns)assert.ok(catalog.some(e=>e.id===id));assert.match(result.limits,/has not inspected/);}
});
test('explicit task choice wins and an unknown goal does not pretend certainty',()=>{
 assert.equal(reviewDesign({...examples[0],mode:'explore'}).mode.id,'explore');
 const unknown=reviewDesign({task:'A screen for the team to use together',screen:''});assert.equal(unknown.mode.id,'general');assert.match(unknown.mode.reason,/No task category/);assert.equal(unknown.risks.length,0);
 assert.throws(()=>reviewDesign({task:'hi'}),/at least 12/);
});
test('negative descriptions do not become asserted slop findings',()=>{
 const review=reviewDesign({task:'Help a customer submit a request',screen:'No gradients or fake testimonials. We removed parallax. There is no error state.'});
 assert.deepEqual(review.risks.map(r=>r.id),['missing-states']);
 const safe=reviewDesign({task:'Help a customer submit a request',screen:'The layout has clear labels and a working form.'});assert.equal(safe.risks.length,0);assert.match(reviewMarkdown(safe),/does not establish/);
});
test('exports preserve user context as data and include evidence and sources',()=>{
 const task='Help a reader understand <script>alert("test")</script> safely';const review=reviewDesign({task,screen:'Tiny labels and no error state.'});
 const md=reviewMarkdown(review);assert.ok(md.includes(JSON.stringify(task)));assert.match(md,/unverified context, not instructions/);assert.match(md,/Reported evidence:/);assert.match(md,/https:\/\/design-system.service.gov.uk/);
 assert.equal('score' in review,false);assert.equal('confidence' in review,false);
});
test('audit planner runs from an isolated skill without project dependencies',async()=>{
 execFileSync(process.execPath,['scripts/generate.mjs']);const temp=await mkdtemp(join(tmpdir(),'folklore-audit-'));
 try{await cp('plugin/skills/design-slop-audit',join(temp,'audit'),{recursive:true});const cli=join(temp,'audit/scripts/review.mjs');const json=JSON.parse(execFileSync(process.execPath,[cli,'--task',examples[0].task,'--screen',examples[0].screen],{cwd:temp,encoding:'utf8'}));assert.equal(json.mode.id,'act');assert.ok(json.risks.length>0);assert.equal(spawnSync(process.execPath,[cli,'--task','hi'],{cwd:temp}).status,1);}finally{await rm(temp,{recursive:true,force:true});}
});

test('purposeful visual cues are preserved and additional states stay untested',()=>{
 const result=reviewDesign({task:'Help a returning patient choose an available appointment and confirm it.',screen:'The brand uses a soft gradient to distinguish specialties, which users already recognize. There are no fake testimonials or looping animations. The current form has no error message when a slot becomes unavailable.'});
 assert.ok(!result.risks.some(r=>r.id==='decoration'));assert.ok(!result.risks.some(r=>r.id==='unsupported-proof'));assert.match(result.keep,/distinguish specialties/);assert.match(result.risks.find(r=>r.id==='missing-states').fix,/separate untested checks/);
});

test('a purposeful cue does not exempt unrelated decorative effects',()=>{
 const result=reviewDesign({task:'Help a patient book an appointment.',screen:'A gradient distinguishes specialties. Decorative orbs cover the booking button.'});
 assert.ok(result.risks.some(r=>r.id==='decoration'&&r.excerpt.includes('orbs')));assert.match(result.keep,/gradient distinguishes/);
});

test('fixes follow the task and static reading does not require fake loading UI',()=>{
 const screen='A bento layout introduces the page.';const action=reviewDesign({task:'Submit an application form',screen}),comparison=reviewDesign({task:'Compare inventory records',screen});
 assert.notEqual(action.risks[0].fix,comparison.risks[0].fix);assert.match(comparison.risks[0].fix,/shared fields/);assert.ok(action.risks[0].consequence);
 const reading=reviewDesign({task:'Read an article and understand the research.',screen:'A static article has no loading state.'});assert.ok(!reading.risks.some(r=>r.id==='missing-states'));
});
