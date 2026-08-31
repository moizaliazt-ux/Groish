import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Companies', to: '/companies#inside-groish' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 18);
        frame = 0;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileMenuOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setServicesMenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setServicesMenuOpen(false);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const headerClasses = isScrolled
    ? 'bg-white/85 border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.08)]'
    : 'bg-white/10 border-white/20 shadow-[0_14px_40px_rgba(2,6,23,0.18)]';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClasses} border-b backdrop-blur-xl`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="relative z-50 flex min-w-0 items-center gap-3 py-3.5 sm:py-4">
          <img
            src="https://horizons-cdn.hostinger.com/565f8ca5-c47b-4775-b115-631124afadc6/978ad0755ba7add5cdbf44416ad53af9.png"
            alt="GROISH"
            width="120"
            height="48"
            decoding="async"
            className="block h-9 w-auto max-w-[118px] object-contain drop-shadow-[0_10px_18px_rgba(15,23,42,0.12)] sm:h-10 sm:max-w-[140px]"
            onError={(event) => { event.currentTarget.style.display = 'none'; }}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.filter((item) => item.label !== 'Services').map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `group relative text-sm font-medium transition-colors ${
                isActive
                  ? isScrolled ? 'text-slate-950' : 'text-white'
                  : isScrolled ? 'text-slate-600 hover:text-slate-950' : 'text-slate-200 hover:text-white'
              }`}
            >
              {({ isActive }) => (
                <span className="relative inline-flex items-center gap-1 py-2">
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-200 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    } ${isScrolled ? 'bg-slate-950' : 'bg-white'}`}
                  />
                </span>
              )}
            </NavLink>
          ))}
          <div ref={servicesMenuRef} className="relative">
            <button
              type="button"
              aria-expanded={servicesMenuOpen}
              aria-haspopup="true"
              onClick={() => setServicesMenuOpen((prev) => !prev)}
              className={`group relative inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-950' : 'text-slate-200 hover:text-white'}`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} />
              <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-200 ${servicesMenuOpen ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'} ${isScrolled ? 'bg-slate-950' : 'bg-white'}`} />
            </button>
            <AnimatePresence>
              {servicesMenuOpen && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute left-1/2 top-full mt-4 w-[min(760px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                    <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Capabilities</p><p className="mt-1 text-sm text-slate-500">Explore a focused service for your next initiative.</p></div>
                    <Link to="/services" onClick={() => setServicesMenuOpen(false)} className="text-sm font-semibold text-blue-700 hover:text-blue-900">All services</Link>
                  </div>
                  <div className="grid max-h-[min(65vh,520px)] grid-cols-2 gap-2 overflow-y-auto pr-1 lg:grid-cols-3">
                    {Object.entries(servicesData).map(([slug, service]) => (
                      <Link key={slug} to={`/services/${slug}`} onClick={() => setServicesMenuOpen(false)} className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-blue-50">
                        <service.icon className="h-5 w-5 shrink-0 text-blue-600" />
                        <span className="text-sm font-semibold leading-5 text-slate-700 group-hover:text-blue-800">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/explore-our-companies"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              isScrolled
                ? 'bg-slate-950 text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] hover:bg-slate-800'
                : 'bg-white/95 text-slate-950 shadow-[0_18px_35px_rgba(255,255,255,0.18)] hover:bg-slate-100'
            }`}
          >
            Explore Our Companies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className={`relative z-50 rounded-lg p-2 md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            id="mobile-navigation"
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="container mx-auto space-y-2 px-4 py-4">
              {navItems.filter((item) => item.label !== 'Services').map((item) => (
                <NavLink key={item.to} to={item.to} onClick={closeMobileMenu} className={({ isActive }) => `flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors ${isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'}`}>
                  <span>{item.label}</span><span className="h-2 w-2 rounded-full bg-slate-900/70" />
                </NavLink>
              ))}
              <div className="rounded-xl bg-slate-50">
                <button type="button" aria-expanded={mobileServicesOpen} onClick={() => setMobileServicesOpen((prev) => !prev)} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-slate-700">
                  <span>Services</span><ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-2 pb-2">
                    <Link to="/services" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-white">All Services</Link>
                    {Object.entries(servicesData).map(([slug, service]) => <Link key={slug} to={`/services/${slug}`} onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-slate-950">{service.title}</Link>)}
                  </motion.div>}
                </AnimatePresence>
              </div>

              <Link
                to="/explore-our-companies"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
              >
                Explore Our Companies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;