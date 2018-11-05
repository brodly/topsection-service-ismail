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

queryAsync('CREATE DATABASE IF NOT EXISTS udemy;')
.then(() => queryAsync('USE udemy;'))
.then(() => {
  queryAsync(`
   CREATE TABLE IF NOT EXISTS courses (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR (255),
      subtitle VARCHAR (255),
      teacher_name VARCHAR (255),
      avg_rating INT,
      rating_count INT,
      student_count INT,
      last_updated DATE,
      thumbnail_img TEXT,
      price INT,
      lang VARCHAR(255),
      subtitle_lang VARCHAR(255),
      course_len INT
   );
  `)
});

module.exports = { connection, queryAsync };
