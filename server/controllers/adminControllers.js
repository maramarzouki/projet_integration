const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
const prv_key="zertythghbhfgjkdfb"

const create_token = (_id) =>{
    return jwt.sign({_id}, prv_key);
}

// exports.addAccount = (req,res) =>{
//     const admin=req.body
//     Admin.findOne({email:req.body.email},(err,result)=>{
//         if(!result){
//             const newAdmin=Admin(admin)
//             newAdmin.save();
//             res.status(200).send("admin added")
//         }else{
//             res.status(400).send("admin already exists")
//         }
//     })
// }

exports.addAccount = async (req, res)=>{
    const {firstName,lastName,email,role,password} = req.body
    try{
        const new_admin=await Admin.signup(firstName,lastName,email,role,password);

        const token = create_token(new_admin._id)
        
        res.status(200).send({email, token})
    }catch(err){
        res.status(400).send({err:err.message})
    }
}

exports.signAdminIn = async (req,res) =>{
    const { email, password } = req.body;
    try {
        const admin = await Admin.login(email,password);
        const token = create_token(admin._id); 
        res.status(200).send({email, token})
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

exports.getAdminDetails= (req,res) =>{
    Admin.findById({_id:req.params.id}).then(async admin=>{
        if(admin){
            await res.status(200).send(admin)
        }else{
            await res.status(404).send("admin not found")
        }
    }).catch(err=>{
        res.status(400).send(err)
    })
}

exports.getAdmins = (req,res) =>{
    Admin.find({},async (err,admins)=>{
        if(admins){
            await res.status(200).send(admins)
        }else{
            await res.status(404).send("no admin found")
        }
    })
}

exports.updateAdmin=(req,res)=>{
    const updates=req.body;
    Admin.updateOne({_id:req.params.adminID},{$set:updates})
    .then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(400).send(err)
    })
}


exports.deleteAdmin=(req,res)=>{
    Admin.findById({_id:req.params.id},(err,admin)=>{
        if(admin){
            admin.remove();
            res.status(200).send('admin deleted')
        }else{
            res.status(404).send('admin not found')
        }
    })
}

exports.logout=(req,res)=>{
    req.logout();
    res.redirect('/');
}