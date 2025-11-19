import { Service, PricingPlan, Testimonial, Project, BlogPost, Client } from './types';

export const COMPANY_NAME = "Alphalogic";
export const COMPANY_LOCATION = "Surat, Gujarat";
export const COMPANY_PHONE = "+91 98765 43210";
export const COMPANY_EMAIL = "hello@alphalogic.in";

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom, high-performance websites built on React, WordPress, or Shopify.',
    icon: 'code',
    features: ['Custom Code', 'WordPress', 'Shopify', 'E-Commerce'],
    link: '/services'
  },
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Data-driven strategies to rank your business on the first page of Google.',
    icon: 'trending-up',
    features: ['Keyword Planning', 'On-Page SEO', 'Backlinks', 'Reporting'],
    link: '/services'
  },
  {
    id: 'gmb',
    title: 'Google My Business',
    description: 'Dominate local search and get more calls from nearby customers.',
    icon: 'map-pin',
    features: ['Profile Setup', 'Ranking', 'Reviews', 'Weekly Posts'],
    link: '/services'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp API',
    description: 'Automate customer interactions with official WhatsApp Business API.',
    icon: 'message-circle',
    features: ['Chatbots', 'Broadcasting', 'CRM Connect', 'Automation'],
    link: '/services'
  }
];

export const SEO_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: '₹15,000/mo',
    description: 'Perfect for small local businesses.',
    features: ['10 Keywords', 'On-Page Optimization', 'Basic Technical Fixes', 'Monthly Reporting', 'Local Citations']
  },
  {
    name: 'Pro',
    price: '₹25,000/mo',
    description: 'For growing businesses targeting wider reach.',
    features: ['25 Keywords', 'Advanced Technical SEO', 'Content Writing (2 Blogs)', 'High-DA Backlinks', 'Competitor Analysis', 'Bi-Weekly Reporting'],
    highlight: true
  },
  {
    name: 'Advance',
    price: 'Custom',
    description: 'National & Global brands.',
    features: ['Unlimited Keywords', 'National/Global Targeting', 'Dedicated Account Manager', 'Advanced CRO Audit', 'Daily Rank Tracking', 'Custom Content Strategy']
  }
];

export const GMB_PLANS: PricingPlan[] = [
  {
    name: 'Basic GMB',
    price: '₹5,000/mo',
    features: ['Profile Optimization', 'Weekly Posts (2)', 'Review Responses', 'Basic Insights']
  },
  {
    name: 'Advanced GMB',
    price: '₹10,000/mo',
    features: ['Aggressive Ranking Strategy', 'Daily Posts', 'Spam Fighting', 'Local Grid Tracking', 'Review Generation Campaign'],
    highlight: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    role: "Owner",
    company: "Surat Diamond Works",
    content: "Alphalogic transformed our outdated site into a modern B2B portal. The team is incredibly professional and fast.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Desai",
    role: "Marketing Manager",
    company: "Vogue Textiles",
    content: "Our SEO rankings jumped significantly in just 3 months. We are now getting 5x more leads from Google.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Amit Shah",
    role: "Founder",
    company: "GreenLeaf Solar",
    content: "The WhatsApp automation they set up saves us 20 hours a week. Highly recommended for automation.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Urban Living Furniture",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    description: "A high-conversion Shopify store for a premium furniture brand.",
    result: "150% Increase in Sales"
  },
  {
    id: 2,
    title: "Dr. Mehta Clinic",
    category: "Local SEO",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description: "GMB Optimization and local SEO for a multi-specialty clinic.",
    result: "Ranked #1 for 'Cardiologist Surat'"
  },
  {
    id: 3,
    title: "TechFab Industries",
    category: "Custom Web Dev",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Corporate website for a textile machinery manufacturer.",
    result: "Professional Brand Image"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Why Your Surat Business Needs SEO in 2025",
    category: "SEO",
    excerpt: "Local competition is heating up. Here’s why SEO is your best investment this year.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    date: "Oct 15, 2024",
    author: "Alphalogic Team",
    slug: "why-seo-surat-2025"
  },
  {
    id: 2,
    title: "Shopify vs WordPress: What's Best for E-commerce?",
    category: "Development",
    excerpt: "We break down the pros and cons of the two biggest platforms for selling online.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
    date: "Oct 10, 2024",
    author: "Dev Team",
    slug: "shopify-vs-wordpress"
  },
  {
    id: 3,
    title: "How WhatsApp API Can Automate Your Sales",
    category: "Automation",
    excerpt: "Stop manually replying to every message. Learn how to set up smart flows.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
    date: "Sep 28, 2024",
    author: "Automation Expert",
    slug: "whatsapp-api-automation"
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: 'TexFab', logo: 'https://placehold.co/200x80/e2e8f0/1e293b?text=TexFab', industry: 'Textiles' },
  { id: 2, name: 'Sparkle Gems', logo: 'https://placehold.co/200x80/e2e8f0/1e293b?text=Sparkle', industry: 'Jewelry' },
  { id: 3, name: 'EduRise', logo: 'https://placehold.co/200x80/e2e8f0/1e293b?text=EduRise', industry: 'Education' },
  { id: 4, name: 'MediCare', logo: 'https://placehold.co/200x80/e2e8f0/1e293b?text=MediCare', industry: 'Healthcare' },
  { id: 5, name: 'BuildCon', logo: 'https://placehold.co/200x80/e2e8f0/1e293b?text=BuildCon', industry: 'Real Estate' },
  { id: 6, name: 'FreshMart', logo: 'https://placehold.co/200x80/e2e8f0/1e293b?text=FreshMart', industry: 'Retail' },
];