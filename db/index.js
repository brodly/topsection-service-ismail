const Knex = require('knex');
const { pg: config } = require('./config');

module.exports.pg = Knex({
  client: 'pg',
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
  pool: { min: 0, max: 7 },
});
