/*
    resave : false : 세션 id를 한번만 발급 받는다
    saveUninitialized : true : 세션id를 발급 받으면 사용하겠다
    위 두 개의 설정은 기본 권장사항으로 false, true로 설정하고 사용한다고 보면된다.
*/

const sessionConfig = {
    secret : "암호화 키" ,
    resave : false ,
    saveUninitialized : true ,
    // cookie : { maxAge : 5000 }  // session 시간 설정
}

module.exports = { sessionConfig };



