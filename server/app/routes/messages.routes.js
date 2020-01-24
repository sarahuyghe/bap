module.exports = app => {
	const controller = require("../controllers/messages.controller.js");
	app.post("/messages", controller.create);
	app.get("/messages", controller.findAll);
	app.get("/messages/:teamId", controller.findOne);
	// app.put("/messages/:teamId", controller.update);
	// app.delete("/messages/:teamId", controller.delete);
};
