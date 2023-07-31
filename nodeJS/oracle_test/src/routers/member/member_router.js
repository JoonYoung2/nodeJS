const router = require("express").Router(); 
const memberController = require("../../controller/member/member_controller");   

router.get("/", (req, res) => {
    console.log("/member 연동");
    res.render("member/member_index");
})

router.get("/list", memberController.list);

router.get("/registerForm", memberController.registerForm);

router.post("/register", memberController.register);

router.get("/member_view/:id", memberController.memberView);

router.get("/modify_form", memberController.modifyForm);

router.post("/modify", memberController.modify);

router.get("/delete/:id", memberController.deleteMember);

module.exports = router;