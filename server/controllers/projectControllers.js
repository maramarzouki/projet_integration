const Project = require('../models/Project')


exports.addProject = (req,res) =>{
    const newP=req.body
    Project.findOne({title:req.body.title},(err,result)=>{
        if(!result){
            const newProject=new Project(newP);
            newProject.save();
            res.status(200).send("Project Added!");
        }
        else{
            res.status(400).send("Title already in use! Try using a new title.")
        }
    })
}


exports.getProject = async (req,res) =>{
    Project.find({_id:req.params.projectID, user:req.params.userID})
    .populate('user')
    .then(async project=>{
        if(project){
            await res.status(200).send(project)
        }else{
            await res.status(404).send("Project not found")
        }
    }).catch(err=>{
        res.status(400).send(err)
    })
}

exports.getProjects =(req,res) =>{
    Project.find({user:req.params.id})
    .populate('user')
    .then(async (projectsList)=>{
        if(projectsList){
            await res.status(200).send(projectsList)
        }else{
            await res.status(404).send("no project found")
        }
    })
}

exports.updateProject = (req,res) =>{
    const updates=req.body;
    Project.updateOne({_id:req.params.projectID},{$set:updates})
    .then(async result=>{
        await res.send(result)
    }).catch(async err=>{
        await res.send(err);
    })
}

exports.deleteProject = (req,res)=>{
    Project.findById({_id:req.params.projectID},(err,project)=>{
        if(project){
            project.remove()
            res.status(200).send("project deleted")
        }else{
            res.status(404).send("project doesnt exist")
        }
    })
}