const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;

const TeamSchema = mongoose.Schema(
	{
		teamnaam: String,
		reason: String,
		quote: String,
		kind: Boolean,
		location: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Team", TeamSchema);
