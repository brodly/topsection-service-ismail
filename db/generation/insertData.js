const path = require('path');
const { performance } = require('perf_hooks');
const db = require('../index');

const file = 'outputfile.csv';
const filepath = path.join(__dirname, file);

let t0;
let t1;

const seed = table => new Promise((resolve, reject) => db(table)
  .then(() => { t0 = performance.now(); })
  .then(() => db.schema.raw(`COPY ${table} FROM '${filepath}' WITH (FORMAT csv)`))
  .then(() => { t1 = performance.now(); })
  .then(() => resolve(`Done! Seeding ${file} took ${t1 - t0} milliseconds`))
  .catch(err => reject(err)));

const clearTable = (table) => { db(table).del(); };

module.exports.seed = seed;
module.exports.clearTable = clearTable;
