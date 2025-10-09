import Titulo from "@/components/titulo"

export default function Home() {
  return (
    <>

      
        <Titulo
        title="NewGate"
        subtitle="Guitars"
        tagline="Shipping Worldwide ✈️"
        showScrollIndicator={false}
        >
        {/* Puedes poner contenido adicional aquí si quieres */}
        <p className="text-white text-center mt-4">Custom Crafted Guitars 🎸</p>
        </Titulo>

      
    </>

    

  );
}
