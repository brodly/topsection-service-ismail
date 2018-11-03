const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
})

connection.connect();

const queryAsync = function (query, options = null) {
  return new Promise((resolve, reject) => {
    connection.query(query, options, (err, results, fields) => {
      if(err) reject(err);
      else resolve(results, fields)
    });
  });
}

module.exports = { connection, queryAsync };
