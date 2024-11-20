const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true  // Corrected from 'require' to 'required'
    },
    email: {
        type: String,
        required: true  // Corrected from 'require' to 'required'
    },
    phone: {
        type: String,
        required: true  // Corrected from 'require' to 'required'
    },
    password: {
        type: String,
        required: true  // Corrected from 'require' to 'required'
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
});

// to hash the password before save using bcrypt
userSchema.pre("save", async function(next) {
    const user = this; // contains all email, password, phone, username, isAdmin
    console.log("pre", this);
    
    if (!user.isModified("password")) {
        next();
    }

    try {
        // hash the password
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRound);

        user.password = hashedPassword;
    } catch (error) {
        next(error);
    }
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
