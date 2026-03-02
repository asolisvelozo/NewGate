import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('admin_session');
  const { pathname } = request.nextUrl;

  // Si alguien quiere entrar al admin pero no tiene la cookie
  if (pathname.startsWith('/admin') && !authCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si ya está logueado y quiere volver a ver el login
  if (pathname === '/login' && authCookie) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Solo aplicamos el patovica a estas rutas
  matcher: ['/admin/:path*', '/login'],
};