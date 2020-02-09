module.exports = app => {
	const controller = require("../controllers/teams.controller.js");
	app.post("/api/teams", controller.create);
	app.get("/api/teams", controller.findAll);
	app.get("/api/teams/:teamId", controller.findOne);
	app.put("/api/teams/:teamId", controller.update);
	app.delete("/api/teams/:teamId", controller.delete);
};
