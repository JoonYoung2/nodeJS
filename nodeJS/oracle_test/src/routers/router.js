module.exports = (app) => {
    const memberRouter = require("./member/member_router");
    const router = require("express").Router();
    
    app.use("/member", memberRouter);

    router.get("/", (req, res) => {
        res.render("index");
    })

    return router;
};