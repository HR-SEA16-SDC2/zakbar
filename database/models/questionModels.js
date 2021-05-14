const db = require("../index");

const questionModels = {

	returnQuestions: async (req, res) => {
		const text =
		//"select * from questions left join answers on questions.question_id = answers.question_id where product_id = $1 and questions.reported = false order by questions.question_id limit $2";
		"select * from questions where product_id = 10 limit 2";
		const values = [req.query.product_id, req.query.count];
		console.log(values);
		try {
			const client = await db.connect();
			const res = await client.query(text);
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	},

	postQuestion: async (req, res) => {
		const text =
		"INSERT INTO questions (product_id, body, asker_name, asker_email) VALUES ($1, $2, $3, $4)";
		const values = [req.query.product_id, req.body, req.asker_name, req.asker_email];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	},

	updateHelpfulQuestion: async (req, res) => {
		const text =
		"UPDATE questions SET helpful = helpful + 1 WHERE question_id = $1";
		const values = [req.query.question_id];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	},

	updateReportQuestion: async (req, res) => {
		const text =
		"UPDATE questions SET reported = true WHERE question_id = $1";
		const values = [req.query.question_id];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	}

};

module.exports = questionModels;
