const mongoose = require("mongoose");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


const URI = process.env.MONGODB_URI;
// For debugging purpose
// console.log(`MongoDB URI: ${URI}`);

const ConnectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connection Successful");
    } catch (error) {
        console.error("Database connection failed. Error details:", error.message);
        process.exit(1); // Exit with error code
    }
};

module.exports = ConnectDb;
