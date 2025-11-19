
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { addEnquiry } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: '₹50k - ₹1L',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addEnquiry({
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      message: formData.message,
      date: new Date().toLocaleDateString(),
      status: 'New'
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface px-4">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-charcoal mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">
            We have received your enquiry. One of our digital experts will call you within 24 hours to discuss your project.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="text-primary font-bold hover:underline">
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal mb-6">
              Let's Grow Your <br/> <span className="text-primary">Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Fill out the form to get a free consultation and custom quote for your project.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                'Free SEO Audit of your current site',
                'Custom strategy roadmap',
                'Transparent pricing, no hidden fees',
                '100% Confidential'
              ].map((item, i) => (
                <div key={i} className="flex items-center text-gray-700">
                  <CheckCircle className="text-primary w-6 h-6 mr-4" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <ShieldCheck className="w-5 h-5 mr-2 text-gray-400" />
              Your data is secure with us.
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Project Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="+91 98765..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="john@gmail.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                    <option>Web Development</option>
                    <option>SEO Services</option>
                    <option>Google My Business</option>
                    <option>WhatsApp API</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Budget (Optional)</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                    <option>₹20k - ₹50k</option>
                    <option>₹50k - ₹1L</option>
                    <option>₹1L - ₹5L</option>
                    <option>₹5L+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Briefly describe your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center shadow-lg shadow-primary/20">
                Submit Request <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Enquiry;
