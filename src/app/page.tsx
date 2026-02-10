import Titulo from "@/components/titulo"

export default function Home() {
  return (
    <>
    
        <Titulo
          logoSrc="/lOGO-SOMBREADO.png" 
          tagline="Shipping Worldwide ✈️"
        >
          <p className="text-white text-center mt-4">Custom Crafted Guitars 🎸</p>
        </Titulo>
    </>
  );
}