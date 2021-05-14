const {
	returnQuestions,
	postQuestion,
	updateHelpfulQuestion,
	updateReportQuestion
} = require("../../database/models/questionModels");

async function listQuestions (req, res) {
	try {
		console.log("Hit questions endpoint");
		const allQuestions = await returnQuestions(req, res);
		console.log(allQuestions);
		res.status(200).send(allQuestions);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
}

async function addQuestion (req, res) {
	try {
		console.log("Hit questions endpoint");
		await postQuestion(req, res);
		res.sendStatus(200);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
}

async function helpfulQuestion(req, res) {
	try {
		console.log("Hit helpful questions endpoint");
		await updateHelpfulQuestion(req, res);
		res.sendStatus(200);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
}

async function reportQuestion (req, res) {
	try {
		console.log("Hit questions endpoint");
		await updateReportQuestion(req, res);
		res.sendStatus(200);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
}

module.exports = {
	listQuestions,
	addQuestion,
	helpfulQuestion,
	reportQuestion
};