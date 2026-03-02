'use client'
import React from "react";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-4 overflow-hidden flex items-center">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* TÍTULO SECCIÓN */}
        <div className="text-center mb-16 md:mb-24 space-y-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-white uppercase text-center drop-shadow-md">
            Nosotros
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="w-full relative z-10 animate-fadeInUp" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src="/IMG_1799.JPEG" 
                alt="JOAQUIN AZRIEL - Luthier de NewGate Guitars"
                fill
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