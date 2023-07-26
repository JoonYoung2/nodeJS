const express = require("express");
const app = express();

// views : 해당위치에 ejs 파일이 존재한다는 명시
app.set("views", "./views");
// ejs 문법을 사용할 수 있게 설정
app.set("view engine", "ejs");

app.get("/for", (req, res) => {
    const arr = ["홍길동","김개똥","고길동"];
    res.render("for", {name : arr});
});

app.get("/if", (req, res) => {
    res.render("if");
});

app.listen(3000, () => { console.log("3000 server 연동"); });