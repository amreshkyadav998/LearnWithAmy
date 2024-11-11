const express = require("express");
const router = express.Router();


// M-1
// router.get("/" , (req,res) => {
//     res.status(200).send("This the route (main) page using router method")
// });

// M-2
router.route("/").get((req,res) => {
    res.status(200).send("This the route (main) page using router method using route");
});

router.route("/register").get((req,res) => {
    res.status(200).send("Welcome to registration page");
})



module.exports = router;