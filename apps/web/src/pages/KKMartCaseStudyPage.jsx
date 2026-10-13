import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Megaphone,
  Truck,
  Share2,
  Globe,
  Cpu,
  Search,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  X,
  Maximize2,
  CheckCircle2,
  Layers,
  TrendingUp,
  Tv,
  Smartphone,
  Calendar,
  ShieldCheck,
  Award,
  PhoneCall,
  Play,
  Film
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { kkmartGalleryData } from '@/components/KKMartCaseStudy';

const socialChannels = [
  {
    name: 'Facebook',
    role: 'Local Community Hub & Weekly Specials',
    badge: 'Hyper-Local Ads',
    color: 'from-blue-600 to-indigo-600',
    desc: 'Targeted geographic radius ads around the new Lahore branch and Multan branches, generating high-intent grocery shoppers and store traffic.'
  },
  {
    name: 'Instagram',
    role: 'Visual Showcase & Viral Reels',
    badge: 'Reels & Stories Blitz',
    color: 'from-pink-500 via-rose-500 to-amber-500',
    desc: 'Engaging short-form videos showcasing fresh produce aisles, imported snacks, festive discounts, and lifestyle supermarket experiences.'
  },
  {
    name: 'TikTok',
    role: 'Trending Grocery Hacks & Store Tours',
    badge: 'High Viral Reach',
    color: 'from-cyan-500 via-slate-900 to-rose-500',
    desc: 'High-energy creator collaborations, shopping challenges, and viral discount reels driving Gen Z and millennial family shoppers.'
  },
  {
    name: 'YouTube',
    role: 'Full Store Walkthroughs & Launch Films',
    badge: 'Video Storytelling',
    color: 'from-red-600 to-rose-600',
    desc: 'High-production 4K brand documentaries, grand opening coverage, supplier spotlights, and recipe/deals video series.'
  },
  {
    name: 'LinkedIn',
    role: 'Corporate Brand & Talent Acquisition',
    badge: 'B2B & Employer Brand',
    color: 'from-sky-700 to-blue-700',
    desc: 'Showcasing KK Mart’s supply chain strength, executive leadership, retail career opportunities, and B2B vendor partnerships.'
  }
];

const launchPillars = [
  {
    number: '01',
    title: '20-Billboard Citywide Takeover',
    subtitle: 'High-Impact Outdoor Saturation',
    desc: 'Strategic static and backlit hoardings deployed across Lahore’s busiest expressways, main boulevards, and commercial intersections including Ring Road, Gulberg Main Boulevard, DHA main entrances, Canal Road, and Jail Road.',
    highlights: [
      '20 prime high-frequency arterial locations',
      'Over 2.5M+ estimated weekly commuter impressions',
      'Bold branding with high-contrast night illumination'
    ],
    image: '/Client-images/kkmart-photo-04.jpg',
    tag: 'OOH Saturation'
  },
  {
    number: '02',
    title: 'Branded Flex Trucks Roadshow',
    subtitle: 'Experiential Mobile Activation',
    desc: 'A fleet of customized promotional flex trucks wrapped in high-definition KK Mart graphics, fitted with dynamic sound systems and promotional crews distributing discount vouchers across key residential communities.',
    highlights: [
      'Direct navigation through high-density residential hubs',
      'Live flyer and coupon giveaway squad activations',
      'On-ground customer buzz leading up to the grand opening'
    ],
    image: '/Client-images/kkmart-photo-08.jpg',
    tag: 'Experiential Roadshow'
  },
  {
    number: '03',
    title: 'Liberty Roundabout Grand Promotion',
    subtitle: 'Landmark Shopping Epicenter',
    desc: 'Full 360-degree brand dominance at Liberty Roundabout (Gulberg), Lahore’s most historic and prestigious retail shopping junction, cementing KK Mart as the premier supermarket destination.',
    highlights: [
      'Flagship visibility in the heart of Gulberg, Lahore',
      'Captures thousands of premium retail shoppers daily',
      'Signature evening illuminated advertising presence'
    ],
    image: '/Client-images/kkmart-photo-15.jpg',
    tag: 'Landmark Takeover'
  }
];

const retainerServices = [
  {
    icon: Cpu,
    title: 'Full-Stack IT Services & Systems',
    desc: '24/7 cloud infrastructure management, Point-of-Sale (POS) connectivity, centralized inventory sync across Multan & Lahore branches, cybersecurity, and operational IT support.'
  },
  {
    icon: Search,
    title: 'Hyperlocal SEO & Google Dominance',
    desc: 'Google Business Profile optimization for all branches, local map pack ranking, targeted keyword strategy for supermarket & grocery queries, and review management.'
  },
  {
    icon: Megaphone,
    title: 'Full-Funnel Digital Performance Ads',
    desc: 'High-converting Meta and Google Ads, hyper-targeted local customer acquisition funnels, retargeting campaigns, and seasonal promotional blitzes.'
  },
  {
    icon: Share2,
    title: 'Social Media Management (5 Channels)',
    desc: 'Creative graphic design, video production, daily publishing, community moderation, and brand tone across Facebook, Instagram, TikTok, LinkedIn, and YouTube.'
  },
  {
    icon: TrendingUp,
    title: 'Loyalty & Customer Growth Strategy',
    desc: 'Data-driven customer retention models, WhatsApp business automation for weekly flyers, and launch event footfall maximization.'
  },
  {
    icon: ShieldCheck,
    title: 'Dedicated Account & Media Management',
    desc: 'A specialized Groish cross-functional team overseeing outdoor media permits, print production quality, and live campaign analytics.'
  }
];

const KKMartCaseStudyPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredGallery = activeFilter === 'all'
    ? kkmartGalleryData
    : activeFilter === 'videos'
    ? kkmartGalleryData.filter((item) => item.type === 'video')
    : activeFilter === 'photos'
    ? kkmartGalleryData.filter((item) => item.type === 'image')
    : kkmartGalleryData.filter((item) => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const handleKeyDown = useCallback((e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % kkmartGalleryData.length);
    if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + kkmartGalleryData.length) % kkmartGalleryData.length);
  }, [lightboxIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="groish-page-shell bg-slate-950 text-slate-100 pt-20">
      <Helmet>
        <title>KK Mart Case Study | Multan & Lahore Expansion | Groish</title>
        <meta
          name="description"
          content="Explore how Groish is powering KK Mart's Lahore launch and 1-year IT, SEO, and Digital Marketing mandate, including 20 billboards, road shows, and Liberty Roundabout campaigns."
        />
        <link rel="canonical" href="https://groish.com/clients/kk-mart" />
        <meta property="og:title" content="KK Mart Case Study | Multan & Lahore Expansion | Groish" />
        <meta property="og:description" content="Complete case study on Groish's 1-year IT services, digital marketing, SEO, and Lahore mega launch campaign for KK Mart." />
        <meta property="og:url" content="https://groish.com/clients/kk-mart" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Breadcrumbs */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-3.5 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <Link to="/clients" className="hover:text-white transition-colors">Clients</Link>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-cyan-300 font-semibold">KK Mart Case Study</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-slate-800/80 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.18),transparent_60%)] py-16 sm:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                Featured Client Case Study
              </span>
              <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs font-semibold text-slate-300">
                Retail Supermarket Chain
              </span>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Active 1-Year Partnership
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl leading-[1.02]">
              Powering KK Mart’s Retail Expansion from{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Multan to Lahore
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl max-w-3xl">
              With 3 successful supermarket branches established in Multan, KK Mart partnered with GROISH for an end-to-end 1-year IT, SEO, and omnichannel digital marketing mandate, alongside an unprecedented Lahore launch campaign.
            </p>

            {/* Key Quick Stats Strip */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur">
                <p className="text-3xl font-black text-cyan-300">3 + 1</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Branches</p>
                <p className="text-[0.75rem] text-slate-500">3 Multan + 1 Lahore Flagship</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur">
                <p className="text-3xl font-black text-blue-300">20</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Billboards</p>
                <p className="text-[0.75rem] text-slate-500">Arterial Lahore coverage</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur">
                <p className="text-3xl font-black text-emerald-300">1 Year</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Full Scope</p>
                <p className="text-[0.75rem] text-slate-500">IT, SEO & Digital Retainer</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur">
                <p className="text-3xl font-black text-pink-300">5</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Social Platforms</p>
                <p className="text-[0.75rem] text-slate-500">FB, IG, TikTok, LI, YouTube</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section 1: Client Background & Challenge */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Building2 className="h-4 w-4" />
              <span>About KK Mart</span>
            </div>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              From Multan’s Trusted Market to Lahore’s Next Flagship
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                <strong className="text-white">KK Mart</strong> has built a stellar reputation across South Punjab, operating <strong>3 premier supermarket branches in Multan</strong> offering high-quality groceries, household goods, fresh produce, and customer-first retail experiences.
              </p>
              <p>
                As part of their national expansion, KK Mart chose <strong>Lahore</strong> for their next flagship supermarket branch. Entering a competitive metropolitan market required more than standard advertising—it demanded a 360-degree synchronized launch strategy combining high-visibility outdoor presence with robust digital marketing and seamless IT operations.
              </p>
              <p>
                GROISH was selected as the strategic technology and marketing partner to execute both the high-voltage physical launch and manage the long-term digital growth of the brand.
              </p>
            </div>
          </div>

          {/* Spotlight Hero Image */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src="/campaign-images/kkmart/billboards-lahore.jpg"
              alt="KK Mart Billboard Campaign in Lahore by Groish"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="rounded-full bg-cyan-400/20 border border-cyan-400/40 px-3 py-1 text-xs font-bold text-cyan-300 backdrop-blur">
                Lahore Launch OOH Billboard
              </span>
              <p className="mt-2 text-sm text-slate-200">
                One of 20 high-impact billboard installations designed and executed by GROISH across Lahore.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Lahore Launch Campaign Pillars */}
        <section className="mt-24 sm:mt-32">
          <div className="max-w-3xl">
            <span className="rounded-full bg-blue-500/10 border border-blue-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              Ground Dominance
            </span>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
              The Lahore Launch Mega-Campaign
            </h2>
            <p className="mt-3 text-base text-slate-300">
              To guarantee immediate awareness and high footfall for the new Lahore branch, GROISH executed a multi-touchpoint physical activation campaign:
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {launchPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-950">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-slate-950/80 border border-white/10 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase text-cyan-300 backdrop-blur">
                    {pillar.tag}
                  </div>
                  <div className="absolute top-3 right-3 rounded-full bg-white/10 border border-white/20 px-2 py-0.5 text-xs font-black text-white">
                    {pillar.number}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">{pillar.subtitle}</span>
                    <h3 className="mt-1 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                    {pillar.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 1-Year Retainer & IT Services */}
        <section className="mt-24 sm:mt-32 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-14">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              1-Year Retainer Scope
            </span>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Complete IT Services, SEO & Digital Marketing
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Groish operates as KK Mart’s outsourced Chief Technology Officer and Digital Growth Agency under an integrated 12-month service agreement.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {retainerServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-950"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Social Media Management Breakdown */}
        <section className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              Omnichannel Digital Presence
            </span>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              5-Platform Social Media Strategy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Each channel is assigned tailored content pillars and ad targeting strategies to maximize engagement and direct store traffic.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {socialChannels.map((channel) => (
              <div
                key={channel.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur hover:border-slate-700 transition"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">{channel.name}</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300">
                      {channel.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-slate-400">{channel.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{channel.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-cyan-400">Managed by Groish</span>
                  <span>Daily Updates</span>
                </div>
              </div>
            ))}

            {/* Additional highlight card */}
            <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-900 p-6 backdrop-blur">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Content Engine</span>
                <h3 className="mt-2 text-xl font-bold text-white">High-Production Video & Visuals</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Groish shoots and edits professional reels, promotional graphics, weekly digital price flyers, and store walkthroughs on location in Multan and Lahore.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-cyan-300">
                <CheckCircle2 className="h-4 w-4" /> Full In-House Creative Suite
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Interactive Image & Media Gallery */}
        <section id="campaign-gallery" className="mt-24 sm:mt-32 scroll-mt-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                Verified Media Assets & On-Ground Documentation
              </span>
              <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                KK Mart Campaign Media Gallery
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Browse all 25 high-resolution billboard & facade installations alongside 11 on-ground action videos from the Lahore launch. Click any asset to play video or view full-screen.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Assets', count: kkmartGalleryData.length },
                { id: 'videos', label: 'Videos & Reels', count: kkmartGalleryData.filter((i) => i.type === 'video').length },
                { id: 'billboards', label: 'Billboards & OOH', count: kkmartGalleryData.filter((i) => i.category === 'Billboards').length },
                { id: 'building takeover', label: 'Building Takeovers', count: kkmartGalleryData.filter((i) => i.category === 'Building Takeover').length },
                { id: 'retail & deals', label: 'Retail & Deals', count: kkmartGalleryData.filter((i) => i.category === 'Retail & Deals').length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    activeFilter === tab.id
                      ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20 scale-105'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[0.65rem] px-1.5 py-0.2 rounded-full font-bold ${
                    activeFilter === tab.id ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredGallery.map((item, index) => {
              const fullIndex = kkmartGalleryData.findIndex((g) => g.id === item.id);
              const isVideo = item.type === 'video';
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(fullIndex >= 0 ? fullIndex : index)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/60"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Tag & Media Type Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur border border-white/10">
                        {item.tag}
                      </span>
                      {isVideo && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/90 px-2 py-0.5 text-[0.6rem] font-bold text-white shadow-sm">
                          <Film className="h-2.5 w-2.5" />
                          VIDEO
                        </span>
                      )}
                    </div>

                    {/* Expand or Play Icon */}
                    {isVideo ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/90 text-slate-950 shadow-lg shadow-cyan-400/30 transition-transform duration-300 group-hover:scale-115 group-hover:bg-cyan-300">
                          <Play className="h-5 w-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/70 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur border border-white/20">
                        <Maximize2 className="h-3.5 w-3.5" />
                      </div>
                    )}

                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <div className="flex items-center gap-1.5 text-[0.7rem] font-medium text-slate-400">
                        <MapPin className="h-3 w-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                      <h4 className="mt-1 text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 6: Next Steps / CTA */}
        <section className="mt-24 sm:mt-32 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                Partner with GROISH
              </span>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">
                Ready to execute your next enterprise retail or brand launch?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                GROISH provides end-to-end technology infrastructure, out-of-home media procurement, and digital marketing that turn ambitious expansions into industry milestones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-cyan-400 px-8 py-6 text-base font-bold text-slate-950 hover:bg-cyan-300 shadow-[0_10px_25px_rgba(34,211,238,0.25)] transition-all"
              >
                <Link to="/contact">
                  <span>Start Your Campaign</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-slate-700 bg-slate-900 px-6 py-6 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <Link to="/clients">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span>All Clients</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal (Photo & Video) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + kkmartGalleryData.length) % kkmartGalleryData.length);
              }}
              className="absolute left-4 sm:left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % kkmartGalleryData.length);
              }}
              className="absolute right-4 sm:right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-slate-700 transition"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl flex flex-col"
            >
              <div className="relative aspect-[16/9] w-full max-h-[68vh] bg-black flex items-center justify-center">
                {kkmartGalleryData[lightboxIndex].type === 'video' ? (
                  <video
                    key={kkmartGalleryData[lightboxIndex].src}
                    src={kkmartGalleryData[lightboxIndex].src}
                    poster={kkmartGalleryData[lightboxIndex].image}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full object-contain max-h-[68vh]"
                  />
                ) : (
                  <img
                    src={kkmartGalleryData[lightboxIndex].image}
                    alt={kkmartGalleryData[lightboxIndex].title}
                    className="h-full w-full object-contain max-h-[68vh]"
                  />
                )}
              </div>

              <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-cyan-400/20 px-2.5 py-0.5 text-xs font-bold text-cyan-300">
                      {kkmartGalleryData[lightboxIndex].category}
                    </span>
                    {kkmartGalleryData[lightboxIndex].type === 'video' && (
                      <span className="rounded-full bg-rose-500/20 px-2.5 py-0.5 text-xs font-bold text-rose-400 border border-rose-500/30 flex items-center gap-1">
                        <Film className="h-3 w-3" /> Live Video
                      </span>
                    )}
                    <span className="text-xs text-slate-400">
                      {kkmartGalleryData[lightboxIndex].location}
                    </span>
                  </div>
                  <h4 className="mt-1 text-xl font-bold text-white">
                    {kkmartGalleryData[lightboxIndex].title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-300 max-w-2xl">
                    {kkmartGalleryData[lightboxIndex].description}
                  </p>
                </div>

                <div className="text-xs font-semibold text-slate-400 shrink-0">
                  {lightboxIndex + 1} / {kkmartGalleryData.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KKMartCaseStudyPage;
