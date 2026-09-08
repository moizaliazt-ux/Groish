import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/servicesData';
import { servicePageConfig, siteUrl } from '@/data/servicePageConfig';

const ServicesPage = () => {
  const services = Object.entries(servicesData).map(([id, data]) => ({
    id,
    ...data
  }));

  return (
    <>
      <Helmet>
        <title>Comprehensive BPO & Tech Services | Groish</title>
        <meta name="description" content={`Explore Groish's ${Object.keys(servicesData).length} specialized technology and business service categories, from AI and blockchain to staff augmentation and customer support.`} />
        <link rel="canonical" href={`${siteUrl}/services`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Comprehensive BPO & Tech Services | Groish" />
        <meta property="og:description" content="Explore Groish technology and business services built around measurable growth, reliable delivery, and operational excellence." />
        <meta property="og:url" content={`${siteUrl}/services`} />
        <meta property="og:site_name" content="GROISH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comprehensive BPO & Tech Services | Groish" />
        <meta name="twitter:description" content="Explore Groish technology and business services built around measurable growth and reliable delivery." />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Groish Services', url: `${siteUrl}/services`, isPartOf: { '@type': 'WebSite', name: 'GROISH', url: siteUrl } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: services.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.title, url: servicePageConfig[service.id]?.url || `${siteUrl}/services/${service.id}` })) })}</script>
      </Helmet>

      <div className="bg-slate-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Capabilities</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Measurable results for every stage of your business growth. We combine technical precision with operational excellence.
          </p>
        </div>
      </div>

      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0 bg-blue-50 p-4 rounded-xl">
                    <service.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900"><Link to={`/services/${service.id}`} className="transition-colors hover:text-blue-700">{service.title}</Link></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-2">The Challenge</h4>
                        <p className="text-slate-600 leading-relaxed">{service.painPoints[0] || 'Operational inefficiencies impacting scalability.'}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">The Groish Solution</h4>
                        <p className="text-slate-600 leading-relaxed">{service.solutions[0]?.desc || 'Tailored technological intervention.'}</p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span>Outcome: {service.outcomes[0] || 'Enhanced overall business performance.'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 self-center md:self-start pt-4 md:pt-0">
                    <Link to={`/services/${service.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesPage;