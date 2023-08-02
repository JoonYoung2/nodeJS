const memberService = require("../../service/member/member_sevice");

const loginForm = (req, res) => {
    res.render("member/loginForm", {user_id : req.session.userId});
}

const list = async (req, res) => {
    const member = await memberService.list();
    console.log("controller list member => ", member);
    res.render("member/list", {user_id : req.session.userId, member});
}
 
const loginCheck = async (req, res) => {
    let msgPack = await memberService.loginCheck(req.body);
    if(msgPack.result === 0){
        req.session.userId = req.body.id;
        res.redirect("/");
    }else{
        res.send(msgPack.msg);
    }
}

const logout = (req, res) => {
    req.session.destroy();
    res.clearCookie("isLogin");
    res.redirect("/");
}  

const memberInfo = async (req, res) => {
    const member = await memberService.memberInfo(req.query);
    console.log(member);
    res.render("member/info", {user_id : req.session.userId, member});
}

module.exports={loginForm, list, loginCheck, logout, memberInfo};