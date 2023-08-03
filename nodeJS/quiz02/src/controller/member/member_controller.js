const memberService = require("../../service/member/member_service");

/*
    로그인 폼
*/
const loginForm = (req, res) => {
    const userId = req.session.userId;
    if(userId === undefined){
        res.render("member/login", {user_id : req.session.userId});
    }else
        res.send(`<script>alert("이미 로그인이 되어있습니다."); location.href="/";</script>`);
}

/*
    회원가입 폼
*/
const registerForm = (req, res) => {
    const userId = req.session.userId;
    if(userId === undefined){
        res.render("member/register", {user_id : req.session.userId});
    }else
        res.send(`<script>alert("이미 로그인이 되어있습니다."); location.href="/";</script>`);
}

/*
    전체 회원 리스트 뷰
*/
const list = async (req, res) => {
    const userId = req.session.userId;
    if(userId === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const member = await memberService.list();
        console.log(member.rows);
        res.render("member/list", {user_id : req.session.userId, member : member.rows});
    }
}

/*
    회원가입
*/
const insert = async (req, res) => {
    const msg = await memberService.insert(req.body);
    res.send(msg);
}

/*
    로그인
*/
const login = async (req, res) => {
    let msg = "";
    if(req.body.id == ""){
        res.send(`<script>alert("아이디를 입력해주세요"); location.href="/member/login_form";</script>`);
    }

    if(req.body.pwd == ""){
        res.send(`<script>alert("비밀번호를 입력해주세요"); location.href="/member/login_form";</script>`);
    }
    msg = await memberService.login(req.body, req.session);
    res.send(msg);
}

/*
    로그아웃
*/
const logout = (req, res) => {
    req.session.destroy();
    res.send(`<script>alert("로그아웃하셨습니다."); location.href="/";</script>`)
}

/*
    개인정보
*/
const memberInfo = async (req, res) => {
    const user_id = req.session.userId;
    if(user_id === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const member = await memberService.getMemberInfo(req.query);
        res.render("member/member_info", {user_id : req.session.userId, member : member.rows})
    }
}

/*
    회원정보 수정 폼
*/
const updateForm = async (req, res) => {
    const user_id = req.session.userId;
    if(user_id === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const member = await memberService.getMemberInfo(req.params);
        res.render("member/update", {user_id : req.session.userId, member : member.rows})
    }
}

/*
    회원정보 삭제
*/
const memberDelete = async (req, res) => {
    const user_id = req.session.userId;
    if(user_id === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const msg = await memberService.memberDelete(req.params, req.session.userId);
        res.send(msg);
    }
}

/*
    회원정보 수정
*/
const memberUpdate = async (req, res) => {
    const user_id = req.session.userId;
    if(user_id === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const msg = await memberService.memberUpdate(req.body);
        res.send(msg);
    }
}


module.exports = {loginForm, registerForm, list, insert, login, logout, memberInfo, updateForm, memberDelete, memberUpdate};