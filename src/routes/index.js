// const userController = require("../controllers/userControllers");
const ProductController = require("../controllers/ProductController");


const routes = require("express").Router();


// rotas do produto
routes.post("/product", ProductController.createProduct);
routes.get("/products", ProductController.getProducts);

module.exports = routes;