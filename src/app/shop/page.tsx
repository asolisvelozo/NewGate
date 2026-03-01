import { Container } from "@/components/container";
import GuitarCarousel from "@/components/GuitarCarousel";
import { getGuitars } from "@/lib/db";

export default async function Shop() {
  const guitars = await getGuitars();

  return (
    <Container>
      <div className="text-center pt-20">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-8 opacity-0 animate-fadeInUp delay-200">
          Guitars
        </h1>
      </div>

      <div className="flex justify-center opacity-0 animate-fadeInUp delay-1000">
        <GuitarCarousel initialGuitars={guitars} />
      </div>
    </Container>
  );
}