'use client'
import React from "react";
import Image from "next/image";

type HeroSectionProps = {
  logoSrc: string;
  tagline?: string;
  children?: React.ReactNode;
};

export default function Titulo({ 
  logoSrc,
  tagline = "Handcrafted Electric Guitars",
  children
}: HeroSectionProps) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"> 
      
      {/* Degradado muy suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
      
      {/* CONTENEDOR PRINCIPAL
         -mt-24 sm:-mt-32: Esto sube el logo para que encaje perfecto en la "X" del fondo
      */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center -mt-24 sm:-mt-32">
        
          {/* LOGO GIGANTE */}
          <div className="relative w-full max-w-5xl h-48 sm:h-72 md:h-96 lg:h-[30rem] mb-4 opacity-0 animate-fadeInUp" 
               style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Image 
              src={logoSrc}
              alt="NewGate Guitars Logo"
              fill
              className="object-contain" 
              priority
            />
          </div>
          
          {/* LÍNEAS SEPARADORAS */}
          <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="h-px w-12 sm:w-24 bg-white/80" />
            <div className="w-2 h-2 bg-white rotate-45" />
            <div className="h-px w-12 sm:w-24 bg-white/80" />
          </div>
          
          {/* TAGLINE */}
          {tagline && (
            <p className="text-base sm:text-xl md:text-2xl text-white font-light italic tracking-widest mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              {tagline}
            </p>
          )}

        {/* TEXTO EXTRA (Si le pasas algo como hijo) */}
        {children && (
          <div className="flex justify-center opacity-0 animate-fadeInUp"
               style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            {children}
          </div>
        )}
      </div>

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
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}