const {
	returnAnswers,
	updateHelpfulAnswer,
	updateReportAnswer
} = require("../../database/models/answerModels");

async function listAnswers (req, res) {
	try {
		console.log("Hit answers endpoint");
		const allAnswers = await returnAnswers(req, res);
		res.status(200).send(allAnswers);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
}

async function helpfulAnswer(req, res) {
	try {
		console.log("Hit helpful Answer endpoint");
		await updateHelpfulAnswer(req, res);
		res.sendStatus(200);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
}

async function reportAnswer (req, res) {
	try {
		console.log("Hit Answer endpoint");
		await updateReportAnswer(req, res);
		res.sendStatus(200);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
}

module.exports = {
	listAnswers,
	helpfulAnswer,
	reportAnswer
};