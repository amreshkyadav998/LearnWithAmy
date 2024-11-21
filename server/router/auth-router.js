const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller.js");
const {signupSchema,loginSchema} = require("../validators/auth-validator.js");
const validate = require("../middleware/validate-middleware.js");


// M-1
// router.get("/" , (req,res) => {
//     res.status(200).send("This the route (main) page using router method")
// });

// M-2
router.route("/").get(authcontrollers.home); // get operation

router.route("/register").post( validate(signupSchema) ,authcontrollers.register); //post operation
router.route("/login").post(validate(loginSchema), authcontrollers.login); //post operation



module.exports = router;