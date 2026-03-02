'use client'
import { useState } from 'react';
import { actionSave } from '@/app/admin/actions';
import { useRouter } from 'next/navigation'; // <-- Agregamos el router

export default function InstrumentForm({ initialData = null }: { initialData: any }) {
  const router = useRouter(); // <-- Inicializamos el router
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: initialData?.id || null,
    nombre: initialData?.nombre || '',
    descripcion: initialData?.descripcion || '',
    precio: initialData?.precio || '',
    imagen_url: initialData?.imagen_url || '',
    disponible: initialData?.disponible ?? true,
    tipo: initialData?.tipo || 'guitarra',
    serie: initialData?.serie || '',
    orden: initialData?.orden || '',
    // Specs
    cuerpo: initialData?.cuerpo || '',
    tapa: initialData?.tapa || '',
    mastil: initialData?.mastil || '',
    tastiera: initialData?.tastiera || '',
    inlay: initialData?.inlay || '',
    clavijas: initialData?.clavijas || '',
    puente: initialData?.puente || '',
    mics: initialData?.mics || '',
    trastes: initialData?.trastes || '',
    escala: initialData?.escala || '',
    circuito: initialData?.circuito || '',
    detalle: initialData?.detalle || '', // La pintura
  });

  const [fotos, setFotos] = useState<string[]>(initialData?.fotos || []);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const finalData = { ...formData, fotos: fotos.filter(f => f.trim() !== '') };
    
    try {
      await actionSave(finalData);
      // Redirigimos desde acá cuando la acción fue exitosa
      router.push('/admin'); 
    } catch (error) {
      alert("Error al guardar en la BD. Revisa la consola.");
      console.error(error); // Te dejo esto para que veas el error real si falla
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* SECCIÓN PRINCIPAL */}
      <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
        <h2 className="text-lg text-blue-400 mb-4">Datos Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
          <Input label="Precio (USD)" name="precio" type="number" value={formData.precio} onChange={handleChange} required />
          <Input label="Tipo" name="tipo" value={formData.tipo} onChange={handleChange} />
          <Input label="URL Foto Principal" name="imagen_url" value={formData.imagen_url} onChange={handleChange} />
          <Input label="Serie" name="serie" value={formData.serie} onChange={handleChange} />
          <Input label="Orden" name="orden" type="number" value={formData.orden} onChange={handleChange} />
          <div className="md:col-span-2">
            <label className="block text-xs text-zinc-400 mb-1">Descripción</label>
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} className="w-full bg-black border border-zinc-700 rounded p-2 text-white h-24" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" name="disponible" checked={formData.disponible} onChange={handleChange} className="w-5 h-5 accent-blue-600" />
            <label className="text-zinc-300">Disponible en Tienda</label>
          </div>
        </div>
      </div>

      {/* SECCIÓN ESPECIFICACIONES */}
      <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
        <h2 className="text-lg text-blue-400 mb-4">Especificaciones (Ficha Técnica)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input label="Cuerpo" name="cuerpo" value={formData.cuerpo} onChange={handleChange} />
          <Input label="Tapa" name="tapa" value={formData.tapa} onChange={handleChange} />
          <Input label="Mástil" name="mastil" value={formData.mastil} onChange={handleChange} />
          <Input label="Tastiera (Diapasón)" name="tastiera" value={formData.tastiera} onChange={handleChange} />
          <Input label="Inlay" name="inlay" value={formData.inlay} onChange={handleChange} />
          <Input label="Clavijas" name="clavijas" value={formData.clavijas} onChange={handleChange} />
          <Input label="Puente" name="puente" value={formData.puente} onChange={handleChange} />
          <Input label="Mics (Pastillas)" name="mics" value={formData.mics} onChange={handleChange} />
          <Input label="Trastes" name="trastes" value={formData.trastes} onChange={handleChange} />
          <Input label="Escala" name="escala" value={formData.escala} onChange={handleChange} />
          <Input label="Circuito" name="circuito" value={formData.circuito} onChange={handleChange} />
          <Input label="Detalle / Pintura" name="detalle" value={formData.detalle} onChange={handleChange} />
        </div>
      </div>

      {/* SECCIÓN GALERÍA */}
      <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
        <h2 className="text-lg text-blue-400 mb-4">Galería Extra (URLs)</h2>
        {fotos.map((f, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input value={f} onChange={e => { const arr = [...fotos]; arr[i] = e.target.value; setFotos(arr); }} className="flex-1 bg-black border border-zinc-700 rounded p-2 text-white text-sm" />
            <button type="button" onClick={() => setFotos(fotos.filter((_, idx) => idx !== i))} className="px-3 bg-red-900 text-white rounded font-bold hover:bg-red-800 transition-colors">X</button>
          </div>
        ))}
        <button type="button" onClick={() => setFotos([...fotos, ''])} className="text-blue-400 text-sm mt-2 font-bold hover:text-blue-300 transition-colors">+ Agregar URL</button>
      </div>

      <button disabled={loading} type="submit" className={`w-full bg-blue-600 text-white py-4 rounded font-bold text-lg hover:bg-blue-500 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {loading ? 'Guardando...' : 'GUARDAR INSTRUMENTO'}
      </button>
    </form>
  );
}

// Componente helper para no repetir tanto HTML
function Input({ label, name, value, onChange, type = "text", required = false }: any) {
  return (
    <div>
      <label className="block text-xs text-zinc-400 mb-1 font-bold">{label}</label>
      <input type={type} name={name} value={value || ''} onChange={onChange} required={required} className="w-full bg-black border border-zinc-700 rounded p-2 text-white text-sm focus:border-blue-500 outline-none transition-colors" />
    </div>
  );
}