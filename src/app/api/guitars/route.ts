import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM guitarras'
    );
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching guitars:', error);
    return NextResponse.json(
      { error: 'Error al cargar guitarras' },
      { status: 500 }
    );
  }
}