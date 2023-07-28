const cookieService = require("../../service/session/session_service");

const index = (req, res) => {
    res.render("session/index");
}

const setSession = (req, res) => {
    req.session.name = "홍길동";
    req.session.age = 20;
    res.render("session/set_session");
}

const getSession = (req, res) => {
    const sessionValue = {
        name : req.session.name,
        age : req.session.age
    };
    res.render("session/get_session", sessionValue);
}

const delSession = (req, res) => {
    // 특정 세션 하나만 삭제
    // delete req.session.name;
    // delete req.session.age;

    //모든 세션 삭제
    req.session.destroy();
    res.render("session/del_session");
    // req.session.destroy((err) => {
    //     res.render("session/del_session");
    //  });
}

const login = (req, res) => {
    // if(req.session.nick === "홍길동"){
    //     const msg = `<script>alert("이미 로그인이 되었습니다."); location.href="/session/success"</script>`
    //     res.send(msg);
    // }
    res.render("session/login", {nick : req.session.nick});
}

const loginCheck = (req, res) => {

    const DBid = "aaa", DBpwd = "111", nick = "홍길동";

    if(DBid === req.body.id && DBpwd === req.body.pwd){
        req.session.id = DBid;
        req.session.nick = nick;
        return res.redirect("/session/success");
    }
    const msg = `<script>alert("로그인 실패"); location.href="/session/login"</script>`;
    res.send(msg);
}

const success = (req, res) => {
    if(req.session.id){
        const msg = `<script>alert("로그인 해주세요."); location.href="/session/login"</script>`
        res.send(msg);
    }
    res.render("session/success", {nick : req.session.nick});
}

const logout = (req, res) => {
    req.session.destroy();
    res.redirect("/session/login");
}
module.exports = {index, setSession, getSession, delSession, login, loginCheck, success, logout};
