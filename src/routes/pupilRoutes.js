const express= require ("express");
const router= express.Router();
const pupilController = require("../controllers/pupilsController");

const uploadMulter = require("../config/multer.config")

router.get('/', pupilController.getPupil)
router.get('/getPupil/:id', pupilController.getPupilById )
router.post('/createPupil',[uploadMulter.single("image")], pupilController.createPupil)
router.put('/editPupil/:id', pupilController.editPupil)

module.exports = {router};