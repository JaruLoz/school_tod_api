const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database/dbsequelize')

const Tareas = sequelize.define('tareas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique:true,
        autoIncrement: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
    },
    date:{
        type: DataTypes.DATE,
    }, 
});

module.exports={Tareas};
  