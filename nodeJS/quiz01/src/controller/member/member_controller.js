const service = require("../../service/member/member_service");

const login = (req, res) => {
    res.render('member/login');
}

const loginCheck = (req, res) => {
    // console.log("loginCheck");
    // let loggedIn = false;
    // console.log(member);
    // member.forEach(mem => {
    //     if(mem.name === req.query.name && mem.id === req.query.id){
    //         res.render('member/list', {member});
    //         loggedIn = true;
    //     }
    // });
    // if (!loggedIn) {
    //     res.render('member/login');
    // }
    
    const loginCheck = service.loginCheck(req.query.id, req.query.name); 
    if(loginCheck === 0){
        res.render("member/login");
    }else
        res.render("member/list", {member : loginCheck});
}

const memberInfo = (req, res) => {
    let loggedIn = false;

    const infoCheck = service.info(req.query.name);
    res.render("member/info", {userInfo : infoCheck});
    // member.forEach(mem => {
    //     if(mem.name === req.query.name){
    //         const userInfo = [mem.id, mem.name, mem.addr];
    //         res.render('member/info', {userInfo});
    //         loggedIn = true;
    //     }
    // });
    // if (!loggedIn) {
    //     res.render('member/memberInfo');
    // }
}

const memberList = (req, res) => {
    const member = service.list();
    res.render('member/list', {member});
}

module.exports = { login, loginCheck, memberInfo, memberList };