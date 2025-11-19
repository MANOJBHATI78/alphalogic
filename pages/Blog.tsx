import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const { blogs } = useData(); // Read from context

  const categories = ['All', 'SEO', 'Development', 'Automation', 'Marketing'];

  const filteredPosts = blogs.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-display font-bold text-charcoal mb-6">Digital Insights</h1>
          <p className="text-xl text-gray-600 mb-10">
            Expert tips on SEO, Web Design, and Business Growth directly from our team.
          </p>
          
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${category === cat ? 'bg-primary text-white' : 'bg-surface text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
             <article key={post.id} className="flex flex-col group">
               <div className="rounded-2xl overflow-hidden mb-6 h-64 shadow-sm relative border border-gray-100">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
                   {post.category}
                 </div>
               </div>
               <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                 <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/> {post.date}</span>
                 <span className="flex items-center"><User className="w-3 h-3 mr-1"/> {post.author}</span>
               </div>
               <h2 className="text-xl font-bold text-charcoal mb-3 leading-tight group-hover:text-primary transition-colors">
                 <Link to={`/blog`}>{post.title}</Link>
               </h2>
               <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                 {post.excerpt}
               </p>
               <Link to={`/blog`} className="mt-auto inline-flex items-center text-primary font-bold text-sm hover:underline">
                 Read Article <ArrowRight className="w-4 h-4 ml-1" />
               </Link>
             </article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No articles found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;