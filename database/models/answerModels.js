const db = require("../index");

const answerModels = {

	returnAnswers: async (req, res) => {
		const text =
		"select * from answers left join answers on questions.question_id = answers.question_id where product_id = $1 and questions.reported = false order by questions.question_id limit $2";
		const values = [req.query.product_id, req.query.count];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	},


	postAnswer: async (req, res) => {
		const text =
		"	INSERT INTO answers (question_id, body, answerer_name, answerer_email) VALUES ($1, $2, $3, $4)";
		const values = [req.query.question_id, req.body, req.answerer_name, req.answerer_email];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	},

	updateHelpfulAnswer: async (req, res) => {
		const text =
		"UPDATE answer SET helpful = helpful + 1 WHERE answer_id = $1";
		const values = [req.query.answer_id];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	},

	updateReportAnswer: async (req, res) => {
		const text =
		"UPDATE answer SET reported = true WHERE answer_id = $1";
		const values = [req.query.answer_id];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	}


};

module.exports = answerModels;