const memberDAO = require("../../database/member/member_dao");

const getList = async () => {
    const result = await memberDAO.getList();
    return result.rows;
}

const insert = async (body) => {
    let msg = "", url = "";
    const result = await memberDAO.insert(body);
    if( result == 1 ){
        msg = "등록 성공";
        url = "/member/list";
    }else{
        msg = "문제 발생";
        url = "/member/registerForm";
    }
    const msgPack = getMessage(msg, url);
    return msgPack;
}

const getMember = async (mId) => {
    return await memberDAO.getMember(mId);
}

const modify = async (body) => {
    const result = await memberDAO.modify(body);
    let msg = "", url = "";
    if(result == 0){
        msg = "수정 실패";
        url = "/member/modify_form/" + body.id;
    }else{
        msg = "수정 성공";
        url = "/member/member_view/" + body.id;
    }
    const msgPack = getMessage(msg, url);
    return msgPack;
}

const deleteMember = async (body) => {
    const result = await memberDAO.deleteMember(body);
    let msg = "", url = "";
    if(result == 0){
        msg = "삭제 실패";
        url = "/member/member_view/" + body.id;
    }else{
        msg = "삭제 성공";
        url = "/member/list";
    }
    const msgPack = getMessage(msg, url);
    return msgPack;
}

const getMessage = (msg, url) => {
    return `<script>alert("${msg}"); location.href="${url}";</script>`;
}


module.exports = {getList, insert, getMember, modify, deleteMember};