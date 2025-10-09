import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'NewGate',
  password: '98786',  
  port: 5432,
});

export default pool;