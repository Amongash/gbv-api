const router = require("express").Router();
const victimsRoute = require("./victims.route");
const perpetratorsRoute = require("./perpetrators.route");

module.exports = () => {
	router.use("/victims", victimsRoute);
	router.use("/perpetrators", perpetratorsRoute);
	return router;
};
