'use client';
import { Mail } from 'lucide-react';
import Link from 'next/link'; // Importamos Link de Next.js

export default function GuitarraDetalleContent({ guitarra }: { guitarra: any }) {
  return (
    <div className="min-h-screen text-white pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        
        {/* Cabecera Móvil */}
        <div className="lg:hidden mb-6 opacity-0 animate-fadeInUp delay-200">
          <h1 className="text-2xl font-bold mb-2">{guitarra.nombre}</h1>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xl text-gray-300">${guitarra.precio?.toLocaleString()}</p>
            {/* Cambiamos el button por un Link */}
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
            
            {/* Foto Principal */}
            <div className="bg-gray-800 rounded-xl p-4 shadow-lg opacity-0 animate-fadeInUp">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Vista Principal</h3>
              <img 
                src={guitarra.imagen_url} 
                alt={guitarra.nombre} 
                decoding="async"
                className="rounded-lg shadow-md w-full h-auto" 
              />
            </div>

            {/* Galería de Especificaciones */}
            {guitarra.especificaciones_guitarra?.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-4 shadow-lg opacity-0 animate-fadeInUp delay-500">
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Galería de Especificaciones</h3>
              </div>
            )}
          </div>

          <div className="lg:flex-1 lg:sticky lg:top-24 lg:self-start">
            
            {/* Tarjeta de Specs (y Título en Desktop) */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg opacity-0 animate-fadeInUp delay-200">
              <div className="hidden lg:block mb-6">
                <h1 className="text-3xl font-bold mb-3">{guitarra.nombre}</h1>
                <div className="flex items-center justify-between">
                  <p className="text-2xl text-gray-300">${guitarra.precio?.toLocaleString()}</p>
                  {/* Cambiamos el button por un Link */}
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center gap-2"
                  >
                    <Mail size={20} /> Contact us
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
      <span className="text-gray-200">{value || 'N/A'}</span>
    </div>
  );
}