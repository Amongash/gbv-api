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
	},
	{ timestamps: true }
);

module.exports = { perpetratorSchema };
