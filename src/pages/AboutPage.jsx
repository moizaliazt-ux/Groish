import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, BarChart3, Blocks, BrainCircuit, Building2, Check,
  Globe2, Layers3, LineChart, Network, Palette, Rocket, ShieldCheck, ShoppingBag,
  Sparkles, Target, TrendingUp, Workflow,
} from 'lucide-react';
const officeMeet = '/optimized-images/IMG_6236.jpg';
const officeTeam = '/optimized-images/IMG_6247.jpg';
const officeWorkspace = '/optimized-images/IMG_6258.jpg';
const officeInterior = '/optimized-images/IMG_6262.jpg';

const businesses = [
  {
    name: 'WebCore360',
    eyebrow: 'Digital & technology',
    description: 'Digital, web, software, and technology solutions that help organizations build useful products and operate with more clarity.',
    capabilities: ['Web and software delivery', 'Product design and engineering', 'Technology operations'],
    image: officeWorkspace,
    alt: 'Modern GROISH workspace representing WebCore360 technology operations',
    icon: Network,
    href: '/services',
    linkLabel: 'Explore technology services',
  },
  {
    name: 'TransMedEx',
    eyebrow: 'Healthcare business support',
    description: 'Healthcare revenue-cycle management, medical billing, and business support delivered through focused processes and operational discipline.',
    capabilities: ['Revenue-cycle operations', 'Medical billing support', 'Healthcare business services'],
    image: officeTeam,
    alt: 'GROISH team collaborating in an office representing TransMedEx operations',
    icon: ShieldCheck,
    href: 'https://transmedex.com',
    linkLabel: 'Visit TransMedEx',
    external: true,
  },
  {
    name: 'Amazon / E-commerce Operations',
    eyebrow: 'Digital commerce',
    description: 'E-commerce, marketplace operations, product management, and online business growth for brands building their next channel.',
    capabilities: ['Marketplace operations', 'Product and catalog management', 'Amazon education and growth'],
    image: officeInterior,
    alt: 'GROISH office interior representing digital commerce and e-commerce operations',
    icon: ShoppingBag,
    href: '/courses/ecommerce-startup',
    linkLabel: 'Explore e-commerce operations',
  },
];

const principles = [
  { title: 'Innovation', description: 'We look for useful, responsible ways to turn ideas, technology, and insight into better business outcomes.', icon: Sparkles },
  { title: 'Reliability', description: 'We earn trust through clear ownership, dependable execution, and processes people can rely on every day.', icon: ShieldCheck },
  { title: 'Scalability', description: 'We build teams, systems, and operating models that can adapt as opportunities and requirements change.', icon: Layers3 },
  { title: 'Long-Term Growth', description: 'We prefer durable capabilities and compounding value over short-term activity without direction.', icon: TrendingUp },
];

const flow = [
  { label: 'GROISH', detail: 'Parent company', icon: Building2 },
  { label: 'Strategy & Management', detail: 'Direction, shared systems, and operating discipline', icon: Target },
  { label: 'Specialized Businesses', detail: 'Focused teams and domain expertise', icon: Blocks },
  { label: 'Clients & Markets', detail: 'Useful products, services, and growth', icon: Globe2 },
];

const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AboutPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'GROISH',
    url: 'https://groish.com/about',
    description: 'GROISH is a parent company building and managing specialized businesses across technology, business services, healthcare support, and e-commerce.',
    email: 'info@groish.com',
    brand: { '@type': 'Brand', name: 'GROISH' },
    subOrganization: businesses.map((business) => ({ '@type': 'Organization', name: business.name })),
  };

  return (
    <>
      <Helmet>
        <title>About GROISH | Building Businesses. Creating Possibilities.</title>
        <meta name="description" content="GROISH is the parent company behind WebCore360, TransMedEx, and Amazon/e-commerce operations, building specialized businesses across technology, business services, and digital commerce." />
        <link rel="canonical" href="https://groish.com/about" />
        <meta property="og:title" content="About GROISH | Building Businesses. Creating Possibilities." />
        <meta property="og:description" content="Discover how GROISH builds and manages specialized businesses across technology, business services, healthcare support, and e-commerce." />
        <meta property="og:url" content="https://groish.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <main className="about-page">
        <section ref={heroRef} className="about-hero relative isolate overflow-hidden bg-slate-950 text-white">
          <motion.div className="about-hero__image absolute inset-0" style={{ y: heroImageY }}>
            <img src={officeMeet} alt="GROISH team workspace supporting a connected business ecosystem" className="h-full w-full object-cover" />
          </motion.div>
          <div className="about-hero__overlay absolute inset-0" />
          <div className="about-hero__grid absolute inset-0" aria-hidden="true" />
          <div className="about-hero__orb about-hero__orb--one" aria-hidden="true" />
          <div className="about-hero__orb about-hero__orb--two" aria-hidden="true" />
          <div className="container relative mx-auto flex min-h-[720px] items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28">
            <div className="max-w-4xl">
              <Reveal>
                <p className="about-eyebrow text-cyan-200">The company behind the capabilities</p>
                <h1 className="about-hero__title mt-6">Building Businesses. Creating Possibilities.</h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">GROISH is the parent company behind multiple technology, business-services, and e-commerce ventures. We build focused businesses, connect the right capabilities, and create practical paths for long-term growth.</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="#our-businesses" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-1">Meet our businesses <ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="about-section bg-white">
          <div className="container mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <Reveal>
              <p className="about-eyebrow">Who we are</p>
              <h2 className="about-heading mt-5">A parent company with a builder’s mindset.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">GROISH develops, operates, and supports specialized businesses across technology, business process services, digital solutions, and e-commerce. Our role is to create the direction, systems, and operating support that let each business stay focused on the people and markets it serves.</p>
              <p className="mt-5 max-w-3xl leading-8 text-slate-600">That means combining entrepreneurial energy with practical management: identifying opportunities, assembling specialist teams, building repeatable processes, and continuously improving the way work gets done.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Technology', 'Business services', 'Digital operations', 'E-commerce'].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">{item}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="our-businesses" className="about-section about-businesses bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="about-eyebrow">Our businesses</p>
              <h2 className="about-heading mt-5">Different disciplines. One connected direction.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">Each GROISH business has a distinct role, domain, and operating focus. Together, they form a broader platform for building useful capabilities and serving evolving markets.</p>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {businesses.map((business, index) => {
                const Icon = business.icon;
                return (
                  <Reveal key={business.name} delay={index * 0.08} className="h-full">
                    <article className="about-business-card group h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
                      <div className="about-business-card__image relative h-64 overflow-hidden">
                        <img src={business.image} alt={business.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur"><Icon className="h-5 w-5" /></div>
                        <p className="absolute bottom-5 left-5 right-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">{business.eyebrow}</p>
                      </div>
                      <div className="flex h-[calc(100%-16rem)] flex-col p-7">
                        <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">{business.name}</h3>
                        <p className="mt-4 leading-7 text-slate-600">{business.description}</p>
                        <ul className="mt-6 space-y-3 text-sm text-slate-700">
                          {business.capabilities.map((capability) => <li key={capability} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />{capability}</li>)}
                        </ul>
                        <div className="mt-auto pt-8">
                          {business.external ? <a href={business.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-slate-950">{business.linkLabel} <ArrowUpRight className="h-4 w-4" /></a> : <Link to={business.href} className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-slate-950">{business.linkLabel} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-section bg-slate-950 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="about-eyebrow text-cyan-200">How GROISH works</p>
              <h2 className="about-heading about-heading--dark mt-5">A shared engine behind specialized businesses.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">GROISH gives each business room to develop its own expertise while providing the strategic and operational structure needed to move with confidence.</p>
            </Reveal>
            <div className="about-flow mt-16">
              {flow.map((item, index) => {
                const Icon = item.icon;
                return <React.Fragment key={item.label}><Reveal delay={index * 0.08} className="about-flow__item"><div className="about-flow__icon"><Icon className="h-6 w-6" /></div><p className="mt-5 text-lg font-black text-white">{item.label}</p><p className="mt-2 max-w-[14rem] text-sm leading-6 text-slate-400">{item.detail}</p></Reveal>{index < flow.length - 1 && <div className="about-flow__connector" aria-hidden="true"><ArrowRight className="h-5 w-5" /></div>}</React.Fragment>;
              })}
            </div>
          </div>
        </section>

        <section className="about-section bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <p className="about-eyebrow">What we believe</p>
              <h2 className="about-heading mx-auto mt-5 max-w-2xl">Principles that shape the way we build.</h2>
            </Reveal>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle, index) => { const Icon = principle.icon; return <Reveal key={principle.title} delay={index * 0.06}><article className="about-principle-card"><div className="about-principle-card__icon"><Icon className="h-5 w-5" /></div><h3 className="mt-6 text-xl font-black text-slate-950">{principle.title}</h3><p className="mt-3 leading-7 text-slate-600">{principle.description}</p></article></Reveal>; })}
            </div>
          </div>
        </section>

        <section className="about-section about-approach bg-cyan-50/60">
          <div className="container mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <Reveal>
              <p className="about-eyebrow">Our approach</p>
              <h2 className="about-heading mt-5">From opportunity to operating momentum.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">GROISH identifies opportunities, builds specialized teams and technology, establishes scalable processes, and continuously improves operations. We stay close to the work so strategy becomes something teams can use, not just something written down.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Identify the opportunity', 'Build the right capability', 'Establish repeatable systems', 'Improve with real feedback'].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white/75 p-4 text-sm font-bold text-slate-700"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs text-white">0{index + 1}</span>{item}</div>)}
              </div>
            </Reveal>
            <Reveal delay={0.08} className="relative">
              <div className="about-approach__image overflow-hidden rounded-[2rem] border-8 border-white shadow-[0_30px_90px_rgba(15,23,42,0.15)]"><img src={officeInterior} alt="GROISH office interior representing structured operations and collaboration" className="h-[28rem] w-full object-cover" /></div>
              <div className="absolute -bottom-7 -left-4 rounded-2xl border border-cyan-100 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] sm:-left-8"><Workflow className="h-6 w-6 text-cyan-600" /><p className="mt-3 text-sm font-black text-slate-950">Built for momentum</p><p className="mt-1 text-xs text-slate-500">Clear direction. Practical systems.</p></div>
            </Reveal>
          </div>
        </section>

        <section className="about-section bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <p className="about-eyebrow">One company. Multiple capabilities.</p>
              <h2 className="about-heading mx-auto mt-5 max-w-3xl">An ecosystem designed to connect expertise.</h2>
            </Reveal>
            <Reveal delay={0.08} className="about-ecosystem mt-16">
              <div className="about-ecosystem__center"><Building2 className="h-8 w-8" /><span>GROISH</span><small>Shared direction and support</small></div>
              <div className="about-ecosystem__line about-ecosystem__line--one" aria-hidden="true" /><div className="about-ecosystem__line about-ecosystem__line--two" aria-hidden="true" /><div className="about-ecosystem__line about-ecosystem__line--three" aria-hidden="true" />
              <div className="about-ecosystem__node about-ecosystem__node--one"><Network className="h-6 w-6" /><strong>WebCore360</strong><span>Technology</span></div>
              <div className="about-ecosystem__node about-ecosystem__node--two"><ShieldCheck className="h-6 w-6" /><strong>TransMedEx</strong><span>Business support</span></div>
              <div className="about-ecosystem__node about-ecosystem__node--three"><ShoppingBag className="h-6 w-6" /><strong>E-commerce</strong><span>Digital commerce</span></div>
            </Reveal>
          </div>
        </section>

        <section className="about-section about-vision bg-white">
          <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
            <Reveal className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
              <div className="about-vision__orb" aria-hidden="true" /><Rocket className="relative h-8 w-8 text-cyan-300" /><p className="relative mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Our vision</p><h2 className="relative mt-4 text-4xl font-black tracking-[-0.06em] sm:text-5xl">Build what lasts.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="about-eyebrow">A long-term view</p>
              <h2 className="about-heading mt-5">Sustainable businesses. Technology-driven solutions. Lasting value.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Our vision is to build sustainable businesses, develop technology-driven solutions, expand into new markets, and create long-term value for the people and organizations connected to GROISH.</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-700"><span className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-blue-600" /> Sustainable growth</span><span className="flex items-center gap-2"><BrainCircuit className="h-4 w-4 text-cyan-600" /> Useful innovation</span><span className="flex items-center gap-2"><LineChart className="h-4 w-4 text-indigo-600" /> New possibilities</span></div>
            </Reveal>
          </div>
        </section>

        <section className="about-cta relative overflow-hidden bg-slate-950 text-white">
          <div className="about-cta__glow" aria-hidden="true" />
          <div className="container relative mx-auto px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-28">
            <Reveal><p className="about-eyebrow text-cyan-200">Start the next chapter</p><h2 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-6xl">Let’s Build What’s Next.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Talk with us about partnerships, technology projects, business services, or the next opportunity worth building.</p><div className="mt-10 flex flex-wrap justify-center gap-4"><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-1">Start a conversation <ArrowRight className="h-4 w-4" /></Link><Link to="#our-businesses" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20">Explore our businesses <ArrowUpRight className="h-4 w-4" /></Link></div></Reveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;