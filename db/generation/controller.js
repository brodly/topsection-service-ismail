/* eslint-disable no-console */

const fs = require('fs');
const Promise = require('bluebird');
const generateData = require('./generateData');
const { seed, clearTable } = require('./insertData');
const db = require('../index');

const amountPerGeneration = 100;
const maxItems = 500;
const table = 'courses';
const file = 'outputfile.csv';

let start = 0;
let end = amountPerGeneration;

const promiseWhile = (condition, action) => {
  const resolver = Promise.defer();
  const loop = () => {
    if (!condition()) return resolver.resolve();
    return Promise.cast(action())
      .then(loop)
      .catch(resolver.reject);
  };
  process.nextTick(loop);
  return resolver.promise;
};

clearTable(table)
  .then((res) => { console.log(`Deleted ${res} rows in ${table}`); });

promiseWhile(() => end <= maxItems, () => {
  return generateData(start, end)
    .then((res) => { console.log(res); })
    .then(() => seed(table))
    .then((res) => { console.log(res); })
    .then(() => {
      start += amountPerGeneration;
      end += amountPerGeneration;
    })
    .catch((err) => { throw err; });
})
  .then(() => {
    db.destroy();
    console.log(`Completed seeding '${table}' with ${maxItems} items`);
  });
