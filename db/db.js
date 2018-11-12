const mysql = require('mysql');

const db_user = process.env.MYSQL_USER || 'root';
const db_pass = process.env.MYSQL_PASSWORD || 'password';

const connection = mysql.createConnection({
  host: 'topsectiondb',
  user: db_user,
  password: db_pass,
})

connection.connect((err) => {
  if (err) console.log(err)
});

connection.queryAsync = function(query, options){
  const thisPool = this;
  return new Promise((resolve, reject) => {
    thisPool.query(query, options, (err, results, fields) => {
      if(err) reject(err);
      else resolve(results, fields)
    });
  }); 
}
connection.queryAsync('CREATE DATABASE IF NOT EXISTS udemy;')
.then(() => connection.queryAsync('USE udemy;'))
.then(() => (
  connection.queryAsync(`
  CREATE TABLE IF NOT EXISTS courses (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      subtitle VARCHAR(255),
      teacher_names VARCHAR(255),
      avg_rating INT,
      rating_count INT,
      student_count INT,
      last_updated DATE,
      thumbnail_img TEXT,
      price INT,
      lang VARCHAR(255),
      subtitle_lang VARCHAR(255),
      course_len FLOAT,
      isOnDiscount BOOLEAN,
      current_price FLOAT,
      discount FLOAT,
      num_of_articles INT,
      dwl_resources_count INT,
      discountCountdown VARCHAR(12),
      hasTag BOOLEAN,
      tag VARCHAR(30)
    );
  `)
))
.catch((error) => console.log('error configuring db', error));
// let queryAsync = function (query, options = null) {
//   let connect = this;
//   return new Promise((resolve, reject) => {
//     connect.query(query, options, (err, results, fields) => {
//       if(err) reject(err);
//       else resolve(results, fields)
//     });
//   });
// };

// connection.on('connection', (error, connection) => {
  // if (error) console.log('error on.connection', error);
  // connection.getConnection((err, con) => {
  //   if (error) console.log('error getConneciton', err);
  //   else {
    // }
// });

module.exports = { connection };
