const { user, password, database } = require('./config');
const { Client } = require('pg');
const pgp = require('pg-promise')

const client = new Client({
  host: 'localhost',
  user: `${user}`,
  password: `${password}`,
  database: `${database}`,
  port: 5432,
  max: 20,
});


// async function connect() {
//     const c = await client.connect(); // try to connect
//     return c.client.serverVersion; // return server version
// }
// connect()


client.connect((err) => {
  if (err) {
    console.error('connection error: ', err.stack);
  } else {
    console.log(`${user} connected to postgres database: ${database}`)
  }
});

//var connectionString = `postgres://${user}:${password}@localhost:5432/${database}`;

//
// const db=pgp(connectionString)
// async function testConnection() {
//   const c = await db.connect();
//   c.done();
//   return c.client.serverVersion;
// }

module.exports = client;
