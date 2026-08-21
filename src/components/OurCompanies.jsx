import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lahoreOffice from '@/hooks/company-images/IMG_6247.jpg';
import usaOffice from '@/hooks/company-images/WhatsApp Image 2026-08-06 at 00.55.00.jpeg';

const companies = [
	{
		name: 'Webcore360',
		description: 'GROISH digital growth and technology subsidiary focused on scalable digital performance, brand acceleration, and product-led growth.',
		image: lahoreOffice,
		url: 'https://www.webcore360.com/',
		label: '01 / Digital growth',
		meta: 'Lahore · Growth systems',
		accent: 'from-sky-500/80 via-cyan-400/30 to-transparent',
		variant: 'a',
		keywords: ['SEO', 'Digital Marketing', 'Web Development', 'App Development', 'PPC', 'Branding', 'Growth'],
	},
	{
		name: 'TransMedEx',
		description: 'GROISH healthcare and revenue-cycle subsidiary delivering trusted operational support across medical billing, coding, credentialing, and care administration.',
		image: usaOffice,
		url: 'https://www.transmedex.org/',
		label: '02 / Healthcare support',
		meta: 'United States · Care operations',
		accent: 'from-emerald-500/80 via-teal-400/30 to-transparent',
		variant: 'b',
		keywords: ['Medical Billing', 'RCM', 'Medical Coding', 'Credentialing', 'Healthcare Solutions'],
	},
];

const OurCompanies = () => {
	return (
		<section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_28%)]" />
			<div className="relative container mx-auto px-4">
				<motion.div
					className="mb-14 max-w-3xl sm:mb-16"
					initial={{ opacity: 0, y: 22 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
				>
					<p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-300">The GROISH portfolio</p>
					<h2 className="max-w-2xl text-4xl font-black tracking-[-0.07em] text-white sm:text-6xl">Independent companies. Shared direction.</h2>
					<p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
						Explore the teams turning bold ideas into measurable progress across digital growth and healthcare.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
					{companies.map((company, index) => (
						<motion.article
							key={company.name}
							className="interactive-card magnetic group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-[0_28px_90px_rgba(2,6,23,0.46)]"
							initial={{ opacity: 0, y: 28 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							whileHover={{ y: -8 }}
							transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
						>
							<div className="relative h-[430px] overflow-hidden sm:h-[500px]">
								<motion.img
									src={company.image}
									alt={`${company.name} operating environment`}
									loading="lazy"
									decoding="async"
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="h-full w-full object-cover"
									whileHover={{ scale: 1.12, x: 10, y: -8 }}
									transition={{ duration: 1.2, ease: 'easeOut' }}
								/>

								<div className={`absolute inset-0 bg-gradient-to-br ${company.accent} opacity-70 transition-all duration-700 group-hover:opacity-80`} />
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
								<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.12),rgba(2,6,23,0.78))]" />

								<div className="absolute left-6 top-6 z-20 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-slate-100/80">
									<span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
									{company.label}
								</div>

								<div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8">
									<div className="mb-4 flex items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-slate-200/80">
										<span>{company.meta}</span>
										<span className="inline-flex h-2 w-2 rounded-full bg-white/70" />
									</div>

									<div className="max-w-[92%] translate-y-0 opacity-100 transition-all duration-500 ease-out md:max-w-[80%] md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
										<h3 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">{company.name}</h3>
										<p className="mt-3 max-w-md text-sm leading-6 text-slate-200/90 sm:text-base">
											{company.description}
										</p>
										{company.keywords && company.keywords.length > 0 && (
											<div className="mt-4 flex flex-wrap gap-2">
												{company.keywords.map((keyword, keywordIndex) => (
													<motion.span
														key={keyword}
														initial={{ opacity: 0, y: 8 }}
														whileInView={{ opacity: 1, y: 0 }}
														viewport={{ once: true, amount: 0.3 }}
														transition={{ duration: 0.45, delay: 0.2 + keywordIndex * 0.06, ease: 'easeOut' }}
														className="inline-flex items-center rounded-full border border-cyan-300/25 bg-slate-950/40 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cyan-100"
													>
														{keyword}
													</motion.span>
												))}
											</div>
										)}
									</div>

									<a
										href={company.url}
										target="_blank"
										rel="noreferrer noopener"
										className="magnetic mt-5 inline-flex translate-y-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white opacity-100 backdrop-blur-sm transition-all duration-500 ease-out md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
							data-cursor="Explore"
									>
											Explore {company.name}
										<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</a>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurCompanies;