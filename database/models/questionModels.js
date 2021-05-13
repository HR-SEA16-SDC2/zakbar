const db = require("../index");


const questionModels = {

	returnQuestions: async (req, res) => {
		const text =
		"select * from questions left join answers on questions.question_id = answers.question_id where product_id = $1 and questions.reported = false order by questions.question_id limit $2";
		const values = [req.query.product_id, req.query.count];
		try {
			const client = await db.connect();
			const res = await client.query(text, values);
			return res.rows;
		} catch (err) {
			console.error(err);
		}
	},

	// postQuestion: async (req, res) => {
	// 	const text =
	// 	"select * from questions left join answers on questions.question_id = answers.question_id where product_id = $1 and questions.reported = false order by questions.question_id limit $2";
	// 	//"SELECT * FROM questions WHERE product_id = $1 LIMIT $2";
	// 	const values = [req.query.product_id, req.query.count];
	// 	try {
	// 		const client = await db.connect();
	// 		const res = await client.query(text, values);
	// 		return res.rows;
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// },

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
