import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About GROISH', to: '/about' },
  { label: 'Our Companies', to: '/#inside-groish' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  { label: 'All Services', to: '/services' },
  { label: 'Amazon FBA Wholesale', to: '/courses/amazon-fba-wholesale' },
  { label: 'Amazon Private Label', to: '/courses/amazon-private-label' },
  { label: 'Amazon PPC Mastery', to: '/courses/amazon-ppc' },
];

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300">
    <div className="container mx-auto grid gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:py-20">
      <div>
        <Link to="/" className="inline-flex items-center gap-3" aria-label="GROISH home">
          <img
            src="https://horizons-cdn.hostinger.com/565f8ca5-c47b-4775-b115-631124afadc6/978ad0755ba7add5cdbf44416ad53af9.png"
            alt="GROISH"
            width="120"
            height="48"
            loading="lazy"
            decoding="async"
            className="block h-10 w-auto max-w-[150px] object-contain brightness-0 invert"
            onError={(event) => { event.currentTarget.style.display = 'none'; }}
          />
        </Link>
        <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">GROISH is the parent business group behind multiple specialized companies across technology, growth, healthcare, e-commerce, and education.</p>
        <div className="mt-7 flex items-center gap-3" aria-label="Social links coming soon">
          {[Facebook, Instagram, Linkedin].map((Icon) => <span key={Icon.displayName || Icon.name} title="Social link coming soon" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500"><Icon className="h-4 w-4" /></span>)}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Quick Links</h3>
        <ul className="mt-5 space-y-3 text-sm text-slate-400">{quickLinks.map((link) => <li key={link.label}><Link to={link.to} className="transition-colors hover:text-white">{link.label}</Link></li>)}</ul>
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Our Companies</h3>
        <ul className="mt-5 space-y-3 text-sm text-slate-400"><li><a href="https://webcore360.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Webcore360</a></li><li><a href="https://transmedex.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">TransMedEx</a></li></ul>
        <h3 className="mt-9 text-sm font-bold uppercase tracking-[0.18em] text-white">Services</h3>
        <ul className="mt-5 space-y-3 text-sm text-slate-400">{services.map((link) => <li key={link.label}><Link to={link.to} className="transition-colors hover:text-white">{link.label}</Link></li>)}</ul>
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h3>
        <ul className="mt-5 space-y-4 text-sm text-slate-400"><li className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-cyan-300" /><a href="mailto:info@groish.com" className="hover:text-white">info@groish.com</a></li><li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-cyan-300" /><span>+92 370 6803898</span></li><li><a href="https://wa.me/923286672129" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"><MessageCircle className="h-4 w-4" />WhatsApp</a></li></ul>
      </div>
    </div>
    <div className="border-t border-white/10"><div className="container mx-auto px-4 py-6 text-xs text-slate-500">© {new Date().getFullYear()} GROISH. All rights reserved.</div></div>
  </footer>
);

export default Footer;