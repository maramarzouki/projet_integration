const { Router } = require('express')
const blogControllers=require('../controllers/blogControllers')
const router=Router();

router.post('/addBlog',blogControllers.addBlog);
router.get('/getAllBlogs',blogControllers.getBlogs);
router.patch('/updateBlog/:blogID',blogControllers.updateBlog);
router.delete('/deleteBlog/:blogID',blogControllers.deleteBlog)

module.exports=router