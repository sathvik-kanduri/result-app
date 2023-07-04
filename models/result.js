const mongoose=require('mongoose');

const result=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
       type:String,
       require:true
    },
    results:{
        adhoc:{
           type:String,
           require:true
        },
        fom:{
            type:String,
            require:true
        },
        ds:{
            type:String,
            require:true
        }
    }
})

module.exports = mongoose.model("Results",result);