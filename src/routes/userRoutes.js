const express= require('express');
const router= express.Router();
const userController = require('../controllers/userController');

const uploadMulter = require('../config/multer/multer.config')

router.get('/', userController.getUser)
router.get('/getUser/:id', userController.getUserById )
router.post('/createUser',[uploadMulter.single("image")], userController.createUser)
router.put('/editUser/:id', userController.editUser)
router.delete('/deleteUser/:id/:email', userController.deleteUser)


module.exports = router;