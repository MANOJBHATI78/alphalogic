
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // stored as string name of lucide icon
  features: string[];
  link: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description?: string;
  features: string[];
  highlight?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  result?: string;
  tags?: string[];
  year?: string;
  client?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
}

export interface Stat {
  id: number;
  label: string;
  value: string;
  description?: string;
}

export interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'Closed';
}

export interface PageSeo {
  path: string;
  title: string;
  metaDescription: string;
  metaKeywords: string;
}

export enum ChatStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}
