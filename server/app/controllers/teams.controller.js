const Team = require("../models/team.model.js");

exports.create = (req, res) => {
	if (!req.body.teamnaam) {
		return res.status(500).send({ err: "teamnaam can not be empty" });
	}
	const team = new Team({
		teamnaam: req.body.teamnaam,
		reason: req.body.reason,
		quote: req.body.quote,
		kind: req.body.kind,
		location: req.body.location,
		teamcaptainId: req.body.teamcaptainId
	});

	team
		.save()
		.then(team => res.send(team))
		.catch(err => {
			res.status(500).send({ error: err.team || "Error" });
		});
};

exports.findAll = async (req, res) => {
	try {
		const teams = await Team.find();
		res.send(teams);
	} catch (err) {
		res.status(500).send({ err: err.team || "Error" });
	}
};

exports.findOne = async (req, res) => {
	console.log(req.params.teamId);
	// console.log(req.teamId);

	try {
		// const team = await Team.findOne({
		// 	teamcaptainId: req.params.teamId
		// });
		const team = await Team.findById(req.params.teamId);
		console.log(team);
		if (team) {
			res.send(team);
		} else {
			res.status(404).send("No team found");
		}
	} catch (err) {
		if (err.kind === "ObjectId") {
			return res.status(500).send("Geen geldig ID");
		}
		return res.status(500).send(err);
	}
};

exports.update = async (req, res) => {
	if (!req.body.title) {
		return res.status(400).send("title mag niet leeg zijn");
	}

	try {
		const book = await Book.findByIdAndUpdate(
			req.params.bookId,
			{
				title: req.body.title,
				authorId: req.body.authorId //deze moet er nu pas staan
			},
			{
				new: true
			}
		);

		if (!book) {
			return res.status(404).send("No book found");
		}
		res.send(book);
	} catch (err) {
		if (err.kind === "ObjectId") {
			return res.status(417).send("Geen geldig ID");
		}
		return res.status(500).send(err);
	}
};

exports.delete = async (req, res) => {
	try {
		const book = await Book.findByIdAndRemove(req.params.bookId);
		if (!book) {
			return res.status(404).send("No book found");
		}
		res.send(book);
	} catch (err) {
		if (err.kind === "ObjectId") {
			return res.status(417).send("Geen geldig ID");
		}
		return res.status(500).send(err);
	}
};
