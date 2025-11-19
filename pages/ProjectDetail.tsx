import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Check, Star } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === Number(id));

  if (!project) return <Navigate to="/work" />;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="h-[50vh] relative bg-dark">
        <img src={project.image} className="w-full h-full object-cover opacity-60" alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
           <div className="max-w-7xl mx-auto">
             <Link to="/work" className="inline-flex items-center text-white/70 hover:text-primary mb-6 transition-colors">
               <ArrowLeft className="mr-2 w-4 h-4" /> Back to Work
             </Link>
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">{project.title}</h1>
             <div className="flex items-center gap-4 text-white/80">
               <span className="px-4 py-1 border border-white/30 rounded-full text-sm">{project.category}</span>
               {project.result && <span className="text-primary font-bold flex items-center"><Star size={16} className="mr-2 fill-current"/> {project.result}</span>}
             </div>
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="col-span-2 space-y-8">
             <div>
               <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
               <p className="text-gray-600 leading-relaxed">
                 The client needed a complete overhaul of their digital presence. They were facing issues with low engagement, slow website speeds, and poor local visibility in Surat.
               </p>
             </div>
             <div>
               <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
               <p className="text-gray-600 leading-relaxed">
                 We implemented a full-stack solution including a custom React frontend for speed, optimized Google My Business profile, and a 3-month SEO content strategy.
               </p>
             </div>
             <div className="bg-surface p-6 rounded-2xl">
                <h4 className="font-bold mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind', 'Node.js', 'Google Analytics'].map(t => (
                    <span key={t} className="px-3 py-1 bg-white rounded border border-gray-200 text-xs font-bold text-gray-600">{t}</span>
                  ))}
                </div>
             </div>
           </div>
           
           <div className="col-span-1">
             <div className="bg-dark text-white p-8 rounded-2xl sticky top-24">
               <h3 className="font-bold text-xl mb-6 text-primary">Project Stats</h3>
               <ul className="space-y-4">
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span className="text-gray-400 text-sm">Timeline</span>
                   <span className="font-bold">4 Weeks</span>
                 </li>
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span className="text-gray-400 text-sm">Deliverables</span>
                   <span className="font-bold text-right">Web, SEO, Copy</span>
                 </li>
                 <li className="flex justify-between border-b border-white/10 pb-2">
                   <span className="text-gray-400 text-sm">ROI</span>
                   <span className="font-bold text-primary">240%</span>
                 </li>
               </ul>
               <Link to="/enquiry" className="block text-center bg-white text-dark font-bold py-3 rounded-xl mt-8 hover:bg-primary transition-colors">
                 Get Similar Results
               </Link>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default ProjectDetail;