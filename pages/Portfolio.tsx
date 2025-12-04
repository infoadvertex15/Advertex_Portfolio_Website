import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { PortfolioCategory } from '../types';
import { Button, SectionHeading, Image } from '../components/UIComponents';
import { X, ExternalLink, Calendar, Tag } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CATEGORIES: PortfolioCategory[] = ['All', 'Social Media', 'Business Ads', 'Branding', 'Video Creative'];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<PortfolioCategory>('All');
  const [searchParams, setSearchParams] = useSearchParams();
  const activeProjectId = searchParams.get('id');
  const navigate = useNavigate();

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  // Project Detail View
  if (activeProjectId) {
    const project = PROJECTS.find(p => p.id === activeProjectId);
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-[60] bg-white/95 dark:bg-brand-black/95 backdrop-blur-xl overflow-y-auto">
        <div className="min-h-screen py-20 px-6">
           <button 
             onClick={() => setSearchParams({})} 
             className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
           >
             <X className="text-brand-primaryText" />
           </button>

           <div className="container mx-auto max-w-5xl animate-fade-in-up">
              <div className="aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-2xl relative group">
                <Image src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                   <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primaryText">{project.title}</h1>
                   <p className="text-xl text-brand-secondaryText mb-8 leading-relaxed">
                     {project.description}
                   </p>
                   
                   <h3 className="text-2xl font-bold mb-4 text-brand-primaryText">The Challenge & Solution</h3>
                   <p className="text-brand-secondaryText mb-8 leading-relaxed">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   </p>
                </div>

                <div className="glass-panel p-8 rounded-2xl h-fit">
                   <div className="mb-6">
                     <span className="text-xs uppercase text-brand-secondaryText font-bold tracking-widest block mb-1">Client</span>
                     <span className="text-lg font-semibold text-brand-primaryText">{project.client}</span>
                   </div>
                   <div className="mb-6">
                     <span className="text-xs uppercase text-brand-secondaryText font-bold tracking-widest block mb-1">Service</span>
                     <span className="text-lg font-semibold text-brand-primaryText">{project.category}</span>
                   </div>
                   <div className="mb-8">
                     <span className="text-xs uppercase text-brand-secondaryText font-bold tracking-widest block mb-1">Results</span>
                     <span className="text-2xl font-bold text-brand-teal">{project.results}</span>
                   </div>
                   <Button className="w-full">Start Similar Project</Button>
                </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // Gallery View
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Selected Works" 
          subtitle="Portfolio" 
          center 
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                ? 'bg-brand-teal text-brand-black shadow-[0_0_20px_rgba(18,201,178,0.3)]' 
                : 'bg-black/5 dark:bg-white/5 text-brand-primaryText hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[16/10]"
              onClick={() => setSearchParams({ id: project.id })}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <span className="text-brand-teal font-bold uppercase tracking-widest text-sm mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.title}
                </h3>
                <p className="text-brand-beige/70 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {project.results}
                </p>
                <span className="inline-flex items-center gap-2 text-white border-b border-white pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  View Case Study <ExternalLink size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};