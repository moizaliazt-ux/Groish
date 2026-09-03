import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig, useScroll } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';

const FinalCTA = lazy(() => import('@/components/FinalCTA'));
const Footer = lazy(() => import('@/components/Footer'));

const HomePage = lazy(() => import('@/pages/HomePage'));
const AmazonFBAWholesalePage = lazy(() => import('@/pages/AmazonFBAWholesalePage'));
const AmazonPrivateLabelPage = lazy(() => import('@/pages/AmazonPrivateLabelPage'));
const AmazonPPCPage = lazy(() => import('@/pages/AmazonPPCPage'));
const ECommerceStartupPage = lazy(() => import('@/pages/ECommerceStartupPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const CompaniesPage = lazy(() => import('@/pages/CompaniesPage'));
const ExploreOurCompaniesPage = lazy(() => import('@/pages/ExploreOurCompaniesPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogDetail = lazy(() => import('@/pages/BlogDetail'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const WhyChoosePage = lazy(() => import('@/pages/WhyChoosePage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return <motion.div className="site-scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        className="route-transition"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/amazon-fba-wholesale" element={<AmazonFBAWholesalePage />} />
          <Route path="/courses/amazon-private-label" element={<AmazonPrivateLabelPage />} />
          <Route path="/courses/amazon-ppc" element={<AmazonPPCPage />} />
          <Route path="/courses/ecommerce-startup" element={<ECommerceStartupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/explore-our-companies" element={<ExploreOurCompaniesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/why-choose-us" element={<WhyChoosePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<div className="flex min-h-[50vh] items-center justify-center px-6 text-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">404</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Page not found</h1><a className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white" href="/">Return home</a></div></div>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen flex flex-col bg-slate-50 groish-page-shell">
        <div className="groish-ambient" aria-hidden="true" />
        <ScrollToTop />
        <ScrollProgress />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex min-h-[40vh] items-center justify-center bg-slate-50 text-sm font-semibold text-slate-500">Loading GROISH…</div>}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <FinalCTA />
          <Footer />
        </Suspense>
        <Toaster />
        </div>
      </MotionConfig>
    </Router>
  );
}

export default App;