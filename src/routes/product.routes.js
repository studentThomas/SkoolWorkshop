const express = require("express");
const logger = require("../util/logger").logger;
const router = express.Router();
const productController = require("../controllers/product.controller");

router.use(express.json());

router.post("/product", productController.addProduct);
router.get("/product/:workshopId", productController.getProducts);
router.put("/product/:productId", productController.updateProduct);
router.delete("/product/:productId", productController.deleteProduct);

module.exports = router;
