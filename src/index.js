require('dotenv').config()
//RUTAS
const app = require('./server.js')
const connection = require('./database.js')
connection()

//LEVANTAR SERVIDOR
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})