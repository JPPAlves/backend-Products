const productService = require("../services/productService");

const ProductController = {
    // criar um produto
    async createProduct(req, res) {
        const { name, preco, preco_desc, prod_qt_estoque, cate_id } = req.body;

        if (name && preco && preco_desc && prod_qt_estoque && cate_id) {
            let product = await productService.createProduct(name, preco, preco_desc, prod_qt_estoque, cate_id);

            if (!product) {
                return res.status(400).json({
                    error: 'Parametros invalidos'
                });
            }
            return res.json(product);
        }
        return res.status(400).json({
            error: 'Parametros invalidos'
        });
    },
    // listar todos os produtos
    async getProducts(req, res) {
        let products = await productService.getProducts();

        if (products.length == 0) {
            return res.status(404).json({
                error: 'Nenhum produto encontrado'
            });
        }
        return res.json(products);
    },
    // listar um produto especifico
    async getProduct(req, res) {
        const id = req.params.id;

        let product = await productService.getProduct(id);

        if (product == null) {
            return res.status(404).json({
                error: 'falha no Servidor ao fazer a buscar'
            });
        }
        return res.json(product);
    },
    // Atualizar um produto
    async updateProduct(req, res) {
        const id = req.params.id;
        const { name, preco, preco_desc, prod_qt_estoque, cate_id, new_name, new_preco, new_preco_desc, new_prod_qt_estoque, new_cate_id } = req.body;

        let product = await productService.updadeProduct(id, name, preco, preco_desc, prod_qt_estoque, cate_id, new_name, new_preco, new_preco_desc, new_prod_qt_estoque, new_cate_id);

        return res.json(product);
    },

    // Deletar um produto
    async deleteProduct(req, res) {
        const id = req.params.id;


        let product = await productService.deleteProduct(id);

        if (!product) {
            return res.status(404).json({
                error: 'Produto Não Encontrado'
            });
        }

        return res.json({
            message: 'Produto Excluido Com Sucesso'
        });
    }


}
module.exports = ProductController;