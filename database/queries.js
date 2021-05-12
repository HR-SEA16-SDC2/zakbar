const db = require(".");
const Cursor = require("pg-cursor");
//use cursor to pass large queries

const models = {

	getQuestions: async (req, res) => {
		const text =
		"select * from questions left join answers on questions.question_id = answers.question_id where product_id = $1 and questions.reported = false order by questions.question_id limit $2";
		//"SELECT * FROM questions WHERE product_id = $1 LIMIT $2";
		const values = [req.query.product_id, req.query.count];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	},

	getAnswers: async (req, res) => {
		const text = "SELECT * FROM answers WHERE product_id = $1 LIMIT $2";
		const values = [req.query.product_id, req.query.count];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	}


};



/*

-------------Functional error first query-------------
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

-------------Promise based query-------------
pool.connect()
    .then((client) => {
        client.query(query)
            .then(res => {
                for (let row of res.rows) {
                    console.log(row);
                }
            })
            .catch(err => {
                console.error(err);
            });
    })
    .catch(err => {
        console.error(err);
    });

*/

module.exports = models;