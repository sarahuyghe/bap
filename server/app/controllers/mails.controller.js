const Mail = require("../models/mail.model.js");

exports.create = (req, res) => {
	if (!req.body.mail) {
		return res.status(500).send({ err: "title can not be empty" });
	}

	console.log(req.body.teamId);
	const mail = new Mail({
		mail: req.body.mail

		// authorId: req.body.authorId //deze moet er nu pas staan
	});

	console.log(mail);
	mail
		.save()
		.then(mail => res.send(mail))
		.catch(err => {
			res.status(500).send({ error: err.mail || "Error" });
		});
};

exports.findAll = async (req, res) => {
	try {
		const mails = await Mail.find();
		res.send(mails);
	} catch (err) {
		res.status(500).send({ err: err.mail || "Error" });
	}
};

exports.findOne = async (req, res) => {
	try {
		const mail = await Mail.findById(req.params.bookId);
		if (mail) {
			res.send(mail);
		} else {
			res.status(404).send("No book found");
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
		const mail = await Mail.findByIdAndUpdate(
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
