const memberDAO = require("../../database/member/member_dao");

const insert = async (body) => {
    const result = await memberDAO.insert(body);
    let msg = "", url = "";
    if(result == 1){
        msg = "가입 성공";
        url = "/member/login_form"
    }else{
        msg = "동일한 아이디가 존재합니다.";
        url = "/member/register_form";
    }
    return alertMassege(msg, url);
}

const login = async (body, session) => {
    const result = await memberDAO.login(body);
    let msg = "", url = "";
    if(result == 1){
        msg = "로그인 성공";
        url = "/";
        session.userId = body.id;
    }else if(result == 2){
        msg = "비밀번호가 일치하지 않습니다.";
        url = "/member/login_form";
    }
    else{
        msg = "아이디가 일치하지 않습니다.";
        url = "/member/login_form";
    }
        
        
    return alertMassege(msg, url);
}

const list = async() => {
    return await memberDAO.getList();
}

const getMemberInfo = async (query) => {
    const member = await memberDAO.getMemberInfo(query);
    console.log("memberService => ", member);
    return member;

}

const memberDelete = async (params, userId) => {
    const result = await memberDAO.deleteMember(params, userId);
    console.log(result);
    let msg = "", url = "";
    if(result === 1){
        msg = "삭제 완료";
        url = "/member/list";
    }else{
        msg = "본인삭제 완료";
        url = "/member/logout";
    }
    return alertMassege(msg, url);
}

const memberUpdate = async (body) => {
    await memberDAO.memberUpdate(body);
    let msg = "수정 완료", url = "/member/memberInfo?id=" + body.id;

    return alertMassege(msg, url);
}

const alertMassege = (msg, url) => {
    return `<script>alert("${msg}"); location.href="${url}"</script>;`;
}


module.exports = {insert, login, list, getMemberInfo, memberDelete, memberUpdate};