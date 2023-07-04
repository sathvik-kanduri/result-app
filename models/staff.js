const mongoose=require('mongoose');

const staff=mongoose.Schema({
    name:{
       type:String,
       require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    
},
{timestamps:true}
)

module.exports=mongoose.model("Staff",staff);