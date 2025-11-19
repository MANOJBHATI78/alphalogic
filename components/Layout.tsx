
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Instagram, Linkedin, Twitter, Facebook, ArrowUpRight, MessageCircle, PhoneCall } from 'lucide-react';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_PHONE } from '../constants';
import EnquiryModal from './EnquiryModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services/web' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-6 left-0 right-0 z-50 px-4 transition-all duration-500 ${scrolled ? '-top-2' : 'top-6'}`}>
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300 backdrop-blur-xl border ${scrolled ? 'bg-white/90 shadow-xl border-gray-200 mt-6' : 'bg-dark/90 shadow-2xl border-white/10'}`}>
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold font-display text-lg transition-colors ${scrolled ? 'bg-dark text-primary' : 'bg-primary text-dark'}`}>A</div>
               <span className={`text-xl font-display font-bold tracking-tight ${scrolled ? 'text-dark' : 'text-white'}`}>
                 Alpha<span className="text-primary">logic</span>
               </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${scrolled ? 'text-gray-600 hover:text-dark' : 'text-gray-300 hover:text-white'}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className={`absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center`}></span>
                </Link>
              ))}
            </div>

            {/* CTA & Mobile */}
            <div className="flex items-center gap-4">
               <Link
                to="/enquiry"
                className={`hidden sm:flex px-6 py-2 rounded-full font-bold text-sm items-center transition-all hover:scale-105 ${scrolled ? 'bg-dark text-white hover:bg-primary hover:text-dark' : 'bg-white text-dark hover:bg-primary'}`}
              >
                Let's Talk
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark z-40 transition-transform duration-500 lg:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full justify-center px-8 relative">
           <img src="https://www.transparenttextures.com/patterns/cubes.png" className="absolute inset-0 opacity-5 pointer-events-none" alt="bg" />
           {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`text-5xl font-display font-bold text-white/50 hover:text-primary py-3 transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              <Link to="/enquiry" className="bg-primary text-dark py-4 rounded-xl font-bold text-center text-lg">
                Start Project
              </Link>
              <Link to="/services" className="bg-white/10 text-white py-4 rounded-xl font-bold text-center text-lg border border-white/5">
                Our Services
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white relative overflow-hidden pt-24 pb-12">
      {/* Background Details */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 text-white">
              LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">BUILD</span><br/>THE FUTURE.
            </h2>
            <p className="text-gray-400 text-lg max-w-md mb-8">
              We help ambitious brands in Surat scale through strategy, design, and technology.
            </p>
            <Link to="/enquiry" className="inline-flex items-center px-8 py-4 bg-primary text-dark rounded-full font-bold text-lg hover:scale-105 transition-transform group">
              Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:pl-20 pt-4">
            <div>
              <h3 className="text-primary font-bold mb-6 uppercase tracking-wider text-sm">Menu</h3>
              <ul className="space-y-3">
                <li><Link to="/work" className="text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
                <li><Link to="/services/web" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/admin" className="text-gray-400 hover:text-white transition-colors text-xs">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-primary font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">{COMPANY_PHONE}</li>
                <li className="text-gray-400">{COMPANY_EMAIL}</li>
                <li className="text-gray-400">{COMPANY_LOCATION}</li>
              </ul>
              <div className="flex gap-4 mt-6">
                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alphalogic. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark bg-white selection:bg-primary selection:text-dark">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Global Enquiry Popup */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      {/* Floating Action Buttons (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        {/* Enquiry Trigger */}
        <button 
          onClick={() => setIsEnquiryOpen(true)}
          className="bg-dark text-white p-4 rounded-full shadow-lg shadow-dark/30 hover:bg-primary hover:text-dark hover:scale-110 transition-all group flex items-center gap-0 hover:gap-2 overflow-hidden"
        >
           <PhoneCall size={24} fill="currentColor" />
           <span className="max-w-0 group-hover:max-w-[100px] transition-all duration-300 overflow-hidden font-bold whitespace-nowrap">Get Quote</span>
        </button>

        {/* WhatsApp Trigger */}
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 transition-all flex items-center justify-center"
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
      </div>

    </div>
  );
};

export default Layout;
