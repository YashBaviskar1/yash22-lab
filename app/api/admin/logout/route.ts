import {cookies} from 'next/headers';
import {cookieName} from '@/lib/auth';
export async function POST(){(await cookies()).delete(cookieName);return Response.json({ok:true})}
