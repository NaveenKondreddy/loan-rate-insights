// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const rateRoutes = require("./routes/rateRoutes");

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Connect to MongoDB database
connectDB();

// Define API routes
app.use("/api", rateRoutes);

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server 
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export the app for testing purposes
module.exports = app;