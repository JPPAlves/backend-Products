const ProductController = require("../controllers/ProductController");

// rotas do produto
const routes = require("express").Router();

// criar um produto
routes.post("/product", ProductController.createProduct);
// listar todos os produtos
routes.get("/products", ProductController.getProducts);
// listar um produto especifico
routes.get("/product/:id", ProductController.getProduct);
// atualizar um produto
routes.put("/product/:id", ProductController.updateProduct);
// deletar um produto
routes.delete("/product/:id", ProductController.deleteProduct);

module.exports = routes;