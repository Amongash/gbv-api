const mongoose = require("mongoose");

const sourceSchema = mongoose.Schema({
	website: {
		type: String,
		required: true,
	},
	date_reported: {
		type: Date,
		required: true,
	},
	summary: {
		type: String,
	},
});

module.exports = { sourceSchema };
