const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
const router = require("./src/routers/router")(app);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", router);
app.use("/static", express.static(__dirname+"/public")); // css, js같은 파일 경로

app.listen(3000, () => {console.log("3000 port start!!!")});