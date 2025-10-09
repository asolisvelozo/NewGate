"use client";
import { Container } from "@/components/container";
import GuitarCarousel from "@/components/GuitarCarousel";

export default function Shop() {
  return (
    <>

      <Container>
        {/* Sección del título */}
        <div className="text-center pt-20">
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Guitars
          </h1>
        </div>

        {/* Carousel animado */}
        <div
          className="flex justify-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <GuitarCarousel />
        </div>
      </Container>

      {/* Animaciones */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </>
  );
}
