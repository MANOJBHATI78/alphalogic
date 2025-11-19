
import React, { useState } from 'react';
import { ArrowRight, Star, ExternalLink, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Work = () => {
  const { projects } = useData();
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Custom Web Dev', 'E-commerce', 'Local SEO', 'Branding'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const featuredProject = projects[0]; // Assume first project is featured

  return (
    <div className="bg-white min-h-screen">
      
      {/* Creative Dark Header */}
      <div className="bg-dark text-white pt-32 pb-32 relative overflow-hidden rounded-b-[3rem]">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-dark to-dark -z-10"></div>
        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold uppercase tracking-widest mb-6">
            <Layers size={12} className="text-primary"/> Our Portfolio
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
            Engineered <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Excellence.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            We don't just build websites; we build revenue engines. Explore our selected work for ambitious brands in Surat and beyond.
          </p>
        </div>
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 mb-24">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
             <div className="md:w-2/3 relative h-96 md:h-auto">
                <img src={featuredProject.image} className="w-full h-full object-cover" alt={featuredProject.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden"></div>
             </div>
             <div className="md:w-1/3 p-10 flex flex-col justify-center">
                <div className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Featured Case Study</div>
                <h3 className="text-3xl font-display font-bold text-dark mb-4">{featuredProject.title}</h3>
                <p className="text-gray-600 mb-6">{featuredProject.description}</p>
                <div className="mb-8">
                   <div className="text-sm font-bold text-dark mb-1">Key Result</div>
                   <div className="text-2xl font-bold text-green-600 flex items-center">
                     <Star className="fill-current w-5 h-5 mr-2"/> {featuredProject.result}
                   </div>
                </div>
                <Link to={`/work/${featuredProject.id}`} className="inline-block bg-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-dark transition-colors text-center">View Case Study</Link>
             </div>
          </div>
        </div>
      )}

      {/* Main Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-dark text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredProjects.map((project, index) => (
            <Link to={`/work/${project.id}`} key={project.id} className={`group block ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}>
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3] shadow-lg">
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                   <span className="px-6 py-3 border border-white/30 text-white rounded-full font-bold backdrop-blur-sm">View Project</span>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.result && (
                   <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-dark shadow-sm z-0 group-hover:opacity-0 transition-opacity">
                     🚀 {project.result}
                   </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{project.category}</div>
                  <h3 className="text-3xl font-bold text-dark mb-2 group-hover:text-green-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 line-clamp-2 max-w-md">{project.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-dark group-hover:bg-dark group-hover:text-white transition-all shrink-0">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
           <div className="text-center py-20 text-gray-400">No projects found in this category.</div>
        )}
      </div>
      
      <style>{`
        .btn-primary { background: #00D655; color: #050505; padding: 10px 20px; border-radius: 8px; font-weight: bold; text-decoration: none; display: inline-block; }
      `}</style>
    </div>
  );
};

export default Work;
