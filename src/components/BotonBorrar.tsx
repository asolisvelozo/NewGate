'use client'
import { actionDelete } from '@/app/admin/actions';
import { useState } from 'react';

export default function BotonBorrar({ id, nombre }: { id: number, nombre: string }) {
  const [borrando, setBorrando] = useState(false);

  const handleBorrar = async () => {
    // Acá está la advertencia que querías jaja
    if (confirm(`¿Estás seguro de que querés borrar definitivamente "${nombre}"? Esta acción no se puede deshacer.`)) {
      setBorrando(true);
      try {
        await actionDelete(id);
      } catch (error) {
        alert("Hubo un error al intentar borrar.");
        setBorrando(false);
      }
    }
  };

  return (
    <button 
      onClick={handleBorrar}
      disabled={borrando}
      className={`text-red-500 hover:text-red-400 transition-colors font-medium ${borrando ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {borrando ? 'Borrando...' : 'Borrar'}
    </button>
  );
}