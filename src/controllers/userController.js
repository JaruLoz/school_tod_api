const {User} = require('../services/userServices.js')
const {Tareas} = require('../services/tareasServices.js')
const {Pupil} = require('../services/pupilServices')

const getUser = async(req,res)=>{}

const getUserById= async (req,res)=>{}

const editUser = async(req,res)=>{}

const createUser = async (req,res)=>{
    try{
        let rol = 0;
        let urlImage;
        if (req.file == undefined) {
          urlImage = null;
        } else {
          const url = req.protocol + "://" + req.get("host");
          urlImage = url + "/uploads/" + req.file.filename;
          rol = 1;
        }

    const modelData ={
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    description: req.body.description,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
    Image: urlImage,
    role: rol
    }

const response= await User.create(modelData).
    then((data)=>{
        const res={ error: false, data:data, message: 'Usuario Creado'}
    return res
  }).catch((e)=>{
        const res= {error:true, message: e}
        return res

  })
    res.json(response)
    }catch(e){
    console.log(e)  
    }
};

const deleteUser = async(req,res)=>{}

module.exports={
    createUser,
    getUser,
    getUserById,
    editUser,
    deleteUser
}
