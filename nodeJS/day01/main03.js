const express = require("express");
const app = express();

// views : 해당위치에 ejs 파일이 존재한다는 명시
app.set("views", "./views");
// ejs 문법을 사용할 수 있게 설정
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {key:"gdgd"});
});

app.get("/login", (req, res) => {
    res.render("login", {n : "name"});
});

app.get("/logout", (req, res) => {
    const context = {
        key1: "값-1",
        key2: "값-2",
        key3: [10, 20, 30],
        key4: {k1:"k11", k2:"k22"}
    };
    // res.render("logout", {context});
    res.render("logout", {context : context});
});

app.listen(3000, () => { console.log("3000 server 연동"); });