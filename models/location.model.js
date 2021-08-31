const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
	county: { type: String, required: true },
	subcounty: { type: String },
});

module.exports = { locationSchema };
