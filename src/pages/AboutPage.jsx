import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Award, Globe2, Server, Lock, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Groish - Strategic BPO Partner</title>
        <meta name="description" content="Groish connects U.S. enterprises with world-class technology talent and operational excellence. Discover our mission, philosophy, and security standards." />
      </Helmet>

      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Groish</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are an extension of your team. Groish empowers U.S. enterprises by delivering scalable BPO and technology solutions that drive efficiency, innovation, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-blue-50 p-10 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To bridge the gap between U.S. business demands and global talent excellence. We aim to provide seamless, secure, and scalable solutions that allow our partners to focus on their core competencies while we handle the complexities of technology and operations.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To become the most trusted BPO partner for American enterprises, recognized for our unwavering commitment to quality, data security, and operational transparency in an increasingly digital world.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Operational Excellence</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="shrink-0 bg-blue-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Service Philosophy</h3>
                  <p className="text-slate-600">
                    We believe in "Client-First" architecture. Every solution we build and every team we deploy is customized to fit your specific culture, time zone, and technical requirements. We don't just execute tasks; we solve business problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 bg-blue-100 p-3 rounded-full">
                  <Lock className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise-Grade Security</h3>
                  <p className="text-slate-600">
                    Your data is sacred. We employ rigorous security protocols, including NDA compliance, secure VPN access, encrypted communication channels, and strict access controls to ensure your intellectual property remains protected at all times.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 bg-blue-100 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Scalability Emphasis</h3>
                  <p className="text-slate-600">
                    Business needs change rapidly. Our infrastructure allows you to scale your team up or down within days, not months. Whether you need a single developer or a 50-person call center, we provide the agility to adapt to market conditions instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;