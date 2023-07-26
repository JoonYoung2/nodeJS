const member = require("../db/memberDAO");
const index = (req, res) => {
    console.log("=== index 컨트롤러 연결 ===");
    console.log(member);
    res.render("index");
}

const test1 = (req, res) => {
    console.log("=== test1 컨트롤러 연결 ===");
    res.redirect("/");
    // res.render("test1");
}

const test2 = (req, res) => {
    res.render("test2");
}

module.exports = { index }; //아래와 같은 의미임.
// module.exports = {index:index, test1:test1, test2:test2};
// module.exports = {index:index, t1:test1, t2:test2}; 이렇게 사용하면 test_routers.js에 controller.index, controller.t1, controller.t2로 변경해줘야 됌!!