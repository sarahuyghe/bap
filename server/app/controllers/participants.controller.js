const jwt = require("jsonwebtoken");
const Participant = require("../models/participant.model.js");
// const Teamcaptain = require("../models/teamcaptain.model.js");

const tokenCookie = {
	maxAge: 1800000,
	sameSite: true
};
const signatureCookie = {
	maxAge: 86400000,
	httpOnly: true,
	sameSite: true
};

exports.login = async (req, res) => {
	const { mail, password } = req.body;
	console.log(mail);
	if (!mail || !password) {
		return res.status(400).send({ error: "email and password are required" });
	}
	try {
		const user = await Participant.findOne({ mail });
		if (!user) {
			res.status(401).send({ error: "incorrect email or password" });
		} else {
			const isPasswordCorrect = await user.validPassword(password);
			if (isPasswordCorrect) {
				const { _id, name, roles } = user;
				const token = jwt.sign({ _id, name, roles }, process.env.SECRET, {
					expiresIn: "24h"
				});
				const parts = token.split(".");
				const signature = parts.splice(2);
				res
					.cookie("token", parts.join("."), tokenCookie)
					.cookie("signature", signature, signatureCookie)
					.sendStatus(200);
			} else {
				res.status(401).send({
					success: false,
					message: "Incorrect email or password"
				});
			}
		}
	} catch (error) {
		res
			.status(500)
			.send({ message: "Internal error, please try again", error });
	}
};

exports.logout = (req, res) => {
	res
		.clearCookie("token", tokenCookie)
		.clearCookie("signature", signatureCookie)
		.sendStatus(200);
};

exports.register = (req, res) => {
	const { mail, password, name } = req.body;
	const user = new Participant({ mail, password, name });
	user.save(err => {
		if (err) {
			res.status(500).send("Error registering new user please try again.");
		} else {
			res.status(200).send("Welcome to the club!");
		}
	});
};

exports.create = (req, res) => {
	if (!req.body.name) {
		return res.status(500).send({ err: "name can not be empty" });
	}

	// console.log(req.body.teamId);
	const participant = new Participant({
		name: req.body.name,
		firstname: req.body.firstname,
		mail: req.body.mail,
		teamId: req.body.teamId
		// password: ""
	});

	console.log(participant);
	participant
		.save()
		.then(participant => res.send(participant))

		.catch(err => {
			res.status(500).send({ error: err.participant || "Error" });
		});
};

exports.findAll = async (req, res) => {
	try {
		const participants = await Participant.find();
		res.send(participants);
	} catch (err) {
		res.status(500).send({ err: err.participant || "Error" });
	}
};

exports.findOne = async (req, res) => {
	try {
		const participants = await Participant.findById(req.params.authorId);
		if (participants) {
			res.send(participants);
		} else {
			res.status(404).send("No participants found");
		}
	} catch (err) {
		if (err.kind === "ObjectId") {
			return res.status(500).send("Geen geldig ID");
		}
		return res.status(500).send(err);
	}
};

exports.update = async (req, res) => {
	if (!req.body.name) {
		return res.status(400).send("name mag niet leeg zijn");
	}

	try {
		const participant = await Participant.findByIdAndUpdate(
			req.params.authorId,
			{
				name: req.body.name
			},
			{
				new: true
			}
		);

		if (!participant) {
			return res.status(404).send("No author found");
		}
		res.send(participant);
	} catch (err) {
		if (err.kind === "ObjectId") {
			return res.status(417).send("Geen geldig ID");
		}
		return res.status(500).send(err);
	}
};
