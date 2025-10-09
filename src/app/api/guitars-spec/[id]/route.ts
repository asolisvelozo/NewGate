import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const result = await pool.query(
      `
      SELECT 
        g.id AS guitarra_id,
        g.nombre,
        g.precio,
        g.imagen_url,
        e.cuerpo,
        e.tapa,
        e.mastil,
        e.tastiera,
        e.inlay,
        e.clavijas,
        e.puente,
        e.mics,
        e.trastes,
        e.escala,
        e.circuito,
        e.detalle
      FROM guitarras g
      LEFT JOIN especificaciones_guitarra e ON g.id = e.guitarra_id
      WHERE g.id = $1;
    `,
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Guitarra no encontrada' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener guitarra:', error);
    return NextResponse.json(
      { error: 'Error al cargar guitarra' },
      { status: 500 }
    );
  }
}