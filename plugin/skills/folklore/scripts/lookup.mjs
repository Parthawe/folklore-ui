import {readFile} from 'node:fs/promises';
import {search} from './search.mjs';
const catalog=JSON.parse(await readFile(new URL('../references/catalog.json',import.meta.url),'utf8'));
const [command,...args]=process.argv.slice(2);
function fail(message){console.error(JSON.stringify({error:message}));process.exit(1);}
let output;
if(command==='search'){
  const options={limit:8};const query=[];
  for(let i=0;i<args.length;i++){if(args[i]==='--platform'||args[i]==='--kind'){const key=args[i].slice(2);if(!args[i+1]) fail(`Missing ${key}`);options[key]=args[++i];}else if(args[i].startsWith('--')) fail(`Unknown option ${args[i]}`);else query.push(args[i]);}
  if(!query.length)fail('Usage: search "description" [--platform web|macos] [--kind element|style]');
  if(options.platform&&!['web','macos','style','all'].includes(options.platform))fail('Unknown platform');
  if(options.kind&&!['element','style','all'].includes(options.kind))fail('Unknown kind');
  output=search(catalog,query.join(' '),options).map(r=>({id:r.entry.id,name:r.entry.name,platform:r.entry.platform,description:r.entry.description,score:r.score,part:r.part,reference:`references/${r.entry.id}.md`}));
}else if(command==='get'||command==='compare'){
  const count=command==='get'?1:2;if(args.length!==count)fail(`Usage: ${command} ${count===1?'ID':'ID ID'}`);
  const entries=args.map(id=>catalog.find(e=>e.id===id));if(entries.some(e=>!e))fail('Unknown entry ID');
  output=count===1?entries[0]:{entries:entries.map(e=>({id:e.id,name:e.name,platform:e.platform,description:e.description,behavior:e.behavior,api:e.api,signals:e.signals,sources:e.sources}))};
}else fail('Commands: search, get, compare');
console.log(JSON.stringify(output,null,2));
