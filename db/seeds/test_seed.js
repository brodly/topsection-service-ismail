const faker = require('faker');
const path = require('path');

const file = path.join(__dirname, '../generation/outputfile.csv');
console.log(file);

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(() => {
      // Inserts seed entries
      return knex.schema.raw(`COPY courses FROM ${file} WITH (FORMAT csv);`);

      // return knex('courses').insert({
      //   title: `${faker.hacker.verb()} ${faker.name.jobTitle()}`,
      //   subtitle: 'This course will teach you ALL you need about this job, so you can be armed with all the knowledge you need!',
      //   teacher_names: 'Ismail Alarmouti',
      //   avg_rating: 4,
      //   rating_count: 10,
      //   student_count: 10,
      //   last_updated: faker.date.recent(),
      //   thumbnail_img: faker.image.imageUrl(),
      //   price: Math.floor(faker.commerce.price()),
      //   lang: 'English',
      //   subtitle_lang: 'Spanish',
      //   course_len: 20,
      //   isOnDiscount: true,
      //   current_price: 200,
      //   discount: 10,
      //   num_of_articles: 82,
      //   dwl_resources_count: 35,
      //   discountCountdown: '4 days',
      //   hasTag: true,
      //   tag: 'HOT',
      // });
    });
};
