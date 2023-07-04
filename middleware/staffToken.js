const jwt=require('jsonwebtoken');
const User=require('../models/user.js');

const staffToken= async(req,res,next)=>{
    console.log(req.cookies);
    const token= req.cookies.hash;
    
    if(!token)
    {
        next(new Error("Invalid token"));
    }

    try{
        const decode=jwt.verify(token,"mySecret");
        console.log(decode);
        const user=await User.findById(decode.userID);
        req.user=user;
        next();
        console.log(req.user);
    }
    catch(err)
    {
        res.status(401);
        next(new Error("Not authorized,Token failed"));
    }
}

module.exports=staffToken;