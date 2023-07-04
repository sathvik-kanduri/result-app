const express=require('express');
const staff=require('../models/staff.js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const connectDB=require('../config/db.js');



const loginStaff=async(req,res,next)=>{

    try{
        const {email,password}=req.body;
        const User=await staff.findOne({email})
        const matchPassword=await bcrypt.compare(password,User.password);

        if(!matchPassword)
        {
            res.status(400);
            next(new Error("invalidate username and password"));
        }
        
        if(User && matchPassword)
        {
            const token=jwt.sign({userID: User._id},"mySecret",{
            expiresIn:"7d"} )
            
            res.cookie("staff",token,{
                withCrdentials:true,
                httpOnly:false,
                secure:false,
                sameSize: "strict",
                maxAge: 7*24 * 60 *60
            })

            res.json({
                id:User._id,
                name:User.name,
                email:User.email,
                
            })
        }
        
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
}

const registerStaff=async(req,res,next)=>{


    try{
        const {name,email,password}=req.body;
        
        const salt= await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);
        const User=await staff.create({
            name:name,
            email:email,
            password:hashPassword,

        })
        
        if(User)
        {
            const token=jwt.sign({userID: User._id},"mySecret",{
            expiresIn:"7d"} )
            
            res.cookie("staff",token,{
                httpOnly:false,
                secure:false,
                sameSize: "strict",
                maxAge: 7*24 * 60 *60
            })

            console.log(token);

            res.json({
                id:User._id,
                name:User.name,
                email:User.email,
                password:hashPassword
            })
        }
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
}

const logoutStaff=(req,res,next)=>{

    try{
            res.cookie("hash","",{
                httpOnly:true,
                expires: new Date(0)
            })
            res.status(200).json({msg:"loggout Staff"});
        }
    
    catch(err)
    {
        console.log(err);
        next(err);
    }
}



module.exports={registerStaff,loginStaff,logoutStaff}