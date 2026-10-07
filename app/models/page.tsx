'use client';
import {Back,Shell,Architecture} from '@/components/site';
import {ModelUpload} from '@/components/live';
export default function Page(){return <Shell><section className="page wrap"><Back/><div className="page-head"><div><p className="eyebrow">04 / BEYOND LANGUAGE · TRADITIONAL ML</p><h1 className="page-title">A different kind of inference.</h1><p className="lede">A familiar image, a classification model, a result. The same serving principles apply.</p></div></div><Architecture items={['IMAGE','TRITON','CLASSIFIER','PREDICTION']}/><ModelUpload/></section></Shell>}
