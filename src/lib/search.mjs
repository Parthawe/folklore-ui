export const normalize = (value) => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const stop = new Set('a an the is it of to in on with that this and or for my like looks thing ui'.split(' '));
const tokens = (s) => normalize(s).split(' ').filter(w=>w&&!stop.has(w));
function distance(a,b) {const row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){let prev=row[0];row[0]=i;for(let j=1;j<=b.length;j++){const old=row[j];row[j]=Math.min(row[j]+1,row[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));prev=old;}}return row[b.length];}
export function search(entries, query, {platform='all',kind='all',limit=40}={}) {
  const q=normalize(query), words=tokens(q);
  const selected=entries.filter(e=>(platform==='all'||e.platform===platform)&&(kind==='all'||e.kind===kind));
  if(!q) return selected.slice(0,limit).map(entry=>({entry,score:0,part:null}));
  if(!words.length) return [];
  return selected.map(entry=>{
    const fields=[[entry.name,9],...entry.aliases.map(s=>[s,8]),...entry.phrases.map(s=>[s,6]),...[entry.description,...(entry.signals||[])].map(s=>[s,2]),...entry.api.map(a=>[a.symbol,5]),...entry.anatomy.flatMap(p=>[[p.name,5],[p.description,3],[p.api,4]])];
    let score=0;const matched=new Set();
    for(const [field,weight] of fields){const f=normalize(field), ft=tokens(f);if(f===q) score+=weight*12; else if(f.includes(q)) score+=weight*5;
      for(const word of words){if(ft.some(t=>t===word||t.startsWith(word))){score+=weight;matched.add(word);}else if(word.length>=4&&ft.some(t=>Math.abs(t.length-word.length)<=1&&distance(t,word)<=1)){score+=weight*.45;matched.add(word);}}}
    if(entry.anatomy.some(p=>normalize(p.name)===q))score+=100;
    const coverage=matched.size/words.length;
    const part=entry.anatomy.find(p=>normalize(p.name)===q||tokens(p.name).some(w=>words.includes(w)))||null;
    return {entry,score:coverage>=.5?score*coverage:0,part};
  }).filter(r=>r.score>0).sort((a,b)=>b.score-a.score||a.entry.name.localeCompare(b.entry.name)).slice(0,limit);
}
