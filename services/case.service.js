const { Case } = require("../helpers/db");

const get = async () => {
	return await Case.find()
		.then((res) => res)
		.catch((err) => err);
};

const post = async (params) => {
	if (!params) return;
	return await new Case(params)
		.save()
		.then((res) => res)
		.catch((err) => err);
};

module.exports = {
	get,
	post,
};
