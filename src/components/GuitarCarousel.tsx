import Link from 'next/link';

interface Guitar {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen_url: string;
  disponible: boolean;
}

export default function GuitarCarousel({ initialGuitars }: { initialGuitars: Guitar[] }) {
  if (!initialGuitars || initialGuitars.length === 0) {
    return (
      <div className="w-full py-20 flex justify-center">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center shadow-lg w-full sm:w-4/5 md:w-3/5 max-w-[900px]">
          <p className="text-white">There's no guitars in stock</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {initialGuitars.map((guitar, index) => (
          <div 
            key={guitar.id} 
            className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col group opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            
            <div className="w-full h-[250px] overflow-hidden bg-black">
              <img
                src={guitar.imagen_url}
                alt={guitar.nombre}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-white mb-2">{guitar.nombre}</h2>
              
              <p className="text-lg text-gray-300 mb-6 line-clamp-2">
                {guitar.descripcion}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                {guitar.precio && (
                  <p className="text-2xl font-bold text-white">
                    ${parseFloat(guitar.precio).toLocaleString()}
                  </p>
                )}
                
                <Link
                  href={`/seemore/${guitar.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Ver más
                </Link>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}