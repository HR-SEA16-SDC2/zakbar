const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const { listQuestions, helpfulQuestion, reportQuestion } = require("./controllers/questionControllers");
const { listAnswers, helpfulAnswer, reportAnswer } = require("./controllers/answerControllers");

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
	missing 2 app.post routes: questions and answers
	Need to continue developing answers pathways
	Decide on what to do with question/answer GET queries data model
	k6 implementation

*/