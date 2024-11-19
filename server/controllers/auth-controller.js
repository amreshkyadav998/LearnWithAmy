const User = require("../models/user-model.js");
// Home Logic
const home = async (req,res) => {
    try{
        res.status(200).send("This the route (main) page using router method using route");
    }catch(error){
        console.log(error);
    }
}

// Register Logic
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password, phone } = req.body; // Extract data from the request body

        // Check if email already exists
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Create a new user in the database
        const createdData = await User.create({ username, email, password, phone });

        res.status(201).json({ msg: "User registered successfully", user: createdData }); // Send success response
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" }); // Send server error response
    }
};


module.exports = {home,register};