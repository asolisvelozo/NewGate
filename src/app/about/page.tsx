'use client'
import React from "react";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="pt-4 md:pt-8 pb-32 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="flex flex-col items-center justify-center -mt-[60px] md:-mt-[120px] -mb-[20px] md:-mb-[40px] animate-fadeInUp">
          <Image 
            src="/aboutus.PNG" 
            alt="About Us"
            width={1000} 
            height={300} 
            className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-contain drop-shadow-md scale-110" 
            priority 
          />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_15px_rgba(37,99,235,0.8)] -mt-[50px] md:-mt-[100px] mb-8 md:mb-12 relative z-20"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-20">
          
          <div className="w-full relative z-10 animate-fadeInUp" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src="/IMG_1799.JPEG" 
                alt="JOAQUIN AZRIEL - Luthier de NewGate Guitars"
                fill
                onContextMenu={(e) => e.preventDefault()}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="w-full text-center lg:text-left space-y-8 animate-fadeInUp" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
            
            <p className="text-gray-200 text-xl md:text-2xl font-medium leading-relaxed italic tracking-wide text-balance drop-shadow-sm">
              NewGate Guitars nace de una búsqueda personal que con el tiempo trascendió lo individual.
            </p>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                Comencé como luthier con la intención de construir el instrumento ideal para mí. Esa búsqueda se transformó en algo aún más grande: crear el instrumento ideal para cada músico, entendiendo que cada intérprete posee una identidad sonora y estética propia.
              </p>
              
              <p>
                Trabajamos bajo la premisa de <span className="text-white font-medium italic">Concept Driven Instruments</span>: cada instrumento responde a un concepto definido y a una razón de ser. El diseño, la selección de materiales, la arquitectura, la estética y el carácter tonal responden a esa misma premisa. Nada es arbitrario. Cada decisión tiene un porqué.
              </p>
              
              <p>
                Se emplean maderas de la más alta calidad, seleccionadas por su excelencia tonal, estabilidad y presencia visual. La estética se desarrolla con el mismo nivel de exigencia que la construcción y el sonido, siempre en coherencia con el concepto que define la identidad y el propósito de cada instrumento.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-100 text-xl md:text-2xl font-light tracking-wide">
                Desarrollamos instrumentos con <span className="text-blue-500 font-semibold uppercase tracking-widest text-lg md:text-xl">identidad, precisión y propósito</span>.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}