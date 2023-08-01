const sessionConfig = {
    secret : "암호화 키" ,
    resave : false ,
    saveUninitialized : true ,
    cookie : { maxAge : 60 * 60000 } // 1시간
}

module.exports = { sessionConfig };