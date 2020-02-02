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
		email: req.body.mail,
		teamId: req.body.teamId,
		event: req.body.event,
		location: req.body.location
	});

	const mailOptions = {
		from: "saradatbenik@gmail.com",
		to: participant.email,
		subject: "Sending Email using Node.js",
		text: "That was easy!"
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
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
