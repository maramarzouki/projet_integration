const Blog=require('../models/Blog')

exports.addBlog = (req,res) =>{
    try{
        const newBlog=req.body;
        const addedBlog=new Blog(newBlog);
        addedBlog.save();
        res.status(200).send(addedBlog);
    }catch(err){
        console.log(err);
    }
}

exports.getBlogs = (req,res) => {
    Blog.find({},async (err,blogs)=>{
        if(blogs){
            await res.status(200).send(blogs)
        }else{
            await res.status(404).send("no blogs found")
        }
    })
}

exports.updateBlog=(req,res)=>{
    const updates=req.body;
    Blog.updateOne({_id:req.params.blogID},{$set:updates})
    .then(result=>{
        res.status(200).send(result);
    }).catch(err=>{
        res.status(400).send(result)
    })
}

exports.deleteBlog=(req,res)=>{
    Blog.findById({_id:req.params.blogID})
    .then(blog=>{
        blog.remove()
        res.status(200).send('blog removed')
    }).catch(err=>{
        res.status(400).send(err)
    })
}


