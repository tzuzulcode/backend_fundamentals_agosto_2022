const express = require("express")
const multer = require("multer")

const app = express()


// Middleware

// Middleware para x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
})) // use: usar middleware

// Middleware json
app.use(express.json())

// Middleware form-data
app.use(multer().none())

// index, root, home
app.get("/",function(peticion,respuesta){
    console.log(peticion)

    return respuesta.send("<h1>Hola mundo</h1>")
})

app.post("/saludar",function(peticion,respuesta){
    const nombre = peticion.body.nombre

    return respuesta.status(201).send(`<h1>Hola, ${nombre}</h1>`)
})

// app.put()

// app.delete()

app.listen(4000,function(){
    console.log("Listening on: http://localhost:4000")
}) // callbacks

// Actividad: Arquitectura de software y MVC