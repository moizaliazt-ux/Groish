import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { careersData } from '@/data/careersData';

const JobApplicationModal = ({ isOpen, onClose, defaultJobTitle }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: defaultJobTitle || '',
    coverLetter: '',
    experience: '',
    location: '',
    availability: ''
  });

  useEffect(() => {
    if (defaultJobTitle) {
      setFormData(prev => ({ ...prev, position: defaultJobTitle }));
    }
  }, [defaultJobTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted Successfully",
        description: `Thank you, ${formData.fullName}. We have received your application for ${formData.position}.`,
      });
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
        experience: '',
        location: '',
        availability: ''
      });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Apply for a Position</h2>
              <p className="text-sm text-slate-500">Join our world-class team</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto custom-scrollbar">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input
                    required
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="position" className="text-sm font-semibold text-slate-700">Position Applied For</label>
                  <div className="relative">
                    <select
                      required
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="" disabled>Select a position</option>
                      {careersData.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-semibold text-slate-700">Years of Experience</label>
                  <input
                    required
                    type="number"
                    min="0"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="e.g. 5"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-semibold text-slate-700">Current Location</label>
                  <input
                    required
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="availability" className="text-sm font-semibold text-slate-700">Earliest Availability</label>
                <input
                  required
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="e.g. Immediate, 2 weeks notice"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Resume / CV</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mb-2 transition-colors" />
                  <p className="text-sm text-slate-600">
                    <span className="text-blue-600 font-medium">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="coverLetter" className="text-sm font-semibold text-slate-700">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Tell us why you're a great fit for this role..."
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={onClose} className="border-slate-300 text-slate-700">
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white min-w-[120px]">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default JobApplicationModal;