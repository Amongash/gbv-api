const mongoose = require("../lib/mongoose");
const { Victim, Perpetrator } = require("../models");

module.exports = {
	Victim,
	Perpetrator,
	isValidId,
};

function isValidId(id) {
	return mongoose.Types.ObjectId.isValid(id);
}
