const mongoose = require("mongoose")

const projectSchema =new mongoose.Schema({
    title:{
        type:String, 
        unique:true,
        required:true
    },
    description:{
        type:String,
        maxLength:255,
    },
    deadline:{
        type:Date,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})

const projectModel=mongoose.model('Projects',projectSchema);
module.exports=projectModel;