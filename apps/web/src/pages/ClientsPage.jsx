import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Tv,
  Calendar,
  Share2,
  Truck,
  Cpu,
  Search,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const clientSectors = [
  {
    title: 'Retail & Supermarkets',
    desc: 'Full-spectrum OOH launches, branch expansions, hyper-local performance marketing, POS/ERP IT integration, and nationwide footfall drivers.',
    highlight: 'Featured: KK Mart'
  },
  {
    title: 'Healthcare & Revenue Cycle',
    desc: 'Operational excellence, medical billing workflows, claims management, credentialing, and HIPAA-aligned tech support via TransMedEx.',
    highlight: 'Healthcare Providers'
  },
  {
    title: 'E-Commerce & Amazon Brands',
    desc: 'Marketplace account scaling, private label launches, wholesale supply distribution, and performance PPC management.',
    highlight: 'Amazon & DTC Brands'
  },
  {
    title: 'Technology & Digital Platforms',
    desc: 'Custom software architecture, mobile & web applications, enterprise digital systems, and cloud infrastructure via WebCore360.',
    highlight: 'Enterprise Tech'
  }
];

const clientValues = [
  {
    icon: Layers,
    title: 'Integrated Physical + Digital Synergy',
    desc: 'We uniquely bridge massive physical ground campaigns (billboards, roadshows, landmark takeovers) with precision digital performance.'
  },
  {
    icon: Cpu,
    title: 'End-to-End Technology Backbone',
    desc: 'From cloud architecture and ERP systems to SEO and ad funnels, we provide the complete technical infrastructure to scale smoothly.'
  },
  {
    icon: TrendingUp,
    title: 'Proven Scale & Measurable ROI',
    desc: 'Every campaign and retainer is backed by tangible KPIs—footfall, brand recall, qualified leads, and sustained customer acquisition.'
  },
  {
    icon: ShieldCheck,
    title: 'Dedicated Senior Account Teams',
    desc: 'Our enterprise clients receive direct access to dedicated strategists, developers, creative leads, and media procurement directors.'
  }
];

const ClientsPage = () => {
  return (
    <div className="groish-page-shell bg-slate-950 text-slate-100 pt-20">
      <Helmet>
        <title>Our Clients & Case Studies | Groish</title>
        <meta
          name="description"
          content="Discover how Groish partners with high-growth enterprises like KK Mart to deliver complete IT solutions, SEO, digital marketing, and nationwide launch campaigns."
        />
        <link rel="canonical" href="https://groish.com/clients" />
        <meta property="og:title" content="Our Clients & Case Studies | Groish" />
        <meta property="og:description" content="Explore our client partnerships and featured case studies across retail, healthcare, and enterprise technology." />
        <meta property="og:url" content="https://groish.com/clients" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative isolate overflow-hidden border-b border-slate-800/80 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_65%)] py-16 sm:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-[0.24em]">
              <Sparkles className="h-4 w-4" />
              <span>Client Partnerships & Impact</span>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl leading-[1.02]">
              Building Breakthrough Momentum for{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Market Leaders
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl max-w-3xl">
              From large-scale retail supermarket networks expanding across cities to global technology and healthcare operators, GROISH powers high-stakes growth through unified IT, marketing, and media execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* ==========================================
            FEATURED FLAGSHIP CLIENT SPOTLIGHT: KK MART
        ========================================== */}
        <section className="relative">
          <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                Flagship Case Study
              </span>
              <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                Featured Client Spotlight
              </h2>
            </div>
            <Link
              to="/clients/kk-mart"
              className="group hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 transition"
            >
              <span>View Full KK Mart Story</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-10 lg:p-12 shadow-2xl relative"
          >
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-cyan-400/20 border border-cyan-400/40 px-3 py-0.5 text-xs font-bold text-cyan-300">
                    Retail Chain Expansion
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-0.5 text-xs font-semibold text-slate-300">
                    Multan & Lahore
                  </span>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 text-xs font-bold text-emerald-400">
                    1-Year IT & Growth Retainer
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl leading-tight">
                  Our Client – KK Mart
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Operating <strong className="text-white">3 established branches in Multan</strong>, KK Mart is now opening their next flagship branch in <strong className="text-cyan-300">Lahore</strong>. 
                </p>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">
                  GROISH is delivering a complete 1-year mandate encompassing full-stack IT infrastructure, local and technical SEO, and full-funnel digital marketing across Facebook, Instagram, TikTok, LinkedIn, and YouTube. For the grand opening, GROISH is executing a 20-billboard citywide blitz, a mobile flex truck roadshow, and landmark promotions at Liberty Roundabout.
                </p>

                {/* Key Metrics Strip */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <p className="text-xl font-black text-cyan-300">3 + 1</p>
                    <p className="text-[0.7rem] uppercase tracking-wider text-slate-400">Branches</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <p className="text-xl font-black text-blue-300">20</p>
                    <p className="text-[0.7rem] uppercase tracking-wider text-slate-400">Billboards</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <p className="text-xl font-black text-emerald-300">1 Year</p>
                    <p className="text-[0.7rem] uppercase tracking-wider text-slate-400">Retainer</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <p className="text-xl font-black text-pink-300">5</p>
                    <p className="text-[0.7rem] uppercase tracking-wider text-slate-400">Platforms</p>
                  </div>
                </div>

                {/* Direct CTA to Sub-Page */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-6 text-base font-bold text-slate-950 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40 hover:scale-[1.02] transition"
                  >
                    <Link to="/clients/kk-mart">
                      <span>View Full KK Mart Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-slate-700 bg-slate-900 px-6 py-6 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    <Link to="/clients/kk-mart#campaign-gallery">
                      <span>Explore Media Gallery</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Visual Card Preview */}
              <div className="space-y-4">
                <Link to="/clients/kk-mart" className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                  <img
                    src="/Client-images/kkmart-photo-01.jpg"
                    alt="KK Mart High-Q Mall Facade Wrap by Groish"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur border border-white/10">
                          Building Takeover
                        </span>
                        <span className="rounded-full bg-rose-500/90 px-2 py-0.5 text-[0.6rem] font-bold text-white">
                          36 Assets
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-white group-hover:text-cyan-300 transition">
                        High-Q Mall KK Mart Grand Opening
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-slate-950 font-bold shadow transition group-hover:scale-110">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <Link to="/clients/kk-mart" className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                    <img
                      src="/Client-images/kkmart-photo-04.jpg"
                      alt="KK Mart Jail Road Prime Billboard"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition" />
                    <div className="absolute bottom-2 left-2 right-2 text-[0.7rem] font-bold text-white truncate drop-shadow">
                      Jail Road 20-Billboard Blitz
                    </div>
                  </Link>

                  <Link to="/clients/kk-mart" className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                    <img
                      src="/Client-images/kkmart-photo-15.jpg"
                      alt="KK Mart Liberty Roundabout Takeover"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition" />
                    <div className="absolute bottom-2 left-2 right-2 text-[0.7rem] font-bold text-white truncate drop-shadow">
                      Liberty Roundabout Takeover
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ==========================================
            INDUSTRIES & SECTORS WE SERVE
        ========================================== */}
        <section className="mt-24 sm:mt-32">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              Industry Breadth
            </span>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Who We Build and Scale For
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Our specialized business units collaborate to deliver end-to-end solutions tailored to specific commercial ecosystems.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clientSectors.map((sector) => (
              <div
                key={sector.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur transition-all duration-300 hover:border-slate-700 hover:bg-slate-900"
              >
                <div>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-[0.7rem] font-bold text-cyan-300">
                    {sector.highlight}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">{sector.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{sector.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
                  <span>Groish Capability</span>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            WHY ENTERPRISE CLIENTS TRUST GROISH
        ========================================== */}
        <section className="mt-24 sm:mt-32 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-14">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              The Groish Standard
            </span>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Why Ambitious Brands Choose GROISH
            </h2>
            <p className="mt-3 text-base text-slate-300">
              We eliminate the friction of managing fragmented vendors by acting as a single, accountable partner across technology, creative execution, and media procurement.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {clientValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 backdrop-blur hover:border-cyan-500/40 transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{val.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            BOTTOM CTA
        ========================================== */}
        <section className="mt-24 sm:mt-32 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                Partner with GROISH
              </span>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">
                Ready to make your next launch an unforgettable success?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our team to discuss customized IT services, high-impact billboard campaigns, and omnichannel digital marketing tailored for your brand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-cyan-400 px-8 py-6 text-base font-bold text-slate-950 hover:bg-cyan-300 shadow-[0_10px_25px_rgba(34,211,238,0.25)] transition-all"
              >
                <Link to="/contact">
                  <span>Start a Partnership</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-slate-700 bg-slate-900 px-6 py-6 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <Link to="/clients/kk-mart">
                  <span>Explore KK Mart Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClientsPage;
