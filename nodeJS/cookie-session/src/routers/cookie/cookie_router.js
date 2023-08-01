const express = require("express");

const cookieController = require("../../controller/cookie/cookie_controller");

const router = express.Router();

router.get("/", cookieController.index);
router.get("/popup", cookieController.popup);

router.get("/quiz", cookieController.quiz);
router.get("/quizPopup", cookieController.quizPopup);
router.get("/makeCookie", cookieController.quizMakeCookie);

router.get("/cart", cookieController.cart);
router.get("/save1", cookieController.save1);
router.get("/save2/:goods", cookieController.save2);
router.get("/viewList", cookieController.viewList);

module.exports = router;