import React from 'react';
import { SectionHeading, Button } from '../components/UIComponents';
import { Target, Users, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-32 pb-20 min-h-screen">
      {/* Story Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <SectionHeading title="Not Just Another Agency." subtitle="Our Story" />
             <div className="space-y-6 text-lg text-brand-beige/70 leading-relaxed">
               <p>
                 Advertex was born from a simple frustration: seeing incredible brands fail because of outdated marketing strategies.
               </p>
               <p>
                 We set out to build an agency that bridges the gap between creative artistry and hard data. We don't believe in "vanity metrics." If it doesn't drive revenue, we don't do it.
               </p>
               <p>
                 Founded in 2020, we've grown from a two-person design team to a global powerhouse managing over $10M in ad spend and building digital experiences for Fortune 500s and startups alike.
               </p>
             </div>
             
             <div className="grid grid-cols-2 gap-8 mt-12">
               <div>
                 <h4 className="text-4xl font-bold text-white mb-2">50+</h4>
                 <p className="text-brand-beige/50">Team Members</p>
               </div>
               <div>
                 <h4 className="text-4xl font-bold text-white mb-2">$150M+</h4>
                 <p className="text-brand-beige/50">Revenue Generated</p>
               </div>
             </div>
           </div>
           
           <div className="relative">
             <div className="absolute inset-0 bg-brand-teal/20 blur-[80px] rounded-full"></div>
             <img src="https://picsum.photos/600/800?grayscale" alt="Founder" className="relative z-10 rounded-2xl w-full object-cover shadow-2xl border border-white/10" />
           </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-brand-dark/50 py-24">
        <div className="container mx-auto px-6">
           <SectionHeading title="Core Principles" subtitle="Why Us" center />
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Target, title: 'Results First', desc: 'We obsess over ROI. Every pixel and line of code serves a purpose.' },
               { icon: Zap, title: 'Speed', desc: 'Digital moves fast. We move faster. Rapid iteration is in our DNA.' },
               { icon: Award, title: 'Quality', desc: 'Apple-level aesthetics. We don’t ship anything that isn’t world-class.' },
               { icon: Users, title: 'Partnership', desc: 'We aren’t a vendor. We are an extension of your growth team.' }
             ].map((item, i) => (
               <div key={i} className="glass-panel p-8 rounded-xl border border-white/5 hover:border-brand-teal/30 transition-all">
                 <item.icon className="text-brand-teal mb-6" size={32} />
                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                 <p className="text-brand-beige/60">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="container mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to meet the team?</h2>
        <Button onClick={() => navigate('/contact')}>Get In Touch</Button>
      </div>
    </div>
  );
};
