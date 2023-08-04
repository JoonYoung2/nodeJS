const router = require("express").Router();
const fileController = require("../controller/file_controller");
const multer = require("multer");

// const upload = multer({dest : "upload_file"}); //파일 저장할 위치
// 스토리지 객체 생성
const stg = multer.diskStorage( {
    destination : (req, file, cb) => { //cb == callback 어느 위치에 저장할 지 지정해주는 역할
        console.log("==== dest ====");
        cb( null , "upload_file/" ); // null == 변하지않음, 파일이 저장될 경로
    },
    filename : (req, file, cb) => {
        console.log("==== filename ====");
        console.log(file);
        cb( null , Date.now() + "-" + file.originalname );
    }
    
});

const f_Filter = (req, file, cb) => {   // 원하는 파일만 받을 수 있도록 설정 가능
    console.log("==== filter ====");
    const type = file.mimetype.split("/")[0];
    console.log("type ===========> ", type);
    if(type === "image"){
        cb(null,true); //true == 파일을 저장하겠다
    }else{
        // req = { test : "이미지만 저장하세요!!!"}
        req.fileValidation = "이미지만 저장하세요!!!";
        cb(null, false);
    }
}   

// Multer 미들웨어 생성 및 스토리지 설정 적용
const upload = multer({storage : stg, fileFilter : f_Filter}); // file을 입력하지 않으면 실행 x

router.get("/", fileController.views.index);

router.post("/upload", upload.single("file_name"), fileController.process.upload); // 여러개 파일 받을 시 arr()로 받아야 함

router.get("/list", fileController.views.list);

router.get("/modifyForm", fileController.views.modifyForm);

module.exports = router;