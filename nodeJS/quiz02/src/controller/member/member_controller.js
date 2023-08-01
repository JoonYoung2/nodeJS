const memberService = require("../../service/member/member_service");

const loginForm = (req, res) => {
    const userId = req.session.userId;
    if(userId === undefined){
        res.render("member/login", {user_id : req.session.userId});
    }else
        res.send(`<script>alert("이미 로그인이 되어있습니다."); location.href="/";</script>`);
}

const registerForm = (req, res) => {
    const userId = req.session.userId;
    if(userId === undefined){
        res.render("member/register", {user_id : req.session.userId});
    }else
        res.send(`<script>alert("이미 로그인이 되어있습니다."); location.href="/";</script>`);
}

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

const insert = async (req, res) => {
    const msg = await memberService.insert(req.body);
    res.send(msg);
}

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

const logout = (req, res) => {
    req.session.destroy();
    res.send(`<script>alert("로그아웃하셨습니다."); location.href="/";</script>`)
}

const memberInfo = async (req, res) => {
    const user_id = req.session.userId;
    console.log("memberInfo user_id = > ", user_id);
    if(user_id === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const member = await memberService.getMemberInfo(req.query);
        console.log("????=>", member);
        res.render("member/member_info", {user_id : req.session.userId, member : member.rows})
    }
}

const updateForm = async (req, res) => {
    const user_id = req.session.userId;
    console.log("memberInfo user_id = > ", user_id);
    if(user_id === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const member = await memberService.getMemberInfo(req.params);
        res.render("member/update", {user_id : req.session.userId, member : member.rows})
    }
}

const memberDelete = async (req, res) => {
    const user_id = req.session.userId;
    console.log("memberInfo user_id = > ", user_id);
    if(user_id === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const msg = await memberService.memberDelete(req.params, req.session.userId);
        res.send(msg);
    }
}

const memberUpdate = async (req, res) => {
    const user_id = req.session.userId;
    console.log("memberInfo user_id = > ", user_id);
    if(user_id === undefined){
        res.send(`<script>alert("로그인 후 이용하세요."); location.href="/member/login_form";</script>`);
    }else{
        const msg = await memberService.memberUpdate(req.body);
        res.send(msg);
    }
    
}


module.exports = {loginForm, registerForm, list, insert, login, logout, memberInfo, updateForm, memberDelete, memberUpdate};