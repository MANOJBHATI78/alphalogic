
import React, { useState, useRef } from 'react';
import { LayoutDashboard, FileText, Users, LogOut, Plus, Search, Save, Trash2, Briefcase, Layers, TrendingUp, Settings, MessageSquare, Star, Upload, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useData } from '../context/DataContext';
import { BlogPost, Project, Service, Client, Testimonial } from '../types';
import SimpleEditor from '../components/SimpleEditor';

// Image Upload Helper Component
const ImageUploader = ({ value, onChange, label }: { value: string | undefined, onChange: (val: string) => void, label: string }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
       <label className="label-admin">{label}</label>
       <div className="flex gap-4 items-center">
          <div 
            className="w-24 h-24 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative cursor-pointer hover:border-primary"
            onClick={() => fileInputRef.current?.click()}
          >
             {value ? (
               <img src={value} alt="Preview" className="w-full h-full object-cover" />
             ) : (
               <Upload className="text-gray-400" size={24} />
             )}
             <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="text-xs text-gray-500">
            <button type="button" onClick={() => fileInputRef.current?.click()} className="text-primary font-bold hover:underline">Click to upload</button>
            <p>or provide URL below</p>
            <input 
              type="text" 
              value={value || ''} 
              onChange={(e) => onChange(e.target.value)} 
              className="input-admin mt-1 text-xs" 
              placeholder="https://..."
            />
          </div>
       </div>
    </div>
  );
};

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Data Context
  const { 
    blogs, addBlog, deleteBlog, 
    projects, addProject, deleteProject, 
    services, addService, deleteService,
    clients, addClient, deleteClient,
    stats, updateStat,
    testimonials, addTestimonial, deleteTestimonial,
    enquiries, deleteEnquiry, updateEnquiryStatus,
    seoSettings, updateSeo 
  } = useData();

  // Forms State
  const [newBlog, setNewBlog] = useState<Partial<BlogPost>>({ category: 'SEO', content: '' });
  const [newProject, setNewProject] = useState<Partial<Project>>({ category: 'Custom Web Dev' });
  const [newService, setNewService] = useState<Partial<Service>>({ features: [] });
  const [newClient, setNewClient] = useState<Partial<Client>>({});
  const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial>>({});
  
  // SEO Edit State
  const [selectedSeoPath, setSelectedSeoPath] = useState<string>(seoSettings[0]?.path || '/');
  const activeSeoConfig = seoSettings.find(s => s.path === selectedSeoPath);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials (use admin/admin)');
    }
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.slug) return;
    addBlog({
      id: Date.now(),
      title: newBlog.title || '',
      category: newBlog.category || 'General',
      excerpt: newBlog.excerpt || '',
      content: newBlog.content || '',
      image: newBlog.image || 'https://via.placeholder.com/800x400',
      date: new Date().toLocaleDateString(),
      author: 'Manoj Modi',
      slug: newBlog.slug || ''
    });
    setNewBlog({ category: 'SEO', content: '' });
    alert('Blog Added!');
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title) return;
    addProject({
      id: Date.now(),
      title: newProject.title || '',
      category: newProject.category || 'Web',
      image: newProject.image || 'https://via.placeholder.com/800x600',
      description: newProject.description || '',
      result: newProject.result || 'Successful Launch',
      client: newProject.client || 'Confidential'
    });
    setNewProject({ category: 'Custom Web Dev' });
    alert('Project Added!');
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newService.title || !newService.id) return;
    addService({
      id: newService.id,
      title: newService.title,
      description: newService.description || '',
      icon: 'box',
      features: newService.features || ['Custom Feature'],
      link: '/services'
    });
    setNewService({ features: [] });
    alert('Service Added!');
  };

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name) return;
    addClient({
      id: Date.now(),
      name: newClient.name,
      industry: newClient.industry || 'General',
      logo: newClient.logo || 'https://via.placeholder.com/200x100'
    });
    setNewClient({});
    alert('Client Added!');
  };

  const handleAddTestimonial = (e: React.FormEvent) => {
     e.preventDefault();
     if(!newTestimonial.name) return;
     addTestimonial({
        id: Date.now(),
        name: newTestimonial.name,
        role: newTestimonial.role || 'Client',
        company: newTestimonial.company || '',
        content: newTestimonial.content || '',
        image: newTestimonial.image || 'https://via.placeholder.com/100'
     });
     setNewTestimonial({});
     alert('Testimonial Added!');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-dark text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings size={32}/>
             </div>
             <h2 className="text-2xl font-bold text-charcoal">Alphalogic Admin</h2>
             <p className="text-sm text-gray-500">Manoj Modi's Control Center</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
               <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Username</label>
               <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="input-admin bg-gray-50" />
            </div>
            <div>
               <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Password</label>
               <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input-admin bg-gray-50" />
            </div>
            <button type="submit" className="w-full bg-dark text-white font-bold py-4 rounded-xl hover:bg-primary hover:text-dark transition-colors shadow-lg">Access Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'enquiries', label: 'Enquiries', icon: MessageSquare },
    { id: 'content', label: 'Home & Services', icon: Layers },
    { id: 'work', label: 'Projects', icon: Briefcase },
    { id: 'blogs', label: 'Blog Posts', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'seo', label: 'SEO Manager', icon: Search },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans text-dark">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 p-6 hidden md:flex flex-col shadow-lg sticky top-0 h-screen z-20">
        <div className="text-2xl font-bold mb-12 text-dark flex items-center gap-2 font-display">
           <div className="w-8 h-8 bg-primary rounded-lg"></div> Alphalogic CMS
        </div>
        <nav className="space-y-2 flex-1">
          {sidebarItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)} 
              className={`flex items-center w-full px-5 py-4 rounded-xl transition-all text-sm font-medium group ${activeTab === item.id ? 'bg-dark text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <item.icon className={`w-5 h-5 mr-3 ${activeTab === item.id ? 'text-primary' : 'text-gray-400 group-hover:text-dark'}`} /> 
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-100">
           <div className="flex items-center mb-4 px-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                 <div className="text-sm font-bold">Manoj Modi</div>
                 <div className="text-xs text-gray-500">Super Admin</div>
              </div>
           </div>
           <button onClick={() => setIsLoggedIn(false)} className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl text-sm font-bold">
              <LogOut className="w-4 h-4 mr-3" /> Logout
           </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto h-screen">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-5 sticky top-0 z-10 flex justify-between items-center">
           <h1 className="text-2xl font-bold font-display text-gray-800">
              {sidebarItems.find(i => i.id === activeTab)?.label}
           </h1>
           <div className="flex gap-3">
              <button className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary transition-colors"><Search size={20}/></button>
              <button className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary transition-colors"><Settings size={20}/></button>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
        
        {/* DASHBOARD */}
        {activeTab === 'dashboard' && (
           <div className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Projects', val: projects.length, icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Enquiries', val: enquiries.length, icon: MessageSquare, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'Active Services', val: services.length, icon: Layers, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { label: 'Clients', val: clients.length, icon: Users, color: 'text-orange-600', bg: 'bg-orange-50' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                       <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                          <stat.icon size={28}/>
                       </div>
                       <div>
                          <div className="text-3xl font-bold font-display">{stat.val}</div>
                          <div className="text-xs font-bold uppercase text-gray-400">{stat.label}</div>
                       </div>
                    </div>
                  ))}
               </div>

               {/* Recent Enquiries Preview */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="font-bold text-lg">Recent Enquiries</h3>
                     <button onClick={() => setActiveTab('enquiries')} className="text-primary font-bold text-sm hover:underline">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                       <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                             <th className="px-6 py-3">Name</th>
                             <th className="px-6 py-3">Service</th>
                             <th className="px-6 py-3">Date</th>
                             <th className="px-6 py-3">Status</th>
                          </tr>
                       </thead>
                       <tbody>
                          {enquiries.slice(0, 5).map(e => (
                             <tr key={e.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-bold">{e.name}</td>
                                <td className="px-6 py-4">{e.service}</td>
                                <td className="px-6 py-4">{e.date}</td>
                                <td className="px-6 py-4">
                                   <span className={`px-2 py-1 rounded-full text-xs font-bold ${e.status === 'New' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{e.status}</span>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
               </div>
           </div>
        )}

        {/* ENQUIRIES TAB */}
        {activeTab === 'enquiries' && (
           <div className="card-admin">
              <div className="header-admin flex justify-between">
                 <span>Incoming Enquiries</span>
                 <div className="text-sm font-normal text-gray-500">Total: {enquiries.length}</div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                   <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                         <th className="px-6 py-3">Date</th>
                         <th className="px-6 py-3">Client Details</th>
                         <th className="px-6 py-3">Requirements</th>
                         <th className="px-6 py-3">Status</th>
                         <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                   </thead>
                   <tbody>
                      {enquiries.map(e => (
                         <tr key={e.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">{e.date}</td>
                            <td className="px-6 py-4">
                               <div className="font-bold text-gray-900">{e.name}</div>
                               <div className="text-xs flex items-center mt-1"><Mail size={10} className="mr-1"/> {e.email}</div>
                               <div className="text-xs flex items-center mt-1"><Phone size={10} className="mr-1"/> {e.phone}</div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="font-bold text-primary">{e.service}</div>
                               <div className="text-xs text-gray-500 mb-1">Budget: {e.budget}</div>
                               <p className="text-xs italic text-gray-600">"{e.message}"</p>
                            </td>
                            <td className="px-6 py-4">
                               <select 
                                 value={e.status}
                                 onChange={(ev) => updateEnquiryStatus(e.id, ev.target.value as any)}
                                 className={`px-2 py-1 rounded-lg text-xs font-bold border-none focus:ring-0 cursor-pointer ${e.status === 'New' ? 'bg-green-100 text-green-800' : e.status === 'Contacted' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-600'}`}
                               >
                                 <option value="New">New</option>
                                 <option value="Contacted">Contacted</option>
                                 <option value="Closed">Closed</option>
                               </select>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <button onClick={() => deleteEnquiry(e.id)} className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"><Trash2 size={16}/></button>
                            </td>
                         </tr>
                      ))}
                      {enquiries.length === 0 && (
                         <tr>
                            <td colSpan={5} className="px-6 py-12 text-center text-gray-400">No enquiries yet.</td>
                         </tr>
                      )}
                   </tbody>
                </table>
              </div>
           </div>
        )}

        {/* CONTENT (Services & Stats) */}
        {activeTab === 'content' && (
           <div className="space-y-8">
              {/* Manage Stats */}
              <div className="card-admin">
                 <div className="header-admin"><TrendingUp className="mr-2 w-5 h-5 text-primary"/> Home Page Stats</div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map(stat => (
                       <div key={stat.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary transition-colors">
                          <label className="label-admin">{stat.label}</label>
                          <input 
                            type="text" 
                            value={stat.value} 
                            onChange={(e) => updateStat(stat.id, { value: e.target.value })}
                            className="input-admin mb-2 text-lg font-bold"
                          />
                          <input 
                            type="text" 
                            value={stat.description} 
                            onChange={(e) => updateStat(stat.id, { description: e.target.value })}
                            className="input-admin text-xs"
                          />
                       </div>
                    ))}
                 </div>
              </div>

              {/* Manage Services */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2 card-admin">
                    <div className="header-admin">Active Services</div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-sm text-left text-gray-500">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                             <tr>
                                <th className="px-6 py-3">Service Name</th>
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                             </tr>
                          </thead>
                          <tbody>
                             {services.map(s => (
                                <tr key={s.id} className="bg-white border-b hover:bg-gray-50">
                                   <td className="px-6 py-4 font-bold text-gray-900">{s.title}</td>
                                   <td className="px-6 py-4 font-mono text-xs">{s.id}</td>
                                   <td className="px-6 py-4 text-right">
                                      <button onClick={() => deleteService(s.id)} className="text-red-500 hover:text-red-700"><Trash2 size={18}/></button>
                                   </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
                 <div className="card-admin h-fit">
                    <div className="header-admin">Add New Service</div>
                    <div className="space-y-4">
                       <input placeholder="ID (e.g. mobile-dev)" value={newService.id || ''} onChange={e => setNewService({...newService, id: e.target.value})} className="input-admin"/>
                       <input placeholder="Title" value={newService.title || ''} onChange={e => setNewService({...newService, title: e.target.value})} className="input-admin"/>
                       <textarea placeholder="Description" value={newService.description || ''} onChange={e => setNewService({...newService, description: e.target.value})} className="input-admin h-24"/>
                       <button onClick={handleAddService} className="btn-primary w-full">
                          <Plus size={16} className="inline mr-1"/> Add Service
                       </button>
                    </div>
                 </div>
              </div>
              
              {/* Manage Clients */}
              <div className="card-admin">
                 <div className="header-admin">Client Logos</div>
                 <div className="flex flex-wrap gap-4 mb-8">
                    {clients.map(c => (
                       <div key={c.id} className="group relative px-6 py-3 bg-white border border-gray-200 rounded-lg text-sm flex items-center shadow-sm hover:shadow-md hover:border-primary transition-all">
                          <span className="font-bold">{c.name}</span>
                          <button onClick={() => deleteClient(c.id)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={12}/></button>
                       </div>
                    ))}
                 </div>
                 <div className="flex gap-2 max-w-md items-end">
                    <div className="flex-grow">
                       <input placeholder="New Client Name" value={newClient.name || ''} onChange={e => setNewClient({...newClient, name: e.target.value})} className="input-admin mb-2"/>
                       <input placeholder="Industry" value={newClient.industry || ''} onChange={e => setNewClient({...newClient, industry: e.target.value})} className="input-admin"/>
                    </div>
                    <button onClick={handleAddClient} className="bg-dark text-white px-6 py-4 rounded-lg font-bold text-sm whitespace-nowrap hover:bg-gray-800 h-fit">Add Client</button>
                 </div>
              </div>
           </div>
        )}

        {/* WORK (Projects) */}
        {activeTab === 'work' && (
           <div className="card-admin">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-xl">Project Portfolio</h3>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  {/* Add Form */}
                  <div className="xl:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit sticky top-24">
                      <h4 className="font-bold mb-4 flex items-center"><Plus className="w-4 h-4 mr-2"/> Add New Project</h4>
                      <div className="space-y-3">
                          <input placeholder="Project Title" className="input-admin" value={newProject.title || ''} onChange={e => setNewProject({...newProject, title: e.target.value})}/>
                          <input placeholder="Category" className="input-admin" value={newProject.category || ''} onChange={e => setNewProject({...newProject, category: e.target.value})}/>
                          <ImageUploader label="Project Cover Image" value={newProject.image} onChange={(val) => setNewProject({...newProject, image: val})} />
                          <input placeholder="Result (e.g. 200% Sales)" className="input-admin" value={newProject.result || ''} onChange={e => setNewProject({...newProject, result: e.target.value})}/>
                          <textarea placeholder="Description" className="input-admin h-32" value={newProject.description || ''} onChange={e => setNewProject({...newProject, description: e.target.value})}/>
                          <button onClick={handleAddProject} className="btn-primary w-full">Save Project</button>
                      </div>
                  </div>

                  {/* List */}
                  <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projects.map(p => (
                          <div key={p.id} className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                              <div className="h-40 bg-gray-200 relative">
                                 <img src={p.image} className="w-full h-full object-cover" alt=""/>
                                 <div className="absolute top-2 right-2">
                                    <button onClick={() => deleteProject(p.id)} className="bg-white/90 text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-sm"><Trash2 size={16}/></button>
                                 </div>
                              </div>
                              <div className="p-4">
                                  <div className="text-xs font-bold text-primary uppercase mb-1">{p.category}</div>
                                  <div className="font-bold text-lg mb-2">{p.title}</div>
                                  <p className="text-sm text-gray-500 line-clamp-2">{p.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
           </div>
        )}

        {/* BLOGS */}
        {activeTab === 'blogs' && (
            <div className="card-admin">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-xl">Blog Management</h3>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                     <div className="xl:col-span-2 bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold mb-4">Write New Article</h4>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                               <input placeholder="Blog Title" className="input-admin text-lg font-bold" value={newBlog.title || ''} onChange={e => setNewBlog({...newBlog, title: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, '-')})}/>
                               <input placeholder="Category" className="input-admin" value={newBlog.category || ''} onChange={e => setNewBlog({...newBlog, category: e.target.value})}/>
                            </div>
                            <ImageUploader label="Article Cover Image" value={newBlog.image} onChange={(val) => setNewBlog({...newBlog, image: val})} />
                            <textarea placeholder="Short Excerpt" className="input-admin h-20" value={newBlog.excerpt || ''} onChange={e => setNewBlog({...newBlog, excerpt: e.target.value})}/>
                            
                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                <label className="label-admin mb-2">Content (Rich Text)</label>
                                <textarea 
                                    className="w-full h-64 p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary font-mono text-sm"
                                    value={newBlog.content || ''}
                                    onChange={e => setNewBlog({...newBlog, content: e.target.value})}
                                    placeholder="<p>Write your article content here...</p>"
                                />
                            </div>
                            <div className="flex justify-end">
                               <button onClick={handleAddBlog} className="btn-primary px-8">Publish Post</button>
                            </div>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <h4 className="font-bold text-sm uppercase text-gray-500">Published Posts</h4>
                        <div className="bg-white rounded-xl border border-gray-200 divide-y">
                           {blogs.map(b => (
                               <div key={b.id} className="p-4 flex justify-between items-start hover:bg-gray-50 transition-colors">
                                   <div>
                                      <div className="font-bold text-sm mb-1">{b.title}</div>
                                      <div className="text-xs text-gray-400">{b.date} • {b.category}</div>
                                   </div>
                                   <button onClick={() => deleteBlog(b.id)} className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
                               </div>
                           ))}
                        </div>
                     </div>
                </div>
            </div>
        )}

        {/* TESTIMONIALS */}
        {activeTab === 'testimonials' && (
           <div className="card-admin">
              <h3 className="header-admin"><MessageSquare className="w-5 h-5 mr-2"/> Testimonials</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {testimonials.map(t => (
                       <div key={t.id} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all relative group">
                          <button onClick={() => deleteTestimonial(t.id)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500"><Trash2 size={16}/></button>
                          <div className="flex items-center mb-4">
                             <img src={t.image} className="w-10 h-10 rounded-full mr-3 object-cover" alt=""/>
                             <div>
                                <div className="font-bold text-sm">{t.name}</div>
                                <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                             </div>
                          </div>
                          <p className="text-sm text-gray-600 italic">"{t.content}"</p>
                       </div>
                    ))}
                 </div>
                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
                    <h4 className="font-bold mb-4">Add Testimonial</h4>
                    <div className="space-y-3">
                       <input placeholder="Name" className="input-admin" value={newTestimonial.name || ''} onChange={e => setNewTestimonial({...newTestimonial, name: e.target.value})}/>
                       <input placeholder="Role" className="input-admin" value={newTestimonial.role || ''} onChange={e => setNewTestimonial({...newTestimonial, role: e.target.value})}/>
                       <input placeholder="Company" className="input-admin" value={newTestimonial.company || ''} onChange={e => setNewTestimonial({...newTestimonial, company: e.target.value})}/>
                       <ImageUploader label="Client Photo" value={newTestimonial.image} onChange={(val) => setNewTestimonial({...newTestimonial, image: val})} />
                       <textarea placeholder="Content" className="input-admin h-24" value={newTestimonial.content || ''} onChange={e => setNewTestimonial({...newTestimonial, content: e.target.value})}/>
                       <button onClick={handleAddTestimonial} className="btn-primary w-full">Add Review</button>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {/* SEO */}
        {activeTab === 'seo' && (
           <div className="card-admin">
              <h3 className="header-admin"><Search className="text-primary w-5 h-5 mr-2"/> SEO Manager</h3>
              
              <div className="mb-6 max-w-md">
                 <label className="label-admin">Select Page to Optimize</label>
                 <select 
                    className="input-admin" 
                    value={selectedSeoPath} 
                    onChange={(e) => setSelectedSeoPath(e.target.value)}
                 >
                    {seoSettings.map(s => <option key={s.path} value={s.path}>{s.path} ({s.title.substring(0, 15)}...)</option>)}
                 </select>
              </div>

              {activeSeoConfig && (
                 <div className="space-y-6 bg-gray-50 p-8 rounded-xl border border-gray-200 max-w-3xl">
                    <div>
                       <label className="label-admin">Page Title (Browser Tab)</label>
                       <input 
                         className="input-admin text-lg font-medium" 
                         value={activeSeoConfig.title} 
                         onChange={e => updateSeo(activeSeoConfig.path, { title: e.target.value })}
                       />
                       <p className="text-xs text-gray-400 mt-1">Recommended length: 50-60 characters</p>
                    </div>
                    <div>
                       <label className="label-admin">Meta Description (Google Snippet)</label>
                       <textarea 
                         className="input-admin h-24" 
                         value={activeSeoConfig.metaDescription} 
                         onChange={e => updateSeo(activeSeoConfig.path, { metaDescription: e.target.value })}
                       />
                       <p className="text-xs text-gray-400 mt-1">Recommended length: 150-160 characters</p>
                    </div>
                    <div>
                       <label className="label-admin">Meta Keywords</label>
                       <input 
                         className="input-admin" 
                         value={activeSeoConfig.metaKeywords} 
                         onChange={e => updateSeo(activeSeoConfig.path, { metaKeywords: e.target.value })}
                       />
                    </div>
                    <div className="flex justify-end pt-4 border-t border-gray-200">
                       <button className="btn-primary flex items-center px-8">
                          <Save size={16} className="mr-2"/> Save Changes
                       </button>
                    </div>
                 </div>
              )}
           </div>
        )}

        </div>
      </div>
      <style>{`
        .card-admin { background: white; padding: 2rem; border-radius: 1rem; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .header-admin { font-size: 1.25rem; font-weight: 700; color: #1f2937; margin-bottom: 1.5rem; display: flex; align-items: center; }
        .label-admin { display: block; font-size: 0.7rem; font-weight: 700; color: #6b7280; text-transform: uppercase; margin-bottom: 0.5rem; }
        .input-admin { width: 100%; background-color: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 0.75rem 1rem; font-size: 0.875rem; transition: all 0.2s; }
        .input-admin:focus { outline: none; border-color: #00D655; box-shadow: 0 0 0 3px rgba(0, 214, 85, 0.1); }
        .btn-primary { background: #00D655; color: #050505; padding: 0.75rem 1.5rem; border-radius: 0.75rem; font-weight: bold; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0, 214, 85, 0.2); }
      `}</style>
    </div>
  );
};

export default Admin;
