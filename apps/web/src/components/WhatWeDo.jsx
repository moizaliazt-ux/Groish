import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Code2, HeartPulse, LineChart, GraduationCap, Store } from 'lucide-react';

const capabilities = [
	{ title: 'Digital Growth', icon: LineChart, accent: 'text-blue-600 bg-blue-50 group-hover:bg-blue-600' },
	{ title: 'Technology & Web Development', icon: Code2, accent: 'text-cyan-600 bg-cyan-50 group-hover:bg-cyan-600' },
	{ title: 'Healthcare & Medical Billing', icon: HeartPulse, accent: 'text-rose-600 bg-rose-50 group-hover:bg-rose-600' },
	{ title: 'Amazon Services', icon: Store, accent: 'text-amber-600 bg-amber-50 group-hover:bg-amber-500' },
	{ title: 'Amazon Education & Training', icon: GraduationCap, accent: 'text-violet-600 bg-violet-50 group-hover:bg-violet-600' },
	{ title: 'Business Support', icon: BriefcaseBusiness, accent: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600' },
];

const WhatWeDo = () => {
	return (
		<section className="relative overflow-hidden bg-white py-20 sm:py-24">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.1),transparent_30%)]" />
			<motion.div
				animate={{ x: ['-8%', '8%', '-8%'], opacity: [0.2, 0.4, 0.2] }}
				transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute left-[-10%] top-1/2 h-px w-[120%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent shadow-[0_0_30px_rgba(96,165,250,0.3)]"
			/>
			<div className="container relative mx-auto px-4">
				<motion.div
					className="mx-auto mb-12 max-w-2xl text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<p className="premium-eyebrow">Our capabilities</p>
					<h2 className="premium-section-title">What We Do</h2>
					<p className="premium-section-copy">Practical expertise across the services that help ideas, businesses, and people move forward.</p>
				</motion.div>

				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{capabilities.map((capability, index) => {
						const Icon = capability.icon;

						return (
							<motion.div
								key={capability.title}
								className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-50/80 p-6 shadow-[0_18px_35px_rgba(15,23,42,0.03)] backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-[0_26px_70px_rgba(15,23,42,0.08)]"
								initial={{ opacity: 0, y: 22 }}
								whileInView={{ opacity: 1, y: 0 }}
								whileHover={{ y: -8 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
							>
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_38%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
								<div className="relative z-10 flex items-start justify-between gap-4">
									<div className="flex items-center gap-3">
										<span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-400">{String(index + 1).padStart(2, '0')}</span>
										<span className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:text-white ${capability.accent}`}>
											<Icon className="h-5 w-5" />
										</span>
									</div>
									<ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-900" />
								</div>
								<div className="relative z-10 mt-8 border-t border-slate-200/80 pt-4">
									<h3 className="max-w-[15rem] text-xl font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-slate-950">{capability.title}</h3>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default WhatWeDo;