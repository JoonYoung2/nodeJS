const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("gdgd");
   
});

app.get("/test", (req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("gdgd");
   
});

app.listen(3000, () => { 
    console.log("3000 server 연동");
});