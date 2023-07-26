const member = require('../../database/member/memberDAO');

const login = (req, res) => {
    res.render('member/login');
}

const loginCheck = (req, res) => {
    console.log("loginCheck");
    let loggedIn = false;
    console.log(member);
    member.forEach(mem => {
        if(mem.name === req.query.name && mem.id === req.query.id){
            res.render('member/list', {member});
            loggedIn = true;
        }
    });
    if (!loggedIn) {
        res.render('member/login');
    }
}

const memberInfo = (req, res) => {
    let loggedIn = false;
    member.forEach(mem => {
        if(mem.name === req.query.name){
            const userInfo = [mem.id, mem.name, mem.addr];
            res.render('member/info', {userInfo});
            loggedIn = true;
        }
    });
    if (!loggedIn) {
        res.render('member/memberInfo');
    }
}

const memberList = (req, res) => {
    res.render('member/list', {member});
}

module.exports = { login, loginCheck, memberInfo, memberList };