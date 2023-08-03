const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let members = [
    {id:"aaa", pwd:"1234", name:"홍길동"},
    {id:"aaaaa", pwd:"2222", name:"길복동"},
    {id:"aaaaaaa", pwd:"5555", name:"금쪽이"},
    {id:"aaa", pwd:"1234", name:"홍길동"},
    {id:"aaaaa", pwd:"2222", name:"길복동"},
    {id:"aaaaaaa", pwd:"5555", name:"금쪽이"},
    {id:"aaa", pwd:"1234", name:"홍길동"},
    {id:"aaaaa", pwd:"2222", name:"길복동"},
    {id:"aaaaaaa", pwd:"5555", name:"금쪽이"},
    {id:"aaa", pwd:"1234", name:"홍길동"},
    {id:"aaaaa", pwd:"2222", name:"길복동"},
    {id:"aaaaaaa", pwd:"5555", name:"금쪽이"},
    {id:"aaa", pwd:"1234", name:"홍길동"},
    {id:"aaaaa", pwd:"2222", name:"길복동"},
    {id:"aaaaaaa", pwd:"5555", name:"금쪽이"},
    {id:"aaa", pwd:"1234", name:"홍길동"},
    {id:"aaaaa", pwd:"2222", name:"길복동"},
    {id:"aaaaaaa", pwd:"5555", name:"금쪽이"},
    {id:"aaa", pwd:"1234", name:"홍길동"},
    {id:"aaaaa", pwd:"2222", name:"길복동"}
];

app.use(bodyParser.json());

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/list", (req, res) => {
    res.json(members);
})

app.post("/register", (req, res) => {
    members = members.concat(req.body);
    res.json(members);
})

app.delete("/delete", (req, res) => {
    members = members.filter(list => req.body.id !== list.id);
    res.json(members);
})

app.get("/memberInfo", (req, res) => {
    const memberInfo = [{}];
    members.forEach(list => {
        if(list.id == req.query.id){
            memberInfo[0] = list;
        }
    });
    res.json(memberInfo[0]);
})

app.get("/register_view", (req, res) => {
    res.render("register_view");
})

app.get("/checkId/:id", (req, res) => {
    members.forEach(a => {
        if(a.id == req.params.id){
            res.json(1);
            return;
        }
    })
    res.json(0);
})

app.get("/view_member", (req, res) => {
    res.render("view_member");
})

app.get("/addMember", (req, res) => {
    res.json(members);
})

app.listen(3000, ()=>{console.log("3000port start")});