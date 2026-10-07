'use client';
import { Back, ChatDemo, Shell, Status, Architecture } from '@/components/site';
export default function Page(){return <Shell><section className="page wrap"><Back/><div className="page-head"><div><p className="eyebrow">02 / SCALE · DISTRIBUTED INFERENCE</p><h1 className="page-title">A wider path.</h1><p className="lede">Same model. Different infrastructure. llm-d routes each request across two inference replicas.</p></div><Status label="2 REPLICAS · CONFIGURED" state=""/></div><Architecture items={['CLIENT','LLM-D','vLLM × 2','GPU × 2']}/><ChatDemo scaled/></section></Shell>}
