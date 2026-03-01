'use client'
import React from "react";

type HeroSectionProps = {
  logoSrc: string;
  children?: React.ReactNode;
};

export default function Titulo({ 
  logoSrc,
  children
}: HeroSectionProps) {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"> 
      
      {/* 1. EL SPOTLIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-0" />
      
      {/* 2. EL BACKLIGHT (Brillo azul) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-600/15 blur-[80px] rounded-full pointer-events-none z-0 opacity-0 animate-fadeInUp delay-200" />

      {/* CONTENEDOR PRINCIPAL - Centrado perfecto en pantalla */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        {/* BLOQUE DE LOGOS AGRUPADOS Y PEGADOS */}
        <div className="flex flex-col items-center justify-center w-full z-10 relative">
          
          {/* 1. LOGO PRINCIPAL (NewGate) */}
          <div className="relative w-full flex justify-center opacity-0 animate-fadeInUp delay-200 z-30">
            <img 
              src={logoSrc}
              alt="NewGate Guitars Logo"
              className="w-[90%] sm:w-[80%] md:w-[600px] lg:w-[700px] h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
            />
          </div>
          
          {/* 2. IMAGEN: Concept-Driven (Un poquitín más grande) */}
          <div className="relative w-full flex justify-center opacity-0 animate-fadeInUp delay-500 z-20 -mt-6 md:-mt-10 lg:-mt-12">
            <img 
              src="/concept.png" 
              alt="Concept-Driven Instruments"
              // Aumentado a 400px en md y 450px en lg
              className="w-[80%] sm:w-[60%] md:w-[400px] lg:w-[450px] h-auto drop-shadow-md" 
            />
          </div>

          {/* 3. IMAGEN: Worldwide Shipping (Un poquitín más grande) */}
          <div className="relative w-full flex justify-center opacity-0 animate-fadeInUp delay-700 z-10 -mt-2 md:-mt-6 lg:-mt-8">
            <img 
              src="/shipping.png" 
              alt="Worldwide Shipping"
              // Aumentado a 250px en md y 300px en lg
              className="w-[55%] sm:w-[45%] md:w-[250px] lg:w-[300px] h-auto drop-shadow-md" 
            />
          </div>

        </div> {/* FIN BLOQUE AGRUPADO */}

        {/* BOTONES / HIJOS */}
        {children && (
          <div className="flex justify-center mt-10 md:mt-12 opacity-0 animate-fadeInUp delay-1000 relative z-20">
            {children}
          </div>
        )}
      </div>

    </div>
  );
}