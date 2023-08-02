module.exports = (app) => {
    const router = require("express").Router();
    const memberRouter = require("./member/member_router");
    const bodyParser = require("body-parser");
    const session = require("express-session");
    const sessionConfig = require("../../config/cookie_session/cookie_session_config");

app.use(bodyParser.urlencoded({ extended : true}));
app.use( session(sessionConfig) );
    
    app.get("/", (req,res) => {
        console.log("session is ",req.session.userId);
        if(req.session.userId){
            console.log("여기오니??");
            res.cookie("isLogin", true);
        }
        res.render("index", {user_id : req.session.userId}); 
    })

    app.use("/member", memberRouter);

    return router;
}
