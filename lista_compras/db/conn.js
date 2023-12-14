const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Sen@iDev77!.',
    database: 'lista_compras'
})

conn.connect((err) =>{
    if(err) {
        console.error(err);

    }
    
    console.log("Mysql conectado")
});

module.exports = conn;