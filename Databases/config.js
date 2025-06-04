// config.js
import mysql from 'mysql2';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Suriya@03',
  database: 'suriya',
});

db.connect(err => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
  console.log('Connected to MySQL database.');
});

export default db;
