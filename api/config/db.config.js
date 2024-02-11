// Import necessary libraries
const mongoose = require('mongoose');

// Function to connect to the database
const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/itechservice', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
};

module.exports = connectToDatabase;
