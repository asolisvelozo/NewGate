
import { getGuitarById } from '@/lib/guitarras';
import InstrumentForm from './InstrumentForm';

// Le decimos a TypeScript que params es una Promesa
export default async function EditorPage({ params }: { params: Promise<{ id: string }> }) {
  // Ahora "esperamos" los params antes de sacar el id
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const isNew = id === 'nuevo';
  let data = null;

  if (!isNew) {
    data = await getGuitarById(id);
  }

  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-white pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 border-b border-zinc-800 pb-4">
          {isNew ? 'Nuevo Instrumento' : `Editando: ${data?.nombre}`}
        </h1>
        <InstrumentForm initialData={data} />
      </div>
    </div>
  );
}