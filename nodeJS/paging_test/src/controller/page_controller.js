const service = require("../service/page_service");

const views = {
    index : (req, res) => {
        res.render("index");
    },

    list : async (req, res) => {
        console.log("start : ", req.query.start);
        const totalContent = await service.pageRead.totalContent();//총 글에 대한 개수를 가져옴.
        const data = await service.pageRead.list( req.query.start, totalContent );
        res.render("list", {list : data.list, start : data.start, totalContent, page : data.page});
    },

    writeForm : (req, res)=>{

        res.render("write_form");
    },
    content : async (req, res) =>{
        const data = await service.pageRead.content(req.params.num);
        res.render("content", { data })
    }
}
const process = {
    write : async (req, res)=>{
    const msg = await service.pageInsert.write( req.body );
    res.redirect("/page/list");
    }
}
module.exports = {views,process};