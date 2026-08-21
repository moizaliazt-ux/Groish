import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const EnrollmentForm = ({ preselectedCourse = "" }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    course: preselectedCourse,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for enrolling!",
        description: "We will contact you soon.",
      });
      setFormData({ fullName: '', phone: '', email: '', city: '', course: '', message: '' });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-slate-200">
      <h3 className="text-xl font-bold mb-4">Enroll Now</h3>
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" required type="tel" value={formData.phone} onChange={handleChange} placeholder="0300 1234567" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" required type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" required value={formData.city} onChange={handleChange} placeholder="Lahore" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="course">Course Selection</Label>
          <select 
            id="course" 
            name="course" 
            required 
            value={formData.course} 
            onChange={handleChange}
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select a course</option>
            <option value="Amazon FBA Wholesale">Amazon FBA Wholesale</option>
            <option value="Amazon Private Label Bootcamp">Amazon Private Label Bootcamp</option>
            <option value="Amazon PPC Mastery">Amazon PPC Mastery</option>
            <option value="Complete E-Commerce Start-Up Guide">Complete E-Commerce Start-Up Guide</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any questions?" className="resize-none" />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Enroll Now'}
      </Button>
    </form>
  );
};

export default EnrollmentForm;