const mysql = require('mysql2');

const pool = mysql.pool( {
    host: 'localhost',
    user: 'root',
    database: 'ledger',
    password:'Nitin@123'
});

module.exports = pool.promise();


