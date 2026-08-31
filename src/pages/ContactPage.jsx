import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock3, Globe2, Mail, MapPin, Send, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { servicesData } from '@/data/servicesData';
import { servicePageConfig, siteUrl } from '@/data/servicePageConfig';

const initialForm = { name: '', email: '', company: '', service: '', message: '' };

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const serviceOptions = useMemo(
    () => Object.entries(servicesData).map(([slug, service]) => ({
      slug,
      label: servicePageConfig[slug]?.name || service.title
    })),
    []
  );

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!formData.service) nextErrors.service = 'Select a service interest.';
    if (formData.message.trim().length < 20) nextErrors.message = 'Add at least 20 characters about your project.';
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      return;
    }

    setStatus('loading');
    fetch('/hcgi/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, service: servicePageConfig[formData.service]?.name || formData.service }),
    })
      .then(async (response) => {
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.errors?.join(' ') || result.error || 'Unable to send your inquiry.');
        setStatus('success');
        setFormData(initialForm);
        toast({ title: 'Message sent', description: 'Thanks for reaching out. We will be in touch soon.' });
      })
      .catch((error) => {
        setStatus('idle');
        toast({ title: 'Message not sent', description: error.message, variant: 'destructive' });
      });
  };

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

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay: 0.08 }} className="contact-form-card">
            <div className="flex items-start justify-between gap-5"><div><p className="contact-eyebrow">Start an inquiry</p><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Send Us a Message</h2><p className="mt-3 leading-7 text-slate-600">Share enough context for us to understand where we can help.</p></div><span className="hidden rounded-2xl bg-cyan-50 p-3 text-cyan-700 sm:block"><Send className="h-5 w-5" /></span></div>
            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="contact-label">Full Name <span>*</span><input name="name" value={formData.name} onChange={handleChange} className={`mt-2 w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 ${errors.name ? 'border-rose-400' : 'border-slate-200'}`} placeholder="Your full name" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name && <em>{errors.name}</em>}</label>
                <label className="contact-label">Email Address <span>*</span><input name="email" value={formData.email} onChange={handleChange} className={`mt-2 w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 ${errors.email ? 'border-rose-400' : 'border-slate-200'}`} placeholder="you@company.com" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email && <em>{errors.email}</em>}</label>
              </div>
              <label className="contact-label">Company Name<input name="company" value={formData.company} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="Your company" autoComplete="organization" /></label>
              <label className="contact-label">Service Interest <span>*</span><select name="service" value={formData.service} onChange={handleChange} className={`mt-2 w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 ${errors.service ? 'border-rose-400' : 'border-slate-200'}`} aria-invalid={Boolean(errors.service)}><option value="">Select a service</option>{serviceOptions.map((service) => <option key={service.slug} value={service.slug}>{service.label}</option>)}</select>{errors.service && <em>{errors.service}</em>}</label>
              <label className="contact-label">Project Details <span>*</span><textarea name="message" value={formData.message} onChange={handleChange} className={`mt-2 min-h-36 w-full resize-y rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 ${errors.message ? 'border-rose-400' : 'border-slate-200'}`} placeholder="Tell us what you are trying to build, improve, or solve." aria-invalid={Boolean(errors.message)} />{errors.message && <em>{errors.message}</em>}</label>
              <Button type="submit" size="lg" disabled={status === 'loading'} className="group w-full rounded-xl bg-slate-950 py-6 font-bold text-white hover:bg-cyan-700">{status === 'loading' ? 'Preparing your inquiry…' : 'Send Inquiry'}<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
              <AnimatePresence>{status === 'success' && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm font-semibold text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Your email draft has been prepared.</motion.p>}</AnimatePresence>
              <p className="text-xs leading-5 text-slate-500">Submitting opens your email client with the inquiry details addressed to info@groish.com.</p>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="contact-lower-section"><div className="container relative mx-auto px-4 py-20 text-center sm:px-6 lg:px-8"><p className="contact-eyebrow">The next chapter starts with a useful question</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl">Ready to improve your operations?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Explore our capabilities or start the conversation directly with the team.</p><Link to="/services" className="mt-8 inline-flex items-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">Explore services <ArrowRight className="ml-2 h-4 w-4" /></Link></div></section>
    </>
  );
};

export default ContactPage;