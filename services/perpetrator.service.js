const { Perpetrator } = require("../helpers/db");

const get = async (req, res, next) => {
	try {
		const perpetrators = await Perpetrator.find();
		return res.json({ data: { perpetrators: perpetrators } });
	} catch (error) {
		return next(error);
	}
};

module.exports = {
	get,
};
