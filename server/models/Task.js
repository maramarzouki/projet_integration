const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String
    },
    status:{
        type:String,
        enum:['To do','In progress','Done'],
        default:'To do'
    },
    priority:{
        type:String,
        enum:['LOW','MEDIUM','HIGH'],
        default:'LOW'
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'projects',
        required:true
    }
})

const taskModel = mongoose.model('tasks',taskSchema);
module.exports=taskModel;