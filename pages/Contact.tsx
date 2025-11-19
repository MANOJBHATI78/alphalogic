import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_LOCATION, COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal mb-4">Get In Touch</h1>
           <p className="text-gray-600 text-lg">We'd love to hear about your project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           <div className="bg-surface p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100">
             <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
               <MapPin size={24}/>
             </div>
             <h3 className="font-bold text-charcoal mb-2">Visit Us</h3>
             <p className="text-gray-600 text-sm">{COMPANY_LOCATION}</p>
           </div>
           <div className="bg-surface p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100">
             <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
               <Phone size={24}/>
             </div>
             <h3 className="font-bold text-charcoal mb-2">Call Us</h3>
             <p className="text-gray-600 text-sm">{COMPANY_PHONE}</p>
             <p className="text-gray-500 text-xs mt-1">Mon-Sat, 9am - 7pm</p>
           </div>
           <div className="bg-surface p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100">
             <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
               <Mail size={24}/>
             </div>
             <h3 className="font-bold text-charcoal mb-2">Email Us</h3>
             <p className="text-gray-600 text-sm">{COMPANY_EMAIL}</p>
           </div>
        </div>

        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
           <div className="md:w-1/2 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Let's chat.</h2>
              <p className="mb-8 text-primary-100">
                Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 opacity-80"/>
                  <span>Response time: Under 24 hours</span>
                </div>
              </div>
           </div>
           <div className="md:w-1/2 bg-white p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition-colors">
                  Send Message
                </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;