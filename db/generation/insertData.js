const path = require('path');
const { performance } = require('perf_hooks');
const db = require('../index');

const file = 'outputfile.csv';
const dir = path.join(__dirname, `../generation/${file}`);
let t0;
let t1;

const seed = () => {
  return new Promise((resolve, reject) => {
    db('courses')
      .then(() => { t0 = performance.now(); })
      .then(() => db.schema.raw(`COPY courses FROM '${dir}' WITH (FORMAT csv);`))
      .then(() => { t1 = performance.now(); })
      .then(() => { resolve(`Done! Seeding ${file} took ${t1 - t0} milliseconds`); });
  });
};

const dropTableIfExists = (name) => {
  db.schema.dropTableIfExists(name);
};

module.exports.seed = seed;
module.exports.dropTableIfExists = dropTableIfExists;
