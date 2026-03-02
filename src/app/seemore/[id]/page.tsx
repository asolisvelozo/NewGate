import { getSpecifications } from "@/lib/db";
import { notFound } from "next/navigation";
import GuitarraDetalleContent from "@/components/GuitarraDetalleContent";

// Forzamos que la página sea dinámica para que consulte a Neon en cada carga
export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  // 1. "Desenvolvemos" la promesa de params
  const resolvedParams = await params;
  
  // 2. Ahora sí usamos el ID para buscar en la base de datos
  const guitarra = await getSpecifications(resolvedParams.id);

  if (!guitarra) {
    notFound();
  }

  return <GuitarraDetalleContent guitarra={guitarra} />;
}