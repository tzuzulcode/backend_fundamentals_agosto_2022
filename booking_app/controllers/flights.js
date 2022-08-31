const getView = require("../helpers/getView")
const Flight = require("../models/Flight")

async function getHome(_,res){
    const flight = new Flight()
    const result = await flight.getAll()

    console.log(result)

    return getView(res,"index.html")
}

function search(_,res){
    return getView(res,"search.html")
}

module.exports = {
    getHome,
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