const { returnQuestions } = require("../../database/models/questionModels");

async function listQuestions (req, res) {
	try {
		console.log("Hit questions endpoint");
		const allQuestions = await returnQuestions(req, res);
		res.status(200).send(allQuestions);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
}

module.exports = {
	listQuestions
};