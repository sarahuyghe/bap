const Participant = require("../models/participant.model.js");
const nodemailer = require("nodemailer");

transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: "saradatbenik@gmail.com",
		pass: "hawk8000"
	}
});

exports.create = (req, res) => {
	if (!req.body.name) {
		return res.status(500).send({ err: "name can not be empty" });
	}
	const participant = new Participant({
		name: req.body.name,
		firstname: req.body.firstname,
		mail: req.body.email,
		teamId: req.body.teamId,
		event: req.body.event,
		location: req.body.location,
		buyBottle: req.body.buyBottle,
		typeOfEvent: req.body.typeOfEvent,
		accepted: req.body.accepted
	});
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

exports.findAllTeamId = async (req, res) => {
	try {
		const participants = await Participant.find({
			teamId: req.params.teamId
		});
		if (participants) {
			res.send(participants);
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

exports.findOne = async (req, res) => {
	try {
		const participants = await Participant.findById("testing");
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
			req.params.userId,
			{
				name: req.body.name,
				accepted: true
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

exports.delete = async (req, res) => {
	try {
		const participant = await Participant.findByIdAndRemove(req.params.userId);
		if (!participant) {
			return res.status(404).send("No book found");
		}
		res.send(participant);
	} catch (err) {
		if (err.kind === "ObjectId") {
			return res.status(417).send("Geen geldig ID");
		}
		return res.status(500).send(err);
	}
};
