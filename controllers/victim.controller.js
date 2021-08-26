const { get, post } = require("../services/victim.service");

const read = async (req, res, next) => {
	try {
		const victims = await get();
		return res.json({ data: { victims: victims } });
	} catch (error) {
		return next(error);
	}
};

const create = async (req, res, next) => {
	post(req.body)
		.then(() => {
			return res.json({ data: { message: "Entry inserted successfully." } });
		})
		.catch(next);
};

module.exports = { create, read };
