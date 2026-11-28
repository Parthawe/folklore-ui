#!/usr/bin/env node
import {reviewDesign,reviewMarkdown} from './engine.mjs';
const args=process.argv.slice(2),options={};
for(let i=0;i<args.length;i++){
 const flag=args[i];
 if(flag==='--markdown'){options.markdown=true;continue;}
 if(['--task','--screen','--audience','--mode'].includes(flag)&&args[i+1]&&!args[i+1].startsWith('--')){options[flag.slice(2)]=args[++i];continue;}
 console.error('Usage: node scripts/review.mjs --task "What someone must accomplish" [--screen "Reported screen details"] [--audience "Who uses it"] [--mode act|compare|choose|read|explore|general] [--markdown]');process.exit(1);
}
try{const result=reviewDesign(options);process.stdout.write(options.markdown?reviewMarkdown(result)+'\n':JSON.stringify(result,null,2)+'\n');}catch(error){console.error(error.message);process.exit(1);}
