const {z} = require("zod");


// Creating an Object Schema 
const signupSchema = z.object({
    username : z
    .string({required_error: "Name is required"})
    .trim()
    .min(3,{message: "Name must be atleast 3 characters."})
    .max(255,{message: "Name cannot exceed more than 255 characters"}),

    email : z
    .string({required_error: "Email is required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3,{message: "Email must be atleast 3 characters."})
    .max(255,{message: "Email cannot exceed more than 255 characters"}),

    phone : z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10,{message: "Phone must be atleast 10 characters."})
    .max(20,{message: "Phone cannot exceed more than 20 characters"}),

    password : z
    .string({required_error: "Password is required"})
    .trim()
    .min(7,{message: "Password must be atleast 6 characters."})
    .max(1024,{message: "Password cannot exceed more than 1024 characters"}),
})


const loginSchema = z.object({
    email : z
    .string({required_error: "Email is required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3,{message: "Email must be atleast 3 characters."})
    .max(255,{message: "Email cannot exceed more than 255 characters"}),

    password : z
    .string({required_error: "Password is required"})
    .trim()
    .min(7,{message: "Incorrect Password."})
    .max(1024,{message: "Password cannot exceed more than 1024 characters"}),
})


module.exports = {signupSchema,loginSchema};