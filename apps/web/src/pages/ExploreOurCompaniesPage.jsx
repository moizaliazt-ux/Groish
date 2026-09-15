import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, Code2, FileCheck2, HeartPulse, ReceiptText, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const companies = [
  {
    name: 'WebCore360',
    category: 'Digital & Technology',
    description: 'Digital products, websites, software, search, and growth systems for organizations ready to move forward.',
    icon: Code2,
    accent: 'from-sky-500 to-cyan-400',
    image: '/optimized-images/IMG_6247.webp',
    alt: 'Modern workspace representing WebCore360 digital solutions and business growth operations',
    logo: 'W360',
    href: 'https://webcore360.com/',
  },
  {
    name: 'TransMedEx',
    category: 'Healthcare & RCM',
    description: 'TransMedEx is a healthcare revenue cycle management and medical billing solutions company built around accuracy, consistency, and dependable operations.',
    icon: HeartPulse,
    accent: 'from-emerald-500 to-teal-400',
    image: '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp',
    alt: 'Professional office environment representing TransMedEx healthcare revenue cycle operations',
    logo: 'TMX',
    href: 'https://www.transmedex.org/',
  },
];

const transmedexServices = [
  ['Medical billing', ReceiptText],
  ['Medical coding', FileCheck2],
  ['Claims management', ShieldCheck],
  ['Denial management', BadgeCheck],
  ['Credentialing', Stethoscope],
];

const webcoreServices = ['Web development', 'Software solutions', 'Digital growth'];

const revealTransition = { duration: 0.58, ease: [0.22, 1, 0.36, 1] };

const Reveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const offset = direction === 'left' ? -28 : direction === 'right' ? 28 : 22;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === 'up' ? 0 : offset, y: direction === 'up' ? offset : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
};

const MotionLink = motion(Link);

const ExploreOurCompaniesPage = () => (
  <div className="groish-page-shell bg-slate-100 pt-20 text-slate-950">
    <Helmet>
      <title>Explore Our Companies | GROISH</title>
      <meta name="description" content="Explore WebCore360 and TransMedEx, the specialized businesses GROISH is building across technology and healthcare operations." />
      <link rel="canonical" href="https://groish.com/explore-our-companies" />
      <meta property="og:title" content="Explore Our Companies | GROISH" />
      <meta property="og:description" content="Meet the specialized businesses operating across the GROISH ecosystem." />
      <meta property="og:url" content="https://groish.com/explore-our-companies" />
      <meta property="og:type" content="website" />
    </Helmet>

    <main>
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(59,130,246,0.16),transparent_34%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full border border-cyan-300/30 bg-cyan-200/[0.12] blur-[1px]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-10 left-[12%] h-24 w-24 rounded-full border border-blue-300/30 bg-blue-300/[0.12]" aria-hidden="true" />
        <div className="container relative mx-auto px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <motion.div className="max-w-4xl" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } } }}>
            <motion.p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: revealTransition } }}>GROISH Business Ecosystem</motion.p>
            <motion.h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-[-0.07em] sm:text-6xl lg:text-7xl" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { ...revealTransition, duration: 0.68 } } }}>Explore Our Companies</motion.h1>
            <motion.p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: revealTransition } }}>Our growing business ecosystem consists of specialized companies created to provide focused solutions across different industries.</motion.p>
            <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: revealTransition } }}>
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-cyan-50">
                <motion.a href="#companies" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>Explore Our Companies <ArrowRight className="ml-2 h-4 w-4" /></motion.a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 bg-white/60 text-slate-700 hover:bg-white hover:text-slate-950">
                <MotionLink to="/contact" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>Talk to GROISH <ArrowUpRight className="ml-2 h-4 w-4" /></MotionLink>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section aria-labelledby="transmedex-feature-heading" className="overflow-hidden border-b border-slate-200 bg-slate-100 text-slate-950" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.08 }} transition={revealTransition}>
        <div className="container mx-auto grid max-w-7xl items-stretch lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="group relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
            <motion.img src="/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp" alt="Healthcare operations team environment representing TransMedEx" loading="eager" decoding="async" sizes="(max-width: 1024px) 100vw, 45vw" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1.02 }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/75 via-teal-900/25 to-transparent" />
            <motion.div className="absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ ...revealTransition, delay: 0.2 }} aria-hidden="true" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/25 bg-slate-950/55 px-4 py-3 text-white backdrop-blur-md sm:bottom-8 sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-black tracking-[-0.04em] text-slate-950">TMX</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">Healthcare RCM</span>
            </div>
          </div>
          <div className="flex items-center px-4 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
            <Reveal className="max-w-2xl" direction="left">
              <div className="flex items-center gap-3 text-emerald-700"><HeartPulse className="h-5 w-5" /><p className="text-xs font-bold uppercase tracking-[0.28em]">Featured company · TransMedEx</p></div>
              <h2 id="transmedex-feature-heading" className="mt-4 text-3xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl">Healthcare revenue cycle management, made more dependable.</h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">TransMedEx is a specialized healthcare revenue cycle management and medical billing solutions company helping providers bring more clarity, consistency, and control to essential billing operations.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {transmedexServices.map(([service, Icon]) => <span key={service} className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700"><Icon className="h-3.5 w-3.5 text-emerald-700" />{service}</span>)}
              </div>
              <Button asChild className="mt-8 w-full bg-emerald-700 text-white hover:bg-emerald-800 sm:w-auto"><motion.a href="https://www.transmedex.org/" target="_blank" rel="noreferrer noopener" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>Visit TransMedEx <motion.span className="ml-2 inline-flex" whileHover={{ x: 3 }}><ArrowUpRight className="h-4 w-4" /></motion.span></motion.a></Button>
            </Reveal>
          </div>
        </div>
      </motion.section>

      <motion.section aria-labelledby="webcore-feature-heading" className="overflow-hidden border-b border-white/10 bg-slate-950 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.08 }} transition={{ ...revealTransition, delay: 0.06 }}>
        <div className="container mx-auto grid max-w-7xl items-stretch lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="flex items-center px-4 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
            <Reveal className="max-w-2xl" direction="right">
              <div className="flex items-center gap-3 text-cyan-300"><Code2 className="h-5 w-5" /><p className="text-xs font-bold uppercase tracking-[0.28em]">Featured company · WebCore360</p></div>
              <h2 id="webcore-feature-heading" className="mt-4 text-3xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl">Digital solutions that move businesses forward.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">WebCore360 is a specialized digital solutions and business growth company helping organizations build stronger digital foundations, solve practical technology challenges, and create momentum online.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {webcoreServices.map((service) => <span key={service} className="rounded-full border border-cyan-300/20 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-slate-200">{service}</span>)}
              </div>
              <Button asChild className="mt-8 w-full bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:w-auto"><motion.a href="https://webcore360.com/" target="_blank" rel="noreferrer noopener" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>Visit WebCore360 <motion.span className="ml-2 inline-flex" whileHover={{ x: 3 }}><ArrowUpRight className="h-4 w-4" /></motion.span></motion.a></Button>
            </Reveal>
          </div>
          <div className="group relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
            <motion.img src="/optimized-images/IMG_6247.webp" alt="Modern digital workspace representing WebCore360 solutions and business growth" loading="lazy" decoding="async" sizes="(max-width: 1024px) 100vw, 45vw" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1.02 }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/45 via-blue-950/30 to-slate-950/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(125,211,252,0.35),transparent_28%)]" />
            <motion.div className="absolute left-0 right-0 top-1/2 h-px origin-right bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ ...revealTransition, delay: 0.24 }} aria-hidden="true" />
            <div className="absolute right-6 top-6 flex items-center gap-3 rounded-2xl border border-cyan-200/25 bg-slate-950/60 px-4 py-3 text-white backdrop-blur-md sm:right-8 sm:top-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-black tracking-[-0.04em] text-slate-950">W360</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Digital growth</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section aria-labelledby="vision-heading" className="relative overflow-hidden border-b border-slate-200 bg-white py-16 text-slate-950 sm:py-20" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={revealTransition}>
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/70 blur-3xl" aria-hidden="true" />
        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-700">The GROISH philosophy</p>
            <h2 id="vision-heading" className="mt-4 text-3xl font-black tracking-[-0.06em] sm:text-5xl">One Vision. Specialized Expertise.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Although TransMedEx and WebCore360 operate in different areas, both are built around combining expertise, technology, innovation, and client-focused solutions to help businesses grow and operate more efficiently.</p>
            <div className="mx-auto mt-7 h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </motion.section>

      <motion.section id="companies" className="bg-white py-20 text-slate-950 sm:py-24" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={revealTransition}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Building2 className="mx-auto h-8 w-8 text-cyan-700" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-cyan-700">The GROISH portfolio</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] sm:text-5xl">Built around useful specialization.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Each company has a distinct role, market, and operating identity. Together, WebCore360 and TransMedEx represent how GROISH turns capabilities into focused businesses.</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-2">
            {companies.map((company) => {
              const Icon = company.icon;
              return (
                <motion.article key={company.name} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_24px_70px_rgba(15,23,42,0.1)]" whileHover={{ y: -5 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="relative min-h-[250px] overflow-hidden sm:min-h-[300px]">
                    <motion.img src={company.image} alt={company.alt} loading="lazy" decoding="async" sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0 h-full w-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.accent} opacity-55 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />
                    <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl border border-white/25 bg-slate-950/55 px-3 py-2.5 text-white backdrop-blur-md sm:left-8 sm:top-8">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-xs font-black tracking-[-0.04em] text-slate-950">{company.logo}</span>
                      <Icon className="h-5 w-5 text-cyan-100" />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">{company.category}</p>
                      <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">{company.name}</h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <p className="flex-1 text-base leading-7 text-slate-600">{company.description}</p>
                    <div className="mt-6">
                      <Button asChild className="w-full bg-slate-950 text-white hover:bg-cyan-700 sm:w-auto"><a href={company.href} target="_blank" rel="noreferrer noopener">Visit {company.name} <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section className="border-t border-white/10 bg-slate-900 py-20 sm:py-24" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={revealTransition}>
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Go deeper</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.06em] sm:text-5xl">See how the GROISH ecosystem fits together.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Visit the dedicated Companies experience for the full ecosystem map, operating model, business differences, and spotlight details.</p>
          <Button asChild size="lg" className="mt-8 w-full bg-white text-slate-950 hover:bg-cyan-50 sm:w-auto"><Link to="/companies#inside-groish">Open Inside GROISH <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </motion.section>

      <motion.section aria-labelledby="explore-final-cta-heading" className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={revealTransition}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.18),transparent_32%)]" aria-hidden="true" />
        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Explore the ecosystem</p>
            <h2 id="explore-final-cta-heading" className="mt-4 text-3xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">Find the Right Company for Your Needs</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Explore the specialized companies within the GROISH business ecosystem and connect with the team best aligned to your goals.</p>
            <div className="mx-auto mt-8 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="w-full bg-emerald-500 text-white hover:bg-emerald-400 sm:w-auto"><a href="https://www.transmedex.org/" target="_blank" rel="noreferrer noopener">Visit TransMedEx <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild size="lg" className="w-full bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:w-auto"><a href="https://webcore360.com/" target="_blank" rel="noreferrer noopener">Visit WebCore360 <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  </div>
);

export default ExploreOurCompaniesPage;
