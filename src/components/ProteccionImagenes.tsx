'use client';
import { useEffect } from 'react';

export default function ProteccionImagenes() {
  useEffect(() => {
    // Escucha cada vez que alguien hace clic derecho
    const prevenirClicDerecho = (e: MouseEvent) => {
      // Si a lo que le hizo clic es una imagen, lo bloquea
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', prevenirClicDerecho);
    
    // Limpieza cuando se desmonta
    return () => {
      document.removeEventListener('contextmenu', prevenirClicDerecho);
    };
  }, []);

  // No renderiza absolutamente nada en la pantalla
  return null; 
}