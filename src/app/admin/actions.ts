'use server'
import { revalidatePath } from 'next/cache';
import { saveInstrument, deleteInstrument, toggleStock } from '@/lib/guitarras';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function actionSave(formData: any) {
  await saveInstrument(formData);
  revalidatePath('/admin');
  revalidatePath('/tienda');
  // BORRAMOS EL redirect('/admin') DE ACÁ
}

export async function actionDelete(id: number) {
  await deleteInstrument(id);
  revalidatePath('/admin');
  revalidatePath('/tienda');
}

export async function actionToggleStock(id: number, estadoActual: boolean) {
  await toggleStock(id, estadoActual);
  revalidatePath('/admin');
  revalidatePath('/tienda');
}

export async function loginAction(formData: FormData) {
  const user = formData.get('user');
  const pass = formData.get('pass');

  // Estos valores los sacamos de las Variables de Entorno (.env)
  if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
    const cookieStore = await cookies();
    
    cookieStore.set('admin_session', 'true', {
      httpOnly: true, // Bloquea acceso desde JS del navegador por seguridad
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 60 * 60 * 24, // Dura 24 horas
      path: '/',
    });
    
    return { success: true };
  }
  
  return { success: false, message: "Usuario o clave incorrectos" };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  redirect('/login');
}