const express = require("express");
const controller = require("../controller/test_controller");

const router = express.Router();

router.get("/", controller.index);
router.get("/test1", controller.test1);
router.get("/test2", controller.test2);

module.exports = router;