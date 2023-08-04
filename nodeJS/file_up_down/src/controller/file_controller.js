const views = {
    index : (req, res) => {
        res.render("file_index");
    },

    list : (req, res) => {
        let msg = `<h3>list page connect</h3>`
        res.send(msg);
    },

    modifyForm : (req, res) => {
        let msg = `<h3>This is modifyForm</h3>`
        res.send(msg);
    },

    upload : (req, res) => {
        res.send("gdgd");
    }
}

const process = {
    upload : (req, res) => {
        console.log("==== controller upload ====");
        console.log(req.body);
        console.log("---------------------------");
        console.log(req.file);
        console.log("---------------------------");
        console.log("req.fileValidation : ", req.fileValidation);
        console.log("===========================");
        if(req.fileValidation){
            return res.send(req.fileValidation);
        }
        res.send("upload");
    }
}

module.exports = {views, process};