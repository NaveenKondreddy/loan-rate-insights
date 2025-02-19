require('dotenv').config();
const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define schema and model for loan rates
const rateSchema = new mongoose.Schema({
    date: String,
    rate: Number
});

const Rate = mongoose.model("loan-rates", rateSchema, "loan-rates");

// Sample mortgage rates data
const sampleRates = [
    { date: "2024-02-10", rate: 6.5 },
    { date: "2024-02-11", rate: 6.4 },
    { date: "2024-02-12", rate: 6.7 },
    { date: "2024-02-13", rate: 6.2 },
    { date: "2024-02-14", rate: 6.8 },
    { date: "2024-02-15", rate: 6.3 },
    { date: "2024-02-16", rate: 6.6 },
    { date: "2024-02-17", rate: 6.1 },
    { date: "2024-02-18", rate: 6.4 },
    { date: "2024-02-19", rate: 6.2 }
];

// Function to insert data
const seedData = async () => {
    try {
        await Rate.deleteMany(); // Clear existing data
        await Rate.insertMany(sampleRates); // Insert new data
        console.log("Sample mortgage rates inserted successfully!");
        mongoose.connection.close(); // Close DB connection
    } catch (error) {
        console.error("Error inserting data:", error);
        mongoose.connection.close();
    }
};

seedData();
