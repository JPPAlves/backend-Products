const db = require("../../database/models");
const ProductModel = db.Product;

const productService = {
    // criar um produto
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
    // listar todos os produtos
    async getProducts() {
        try {

            let Products = await ProductModel.findAll();

            return Products;

        } catch (error) {
            console.error(error);
            return undefined

        }
    },
    // listar um produto especifico
    async getProduct(id) {
        try {

            let Product = await ProductModel.findOne({
                where: {
                    id,
                }
            });

            return Product;

        } catch (error) {
            console.error(error);
            return undefined

        }
    },
    // Atualizar o produto
    async updadeProduct(id, name, preco, preco_desc, prod_qt_estoque, cate_id, new_name, new_preco, new_preco_desc, new_prod_qt_estoque, new_cate_id) {
        try {

            let ProductExist = await ProductModel.findOne({
                where: {
                    id: id,
                    name: name,
                    preco: preco,
                    preco_desc: preco_desc,
                    prod_qt_estoque: prod_qt_estoque,
                    cate_id: cate_id,

                }
            });

            if (!ProductExist) {
                console.log("Produto Não Existe");

            }
            ProductExist.name = new_name;
            ProductExist.preco = new_preco;
            ProductExist.preco_desc = new_preco_desc;
            ProductExist.prod_qt_estoque = new_prod_qt_estoque;
            ProductExist.cate_id = new_cate_id;

            await ProductExist.save();

            return ProductExist;

        } catch (error) {
            console.error(error);
            return undefined

        }
    },
    // Deleta o produto
    async deleteProduct(id) {

        try {

            let Product = await ProductModel.destroy({
                where: {
                    id: id
                }
            });

            return Product;
        } catch (error) {
            console.error(error);
            return undefined

        }
    }
}
module.exports = productService;