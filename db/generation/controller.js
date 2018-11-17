const Promise = require('bluebird');
const generateData = require('./generateData');
const { seed, dropTableIfExists } = require('./insertData');

const amountPerGeneration = 1000000;
const maxItems = 3000000;
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

dropTableIfExists(table);

promiseWhile(() => start < maxItems, () => {
  return generateData(start, end)
    .then((res) => { console.log(res); })
    .then(() => seed())
    .then((res) => { console.log(res); })
    .then(() => {
      start += amountPerGeneration;
      end += amountPerGeneration;
    });
});
