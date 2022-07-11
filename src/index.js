const express = require('express')
const cors = require('cors')
require("dotenv").config()

const app = express()
app.use(cors())
//app.use(morgan('tiny'))

const  nombre = process.env.NOMBRE || "anonimo"
app.get('/', ( req, res)=>{
    res.status(200).json({
        err: false,
        mensaje: "estas en la api de " + nombre
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("estas escuchando en el puerto ", process.env.PORT, ' del ordenador de', nombre)    
})