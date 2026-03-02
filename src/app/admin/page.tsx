import { getGuitarsAdmin } from '@/lib/guitarras';
import { actionToggleStock, logoutAction } from '@/app/admin/actions'; // <-- IMPORTAMOS LOGOUT
import Link from 'next/link';
import BotonBorrar from '@/components/BotonBorrar';
export default async function AdminDashboard() {
  const instrumentos = await getGuitarsAdmin();

  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-white pt-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Gestión de Catálogo</h1>
            
            {/* --- BOTÓN DE CERRAR SESIÓN --- */}
            <form action={logoutAction}>
              <button 
                type="submit" 
                className="text-zinc-500 hover:text-red-400 text-xs uppercase tracking-widest font-bold transition-colors border border-zinc-800 px-2 py-1 rounded"
              >
                Cerrar Sesión
              </button>
            </form>
          </div>

          <Link href="/admin/editor/nuevo" className="bg-blue-600 px-4 py-2 rounded font-bold hover:bg-blue-500 transition-colors">
            + Agregar Instrumento
          </Link>
        </div>

        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-800 text-zinc-400">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Nombre</th>
                <th className="p-4">Precio</th>
                <th className="p-4">Stock / Estado</th>
                <th className="p-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {instrumentos.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-800/50 transition-colors">
                  <td className="p-4 text-zinc-500 font-mono">{item.id}</td>
                  <td className="p-4 font-medium">{item.nombre}</td>
                  <td className="p-4 font-mono text-blue-400">${item.precio}</td>
                  
                  <td className="p-4">
                    <form action={async () => {
                      'use server';
                      await actionToggleStock(item.id, item.disponible);
                    }}>
                      <button 
                        type="submit" 
                        className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                          item.disponible 
                          ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20 border border-green-500/20' 
                          : 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700 border border-zinc-700'
                        }`}
                      >
                        {item.disponible ? '✅ Visible' : '❌ Oculto'}
                      </button>
                    </form>
                  </td>

                  <td className="p-4 text-right flex justify-end gap-6 items-center">
                    <Link href={`/admin/editor/${item.id}`} className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                      Editar
                    </Link>
                    
                    <BotonBorrar id={item.id} nombre={item.nombre} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {instrumentos.length === 0 && (
            <div className="p-8 text-center text-zinc-500">
              No hay instrumentos cargados todavía.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}