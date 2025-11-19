import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Globe, BarChart, MapPin, MessageCircle, Check, ArrowRight, Code, Search, Zap, Layout, Shield, Smartphone, HelpCircle, Star } from 'lucide-react';
import { SEO_PLANS, GMB_PLANS } from '../constants';

const Services = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  
  const activeTab = type || 'web';

  const tabs = [
    { id: 'web', label: 'Web Development', icon: Globe, tagline: 'Digital Experiences' },
    { id: 'seo', label: 'SEO Services', icon: BarChart, tagline: 'Rank Higher' },
    { id: 'gmb', label: 'Google My Business', icon: MapPin, tagline: 'Local Dominance' },
    { id: 'whatsapp', label: 'WhatsApp API', icon: MessageCircle, tagline: 'Automate Sales' },
  ];

  const renderFAQs = (questions: {q: string, a: string}[]) => (
    <div className="mt-20 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {questions.map((faq, i) => (
          <div key={i} className="bg-surface p-6 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-dark mb-2 flex items-start"><HelpCircle className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5"/> {faq.q}</h4>
            <p className="text-gray-600 text-sm ml-8">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Hero */}
      <div className="bg-dark text-white pt-32 pb-20 relative overflow-hidden rounded-b-[3rem]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up">
            {tabs.find(t => t.id === activeTab)?.label}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
             We specialize in delivering results-driven strategies for {tabs.find(t => t.id === activeTab)?.tagline}.
          </p>
          
          {/* Sub Navigation */}
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigate(`/services/${tab.id}`)}
                className={`px-6 py-3 rounded-full text-sm font-bold flex items-center transition-all ${activeTab === tab.id ? 'bg-primary text-dark shadow-[0_0_20px_rgba(0,214,85,0.4)]' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        
        {/* WEB DEVELOPMENT CONTENT */}
        {activeTab === 'web' && (
          <div className="animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              <div>
                 <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Custom Development</div>
                 <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-dark">High-Performance <br/> Websites that Sell.</h2>
                 <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                   In 2025, a website isn't just an online brochure; it's your primary sales channel. We build websites that are blazingly fast, secure, and optimized for conversions. Whether it's a complex B2B portal or a stunning portfolio, we code with precision.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-6 mb-10">
                    {[
                      { icon: Zap, title: 'Core Web Vitals', text: '90+ Speed Score' },
                      { icon: Shield, title: 'Secure', text: 'SSL & Anti-Spam' },
                      { icon: Smartphone, title: 'Responsive', text: 'Mobile First UI' },
                      { icon: Code, title: 'Clean Code', text: 'React / Next.js' },
                    ].map((f, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center mr-4 text-primary shrink-0">
                          <f.icon size={20}/>
                        </div>
                        <div>
                          <h4 className="font-bold text-dark">{f.title}</h4>
                          <p className="text-xs text-gray-500">{f.text}</p>
                        </div>
                      </div>
                    ))}
                 </div>
                 <Link to="/enquiry" className="btn-primary inline-flex">Get a Free Quote</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-dark rounded-3xl rotate-3 transform"></div>
                <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80" className="relative rounded-3xl shadow-2xl border-4 border-white" alt="Coding" />
              </div>
            </div>
            
            {/* Offerings Grid */}
            <h3 className="text-3xl font-bold text-center mb-12">Development Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
               {[
                 { title: 'Corporate Website', price: '₹35,000+', desc: 'Ideal for businesses needing a strong brand presence.', features: ['Up to 10 Pages', 'CMS Integration', 'Contact Forms', 'Basic SEO'] },
                 { title: 'E-Commerce Store', price: '₹60,000+', desc: 'Full-featured store with payments & inventory.', features: ['Shopify / Woo', 'Payment Gateway', 'Product Upload', 'Sales Dashboard'] },
                 { title: 'Custom Web App', price: 'Custom', desc: 'Complex functionality for startups & enterprises.', features: ['React / Node.js', 'Database Design', 'API Integration', 'User Auth'] },
               ].map((plan, i) => (
                 <div key={i} className="bg-white p-8 border border-gray-200 rounded-3xl hover:border-primary hover:shadow-xl transition-all group">
                   <h3 className="font-bold text-xl mb-2 text-dark">{plan.title}</h3>
                   <div className="text-3xl font-bold text-primary mb-4">{plan.price}</div>
                   <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
                   <ul className="space-y-3 mb-8">
                     {plan.features.map(f => (
                       <li key={f} className="flex items-center text-sm text-gray-700">
                         <Check className="w-4 h-4 mr-2 text-green-500"/> {f}
                       </li>
                     ))}
                   </ul>
                   <Link to="/enquiry" className="block w-full py-3 text-center border border-dark rounded-xl font-bold hover:bg-dark hover:text-white transition-colors">Select Plan</Link>
                 </div>
               ))}
            </div>

            {renderFAQs([
              { q: "How long does it take to build a website?", a: "A standard business website takes 2-3 weeks. Custom e-commerce solutions can take 4-6 weeks depending on complexity." },
              { q: "Will my website be mobile friendly?", a: "Absolutely. We follow a mobile-first approach ensuring your site looks perfect on phones, tablets, and desktops." },
              { q: "Do you provide hosting?", a: "Yes, we can set up high-speed cloud hosting for you, or we can deploy to your preferred provider." }
            ])}
          </div>
        )}

        {/* SEO CONTENT */}
        {activeTab === 'seo' && (
          <div className="animate-fade-in-up">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-4xl font-display font-bold mb-4">Dominate Google Search</h2>
               <p className="text-gray-600 text-lg">
                 SEO isn't magic; it's a science. We use proven strategies to increase your organic traffic and bring you high-intent leads.
               </p>
             </div>

             {/* Process Steps */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                {[
                  { step: '01', title: 'Audit', desc: 'Deep dive into technical errors & competitors.' },
                  { step: '02', title: 'Keywords', desc: 'Finding high-volume, low-competition terms.' },
                  { step: '03', title: 'Optimize', desc: 'Fixing content, meta tags, and speed.' },
                  { step: '04', title: 'Authority', desc: 'Building high-quality backlinks.' }
                ].map((s, i) => (
                  <div key={i} className="bg-surface p-6 rounded-2xl border border-gray-100 text-center">
                    <div className="w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{s.step}</div>
                    <h4 className="font-bold mb-2">{s.title}</h4>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                ))}
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {SEO_PLANS.map((plan, idx) => (
                 <div key={idx} className={`p-8 rounded-3xl border transition-all duration-300 relative ${plan.highlight ? 'bg-dark text-white border-dark scale-105 shadow-2xl z-10' : 'bg-white border-gray-200 hover:border-primary hover:shadow-lg'}`}>
                   {plan.highlight && <div className="absolute top-0 left-0 w-full bg-primary text-dark text-center text-xs font-bold py-1 uppercase tracking-widest rounded-t-3xl">Recommended</div>}
                   <h3 className="text-2xl font-bold mb-2 mt-4">{plan.name}</h3>
                   <p className="text-sm opacity-70 mb-4">{plan.description}</p>
                   <div className={`text-4xl font-bold mb-6 ${plan.highlight ? 'text-primary' : 'text-dark'}`}>{plan.price}</div>
                   <ul className="space-y-4 mb-8">
                     {plan.features.map((feat, fIdx) => (
                       <li key={fIdx} className="flex items-start text-sm opacity-90">
                         <Check className={`w-4 h-4 mr-3 shrink-0 ${plan.highlight ? 'text-primary' : 'text-green-600'}`} />
                         {feat}
                       </li>
                     ))}
                   </ul>
                   <Link to="/enquiry" className={`block text-center py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-primary text-dark hover:bg-white' : 'bg-gray-100 text-dark hover:bg-dark hover:text-white'}`}>
                     Start Ranking
                   </Link>
                 </div>
               ))}
             </div>

             {renderFAQs([
              { q: "How long does SEO take to show results?", a: "SEO is a long-term game. Typically, you see initial movements in 3 months and significant traffic growth by month 6." },
              { q: "Do you guarantee #1 ranking?", a: "No ethical agency guarantees #1 because Google's algorithm changes constantly. We guarantee best practices and consistent growth." }
            ])}
          </div>
        )}

        {/* GMB CONTENT */}
        {activeTab === 'gmb' && (
          <div className="animate-fade-in-up">
            <div className="bg-surface rounded-[3rem] p-8 md:p-16 mb-16 border border-gray-200">
               <div className="flex flex-col md:flex-row items-center gap-12">
                 <div className="flex-1">
                   <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">Local SEO Expert</div>
                   <h2 className="text-4xl font-display font-bold mb-4 text-dark">Rank #1 on Google Maps</h2>
                   <p className="text-gray-600 mb-8 text-lg">
                     For local businesses in Surat (Retail, Doctors, Showrooms), the "Map Pack" is the most valuable real estate on Google. We optimize your profile to ensure you show up when customers search "near me".
                   </p>
                   <div className="grid grid-cols-2 gap-6">
                     {GMB_PLANS.map((plan, i) => (
                       <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors">
                         <h4 className="font-bold text-lg mb-1">{plan.name}</h4>
                         <div className="text-primary font-bold text-xl mb-4">{plan.price}</div>
                         <ul className="text-sm text-gray-500 space-y-2">
                           {plan.features.slice(0,4).map(f => <li key={f} className="flex items-center"><Check size={12} className="mr-2 text-green-500"/> {f}</li>)}
                         </ul>
                       </div>
                     ))}
                   </div>
                 </div>
                 <div className="flex-1 w-full">
                    <div className="relative bg-white p-4 rounded-2xl shadow-2xl rotate-2">
                        {/* Mock GMB Profile */}
                        <div className="flex items-start space-x-4 mb-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            <div>
                                <div className="h-4 w-40 bg-dark rounded mb-2"></div>
                                <div className="flex space-x-1 text-yellow-400">
                                    <Star size={16} fill="currentColor"/>
                                    <Star size={16} fill="currentColor"/>
                                    <Star size={16} fill="currentColor"/>
                                    <Star size={16} fill="currentColor"/>
                                    <Star size={16} fill="currentColor"/>
                                    <span className="text-gray-400 text-xs ml-2">(142 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                             <div className="h-3 w-full bg-gray-100 rounded"></div>
                             <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <div className="flex-1 h-10 bg-primary/20 text-primary flex items-center justify-center rounded-lg font-bold text-xs">Call</div>
                            <div className="flex-1 h-10 bg-gray-100 flex items-center justify-center rounded-lg font-bold text-xs">Directions</div>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
             {renderFAQs([
              { q: "How do you remove bad reviews?", a: "We cannot delete legitimate reviews, but we can flag spam/fake reviews for Google to remove and help you generate positive ones to bury the negatives." },
              { q: "Why is my business not showing up?", a: "It could be due to address verification issues, lack of citations, or poor profile optimization. We fix all of this." }
            ])}
          </div>
        )}

        {/* WHATSAPP CONTENT */}
        {activeTab === 'whatsapp' && (
          <div className="animate-fade-in-up">
             <div className="max-w-5xl mx-auto">
               <h2 className="text-4xl font-display font-bold text-center mb-6">Automate Your Business with WhatsApp API</h2>
               <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
                 Stop manually replying to hundreds of messages. Use the Official WhatsApp Business API to scale your customer support and sales.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                 <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                   <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                     <MessageCircle size={24}/>
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-dark">Chatbots</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     Automatically answer FAQs, book appointments, and qualify leads 24/7.
                   </p>
                 </div>
                 <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                   <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                     <Zap size={24}/>
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-dark">Broadcasts</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     Send offers and updates to thousands of customers instantly without getting blocked.
                   </p>
                 </div>
                 <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                   <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                     <Layout size={24}/>
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-dark">Green Tick</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     We assist in verifying your Facebook Business Manager to get the Official Green Tick.
                   </p>
                 </div>
               </div>

               <div className="bg-dark text-white p-12 rounded-3xl text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                 <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4">Pricing Starts at ₹999/month</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Includes platform access, 1000 free conversations, and chatbot builder.</p>
                    <Link to="/enquiry" className="px-10 py-4 bg-primary text-dark rounded-full font-bold hover:bg-white transition-colors shadow-lg shadow-primary/20">Get WhatsApp API</Link>
                 </div>
               </div>

               {renderFAQs([
                  { q: "Is this different from the WhatsApp App?", a: "Yes. This is the API version designed for medium-large businesses. It allows multiple agents, automation, and bulk messaging." },
                  { q: "Can I use my existing number?", a: "Yes, but you must delete the WhatsApp App account associated with it to upgrade it to the API." }
               ])}
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Services;