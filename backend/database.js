const mysql = require('mysql2/promise');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',      // Alapértelmezett XAMPP felhasználó
    password: '',      // Alapértelmezett XAMPP jelszó
    database: 'webshop_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


db.getConnection()
    .then(connection => {
        console.log('Sikeresen csatlakoztunk a MySQL-hez!');
        connection.release(); 
    })
    .catch(err => {
        console.error('Hiba az adatbázis csatlakozáskor:', err.message);
    });

module.exports = db;