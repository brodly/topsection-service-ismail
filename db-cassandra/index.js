const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'system',
});

const query = `CREATE KEYSPACE test01 WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1}`;

client.execute(query)
  .then((result) => { console.log(result, 'RESTUL'); })
  .catch(err => console.log(err));
