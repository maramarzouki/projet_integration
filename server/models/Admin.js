const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

var validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const adminSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validateEmail,"Email invalid"],
        unique:true
    },
    role:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    }
})

adminSchema.statics.signup = async function(firstName,lastName,email,role,password){
    const exists=await this.findOne({email})
    if(exists){
        throw Error('Email already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const admin = this.create({firstName,lastName,email,role,password:hash});
    return admin;
}

adminSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error("All fields are required")
    }

    const admin = await this.findOne({email})
    if(!admin){
        throw Error("admin not found!")
    }

    const match = await bcrypt.compare(password, admin.password);
    if(!match){
        throw Error("Password is not correct!")
    }

    return admin;
}
const adminModel = mongoose.model('admins',adminSchema);
module.exports=adminModel;