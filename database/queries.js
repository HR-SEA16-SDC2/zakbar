const db = require(".");
const Cursor = require("pg-cursor");
//use cursor to pass large queries

const query = `
SELECT *
FROM questions
LIMIT 2
`;

(async () => {
	try {
		const client = await db.connect();
		const res = await client.query(query);

		for (let row of res.rows) {
			console.log(row);
		}
	} catch (err) {
		console.error(err);
	}
})();





//Functional  error first statement to retrieve query
// db.query(query, (err, res) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// 	for (let row of res.rows) {
// 		console.log(row);
// 	}
// 	db.end();
// });

//Promise based connection to pool
// pool.connect()
//     .then((client) => {
//         client.query(query)
//             .then(res => {
//                 for (let row of res.rows) {
//                     console.log(row);
//                 }
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//     })
//     .catch(err => {
//         console.error(err);
//     });

// const controllers = {

// 	getAllQuestions: () => {

// 		"SELECT * FROM questions LIMIT 20";
// 	}
// };


// module.exports = controllers;