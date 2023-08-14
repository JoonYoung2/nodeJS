const dao = require("../database/pageDAO");

const pageRead = {
    list : async (start, totalCounter) => {
        start = (start && start > 1)?Number(start):1; // Number == 문자열을 숫자로 변환
        const page = pageOperation(start, totalCounter);
        // if(start && start > 1){
        //     start = Number(start);
        // }else{
        //     start = 1;
        // }
        const list = await dao.daoRead.list(page.startNum, page.endNum);
        console.log("service : ", list);

        data = {};
        data.start = start;
        data.list = list.rows;
        data.page = page;

        console.log("data : ", data);

        return data;
    },

    content : async (num) =>{
        pageUpdate.upHit(num);//조회수 //await 적용 가능
        const data = await dao.daoRead.content(num);
        return data.rows[0];
    },

    totalContent : async () =>{
        const totalContent = await dao.daoRead.totalContent();
        console.log( totalContent );
        return totalContent.rows[0]['COUNT(*)'];
    }
        
}

const pageOperation = (start, totalCounter) => {
    let page = {};
    const pageNum = 3;
    const num = (totalCounter % pageNum === 0)?0:1;
    page.totPage = parseInt( totalCounter / pageNum ) + num;
    page.startNum = (start-1) * pageNum + 1;
    page.endNum = start * pageNum;
    return page;
}

const pageUpdate = {
    upHit : (num) =>{ //async 적용 가능
        dao.daoUpdate.upHit(num); //await 적용 가능 위의 3개 세트
    }
}

const pageInsert = {
    write : async ( body ) =>{
    const result = await dao.daoInsert.write( body );
    }
}

module.exports={pageRead, pageInsert};