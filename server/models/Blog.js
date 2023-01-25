const mongoose = require('mongoose')

//blog = post
const blogSchema = new mongoose.Schema({
    subj:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    likes:{
        type:Number
    }
})

const blogModel=mongoose.model('blogs',blogSchema)
module.exports=blogModel;
