const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

var validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = mongoose.Schema({
    lastName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    email:{
        type:String,
        required:true,
        validate:[validateEmail,"Email invalid"],
        unique:true
    },
    birthDate:{
        type:Date,
        required:true
    },
    savedBlogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blogs'
    }]
})

userSchema.statics.signup=async function(firstName,lastName,email,password,birthDate){
    const exists=await this.findOne({email})
    if(exists){
        throw Error('Email already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = this.create({firstName,lastName,email,password:hash,birthDate});
    return user;
}

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error("All fields are required")
    }

    const user = await this.findOne({email})
    if(!user){
        throw Error("User not found!")
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error("Password is not correct!")
    }

    return user;
}

const userModel=mongoose.model('users',userSchema)
module.exports=userModel;