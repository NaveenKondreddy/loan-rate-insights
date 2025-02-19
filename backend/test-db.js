require('dotenv').config();
const mongoose = require('mongoose');
const Rate = require('./models/Rate'); // Import the model

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log("MongoDB Connected");

    // Fetch all records from MongoDB
    const rates = await Rate.find();
    console.log("Fetched Rates:", rates);

    mongoose.connection.close();
}).catch(err => console.log("MongoDB Connection Error:", err));
