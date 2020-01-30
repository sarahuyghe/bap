// const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;
// const bcrypt = require("bcrypt");

// const ParticipantSchema = mongoose.Schema(
// 	{
// 		email: { type: String, required: true, unique: true },
// 		password: { type: String, required: true },
// 		name: { type: String, required: true },
// 		// name: String,
// 		firstname: String,
// 		// mail: String,
// 		teamId: ObjectId,
// 		roles: [String]
// 	},
// 	{
// 		timestamps: true
// 	}
// );

// ParticipantSchema.methods.validPassword = function(password) {
// 	return bcrypt.compare(password, this.password);
// };

// ParticipantSchema.pre("save", function(next) {
// 	if (this.isNew || this.isModified("password")) {
// 		const document = this;
// 		bcrypt.hash(document.password, 12, (err, hashedPassword) => {
// 			if (err) {
// 				next(err);
// 			} else {
// 				document.password = hashedPassword;
// 				next();
// 			}
// 		});
// 	} else {
// 		next();
// 	}
// });

// module.exports = mongoose.model("Participant", ParticipantSchema);

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ParticipantSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	roles: [String]
});

ParticipantSchema.methods.validPassword = function(password) {
	return bcrypt.compare(password, this.password);
};

ParticipantSchema.pre("save", function(next) {
	if (this.isNew || this.isModified("password")) {
		const document = this;
		bcrypt.hash(document.password, 12, (err, hashedPassword) => {
			if (err) {
				next(err);
			} else {
				document.password = hashedPassword;
				next();
			}
		});
	} else {
		next();
	}
});

module.exports = mongoose.model("Participant", ParticipantSchema);
