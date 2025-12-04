import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Button, SectionHeading, Card } from '../components/UIComponents';
import { ArrowRight, Check, X } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Services: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeServiceId = searchParams.get('id');
  const navigate = useNavigate();

  // If a specific service is selected, show detail view
  if (activeServiceId) {
    const service = SERVICES.find(s => s.id === activeServiceId);
    if (!service) return <div className="pt-32 text-center">Service not found</div>;

    return (
      <div className="pt-20 min-h-screen">
        <div className="relative py-24 bg-brand-dark/50">
           <div className="container mx-auto px-6 relative z-10">
              <button 
                onClick={() => setSearchParams({})} 
                className="mb-8 text-sm text-brand-teal hover:underline flex items-center gap-2"
              >
                <ArrowRight className="rotate-180" size={14}/> Back to Services
              </button>
              <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 border border-brand-teal/20">
                <service.icon size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-brand-beige/70 max-w-3xl">{service.fullDescription}</p>
           </div>
        </div>

        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Key Deliverables</h3>
            <div className="grid gap-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-transparent border border-brand-teal/20">
              <h4 className="text-xl font-bold text-white mb-4">Ready to get started?</h4>
              <p className="text-white/60 mb-6">Book a consultation specific to {service.title}.</p>
              <Button onClick={() => navigate('/contact')}>Get In Touch</Button>
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-bold mb-6">Our Process</h3>
             <div className="space-y-8">
               {service.process.map((step, i) => (
                 <div key={i} className="relative pl-10">
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full border border-brand-teal text-brand-teal flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    {i !== service.process.length - 1 && (
                      <div className="absolute left-4 top-8 bottom-[-32px] w-px bg-brand-teal/30"></div>
                    )}
                    <h4 className="text-xl font-bold mb-2">{step}</h4>
                    <p className="text-brand-beige/50 text-sm">We execute {step.toLowerCase()} with precision to ensure maximum impact for your campaign.</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 text-center mb-20">
        <SectionHeading 
          title="Digital Expertise" 
          subtitle="Our Services" 
          center 
        />
        <p className="text-xl text-brand-beige/60 max-w-2xl mx-auto">
          Comprehensive solutions for brands that refuse to settle for average.
        </p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <Card key={service.id} className="h-full flex flex-col justify-between group cursor-pointer" hoverEffect>
             <div onClick={() => setSearchParams({ id: service.id })}>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-brand-teal group-hover:text-brand-black transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-brand-beige/60 leading-relaxed mb-8">
                  {service.shortDescription}
                </p>
             </div>
             <div className="pt-6 border-t border-white/5">
                <button 
                  onClick={() => setSearchParams({ id: service.id })}
                  className="flex items-center gap-2 text-brand-teal font-semibold group-hover:gap-3 transition-all"
                >
                  Explore Service <ArrowRight size={16} />
                </button>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
};