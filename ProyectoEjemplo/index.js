const express = require("express")

const app = express()

// index, root, home
app.get("/",function(peticion,respuesta){
    console.log(peticion)

    return respuesta.send("<h1>Hola mundo</h1>")
})

app.listen(4000,function(){
    console.log("Listening on: http://localhost:4000")
}) // callbacks