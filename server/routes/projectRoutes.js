const projectControllers = require("../controllers/projectControllers")
const Router=require('express')

const router=Router();

router.post('/addProject',projectControllers.addProject);
//get one project according to a specific user
router.get('/getOneProject/:projectID/:userID',projectControllers.getProject);
//get all projects 
router.get('/getAllProjects/:id',projectControllers.getProjects)
//
router.patch('/updateProject/:projectID',projectControllers.updateProject);
router.delete('/deleteProject/:projectID',projectControllers.deleteProject);


module.exports=router


