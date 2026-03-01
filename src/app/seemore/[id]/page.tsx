import { getSpecifications } from "@/lib/db";
import { notFound } from "next/navigation";
import GuitarraDetalleContent from "@/components/GuitarraDetalleContent";

export default async function Page({ params }: { params: { id: string } }) {
  const guitarra = await getSpecifications(params.id);

  if (!guitarra) {
    notFound();
  }

  return <GuitarraDetalleContent guitarra={guitarra} />;
}