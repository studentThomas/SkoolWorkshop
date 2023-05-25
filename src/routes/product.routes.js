const express = require("express");
const logger = require("../util/logger").logger;
const router = express.Router();
const productController = require("../controllers/product.controller");

router.use(express.json());

router.get("/product", productController.getProducts);
router.post("/product", productController.addProduct);

module.exports = router;
