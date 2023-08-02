const sessionConfig = {
    secret : '암호화 키',
    resave : false, 
    saveUninitialized : true 
};
// resave
// true == 동일한 이름을 다시 설정하면 새롭게 만들 지 않음.
// false == 동일한 이름을 다시 설정하면 새롭게 세션을 만듦.

//saveUn~~~~
// true == 세션의 정보가 수정되던 아니던 무조건 다시 저장
// false == 세션이 수정되면 저장, 그렇지 않으면 안함

module.exports = sessionConfig;