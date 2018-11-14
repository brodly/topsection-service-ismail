const knex = require('knex');
const { Pool, Client } = require('pg');
const config = require('./config');

const db = knex();

const connection = {
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
};

db({
  client: 'pg',
  version: '7.2',
  connection,
});

const pool = new Pool(connection);
const client = new Client(connection);

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

module.exports.pool = pool;
module.exports.client = client;
