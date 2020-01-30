const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const TeamSchema = mongoose.Schema(
	{
		teamnaam: String,
		reason: String,
		quote: String,
		kind: Boolean,
		teamcaptainId: ObjectId
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Team", TeamSchema);
