const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useFindAndModify: false
	})
	.then(() => console.log("db connected"))
	.catch(e => {
		console.log("Error, exiting", e);
		process.exit();
	});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.json({ message: "up and first running" });
});

require("./app/routes/teams.routes.js")(app);
require("./app/routes/participants.routes.js")(app);
require("./app/routes/messages.routes.js")(app);

app.listen(process.env.PORT, () => {
	console.log(`Server luistert op poort ${process.env.PORT}`);
});
