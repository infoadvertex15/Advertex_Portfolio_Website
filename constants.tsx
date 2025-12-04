import { 
  PenTool, 
  Share2, 
  Palette, 
  Target, 
  Video, 
  Zap,
  BarChart,
  Users,
  Layers
} from 'lucide-react';
import { NavItem, Project, Service, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    shortDescription: 'Full-service community growth and engagement strategies.',
    fullDescription: 'From community management to viral growth strategies, we handle your social presence A to Z. We focus on building genuine connections that turn followers into brand advocates.',
    icon: Share2,
    features: ['Community Management', 'Calendar Planning', 'Influencer Outreach', 'Analytics Reporting'],
    process: ['Onboarding', 'Content Calendar', 'Engagement', 'Monthly Review']
  },
  {
    id: 'business-ads',
    title: 'Business Ads',
    shortDescription: 'ROI-focused campaigns scaling revenue on FB, Insta & LinkedIn.',
    fullDescription: 'Stop wasting budget. We use data-driven targeting and creative testing frameworks to lower your CPA and scale your ROAS on major social platforms.',
    icon: Target,
    features: ['Campaign Strategy', 'Audience Segmentation', 'A/B Testing', 'Pixel Optimization'],
    process: ['Setup', 'Testing', 'Scaling', 'Retargeting']
  },
  {
    id: 'video-creatives',
    title: 'Video Creatives',
    shortDescription: 'Scroll-stopping video ads designed for conversion.',
    fullDescription: 'Video is the king of conversion. We produce high-quality UGC, motion graphics, and cinematic ads tailored specifically for TikTok, Reels, and YouTube Shorts.',
    icon: Video,
    features: ['Scriptwriting', 'Video Editing', 'Motion Graphics', 'UGC Production'],
    process: ['Scripting', 'Production', 'Editing', 'Optimization']
  },
  {
    id: 'branding',
    title: 'Designing & Branding',
    shortDescription: 'Identity systems that separate you from the competition.',
    fullDescription: 'Your brand is more than a logo. We build comprehensive visual identity systems, design languages, and brand guidelines that ensure consistency and premium positioning across all touchpoints.',
    icon: Palette,
    features: ['Logo Design', 'Brand Guidelines', 'UX/UI Design', 'Packaging Design'],
    process: ['Discovery', 'Concept', 'Refinement', 'Delivery']
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    shortDescription: 'High-impact visuals and copy that resonate with your audience.',
    fullDescription: 'We craft compelling narratives through high-fidelity visuals, persuasive copywriting, and strategic content planning. Our team ensures every piece of content aligns with your brand voice and drives engagement.',
    icon: PenTool,
    features: ['Blog & Article Writing', 'Social Media Assets', 'Whitepapers & E-books', 'Email Newsletter Copy'],
    process: ['Audit', 'Strategy', 'Creation', 'Distribution']
  }
];


export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Horizon Campaign',
    category: 'Business Ads',
    image: 'https://picsum.photos/800/600?random=1', 
    client: 'CyberTech Wearables',
    results: '450% ROAS in 3 months',
    description: 'A futuristic ad campaign targeting tech enthusiasts with high-contrast visuals.',
    tags: ['Facebook Ads', 'Motion Graphics', 'Copywriting']
  },
  {
    id: '2',
    title: 'Lumina Skincare Rebrand',
    category: 'Branding',
    image: 'https://picsum.photos/800/600?random=2',
    client: 'Lumina Organics',
    results: '2x Increase in Brand Recall',
    description: 'Complete visual identity overhaul focusing on minimalism and organic textures.',
    tags: ['Logo', 'Packaging', 'Web Design']
  },
  {
    id: '3',
    title: 'Apex Fitness Social',
    category: 'Social Media',
    image: 'https://picsum.photos/800/600?random=3',
    client: 'Apex Gyms',
    results: '+50k Followers in 6 months',
    description: 'High-energy video content and community challenges to drive membership.',
    tags: ['Instagram', 'TikTok', 'Community Mgmt']
  },
  {
    id: '4',
    title: 'Velocity App Launch',
    category: 'Video Creative',
    image: 'https://picsum.photos/800/600?random=4',
    client: 'Velocity FinTech',
    results: '1M+ Views in week 1',
    description: 'Cinematic launch trailer explaining complex financial tools simply.',
    tags: ['3D Animation', 'Sound Design', 'Storyboarding']
  },
  {
    id: '5',
    title: 'Urban Coffee Co.',
    category: 'Branding',
    image: 'https://picsum.photos/800/600?random=5',
    client: 'Urban Coffee',
    results: '30% Foot Traffic Increase',
    description: 'Local branding initiative mixing gritty urban aesthetics with premium coffee culture.',
    tags: ['Signage', 'Merch', 'Social Media']
  },
  {
    id: '6',
    title: 'Echo Headphones',
    category: 'Business Ads',
    image: 'https://picsum.photos/800/600?random=6',
    client: 'Echo Audio',
    results: '$20 CPA (Industry avg $45)',
    description: 'Direct response campaign leveraging UGC and influencer testimonials.',
    tags: ['UGC', 'Paid Social', 'Retargeting']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'TechFlow Solutions',
    content: 'Advertex transformed our digital presence. Their strategic approach to Business Ads doubled our leads in the first quarter alone.',
    image: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Zenith Wear',
    content: 'The branding work they did was phenomenal. They captured our vision perfectly and executed with Apple-level precision.',
    image: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Director of Growth',
    company: 'FinStart',
    content: 'The team is professional, fast, and incredibly talented. They completely revitalized our content strategy.',
    image: 'https://picsum.photos/100/100?random=12'
  }
];