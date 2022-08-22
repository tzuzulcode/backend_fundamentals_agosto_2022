const express = require("express")

const app = express()

// index, root, home
app.get("/",function(peticion,respuesta){
    console.log(peticion)

    return respuesta.send("<h1>Hola mundo</h1>")
})

app.post("/saludar",function(peticion,respuesta){
    console.log(peticion.body)

    return respuesta.status(201).send("<h1>Hola</h1>")
})

// app.put()

// app.delete()

app.listen(4000,function(){
    console.log("Listening on: http://localhost:4000")
}) // callbacks


//Actividad: Investigar acerca de: form-data, x-www-form-urlencoded, application/json