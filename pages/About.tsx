
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cpu, Zap, Globe, Briefcase, Target, ArrowRight, Linkedin, Twitter, Mail, Layers, Heart, Star, Coffee } from 'lucide-react';
import { useData } from '../context/DataContext';

const About = () => {
  const { stats } = useData();

  return (
    <div className="bg-white text-dark selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      
      {/* 1. Hero - The Visionary (Light Theme) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
         {/* Background effects */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-block mb-6 animate-fade-in-up">
               <span className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-primary text-xs font-bold tracking-[0.2em] uppercase shadow-sm">
                  The Architect
               </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-bold leading-none mb-8 tracking-tighter animate-fade-in-up delay-100 text-dark">
               MANOJ<br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-dark to-gray-400">MODI.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-12 animate-fade-in-up delay-200">
               I don't just write code. I build <span className="text-dark font-bold border-b-2 border-primary/30">digital revenue engines</span>. 
               The solo force behind Alphalogic's technical dominance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-300">
               <a href="#story" className="px-8 py-4 bg-dark text-white font-bold rounded-full hover:bg-primary hover:text-dark hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                  Read My Story
               </a>
               <Link to="/contact" className="px-8 py-4 border border-gray-300 text-dark font-bold rounded-full hover:bg-gray-50 transition-colors">
                  Work With Me
               </Link>
            </div>
         </div>
      </section>

      {/* 2. The Stats - Dynamic Data (Light Theme) */}
      <section className="py-20 border-y border-gray-100 bg-surface">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {stats.map((stat) => (
                  <div key={stat.id} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                     <div className="text-4xl md:text-5xl font-display font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                        {stat.value}
                     </div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</div>
                     <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{stat.description}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. The Story - Split Layout with Sticky Image (Light Theme) */}
      <section id="story" className="py-32 bg-white relative">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20">
               
               {/* Sticky Image Column */}
               <div className="lg:w-5/12 relative">
                  <div className="sticky top-32">
                     <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-gray-200 group">
                        <img 
                           src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                           alt="Manoj Modi" 
                           className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent p-8">
                           <div className="text-dark font-bold text-2xl tracking-wide">Manoj Modi</div>
                           <div className="text-primary font-bold text-sm uppercase tracking-wider">Founder & Lead Developer</div>
                        </div>
                     </div>
                     
                     {/* Social Links */}
                     <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                        {[Linkedin, Twitter, Mail].map((Icon, i) => (
                           <a key={i} href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-dark hover:text-white hover:border-dark transition-all duration-300">
                              <Icon size={20} />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Content Column */}
               <div className="lg:w-7/12 space-y-20 pt-10">
                  <div>
                     <h2 className="text-5xl font-display font-bold mb-8 leading-tight text-dark">The One Man Army <br/> Approach.</h2>
                     <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Most agencies are bloated. Account managers, sales reps, junior devs—layers of inefficiency between you and the result. 
                        <br/><br/>
                        <span className="text-dark font-bold bg-primary/10 px-1">I built Alphalogic differently.</span>
                        <br/><br/>
                        When you work with Alphalogic, you work with me. I am the strategist, the architect, and the developer. This means zero communication gaps, faster execution, and code that is written to scale, not just to sell.
                     </p>
                  </div>

                  {/* Philosophy Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-dark group-hover:bg-primary group-hover:text-white transition-colors">
                           <Cpu className="w-6 h-6"/>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-dark">Engineering First</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Marketing fluff doesn't last. Robust code, clean architecture, and technical SEO foundations do.</p>
                     </div>
                     <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-dark group-hover:bg-primary group-hover:text-white transition-colors">
                           <Zap className="w-6 h-6"/>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-dark">Speed is Capital</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">I optimize for milliseconds. Google loves fast sites, users love instant loads, and speed converts.</p>
                     </div>
                     <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-dark group-hover:bg-primary group-hover:text-white transition-colors">
                           <Target className="w-6 h-6"/>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-dark">Data Over Opinions</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">I don't guess. I audit, track, and iterate based on real analytics and user behavior patterns.</p>
                     </div>
                     <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-dark group-hover:bg-primary group-hover:text-white transition-colors">
                           <Globe className="w-6 h-6"/>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-dark">Global Standards</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Bringing Silicon Valley grade development practices to businesses right here in Surat.</p>
                     </div>
                  </div>

                  {/* Dynamic Timeline */}
                  <div className="pt-10">
                     <h3 className="text-3xl font-display font-bold mb-10 text-dark">The Journey</h3>
                     <div className="border-l-2 border-gray-200 pl-8 space-y-16 relative">
                        {[
                           { year: '2015', title: 'The Beginning', desc: 'Started as a freelance Full Stack Developer working with US startups on complex React applications.' },
                           { year: '2020', title: 'Alphalogic Born', desc: 'Realized local businesses in Surat needed better tech partners. Launched Alphalogic to bridge the gap.' },
                           { year: '2023', title: 'Expansion', desc: 'Expanded services to include Technical SEO and WhatsApp Automation, creating a full-stack growth engine.' },
                           { year: '2025', title: 'The Future', desc: 'Integrating AI agents into client workflows to automate support and sales.' },
                        ].map((item, i) => (
                           <div key={i} className="relative group">
                              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-gray-300 group-hover:border-primary transition-colors"></span>
                              <div className="text-gray-300 group-hover:text-primary font-bold font-display text-4xl mb-2 transition-colors">{item.year}</div>
                              <h4 className="text-dark font-bold text-xl mb-2">{item.title}</h4>
                              <p className="text-gray-600 text-base">{item.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* NEW CREATIVE SECTION: DNA & CULTURE (Bento Grid) */}
      <section className="py-32 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                 <h2 className="text-5xl font-display font-bold mb-4 text-dark">DNA & Culture</h2>
                 <p className="text-gray-500">What makes Alphalogic different from 100 other agencies in Surat.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
                 {/* Large Block */}
                 <div className="md:col-span-2 md:row-span-2 bg-dark rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                     <div className="relative z-10">
                         <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                             <Heart size={32} fill="currentColor" />
                         </div>
                         <h3 className="text-4xl font-bold mb-4">Client Obsession</h3>
                         <p className="text-gray-400 text-lg leading-relaxed">We don't have 50 clients. We have 5 partners at a time. This allows us to go deep, understand your business, and act as your internal CTO rather than an external vendor.</p>
                     </div>
                 </div>

                 {/* Wide Block */}
                 <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-center justify-between group hover:border-primary/50 transition-all">
                     <div>
                         <h3 className="text-2xl font-bold mb-2">24/7 Innovation</h3>
                         <p className="text-gray-500 text-sm">We are constantly learning new stacks like AI Agents & Web3.</p>
                     </div>
                     <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                         <Star className="text-yellow-500" size={32} fill="currentColor"/>
                     </div>
                 </div>

                 {/* Small Block 1 */}
                 <div className="bg-primary rounded-3xl p-8 text-dark flex flex-col justify-center items-center text-center hover:scale-105 transition-transform">
                     <Coffee size={40} className="mb-4"/>
                     <div className="font-bold text-xl">No Burnout</div>
                     <div className="text-xs opacity-80">Quality over Quantity</div>
                 </div>

                 {/* Small Block 2 */}
                 <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center group hover:shadow-lg transition-all">
                     <div className="text-5xl font-bold text-gray-200 mb-2 group-hover:text-dark transition-colors">100%</div>
                     <div className="font-bold text-lg">Transparency</div>
                     <div className="text-xs text-gray-500">No hidden fees. Ever.</div>
                 </div>
             </div>
         </div>
      </section>

      {/* 4. Visual Skills Banner (Light Theme) */}
      <section className="py-24 bg-white text-dark overflow-hidden border-y border-gray-100">
         <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
             {[...Array(10)].map((_, i) => (
                <div key={i} className="flex gap-16 mx-8">
                  {['REACT', 'TYPESCRIPT', 'NODE.JS', 'NEXT.JS', 'SEO STRATEGY', 'AWS', 'GRAPHQL'].map((skill, idx) => (
                     <div key={idx} className="font-display font-bold text-5xl uppercase flex items-center text-gray-300 hover:text-dark transition-colors cursor-default">
                        {skill} <span className="ml-16 w-3 h-3 bg-primary rounded-full"></span>
                     </div>
                  ))}
                </div>
             ))}
         </div>
      </section>

      {/* 5. CTA (Light Theme) */}
      <section className="py-32 bg-gray-50 text-center relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-gray-100 to-white opacity-50"></div>
         <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-none text-dark">
               Let's build your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-700">Empire.</span>
            </h2>
            <p className="text-gray-500 text-xl mb-12 font-light">
               No middle management. Direct access to me. Let's discuss your vision.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-dark text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-dark hover:scale-105 transition-all duration-300 shadow-2xl shadow-dark/10">
               Start Conversation <ArrowRight className="ml-2" />
            </Link>
         </div>
      </section>

      <style>{`
         @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
         }
      `}</style>
    </div>
  );
};

export default About;
