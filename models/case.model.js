const mongoose = require("mongoose");

const caseSchema = mongoose.Schema({
	summary: { type: String },
});

const Case = mongoose.model("case", caseSchema);

module.exports = Case;
