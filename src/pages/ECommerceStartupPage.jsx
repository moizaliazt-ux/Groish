import React from 'react';
import { Helmet } from 'react-helmet';
import { coursesData } from '@/data/coursesData';
import EnrollmentForm from '@/components/EnrollmentForm';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const ECommerceStartupPage = () => {
  const course = coursesData.find(c => c.slug === 'ecommerce-startup');

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
              Launch your online store with confidence. The {course.title} is a comprehensive {course.duration} program that takes you through setting up a profitable e-commerce infrastructure from scratch.
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
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <EnrollmentForm preselectedCourse={course.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceStartupPage;