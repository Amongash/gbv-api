const router = require("express").Router();
const controller = require("../controllers/victim.controller");

/* GET users listing. */
router.get("/", controller.read);
router.post("/", controller.create);

module.exports = router;
