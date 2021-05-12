const { user, password, database } = require("./config");
const { Pool } = require("pg");

const config = {
	host: "localhost",
	user: `${user}`,
	password: `${password}`,
	database: `${database}`,
	port: 5432,
	max: 20,
	idleTimeoutMillis: 30000
};

const pool = new Pool(config);

(async function() {
	const client = await pool.connect();
	await console.log(`${user} connected to postgres database: ${database}`);
	client.release();
})();


pool.on("error", (err, client) => {
	console.error("Error:", err);
});

module.exports = pool;





/*
-------------Error first pool connection-------------
pool.connect((err) => {
	if (err) {
		console.error("connection error: ", err.stack);
	} else {
		console.log(`${user} connected to postgres database: ${database}`);
	}
});

-------------Async connection-------------
async function connect() {
    const c = await client.connect(); // try to connect
    return c.client.serverVersion; // return server version
}
connect()

-------------Postgres connection string template-------------
var connectionString = `postgres://${user}:${password}@localhost:5432/${database}`;

-------------pgp package based connection-------------
const db=pgp(connectionString)
async function testConnection() {
  const c = await db.connect();
  c.done();
  return c.client.serverVersion;
}

export - no model, need to extract queries, helper function to generate the queries.
*/