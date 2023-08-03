const memberDAO = require("../../database/member/member_dao");
const loginCheck = async (body) => {
    let member = await memberDAO.getMember(body);
    let msg = "";
    let msgPack = {};
    console.log("member == > ",member);
    if(member === undefined){
        msg = "없는 아이디입니다.";
        url = "/member/login_form";
    }else{
        if(member.ID == body.id){
            if(member.PWD == body.pwd){
                msg = "성공";
                url = "/"
                msgPack.result = 0;
            }else{
                msg = "비밀번호가 일치하지 않습니다.";
                url = "/member/login_form";
            }
        }
    }    
    msgPack.msg = getMessage(msg, url);
    return msgPack;
}

const list = async () => {
    const member = await memberDAO.list();
    return member;
}

const memberInfo = async (query) => {
    return await memberDAO.memberInfo(query);
}
   
const getMessage = (msg, url) => {
    return `<script>alert("${msg}"); location.href="${url}"</script>`;
}


module.exports = {loginCheck, list, memberInfo};