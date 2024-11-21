const Contact = require("../models/contact-model");

const contactForm = async (req,res) => {
    try {
        const response = req.body;
        const createdData = await Contact.create(response);
        res.status(200).json({msg:createdData});
    } catch (error) {
        res.status(500).json({message:"Message not delivered"});
    }
}

module.exports = contactForm;