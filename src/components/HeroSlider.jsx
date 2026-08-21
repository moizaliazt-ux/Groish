import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const teamLahore = '/optimized-images/IMG_6247.jpg';
const officeWorkspace = '/optimized-images/IMG_6258.jpg';
const officeMeet = '/optimized-images/IMG_6236.jpg';
const teamDesk = '/optimized-images/IMG_6248.jpg';

const slides = [
  {
    id: 1,
    title: "Amazon FBA Wholesale",
    description: "Master the art of bulk buying and reselling. Start your profitable wholesale journey today.",
    image: teamLahore,
    link: "/courses/amazon-fba-wholesale"
  },
  {
    id: 2,
    title: "Amazon Private Label Bootcamp",
    description: "Build your own brand from scratch. Create unique products and dominate your niche.",
    image: officeWorkspace,
    link: "/courses/amazon-private-label"
  },
  {
    id: 3,
    title: "Amazon PPC Mastery",
    description: "Drive targeted traffic and scale sales through advanced Amazon sponsored ads strategies.",
    image: officeMeet,
    link: "/courses/amazon-ppc"
  },
  {
    id: 4,
    title: "Complete E-Commerce Start-Up Guide",
    description: "End-to-end guidance for setting up your complete online business infrastructure.",
    image: teamDesk,
    link: "/courses/ecommerce-startup"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroBgY = useTransform(scrollYProgress, [0, 1], reduceMotion || isMobile ? [0, 0] : [0, -24]);
  const heroGlowX = useTransform(scrollYProgress, [0, 1], reduceMotion || isMobile ? [0, 0] : [0, 18]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateMobile = () => setIsMobile(mediaQuery.matches);
    updateMobile();
    mediaQuery.addEventListener('change', updateMobile);
    return () => mediaQuery.removeEventListener('change', updateMobile);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div ref={heroRef} className="relative h-[560px] overflow-hidden bg-slate-950 sm:h-[620px] lg:h-[720px]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ y: heroBgY, x: heroGlowX }}
        animate={reduceMotion || isMobile ? { opacity: 0.94 } : { opacity: [0.92, 0.98, 0.92] }}
        transition={reduceMotion || isMobile ? { duration: 0 } : { duration: 18, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            loading={current === 0 ? 'eager' : 'lazy'}
            fetchPriority={current === 0 ? 'high' : 'low'}
            decoding="async"
            sizes="100vw"
            className="h-full w-full object-cover object-center opacity-45 saturate-110 brightness-75"
            animate={reduceMotion || isMobile ? { scale: 1.04, y: 0 } : { scale: 1.08, y: [0, -8, 0] }}
            transition={reduceMotion || isMobile ? { duration: 0 } : { duration: 12, ease: 'easeInOut', repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.95),rgba(2,6,23,0.72)_38%,rgba(2,6,23,0.42))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_26%)]" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.32, duration: 0.8, ease: 'easeOut' }}
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/15 bg-slate-950/45 p-4 text-left shadow-[0_20px_45px_rgba(15,23,42,0.25)] backdrop-blur-md md:block"
          >
            <div className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-cyan-200">Performance-led</div>
            <div className="mt-2 text-2xl font-black tracking-[-0.06em] text-white">4.9/5</div>
            <p className="mt-1 text-xs text-slate-300">student success experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.42, duration: 0.8, ease: 'easeOut' }}
            className="absolute right-4 top-1/3 hidden rounded-2xl border border-cyan-300/20 bg-slate-950/45 p-4 text-left shadow-[0_20px_45px_rgba(15,23,42,0.25)] backdrop-blur-md md:block"
          >
            <div className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-cyan-200">Built for scale</div>
            <div className="mt-2 text-2xl font-black tracking-[-0.06em] text-white">Global</div>
            <p className="mt-1 text-xs text-slate-300">e-commerce & business growth</p>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-5xl px-5 text-center text-white sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.16, duration: 0.7, ease: 'easeOut' }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-200 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(125,211,252,0.9)]" />
                GROISH Global learning
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.22, duration: 0.8, ease: 'easeOut' }}
                className="mb-5 text-3xl font-black tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.38, duration: 0.8, ease: 'easeOut' }}
                className="mx-auto mb-9 max-w-2xl text-base leading-7 text-slate-200 sm:text-xl"
              >
                {slides[current].description}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.7, ease: 'easeOut' }} className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link to={slides[current].link} className="magnetic" data-cursor="Explore">
                  <Button size="lg" className="w-full bg-cyan-300 px-7 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(103,232,249,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 sm:w-auto">
                    Enroll Now
                  </Button>
                </Link>
                <Link to="/services" className="magnetic inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10" data-cursor="Explore">
                  Explore services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button type="button" aria-label="Previous slide" onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 sm:left-6">
        <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" />
      </button>
      <button type="button" aria-label="Next slide" onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 sm:right-6">
        <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'w-10 bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.7)]' : 'w-2.5 bg-white/55 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;