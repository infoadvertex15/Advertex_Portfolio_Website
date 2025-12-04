import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './UIComponents';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync with HTML class on mount
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-brand-primaryText hover:text-brand-teal transition-colors"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 dark:bg-brand-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-teal to-blue-500 flex items-center justify-center">
            <span className="font-bold text-white text-lg">A</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-brand-primaryText">Advertex</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-black/5 dark:bg-white/5 rounded-full px-8 py-2 border border-black/5 dark:border-white/5 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => `text-sm font-medium transition-colors hover:text-brand-teal ${isActive ? 'text-brand-teal' : 'text-brand-secondaryText'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="primary" onClick={() => navigate('/contact')}>
            Start Project
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button className="text-brand-primaryText p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-300 md:hidden flex flex-col pt-32 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path}
            className={({ isActive }) => `text-3xl font-bold mb-6 ${isActive ? 'text-brand-teal' : 'text-brand-primaryText'}`}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="mt-8 grid gap-4">
           <Button variant="primary" onClick={() => navigate('/contact')} className="w-full">
            Start Project
          </Button>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-teal to-blue-500 flex items-center justify-center">
                  <span className="font-bold text-white text-lg">A</span>
                </div>
                <span className="text-2xl font-bold tracking-tight text-brand-primaryText">Advertex</span>
              </div>
              <p className="text-brand-secondaryText leading-relaxed mb-6">
                We build brands that outperform with creativity, strategy, and modern execution.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-brand-primaryText hover:bg-brand-teal hover:text-brand-black transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
          </div>

          <div>
            <h4 className="text-brand-primaryText font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-brand-secondaryText hover:text-brand-teal cursor-pointer transition-colors">Business Ads</li>
              <li className="text-brand-secondaryText hover:text-brand-teal cursor-pointer transition-colors">Branding</li>
              <li className="text-brand-secondaryText hover:text-brand-teal cursor-pointer transition-colors">Social Media Management</li>
              <li className="text-brand-secondaryText hover:text-brand-teal cursor-pointer transition-colors">Video Creatives</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-primaryText font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li className="text-brand-secondaryText hover:text-brand-teal cursor-pointer transition-colors">About Us</li>
              <li className="text-brand-secondaryText hover:text-brand-teal cursor-pointer transition-colors">Careers</li>
              <li className="text-brand-secondaryText hover:text-brand-teal cursor-pointer transition-colors">Contact</li>
              <li className="text-brand-secondaryText hover:text-brand-teal cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-primaryText font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-secondaryText">
                <MapPin className="text-brand-teal shrink-0" size={20} />
                <span>100 Digital Blvd, Suite 404<br/>San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-3 text-brand-secondaryText">
                <Mail className="text-brand-teal shrink-0" size={20} />
                <span>hello@advertex.com</span>
              </li>
              <li className="flex items-center gap-3 text-brand-secondaryText">
                <Phone className="text-brand-teal shrink-0" size={20} />
                <span>+1 (555) 000-1234</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-secondaryText text-sm">© 2026 Advertex Digital. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-brand-secondaryText">
            <span className="hover:text-brand-teal cursor-pointer">Terms</span>
            <span className="hover:text-brand-teal cursor-pointer">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-primaryText selection:bg-brand-teal selection:text-brand-black">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};