module.exports = app => {
	const controller = require("../controllers/mails.controller.js");
	app.post("/mails", controller.create);
	app.get("/mails", controller.findAll);
	// app.get("/mails/:userId", controller.findOne);
	// app.put("/mails/:userId", controller.update);
};
