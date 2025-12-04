import React from 'react';
import { SectionHeading, Button, Input, TextArea } from '../components/UIComponents';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly.');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <SectionHeading title="Let's Build Something Great." subtitle="Contact Us" />
          <p className="text-xl text-brand-secondaryText mb-12">
            Have a project in mind? We'd love to hear about it. Send us a message or book a call.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                 <Mail />
               </div>
               <div>
                 <h4 className="text-lg font-bold text-brand-primaryText mb-1">Email Us</h4>
                 <p className="text-brand-secondaryText">hello@advertex.com</p>
               </div>
            </div>
            
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                 <Phone />
               </div>
               <div>
                 <h4 className="text-lg font-bold text-brand-primaryText mb-1">Call Us</h4>
                 <p className="text-brand-secondaryText">+1 (555) 000-1234</p>
               </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                 <MapPin />
               </div>
               <div>
                 <h4 className="text-lg font-bold text-brand-primaryText mb-1">Visit Us</h4>
                 <p className="text-brand-secondaryText">100 Digital Blvd, Suite 404<br/>San Francisco, CA 94103</p>
               </div>
            </div>
          </div>
          
          {/* Map Embed Placeholder */}
          <div className="mt-12 w-full h-64 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center">
            <p className="text-brand-secondaryText flex items-center gap-2"><MapPin size={16}/> Interactive Map Module</p>
          </div>
        </div>

        {/* Form */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="First Name" placeholder="John" required />
              <Input label="Last Name" placeholder="Doe" required />
            </div>
            <Input label="Email" type="email" placeholder="john@company.com" required />
            <Input label="Company Name" placeholder="Company Ltd." />
            <div className="mb-6">
              <label className="block text-brand-secondaryText text-sm font-medium mb-2 pl-1">Service Interested In</label>
              <select className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-brand-primaryText focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors">
                <option>Social Media Management</option>
                <option>Business Ads</option>
                <option>Branding</option>
                <option>Video Creative</option>
              </select>
            </div>
            <TextArea label="Message" placeholder="Tell us about your project goals..." required />
            
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};