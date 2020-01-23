module.exports = app => {
	const controller = require("../controllers/users.controller.js");
	app.post("/users", controller.create);
	app.get("/users", controller.findAll);
	app.get("/users/:userId", controller.findOne);
	app.put("/users/:userId", controller.update);
};
