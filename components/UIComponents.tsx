import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronRight, Image as ImageIcon, Play, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Smart Image Component ---

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className, fallbackText, ...props }) => {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | undefined>(typeof src === 'string' ? src : undefined);
  const [attemptedFix, setAttemptedFix] = useState(false);

  useEffect(() => {
    // Reset state when src prop changes
    setImgSrc(typeof src === 'string' ? src : undefined);
    setError(false);
    setAttemptedFix(false);
  }, [src]);

  const handleError = () => {
    if (attemptedFix) {
        // If we already tried to fix it and it still failed, show error
        setError(true);
        return;
    }

    // If it failed, try to fix common path errors
    if (imgSrc && typeof imgSrc === 'string') {
        let newSrc = imgSrc;
        let changed = false;

        // User likely included 'public' in path, try removing it
        if (newSrc.includes('/public/')) {
            newSrc = newSrc.replace('/public/', '/');
            changed = true;
        }
        
        // If it starts with a slash, try removing it (for relative path support)
        if (newSrc.startsWith('/')) {
            newSrc = newSrc.substring(1);
            changed = true;
        }

        if (changed && newSrc !== imgSrc) {
            setImgSrc(newSrc);
            setAttemptedFix(true);
            return; // Try again with new path
        }
    }
    
    // If no fixes were possible or applicable, set error
    setError(true);
  };

  const displaySrc = error 
    ? `https://placehold.co/800x600/101010/FFFFFF?text=${encodeURIComponent(fallbackText || alt || 'Image Not Found')}` 
    : imgSrc;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={displaySrc} 
        alt={alt} 
        onError={handleError}
        className="w-full h-full object-cover"
        {...props}
      />
      {error && (
        <div className="absolute top-2 right-2 bg-red-500/90 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10 pointer-events-none">
          <AlertCircle size={10} />
          <span>Path Broken: {typeof src === 'string' ? src : 'Invalid Path'}</span>
        </div>
      )}
    </div>
  );
};

// --- Local Video Component ---

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  poster?: string;
}

export const LocalVideo: React.FC<VideoProps> = ({ src, poster, className, ...props }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true);
    };

    return (
        <div className={`relative overflow-hidden bg-brand-black ${className}`}>
            {!error ? (
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster={poster}
                    onError={handleError}
                    src={typeof src === 'string' ? src : undefined} // Pass src directly if string
                    {...props}
                >
                    {/* Fallback text if video tag fails */}
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-dark/50 border border-white/10 p-4 text-center">
                    <AlertCircle className="text-red-500 mb-2" size={32} />
                    <p className="text-white font-bold">Video Failed to Load</p>
                    <p className="text-white/50 text-xs mt-1 break-all">Check path: {typeof src === 'string' ? src : 'Invalid Path'}</p>
                    <p className="text-brand-teal text-xs mt-4">Ensure file is in /public/assets/</p>
                </div>
            )}
        </div>
    );
};


// --- Buttons ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-teal text-brand-black hover:bg-brand-primaryText hover:text-brand-black hover:shadow-[0_0_20px_rgba(18,201,178,0.4)]",
    secondary: "bg-brand-coral text-white hover:bg-red-400 shadow-lg shadow-brand-coral/20",
    outline: "border border-brand-teal/50 text-brand-teal hover:bg-brand-teal hover:text-brand-black",
    glass: "bg-white/10 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 text-brand-primaryText hover:bg-black/5 dark:hover:bg-white/20",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

// --- Typography ---

export const SectionHeading: React.FC<{ 
  title: string; 
  subtitle: string; 
  center?: boolean;
  light?: boolean;
}> = ({ title, subtitle, center, light }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''} ${light ? 'text-white' : ''}`}>
    <span className="uppercase tracking-widest text-brand-teal text-xs font-bold mb-3 block">
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-brand-primaryText">
      {title}
    </h2>
    <div className={`h-1 w-20 bg-brand-teal mt-6 rounded-full ${center ? 'mx-auto' : ''}`} />
  </div>
);

// --- Cards ---

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`
    glass-panel rounded-2xl p-8 border border-black/5 dark:border-white/5 
    ${hoverEffect ? 'hover:border-brand-teal/30 hover:shadow-[0_10px_40px_-10px_rgba(18,201,178,0.1)] transition-all duration-500 hover:-translate-y-2' : ''}
    ${className}
  `}>
    {children}
  </div>
);

// --- Inputs ---

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => (
  <div className="mb-6">
    <label className="block text-brand-secondaryText text-sm font-medium mb-2 pl-1">{label}</label>
    <input 
      className={`w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-brand-primaryText focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors placeholder-brand-secondaryText/50 ${className}`}
      {...props}
    />
  </div>
);

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => (
  <div className="mb-6">
    <label className="block text-brand-secondaryText text-sm font-medium mb-2 pl-1">{label}</label>
    <textarea 
      className={`w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-brand-primaryText focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors placeholder-brand-secondaryText/50 min-h-[120px] ${className}`}
      {...props}
    />
  </div>
);