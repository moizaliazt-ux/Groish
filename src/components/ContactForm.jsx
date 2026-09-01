import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { servicesData } from '@/data/servicesData';
import { servicePageConfig } from '@/data/servicePageConfig';

const initialForm = { name: '', email: '', company: '', service: '', message: '' };

const ContactForm = ({ compact = false }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submissionError, setSubmissionError] = useState('');

  const serviceOptions = useMemo(
    () => Object.entries(servicesData).map(([slug, service]) => ({ slug, label: servicePageConfig[slug]?.name || service.title })),
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
    setSubmissionError('');
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
    setSubmissionError('');
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
        setSubmissionError(error.message || 'Unable to send your inquiry. Please try again.');
        toast({ title: 'Message not sent', description: error.message, variant: 'destructive' });
      });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.6 }} className={`contact-form-card overflow-hidden p-0 ${compact ? 'border-white/10 bg-white/95' : ''}`}>
      <div className="relative overflow-hidden bg-slate-950 px-6 py-7 text-white sm:px-8 sm:py-8"><div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" /><div className="relative flex items-start justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">Start an inquiry</p><h2 className="mt-3 text-3xl font-black tracking-tight">Tell us what you are building.</h2><p className="mt-3 max-w-xl leading-7 text-slate-300">A few details help us route your request to the right team faster.</p></div><span className="hidden rounded-2xl border border-white/10 bg-white/10 p-3 text-cyan-300 sm:block"><Send className="h-5 w-5" /></span></div><div className="relative mt-7 flex items-center gap-2 text-xs font-bold text-slate-400"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-slate-950">1</span><span>Project details</span><span className="mx-1 h-px w-8 bg-white/20" /><span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20">2</span><span>Conversation</span></div></div>
      <form onSubmit={handleSubmit} noValidate className="space-y-7 p-6 sm:p-8">
        <div><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Your details</p><div className="mt-4 grid gap-5 sm:grid-cols-2">
          <label className="contact-label">Full Name <span>*</span><input name="name" value={formData.name} onChange={handleChange} className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 ${errors.name ? 'border-rose-400' : 'border-slate-200'}`} placeholder="Your full name" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name && <em>{errors.name}</em>}</label>
          <label className="contact-label">Email Address <span>*</span><input name="email" value={formData.email} onChange={handleChange} className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 ${errors.email ? 'border-rose-400' : 'border-slate-200'}`} placeholder="you@company.com" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email && <em>{errors.email}</em>}</label>
        </div></div>
        <div><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Project overview</p><div className="mt-4 space-y-5">
          <label className="contact-label">Company Name<input name="company" value={formData.company} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100" placeholder="Your company" autoComplete="organization" /></label>
          <label className="contact-label">Service Interest <span>*</span><select name="service" value={formData.service} onChange={handleChange} className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 ${errors.service ? 'border-rose-400' : 'border-slate-200'}`} aria-invalid={Boolean(errors.service)}><option value="">Select a service</option>{serviceOptions.map((service) => <option key={service.slug} value={service.slug}>{service.label}</option>)}</select>{errors.service && <em>{errors.service}</em>}</label>
          <label className="contact-label">Project Details <span>*</span><textarea name="message" value={formData.message} onChange={handleChange} className={`mt-2 min-h-40 w-full resize-y rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 ${errors.message ? 'border-rose-400' : 'border-slate-200'}`} placeholder="Tell us what you are trying to build, improve, or solve." aria-invalid={Boolean(errors.message)} />{errors.message && <em>{errors.message}</em>}</label>
        </div></div>
        <div className="border-t border-slate-200 pt-6"><Button type="submit" size="lg" disabled={status === 'loading'} className="group w-full rounded-2xl bg-slate-950 py-6 font-bold text-white shadow-lg shadow-slate-950/15 hover:bg-cyan-700">{status === 'loading' ? 'Preparing your inquiry…' : 'Send Inquiry'}<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button>
          <AnimatePresence>{status === 'success' && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm font-semibold text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Your message was sent successfully.</motion.p>}</AnimatePresence>
          <AnimatePresence>{submissionError && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} role="alert" className="text-sm font-semibold text-rose-600">{submissionError}</motion.p>}</AnimatePresence>
          <p className="text-xs leading-5 text-slate-500">Your inquiry is sent securely to the GROISH team.</p>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
