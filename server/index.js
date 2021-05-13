const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const queries = require("../database/queries");
const { listQuestions, helpfulQuestion, reportQuestion } = require("./controllers/questionControllers");
const { listAnswers, helpfulAnswer, reportAnswer } = require("./controllers/answerControllers");

//Middleware
app.use(morgan("tiny"));
app.use(express.json());

app.get("/qa/questions/", listQuestions);
app.get("/qa/questions/:question_id/answers", listAnswers);

app.put("/qa/questions/:question_id/helpful", helpfulQuestion);
app.put("/qa/questions/:question_id/report", reportQuestion);
app.put("/qa/answers/:answer_id/helpful", helpfulAnswer);
app.put("/qa/answers/:answer_id/report", reportAnswer);


app.listen(PORT, () => {
	console.log(`Server is running and listening on port ${PORT}`);
});

/*
controller object
creation of array in queries js file

GET /qa/questions
ProductID -> questions, answers

GET /qa/questions/:question_id/answers
QuestionID -> answer

POST /qa/questions
QuestionID -> questions

POST /qa/questions/:question_id/answers
QuestionID -> answers

PUT /qa/questions/:question_id/helpful

PUT /qa/questions/:question_id/report

PUT /qa/answers/:answer_id/helpful

PUT /qa/answers/:answer_id/report

Model all operations on the data
Controller - call all model methods to get data ready to be passed
*/
// app.get("/qa/:question_id/answers", async function (req, res) {
// 	try {
// 		console.log("Hit answers endpoint");
// 		const allAnswers = await queries.getAnswers(req, res);
// 		res.status(200).send(allAnswers);
// 	} catch (e) {
// 		console.error(e);
// 		res.status(500).send(e);
// 	}
// });