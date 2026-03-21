module.exports.index = (req, res) => {
    res.render("client/pages/products/index", {
        pageTitle: "Sản phẩm"
    });
}

module.exports.add = (req, res) => {
    res.send("Thêm mới sản phẩm");
}

module.exports.edit = (req, res) => {
    res.send("Sửa sản phẩm");
}

module.exports.delete = (req, res) => {
    res.send("Xóa sản phẩm");
}
