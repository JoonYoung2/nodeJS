const router = require("express").Router();

const pageController = require("../controller/page_controller");


router.get("/", pageController.views.index );
router.get("/list", pageController.views.list );
router.get("/write_form", pageController.views.writeForm );
router.post("/write", pageController.process.write);
router.get("/content/:num", pageController.views.content );

module.exports = router;