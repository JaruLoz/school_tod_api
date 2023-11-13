const express = require ("express");
const sequelize = require ("./database/dbsequelize");
const cors = require ("cors");
const server = express(); 
const PORT = process.env.PORT || 3000;
const UserRouter = require ("./src/routes/userRoutes");
const TareasRouter = require("./src/routes/tareasRoutes");
const PupilRouter = require("./src/routes/pupilRoutes");

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use("./routes/userRoutes", UserRouter)
server.use("./routes/tareasRoutes", TareasRouter)
server.use("./routes/pupilRoutes", PupilRouter) 

server.use(cors())

server.get('/',(req,res)=>{
    res.send("Hi");
});

sequelize.sync({force: false}).then(()=>{
    console.log("Nos conectamos a la base de datos");
}).then(async(data)=>{})
.catch(error =>{
    console.log('Se ha producido un error',error);
});
    

    server.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});