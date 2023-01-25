const Task = require('../models/Task')


exports.addTask = async (req,res) => {
    const task = req.body;
    Task.findOne({title: req.body.title}, (err, result) =>{
            if(result){
                res.status(400).send("Title already in use!")
            }
            else{
                const newTask = new Task(task)
                newTask.save();
                res.status(200).send("New task is added!")
            }})
}

exports.getTaskDetails = (req,res) =>{
    Task.findById({_id:req.params.taskID,project:req.params.projectID}).then(task=>{
        if(task){
            res.status(200).send(task)
        }else{
            res.status(404).send("task not found")
        }
    }).catch(err=>{
        res.status(400).send(err)
    })
}

exports.getTasks =(req,res) =>{
    Task.find({project:req.params.projectID},(err,taskList)=>{
        if(taskList){
            res.status(200).send(taskList)
        }else{
            res.status(404).send("no project found")
        }
    })
}

exports.updateTask = (req,res) =>{
    const updates=req.body;
    Task.updateOne({_id:req.params.taskID},{$set:updates})
    .then(result=>{
        res.status(200).send(result);
    }).catch(err=>{
        res.status(400).send(result);
    })
}

exports.deleteTask = (req,res)=>{
    Task.findById({_id:req.params.taskID},(err,task)=>{
        if(task){
            task.remove()
            res.status(200).send("task deleted")
        }else{
            res.status(404).send("task doesnt exist")
        }
    })
}