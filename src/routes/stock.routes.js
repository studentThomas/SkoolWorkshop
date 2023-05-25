const express = require("express");
const logger = require("../util/logger").logger;
const router = express.Router();
const stockController = require("../controllers/stock.controller");

router.use(express.json());

router.get("/stock/:productId", stockController.getStock);
router.put("/stock/:productId/:quantity", stockController.updateStock);

module.exports = router;
