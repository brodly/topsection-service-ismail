const Knex = require('knex');
const connection = require('./config');

module.exports = Knex({
  client: 'pg',
  connection,
  pool: { min: 0, max: 7 },
});
