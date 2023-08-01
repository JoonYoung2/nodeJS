const express = require("express");
// const router = require("./router/router");
let con;

const app = express();

app.get("/", (req, res) => {
    console.log("1. 연동전");
    con = connect();
    con.then((msg)=>{      //약속된 결과값이 있었을 때 처리하는 곳
        console.log("3. 연동 완료 후 특정기능 사용");
        res.send("con => " + msg);
    });    
});

app.get("/async", async (req, res) => {                     // 비동기 방식으로 처리하는 함수가 있다.
    console.log("1. 연동전 async");
    con = await connect();                                  // then 방식과 동일

    console.log("3. 연동 완료 후 특정기능 사용");
    res.send("con => " + con);
});

const connect = () => {
    let msg;

    const result = new Promise((resolve)=> setTimeout(() => {       //동기화 방식.
        msg = "DB연동 되었습니다!!!";
        console.log("2. DB연동하는 중...");
        resolve(msg);
    }, 1000) );

    return result;

    // setTimeout(() => {                                   //비동기 방식.
    //     msg = "DB연동 되었습니다!!!";
    //     console.log("2. DB연동하는 중...");
    // }, 1000);

    // return msg;
}

// app.set("views", "./src/views");
// app.set("view engine", "ejs");

// app.use("/", router);

app.listen(3000, () => {console.log("3000port Start!!")});