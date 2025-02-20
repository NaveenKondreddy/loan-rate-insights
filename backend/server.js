require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const rateRoutes = require("./routes/rateRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use("/api", rateRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
