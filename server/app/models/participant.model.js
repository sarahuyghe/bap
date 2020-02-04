const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ParticipantSchema = mongoose.Schema(
	{
		name: String,
		// firstname: String,
		email: String,
		// event: String,
		// location: String,
		teamId: { type: ObjectId, ref: "Team" }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Participant", ParticipantSchema);
