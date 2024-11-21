const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");

// ----------------------------
//Router for Contact Form
//-----------------------------

router.route("/contact").post(contactForm);

module.exports = router;