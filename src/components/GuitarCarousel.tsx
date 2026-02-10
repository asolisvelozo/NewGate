'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Guitar {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen_url: string;
  disponible: boolean;
}

export default function GuitarCarousel() {
  const [guitars, setGuitars] = useState<Guitar[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGuitars() {
      try {
        const response = await fetch('/api/guitars');
        const data = await response.json();
        console.log('Guitarras:', data);
        setGuitars(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }
    
    fetchGuitars();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % guitars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + guitars.length) % guitars.length);
  };

  if (loading) {
    return (
      <div className="relative w-full sm:w-4/5 md:w-3/5 max-w-[900px] h-[400px] sm:h-[450px] bg-gray-900 group mx-auto shadow-lg rounded-2xl overflow-hidden border border-gray-700">
        <p className="text-white">Loading guitarras...</p>
      </div>
    );
  }

  if (guitars.length === 0) {
    return (
      <div className="relative w-full sm:w-4/5 md:w-3/5 max-w-[900px] h-[400px] sm:h-[450px] bg-gray-900 group mx-auto shadow-lg rounded-2xl overflow-hidden border border-gray-700">
        <p className="text-white">There´s no guitars in stock</p>
      </div>
    );
  }

  const currentGuitar = guitars[currentIndex];

  return (
    
    <div className="relative w-full sm:w-4/5 md:w-3/5 max-w-[900px] h-[400px] sm:h-[450px] bg-gray-900 group mx-auto shadow-lg rounded-2xl overflow-hidden border border-gray-700">

      <img
        src={currentGuitar.imagen_url}
        alt={currentGuitar.nombre}
        className="w-full h-full object-cover"
      />
      
      <button
        onClick={prevSlide}
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition"
      >
        <ChevronRight size={32} />
      </button>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
        <h2 className="text-3xl font-bold">{currentGuitar.nombre}</h2>
        <p className="text-lg mt-2">{currentGuitar.descripcion}</p>
        {currentGuitar.precio && (
          <>
            <p className="text-2xl font-bold mt-2">
              ${parseFloat(currentGuitar.precio).toLocaleString()}
            </p>
          </>
        )}

        <div className="flex justify-end mt-3">
          <Link
            href={`/seemore/${currentGuitar.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
            See more
          </Link>
        </div>  
      </div>

      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded">
        {currentIndex + 1} / {guitars.length}
      </div>
    </div>
  );
}