const express = require("express");
const app = express();

// views : 해당위치에 ejs 파일이 존재한다는 명시
app.set("views", "./");
// ejs 문법을 사용할 수 있게 설정
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
    res.end("기본페이지");

});

app.get("/login", (req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
    res.end("기본페이지");

});

app.get("/logout", (req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
    res.end("기본페이지");

});

app.get("/test", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
    res.end("테스트페이지");
});

app.listen(3000, () => { console.log("3000 server 연동"); });