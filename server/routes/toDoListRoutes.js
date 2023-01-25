const ToDoListControllers=require('../controllers/toDoListControllers')
const Router=require('express')
const router=Router()

router.post('/addToDoListTask',ToDoListControllers.addToDoListTask)
router.get('/getToDoListTasks/:userID',ToDoListControllers.getToDoListTasks)
router.delete('/deleteToDoListTask/:taskID',ToDoListControllers.deleteToDoTask)

module.exports=router; 