
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, BarChart, MessageSquare, Star, Monitor, Code, Smartphone, Zap, Layers, Search, Users, Briefcase, Map, ChevronRight, Cpu, Box, Activity, Terminal } from 'lucide-react';
import { useData } from '../context/DataContext';
import AiAssistant from '../components/AiAssistant';

const Home = () => {
  const { blogs, projects, services, stats, clients } = useData();

  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. Hero Banner */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark text-white text-xs font-bold mb-8 animate-fade-in-up border border-dark/10 shadow-xl">
                 <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                 Accepting New Projects for 2025
               </div>
               <h1 className="text-6xl lg:text-8xl font-display font-bold text-dark mb-8 leading-[0.9] tracking-tight animate-fade-in-up">
                 DIGITAL <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-700">IMPACT.</span>
               </h1>
               <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-100 font-light">
                 We engineer high-performance websites, dominate Google rankings, and automate business communication.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
                 <Link to="/enquiry" className="px-8 py-4 bg-primary text-dark rounded-full font-bold shadow-[0_10px_40px_-10px_rgba(0,214,85,0.5)] hover:bg-dark hover:text-white hover:shadow-dark/30 transition-all text-lg flex items-center justify-center group">
                   Start Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                 </Link>
                 <Link to="/work" className="px-8 py-4 bg-white text-dark border border-gray-200 rounded-full font-bold hover:border-dark transition-all text-lg flex items-center justify-center">
                   View Portfolio
                 </Link>
               </div>
            </div>
            
            <div className="lg:w-1/2 relative animate-fade-in-up delay-300">
               <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-dark text-white p-6 rounded-3xl shadow-2xl transform translate-y-8 hover:-translate-y-2 transition-transform duration-500">
                    <Code className="w-8 h-8 text-primary mb-4" />
                    <div className="text-4xl font-bold font-display mb-1">100%</div>
                    <div className="text-sm text-gray-400">Custom Code</div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
                    <BarChart className="w-8 h-8 text-primary mb-4" />
                    <div className="text-4xl font-bold font-display text-dark mb-1">#1</div>
                    <div className="text-sm text-gray-500">Google Rankings</div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 col-span-2 flex items-center justify-between hover:-translate-y-2 transition-transform duration-500">
                    <div>
                      <div className="text-2xl font-bold text-dark">WhatsApp API</div>
                      <div className="text-sm text-gray-500">Automation Expert</div>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <MessageSquare size={24}/>
                    </div>
                  </div>
               </div>
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tech Stack Marquee (Visible Fix) */}
      <section className="py-10 bg-dark overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 mx-8">
               {['REACT JS', 'NEXT.JS', 'WORDPRESS', 'SHOPIFY', 'GOOGLE ADS', 'META ADS', 'WHATSAPP API', 'NODE.JS', 'TAILWIND CSS'].map((tech) => (
                 <span key={tech} className="text-4xl font-display font-bold text-white/90 uppercase opacity-100 hover:text-primary transition-colors cursor-default">
                   {tech}
                 </span>
               ))}
            </div>
          ))}
        </div>
      </section>

      {/* REDESIGN: The Service Matrix (Core Services) */}
      <section className="py-32 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div>
                      <h2 className="text-6xl font-display font-bold text-dark tracking-tight">
                          The Service <span className="text-primary">Matrix.</span>
                      </h2>
                      <p className="text-gray-500 mt-4 max-w-lg text-lg">
                          We deploy high-impact modules to upgrade your business infrastructure. Select a protocol.
                      </p>
                  </div>
                  <Link to="/services" className="hidden md:flex px-6 py-3 rounded-full border border-dark/20 font-bold hover:bg-dark hover:text-white transition-colors items-center">
                      Explore All <ArrowRight className="ml-2 w-4 h-4"/>
                  </Link>
              </div>

              {/* BENTO GRID LAYOUT */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Item 1: Large Card (Web Dev) */}
                  <div className="md:col-span-2 group relative bg-white rounded-[2.5rem] p-10 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-16 -mt-16 transition-all group-hover:bg-primary/20"></div>
                      <div className="relative z-10 flex flex-col h-full justify-between">
                          <div className="flex justify-between items-start mb-8">
                              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-dark group-hover:bg-dark group-hover:text-primary transition-colors">
                                  <Monitor size={32} strokeWidth={1.5} />
                              </div>
                              <span className="text-xs font-bold border border-gray-200 px-3 py-1 rounded-full bg-white group-hover:border-primary transition-colors">CORE ENGINE</span>
                          </div>
                          
                          <div>
                              <h3 className="text-4xl font-display font-bold mb-4 text-dark">Web Architecture</h3>
                              <p className="text-gray-500 text-lg mb-8 max-w-md group-hover:text-gray-700">
                                  Custom-coded React & Next.js ecosystems. We don't just build pages; we build high-speed digital assets.
                              </p>
                              <div className="flex gap-3 flex-wrap">
                                  {['React JS', 'E-Commerce', '3D Web', 'Portals'].map(tag => (
                                      <span key={tag} className="px-4 py-2 rounded-lg bg-gray-50 text-sm font-bold text-gray-600 border border-gray-100 group-hover:border-dark/20 transition-colors">{tag}</span>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Item 2: Tall Card (SEO) */}
                  <div className="md:row-span-2 group relative bg-dark text-white rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-8 backdrop-blur-sm">
                              <Search size={32} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-4xl font-display font-bold mb-4">SEO <br/>Dominance</h3>
                          <p className="text-gray-400 text-lg leading-relaxed mb-8">
                              We reverse-engineer Google's algorithm to put your brand on Page 1. No guessing, just data.
                          </p>
                      </div>
                      
                      <div className="relative z-10 space-y-4 border-t border-white/10 pt-8">
                          <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-gray-300">Keyword Strategy</span>
                              <CheckCircle className="text-primary w-4 h-4"/>
                          </div>
                          <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-gray-300">Technical Audit</span>
                              <CheckCircle className="text-primary w-4 h-4"/>
                          </div>
                          <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-gray-300">Backlink Network</span>
                              <CheckCircle className="text-primary w-4 h-4"/>
                          </div>
                      </div>
                  </div>

                  {/* Item 3: Standard Card (WhatsApp) */}
                  <div className="group bg-white rounded-[2.5rem] p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-green-500/30">
                      <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                          <MessageSquare size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">WhatsApp API</h3>
                      <p className="text-gray-500 text-sm mb-6">Automate sales & support with intelligent chatbots.</p>
                      <Link to="/services/whatsapp" className="inline-flex items-center text-sm font-bold text-green-600 hover:text-green-700">
                          Configure Bot <ArrowRight className="ml-1 w-4 h-4"/>
                      </Link>
                  </div>

                  {/* Item 4: Standard Card (GMB) */}
                  <div className="group bg-white rounded-[2.5rem] p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500/30">
                      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                          <Map size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Local Maps</h3>
                      <p className="text-gray-500 text-sm mb-6">Capture local traffic by ranking top on Google Maps.</p>
                      <Link to="/services/gmb" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
                          Optimize Profile <ArrowRight className="ml-1 w-4 h-4"/>
                      </Link>
                  </div>

              </div>
          </div>
      </section>

      {/* REDESIGN: The Growth Algorithm (Strategic Process) */}
      <section className="py-32 bg-dark text-white relative overflow-hidden">
         {/* Tech Grid BG */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]"></div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">
             <div className="text-center mb-24">
                 <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block animate-pulse">System Protocol v2.0</span>
                 <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">The Growth <br/>Algorithm.</h2>
                 <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                     We don't rely on luck. We follow a precise, calculated sequence of operations to scale your revenue.
                 </p>
             </div>

             <div className="relative">
                 {/* Connecting Line (Desktop) */}
                 <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-[shimmer_3s_infinite]"></div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                     {[
                        { 
                            step: '01', 
                            icon: Terminal, 
                            title: 'Diagnostic', 
                            desc: 'Deep-dive audit of your current digital infrastructure and competitor gaps.',
                            color: 'border-blue-500'
                        },
                        { 
                            step: '02', 
                            icon: Box, 
                            title: 'Fabrication', 
                            desc: 'Engineering the assets: High-speed website, automation flows, and content.',
                            color: 'border-primary'
                        },
                        { 
                            step: '03', 
                            icon: Zap, 
                            title: 'Injection', 
                            desc: 'Pumping qualified traffic through SEO, Paid Ads, and Social channels.',
                            color: 'border-yellow-500'
                        },
                        { 
                            step: '04', 
                            icon: Activity, 
                            title: 'Optimization', 
                            desc: 'Reviewing analytics data to kill waste and double-down on profit.',
                            color: 'border-purple-500'
                        }
                     ].map((item, idx) => (
                        <div key={idx} className="relative group">
                            {/* Node Point */}
                            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-dark border-4 border-gray-800 rounded-full items-center justify-center z-10 group-hover:border-primary transition-colors duration-500">
                                <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#00D655]"></div>
                            </div>

                            {/* Card */}
                            <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2 border-t-4 ${item.color} h-full flex flex-col`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-4xl font-mono font-bold text-white/20 group-hover:text-white/40 transition-colors">{item.step}</div>
                                    <item.icon className="text-white opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                     ))}
                 </div>
             </div>
         </div>
      </section>

      {/* REDESIGN: The Digital Flywheel (Digital Ecosystem) - KEPT SAME AS REQUESTED */}
      <section className="py-32 bg-surface overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                      <h2 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6">The Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Flywheel.</span></h2>
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                          We don't do random acts of marketing. We build a self-reinforcing ecosystem where every component amplifies the others.
                      </p>
                      <ul className="space-y-6">
                          {[
                              { title: "Centralized Data", desc: "All leads flow into one CRM." },
                              { title: "Omnichannel Presence", desc: "Be everywhere your customer is." },
                              { title: "Automated Nurturing", desc: "Turn cold traffic into warm leads automatically." }
                          ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary mt-1 shrink-0">
                                      <Zap size={16} fill="currentColor"/>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="font-bold text-dark text-lg">{item.title}</h4>
                                      <p className="text-gray-500 text-sm">{item.desc}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* The Visual Flywheel */}
                  <div className="relative h-[500px] flex items-center justify-center">
                      {/* Central Hub */}
                      <div className="w-40 h-40 bg-dark rounded-full flex items-center justify-center z-20 shadow-2xl border-4 border-white relative">
                          <div className="text-center">
                              <div className="text-2xl font-bold text-white font-display">YOUR</div>
                              <div className="text-primary font-bold">BRAND</div>
                          </div>
                      </div>

                      {/* Orbiting Elements */}
                      <div className="absolute w-[450px] h-[450px] border border-dashed border-gray-300 rounded-full animate-[spin_20s_linear_infinite] z-10">
                          {/* Planet 1 */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 w-48 animate-[spin_20s_linear_infinite_reverse]">
                              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Globe size={20}/></div>
                              <div className="font-bold text-sm text-dark">Website & App</div>
                          </div>
                          {/* Planet 2 */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 w-48 animate-[spin_20s_linear_infinite_reverse]">
                              <div className="bg-green-100 p-2 rounded-lg text-green-600"><MessageSquare size={20}/></div>
                              <div className="font-bold text-sm text-dark">WhatsApp Auto</div>
                          </div>
                          {/* Planet 3 */}
                          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 w-48 animate-[spin_20s_linear_infinite_reverse]">
                              <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Search size={20}/></div>
                              <div className="font-bold text-sm text-dark">SEO & GMB</div>
                          </div>
                          {/* Planet 4 */}
                          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 w-48 animate-[spin_20s_linear_infinite_reverse]">
                              <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><BarChart size={20}/></div>
                              <div className="font-bold text-sm text-dark">Ads & Analytics</div>
                          </div>
                      </div>

                      {/* Inner Glow */}
                      <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[60px]"></div>
                  </div>
              </div>
          </div>
      </section>

      {/* LIVE IMPACT (Creative Stats) */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="md:w-1/2">
                  <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">Real Numbers. <br/><span className="text-primary">Real Growth.</span></h2>
                  <p className="text-gray-400 text-lg mb-8">
                     We track every pixel. Our clients see tangible results within 90 days of onboarding. We don't believe in vanity metrics, only revenue.
                  </p>
                  <Link to="/work" className="px-8 py-4 border border-white rounded-full font-bold hover:bg-white hover:text-dark transition-colors inline-flex items-center">
                     View Case Studies <ArrowRight className="ml-2 w-4 h-4"/>
                  </Link>
               </div>
               <div className="md:w-1/2 w-full">
                  <div className="grid grid-cols-2 gap-4">
                     {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/5 hover:bg-white/20 transition-colors group">
                           <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-display group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                           <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                           <div className="text-xs text-gray-400">{stat.description}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Featured Work (Dynamic) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">Featured Projects</h2>
            <Link to="/work" className="text-dark font-bold border-b-2 border-primary hover:text-primary transition-colors">View All Work</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <Link to={`/work/${project.id}`} key={project.id} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[16/10] border border-gray-100 shadow-lg">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
                    {project.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trusted Clients Marquee (Dynamic) */}
      <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
         <div className="text-center mb-10">
           <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Trusted By Industry Leaders</span>
         </div>
         <div className="flex gap-12 animate-[scroll_30s_linear_infinite] items-center">
            {[...clients, ...clients].map((client, i) => (
               <div key={i} className="shrink-0 opacity-50 hover:opacity-100 transition-opacity font-display font-bold text-2xl text-gray-400 hover:text-dark">
                  {client.name}
               </div>
            ))}
         </div>
      </section>

      {/* 7. CTA */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-dark to-dark"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center text-dark mb-8 shadow-[0_0_40px_rgba(0,214,85,0.6)] animate-pulse">
             <Zap size={40} fill="currentColor" />
           </div>
           <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
             Stop Competing.<br/>Start Dominating.
           </h2>
           <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
             Your competitors are already investing in digital. Don't get left behind. Let's build a custom roadmap for your business today.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/enquiry" className="bg-white text-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-primary transition-colors">
               Book Free Strategy Call
             </Link>
             <a href="https://wa.me/919876543210" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
               <MessageSquare className="w-5 h-5 mr-2"/> WhatsApp
             </a>
           </div>
        </div>
      </section>
      
      <AiAssistant />
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Home;
