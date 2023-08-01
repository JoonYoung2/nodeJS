const express = require("express");
const router = require("./src/routes/common_router");
const memberRouter = require("./src/routes/member/member_router");

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", router);
app.use("/member", memberRouter);
app.use("/login_check", memberRouter);

app.listen(3000, () => { console.log("Server is running on port 3000")});
