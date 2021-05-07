const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const queries = require("../database/queries");

//Middleware
app.use(morgan("tiny"));
app.use(express.json());

app.get("/qa/questions/${productId}", async function(req, res) {
	try {
		const allQuestions = await queries.getAllQuestions();
		res.status(200).send(allQuestions);
	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
});


app.listen(PORT, () => {
	console.log(`Server is running and listening on port ${PORT}`);
});
