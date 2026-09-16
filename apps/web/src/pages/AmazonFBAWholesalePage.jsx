import React from 'react';
import { Helmet } from 'react-helmet';
import { coursesData } from '@/data/coursesData';
import EnrollmentForm from '@/components/EnrollmentForm';
import { CheckCircle2, Award, Users, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigate } from 'react-router-dom';
import AdSenseAd from '@/components/AdSenseAd';

const AmazonFBAWholesalePage = () => {
  const course = coursesData.find(c => c.slug === 'amazon-fba-wholesale');

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20 bg-slate-50">
      <Helmet>
        <title>{course.title} Course in Pakistan | Groish</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-slate-300 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm"><Award className="w-4 h-4 text-blue-400" /> Certified</span>
              <span className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm"><Users className="w-4 h-4 text-blue-400" /> 500+ Students</span>
              <span className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm"><ShieldCheck className="w-4 h-4 text-green-400" /> Money-Back Guarantee</span>
            </div>
            <div className="flex gap-4">
              <a href="#enroll">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-bold">Enroll Now</Button>
              </a>
              <a href="https://wa.me/923286672129" target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 font-bold gap-2"><MessageCircle className="w-5 h-5" /> WhatsApp Us</Button>
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <img src={course.image} alt={course.title} loading="eager" fetchPriority="high" decoding="async" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our {course.title} program is designed for aspiring entrepreneurs in Pakistan looking to build a sustainable business on Amazon. We focus on real-world application, teaching you how to find authorized distributors, negotiate profitable deals, and scale operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Key Outcomes</h2>
            <ul className="space-y-3">
              {course.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.modules.map((module, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm font-medium text-slate-800">
                  Module {i + 1}: {module}
                </div>
              ))}
            </div>
          </section>

          <div className="my-6">
            <AdSenseAd variant="card" format="auto" />
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Have Questions? Let's Talk!</h3>
            <p className="text-slate-600 mb-6">Our experts are available to guide you through the enrollment process and answer any queries you might have.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/923286672129" target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto font-bold"><MessageCircle className="w-5 h-5 mr-2" /> 03286672129</Button>
              </a>
              <div className="flex items-center gap-2 text-slate-600 font-medium px-4">
                <MapPin className="text-blue-600" /> DHA Phase 4, Lahore
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1" id="enroll">
          <div className="sticky top-24">
            <EnrollmentForm preselectedCourse={course.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonFBAWholesalePage;