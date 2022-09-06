const express = require("express")
// Destructuring -> Desestructuración
const { port } = require("./config")
// const config = require("./config")

const flights = require("./routes/flights")
const auth = require("./routes/auth")

const app = express()


// Middleware
// Middleware para x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
})) // use: usar middleware

// Middleware json
app.use(express.json())

// Middleware para archivos estáticos:
// app.use('/static',express.static(__dirname+'/static')) //En nuestro proyecto no es necesario realizarlo
app.use('/static',express.static('static'))

// Routes
app.use(flights)
app.use(auth)

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