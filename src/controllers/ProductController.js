const productService = require("../services/productService");

const ProductController = {
    async createProduct(req, res) {
        const { name, preco, preco_desc, prod_qt_estoque, cate_id } = req.body;

        let product = await productService.createProduct(name, preco, preco_desc, prod_qt_estoque, cate_id);

        return res.json(product);
    },

    async getProducts(req, res) {
        let products = await productService.getProducts();

        return res.json(products);
    }

}
module.exports = ProductController;