module.exports = app => {
	const controller = require("../controllers/participants.controller.js");
	app.post("/participants", controller.create);
	app.get("/participants", controller.findAll);
	app.get("/participants/:userId", controller.findOne);
	app.put("/participants/:userId", controller.update);
	app.post("/participants/login", controller.login);
	app.post("/participants/logout", controller.logout);
	app.post("/participants/register", controller.register);
};
