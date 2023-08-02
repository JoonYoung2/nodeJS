const router = require("express").Router();
const memberController = require("../../controller/member/member_controller");

router.get("/login_form", memberController.loginForm);

router.get("/list", memberController.list);

router.post("/login_check", memberController.loginCheck);

router.get("/logout", memberController.logout);

router.get("/info", memberController.memberInfo);
 
module.exports = router;