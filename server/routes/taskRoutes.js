const Router = require('express')
const taskController = require('../controllers/taskControllers')

const router = Router();


router.post('/addTask', taskController.addTask);
router.get('/getOneTask/:taskID/:projectID', taskController.getTaskDetails);
router.get('/getTasks/:projectID', taskController.getTasks);
router.put('/updateTask/:taskID', taskController.updateTask);
router.delete('/deleteTask/:taskID', taskController.deleteTask);

module.exports = router;