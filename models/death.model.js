const mongoose = require("mongoose");

const deathSchema = mongoose.Schema({
	nature_of_death: {
		type: String,
	},
	weapon_used: {
		type: String,
	},
});

module.exports = { deathSchema };
