let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

// let sql = `SELECT * FROM todos WHERE completed=?`;
// connection.query(sql, [true], (error, results, fields) => {
//   if (error) {
//     return console.error(error.message);
//   }
//   console.log(results);
// });

let id = process.argv[2]; // pass argument to query
let sql = `SELECT * FROM todos WHERE id=` + mysql.escape(id);

connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

connection.end();
