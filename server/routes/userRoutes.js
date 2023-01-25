const userControllers=require('../controllers/userControllers')
const Router=require('express')

const router = Router()

router.post('/signUp',userControllers.createAccount)
router.post('/signIn',userControllers.signIn)
router.patch('/updateUser/:userID',userControllers.updateUser)
router.get('/getOneUser/:id',userControllers.getUser)
router.get('/getAllUsers',userControllers.getUsers)
router.delete('/deleteUser/:id',userControllers.deleteUser)
router.get('/logout',userControllers.logout)


//save a blog
router.patch('/saveBlog/:userID/:blogID',userControllers.saveBlog)

//get saved blogs
router.get('/getSavedBlogs/:userID',userControllers.getSavedBlogs)

module.exports = router