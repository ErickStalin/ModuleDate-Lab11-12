const express = require('express')
const path = require('path');
const { engine }  = require('express-handlebars')
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');

//Inicializacion
const app = express()
require('./config/passport')

//Configuraciones
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')

//Configuraciones
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
//INICIALIZAR PASSPORT
app.use(passport.initialize())
//INICIALIZAR SESSION
app.use(passport.session())

//Variables globales

//Rutas
app.use(require('./routers/portafolio.routes'))
app.use(require('./routers/user.routes'))

// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))

module.exports = app