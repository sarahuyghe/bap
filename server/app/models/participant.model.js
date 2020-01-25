const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ParticipantSchema = mongoose.Schema(
	{
		name: String,
		firstname: String,
		mail: String,
		teamId: ObjectId
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Participant", ParticipantSchema);
