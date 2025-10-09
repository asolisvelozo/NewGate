'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';

// Componente del carousel (se mantiene igual)
function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Imagen actual */}
      <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Especificación ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Controles de navegación */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicador */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

interface GuitarraDetalle {
  guitarra_id: number;
  nombre: string;
  precio: number;
  imagen_url: string;
  cuerpo: string;
  tapa: string;
  mastil: string;
  tastiera: string;
  inlay: string;
  clavijas: string;
  puente: string;
  mics: string;
  trastes: string;
  escala: string;
  circuito: string;
  detalle: string;
  especificaciones_guitarra: string[];
}

export default function GuitarraDetallePage() {
  const { id } = useParams<{ id: string }>();
  const [guitarra, setGuitarra] = useState<GuitarraDetalle | null>(null);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchGuitarra = async () => {
      const res = await fetch(`/api/guitars-spec/${id}`);
      const data = await res.json();
      setGuitarra(data);
      setMensaje(`Hola!\n\nEstoy interesado en la guitarra ${data.nombre} que vi en su sitio web.\n\n¿Podrían enviarme más información y el precio final?\n\n¡Gracias!`);
    };
    fetchGuitarra();
  }, [id]);

  // Función para consultar precio por email
  const consultarPrecio = () => {
    const subject = `Consulta por guitarra: ${guitarra?.nombre}`;
    const body = `Hola!\n\nEstoy interesado en la guitarra ${guitarra?.nombre} que vi en su sitio web.\n\nPor favor, podrían enviarme más información y el precio final?\n\nGracias!`;
    const email = 'ventas@tutienda.com'; // Reemplaza con tu email
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  if (!guitarra) return (
    <>
      
      <div className="min-h-screen text-white flex items-center justify-center pt-16">
        <div className="text-xl">Cargando...</div>
      </div>
    </>
  );

  return (
    <>
  
      <div className="min-h-screen text-white pt-16">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header móvil */}
          <div className="lg:hidden mb-6">
            <h1 className="text-2xl font-bold mb-2">{guitarra.nombre}</h1>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl text-gray-300">${guitarra.precio.toLocaleString()}</p>
              <button
                onClick={consultarPrecio}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center gap-2"
              >
                <Mail size={20} />
                Consultar Precio
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Columna izquierda - Imágenes */}
            <div className="lg:flex-1 space-y-6">
              {/* Imagen principal */}
              <div className="bg-gray-800/80 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Vista Principal</h3>
                <img
                  src={guitarra.imagen_url}
                  alt={guitarra.nombre}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              {/* Carousel de especificaciones */}
              {guitarra.especificaciones_guitarra && guitarra.especificaciones_guitarra.length > 0 && (
                <div className="bg-gray-800/80 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4 text-gray-300">Galería de Especificaciones</h3>
                  <ImageCarousel images={guitarra.especificaciones_guitarra} />
                </div>
              )}
            </div>

            {/* Columna derecha - Especificaciones */}
            <div className="lg:flex-1 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm">
                
                {/* Header desktop */}
                <div className="hidden lg:block mb-6">
                  <h1 className="text-3xl font-bold mb-3">{guitarra.nombre}</h1>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl text-gray-300">${guitarra.precio.toLocaleString()}</p>
                    <button
                      onClick={consultarPrecio}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center gap-2"
                    >
                      <Mail size={20} />
                      Contact us
                    </button>
                  </div>
                </div>

                {/* Especificaciones técnicas */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-300">Especificaciones Técnicas</h2>
                  <div className="grid gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Cuerpo</span>
                      <span className="text-gray-200">{guitarra.cuerpo}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Tapa</span>
                      <span className="text-gray-200">{guitarra.tapa}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Mástil</span>
                      <span className="text-gray-200">{guitarra.mastil}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Tastiera</span>
                      <span className="text-gray-200">{guitarra.tastiera}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Inlays</span>
                      <span className="text-gray-200">{guitarra.inlay}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Clavijas</span>
                      <span className="text-gray-200">{guitarra.clavijas}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Puente</span>
                      <span className="text-gray-200">{guitarra.puente}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Micrófonos</span>
                      <span className="text-gray-200">{guitarra.mics}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Trastes</span>
                      <span className="text-gray-200">{guitarra.trastes}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Escala</span>
                      <span className="text-gray-200">{guitarra.escala}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-700">
                      <span className="font-semibold text-gray-300">Circuito</span>
                      <span className="text-gray-200">{guitarra.circuito}</span>
                    </div>
                    {guitarra.detalle && (
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between py-2 border-b border-gray-700">
                        <span className="font-semibold text-gray-300">Detalle</span>
                        <span className="text-gray-200 text-right">{guitarra.detalle}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}