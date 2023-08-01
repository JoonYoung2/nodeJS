const express = require("express");

const sessionController = require("../../controller/session/session_controller");

const router = express.Router();

router.get("/", sessionController.index);

//session SET, GET
router.get("/set_session", sessionController.setSession);
router.get("/get_session", sessionController.getSession);
router.get("/del_session", sessionController.delSession);


// login
router.get("/login", sessionController.login);
router.post("/login_check", sessionController.loginCheck);
router.get("/success", sessionController.success);
router.get("/logout", sessionController.logout);

module.exports = router;