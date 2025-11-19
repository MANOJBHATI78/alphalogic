
import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Phone, User, Briefcase } from 'lucide-react';
import { useData } from '../context/DataContext';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const { addEnquiry } = useData();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Web Development'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addEnquiry({
      id: Date.now(),
      name: formData.name,
      email: 'Not Provided', // Simplified form doesn't ask for email to keep it quick
      phone: formData.phone,
      service: formData.service,
      budget: 'Not Specified',
      message: 'Quick Enquiry from Popup',
      date: new Date().toLocaleDateString(),
      status: 'New'
    });

    setIsSubmitted(true);
    
    // Reset after 3 seconds and close
    setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', service: 'Web Development' });
        onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden animate-fade-in-up z-[101]">
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500 transition-colors z-10"
        >
            <X size={20} />
        </button>

        {isSubmitted ? (
            <div className="p-12 text-center flex flex-col items-center justify-center h-80">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">Request Sent!</h3>
                <p className="text-gray-500">We will call you shortly on {formData.phone}.</p>
            </div>
        ) : (
            <div className="flex flex-col md:flex-row">
                <div className="p-8 w-full">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Get Started</span>
                        <h3 className="text-3xl font-display font-bold text-dark">Quick Enquiry</h3>
                        <p className="text-sm text-gray-500 mt-2">Fill this out and we'll call you back instantly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative group">
                            <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                            <input 
                                type="text" 
                                required
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
                            />
                        </div>
                        
                        <div className="relative group">
                            <Phone className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                            <input 
                                type="tel" 
                                required
                                placeholder="Mobile Number"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
                            />
                        </div>

                        <div className="relative group">
                            <Briefcase className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                            <select 
                                value={formData.service}
                                onChange={e => setFormData({...formData, service: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium appearance-none cursor-pointer"
                            >
                                <option>Web Development</option>
                                <option>SEO Services</option>
                                <option>Google My Business</option>
                                <option>WhatsApp API</option>
                                <option>Other</option>
                            </select>
                            <div className="absolute right-4 top-4 w-2 h-2 border-r-2 border-b-2 border-gray-400 rotate-45 pointer-events-none"></div>
                        </div>

                        <button type="submit" className="w-full bg-dark text-white font-bold py-4 rounded-xl hover:bg-primary hover:text-dark transition-all shadow-lg mt-4 flex items-center justify-center group">
                            Submit Request <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
