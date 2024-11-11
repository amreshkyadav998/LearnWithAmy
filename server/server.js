const express = require("express");
const app = express();

app.get("/" , (req,res) => {
    res.status(200).send("Welcome to best learning project using mern tech skills");
});

app.get("/register" , (req,res) => {
    res.status(200).send("Welcome to registration page");
});

// to start the server
const PORT = 5000;
app.listen(PORT , () => {
    console.log(`Server is running at port: ${PORT}`);
});