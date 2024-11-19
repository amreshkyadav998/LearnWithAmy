const express = require("express");
const app = express();
const router = require("./router/auth-router");
const ConnectDb = require("./utils/db.js");

// env variables access
require("dotenv").config();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // This line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body. This middleware is responsible for parsing JSON data from requests, and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.


// use for mounting the router
app.use("/api/auth", router);

// Manual routing

// app.get("/" , (req,res) => {
//     res.status(200).send("Welcome to best learning project using mern tech skills");
// });

// app.get("/register" , (req,res) => {
//     res.status(200).send("Welcome to registration page");
// });


//database connection to mongodb and server run
ConnectDb().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  })
});

