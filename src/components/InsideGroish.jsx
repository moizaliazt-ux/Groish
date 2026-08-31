import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MapPin, X } from 'lucide-react';
const lahore01 = '/optimized-images/IMG_6236.jpg';
const lahore02 = '/optimized-images/IMG_6238.jpg';
const lahore03 = '/optimized-images/IMG_6240.jpg';
const lahore04 = '/optimized-images/IMG_6247.jpg';
const lahore05 = '/optimized-images/IMG_6248.jpg';
const lahore06 = '/optimized-images/IMG_6258.jpg';
const lahore07 = '/optimized-images/IMG_6259.jpg';
const lahore08 = '/optimized-images/IMG_6262.jpg';
const usa01 = '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.jpg';
const usa02 = '/company-images/image.png';

const galleryImages = [
	{ src: lahore01, alt: 'GROISH Lahore team working in the office', location: 'LAHORE, PAKISTAN', label: 'A collaborative workspace where strategy and execution meet.', featured: true },
	{ src: lahore02, alt: 'GROISH Lahore office workspace', location: 'LAHORE, PAKISTAN', label: 'Studio-like focus areas built for growth operations.' },
	{ src: lahore03, alt: 'GROISH Lahore team workspace', location: 'LAHORE, PAKISTAN', label: 'A quiet room for planning campaigns and product work.' },
	{ src: lahore04, alt: 'GROISH Lahore office team environment', location: 'LAHORE, PAKISTAN', label: 'Every desk is placed to support collaboration and clarity.' },
	{ src: lahore05, alt: 'GROISH Lahore office interior', location: 'LAHORE, PAKISTAN', label: 'Natural light, thoughtful details, and a calm corporate tone.' },
	{ src: lahore06, alt: 'GROISH Lahore collaborative workspace', location: 'LAHORE, PAKISTAN', label: 'Teams design growth journeys together around shared screens.' },
	{ src: lahore07, alt: 'GROISH Lahore office meeting area', location: 'LAHORE, PAKISTAN', label: 'A place for strategy conversations and executive reviews.' },
	{ src: lahore08, alt: 'GROISH Lahore team office', location: 'LAHORE, PAKISTAN', label: 'Every image tells the story of GROISH’s hands-on execution.', reverse: true },
	{ src: usa01, alt: 'GROISH USA office reception area', location: 'UNITED STATES', label: 'The USA presence anchors GROISH as an international operator.' },
	{ src: usa02, alt: 'GROISH USA office exterior', location: 'UNITED STATES', label: 'A premium corporate exterior with space reserved for what comes next.' },
];

const InsideGroish = () => {
	const [activeImage, setActiveImage] = useState(null);
	const [progress, setProgress] = useState(0);
	const carouselRef = useRef(null);

	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return;
		let frame = 0;

		const updateProgress = () => {
			const scrollLeft = carousel.scrollLeft;
			const maxScroll = carousel.scrollWidth - carousel.clientWidth;
			setProgress(maxScroll > 0 ? Math.min(1, scrollLeft / maxScroll) : 0);
		};
		const handleScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				updateProgress();
				frame = 0;
			});
		};

		carousel.addEventListener('scroll', handleScroll, { passive: true });
		updateProgress();

		return () => {
			carousel.removeEventListener('scroll', handleScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);

	useEffect(() => {
		if (!activeImage) return undefined;
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') setActiveImage(null);
		};
		document.body.classList.add('gallery-modal-open');
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.body.classList.remove('gallery-modal-open');
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [activeImage]);

	return (
		<section className="overflow-hidden bg-slate-950 py-24 text-white sm:py-28" id="inside-groish-gallery">
			<div className="container mx-auto px-4">
				<motion.div
					className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.65, ease: 'easeOut' }}
				>
					<div className="max-w-2xl">
						<p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-cyan-300">Inside GROISH</p>
						<h2 className="text-3xl font-bold tracking-tight sm:text-5xl">A cinematic gallery of the GROISH story.</h2>
						<p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">Explore the authentic spaces and people shaping GROISH through premium visual moments, motion and depth.</p>
					</div>
					<div className="hidden items-center gap-2 text-sm text-slate-400 md:flex"><span>Swipe or scroll</span><ArrowRight className="h-4 w-4" /></div>
				</motion.div>

				<div className="relative overflow-hidden">
					<div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/100 to-transparent" />
					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/100 to-transparent" />
					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-white/10">
						<div className="h-full rounded-full bg-cyan-300 transition-all duration-200" style={{ width: `${progress * 100}%` }} />
					</div>
					<div ref={carouselRef} className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-6 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6">
						{galleryImages.map((image, index) => (
							<motion.button
								key={image.src}
								type="button"
								aria-label={`View ${image.alt}`}
								className={`groish-photo-shell interactive-card magnetic group relative shrink-0 snap-start rounded-[2rem] border border-white/10 bg-slate-900 ${
									image.featured ? 'h-[390px] w-[min(84vw,620px)] sm:h-[520px]' : image.reverse ? 'h-[300px] w-[min(76vw,470px)] self-start sm:h-[420px]' : 'h-[300px] w-[min(74vw,430px)] self-end sm:h-[420px]'
								}`}
								data-cursor="Explore"
								data-variant={index % 4 === 0 ? 'a' : index % 4 === 1 ? 'b' : index % 4 === 2 ? 'c' : 'd'}
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.15 }}
								whileHover={{ y: -10 }}
								transition={{ duration: 0.7, delay: Math.min(index * 0.04, 0.28), ease: 'easeOut' }}
								onClick={() => setActiveImage(image)}
							>
								<motion.img
									src={image.src}
									alt={image.alt}
									loading={index === 0 ? 'eager' : 'lazy'}
									decoding="async"
									sizes={image.featured ? '(max-width: 640px) 84vw, 620px' : '(max-width: 640px) 76vw, 470px'}
									className="groish-photo-media h-full w-full object-cover object-[center_35%] sm:object-center"
									initial={{ scale: image.featured ? 1.05 : 1.02 }}
									whileHover={{ scale: image.featured ? 1.14 : 1.1, x: image.featured ? 8 : 5, y: image.featured ? -8 : -5 }}
									transition={{ duration: 10, ease: 'easeOut' }}
								/>
								<div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />
								<div className="absolute inset-x-0 bottom-0 z-[2] p-4 sm:p-6">
									<div className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-slate-300">{image.location}</div>
									<div className="mt-2 text-base font-semibold leading-6 text-white sm:mt-3 sm:text-xl">{image.label}</div>
									<p className="mt-2 max-w-[85%] text-sm leading-6 text-slate-300 sm:text-base">Touch to enlarge</p>
								</div>
							</motion.button>
						))}
					</div>
				</div>

				<div className="mt-6 flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 shadow-[0_18px_50px_rgba(15,23,42,0.15)] backdrop-blur-sm sm:px-6">
					<span className="font-semibold text-slate-100">Premium documentary gallery</span>
					<span className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-300 sm:flex">Swipe to navigate • Tap to view fullscreen</span>
				</div>

				<AnimatePresence>
					{activeImage && (
						<motion.div
							role="dialog"
							aria-modal="true"
							aria-label={activeImage.alt}
							className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setActiveImage(null)}
						>
							<motion.div
								className="relative mx-auto max-h-[calc(100dvh-2rem)] max-w-[95vw] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
								initial={{ scale: 0.95 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0.95 }}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								onClick={(event) => event.stopPropagation()}
							>
								<motion.img
									src={activeImage.src}
									alt={activeImage.alt}
									className="max-h-[calc(100dvh-2rem)] w-full object-contain"
									initial={{ opacity: 0.8 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.35, ease: 'easeOut' }}
								/>
								<div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent p-6">
									<div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{activeImage.location}</div>
									<div className="mt-2 text-lg font-semibold text-white sm:text-2xl">{activeImage.label}</div>
									<p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">{activeImage.alt}</p>
								</div>
								<button
									type="button"
									onClick={() => setActiveImage(null)}
									className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-slate-100 shadow-lg shadow-slate-950/40 transition hover:bg-slate-800"
									aria-label="Close gallery viewer"
								>
									<X className="h-5 w-5" />
								</button>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default InsideGroish;