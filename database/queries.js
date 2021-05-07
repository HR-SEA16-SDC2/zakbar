const db = require(".");


const query = `
SELECT *
FROM questions
LIMIT 20
`;

db.query(query, (err, res) => {
	if (err) {
		console.error(err);
		return;
	}
	for (let row of res.rows) {
		console.log(row);
	}
	db.end();
});


// const controllers = {

// 	getAllQuestions: () => {

// 		"SELECT * FROM questions LIMIT 20";
// 	}
// };


// module.exports = controllers;