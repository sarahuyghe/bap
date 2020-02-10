const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema(
	{
		teamnaam: String,
		reason: String,
		quote: String,
		kind: Boolean,
		location: String,
		cap: Number,
		bottle: Number,
		typeOfEvent: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Team", TeamSchema);
