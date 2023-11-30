const express = require("express");
const tareasController = require("../controllers/tareasController");
const router = express.Router();

router.get('/', tareasController.getAllTareas);
router.get('/:tareaId', tareasController.getOneTarea);
router.post('/', tareasController.createNewTarea);
router.patch('/:tareaId', tareasController.updateOneTarea);
router.delete('/:tareaId', tareasController.deleteOneTarea);

module.exports = {router};