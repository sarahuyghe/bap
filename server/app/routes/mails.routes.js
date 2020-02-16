module.exports = app => {
	const controller = require("../controllers/mails.controller.js");
	app.post("/api/mails", controller.create);
	app.get("/api/mails", controller.findAll);
};
