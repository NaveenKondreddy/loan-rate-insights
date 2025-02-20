const express = require("express");
const { getRates, getBestWorstDays } = require("../controllers/rateController");

const router = express.Router();

router.get("/rates", getRates);
router.get("/best-worst-days", getBestWorstDays);

module.exports = router;
