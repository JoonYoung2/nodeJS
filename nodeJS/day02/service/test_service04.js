const member = require('../db/memberDAO');
const index = () => {
    console.log("service index 연결");
    return member;
}

const test1 = () => {
    console.log("service test1 연결");
    return member;
}

const test2 = () => {
    console.log("service test2 연결");
    return member;
}

module.exports = { index, test1, test2 };