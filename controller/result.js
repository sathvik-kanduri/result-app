const result =require('../models/result.js');
const connectDB=require('../config/db.js');

const results=async(req,res,next)=>{

    connectDB();
    try
    {

    const email=req.body.email;
    const name=req.body.name;
    const adhoc=req.body.adhoc;
    const fom=req.body.fom;
    const ds=req.body.ds;

    const Result=await result.create({
        name:name,
        email:email,
        results:{adhoc:adhoc,
        fom:fom,
        ds:ds}
    })
    res.send(Result);
}
    
   catch(err)
   {
    console.log("the error of result is",err);
   }
    
    
}

const getResult=async(req,res,next)=>{

    connectDB();
    try
    {
        const email=req.params.email;
        const Result=await result.findOne({email:email});
        res.send(Result);
    }
    catch(err)
    {
        res.json({message:err});
    }

}
module.exports ={results,getResult};

