const tareasService = require("../services/tareasServices");
const {User} = require('../services/userServices.js')

const getAllTareas = (req, res) => { 
    const allTareas = tareasService.getAllTareas();
    res.send("Get todas las tareas");
  };
  
  const getOneTarea = (req, res) => {
    const oneTarea = tareasService.getOneTarea();
    res.send("Get una tarea existente");
  };
  
  const createNewTarea = (req, res) => {
    const createtareas = tareasService.createNewTarea();
    res.send("Create una nueva tarea");
  };
  
  const updateOneTarea = (req, res) => {
    const updateTarea = tareasService.updateOneTarea();
    res.send("Update una tarea existente");
  };
  
  const deleteOneTarea = (req, res) => {
    tareasService.deleteOneTarea();
    res.send("Delete una tarea existente");
  };
  
  module.exports = {
    getAllTareas,
    getOneTarea,
    createNewTarea,
    updateOneTarea,
    deleteOneTarea,
  };