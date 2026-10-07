import {getConfig} from '@/lib/config';
export async function GET(){const c=await getConfig();return Response.json({terminalStreamUrl:validWs(c.terminalStreamUrl)},{headers:{'Cache-Control':'no-store'}})}
function validWs(s:string){try{const u=new URL(s);return u.protocol==='wss:'&&u.hostname==='asciinema.org'?s:''}catch{return ''}}
