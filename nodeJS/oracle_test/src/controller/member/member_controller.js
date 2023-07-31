const memberService = require("../../service/member/member_service");

const list = async (req, res) => {
    const list = await memberService.getList();
    console.log("==>", list);
    res.render("member/member_index", {member : list});
}

const registerForm = (req, res) => {
    res.render("member/register_form");
    
}

const register = async (req, res) => {
    let msg = await memberService.insert(req.body);
    res.send(msg);
}

const memberView = async (req, res) => {
    const member = await memberService.getMember(req.params);
    // res.send("memberView");

    res.render("member/member_view", {member});
} 

const modifyForm = async (req, res) => {
    console.log(req.query.id);
    const member = await memberService.getMember(req.query);
    res.render("member/modify_form", {member});
}

const modify = async (req, res) => {
    const msg = await memberService.modify(req.body);
    res.send(msg);
}

const deleteMember = async (req, res) => {
    const msg = await memberService.deleteMember(req.params);
    res.send(msg);
}

module.exports = {list, registerForm, register, memberView, modifyForm, modify, deleteMember};