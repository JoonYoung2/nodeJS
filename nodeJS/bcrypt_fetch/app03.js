const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let cnt = 1;
let members = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길똥", addr:"마포구"},
];

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index"); 
})

app.get("/list", (req, res) => {
    res.json(members); // ===> (members) 이렇게 바꿔보아요 
})

app.use(bodyParser.json());

app.post("/register", (req, res) => {
    console.log(req.body);
    members = members.concat(req.body);
    res.json(1);
})

app.delete("/delete", (req, res) => {
    console.log(req.body);
    members = members.filter(mem => mem.id !== req.body.id);
    res.json(1);
})

// app.get("/search", (req, res) => {
//     members = members.filter(mem => mem.id === req.query.id);
//     res.json(members);
// })

app.get("/search/:id", (req, res) => {
    members = members.filter(mem => mem.id === req.params.id);
    res.json(members);
})

app.listen(3000, () => { console.log("3000 port start!!"); })