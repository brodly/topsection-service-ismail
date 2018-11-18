/* eslint-disable no-console */

const Promise = require('bluebird');
const { performance } = require('perf_hooks');
const generateData = require('./generateData');
const { seed, clearTable } = require('./insertData');

const amountPerGeneration = 10000;
const maxItems = 30000;
const table = 'courses';

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

const t0 = performance.now();

clearTable(table);

promiseWhile(() => end <= maxItems, () => generateData(start, end)
  .then((res) => { console.log(res); })
  .then(() => seed(table))
  .then((res) => { console.log(res); })
  .then(() => {
    start += amountPerGeneration;
    end += amountPerGeneration;
  })
  .catch(err => console.error('ERROR: ', err)))
  .then(() => console.log(`Completed seeding '${table}' with ${maxItems} items`))
  .then(() => {
    const t1 = performance.now();
    console.log(`Done! Total data generation and seeding took ${t1 - t0} milliseconds`);
  });
