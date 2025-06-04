// config.js
import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'blonjf65e90feiaidpdk-mysql.services.clever-cloud.com',
  user: 'u4jetu8hwfrlgjnm',
  password: 'ZptkFUlIvisKxpfxiJ2F',
  database: 'blonjf65e90feiaidpdk',
});

db.connect(err => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
  console.log('Connected to MySQL database.');
});

export default db;
