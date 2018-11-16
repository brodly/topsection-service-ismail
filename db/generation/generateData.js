const fs = require('fs');
const { performance } = require('perf_hooks');
const faker = require('faker');
const csv = require('fast-csv');

const dataPoints = 10000000;
const csvStream = csv.createWriteStream({ headers: false });
const writableStream = fs.createWriteStream('outputfile.csv');

const t0 = performance.now();

csvStream.pipe(writableStream);

for (let i = 0; i < dataPoints; i += 1) {
  const studentCount = faker.random.number();
  const ratingCount = Math.floor(studentCount * 0.4);
  const randomBinary = () => Math.floor(Math.random() * 2);
  const fullName = () => `${faker.name.firstName()} ${faker.name.lastName()}`;
  const { random } = Math;
  const { floor } = Math;

  const seedObj = {
    id: i,
    title: `${faker.hacker.verb()} ${faker.name.jobTitle()}`,
    subtitle: 'This course will teach you ALL you need about this job, so you can be armed with all the knowledge you need!',
    teacher_names: `${fullName()}`,
    avg_rating: floor(random() * 5),
    rating_count: ratingCount,
    student_count: studentCount,
    last_updated: randomBinary() ? faker.date.recent().toJSON() : faker.date.past().toJSON(),
    price: floor(faker.commerce.price()),
    lang: randomBinary() ? 'English' : 'Spanish',
    subtitle_lang: randomBinary() ? 'Spanish' : 'Arabic',
    course_len: Number((random() * 50).toFixed(2)),
    isOnDiscount: Boolean(randomBinary()),
    current_price: Number((10 + random() * 20).toFixed(2)),
    discount: Number(random().toFixed(2)),
    num_of_articles: floor(random() * 200),
    dwl_resources_count: floor(random() * 200),
    discountCountdown: `${floor(random() * 10)} days`,
    hasTag: Boolean(randomBinary()),
    tag: randomBinary() ? 'BESTSELLER' : 'NEW!',
    thumbnail_img: faker.image.imageUrl(),
  };
  csvStream.write(seedObj);
}

csvStream.end();

const t1 = performance.now();

writableStream.on('finish', () => {
  // eslint-disable-next-line no-console
  console.log(`Done! Call to generateData took ${t1 - t0} milliseconds with ${dataPoints} data points`);
});
