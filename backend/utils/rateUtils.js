const Rate = require("../models/Rate");

// Fetch mortgage rates from the database
const fetchMortgageRates = async () => {
    return await Rate.find().sort({ date: 1 });
};

// Calculate best and worst pricing days
const calculateBestWorstDays = (rates) => {
    if (rates.length < 2) {
        return { error: "Not enough data to determine best/worst pricing days." };
    }

    let bestDay = rates[0].date;
    let worstDay = rates[0].date;
    let minRate = rates[0].rate;
    let maxRate = rates[0].rate;

    rates.forEach(({ date, rate }) => {
        if (rate < minRate) {
            minRate = rate;
            bestDay = date;
        }
        if (rate > maxRate) {
            maxRate = rate;
            worstDay = date;
        }
    });

    return { bestDay, worstDay };
};

module.exports = { fetchMortgageRates, calculateBestWorstDays };
