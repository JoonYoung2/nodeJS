const cookieService = require("../../service/cookie/cookie_service");
const cookieConfig = {
    httpOnly : true,
    maxAge : 100 * 1000,
    signed : true // 암호화 가능
}

const index = (req, res) => {
    // if(req.cookies != undefined){
    //     userCookie = req.cookies.myCookie;
    // }
    // let userCookie = req.cookies.myCookie;
    let userCookie = req.signedCookies.myCookie; // 암호화된 쿠키 설정
    res.cookie("myCookie", "valueCookie", cookieConfig);
    res.render("cookie/cookie01", {userCookie});
}

const popup = (req, res) => {
    res.render("cookie/popup");
}

const quiz = (req, res) => {
    // const userCookie = req.cookies.myCookie;
    let userCookie = req.signedCookies.myCookie; // 암호화된 쿠키 설정
    res.render("cookie/quiz", {userCookie});
}

const quizPopup = (req, res) => {
    res.render("cookie/quizPopup");
}

const quizMakeCookie = (req, res) => {
    res.cookie("myCookie", "value", cookieConfig);
    res.render("cookie/quizPopup");
}

const cart = (req, res) => {
    res.render("cookie/cart", {list : cookieService.cart()});
}

const save1 = (req, res) => {
    const saveOne = cookieService.save1(req.query.goods_id);
    console.log(saveOne);
    res.render("cookie/cartInfo", {item : saveOne});
}



const save2 = (req, res) => {
    let cart_list = req.signedCookies.cart_list;
    console.log(cart_list);
    if(req.signedCookies.cart_list === undefined){
        cart_list = {}; // 객체 생성
    }

    cart_list = cookieService.save2( cart_list, req.params.goods );
    res.cookie("cart_list", cart_list, cookieConfig);
    
    const msg = `<script>alert("${req.params.goods}의 상품이 등록되었습니다."); location.href="/cookie/cart"</script>`
    res.send(msg);

}

const viewList = (req, res) => {
    let cart_list = req.signedCookies.cart_list;
    if( !cart_list ){
        const msg = `<script>alert("저장된 목록이 없습니다."); location.href="/cookie/cart"</script>`
        res.send(msg);
    }
    res.render("cookie/view_list", {list : cookieService.view_list(cart_list)});
}

// const viewList = (req, res) => {
//     let cart_list = req.signedCookies.cart_list;
//     if( !cart_list ){
//         const msg = `<script>alert("저장된 목록이 없습니다."); location.href="/cookie/cart"</script>`
//         res.send(msg);
//     }
//     res.render("cookie/view_list", {list : cart_list});
// }

module.exports = {index, popup, quiz, quizPopup, quizMakeCookie, cart, save1, save2, viewList};