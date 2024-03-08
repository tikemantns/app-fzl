// Import necessary libraries
const mongoose = require('mongoose');

// Function to connect to the database
const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://wallet:wallet@cluster0.geon5tl.mongodb.net/wallets?retryWrites=true&w=majority', {});

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
};

module.exports = connectToDatabase;
