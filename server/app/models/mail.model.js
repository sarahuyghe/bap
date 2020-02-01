const mongoose = require("mongoose");

const MailSchema = mongoose.Schema(
	{
		mail: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Mail", MailSchema);
