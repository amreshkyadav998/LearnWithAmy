const express = require("express");
const app = express();
const router = require("./router/auth-router");
const ConnectDb = require("./utils/db.js");
const path = require('path');
// const { connect } = require("http2");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const PORT = process.env.PORT || 5002;

// Another way to connect mongoDb
(async () => {
  try {
      await ConnectDb();
      console.log("Mongodb connection successful"); // Should appear
  } catch (err) {
      console.error("Failed to start the server:", err.message);
  }
})();

app.use(express.json()); // This line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body. This middleware is responsible for parsing JSON data from requests, and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.

//Select then search
// use for mounting the router
app.use("/api/auth", router);

// server run
// ConnectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
// })















// Another way to connect mongoDb
// (async () => {
//   try {
//       await ConnectDb();
//       console.log("Mongodb connection successful"); // Should appear
//   } catch (err) {
//       console.error("Failed to start the server:", err.message);
//   }
// })();





// Manual routing

// app.get("/" , (req,res) => {
//     res.status(200).send("Welcome to best learning project using mern tech skills");
// });

// app.get("/register" , (req,res) => {
//     res.status(200).send("Welcome to registration page");
// });
