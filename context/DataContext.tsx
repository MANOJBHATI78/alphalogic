
import React, { createContext, useContext, useState } from 'react';
import { BlogPost, PageSeo, Project, Service, Client, Stat, Testimonial, Enquiry } from '../types';
import { BLOG_POSTS, PROJECTS as INITIAL_PROJECTS, SERVICES as INITIAL_SERVICES, CLIENTS as INITIAL_CLIENTS, TESTIMONIALS as INITIAL_TESTIMONIALS } from '../constants';

// Initial Stats Data
const INITIAL_STATS: Stat[] = [
  { id: 1, label: 'Projects Delivered', value: '250+', description: 'Successful launches across 5 countries.' },
  { id: 2, label: 'Revenue Generated', value: '₹50cr+', description: 'Total client revenue impact.' },
  { id: 3, label: 'Client Retention', value: '98%', description: 'We build long-term partnerships.' },
  { id: 4, label: 'Years Experience', value: '15+', description: 'Deep technical expertise.' },
];

const INITIAL_ENQUIRIES: Enquiry[] = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@demo.com', phone: '9876543210', service: 'Web Development', budget: '₹50k - ₹1L', message: 'Need a website for my textile business.', date: '2024-10-25', status: 'New' },
  { id: 2, name: 'Sneha Patel', email: 'sneha@demo.com', phone: '9876543211', service: 'SEO Services', budget: '₹20k - ₹50k', message: 'Want to rank for "Diamond Jewelry Surat".', date: '2024-10-24', status: 'Contacted' },
];

interface DataContextType {
  blogs: BlogPost[];
  addBlog: (blog: BlogPost) => void;
  deleteBlog: (id: number) => void;
  
  projects: Project[];
  addProject: (project: Project) => void;
  deleteProject: (id: number) => void;

  services: Service[];
  addService: (service: Service) => void;
  deleteService: (id: string) => void;

  clients: Client[];
  addClient: (client: Client) => void;
  deleteClient: (id: number) => void;

  stats: Stat[];
  updateStat: (id: number, newVal: Partial<Stat>) => void;

  testimonials: Testimonial[];
  addTestimonial: (t: Testimonial) => void;
  deleteTestimonial: (id: number) => void;

  enquiries: Enquiry[];
  addEnquiry: (e: Enquiry) => void;
  deleteEnquiry: (id: number) => void;
  updateEnquiryStatus: (id: number, status: 'New' | 'Contacted' | 'Closed') => void;

  seoSettings: PageSeo[];
  updateSeo: (path: string, data: Partial<PageSeo>) => void;
  getPageSeo: (path: string) => PageSeo | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const INITIAL_SEO: PageSeo[] = [
  { path: '/', title: 'Alphalogic | Digital Growth Agency Surat', metaDescription: 'Premier Web Development and SEO services in Surat.', metaKeywords: 'web dev, seo, surat' },
  { path: '/services/web', title: 'Web Development | Alphalogic', metaDescription: 'Custom React and WordPress websites.', metaKeywords: 'web design, surat, react' },
  { path: '/services/seo', title: 'SEO Services | Alphalogic', metaDescription: 'Rank #1 on Google with our SEO strategies.', metaKeywords: 'seo agency, ranking, google' },
  { path: '/services/gmb', title: 'GMB Ranking | Alphalogic', metaDescription: 'Google My Business optimization experts.', metaKeywords: 'gmb, maps, local seo' },
  { path: '/services/whatsapp', title: 'WhatsApp API | Alphalogic', metaDescription: 'Automate your business with WhatsApp.', metaKeywords: 'whatsapp api, chatbot, automation' },
  { path: '/work', title: 'Our Work | Alphalogic', metaDescription: 'Case studies of successful digital projects.', metaKeywords: 'portfolio, case studies, web design examples' },
  { path: '/about', title: 'About Manoj Modi | Alphalogic', metaDescription: 'Meet Manoj Modi, the solo architect behind Alphalogic.', metaKeywords: 'Manoj Modi, Alphalogic founder, Surat developer' },
  { path: '/blog', title: 'Digital Insights | Alphalogic', metaDescription: 'Latest tips on digital marketing.', metaKeywords: 'blog, tips, tricks' },
];

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(BLOG_POSTS);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [clients, setClients] = useState<Client[]>(INITIAL_CLIENTS);
  const [stats, setStats] = useState<Stat[]>(INITIAL_STATS);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [seoSettings, setSeoSettings] = useState<PageSeo[]>(INITIAL_SEO);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(INITIAL_ENQUIRIES);

  // Blog Actions
  const addBlog = (blog: BlogPost) => setBlogs(prev => [blog, ...prev]);
  const deleteBlog = (id: number) => setBlogs(prev => prev.filter(b => b.id !== id));

  // Project Actions
  const addProject = (project: Project) => setProjects(prev => [project, ...prev]);
  const deleteProject = (id: number) => setProjects(prev => prev.filter(p => p.id !== id));

  // Service Actions
  const addService = (service: Service) => setServices(prev => [...prev, service]);
  const deleteService = (id: string) => setServices(prev => prev.filter(s => s.id !== id));

  // Client Actions
  const addClient = (client: Client) => setClients(prev => [...prev, client]);
  const deleteClient = (id: number) => setClients(prev => prev.filter(c => c.id !== id));

  // Stat Actions
  const updateStat = (id: number, newVal: Partial<Stat>) => {
    setStats(prev => prev.map(s => s.id === id ? { ...s, ...newVal } : s));
  };

  // Testimonial Actions
  const addTestimonial = (t: Testimonial) => setTestimonials(prev => [t, ...prev]);
  const deleteTestimonial = (id: number) => setTestimonials(prev => prev.filter(t => t.id !== id));

  // Enquiry Actions
  const addEnquiry = (e: Enquiry) => setEnquiries(prev => [e, ...prev]);
  const deleteEnquiry = (id: number) => setEnquiries(prev => prev.filter(e => e.id !== id));
  const updateEnquiryStatus = (id: number, status: 'New' | 'Contacted' | 'Closed') => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  // SEO Actions
  const updateSeo = (path: string, data: Partial<PageSeo>) => {
    setSeoSettings(prev => prev.map(item => 
      item.path === path ? { ...item, ...data } : item
    ));
  };
  const getPageSeo = (path: string) => {
    return seoSettings.find(s => s.path === path);
  };

  return (
    <DataContext.Provider value={{ 
      blogs, addBlog, deleteBlog, 
      projects, addProject, deleteProject,
      services, addService, deleteService,
      clients, addClient, deleteClient,
      stats, updateStat,
      testimonials, addTestimonial, deleteTestimonial,
      enquiries, addEnquiry, deleteEnquiry, updateEnquiryStatus,
      seoSettings, updateSeo, getPageSeo 
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
