const mongoose = require("mongoose");

const victimSchema = mongoose.Schema(
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
		missing: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);

const Victim = mongoose.model("victim", victimSchema);

module.exports = Victim;
