require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Rate = require('./models/Rate');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const rateSchema = new mongoose.Schema({
    date: String,
    rate: Number
});

app.get('/rates', async (req, res) => {
    try {
        const rates = await Rate.find();
        console.log("Fetched Rates from DB:", rates);
        res.json(rates);
    } catch (error) {
        console.error("Error fetching rates:", error);
        res.status(500).json({ message: "Error fetching rates", error });
    }
});

app.get('/best-worst-days', async (req, res) => {
    const rates = await Rate.find().sort({ date: 1 });

    if (rates.length < 2) return res.status(400).json({ message: "Not enough data" });

    let bestDay = rates[0].date, worstDay = rates[0].date;
    let bestDiff = -Infinity, worstDiff = Infinity;

    for (let i = 0; i < rates.length - 1; i++) {
        for (let j = i + 1; j < rates.length; j++) {
            let diff = rates[j].rate - rates[i].rate;
            if (diff > bestDiff) {  
                bestDiff = diff;
                bestDay = rates[i].date;
            }
            if (diff < worstDiff) {
                worstDiff = diff;
                worstDay = rates[i].date;
            }
        }
    }

    res.json({ bestDay, worstDay });
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
