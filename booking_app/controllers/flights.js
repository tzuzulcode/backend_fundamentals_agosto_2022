const getView = require("../helpers/getView")
const Flight = require("../models/Flight")

async function getHome(_,res){
    return getView(res,"index.html")
}

async function getFlights(_,res){
    const result = await Flight.getAll()

    return res.status(result.success?200:400).json(result)
}

async function getCreateFlightForm(_,res){
    return getView(res,"admin/flights/create.html")
}

async function createFlight(req,res){
    const body = req.body
    const result = await Flight.create(body)

    return res.status(result.success?200:400).json(result)
}


function search(_,res){
    return getView(res,"search.html")
}

module.exports = {
    getHome,
    getFlights,
    createFlight,
    getCreateFlightForm,
    search
}

// class Flights{
//     static getHome(req,res){
//         return res.sendFile(path.join(__dirname,"..","views","index.html"))
//     }

//     static search(req,res){
//         return res.send("Search")
//     }
// }

// module.exports = Flights