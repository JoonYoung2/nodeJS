const express = require("express");
const member = require("./db/memberDAO");
 
const app = express();
const router = express.Router();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", router);

router.get("/member/index", (req, res)=>{
    res.render("index");
});

router.get("/test1", (req, res)=>{
    res.render("test1", {member : member});
});

router.get("/test2", (req, res)=>{
    res.render("test2");
});

const router2 = express.Router();

app.use("/board", router2);

router2.get("/index", (req, res)=>{
    res.send("/board/index 연결되었습니다!!!!");
});

// app.get("/", (req, res) => {
//     res.render("index");
// });

app.listen(3000, (err, res) => { console.log("3000 port server") } );