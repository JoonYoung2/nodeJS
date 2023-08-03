const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser());

const router = require("./src/routers/router")(app);

app.use("/", router);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("3000port start!");
})