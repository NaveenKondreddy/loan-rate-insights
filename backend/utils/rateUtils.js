const Rate = require("../models/Rate");

// Fetch mortgage rates from the database
const fetchMortgageRates = async () => {
    return await Rate.find().sort({ date: 1 });
};

// Calculate best and worst pricing days based on rate changes
const calculateBestWorstDays = (rates) => {
    if (rates.length < 2) {
        return { error: "Not enough data to determine best/worst pricing days." };
    }

    let minRate = Math.min(...rates.map(r => r.rate));
    let maxRate = Math.max(...rates.map(r => r.rate));

    let bestDays = [];
    let worstDays = [];
    let maxDrop = 0;
    let maxIncrease = 0;

    for (let i = 0; i < rates.length; i++) {
        const { date, rate } = rates[i];

        if (rate === minRate) {
            let drop = 0;
            if (i > 0) drop = rates[i - 1].rate - rate; // Compare with previous day
            if (i < rates.length - 1) drop = Math.max(drop, rates[i + 1].rate - rate); // Compare with next day
            
            if (drop > maxDrop) {
                maxDrop = drop;
                bestDays = [date];
            } else if (drop === maxDrop) {
                bestDays.push(date);
            }
        }

        if (rate === maxRate) {
            let increase = 0;
            if (i > 0) increase = rate - rates[i - 1].rate;
            if (i < rates.length - 1) increase = Math.max(increase, rate - rates[i + 1].rate);
            
            if (increase > maxIncrease) {
                maxIncrease = increase;
                worstDays = [date];
            } else if (increase === maxIncrease) {
                worstDays.push(date);
            }
        }
    }

    return { bestDays, worstDays };
};

module.exports = { fetchMortgageRates, calculateBestWorstDays };
