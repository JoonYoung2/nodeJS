const router = require("express").Router();
const memberController = require("../../controller/member/member_controller");

router.get("/login_form", memberController.loginForm);

router.get("/register_form", memberController.registerForm);

router.get("/list", memberController.list);

router.post("/register", memberController.insert);

router.post("/login", memberController.login);

router.get("/logout", memberController.logout);

router.get("/list", memberController.list);

router.get("/memberInfo", memberController.memberInfo);

router.get("/update_form/:id", memberController.updateForm);

router.get("/delete/:id", memberController.memberDelete);

router.post("/update", memberController.memberUpdate);

module.exports = router;