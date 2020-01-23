const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const TeamSchema = mongoose.Schema(
	{
		name: String,
		why: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Team", TeamSchema);
