'use client'
import { useState } from 'react';
import { loginAction } from '@/app/admin/actions';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const res = await loginAction(formData);

    if (res.success) {
      router.push('/admin');
      router.refresh(); // Crucial para que el Middleware se entere del cambio
    } else {
      setError(res.message || 'Error al iniciar sesión');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white tracking-tighter">NEWGATE</h1>
            <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest">Panel de Control</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs py-3 px-4 rounded-lg text-center animate-shake">
                {error}
              </div>
            )}

            <div>
              <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">Usuario</label>
              <input 
                name="user" 
                type="text" 
                required 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none focus:border-blue-600 transition-all"
                placeholder="Admin user"
              />
            </div>

            <div>
              <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">Contraseña</label>
              <input 
                name="pass" 
                type="password" 
                required 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none focus:border-blue-600 transition-all"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'
              }`}
            >
              {loading ? 'INGRESANDO...' : 'INICIAR SESIÓN'}
            </button>
          </form>
        </div>
        
        <p className="text-center text-zinc-600 text-xs mt-8">
          &copy; 2026 NewGate Guitars - Custom Shop Argentina
        </p>
      </div>
    </div>
  );
}