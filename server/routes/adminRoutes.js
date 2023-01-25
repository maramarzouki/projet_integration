const adminControllers=require('../controllers/adminControllers')
const Router=require('express')

const router = Router()

router.post('/addAdmin',adminControllers.addAccount)
router.post('/signAdminIn',adminControllers.signAdminIn)
router.put('/updateAdmin/:adminID',adminControllers.updateAdmin)
router.get('/getAdminDetails/:id',adminControllers.getAdminDetails)
router.get('/getAdmins',adminControllers.getAdmins)
router.delete('/deleteAdmin/:id',adminControllers.deleteAdmin)
router.get('logout',adminControllers.logout)

module.exports = router