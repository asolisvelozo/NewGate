import { Container } from "@/components/container";
import GuitarCarousel from "@/components/GuitarCarousel";
import { getGuitars } from "@/lib/db";
import Image from "next/image";

export default async function Shop() {
  const guitars = await getGuitars();

  return (
    <Container>
      {/* EL TIRÓN DEFINITIVO: Valores en px forzados para que suba ignorando al Container */}
      <div className="flex flex-col items-center justify-center pt-0 -mt-[80px] md:-mt-[150px] -mb-[60px] md:-mb-[120px] opacity-0 animate-fadeInUp delay-200 relative z-0">
        <Image 
          src="/shop.PNG" 
          alt="Tienda NewGate Guitars"
          width={1000} 
          height={300} 
          className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-contain drop-shadow-md scale-110" 
          priority 
        />
      </div>

      {/* También acercamos el carrusel a la imagen a la fuerza */}
      <div className="flex justify-center opacity-0 animate-fadeInUp delay-1000 relative z-10 -mt-[20px] md:-mt-[40px]">
        <GuitarCarousel initialGuitars={guitars} />
      </div>
    </Container>
  );
}