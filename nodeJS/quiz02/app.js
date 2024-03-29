const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const sessionConfig = require("./config/cookie_session/cookie_session_config");

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use( session( sessionConfig.sessionConfig ));

const router = require("./src/routers/router")(app);

app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", router);

app.listen(3000, () => {console.log("3000port start!!")});

