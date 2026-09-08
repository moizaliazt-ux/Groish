import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { careersData } from '@/data/careersData';
import JobApplicationModal from '@/components/JobApplicationModal';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedJob(null), 300); // clear after animation
  };

  return (
    <>
      <Helmet>
        <title>Careers at Groish | Join Our Global Team</title>
        <meta name="description" content="Explore career opportunities at Groish. We are hiring talented developers, engineers, and support specialists to build the future of enterprise technology." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/90 z-0" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/10 skew-x-[-20deg] transform translate-x-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider">We Are Hiring</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Join the Team Building the <span className="text-blue-400">Future</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              At Groish, we don't just fill seats. We empower brilliant minds to solve complex challenges for U.S. enterprises. 
              Find your place in our dynamic, global workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 border-none font-bold"
                onClick={() => document.getElementById('jobs-list').scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits / Culture Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Global Collaboration</h3>
                <p className="text-slate-600">Work alongside diverse, talented professionals from around the globe on high-impact projects.</p>
             </div>
             <div className="p-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Flexible Environment</h3>
                <p className="text-slate-600">Enjoy remote-first opportunities and flexible schedules that respect your work-life balance.</p>
             </div>
             <div className="p-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Career Growth</h3>
                <p className="text-slate-600">Continuous learning opportunities, mentorship programs, and a clear path for professional advancement.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs-list" className="py-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Current Openings</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We are constantly growing. Check out the latest roles available across our engineering, design, and operations teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careersData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 uppercase tracking-wide">
                    {job.department}
                  </span>
                  <span className="text-slate-400 bg-slate-50 p-1.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Briefcase className="w-4 h-4" />
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {job.type}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                  {job.description}
                </p>
                
                <Button 
                  onClick={() => handleApplyClick(job)}
                  className="w-full bg-slate-900 text-white hover:bg-blue-600 transition-colors mt-auto flex items-center justify-between group-hover:shadow-md"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <JobApplicationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        defaultJobTitle={selectedJob?.title} 
      />
    </>
  );
};

export default CareersPage;