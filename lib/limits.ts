type Bucket={count:number;reset:number};
const memory=globalThis as typeof globalThis&{__yash22RateLimits?:Map<string,Bucket>};
const buckets=memory.__yash22RateLimits??(memory.__yash22RateLimits=new Map());
function clientKey(req:Request){return req.headers.get('x-real-ip')||req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown'}
export function rateLimit(req:Request,scope:string,limit:number,windowMs:number){const now=Date.now();const key=`${scope}:${clientKey(req)}`;const current=buckets.get(key);if(!current||now>=current.reset){buckets.set(key,{count:1,reset:now+windowMs});if(buckets.size>10000)for(const [k,v] of buckets)if(now>=v.reset)buckets.delete(k);return {ok:true,retryAfter:0}}current.count++;return {ok:current.count<=limit,retryAfter:Math.max(1,Math.ceil((current.reset-now)/1000))}}
