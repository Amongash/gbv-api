const mongoose = require("mongoose");

const deathSchema = mongoose.Schema({
	perpetrator: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "perpetrator",
	},
	location: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "location",
	},
	victim: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "victim",
	},
	source: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "source",
	},
	nature_of_death: {
		type: String,
		required: true,
	},
	weapon_used: {
		type: String,
	},
});

const Death = mongoose.model("death", deathSchema);

module.exports = Death;
