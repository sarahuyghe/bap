const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const MessageSchema = mongoose.Schema(
	{
		message: String,
		name: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Message", MessageSchema);
