import { Pool } from 'pg';
import { unstable_noStore as noStore } from 'next/cache';

const pool = new Pool(
  process.env.NODE_ENV === 'production'
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false, 
        },
      }
    : {
        user: 'postgres',
        host: 'localhost',
        database: 'NewGate',
        password: '98786',
        port: 5432,
      }
);

export default pool;

export async function getGuitars() {
  noStore(); // Fuerza a que Next.js 15 busque datos frescos
  try {
    const result = await pool.query('SELECT * FROM guitarras WHERE disponible=true');
    return result.rows; 
  } catch (error) {
    console.error('Error fetching guitars:', error);
    return []; 
  }
}

export async function getGuitarsOK() {
  noStore(); // Evita que aparezcan instrumentos borrados
  try {
    const result = await pool.query("SELECT * FROM guitarras WHERE tipo='guitarra'");
    return result.rows; 
  } catch (error) {
    console.error('Error fetching guitars:', error);
    return []; 
  }
}

export async function getBajos() {
  noStore();
  try {
    const result = await pool.query("SELECT * FROM guitarras WHERE tipo='bajo'");
    return result.rows; 
  } catch (error) {
    console.error('Error fetching basses:', error);
    return []; 
  }
}

export async function getSpecifications(id: string) {
  noStore();
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
        e.detalle,
        e.fotos
      FROM guitarras g
      LEFT JOIN especificaciones_guitarra e ON g.id = e.guitarra_id
      WHERE g.id = $1;
    `,
      [id]
    );

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
    
  } catch (error) {
    console.error('Error al obtener guitarra en LIB:', error);
    throw error; 
  }
}