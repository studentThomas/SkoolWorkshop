const express = require("express");
const logger = require("../util/logger").logger;
const router = express.Router();
const stockController = require("../controllers/stock.controller");

router.use(express.json());

router.put("/stock/:productId", stockController.updateStock);

module.exports = router;
