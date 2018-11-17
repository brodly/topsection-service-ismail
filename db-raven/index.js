const { DocumentStore } = require('ravendb');
const { host, port, database } = require('./config');

const store = new DocumentStore(`${host}:${port}`, 'test');

store.initialize();

const session = store.openSession();

const product = {
  title: 'iPhone X',
  price: 999.99,
  currency: 'USD',
  storage: 64,
  manufacturer: 'Apple',
  in_stock: true,
  last_update: new Date('2017-10-01T00:00:00'),
};

// const db = new CreateDatabaseOperation();
// console.log(db);

// console.log(db._databaseRecord);

// const databaseRecord = new ;
// databaseRecord.setDatabaseName('MyNewDatabase');
// store.maintenance().server().send();

session.store(product, 'product/1-B')
  .then(() => session.saveChanges())
  .catch((err) => { console.log('HEREsERROR:', err); });

// session.load('Users/1-A')
//   .then((user) => {
//     user.password = 'PBKDF2'('new password');
//   })
//   .then(() => session.saveChanges())
//   .then(() => {
//     // here session is complete
//   });

// let user = await store.load('users/1-A');
// user.password = PBKDF2('new password');
// await session.saveChanges();








// await session.store(product, 'products/');
// console.log(product.id); // Products/1-A
// await session.saveChanges();

// await session.load('products/1-A');
// console.log(product.title);    // iPhone X
// console.log(product.id);  

