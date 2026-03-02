import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'NewGate',
  password: '98786',  
  port: 5432,
});

export default pool;

// 1. Obtener todas las disponibles
export async function getGuitars() {
  try {
    const result = await pool.query('SELECT * FROM guitarras WHERE disponible=true');
    return result.rows; 
  } catch (error) {
    console.error('Error fetching guitars:', error);
    return []; 
  }
}

// 2. Corregido: Agregamos comillas simples a 'guitarra'
export async function getGuitarsOK() {
  try {
    const result = await pool.query("SELECT * FROM guitarras WHERE tipo='guitarra'");
    return result.rows; 
  } catch (error) {
    console.error('Error fetching guitars:', error);
    return []; 
  }
}

// 3. Corregido: Agregamos comillas simples a 'bajo'
export async function getBajos() {
  try {
    const result = await pool.query("SELECT * FROM guitarras WHERE tipo='bajo'");
    return result.rows; 
  } catch (error) {
    console.error('Error fetching basses:', error);
    return []; 
  }
}

// 4. FUNCIÓN CLAVE PARA EL DETALLE (Corregida)
export async function getSpecifications(id: string) {
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
        e.fotos -- <--- ¡ACÁ ESTABA EL ERROR! Faltaba esta columna
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