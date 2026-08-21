import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Send, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Groish | B2B Inquiries</title>
        <meta name="description" content="Contact Groish for BPO and technology services. Aligned with U.S. business hours for seamless collaboration. info@groish.com" />
      </Helmet>

      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to optimize your operations? Our team is ready to discuss your unique business challenges.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                    <a href="mailto:info@groish.com" className="text-blue-600 hover:text-blue-800 text-lg transition-colors">
                      info@groish.com
                    </a>
                    <p className="text-slate-500 text-sm mt-1">Direct line to our business development team.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Operational Hours</h3>
                    <p className="text-slate-700 font-medium">6:00 PM - 3:00 AM (Pakistan Standard Time)</p>
                    <p className="text-slate-500 text-sm mt-1">
                      Strategically aligned with U.S. Business Hours (EST/PST) to ensure real-time collaboration and overlap with your onshore teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Global Presence</h3>
                    <p className="text-slate-700">Headquarters in Lahore, Pakistan</p>
                    <p className="text-slate-500 text-sm mt-1">Serving clients across North America, Europe, and UAE.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-2">Why the time overlap matters?</h3>
                <p className="text-slate-600 text-sm">
                  Our shifted operational hours mean we work while you work. No more waiting 24 hours for a response. We attend your stand-ups, respond to your Slack messages instantly, and solve problems in real-time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="john@company.com"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Your Company Inc."
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Interest</label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="web">Web Development</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="staff">Staff Augmentation</option>
                    <option value="support">Call Center / IT Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                    onChange={handleChange}
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4">
                  Send Inquiry <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;