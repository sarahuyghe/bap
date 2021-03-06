module.exports = app => {
	const controller = require("../controllers/participants.controller.js");
	app.post("/api/participants", controller.create);
	app.get("/api/participants", controller.findAll);
	app.get("/api/participants/:teamId", controller.findAllTeamId);
	app.get("/api/participants/:userId", controller.findOne);
	app.put("/api/participants/:userId", controller.update);
	app.delete("/api/participants/:userId", controller.delete);
};
