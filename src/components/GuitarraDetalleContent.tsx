'use client';
import { useState } from 'react';
import { Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function GuitarraDetalleContent({ guitarra }: { guitarra: any }) {
  const fotosExtra = Array.isArray(guitarra.fotos) ? guitarra.fotos : [];
  
  const todasLasFotos = [guitarra.imagen_url, ...fotosExtra].filter(
    (f) => f && f !== 'null' && f !== '[null]' && f.trim() !== ''
  );

  const [index, setIndex] = useState(0);

  const anterior = () => setIndex(index === 0 ? todasLasFotos.length - 1 : index - 1);
  const siguiente = () => setIndex(index === todasLasFotos.length - 1 ? 0 : index + 1);

  return (
    <div className="min-h-screen text-white pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        
        <div className="lg:hidden mb-6 opacity-0 animate-fadeInUp delay-200">
          <h1 className="text-2xl font-bold mb-2">{guitarra.nombre}</h1>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xl text-blue-400 font-mono">
              {guitarra.precio && guitarra.precio > 0 ? `$${guitarra.precio.toLocaleString()}` : 'Consultar precio'}
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center gap-2"
            >
              <Mail size={20} /> Consultar
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-1 space-y-6">
            
            <div className="bg-gray-800 rounded-xl p-4 shadow-lg opacity-0 animate-fadeInUp">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Galería del Instrumento</h3>
              
              <div className="relative group rounded-lg overflow-hidden flex items-center justify-center bg-black/40">
                <img 
                  src={todasLasFotos[index]} 
                  alt={`${guitarra.nombre} - vista ${index + 1}`} 
                  className="w-full h-[400px] lg:h-[600px] object-contain transition-all duration-300" 
                />
                
                {todasLasFotos.length > 1 && (
                  <>
                    <button 
                      onClick={anterior} 
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={siguiente} 
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {todasLasFotos.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin">
                  {todasLasFotos.map((foto, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setIndex(idx)}
                      className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                        index === idx ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={foto} alt="miniatura" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:flex-1 lg:sticky lg:top-24 lg:self-start">
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg opacity-0 animate-fadeInUp delay-200">
              <div className="hidden lg:block mb-6">
                <h1 className="text-3xl font-bold mb-3">{guitarra.nombre}</h1>
                <div className="flex items-center justify-between">
                  <p className="text-2xl text-blue-400 font-mono">
                    {guitarra.precio && guitarra.precio > 0 ? `$${guitarra.precio.toLocaleString()}` : 'Consultar precio'}
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center gap-2"
                  >
                    <Mail size={20} /> Contactanos
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-300">Especificaciones Técnicas</h2>
                <div className="grid gap-3">
                  <SpecRow label="Cuerpo" value={guitarra.cuerpo} />
                  <SpecRow label="Tapa" value={guitarra.tapa} />
                  <SpecRow label="Mástil" value={guitarra.mastil} />
                  <SpecRow label="Tastiera" value={guitarra.tastiera} />
                  <SpecRow label="Inlays" value={guitarra.inlay} />
                  <SpecRow label="Clavijas" value={guitarra.clavijas} />
                  <SpecRow label="Puente" value={guitarra.puente} />
                  <SpecRow label="Micrófonos" value={guitarra.mics} />
                  <SpecRow label="Trastes" value={guitarra.trastes} />
                  <SpecRow label="Escala" value={guitarra.escala} />
                  <SpecRow label="Circuito" value={guitarra.circuito} />
                  {guitarra.detalle && <SpecRow label="Detalle" value={guitarra.detalle} />}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
      <span className="font-semibold text-gray-300">{label}</span>
      <span className="text-gray-200 text-right">{value || 'N/A'}</span>
    </div>
  );
}