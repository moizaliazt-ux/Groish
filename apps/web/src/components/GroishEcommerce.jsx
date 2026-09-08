import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, BarChart3, Boxes, Check, CircleDollarSign, GraduationCap, LineChart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const offerings = [
	{ title: 'Amazon store & business services', icon: Boxes },
	{ title: 'Amazon growth support', icon: LineChart },
	{ title: 'Amazon consulting', icon: Search },
	{ title: 'Amazon courses & training', icon: GraduationCap },
];

const chartBars = [38, 52, 46, 67, 61, 78, 91];

const GroishEcommerce = () => {
	const ecommerceRef = useRef(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: ecommerceRef, offset: ['start end', 'end start'] });
	const bulletYOffset = useTransform(scrollYProgress, [0, 1], [0, -14]);

	return (
		<section ref={ecommerceRef} className="relative overflow-hidden bg-[#f4f8fb] py-24 sm:py-28">
			<div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />
			<div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
			<div className="relative container mx-auto px-4">
				<div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
					<motion.div
						initial={{ opacity: 0, x: -28 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
					>
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
							<span className="h-2 w-2 rounded-full bg-emerald-500" /> Groish E-Commerce
						</div>
						<h2 className="max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
							Build your Amazon business with a sharper edge.
						</h2>
						<p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
							GROISH is an Amazon-focused business helping ambitious sellers launch, grow, and operate with practical support at every stage.
						</p>

						<div className="mt-9 grid gap-3 sm:grid-cols-2">
							{offerings.map((offering, index) => (
								<motion.div
									key={offering.title}
									className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white/75 p-4 shadow-sm"
									initial={{ opacity: 0, y: 14 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.2 }}
									transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
								>
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
										<offering.icon className="h-4 w-4" />
									</span>
									<span className="pt-1 text-sm font-semibold leading-5 text-slate-800">{offering.title}</span>
								</motion.div>
							))}
						</div>

						<Link to="/services" className="mt-9 inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
							<Button size="lg" className="gap-2 bg-slate-950 text-white hover:bg-blue-700">
								Explore Amazon Services
								<ArrowUpRight className="h-4 w-4" />
							</Button>
						</Link>
					</motion.div>

					<motion.div
						className="relative mx-auto w-full max-w-2xl"
						initial={{ opacity: 0, x: 28, scale: 0.97 }}
						whileInView={{ opacity: 1, x: 0, scale: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
					>
						<div className="relative rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-[0_28px_80px_-24px_rgba(15,23,42,0.35)] sm:p-5">
							<div className="overflow-hidden rounded-2xl bg-slate-950">
								<div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
									<div className="flex items-center gap-2">
										<span className="h-2.5 w-2.5 rounded-full bg-red-400" />
										<span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
										<span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
									</div>
									<span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Groish / commerce OS</span>
								</div>
								<div className="grid gap-4 p-5 sm:grid-cols-[1fr_1.35fr]">
									<div className="space-y-4">
										<div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
											<div className="flex items-center justify-between text-xs text-slate-400"><span>Monthly revenue</span><CircleDollarSign className="h-4 w-4 text-cyan-300" /></div>
											<div className="mt-3 text-2xl font-bold text-white">$84,260</div>
											<div className="mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-300"><BarChart3 className="h-3.5 w-3.5" /> +24.8% this month</div>
										</div>
										<div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
											<div className="mb-3 text-xs text-slate-400">Growth checklist</div>
											{['Catalog audit', 'PPC structure', 'Launch roadmap'].map((item) => (
												<div key={item} className="flex items-center gap-2 py-1.5 text-xs text-slate-300"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300"><Check className="h-2.5 w-2.5" /></span>{item}</div>
											))}
										</div>
									</div>
									<div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
										<div className="flex items-start justify-between"><div><div className="text-xs text-slate-400">Sales velocity</div><div className="mt-1 text-lg font-bold text-white">Healthy momentum</div></div><span className="rounded-full bg-cyan-300/10 px-2 py-1 text-[10px] font-bold text-cyan-300">LIVE</span></div>
										<div className="mt-8 flex h-40 items-end gap-2 border-b border-l border-white/10 px-2 pb-2">
											{chartBars.map((height, index) => (
												<motion.span
													key={height + index}
													className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500 to-cyan-300"
													initial={{ height: 0 }}
													whileInView={{ height: `${height}%` }}
													viewport={{ once: true }}
													transition={{ duration: 0.65, delay: 0.35 + index * 0.08, ease: 'easeOut' }}
												/>
											))}
										</div>
										<div className="mt-3 flex justify-between text-[10px] text-slate-500"><span>Mon</span><span>Sun</span></div>
									</div>
								</div>
							</div>
						</div>
						<motion.div className="absolute -right-3 -top-5 hidden rounded-xl border border-blue-100 bg-white p-3 shadow-xl sm:block" animate={reduceMotion ? { y: 0 } : { y: [0, -7, 0] }} transition={reduceMotion ? { duration: 0 } : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
							<div className="flex items-center gap-2 text-xs font-bold text-slate-700"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"><Check className="h-4 w-4" /></span> Account health: strong</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default GroishEcommerce;