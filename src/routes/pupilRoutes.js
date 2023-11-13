const express= require ('express');
const router= express.Router();
const pupilController = require('../controllers/pupilController');

const uploadMulter = require('../config/multer.config')

router.get('/', userController.getUser)
router.get('/getUser/:id', userController.getUserById )
router.post('/createUser',[uploadMulter.single("image")], userController.createUser)
router.put('/editUser/:id', userController.editUser)

module.exports = router;