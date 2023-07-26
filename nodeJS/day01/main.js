const http = require('http'); // import == require()
const fs = require("fs"); // file을 읽을 때 사용

/*

request : 사용자의 정보를 저장하는 객체
response : 사용자에게 응답하는 경우 사용하는 객체

*/

const app = http.createServer((req, res) => {
    console.log("연결 되었습니다.");
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8;'});
    
    console.log(req.url);
    
    if(req.url === '/'){
        res.end("ggggggggg");
    }else if(req.url === '/test'){
        fs.readFile("./test.html", (err, data) => {
            //err없으면 null, err발생하면 err 내용
            if(err){
                throw err;
            }
            res.end(data);
        });
    }
});

app.listen(3000, '192.168.42.113'); 