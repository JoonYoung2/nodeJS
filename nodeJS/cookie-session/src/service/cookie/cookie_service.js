const dbCart = require("../../database/cookie/user_cart");

const cart = () => {
    return dbCart;
}

const save1 = (id) => {
    const db = dbCart;
    
    const item = db.filter(items => 
        items.goods_id == id);
    return item[0];

}

const save2 = (cart_list, goods) => {

     //{1 : 개수, 2 : 개수 ,,,}
    //{}
    if(!cart_list[goods]){
        // cart_list = { 1 : 0 }
        cart_list[goods] = 0;
    }
    // cart_list = { 1 : 1 }
    cart_list[goods] = cart_list[goods] + 1;
    
    return cart_list;

    //내가 푼 문제~~~
    /*
    var cnt = 0;
    for(var i = 0; i < dbCart.length; i++){
        if(dbCart[i].goods_id == goods){
            for(var i = 0; i < cart_list.length; i++){
                if(cart_list[i].goods_id == goods){
                    cart_list[i].number += 1;
                    cart_list[i].total += cart_list[i].price;
                    cnt++;
                }
            }
            if(cnt == 0){
                if(dbCart[i].goods_id == goods){
                    cart_list[goods-1] = dbCart[i];
                }
            }
            break;
        }
    }
    return cart_list;
    */
   //내가 푼 문제~~
}

const view_list = (cart_list) => {
    console.log("=== ser view_list ===");
    console.log(cart_list);

    let list = [];
    for(i in cart_list){
        console.log("key : ", i)
        let item = {};
        item['goods_id'] = i;    
        item['title'] = dbCart[i-1].title;
        item['price'] = dbCart[i-1].price;
        item['number'] = cart_list[i];
        item['total'] = dbCart[i-1].price * cart_list[i];
        list = list.concat(item);
        // list.push(item); 위나 아래 둘 중 하나만 쓰기
    }
    console.log(list);
    return list;
}

module.exports={cart, save1, save2, view_list};