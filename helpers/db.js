const mongoose = require("../lib/mongoose");
const { Case } = require("../models");

module.exports = {
	Case,
	isValidId,
};

function isValidId(id) {
	return mongoose.Types.ObjectId.isValid(id);
}
