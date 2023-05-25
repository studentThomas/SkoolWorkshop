const express = require("express");
const router = express.Router();
const workshopController = require("../controllers/workshop.controller");

router.use(express.json());

router.post("/workshop", workshopController.addWorkshop);

module.exports = router;
