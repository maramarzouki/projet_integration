const mongoose=require('mongoose')

const toDoTaskSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})

const toDoTaskModel=mongoose.model('ToDoList',toDoTaskSchema);
module.exports=toDoTaskModel;