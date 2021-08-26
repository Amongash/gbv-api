const router = require("express").Router();
const service = require("../services/perpetrator.service");

/* GET users listing. */
router.get("/", service.get);

module.exports = router;
