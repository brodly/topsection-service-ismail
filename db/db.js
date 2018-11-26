const connection = require('./index');

connection((err) => {
  if (err) console.log(err);
});

connection.queryAsync = (query, options = null) => connection.raw(query, options);

connection.queryAsync("SELECT 1 FROM pg_database WHERE datname = 'udemy'")
  .then((res) => {
    if (res.rowCount === 1) throw res;
    else { return connection.queryAsync('CREATE DATABASE udemy'); }
  })
  .then(() => connection.migrate.latest())
  .then(() => {
    connection.destroy();
    console.log('Database created');
  })
  .catch(() => {
    connection.destroy();
    console.log("Database 'udemy' already exists");
  });

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

module.exports = connection;
