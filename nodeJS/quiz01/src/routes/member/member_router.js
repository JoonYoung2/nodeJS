const express = require('express');
const memberController = require("../../controller/member/member_controller");
const router = express.Router();

router.get("/login", memberController.login);
router.get("/", memberController.loginCheck);
router.get("/info", memberController.memberInfo);
router.get("/list", memberController.memberList);

module.exports = router;