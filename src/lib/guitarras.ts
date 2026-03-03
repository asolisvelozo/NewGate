import pool from './db'; 
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';

/* ==========================================
   FUNCIONES DE LECTURA (ADMIN)
   Usamos noStore() para que el panel siempre muestre el stock real.
   ========================================== */

export async function getGuitarsAdmin() {
  noStore();
  const res = await pool.query(`
    SELECT g.id, g.nombre, g.precio, g.disponible, g.tipo, g.imagen_url, e.detalle 
    FROM guitarras g
    LEFT JOIN especificaciones_guitarra e ON g.id = e.guitarra_id
    ORDER BY g.id DESC
  `);
  return res.rows;
}

export async function getGuitarById(id: string) {
  noStore();
  const res = await pool.query(`
    SELECT g.*, e.cuerpo, e.tapa, e.mastil, e.tastiera, e.inlay, e.clavijas, e.puente, e.mics, e.trastes, e.escala, e.circuito, e.detalle, e.fotos
    FROM guitarras g
    LEFT JOIN especificaciones_guitarra e ON g.id = e.guitarra_id
    WHERE g.id = $1
  `, [id]);
  return res.rows[0] || null;
}



export async function saveInstrument(data: any) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    let guitarraId = data.id;

    // Lógica para que el precio sea opcional:
    // Si data.precio es una cadena vacía (''), null o undefined, mandamos null a Postgres.
    const precioFinal = (data.precio === '' || data.precio == null) ? null : data.precio;

    if (guitarraId) {
      await client.query(
        `UPDATE guitarras SET nombre=$1, descripcion=$2, precio=$3, imagen_url=$4, disponible=$5, tipo=$6, serie=$7, orden=$8 WHERE id=$9`,
        [
          data.nombre, 
          data.descripcion || '', 
          precioFinal, // <--- Modificado aquí
          data.imagen_url || '', 
          data.disponible, 
          data.tipo || 'guitarra', 
          data.serie || null, 
          data.orden || null, 
          guitarraId
        ]
      );
      
      const checkSpecs = await client.query('SELECT id FROM especificaciones_guitarra WHERE guitarra_id = $1', [guitarraId]);
      
      if (checkSpecs.rows.length > 0) {
        await client.query(
          `UPDATE especificaciones_guitarra SET cuerpo=$1, tapa=$2, mastil=$3, tastiera=$4, inlay=$5, clavijas=$6, puente=$7, mics=$8, trastes=$9, escala=$10, circuito=$11, detalle=$12, fotos=$13 WHERE guitarra_id=$14`,
          [data.cuerpo, data.tapa, data.mastil, data.tastiera, data.inlay, data.clavijas, data.puente, data.mics, data.trastes, data.escala, data.circuito, data.detalle, data.fotos || [], guitarraId]
        );
      } else {
        await client.query(
          `INSERT INTO especificaciones_guitarra (guitarra_id, cuerpo, tapa, mastil, tastiera, inlay, clavijas, puente, mics, trastes, escala, circuito, detalle, fotos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
          [guitarraId, data.cuerpo, data.tapa, data.mastil, data.tastiera, data.inlay, data.clavijas, data.puente, data.mics, data.trastes, data.escala, data.circuito, data.detalle, data.fotos || []]
        );
      }
    } else {
      const resG = await client.query(
        `INSERT INTO guitarras (nombre, descripcion, precio, imagen_url, disponible, tipo, serie, orden) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
        [
          data.nombre, 
          data.descripcion || '', 
          precioFinal, // <--- Modificado aquí
          data.imagen_url || '', 
          data.disponible ?? true, 
          data.tipo || 'guitarra', 
          data.serie || null, 
          data.orden || null
        ]
      );
      guitarraId = resG.rows[0].id;
      
      await client.query(
        `INSERT INTO especificaciones_guitarra (guitarra_id, cuerpo, tapa, mastil, tastiera, inlay, clavijas, puente, mics, trastes, escala, circuito, detalle, fotos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
        [guitarraId, data.cuerpo, data.tapa, data.mastil, data.tastiera, data.inlay, data.clavijas, data.puente, data.mics, data.trastes, data.escala, data.circuito, data.detalle, data.fotos || []]
      );
    }
    
    await client.query('COMMIT');

    revalidatePath('/tienda');
    revalidatePath('/admin');
    revalidatePath('/bajos');
    revalidatePath(`/seemore/${guitarraId}`);

  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}
export async function deleteInstrument(id: number) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('DELETE FROM especificaciones_guitarra WHERE guitarra_id = $1', [id]);
    await client.query('DELETE FROM guitarras WHERE id = $1', [id]);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }

  // Limpiamos el rastro de la guitarra borrada
  revalidatePath('/tienda');
  revalidatePath('/admin');
  revalidatePath('/bajos');
}

export async function toggleStock(id: number, estadoActual: boolean) {
  const client = await pool.connect();
  try {
    await client.query('UPDATE guitarras SET disponible = $1 WHERE id = $2', [!estadoActual, id]);
    
    // Forzamos la actualización de la visibilidad en la tienda
    revalidatePath('/tienda');
    revalidatePath('/admin');
    revalidatePath('/bajos');
  } finally {
    client.release();
  } 
}