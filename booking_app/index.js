const express = require("express")
// Destructuring -> Desestructuración
const { port } = require("./config")
// const config = require("./config")

const flights = require("./routes/flights")

const app = express()


// Middleware
// Middleware para x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
})) // use: usar middleware

// Middleware json
app.use(express.json())


// Routes
app.use(flights)

// index, root, home
app.get("/",function(peticion,respuesta){

    return respuesta.send("<h1>Hola mundo</h1>")
})

// Hard coded
app.listen(port,function(){
    // console.log("Listening on: http://localhost:"+port)
    console.log(`Listening on: http://localhost:${port}`)
})


// Reto: Investigar qué son y cómo se gestionan los archivos