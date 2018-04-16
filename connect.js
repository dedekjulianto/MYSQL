// CREATE DATABASE todoapp;
// Import mysql module
let mysql = require('mysql');

// connect to the MYSQL server
connection.connect(function(err){
  if (err) {
    return console.error('error: '+ err.message);
  }

  let createTodos = `create table if not exists todos(
                        id int primary key auto_increment,
                        title varchar(225) not null,
                        completed tinyint(1) not null default 0
                    )`;
  // console.log('Succes Create Table');
  connection.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  connection.end(function(err){
    if (err) {
      return console.log(err.message);
    }
  });
});

// connection.end(function(err){
//   if (err) {
//     return console.log('error:' + err.message);
//   }
//   console.log('Close the database connection');
// });

// connection.destroy();

// var pool = mysql.createPool({
//   connectionLimit: 5,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'todoapp'
// });
//
// pool.getConnection(function(err, connection){
//   connection.release();
// });
//
// pool.end(function(err) {
//   if (err) {
//     return console.log(err.message);
//   }
// });
