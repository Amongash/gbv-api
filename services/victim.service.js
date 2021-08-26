const { Victim } = require("../helpers/db");

const get = async () => {
	try {
		const victims = await Victim.find();
		return victims;
	} catch (error) {
		throw error;
	}
};

const post = async (params) => {
	try {
		const victim = new Victim(params);
		await victim.save();
		return victim;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	get,
	post,
};
