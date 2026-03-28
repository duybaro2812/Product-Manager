const Product = require("../../models/product.model")
module.exports.index = async (req, res) => {
    const products = await Product.find({});

    console.log(products);

    const newProducts   = products.map( item =>  {
        item.priceNew = ((item.price*(100-item.discountPercentage)) / 100).toFixed(0);
        return item;
    });
    
    console.log(newProducts);

    res.render("client/pages/products/index", {
        pageTitle: "Sản phẩm",
        products: products
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
