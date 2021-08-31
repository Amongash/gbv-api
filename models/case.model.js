const mongoose = require("mongoose");
const { victimSchema } = require("./victim.model");
const { perpetratorSchema } = require("./perpetrator.model");
const { deathSchema } = require("./death.model");
const { sourceSchema } = require("./source.model");
const { locationSchema } = require("./location.model");
const caseSchema = mongoose.Schema({
	victim: [victimSchema],
	perpetrator: [perpetratorSchema],
	death: deathSchema,

	source: [sourceSchema],

	location: locationSchema,

	status: {
		type: String,
	},
});

const Case = mongoose.model("case", caseSchema);

module.exports = Case;
