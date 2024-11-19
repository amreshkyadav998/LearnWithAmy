const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGODB_URI;

const ConnectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connection Successful");
    } catch (error) {
        console.log("Database connection failed");
        process.exit(0); // just exit is db not connected
    }
}


module.exports = ConnectDb;