const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../src/database/dbsequelize')

const Pupil = sequelize.define('Pupil',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING
    },
    age:{
        type: DataTypes.INTEGER
    },
    email:{
        type:DataTypes.TEXT,
    allowNull: false,
        validate:{
            isEmail:{
                msg: 'please enter a valid email'
            }
        }
    },
    password:{
        type: DataTypes.TEXT
    },
    description:{
        type: DataTypes.TEXT
    },
    Image:{
        type: DataTypes.TEXT
    },
    role:{
        type:DataTypes.INTEGER
    }
});

model.exports={Pupil};
