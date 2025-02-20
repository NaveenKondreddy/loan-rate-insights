// Import necessary modules
const express = require("express");
const { getRates, getBestWorstDays } = require("../controllers/rateController");

// Initialize the router
const router = express.Router();

// Define route to get all mortgage rates
router.get("/rates", getRates);

// Define route to get the best and worst days to price a loan
router.get("/best-worst-days", getBestWorstDays);

// Export the router to be used in other parts of the application
module.exports = router;