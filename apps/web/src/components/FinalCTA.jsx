import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const officeImage = '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp';

const FinalCTA = () => {
	const ctaRef = useRef(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] });
	const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);

	return (
		<section ref={ctaRef} className="final-cta relative isolate min-h-[560px] overflow-hidden bg-slate-950 text-white sm:min-h-[640px]">
			<motion.img
				src={officeImage}
				alt="GROISH office interior"
				loading="lazy"
				decoding="async"
				sizes="100vw"
				style={{ y: imageY }}
				className="absolute inset-[-8%] h-[116%] w-[116%] object-cover object-center opacity-75"
			/>
			<div className="absolute inset-0 bg-slate-950/65" />
			<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.58)_48%,rgba(2,6,23,0.82)),linear-gradient(0deg,rgba(2,6,23,0.88),transparent_55%,rgba(2,6,23,0.35))]" />
			<div className="final-cta__light absolute -left-1/4 top-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent shadow-[0_0_44px_rgba(103,232,249,0.7)]" />
			<div className="final-cta__light final-cta__light--secondary absolute -right-1/4 bottom-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent shadow-[0_0_40px_rgba(96,165,250,0.55)]" />

			<div className="container relative mx-auto flex min-h-[560px] items-end px-4 py-16 sm:min-h-[640px] sm:py-24">
				<div className="max-w-5xl">
					<motion.p
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
						className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-cyan-200 sm:mb-7"
					>
						The next chapter starts here
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: 22 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
						className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.085em] text-white sm:text-7xl lg:text-[8.5rem]"
					>
						WE'RE JUST GETTING STARTED.
					</motion.h2>
					<div className="mt-9 flex flex-col items-start gap-6 sm:mt-12 sm:flex-row sm:items-center sm:gap-10">
						<motion.p
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.6, delay: 0.18 }}
							className="max-w-sm text-base leading-7 text-slate-200/80 sm:text-lg"
						>
							Bring your next idea, challenge, or ambition to the table.
						</motion.p>
						<Link to="/contact" className="magnetic group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" data-cursor="Explore">
							Start a Conversation
							<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalCTA;