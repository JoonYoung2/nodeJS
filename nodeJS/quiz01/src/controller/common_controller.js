const index = (req, res) => {
    console.log("index  연동")
    res.render("index");
}

module.exports = { index };