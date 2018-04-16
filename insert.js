let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

// insert statment
let sql = `INSERT INTO todos(title,completed)
           VALUE('Learn how to insert a new row',true)`;

connection.query(sql);

// insert with insertId
let stmt = `INSERT INTO todos(title,completed)
            VALUES(?,?)`;
let todo = ['Insert a new row with placeholders', false];

connection.query(stmt, todo, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Todo Id:' + results.insertId);
});

// insert with affectedRows
let statment = `INSERT INTO todos(title,completed) VALUES ? `;
let todos = [
  ['Insert multiple rows at a time',false],
  ['It should work perfectly', true]
];

connection.query(statment, [todos], (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Row inserted:' + results.affectedRows);
});

connection.end();
