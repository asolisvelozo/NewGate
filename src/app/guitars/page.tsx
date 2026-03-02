import { Container } from "@/components/container";
import GuitarCarousel from "@/components/GuitarCarousel";
import { getGuitarsOK } from "@/lib/db";
export default async function Shop() {
  const guitars = await getGuitarsOK();

  return (
    <Container>

      <div className="flex justify-center pt-4 -mb-12 relative z-10"> 
        
        <img 
          src="/guitars.PNG" 
          alt="Guitarras" 
          className="h-40 sm:h-56 md:h-80 lg:h-96 object-contain opacity-0 animate-fadeInUp delay-200"
        />
        
      </div>

      <div className="flex justify-center opacity-0 animate-fadeInUp delay-1000 relative z-20">
        <GuitarCarousel initialGuitars={guitars} />
      </div>
    </Container>
  );
}