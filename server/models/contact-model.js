const { Schema, model, default: mongoose } = require("mongoose");

 // no need to write mongoose.Schema because we have destructured above
const contactSchema = new Schema({
    username: {type:String,required:true},
    email: {type:String,required:true},
    message: {type:String,required:true},
});

//Create model
const Contact = new model('Contact',contactSchema);


module.exports = Contact;
