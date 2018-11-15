const path = require('path');
const { pg: connection } = require('./db/config');

module.exports = {
  development: {
    client: 'pg',
    connection,
    migrations: {
      tableName: 'courses',
      directory: path.join(__dirname, '/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection,
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  // production: {
  //   client: 'postgresql',
  //   connection,
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
};
