import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, TrendingUp, HeartHandshake as Handshake, MonitorCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhyChoosePage = () => {
  const differentiators = [
    {
      icon: Clock,
      title: 'Time Zone Alignment',
      description: 'We operate during U.S. business hours (6 PM - 3 AM PKT), ensuring real-time collaboration, instant communication, and zero lag in project momentum.'
    },
    {
      icon: Handshake,
      title: 'U.S. Enterprise Focus',
      description: 'Our workflows, communication styles, and quality standards are specifically calibrated for the expectations of American corporations and startups.'
    },
    {
      icon: Shield,
      title: 'Data Security First',
      description: 'We adhere to strict data protection protocols, NDA compliance, and secure infrastructure to safeguard your intellectual property and sensitive customer data.'
    },
    {
      icon: Users,
      title: 'Top 5% Talent Access',
      description: 'Our rigorous screening process ensures you work with only the most skilled developers, designers, and support specialists in the region.'
    },
    {
      icon: MonitorCheck,
      title: 'Seamless Integration',
      description: 'We don’t just work for you; we work with you. Our teams integrate directly into your Slack, Jira, and GitHub workflows, functioning as a true extension of your in-house staff.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable & Flexible',
      description: 'Scale your team up or down on demand. We provide the agility you need to respond to market changes without the burden of long-term HR commitments.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Groish | The Groish Advantage</title>
        <meta name="description" content="Why top U.S. companies choose Groish: Time zone alignment, enterprise security, and elite talent." />
      </Helmet>

      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Partner with Groish?</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Beyond outsourcing. We provide a strategic partnership built on trust, quality, and alignment with your business goals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <diff.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{diff.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing list of U.S. enterprises that have transformed their operations with Groish.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhyChoosePage;