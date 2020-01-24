const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const TeamSchema = mongoose.Schema(
	{
		teamnaam: String,
		name: String,
		firstname: String,
		why: String,
		mail: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Team", TeamSchema);
