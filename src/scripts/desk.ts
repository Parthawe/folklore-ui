import {search} from '../lib/search.mjs';
import {withBase} from '../lib/paths.mjs';
import type {Entry} from '../lib/types';
const foundRoot=document.querySelector<HTMLElement>('[data-desk]');
if(foundRoot){
 const root=foundRoot;
 const get=<T extends HTMLElement=HTMLElement>(s:string)=>root.querySelector<T>(s)!;
 const input=get<HTMLInputElement>('#desk-query'),frame=get<HTMLIFrameElement>('#desk-frame'),platform=get<HTMLSelectElement>('#desk-platform');
 const buttons=Array.from(root.querySelectorAll<HTMLButtonElement>('[data-desk-entry]'));
 const params=new URLSearchParams(location.search);let entries:Entry[]=[],selectedId=params.get('entry')||root.dataset.initial!,selected:Entry|undefined;
 const status=get('.desk-search-status');let pendingPart:number|null=null;let restoreSearchFocus=false;
 input.value=params.get('q')||'';
 if(platform&&['web','macos'].includes(params.get('platform')||''))platform.value=params.get('platform')!;
 function saved(){try{const value=JSON.parse(localStorage.getItem('folklore-saved')||'[]');return Array.isArray(value)?value.filter(x=>typeof x==='string'):[];}catch{return [];}}
 function updateSave(){const yes=saved().includes(selectedId);get('[data-desk-save]').setAttribute('aria-pressed',String(yes));get('[data-desk-save] span').textContent=yes?'Saved':'Save';}
 function url(){const u=new URL(location.href);u.searchParams.set('entry',selectedId);input.value?u.searchParams.set('q',input.value):u.searchParams.delete('q');platform?.value&&platform.value!=='all'?u.searchParams.set('platform',platform.value):u.searchParams.delete('platform');history.replaceState(null,'',u);}
 function inspect(n:number){if(!selected)return;pendingPart=n;root.querySelectorAll('[data-desk-part]').forEach(b=>b.setAttribute('aria-pressed',String((b as HTMLElement).dataset.deskPart===String(n))));const p=selected.anatomy[n];get('[data-desk-readout]').textContent=`${p.name}. ${p.description}`;frame.contentWindow?.postMessage({type:'folklore:inspect',part:n},location.origin);}
 function revealSelected(){const id=selectedId;const rail=get('.desk-entry-list'),active=buttons.find(b=>b.dataset.deskEntry===id);if(active){const item=active.getBoundingClientRect(),bounds=rail.getBoundingClientRect();if(getComputedStyle(rail).flexDirection==='row'){rail.scrollLeft+=item.left-bounds.left-12;}else if(item.bottom>bounds.bottom||item.top<bounds.top){rail.scrollTop+=item.top-bounds.top-8;}}}
 function select(id:string,part:number|null=null){
  const e=entries.find(e=>e.id===id);if(!e)return;selected=e;selectedId=e.id;pendingPart=part;
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.deskEntry===id)));
  revealSelected();
  get('[data-desk-name]').textContent=e.name;get('[data-desk-description]').textContent=e.description;get('[data-desk-platform]').textContent=e.kind==='style'?e.status:e.platform==='macos'?'macOS':'Web';get('[data-desk-demo-label]').textContent=e.platform==='macos'?'Browser simulation. Native behavior differs.':e.kind==='style'?'Original style specimen. Try the controls.':'Interactive example';
  restoreSearchFocus=document.activeElement===input;frame.title=`${e.name} working specimen`;frame.src=withBase(`/specimens/${e.id}/?open=1`);get('.desk-frame-loading').hidden=false;
  get<HTMLAnchorElement>('[data-desk-full]').href=withBase(`/${e.kind==='style'?'styles':e.platform}/${e.id}/`);
  get('[data-desk-prompt]').textContent=e.prompt;get('[data-desk-debug]').textContent=e.debug;
  const source=get<HTMLAnchorElement>('[data-desk-source]');source.textContent=e.sources[0].title;source.href=e.sources[0].url;
  const parts=get('.desk-parts');parts.replaceChildren();e.anatomy.forEach((p,i)=>{const b=document.createElement('button');b.dataset.deskPart=String(i);b.setAttribute('aria-pressed','false');const num=document.createElement('span');num.className='part-number';num.textContent=String(i+1);const group=document.createElement('span');for(const [tag,text] of [['strong',p.name],['code',p.api],['span',p.description]]){const el=document.createElement(tag);el.textContent=text;group.append(el);}b.append(num,group);b.addEventListener('click',()=>inspect(i));parts.append(b);});
  const phrases=get('[data-desk-phrases]');phrases.replaceChildren();e.phrases.forEach(p=>{const b=document.createElement('button');b.textContent=`“${p}”`;b.addEventListener('click',()=>{input.value=p;render(true);input.focus();});phrases.append(b);});
  get('[data-desk-readout]').textContent='Select an anatomy part to highlight it in the example.';updateSave();url();
 }
 function render(autoSelect=false){
  get('[data-desk-clear-query]').hidden=!input.value;status.dataset.searchCount='true';
  const results=search(entries,input.value,{kind:root.dataset.kind,platform:platform?.value||'all',limit:40});
  const found=new Map<string,{index:number}>(results.map((r:{entry:Entry},i:number)=>[r.entry.id,{index:i}]));
  buttons.forEach(b=>{const result=found.get(b.dataset.deskEntry!);b.hidden=!result;b.style.order=String(result?.index||0);});get('[data-desk-count]').textContent=`${results.length} ${root.dataset.kind==='style'?'styles':'elements'}`;get('.desk-no-match').hidden=results.length!==0;status.textContent=input.value?`${results.length} matching ${results.length===1?'entry':'entries'}`:'';
  if(autoSelect&&results.length&&(input.value||!found.has(selectedId))){const first=results[0];const p=first.part?first.entry.anatomy.findIndex((p:{name:string})=>p.name===first.part.name):-1;if(first.entry.id===selectedId){if(p>=0)inspect(p);url();}else select(first.entry.id,p>=0?p:null);}else{url();revealSelected();}
 }
 buttons.forEach(b=>b.addEventListener('click',()=>select(b.dataset.deskEntry!)));
 root.querySelectorAll<HTMLButtonElement>('[data-desk-example]').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.deskExample!;input.focus();render(true);}));
 get('[data-desk-clear-query]').addEventListener('click',()=>{input.value='';render();input.focus({preventScroll:true});});
 input.addEventListener('keydown',e=>{if(e.key==='Escape'&&input.value){input.value='';render();}});
 input.addEventListener('input',()=>render(true));platform?.addEventListener('change',()=>render(true));
 get('[data-desk-clear]').addEventListener('click',()=>{input.value='';if(platform)platform.value='all';render();input.focus();});
 get('[data-desk-reset]').addEventListener('click',()=>{pendingPart=null;frame.src=frame.src;get('[data-desk-readout]').textContent='Example reset. Try the controls or inspect a part.';root.querySelectorAll('[data-desk-part]').forEach(b=>b.setAttribute('aria-pressed','false'));});
 frame.addEventListener('load',()=>{get('.desk-frame-loading').hidden=true;if(pendingPart!==null)inspect(pendingPart);if(restoreSearchFocus){input.focus({preventScroll:true});restoreSearchFocus=false;}});
 root.querySelectorAll<HTMLButtonElement>('[data-inspector-view]').forEach(b=>b.addEventListener('click',()=>{root.querySelectorAll('[data-inspector-view]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));root.querySelectorAll<HTMLElement>('[data-inspector-panel]').forEach(p=>p.hidden=p.dataset.inspectorPanel!==b.dataset.inspectorView);}));
 async function copy(text:string,b:HTMLElement){status.dataset.searchCount='false';const before=b.textContent;try{await navigator.clipboard.writeText(text);b.textContent='Copied';setTimeout(()=>b.textContent=before,1600);}catch{status.textContent='Clipboard unavailable. Select the brief text to copy it manually.';}}
 root.querySelectorAll<HTMLButtonElement>('[data-desk-copy]').forEach(b=>b.addEventListener('click',()=>{if(selected)copy(b.dataset.deskCopy==='debug'?`Debug my ${selected.name}. ${selected.debug} My symptom: `:selected.prompt,b);}));
 get('[data-desk-share]').addEventListener('click',e=>copy(location.href,e.currentTarget as HTMLElement));
 get('[data-desk-save]').addEventListener('click',()=>{status.dataset.searchCount='false';const ids=saved();const next=ids.includes(selectedId)?ids.filter(x=>x!==selectedId):[...ids,selectedId];try{localStorage.setItem('folklore-saved',JSON.stringify(next));updateSave();document.dispatchEvent(new Event('folklore:saved'));status.textContent=next.includes(selectedId)?'Entry saved in this browser.':'Entry removed from your collection.';}catch{status.textContent='Browser storage is unavailable. This entry could not be saved.';}});
 document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus();input.select();}});
 fetch(withBase('/data/catalog.json')).then(r=>{if(!r.ok)throw new Error();return r.json();}).then((data:Entry[])=>{entries=data.sort((a,b)=>a.name.localeCompare(b.name));if(!entries.some(e=>e.id===selectedId&&e.kind===root.dataset.kind))selectedId=root.dataset.initial!;select(selectedId);render(!!input.value);}).catch(()=>{status.dataset.searchCount='false';status.textContent='Search could not load. Reload this page to try again.';input.disabled=true;});
}
