const service = require('../service/test_service04');

const index = (req, res) => {
    const mem = service.index();
    res.render("index", {member : mem});
}

const test1 = (req, res) => {
    console.log("=== test1 controller connection ===");
    res.redirect("/");
}

const test2 = (req, res) => {
    res.render("test2");
}

module.exports = { index, test1, test2 }; //아래와 같은 의미임.
// module.exports = {index:index, test1:test1, test2:test2};
// module.exports = {index:index, t1:test1, t2:test2}; 이렇게 사용하면 test_routers.js에 controller.index, controller.t1, controller.t2로 변경해줘야 됌!!