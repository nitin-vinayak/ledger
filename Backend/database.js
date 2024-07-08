const mysql = require('mysql2');

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'ledger',
   password: 'Nitin@123'
});

db.connect((err) => {
   if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
   }
   console.log('Connected to database.');
});

module.exports = db;
