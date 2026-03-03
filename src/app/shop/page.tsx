import { Container } from "@/components/container";
import GuitarCarousel from "@/components/GuitarCarousel";
import { getGuitars } from "@/lib/db";
import Image from "next/image";

export default async function Shop() {
  const guitars = await getGuitars();

  return (
    <Container>
      <div className="flex flex-col items-center justify-center pt-0 -mt-[40px] md:-mt-[100px] -mb-[40px] md:-mb-[80px] opacity-0 animate-fadeInUp delay-200 relative z-0">
        <Image 
          src="/shop.PNG" 
          alt="Tienda NewGate Guitars"
          width={1000} 
          height={300} 
          className="w-[250px] sm:w-[400px] md:w-[600px] lg:w-[750px] h-auto object-contain drop-shadow-md" 
          priority 
        />
      </div>

      <div className="flex justify-center opacity-0 animate-fadeInUp delay-1000 relative z-10 -mt-[20px] md:-mt-[40px]">
        <GuitarCarousel initialGuitars={guitars} />
      </div>
    </Container>
  );
}