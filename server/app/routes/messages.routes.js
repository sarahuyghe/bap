module.exports = app => {
	const controller = require("../controllers/messages.controller.js");
	app.post("/api/messages", controller.create);
	app.get("/api/messages", controller.findAll);
	app.get("/api/messages/:teamId", controller.findOne);
};
