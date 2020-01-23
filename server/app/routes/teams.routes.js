module.exports = app => {
	const controller = require("../controllers/teams.controller.js");
	app.post("/teams", controller.create);
	app.get("/teams", controller.findAll);
	app.get("/teams/:teamId", controller.findOne);
	app.put("/teams/:teamId", controller.update);
	app.delete("/teams/:teamId", controller.delete);
};
