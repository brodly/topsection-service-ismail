exports.seed = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('test', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('channel').notNullable();
    table.string('genre').notNullable();
    table.integer('rating').notNullable();
    table.boolean('explicit').notNullable();
  });
  // return knex('shows').del()
  //   .then(() => knex('shows').insert([
  //     { id: 1, colName: 'rowValue1' },
  //     { id: 2, colName: 'rowValue2' },
  //     { id: 3, colName: 'rowValue3' },
  //   ]));
};
