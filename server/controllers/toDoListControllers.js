const ToDoList=require('../models/ToDoList');

exports.addToDoListTask = (req,res) =>{
    const taskToDo=req.body;
    ToDoList.findOne({title:req.body.title},(task=>{
        if(!task){
            const task=req.body;
            const new_task=new ToDoList(task);
            new_task.save();
            res.status(200).send("task added to to-do list");
        }else{
            res.status(400).send("task already exists")
        }
    }))
}

exports.getToDoListTasks = async (req,res) =>{
    ToDoList.find({user:req.params.userID}).
    then(async tasks=>{
        await res.status(200).send(tasks);
    }).catch(err=>{
        res.status(400).send(err)
    })
}

exports.deleteToDoTask = async (req,res)=>{
    ToDoList.findById({_id:req.params.taskID},(err,task)=>{
        if(task){
            task.remove()
            res.status(200).send("task deleted")
        }else{
            res.status(404).send("task doesnt exist")
        }
    })
}