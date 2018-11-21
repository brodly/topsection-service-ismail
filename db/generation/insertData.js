const path = require('path');
const db = require('../index');

const file = 'outputfile.csv';
const filepath = path.join(__dirname, file);

module.exports.seed = table => db.raw(`COPY ${table} FROM '${filepath}' WITH (FORMAT csv)`)
  .then(() => `Input ${file} into ${table}`)
  .catch(err => err);

module.exports.clearTable = table => db(table).del()
  .then(res => res)
  .catch(err => err);
