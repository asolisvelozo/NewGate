'use client'
import React from "react";

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  tagline?: string;
  showScrollIndicator?: boolean;
  children?: React.ReactNode;
};

export default function titulo({ 
  title = "NewGate",
  subtitle = "Guitars",
  tagline = "Handcrafted Electric Guitars",
  showScrollIndicator = true,
  children
}: HeroSectionProps) {
  return (
    <div className="relative w-full min-h-screen flex items-start justify-center pt-24 overflow-hidden">
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      
      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Main title */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4 sm:mb-6">
            <span className="inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {title}
            </span>
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="font-light text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 tracking-widest uppercase mb-6 sm:mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              {subtitle}
            </p>
          )}
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="h-px w-12 sm:w-20 bg-white/60" />
            <div className="w-1.5 h-1.5 bg-white/80 rotate-45" />
            <div className="h-px w-12 sm:w-20 bg-white/60" />
          </div>
          
          {/* Optional tagline */}
          {tagline && (
            <p className="mt-8 sm:mt-12 text-sm sm:text-base text-white/70 font-light italic opacity-0 animate-fadeInUp" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
              {tagline}
            </p>
          )}
        </div>

        {/* Children content (carousel, cards, etc.) */}
        {children && (
          <div className="flex justify-center -mt-24 sm:-mt-32 opacity-0 animate-fadeInUp"
        style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
            {children}
          </div>
        )}
      </div>
      
      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeInUp" style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
}

