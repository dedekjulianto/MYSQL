let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

// update
let sql = `UPDATE todos
           SET completed = ?
           WHERE id = ?`;

let data = [false, 1];

connection.query(sql, data, (error, results, fields) =>{
  if (error) {
    return console.error(error.message);
  }
  console.log('Rows affected:', results.affectedRows);
});

connection.end();
