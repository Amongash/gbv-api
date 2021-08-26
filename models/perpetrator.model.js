const mongoose = require("mongoose");

const perpetratorSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		occupation: {
			type: String,
		},
		suicide_attempt: {
			type: Boolean,
		},
		history_of_violence: {
			type: Boolean,
		},
		case: {
			type: mongoose.Types.ObjectId,
		},
	},
	{ timestamps: true }
);

const Perpetrator = mongoose.model("perpetrator", perpetratorSchema);

module.exports = Perpetrator;
