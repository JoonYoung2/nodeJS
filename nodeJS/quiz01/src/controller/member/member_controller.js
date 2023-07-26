const member = require('../../database/member/memberDAO');

const cnt = 0;

const login = (req, res) => {
    console.log("연동");
    res.render('member/login');
}

const loginCheck = (req, res) => {
    console.log("loginCheck");
    console.log(member);
    member.forEach(mem => {
        if(mem.name === req.param("name") && mem.id === req.param("id")){
            console.log("로그인 확인");
            res.render('member/list', {member});
            cnt++;
        }
        console.log("loginCheck2");
    });
    res.render('member/login');
}

const memberInfo = (req, res) => {
    console.log("memberInfo");
    member.forEach(mem => {
        if(mem.name === req.param("name")){
            console.log("로그인 확인");
            const userInfo = [mem.id, mem.name, mem.addr];
            res.render('member/info', {userInfo});
            cnt++;
        }
        console.log("loginCheck2");
    });
    res.render('member/memberInfo');
}

const memberList = (req, res) => {
    res.render('member/list', {member});
}

module.exports = { login, loginCheck, memberInfo, memberList };