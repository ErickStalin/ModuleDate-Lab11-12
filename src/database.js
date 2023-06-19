const mongoose = require('mongoose')

//CONEXION DE LA BASE DE DATOS ATLAS
const {DBUSER,DBPASSWORD,DBNAME} = process.env
const MONGODB_URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.54gpahb.mongodb.net/${DBNAME}`

connection = async()=>{
    try {
         await mongoose.connect(MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("LA BASE MONGODB ATLAS ESTA CONECTADA!")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection