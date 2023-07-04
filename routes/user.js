const express=require('express');
const {registerUser,loginUser,logoutUser}=require('../controller/user.js')
const {registerStaff,loginStaff,logoutStaff}=require('../controller/staff.js')
const {results,getResult}=require('../controller/result.js');
const verifyToken=require('../middleware/verifyToken.js');

const router=express.Router()

router.post('/signup',registerUser);

router.post('/signupStaff',registerStaff);

router.post('/login',loginUser);

router.post('/loginStaff',loginStaff);

router.post('/logout',logoutUser);

router.post('/results',results);

router.get('/:email',getResult);


module.exports=router;