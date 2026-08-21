import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import HeroSlider from '@/components/HeroSlider';
import EnrollmentForm from '@/components/EnrollmentForm';
import OurCompanies from '@/components/OurCompanies';
import GroishEcommerce from '@/components/GroishEcommerce';
import WhatWeDo from '@/components/WhatWeDo';
import InsideGroish from '@/components/InsideGroish';
import GlobalPresence from '@/components/GlobalPresence';
import AboutGroish from '@/components/AboutGroish';
import EcosystemMarquee from '@/components/EcosystemMarquee';
const lahoreOffice = '/optimized-images/IMG_6247.jpg';
const officeWorkspace = '/optimized-images/IMG_6258.jpg';
const officeInterior = '/optimized-images/IMG_6262.jpg';
const usaOffice = '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.jpg';
import { ArrowUpRight, CheckCircle2, Code2, Globe2, GraduationCap, Headphones, Layers3, LineChart } from 'lucide-react';

const HomePage = () => {
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);

  const whyStories = [
    {
      number: '01',
      title: 'Specialized Businesses',
      description: 'Focused companies bring sharper expertise, practical depth, and the right capabilities to every challenge.',
      image: lahoreOffice,
      icon: Layers3,
      label: 'Focused capability',
    },
    {
      number: '02',
      title: 'Shared Vision',
      description: 'Every company moves with a common direction: create meaningful value for businesses, people, and partners.',
      image: officeWorkspace,
      icon: LineChart,
      label: 'One connected direction',
    },
    {
      number: '03',
      title: 'Global Mindset',
      description: 'Local understanding and global perspective work together to help ambitious ideas travel further.',
      image: usaOffice,
      icon: Globe2,
      label: 'Local roots, global outlook',
    },
    {
      number: '04',
      title: 'Continuous Growth',
      description: 'We keep learning, improving, and building the systems that turn momentum into long-term progress.',
      image: officeInterior,
      icon: ArrowUpRight,
      label: 'Always moving forward',
    },
  ];

  const valueStreams = [
    { title: 'Build', description: 'Technology, web development, and digital growth capabilities for modern businesses.', icon: Code2 },
    { title: 'Support', description: 'Healthcare, medical billing, and business support designed around dependable operations.', icon: Headphones },
    { title: 'Grow', description: 'Amazon services and e-commerce expertise that help businesses move with clarity.', icon: LineChart },
    { title: 'Learn', description: 'Practical Amazon education and training for people building their next opportunity.', icon: GraduationCap },
  ];

  return (
    <div className="groish-page-shell pt-20">
      <Helmet>
        <title>Inside GROISH | Technology, Healthcare, E-commerce & Business Operations</title>
        <meta name="description" content="Explore GROISH, a parent company building and supporting specialized businesses across technology, healthcare services, e-commerce, digital growth, and business operations." />
        <link rel="canonical" href="https://groish.com/" />
        <meta property="og:title" content="Inside GROISH | One Group. Multiple Businesses. One Direction." />
        <meta property="og:description" content="Discover the GROISH business ecosystem across WebCore360, TransMedEx, e-commerce, technology, healthcare services, and digital operations." />
        <meta property="og:url" content="https://groish.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Corporation',
          name: 'GROISH',
          url: 'https://groish.com/',
          description: 'GROISH is a parent company building and supporting specialized businesses across technology, healthcare services, e-commerce, digital growth, and business operations.',
          subOrganization: [
            { '@type': 'Organization', name: 'WebCore360' },
            { '@type': 'Organization', name: 'TransMedEx' },
            { '@type': 'Organization', name: 'E-commerce / Amazon Operations' },
          ],
        })}</script>
      </Helmet>
      
      <HeroSlider />

      <EcosystemMarquee />

      <section className="groish-light-band overflow-hidden bg-white py-20 sm:py-28">
        <div className="container relative mx-auto px-4">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="premium-eyebrow">The GROISH difference</p>
            <h2 className="premium-section-title mt-3 max-w-2xl text-3xl sm:text-6xl">Built as a group. Designed to move businesses forward.</h2>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="flex flex-col divide-y divide-slate-200 border-y border-slate-200">
              {whyStories.map((story, index) => {
                const Icon = story.icon;
                const isActive = activeWhyIndex === index;

                return (
                  <button
                    key={story.number}
                    type="button"
                    onClick={() => setActiveWhyIndex(index)}
                    onMouseEnter={() => setActiveWhyIndex(index)}
                    onFocus={() => setActiveWhyIndex(index)}
                    className={`group flex w-full items-center gap-4 py-5 text-left transition-colors duration-300 sm:py-7 ${isActive ? 'text-slate-950' : 'text-slate-400 hover:text-slate-700'}`}
                    aria-pressed={isActive}
                  >
                    <span className={`text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>{story.number}</span>
                    <span className="flex-1 text-xl font-black tracking-[-0.05em] sm:text-3xl">{story.title}</span>
                    <Icon className={`h-5 w-5 transition-all duration-300 ${isActive ? 'translate-x-0 text-blue-600 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70'}`} />
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={whyStories[activeWhyIndex].image}
                  src={whyStories[activeWhyIndex].image}
                  alt={whyStories[activeWhyIndex].title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  initial={{ opacity: 0, scale: 1.08, x: 24 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.04, x: -24 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={whyStories[activeWhyIndex].number}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{whyStories[activeWhyIndex].label}</p>
                    <p className="mt-3 max-w-xl text-lg leading-7 text-white/85 sm:text-xl">{whyStories[activeWhyIndex].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-[0.2em] text-white/80 backdrop-blur sm:right-7 sm:top-7">{whyStories[activeWhyIndex].number} / 04</div>
            </div>
          </div>
        </div>
      </section>

      <div className="groish-section-frame">
        <WhatWeDo />

        <AboutGroish />

        <GroishEcommerce />

        <InsideGroish />

        <GlobalPresence />
      </div>

      <section className="groish-light-band bg-slate-50 py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="premium-eyebrow">Our operating model</p>
            <h2 className="premium-section-title text-3xl sm:text-4xl">How GROISH creates value</h2>
            <p className="premium-section-copy">A connected group of capabilities, brought together for businesses and people at different stages of growth.</p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueStreams.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="groish-light-band bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="premium-eyebrow">Our Learning Process</p>
            <h2 className="premium-section-title text-3xl sm:text-4xl">A simple path to traction</h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-5">
            {["Enrollment", "Live Classes", "Practical Tasks", "Account Setup", "First Sale"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="relative rounded-[1.3rem] border border-slate-200 bg-gradient-to-b from-blue-50 to-white p-4 shadow-[0_16px_30px_rgba(15,23,42,0.04)]"
              >
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 font-bold text-white shadow-[0_10px_20px_rgba(15,23,42,0.18)]">{i+1}</div>
                <p className="text-center text-sm font-semibold text-slate-800">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative overflow-hidden border-y border-slate-200/80 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.2),transparent_38%),linear-gradient(180deg,#f8fbff_0%,#eef6ff_45%,#f8fafc_100%)] py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ x: ['-10%', '12%', '-10%'], opacity: [0.18, 0.35, 0.18] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[-10%] top-1/2 h-px w-[120%] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/70 to-transparent shadow-[0_0_44px_rgba(96,165,250,0.45)]"
          />
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[12%] top-8 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl"
          />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-blue-600">A connected ecosystem</p>
            <h2 className="text-3xl font-black tracking-[-0.07em] text-slate-950 sm:text-6xl">Enter the GROISH business ecosystem.</h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {[{ name: 'Webcore360', image: lahoreOffice, tone: 'from-blue-500/35 via-transparent to-transparent' }, { name: 'TransMedEx', image: usaOffice, tone: 'from-emerald-500/35 via-transparent to-transparent' }].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.tone}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-100/80">GROISH company</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">{item.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="groish-section-frame">
        <OurCompanies />
      </div>

      <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_30%)]" />
        <div className="container relative mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="premium-eyebrow !text-cyan-300">Ready to start</p>
              <h2 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">Ready to Start Your Amazon Journey?</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">Join thousands of successful Pakistani students who have transformed their careers with Groish. Get hands-on training and real-world results.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" /> Complete E-commerce training</li>
                <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" /> Real market strategies</li>
                <li className="flex items-center gap-3 text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" /> Dedicated mentorship</li>
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_60px_rgba(2,6,23,0.45)] backdrop-blur-sm">
              <EnrollmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;