const express = require("express")
const path = require("path") // Gestionar rutas de archivos

console.log(__dirname) // Carpeta o ubicaición actual de este archivo

const router = express.Router()

// Arrow functions -> funciones flecha
router.get("/flights", (req,res)=>{
    return res.sendFile(path.join(__dirname,"..","views","index.html"))
})


module.exports = router