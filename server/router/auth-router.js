const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller.js");


// M-1
// router.get("/" , (req,res) => {
//     res.status(200).send("This the route (main) page using router method")
// });

// M-2
router.route("/").get(authcontrollers.home); // get operation

router.route("/register").post(authcontrollers.register); //post operation



module.exports = router;