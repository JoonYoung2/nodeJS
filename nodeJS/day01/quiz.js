const express = require("express");
const app = express();

// views : 해당위치에 ejs 파일이 존재한다는 명시
app.set("views", "./views");
// ejs 문법을 사용할 수 있게 설정
app.set("view engine", "ejs");

app.get("/member", (req, res) => {
    context = {
        arr : ['홍길동', '20살', '산골짜기'],
        obj : {'name':'김개똥', 'age':'30살', 'addr':'개똥별'},
        name : '고길동', 
        'age':'40살', 
        'addr' : '마포구'

    }
    res.render("member", {context : context});
});

app.listen(3000, () => { console.log("3000 server 연동"); });