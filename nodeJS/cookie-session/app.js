// Install Use
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

// Referance Zone
const sessionConfig = require("./config/cookie_session/config");
const cookieRouter = require("./src/routers/cookie/cookie_router");
const sessionRouter = require("./src/routers/session/session_router");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use( cookieParser("아무값이나키로설정") ); // controller 에서 signed : true를 설정해주면 cookieParse() 안에 String 값 넣어주면 암호화설정 됨
app.use( session( sessionConfig.sessionConfig ));

app.use("/cookie", cookieRouter);
app.use("/session", sessionRouter);

app.listen(3000, () => {console.log("Server is running on port 3000")});