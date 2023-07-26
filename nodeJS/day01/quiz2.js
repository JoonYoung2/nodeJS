const express = require("express");
const app = express();

// views : 해당위치에 ejs 파일이 존재한다는 명시
app.set("views", "./views");
// ejs 문법을 사용할 수 있게 설정
app.set("view engine", "ejs");

app.get("/site", (req, res) => {
    context = {
        "site" : [
            ['번호', '사이트', '지지도', '회원수'],
            [1, {'네이버': 'http://www.naver.com/'}, 3, 5123],
            [2, {'구글': 'http://www.google.co.kr/'}, 2, 48927],
            [3, {'다음': 'http://www.daum.net/'}, 1, 1234]
        ]
    }
    res.render("site", {context : context});
});

app.listen(3000, () => { console.log("3000 server 연동"); });