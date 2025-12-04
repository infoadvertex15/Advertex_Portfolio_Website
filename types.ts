import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
  process: string[];
}

export type PortfolioCategory = 'Social Media' | 'Business Ads' | 'Branding' | 'Video Creative' | 'All';

export interface Project {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  client: string;
  results: string;
  description: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}