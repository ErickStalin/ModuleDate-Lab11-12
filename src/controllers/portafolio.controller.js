const Portfolio = require('../models/Portfolio')

const renderAllPortafolios = async(req,res)=>{
    //A PARTIR DEL MODELO USAR EL METODO FIND Y LUEGO EL METODO LEAN 
    const portfolios = await Portfolio.find().lean()
    res.render("portafolio/allPortfolios",{portfolios})
}

const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}
//PRESENTAR EL FORMULARIO
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}
//CAPTURAR LOS DATOS DEL PORTAFOLIO PARA
//ALMACENAR EN LA BD
const createNewPortafolio = async (req,res)=>{
    //DESESTRUCTURAR
    const {title, category,description} = req.body
    //Capturar los datos del formulario
    const newPortfolio = new Portfolio({title,category,description})
    //Almacena datos del formulario  
    await newPortfolio.save()
    res.redirect('/portafolios')
}
const renderEditPortafolioForm =async(req,res)=>{
    //Llamar al metodo findById
    const portfolio = await Portfolio.findById(req.params.id).lean()
    //Con la variable portafolio pintar en la visa del formulario
    res.render('portafolio/editPortfolio',{portfolio})
}
const updatePortafolio = async(req,res)=>{
    //Capturar los datos del formulario
    const {title,category,description}= req.body
    //A partir del modelo llamar al metodo findByIdAndUpdate
    //Pasando a la funcion el ID del portafolio y los datos 
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    res.redirect('/portafolios')
}
const deletePortafolio = async(req,res)=>{
    //A partir del modelo usar el metodo findByIdAndDelete
    await Portfolio.findByIdAndDelete(req.params.id)
    //Hacer el redirect
    res.redirect('/portafolios')
}

module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}