import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Building2, Globe2, Layers3 } from 'lucide-react';
const officeTeam = '/optimized-images/IMG_6247.webp';
const officeWorkspace = '/optimized-images/IMG_6258.webp';

const focusAreas = ['Entrepreneurship', 'Technology', 'Business growth', 'Healthcare solutions', 'E-commerce', 'Education'];

const AboutGroish = () => {
	const aboutRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: aboutRef, offset: ['start end', 'end start'] });
	const imageY = useTransform(scrollYProgress, [0, 1], [0, -16]);
	const imageYSecondary = useTransform(scrollYProgress, [0, 1], [0, -10]);

	return (
		<section ref={aboutRef} className="overflow-hidden bg-slate-50 py-24 sm:py-28">
			<div className="container mx-auto px-4">
				<div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
					<motion.div
						className="relative order-2 min-h-[520px] lg:order-1"
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.75, ease: 'easeOut' }}
					>
						<motion.div
							className="groish-photo-shell absolute left-0 top-0 h-[360px] w-[78%] rounded-[1.75rem] border-8 border-white sm:h-[420px]"
							data-variant="c"
							style={{ y: imageY }}
							initial={{ opacity: 0, x: -30, y: 18 }}
							whileInView={{ opacity: 1, x: 0, y: 0 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.85, ease: 'easeOut' }}
						>
							<motion.img
								src={officeTeam}
								alt="GROISH team working in the Lahore office"
								loading="lazy"
								decoding="async"
								sizes="(max-width: 1024px) 78vw, 42vw"
								className="groish-photo-media"
								whileHover={{ scale: 1.08, x: 6, y: -6 }}
								transition={{ duration: 0.9, ease: 'easeOut' }}
							/>
						</motion.div>
						<motion.div
							className="groish-photo-shell absolute bottom-0 right-0 h-[245px] w-[56%] rounded-[1.75rem] border-8 border-white shadow-[0_24px_80px_rgba(15,23,42,0.15)] sm:h-[290px]"
							data-variant="d"
							style={{ y: imageYSecondary }}
							initial={{ opacity: 0, x: 30, y: 18 }}
							whileInView={{ opacity: 1, x: 0, y: 0 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.9, delay: 0.08, ease: 'easeOut' }}
						>
							<motion.img
								src={officeWorkspace}
								alt="GROISH workspace in Lahore"
								loading="lazy"
								decoding="async"
								sizes="(max-width: 1024px) 56vw, 30vw"
								className="groish-photo-media"
								whileHover={{ scale: 1.1, x: -8, y: -6 }}
								transition={{ duration: 0.9, ease: 'easeOut' }}
							/>
						</motion.div>
						<div className="absolute bottom-10 left-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_20px_35px_rgba(15,23,42,0.12)] backdrop-blur sm:left-8"><Building2 className="h-5 w-5 text-blue-600" /><div><div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-slate-500">The group behind the work</div><div className="text-sm font-bold text-slate-900">Built to move businesses forward</div></div></div>
					</motion.div>

					<motion.div
						className="order-1 lg:order-2"
						initial={{ opacity: 0, x: 24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.75, ease: 'easeOut' }}
					>
						<p className="premium-eyebrow">About GROISH</p>
						<h2 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-slate-950 sm:text-5xl">A parent group for ambitious businesses.</h2>
						<p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">GROISH is the parent business group behind multiple specialized companies, bringing entrepreneurial thinking, operational depth, and focused expertise together under one connected vision.</p>
						<p className="mt-5 max-w-xl leading-7 text-slate-600">Across our companies, we build the capabilities businesses need to grow: digital and technology solutions, healthcare support, e-commerce expertise, and practical education that turns knowledge into action.</p>

						<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
							{focusAreas.map((area, index) => (
								<motion.div
									key={area}
									className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.02)]"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.06 }}
								>
									{area}
								</motion.div>
							))}
						</div>

						<div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-6">
							<div className="flex items-center gap-3"><Layers3 className="h-5 w-5 text-blue-600" /><span className="text-sm font-semibold text-slate-700">Specialized companies, shared direction</span></div>
							<div className="flex items-center gap-3"><Globe2 className="h-5 w-5 text-cyan-600" /><span className="text-sm font-semibold text-slate-700">A connected global outlook</span></div>
						</div>
						<a href="/companies#inside-groish" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4">See inside GROISH <ArrowUpRight className="h-4 w-4" /></a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutGroish;