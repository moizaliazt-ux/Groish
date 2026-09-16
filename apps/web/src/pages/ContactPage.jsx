import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Globe2, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import AdSenseAd from '@/components/AdSenseAd';
import { siteUrl } from '@/data/servicePageConfig';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Groish | Start a Business Conversation</title>
        <meta name="description" content="Contact Groish about technology, customer operations, staffing, AI, ecommerce, software, and growth services. Tell us what you are building or improving." />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Groish | Start a Business Conversation" />
        <meta property="og:description" content="Connect with Groish about technology and business operations services." />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <meta property="og:site_name" content="GROISH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Groish" />
        <meta name="twitter:description" content="Start a conversation about your next business or technology initiative." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Groish',
          url: `${siteUrl}/contact`,
          description: 'Contact Groish about technology and business operations services.',
          mainEntity: {
            '@type': 'Organization',
            name: 'GROISH',
            url: siteUrl,
            email: 'info@groish.com',
            areaServed: ['North America', 'Europe', 'United Arab Emirates', 'Pakistan']
          }
        })}</script>
      </Helmet>

      <section className="contact-hero relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="contact-hero__glow contact-hero__glow--one" />
        <div className="contact-hero__glow contact-hero__glow--two" />
        <div className="container relative mx-auto px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-cyan-200">Let’s build the next useful step</p>
            <h1 className="text-5xl font-black tracking-[-0.07em] sm:text-7xl lg:text-8xl">Get in Touch</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Bring us the challenge, opportunity, or operation you want to improve. We’ll help turn the conversation into a clear next step.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-section bg-white">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65 }}>
            <p className="contact-eyebrow">Contact information</p>
            <h2 className="contact-heading mt-4">A real conversation starts with context.</h2>
            <div className="mt-10 space-y-4">
              <a href="mailto:info@groish.com" className="contact-info-card group"><span className="contact-icon"><Mail className="h-5 w-5" /></span><span><strong>Email</strong><span className="mt-1 block text-lg font-semibold text-slate-950">info@groish.com</span><small>Direct line to our business development team.</small></span><ArrowRight className="contact-card-arrow" /></a>
              <div className="contact-info-card group"><span className="contact-icon"><Clock3 className="h-5 w-5" /></span><span><strong>Operational hours</strong><span className="mt-1 block font-semibold text-slate-950">6:00 PM–3:00 AM Pakistan Standard Time</span><small>Shifted hours designed for practical overlap with international clients.</small></span></div>
              <div className="contact-info-card group"><span className="contact-icon"><Globe2 className="h-5 w-5" /></span><span><strong>Global presence</strong><span className="mt-1 block font-semibold text-slate-950">Lahore, Pakistan</span><small>Service coverage across North America, Europe, and UAE.</small></span><MapPin className="contact-card-map" /></div>
            </div>
            <div className="contact-overlap-card mt-8"><ShieldCheck className="h-6 w-6 shrink-0 text-cyan-700" /><div><h3>Why the time overlap matters?</h3><p>Our shifted operational hours allow the team to work with clients during their working hours, provide same-day follow-ups, respond quickly, and solve issues in real time.</p></div></div>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      <div className="border-y border-slate-200 bg-slate-50 py-8">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AdSenseAd variant="banner" format="auto" />
        </div>
      </div>

      <section className="contact-lower-section"><div className="container relative mx-auto px-4 py-20 text-center sm:px-6 lg:px-8"><p className="contact-eyebrow">The next chapter starts with a useful question</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl">Ready to improve your operations?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Explore our capabilities or start the conversation directly with the team.</p><Link to="/services" className="mt-8 inline-flex items-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">Explore services <ArrowRight className="ml-2 h-4 w-4" /></Link></div></section>
    </>
  );
};

export default ContactPage;