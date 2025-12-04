import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, SectionHeading, Card, Image, LocalVideo } from '../components/UIComponents';
import { SERVICES, PROJECTS } from '../constants';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 justify-center">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-teal/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-coral/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-8 mx-auto hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default animate-fade-in-up opacity-0" 
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-brand-teal uppercase">Accepting New Clients for 2026</span>
            </div>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 tracking-tight animate-fade-in-up opacity-0 text-brand-primaryText" 
              style={{ animationDelay: '0.3s' }}
            >
              Brands That <br />
              <span className="text-gradient">Outperform.</span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-brand-secondaryText mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.5s' }}
            >
              We blend creative strategy with modern automation to build digital experiences that convert. Elevate your agency game.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.7s' }}
            >
              <Button variant="primary" icon onClick={() => navigate('/contact')} className="min-w-[180px]">Start Project</Button>
              <Button variant="glass" onClick={() => navigate('/portfolio')} className="min-w-[180px]">View Our Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Premium Services We Offer" 
            subtitle="What We Do" 
            center 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <Card key={service.id} className="group cursor-pointer" hoverEffect>
                <div onClick={() => navigate(`/services?id=${service.id}`)}>
                  <div className="w-14 h-14 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-brand-black transition-colors">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-primaryText">{service.title}</h3>
                  <p className="text-brand-secondaryText mb-6">{service.shortDescription}</p>
                  <span className="text-sm font-semibold text-brand-teal flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => navigate('/services')}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* Portfolio Strip */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-teal font-bold uppercase tracking-widest text-xs mb-2 block">Our Work</span>
              <h2 className="text-4xl font-bold text-brand-primaryText">Selected Projects</h2>
            </div>
            <Button variant="outline" onClick={() => navigate('/portfolio')} className="hidden md:flex">View Portfolio</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer" onClick={() => navigate(`/portfolio?id=${project.id}`)}>
                {/* SAFE IMAGE COMPONENT: Will show placeholder if local file is missing */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-brand-teal text-sm font-bold uppercase mb-1">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:hidden">
             <Button variant="outline" className="w-full" onClick={() => navigate('/portfolio')}>View Portfolio</Button>
          </div>
        </div>
      </section>
      
      {/* Video Ad Creative Teaser */}
      <section className="py-24 bg-gradient-to-b from-brand-black to-brand-dark">
         <div className="container mx-auto px-6 text-center">
            <SectionHeading title="High-Octane Video Creatives" subtitle="Production Studio" center />
            <div className="relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => navigate('/contact')}>
              {/* 
                  To use your own local video:
                  1. Put your video file in the public/assets folder (e.g., public/assets/myvideo.mp4)
                  2. Change src below to: src="assets/myvideo.mp4" (relative path)
              */}
              <LocalVideo
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-12864-large.mp4"
                poster="https://picsum.photos/1200/675?random=88"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    <Play className="text-white fill-white ml-1" size={32} />
                 </div>
              </div>
              <div className="absolute bottom-8 left-8 text-left pointer-events-none">
                <h3 className="text-2xl font-bold text-white">Agency Reel 2026</h3>
                <p className="text-white/60">See how we capture attention in 3 seconds.</p>
              </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-teal/5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-brand-primaryText">Ready to <span className="text-brand-teal">Scale?</span></h2>
          <p className="text-xl text-brand-secondaryText max-w-2xl mx-auto mb-12">
            Stop guessing. Start growing. Book a strategy call today and let's map out your path to market dominance.
          </p>
          <Button variant="primary" className="text-lg px-10 py-5" onClick={() => navigate('/contact')}>Start Your Project</Button>
        </div>
      </section>
    </div>
  );
};