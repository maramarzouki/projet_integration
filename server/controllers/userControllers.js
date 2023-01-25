const UserModel=require('../models/User')
const jwt=require('jsonwebtoken')
const prvKey='privateKeyjbnjeibfbfozkvnfjve'

const create_token = (_id) =>{
    return jwt.sign({_id}, prvKey)
}

exports.createAccount = async(req,res)=>{
    const {firstName,lastName,email,password,birthDate}=req.body
    try{
        const newUser=await UserModel.signup(firstName,lastName,email,password,birthDate);

        const token = create_token(newUser._id)
        
        res.status(200).send({email, token})
    }catch(err){
        res.status(400).send({err:err.message})
    }
}


exports.signIn = async (req,res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.login(email,password);
        const token = create_token(user._id);
        res.status(200).send({email, token})
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

exports.getUser = async (req,res)=>{
    UserModel.findById({_id:req.params.id}).then(async user=>{
        if(user){
            await res.status(200).send(user)
        }else{
            res.status(404).send('user not found')
            console.log(req.params.id);
        }
    }).populate('projects')
}

exports.getUsers = (req,res)=>{
    UserModel.find({},async (err,usersList)=>{
        if(usersList){
            await res.status(200).send({userList:usersList,nbOfUsers:usersList.length})
        }else{
            res.status(404).send('no user found')
        }
    })
}

exports.updateUser=(req,res)=>{
    const updates=req.body;
    UserModel.updateOne({_id:req.params.userID},{$set:updates})
    .then(result=>{
        res.status(200).send(result);
    }).catch(err=>{
        res.status(400).send(err)
    })
}

exports.deleteUser=(req,res)=>{
    UserModel.findById({_id:req.params.id},(err,user)=>{
        if(user){
            user.remove();
            res.status(200).send('user deleted')
        }else{
            res.status(404).send('user not found')
        }
    })
}

exports.logout=(req,res)=>{
    req.logout();
    res.redirect('/');
}
 
// exports.saveBlog=(req,res)=>{
//     UserModel.updateOne({_id:req.params.userID})
//     .then(user=>{
//         user.savedBlogs.push(req.params.blogID)
//         user.save()
//         res.status(200).send(user);
//     }).catch(err=>{
//         res.send(err)
//     })
// }

exports.saveBlog=(req,res)=>{
    UserModel.updateOne({_id:req.params.userID},{$push:{savedBlogs:req.params.blogID}}).
    then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(400).send(err)
    })
}

exports.getSavedBlogs=(req,res)=>{
    UserModel.find({_id:req.params.userID})
    .select('savedBlogs -_id')
    .populate('savedBlogs')
    .then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log(err);;
    })
}