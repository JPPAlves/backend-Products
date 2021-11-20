const db = require("../../database/models");
const ProductModel = db.Product;

const productService = {
    async createProduct(name, preco, preco_desc, prod_qt_estoque, cate_id) {
        try {
            let product = ProductModel.create({
                name, preco, preco_desc, prod_qt_estoque, cate_id
            });
            return product;

        } catch (error) {
            console.error(error);
            return undefined

        }

    },
    async getProducts() {
        try {

            let Products = await ProductModel.findAll();

            return Products;

        } catch (error) {
            console.error(error);
            return undefined

        }
    }
}
module.exports = productService;