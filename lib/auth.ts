import {createHmac,timingSafeEqual} from 'node:crypto';
const cookieName='yash22_admin';
function signature(value:string){return createHmac('sha256',process.env.AUTH_SECRET||'development-only-secret-set-AUTH_SECRET').update(value).digest('hex')}
export function issueSession(){const data=Buffer.from(JSON.stringify({exp:Date.now()+8*60*60*1000})).toString('base64url');return `${data}.${signature(data)}`;}
export function validSession(value?:string){if(!value)return false;const [data,sig]=value.split('.');if(!data||!sig)return false;const expected=signature(data);try{if(!timingSafeEqual(Buffer.from(sig),Buffer.from(expected)))return false;const parsed=JSON.parse(Buffer.from(data,'base64url').toString());return parsed.exp>Date.now()}catch{return false}}
export function cookieSettings(value:string,maxAge:number){return `${cookieName}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}; Secure`}
export {cookieName};
