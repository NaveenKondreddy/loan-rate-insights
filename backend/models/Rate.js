const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
    date: String,
    rate: Number
});

const Rate = mongoose.model("Rate", rateSchema, "loan-rates");

module.exports = Rate;
