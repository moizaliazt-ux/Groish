import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ChevronDown, CircleDot, Layers3, Sparkles, Target, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/servicesData';
import { servicePageConfig, siteUrl } from '@/data/servicePageConfig';

const Reveal = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
    {children}
  </motion.div>
);

const ServiceDetail = () => {
  const { slug } = useParams();
  const baseService = servicesData[slug];
  const page = servicePageConfig[slug];
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const [activeTab, setActiveTab] = useState('capabilities');
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const visualY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 110]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!baseService || !page?.experience) {
    return <Navigate to="/services" replace />;
  }

  const Icon = baseService.icon;
  const experience = page.experience;
  const relatedServices = Object.values(servicePageConfig)
    .filter((candidate) => candidate.slug !== page.slug)
    .slice(0, 3);
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.name,
    serviceType: page.schemaInfo.serviceType,
    description: page.metaDescription,
    url: page.url,
    areaServed: page.schemaInfo.areaServed,
    provider: { '@type': 'Organization', name: 'GROISH', url: siteUrl },
  };
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.seoTitle,
    description: page.metaDescription,
    url: page.url,
    isPartOf: { '@type': 'WebSite', name: 'GROISH', url: siteUrl },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const tabs = {
    capabilities: { label: 'Capabilities', icon: Layers3, items: experience.features },
    deliverables: { label: 'Deliverables', icon: Target, items: experience.deliverables },
    technologies: { label: 'Technology', icon: Workflow, items: page.technologies },
  };

  return (
    <>
      <Helmet>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="keywords" content={page.keywords.join(', ')} />
        <link rel="canonical" href={page.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.ogTitle} />
        <meta property="og:description" content={page.ogDescription} />
        <meta property="og:url" content={page.url} />
        <meta property="og:site_name" content="GROISH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.ogTitle} />
        <meta name="twitter:description" content={page.ogDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section ref={heroRef} className="service-hero relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="service-hero__glow service-hero__glow--one" />
        <div className="service-hero__glow service-hero__glow--two" />
        <div className="container relative mx-auto px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
          <Link to="/services" className="mb-16 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to services</Link>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200"><Sparkles className="h-4 w-4" /> {experience.kicker}</div>
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10"><Icon className="h-8 w-8 text-cyan-200" /></div>
              <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{page.h1}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{page.shortDescription}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link to="/contact"><Button size="lg" className="group rounded-full bg-cyan-300 px-7 font-bold text-slate-950 hover:bg-cyan-200">Discuss your initiative <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></Link><a href="#approach" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10">Explore the approach</a></div>
            </motion.div>
            <motion.div style={{ y: visualY }} className="service-hero__visual relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl">
              <div className="service-visual-grid absolute inset-0 opacity-60" />
              <div className="absolute inset-8 rounded-[1.5rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-300/10 via-blue-500/5 to-transparent" />
              <div className="absolute left-8 top-9 max-w-[12rem] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">Visual direction</p><p className="mt-2 text-sm leading-5 text-white/80">{experience.imagePrompt.split(',').slice(0, 2).join(',')}</p></div>
              <div className="absolute bottom-8 right-8 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-300/10"><Icon className="h-12 w-12 text-cyan-100" /></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="approach" className="service-section bg-white">
        <div className="container mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="service-eyebrow">01 / Industry context</p><h2 className="service-heading mt-4">Built for the realities behind {page.name.toLowerCase()}.</h2></div>
          <div><p className="text-xl leading-9 text-slate-600">{experience.industryOverview}</p><p className="mt-6 leading-8 text-slate-600">{page.intro}</p><div className="mt-9 grid gap-3 sm:grid-cols-2">{baseService.painPoints.map((point) => <div key={point} className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 text-sm leading-6 text-slate-700">{point}</div>)}</div></div>
        </div>
      </section>

      <section className="service-section bg-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><p className="service-eyebrow text-cyan-200">02 / The Groish approach</p><h2 className="service-heading mt-4 text-white">A focused system for moving from uncertainty to useful delivery.</h2><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{baseService.solutions.map((solution, index) => <div key={solution.title} className="service-dark-card"><span className="text-sm font-black text-cyan-200">0{index + 1}</span><h3 className="mt-12 text-xl font-bold">{solution.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{solution.desc}</p></div>)}</div></div>
      </section>

      <section className="service-section bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><p className="service-eyebrow">03 / What the engagement includes</p><h2 className="service-heading mt-4 max-w-3xl">A practical engagement, shaped around your priorities.</h2><div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"><div className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 lg:flex-col">{Object.entries(tabs).map(([key, tab]) => { const TabIcon = tab.icon; return <button key={key} type="button" onClick={() => setActiveTab(key)} className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-4 text-left text-sm font-bold transition ${activeTab === key ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`}><TabIcon className="h-4 w-4" />{tab.label}</button>; })}</div><div className="min-h-[320px] rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10"><AnimatePresence mode="wait"><motion.div key={activeTab} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }}><div className="mb-8 flex items-center gap-3"><CircleDot className="h-5 w-5 text-cyan-500" /><h3 className="text-2xl font-bold text-slate-950">{tabs[activeTab].label}</h3></div><div className="grid gap-4 sm:grid-cols-2">{tabs[activeTab].items.map((item) => <div key={item} className="rounded-2xl border border-slate-200 p-5"><Check className="h-5 w-5 text-cyan-600" /><p className="mt-4 font-semibold leading-6 text-slate-800">{item}</p></div>)}</div></motion.div></AnimatePresence></div></div></div>
      </section>

      {slug === 'artificial-intelligence' && <section className="service-section bg-violet-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="service-eyebrow text-violet-200">AI lifecycle and architecture</p><h2 className="service-heading mt-4 text-white">From business problem to an AI capability people can trust.</h2><p className="mt-6 leading-8 text-violet-100">The architecture changes with the use case, but the discipline stays consistent: grounded data, fit-for-purpose models, clear interfaces, measurable evaluation, and a monitored path into the workflow.</p></div><div className="ai-architecture rounded-[2rem] border border-violet-200/20 bg-white/5 p-6 sm:p-8"><div className="grid gap-3 sm:grid-cols-2">{['Business problem', 'Data and knowledge', 'Experimentation', 'Model or assistant', 'API and workflow integration', 'Testing and evaluation', 'Deployment and monitoring', 'Optimization and governance'].map((item, index) => <div key={item} className="ai-architecture__node"><span>0{index + 1}</span><p>{item}</p></div>)}</div></div></div></div></section>}

      {slug === 'ecommerce-development' && <section className="service-section bg-blue-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="service-eyebrow text-cyan-200">The commerce journey</p><h2 className="service-heading mt-4 text-white">Every touchpoint should help the customer move forward.</h2><p className="mt-6 leading-8 text-blue-100">We connect customer-facing experience design with the systems behind it, so product discovery, transaction confidence, fulfillment, and post-purchase care feel like one journey.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Discover and search', 'Evaluate the product', 'Add to cart', 'Checkout and payment', 'Fulfillment and delivery', 'Account and support', 'Retention and personalization', 'Analytics and optimization'].map((item, index) => <div key={item} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></div>)}</div></div></div></section>}

      {slug === 'gaming-development' && <section className="service-section bg-indigo-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="service-eyebrow text-violet-200">The game development lifecycle</p><h2 className="service-heading mt-4 text-white">Protect the player experience from concept through live updates.</h2><p className="mt-6 leading-8 text-indigo-100">We treat creative direction, gameplay feel, technical performance, online reliability, and player insight as connected parts of the product—not separate phases that only meet at launch.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Concept and audience', 'Prototype and vertical slice', 'Production and content', 'Multiplayer and services', 'QA and optimization', 'Launch and deployment', 'Analytics and player feedback', 'Updates and live operations'].map((item, index) => <div key={item} className="rounded-2xl border border-violet-200/20 bg-white/5 p-5"><span className="text-xs font-black text-violet-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></div>)}</div></div></div></section>}

      {slug === 'iot-development' && <section className="service-section bg-cyan-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="service-eyebrow text-cyan-200">The IoT architecture</p><h2 className="service-heading mt-4 text-white">A secure path from physical signal to operational action.</h2><p className="mt-6 leading-8 text-cyan-100">We design the layers together so device data remains useful, observable, protected, and connected to the decisions, dashboards, and automations that create value.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Physical devices and sensors', 'Connectivity and protocols', 'Gateway and edge processing', 'Cloud ingestion and storage', 'Data processing and analytics', 'Dashboards and APIs', 'Alerts and automation', 'Device management and security'].map((item, index) => <div key={item} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></div>)}</div></div></div></section>}

      {slug === 'quality-assurance' && <section className="service-section bg-slate-900 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The QA lifecycle</p><h2 className="service-heading mt-4 text-white">Quality signals should arrive before the release decision.</h2><p className="mt-6 leading-8 text-slate-300">Our QA lifecycle connects requirements to test evidence, defect learning, regression protection, and release validation so testing remains part of delivery instead of a final inspection.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Requirements and acceptance criteria', 'Test planning and risk mapping', 'Test cases, data, and environments', 'Manual and automated execution', 'Defect resolution and triage', 'Regression and change validation', 'Quality metrics and residual risk', 'Release readiness and sign-off'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'software-development' && <section className="service-section bg-blue-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">Software architecture and lifecycle</p><h2 className="service-heading mt-4 text-white">From workflow insight to software that can be operated and evolved.</h2><p className="mt-6 leading-8 text-blue-100">We align product discovery, architecture, engineering, testing, deployment, and support so technical decisions remain connected to the people and processes the software exists to serve.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Users, workflows, and requirements', 'Frontend and experience layer', 'Backend services and business rules', 'APIs, data, and integrations', 'Cloud infrastructure and security', 'Testing and observability', 'Deployment and release operations', 'Maintenance and modernization'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'staff-augmentation' && <section className="service-section bg-slate-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">Flexible team extension</p><h2 className="service-heading mt-4 text-white">Add the right specialist without losing the way your team works.</h2><p className="mt-6 leading-8 text-slate-300">The engagement model can change with the roadmap. The constant is clear context, practical collaboration, visible ownership, and a deliberate path for scaling or handing knowledge back to your organization.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Dedicated specialist', 'Part-time specialist', 'Project or milestone team', 'Blended internal and external team', 'Scale-up for launch or peak demand', 'Scale-down after a delivery phase', 'Embedded documentation and pairing', 'Structured transition and handoff'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'ui-ux-services' && <section className="service-section bg-sky-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The design process</p><h2 className="service-heading mt-4 text-white">Move from user insight to a design system people can build with.</h2><p className="mt-6 leading-8 text-sky-100">We keep research, structure, interaction, visual design, validation, accessibility, and handoff connected so the final interface is both desirable for users and practical for the product team.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Research and discovery', 'Experience strategy', 'Wireframes and user flows', 'Interactive prototype', 'Usability and accessibility testing', 'Final responsive design', 'Design system components', 'Development handoff and QA'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'web-development' && <section className="service-section bg-cyan-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">Performance and SEO-ready architecture</p><h2 className="service-heading mt-4 text-white">Make the web experience faster to use and easier to find.</h2><p className="mt-6 leading-8 text-cyan-100">Performance and discoverability are shaped by architecture, content, code, assets, integrations, and hosting. We address them as part of the build rather than as a last-minute checklist.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Responsive and mobile-first behavior', 'Core Web Vitals and loading paths', 'Image, font, script, caching, and rendering strategy', 'Semantic markup and crawlable information architecture', 'Metadata, structured content, canonical routes, and internal linking', 'Accessibility, analytics, monitoring, and real-user feedback'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'call-center-services' && <section className="service-section bg-blue-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The call-center workflow</p><h2 className="service-heading mt-4 text-white">Every conversation should end with a clear next step.</h2><p className="mt-6 leading-8 text-blue-100">We connect customer intent, agent guidance, verification, resolution, CRM ownership, follow-up, and reporting into a workflow supervisors can coach and customers can feel.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Incoming call or outbound task', 'Agent greeting and intent discovery', 'Verification and context review', 'Resolution, booking, or qualification', 'CRM update and ownership', 'Follow-up task or escalation', 'Quality review and coaching', 'Reporting and service improvement'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{['Response time', 'Resolution rate', 'Service level', 'Customer satisfaction', 'Call abandonment'].map((metric) => <div key={metric} className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-5"><p className="text-sm font-bold text-cyan-100">{metric}</p><p className="mt-3 text-xs leading-5 text-blue-100">General industry KPI; target and meaning depend on the service model.</p></div>)}</div></div></section>}

      {slug === 'it-support' && <section className="service-section bg-slate-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The incident lifecycle</p><h2 className="service-heading mt-4 text-white">Restore service quickly, then make the next incident less likely.</h2><p className="mt-6 leading-8 text-slate-300">A clear workflow helps support teams balance urgency with safe diagnosis, communication, verification, and learning.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Detection and alert', 'Ticket creation and context', 'Diagnosis and priority', 'Resolution or escalation', 'Verification with user or system', 'Documentation and knowledge update', 'Recurring-issue review', 'Service reporting and improvement'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['Critical', 'High', 'Normal', 'Low'].map((priority) => <div key={priority} className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-5"><p className="font-bold text-cyan-100">{priority} priority</p><p className="mt-3 text-sm leading-6 text-slate-300">Priority is determined by impact, urgency, affected users, risk, and service expectations.</p></div>)}</div></div></section>}

      {slug === 'it-staffing' && <section className="service-section bg-indigo-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-violet-200">The recruitment timeline</p><h2 className="service-heading mt-4 text-white">Move from an open requirement to a confident technical hire.</h2><p className="mt-6 leading-8 text-indigo-100">We keep role clarity, candidate evidence, stakeholder alignment, candidate experience, and onboarding connected so hiring decisions support delivery rather than simply fill a seat.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Requirement and success profile', 'Candidate search and sourcing', 'Initial screening and fit review', 'Technical evaluation', 'Structured interview', 'Selection and offer support', 'Onboarding and first milestone', 'Workforce scaling review'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-violet-200/20 bg-white/5 p-5"><span className="text-xs font-black text-violet-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div></div></section>}

      {slug === 'end-to-end-sales-cycle-services' && <section className="service-section bg-blue-950 text-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="service-eyebrow text-cyan-200">The sales funnel and CRM workflow</p><h2 className="service-heading mt-4 text-white">Make every stage visible, owned, and ready for the next action.</h2><p className="mt-6 leading-8 text-blue-100">We support the operating work around the funnel while keeping methodology, messaging, qualification, and measurement aligned to your specific market and sales motion.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Lead generation and prospect research', 'Qualification and fit review', 'Outreach and response handling', 'Discovery and appointment setting', 'Proposal and commercial coordination', 'Negotiation and decision tracking', 'Conversion and customer handoff', 'Post-sale follow-up and nurture'].map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><span className="text-xs font-black text-cyan-200">0{index + 1}</span><p className="mt-4 font-semibold text-white">{item}</p></motion.div>)}</div></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{['Lead quality', 'Response and contact activity', 'Stage movement and aging', 'Pipeline coverage', 'Follow-up completion'].map((metric) => <div key={metric} className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-5"><p className="text-sm font-bold text-cyan-100">{metric}</p><p className="mt-3 text-xs leading-5 text-blue-100">General sales-operations indicator; targets depend on the market and motion.</p></div>)}</div></div></section>}

      {slug === 'blockchain-development' && <section className="service-section bg-slate-950 text-white"><div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="service-eyebrow text-cyan-200">Security is part of the architecture</p><h2 className="service-heading mt-4 text-white">Protect the contract, the keys, the nodes, and the boundaries around them.</h2></div><div className="grid gap-4 sm:grid-cols-2">{['Threat modeling and trust-boundary review', 'Smart-contract unit, integration, and adversarial testing', 'Wallet, identity, permissions, and key-management controls', 'Node, API, dependency, monitoring, and incident-readiness review'].map((item) => <div key={item} className="rounded-2xl border border-cyan-200/20 bg-white/5 p-5"><Check className="h-5 w-5 text-cyan-200" /><p className="mt-4 leading-7 text-slate-200">{item}</p></div>)}</div></div></section>}

      <section className="service-section bg-white">
        <div className="container mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div><p className="service-eyebrow">04 / Implementation journey</p><h2 className="service-heading mt-4">A delivery rhythm that keeps the next decision visible.</h2><div className="service-timeline mt-12">{experience.timeline.map((step, index) => <motion.div key={step.title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08 }} className="service-timeline__item"><span className="service-timeline__number">0{index + 1}</span><div><h3 className="text-xl font-bold text-slate-950">{step.title}</h3><p className="mt-2 leading-7 text-slate-600">{step.description}</p></div></motion.div>)}</div></div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="self-start rounded-[2rem] bg-cyan-50 p-8 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">Before / after lens</p><div className="mt-8"><p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Before</p><p className="mt-3 text-lg leading-8 text-slate-700">{experience.comparison.before}</p></div><div className="my-8 h-px bg-cyan-200" /><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">After</p><p className="mt-3 text-lg font-semibold leading-8 text-slate-950">{experience.comparison.after}</p></div></motion.div>
        </div>
      </section>

      <section className="service-section service-evolution bg-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal><p className="service-eyebrow text-cyan-200">Technology &amp; industry evolution</p><h2 className="service-heading mt-4 max-w-4xl text-white">How {page.name.toLowerCase()} evolved into today’s delivery discipline.</h2><p className="mt-6 max-w-3xl leading-8 text-slate-300">A focused historical view helps explain why the tools, standards, platforms, and practices used today matter for this service.</p></Reveal>
          <div className="service-evolution__track mt-14">{page.technologyEvolution.map((milestone, index) => <motion.article key={`${milestone.period}-${milestone.title}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1 }} className="service-evolution__item"><span className="service-evolution__period">{milestone.period}</span><div className="service-evolution__dot" /><div className="service-evolution__content"><h3 className="text-xl font-bold text-white">{milestone.title}</h3><p className="mt-3 leading-7 text-slate-300">{milestone.description}</p></div></motion.article>)}</div>
        </div>
      </section>

      <section className="service-section bg-slate-50"><div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="service-eyebrow">05 / Where it creates value</p><h2 className="service-heading mt-4">Designed for teams with real operating pressure.</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{experience.industries.map((industry) => <div key={industry} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800"><Check className="h-4 w-4 text-cyan-600" />{industry}</div>)}</div></div><div><p className="service-eyebrow">What success looks like</p><h2 className="service-heading mt-4">Outcomes you can evaluate without inflated promises.</h2><div className="mt-8 space-y-4">{baseService.outcomes.map((outcome) => <div key={outcome} className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm"><Check className="mt-1 h-5 w-5 shrink-0 text-emerald-500" /><p className="leading-7 text-slate-700">{outcome}</p></div>)}</div></div></div></section>

      <section className="service-section bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="service-eyebrow">06 / Frequently asked questions</p><h2 className="service-heading mt-4">Useful answers before the first workshop.</h2><div className="mt-12 space-y-3">{page.faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950"><span>{faq.question}</span><ChevronDown className="h-5 w-5 shrink-0 text-cyan-600 transition-transform group-open:rotate-180" /></summary><p className="pr-8 pt-4 leading-7 text-slate-600">{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="service-section service-cta bg-cyan-300">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8"><p className="service-eyebrow text-slate-700">Ready when the problem is worth solving</p><h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-6xl">{experience.ctaTitle}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-800">Tell us what you are trying to improve, launch, or make possible. We will help shape the next useful step.</p><Link to="/contact" className="mt-9 inline-flex items-center rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
      </section>

      <section className="service-section bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="service-eyebrow">Keep exploring</p><h2 className="service-heading mt-4">Related capabilities</h2></div><Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700">View all services <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{relatedServices.map((related) => <Link key={related.slug} to={`/services/${related.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Related service</p><h3 className="mt-5 text-xl font-bold text-slate-950">{related.name}</h3><p className="mt-3 line-clamp-3 leading-7 text-slate-600">{related.shortDescription}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950">Explore <ArrowRight className="h-4 w-4" /></span></Link>)}</div></div></section>
    </>
  );
};

export default ServiceDetail;