'use client';
import { Back, ChatDemo, Shell, Status, Architecture } from '@/components/site';
export default function Page(){return <Shell><section className="page wrap"><Back/><div className="page-head"><div><p className="eyebrow">01 / BASELINE · DIRECT INFERENCE</p><h1 className="page-title">One path in.</h1><p className="lede">A prompt goes straight to one model server. The simplest useful inference setup.</p></div><Status label="ROUTE CONFIGURED" state=""/></div><Architecture items={['CLIENT','vLLM','QWEN 8B','GPU 0']}/><ChatDemo/></section></Shell>}
