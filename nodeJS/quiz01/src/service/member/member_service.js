const member = require('../../database/member/memberDAO');

const loginCheck = (id, name) => {
    const m = member.filter((check) =>
    check.id === id && check.name === name);
    if(m.length === 0) {
        return 0;
    }else
        return member;
};

const info = (name) => {
    const memberInfo = member.filter((v) => v.name === name);
    return memberInfo[0];
};

const list = () => {
    return member;
}

module.exports = {loginCheck, info, list};