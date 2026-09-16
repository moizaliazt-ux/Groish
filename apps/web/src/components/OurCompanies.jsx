import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BarChart3, Blocks, Building2, Code2, HeartPulse, Layers3, Network, Rocket, Scale, ShoppingBag, Target, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdSenseAd from '@/components/AdSenseAd';

const assets = {
  hero: '/optimized-images/IMG_6236.webp',
  webcore: '/optimized-images/IMG_6247.webp',
  transmedex: '/optimized-images/WhatsApp Image 2026-08-06 at 00.55.00.webp',
  ecommerce: '/optimized-images/IMG_6262.webp',
  operations: '/optimized-images/IMG_6258.webp',
};

const companies = [
  {
    key: 'webcore', number: '01', name: 'WebCore360', focus: 'Digital & Technology', meta: 'Lahore · Technology operations', image: assets.webcore, alt: 'GROISH workspace representing WebCore360 technology operations', icon: Code2, accent: 'from-sky-500/80 via-cyan-400/20 to-transparent', url: 'https://www.webcore360.com/',
    profile: 'WebCore360 is the technology-led business in the GROISH ecosystem, working across websites, software, digital products, search, and online growth.',
    spotlight: { focus: 'Build digital foundations that are useful, discoverable, and ready to evolve.', market: 'Organizations, brands, and teams that need dependable digital delivery.', strengths: 'Technical execution, web thinking, product-minded problem solving, and digital growth.', operations: 'Web development, software delivery, SEO, digital marketing, branding, PPC, and related growth work.', capabilities: ['Web development', 'Software solutions', 'SEO & search', 'Digital marketing', 'Branding', 'PPC'] },
  },
  {
    key: 'transmedex', number: '02', name: 'TransMedEx', focus: 'Healthcare & RCM', meta: 'United States · Healthcare support', image: assets.transmedex, alt: 'GROISH United States office representing TransMedEx healthcare support', icon: HeartPulse, accent: 'from-emerald-500/80 via-teal-400/20 to-transparent', url: 'https://www.transmedex.org/',
    profile: 'TransMedEx is the healthcare operations business, focused on the processes behind revenue-cycle performance and administrative support.',
    spotlight: { focus: 'Make essential healthcare business processes more organized, accurate, and dependable.', market: 'Healthcare organizations and practices requiring revenue-cycle and operational support.', strengths: 'Domain-focused workflows, process discipline, coding and billing knowledge, and operational consistency.', operations: 'Revenue-cycle management, medical billing, coding, credentialing, and healthcare operational support.', capabilities: ['Revenue-cycle management', 'Medical billing', 'Medical coding', 'Credentialing', 'Healthcare support', 'Operational workflows'] },
  },
  {
    key: 'ecommerce', number: '03', name: 'E-commerce / Amazon Operations', focus: 'Digital Commerce', meta: 'Global marketplaces · Commerce operations', image: assets.ecommerce, alt: 'GROISH office interior representing e-commerce and Amazon operations', icon: ShoppingBag, accent: 'from-indigo-500/80 via-cyan-400/20 to-transparent', url: '/courses/ecommerce-startup',
    profile: 'The e-commerce and Amazon operations business works around the practical systems that help products move from research to marketplace growth.',
    spotlight: { focus: 'Turn marketplace complexity into clearer product, catalog, advertising, and growth operations.', market: 'Entrepreneurs, brands, and online businesses building or improving marketplace channels.', strengths: 'Marketplace awareness, product thinking, listing detail, advertising coordination, and catalog discipline.', operations: 'Product research, private label, listings, advertising, catalog management, fulfillment coordination, and growth.', capabilities: ['Marketplace operations', 'Product research', 'Private label', 'Listing optimization', 'Advertising / PPC', 'Catalog management'] },
  },
];

const differences = [
  ['WebCore360', 'Digital & Technology', 'Builds the digital layer: websites, software, online experiences, search visibility, and growth infrastructure.', Code2],
  ['TransMedEx', 'Healthcare & RCM', 'Supports the operational layer behind healthcare administration, billing, coding, credentialing, and revenue-cycle work.', HeartPulse],
  ['E-commerce / Amazon Operations', 'Digital Commerce', 'Coordinates the marketplace layer: products, catalogs, listings, advertising, fulfillment workflows, and commerce growth.', ShoppingBag],
];

const process = [
  ['Opportunity', 'Recognize a market need, capability gap, or practical problem worth developing.', Target],
  ['Strategy', 'Define the business focus, operating model, customer context, and first priorities.', Network],
  ['Build', 'Assemble specialist capability, systems, workflows, and a clear way of working.', Blocks],
  ['Launch', 'Put the offer, team, and operating rhythm into the market with focused intent.', Rocket],
  ['Operate', 'Create ownership and repeatable execution around the work customers depend on.', Workflow],
  ['Optimize', 'Use learning from the operation to improve quality, clarity, and efficiency.', BarChart3],
  ['Scale', 'Extend proven capabilities through stronger systems, teams, partnerships, and reach.', Layers3],
];

const principles = [
  ['Shared technology', 'Capabilities and systems can travel across the group where they create useful leverage.', Code2],
  ['Management perspective', 'A broader view helps each business make decisions with both focus and context.', Target],
  ['Operational knowledge', 'Lessons from one operating environment can inform better questions in another.', Workflow],
  ['Scalable systems', 'Processes are shaped to support consistency without removing the character of each business.', Scale],
];

const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
);

const Explore = ({ company, light = false }) => company.url.startsWith('http') ? (
  <Button asChild variant="outline" className={light ? 'border-slate-300 bg-white text-slate-950 hover:bg-cyan-50' : 'border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white'}>
    <a href={company.url} target="_blank" rel="noreferrer noopener" aria-label={`Explore ${company.name}`}>
      Explore <ArrowUpRight className="ml-2 h-4 w-4" />
    </a>
  </Button>
) : (
  <Button asChild variant="outline" className={light ? 'border-slate-300 bg-white text-slate-950 hover:bg-cyan-50' : 'border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white'}>
    <Link to={company.url} aria-label={`Explore ${company.name}`}>
      Explore <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
);

const OurCompanies = () => {
  const [activeCompany, setActiveCompany] = useState('webcore');
  const active = companies.find((company) => company.key === activeCompany) || companies[0];
  const ActiveIcon = active.icon;

  return (
    <main id="inside-groish" className="overflow-hidden bg-slate-950 text-white">
      <section aria-labelledby="companies-hero-heading" className="relative isolate min-h-[660px] overflow-hidden">
        <img src={assets.hero} alt="GROISH workspace representing a diversified business ecosystem" className="absolute inset-0 h-full w-full object-cover" loading="eager" fetchPriority="high" decoding="async" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(2,6,23,0.72)_48%,rgba(2,6,23,0.3)),linear-gradient(0deg,#020617,transparent_65%)]" />
        <div className="absolute right-[12%] top-28 h-40 w-40 rounded-full border border-cyan-200/20 bg-cyan-200/10 blur-[1px]" aria-hidden="true" />
        <div className="container relative mx-auto flex min-h-[660px] items-end px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:px-8">
          <Reveal className="max-w-4xl">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-cyan-200">Inside GROISH · The Companies Destination</p>
            <h1 id="companies-hero-heading" className="mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.08em] sm:text-7xl lg:text-8xl">One Group. Multiple Businesses. Shared Direction.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8">GROISH operates a diversified ecosystem of specialized businesses, each built around a distinct market, capability set, and way of creating value.</p>
            <div className="mt-9 flex flex-wrap gap-4"><Button asChild size="lg" className="bg-white text-slate-950 hover:bg-cyan-50"><a href="#ecosystem">See the ecosystem <ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline" className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"><Link to="/contact">Talk to GROISH <ArrowUpRight className="ml-2 h-4 w-4" /></Link></Button></div>
          </Reveal>
        </div>
      </section>

      <section id="ecosystem" aria-labelledby="ecosystem-heading" className="border-y border-white/10 bg-slate-950 py-24 sm:py-32"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><Reveal className="mx-auto max-w-3xl text-center"><p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-300">GROISH Business Ecosystem</p><h2 id="ecosystem-heading" className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-6xl">One center. Three specialized directions.</h2><p className="mt-5 text-base leading-7 text-slate-300">GROISH is the parent organization at the center. Its businesses branch into different markets while benefiting from a connected perspective, shared support, and focused execution.</p></Reveal><div className="relative mx-auto mt-14 max-w-6xl"><div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent lg:block" /><div className="mb-8 flex justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:mb-0 lg:-translate-x-1/2 lg:-translate-y-1/2"><div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-cyan-200/40 bg-slate-900/95 text-center shadow-[0_0_80px_rgba(34,211,238,0.16)] sm:h-44 sm:w-44"><Building2 className="h-7 w-7 text-cyan-300" /><span className="mt-3 text-lg font-black">GROISH</span><span className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-slate-400">Parent organization</span></div></div><div className="grid gap-5 md:grid-cols-3">{companies.map((company, index) => { const Icon = company.icon; return <Reveal key={company.key} delay={index * 0.08}><button type="button" onClick={() => setActiveCompany(company.key)} className={`group flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border text-left transition-all duration-300 ${activeCompany === company.key ? 'border-cyan-200/60 bg-cyan-200/[0.09] shadow-[0_0_45px_rgba(34,211,238,0.1)]' : 'border-white/10 bg-white/[0.045] hover:border-white/25'}`} aria-pressed={activeCompany === company.key}><div className="relative h-48 overflow-hidden"><img src={company.image} alt={company.alt} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><div className={`absolute inset-0 bg-gradient-to-br ${company.accent}`} /><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" /><div className="absolute bottom-5 left-5 right-5"><p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cyan-100/80">{company.number} / {company.focus}</p><h3 className="mt-2 text-2xl font-black tracking-[-0.06em]">{company.name}</h3></div></div><div className="flex flex-1 items-center justify-between gap-4 p-5"><p className="text-sm leading-6 text-slate-300">{company.profile}</p><Icon className="h-5 w-5 shrink-0 text-cyan-200" /></div></button></Reveal>; })}</div></div></div></section>

      <section aria-labelledby="profiles-heading" className="bg-white py-24 text-slate-950 sm:py-32"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><Reveal className="max-w-3xl"><p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700">Our Companies</p><h2 id="profiles-heading" className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-6xl">Three businesses. Three operating identities.</h2></Reveal><div className="mt-12 space-y-6">{companies.map((company, index) => <Reveal key={company.key} delay={index * 0.06}><article className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 lg:grid-cols-[0.85fr_1.15fr]"><div className="relative min-h-[280px] overflow-hidden"><img src={company.image} alt={company.alt} loading="lazy" decoding="async" sizes="(max-width: 1024px) 100vw, 40vw" className="absolute inset-0 h-full w-full object-cover" /><div className={`absolute inset-0 bg-gradient-to-br ${company.accent}`} /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" /><div className="absolute bottom-6 left-6"><p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cyan-100">{company.number} · {company.meta}</p><h3 className="mt-2 text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">{company.name}</h3></div></div><div className="flex flex-col justify-between p-6 sm:p-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{company.focus}</p><p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{company.profile}</p><div className="mt-6 flex flex-wrap gap-2">{company.spotlight.capabilities.map((capability) => <span key={capability} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">{capability}</span>)}</div></div><div className="mt-8"><Explore company={company} light /></div></div></article></Reveal>)}</div></div></section>

      <section aria-labelledby="difference-heading" className="bg-slate-100 py-24 text-slate-950 sm:py-32"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><Reveal className="mx-auto max-w-3xl text-center"><p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700">What Makes Each Business Different</p><h2 id="difference-heading" className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-6xl">Distinct purpose inside one ecosystem.</h2></Reveal><div className="mt-12 grid gap-4 lg:grid-cols-3">{differences.map(([title, focus, description, Icon], index) => <Reveal key={title} delay={index * 0.06}><article className="h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[0.2em] text-cyan-700">0{index + 1}</span><Icon className="h-6 w-6 text-cyan-700" /></div><h3 className="mt-8 text-2xl font-black tracking-[-0.05em]">{title}</h3><p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{focus}</p><p className="mt-5 text-sm leading-7 text-slate-600">{description}</p></article></Reveal>)}</div></div></section>

      <section aria-labelledby="process-heading" className="bg-slate-950 py-24 sm:py-32"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><Reveal className="max-w-3xl"><p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-300">How GROISH Builds Businesses</p><h2 id="process-heading" className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-6xl">From opportunity to operating scale.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">The sequence is not a rigid formula. It is a practical way to move an idea from possibility into a specialized business with a stronger operating foundation.</p></Reveal><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">{process.map(([title, description, Icon], index) => <Reveal key={title} delay={index * 0.04}><article className="h-full rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-cyan-200/40"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[0.2em] text-cyan-300">0{index + 1}</span><Icon className="h-5 w-5 text-slate-400" /></div><h3 className="mt-8 text-lg font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></article></Reveal>)}</div></div></section>

      <section aria-labelledby="advantage-heading" className="bg-white py-24 text-slate-950 sm:py-32"><div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8"><Reveal><p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700">The GROISH Advantage</p><h2 id="advantage-heading" className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.07em] sm:text-6xl">A broader group view. A sharper business focus.</h2><p className="mt-6 text-base leading-8 text-slate-600">Being part of a broader group gives each business access to perspective beyond its immediate lane. GROISH can connect management thinking, technology experience, operational knowledge, digital capabilities, and scalable systems while allowing each business to retain its own purpose.</p></Reveal><div className="grid gap-3 sm:grid-cols-2">{principles.map(([title, description, Icon], index) => <Reveal key={title} delay={index * 0.05}><article className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><Icon className="h-5 w-5 text-cyan-700" /><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article></Reveal>)}</div></div></section>

      <div className="border-y border-slate-200 bg-slate-50 py-8">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AdSenseAd variant="banner" format="auto" />
        </div>
      </div>

      <section aria-labelledby="spotlight-heading" className="bg-slate-100 py-24 text-slate-950 sm:py-32"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><Reveal className="max-w-3xl"><p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700">Business Spotlight</p><h2 id="spotlight-heading" className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-6xl">Look closer at the operating identity.</h2></Reveal><div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)]"><div className="flex flex-wrap border-b border-slate-200">{companies.map((company) => <button type="button" key={company.key} onClick={() => setActiveCompany(company.key)} className={`flex-1 border-b-2 px-4 py-4 text-left text-sm font-bold transition-colors sm:px-6 ${activeCompany === company.key ? 'border-cyan-600 bg-cyan-50 text-slate-950' : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-950'}`} aria-selected={activeCompany === company.key}>{company.name}</button>)}</div><div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10"><div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-slate-950"><img src={active.image} alt={active.alt} loading="lazy" decoding="async" sizes="(max-width: 1024px) 100vw, 35vw" className="absolute inset-0 h-full w-full object-cover" /><div className={`absolute inset-0 bg-gradient-to-br ${active.accent}`} /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" /><div className="absolute bottom-5 left-5"><p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-cyan-100">{active.focus}</p><h3 className="mt-2 text-3xl font-black text-white">{active.name}</h3></div></div><div><div className="flex items-center gap-3"><ActiveIcon className="h-6 w-6 text-cyan-700" /><p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Business focus</p></div><p className="mt-4 text-lg font-semibold leading-8 text-slate-800">{active.spotlight.focus}</p><dl className="mt-6 grid gap-5 sm:grid-cols-2"><div><dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Target market</dt><dd className="mt-2 text-sm leading-6 text-slate-600">{active.spotlight.market}</dd></div><div><dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Core strengths</dt><dd className="mt-2 text-sm leading-6 text-slate-600">{active.spotlight.strengths}</dd></div></dl><div className="mt-6 rounded-2xl bg-slate-50 p-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Technology / operations</p><p className="mt-2 text-sm leading-6 text-slate-600">{active.spotlight.operations}</p></div><div className="mt-7"><Explore company={active} light /></div></div></div></div></div></section>

      <section aria-labelledby="future-heading" className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_12%_80%,rgba(59,130,246,0.16),transparent_32%)]" /><div className="container relative mx-auto px-4 sm:px-6 lg:px-8"><Reveal className="mx-auto max-w-4xl text-center"><p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-300">GROISH Future</p><h2 id="future-heading" className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-6xl">The ecosystem keeps developing.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">GROISH is continuously exploring new business opportunities, technologies, partnerships, and ways to make specialized operations more useful. The future is approached through careful learning, practical building, and room for the right ideas to take shape.</p><div className="mt-8 flex flex-wrap justify-center gap-3">{['New capabilities', 'Better systems', 'Useful partnerships', 'More possibilities'].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">{item}</span>)}</div></Reveal></div></section>

      <section aria-labelledby="companies-cta-heading" className="bg-white py-24 text-slate-950 sm:py-32"><div className="container mx-auto px-4 text-center sm:px-6 lg:px-8"><Reveal className="mx-auto max-w-4xl"><p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700">The companies behind GROISH</p><h2 id="companies-cta-heading" className="mt-4 text-4xl font-black tracking-[-0.07em] sm:text-6xl">Explore the Businesses Behind GROISH.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">See how specialized businesses can move in different directions while remaining connected by a broader operating perspective.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><Button asChild size="lg" className="bg-slate-950 text-white hover:bg-slate-800"><a href="#ecosystem">Explore Our Companies <ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-950 hover:bg-slate-100"><Link to="/contact">Contact GROISH <ArrowUpRight className="ml-2 h-4 w-4" /></Link></Button></div></Reveal></div></section>
    </main>
  );
};

export default OurCompanies;
