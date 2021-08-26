const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
	county: { type: String, required: true },
	subcounty: { type: String },
});

const Location = mongoose.model("location", locationSchema);

module.exports = Location;
