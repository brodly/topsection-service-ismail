const fs = require('fs');
const faker = require('faker');
const fastcsv = require('fast-csv');

const writeStream = fs.createWriteStream('outputfile.csv');
fastcsv.pipe(writeStream);

const tempArray = [];

for (let i = 0; i < tempArray.length; i += 1) {
  fastcsv.write([tempArray[i]]);
}

fastcsv.end();
