
const mongoose  = require('mongoose')
const url_BD = "mongodb://localhost:27017/AUTOS"

mongoose.connect(url_BD)

.then(() => {
    console.log('Jala la conexión')})
.catch((err) => {
    console.log('no jalo')
})

const Autos= new mongoose.Schema({
    nombre:{
        type:String
    },
    precio:{
        type:Number
    },
    marca:{
        type:String
    },
    ejemplares_existentes:{
        type:Number
    },
    color_producto:{

    },
    cantidad_llanatas:{
        type:String
    },
    calidad:{
        type:String
    }

    
})
const modelo_autos= new mongoose.model("Tabla de autos", Autos)

modelo_autos.create({
    nombre:"Chevy2",
    precio: 20000,
    marca:"Chevrolet",
    ejemplares_existentes:1085,
    color_producto:"Verde",
    cantidad_llanatas:"4",
    calidad:"Regular"
})
