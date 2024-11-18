// Home Logic

const home = async (req,res) => {
    try{
        res.status(200).send("This the route (main) page using router method using route");
    }catch(error){
        console.log(error);
    }
}

// Register Logic
const register = async (req,res) => {
    try{
    console.log(req.body);
    res.status(200).json({message:req.body});
    }catch(error){
        res.status(50).json("Interval Server Error")
    }
}

module.exports = {home,register};