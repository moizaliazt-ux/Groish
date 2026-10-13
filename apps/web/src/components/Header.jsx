import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Companies', to: '/companies#inside-groish' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileMenuOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [mobileMenuOpen]);

  // Handle outside click & escape key for dropdown
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

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] sm:h-[76px] border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] transition-all">
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="group relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
            aria-label="GROISH Home"
          >
            <img
              src="/groish-logo.png"
              alt="GROISH"
              width="132"
              height="44"
              decoding="async"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              onError={(e) => {
                // Fallback to company-images copy if needed
                if (!e.currentTarget.src.includes('company-images')) {
                  e.currentTarget.src = '/company-images/Groish Logo.png';
                }
              }}
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-1 lg:gap-2 xl:gap-4 md:flex">
          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `group relative rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
                isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
              }`
            }
          >
            {({ isActive }) => (
              <span className="relative flex items-center">
                About
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </span>
            )}
          </NavLink>

          {/* Companies */}
          <NavLink
            to="/companies#inside-groish"
            className={({ isActive }) =>
              `group relative rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
                isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
              }`
            }
          >
            {({ isActive }) => (
              <span className="relative flex items-center">
                Companies
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </span>
            )}
          </NavLink>

          {/* Clients */}
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `group relative rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
                isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
              }`
            }
          >
            {({ isActive }) => (
              <span className="relative flex items-center">
                Clients
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </span>
            )}
          </NavLink>

          {/* Services with Dropdown */}
          <div ref={servicesMenuRef} className="relative">
            <button
              type="button"
              aria-expanded={servicesMenuOpen}
              aria-haspopup="true"
              onClick={() => setServicesMenuOpen((prev) => !prev)}
              className={`group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
                isServicesActive || servicesMenuOpen
                  ? 'text-blue-600 font-semibold bg-blue-50/60'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesMenuOpen ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-slate-700'
                }`}
              />
              {isServicesActive && (
                <motion.span
                  layoutId="navbar-active-pill"
                  className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            <AnimatePresence>
              {servicesMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-1/2 top-full mt-3 w-[min(780px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-slate-200/90 bg-white/98 p-5 text-slate-900 shadow-2xl shadow-slate-950/10 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">Our Capabilities</p>
                      <p className="mt-0.5 text-xs text-slate-500">Explore enterprise solutions and specialized growth services</p>
                    </div>
                    <Link
                      to="/services"
                      onClick={() => setServicesMenuOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      All Services
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <div className="grid max-h-[min(60vh,460px)] grid-cols-2 gap-2 overflow-y-auto pr-1 lg:grid-cols-3 custom-scrollbar">
                    {Object.entries(servicesData).map(([slug, service]) => (
                      <Link
                        key={slug}
                        to={`/services/${slug}`}
                        onClick={() => setServicesMenuOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-blue-50/80"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                          <service.icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block text-xs font-semibold leading-tight text-slate-800 group-hover:text-blue-900">
                            {service.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `group relative rounded-full px-3.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors ${
                isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
              }`
            }
          >
            {({ isActive }) => (
              <span className="relative flex items-center">
                Contact
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-blue-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </span>
            )}
          </NavLink>
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden items-center md:flex">
          <Link
            to="/explore-our-companies"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-5 py-2.5 text-xs lg:text-sm font-semibold text-white shadow-[0_10px_25px_-5px_rgba(15,23,42,0.3)] transition-all duration-200 hover:bg-blue-600 hover:shadow-blue-500/25 active:scale-[0.98]"
          >
            <span>Explore Our Companies</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            id="mobile-navigation"
            className="fixed inset-x-0 top-[72px] sm:top-[76px] max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-slate-200/80 bg-white/98 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="container mx-auto space-y-1.5 px-4 py-4 sm:px-6">
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`
                }
              >
                <span>About</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </NavLink>

              <NavLink
                to="/companies#inside-groish"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`
                }
              >
                <span>Companies</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </NavLink>

              <NavLink
                to="/clients"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`
                }
              >
                <span>Clients</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </NavLink>

              {/* Mobile Services Accordion */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 overflow-hidden">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-slate-700 transition-colors hover:text-slate-950"
                >
                  <span className={isServicesActive ? 'text-blue-600 font-semibold' : ''}>Services</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-200/60 bg-white px-3 py-2"
                    >
                      <Link
                        to="/services"
                        onClick={closeMobileMenu}
                        className="mb-2 flex items-center justify-between rounded-lg bg-blue-50/70 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100/70"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-60 overflow-y-auto">
                        {Object.entries(servicesData).map(([slug, service]) => (
                          <Link
                            key={slug}
                            to={`/services/${slug}`}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                          >
                            <service.icon className="h-3.5 w-3.5 shrink-0 text-blue-600" />
                            <span className="truncate">{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`
                }
              >
                <span>Contact</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </NavLink>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  to="/explore-our-companies"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-600"
                >
                  <span>Explore Our Companies</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;