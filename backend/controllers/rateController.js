const { fetchMortgageRates, calculateBestWorstDays } = require("../utils/rateUtils");

// Controller function to get all mortgage rates
const getRates = async (req, res) => {
    try {
        const rates = await fetchMortgageRates();
        if (!rates.length) {
            return res.status(404).json({ message: "No mortgage rate data available." });
        }
        res.json(rates);
    } catch (error) {
        console.error(`Error in ${req.originalUrl}:`, error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Controller function to get best and worst pricing days
const getBestWorstDays = async (req, res) => {
    try {
        const rates = await fetchMortgageRates();
        const result = calculateBestWorstDays(rates);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.json(result);
    } catch (error) {
        console.error(`Error in ${req.originalUrl}:`, error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getRates, getBestWorstDays };
