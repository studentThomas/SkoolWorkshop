const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.use(express.json());

router.get("/product", productController.getProducts);

module.exports = router;
