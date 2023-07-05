const express =require('express')
const mongoose=require('mongoose')
const userRoute=require('./routes/user.js');
const cookieParser = require('cookie-parser');
const cors=require('cors');
const app=express();


mongoose.connect('mongodb+srv://sathvik:Sathvik%402000@cluster0.ovlrsyr.mongodb.net/Byoa')
.then(()=>
{
    console.log('the database is connected')
})
.catch((err)=>{
    console.log('the error is',err);
})


app.use(cors({
    origin:"*"
    
}));
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth',userRoute);

app.get('/too',(req,res)=>{
    res.send("cookie");
})




app.listen(7000,()=>{
    console.log('the port is 7000');
})