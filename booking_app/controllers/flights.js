const getView = require("../helpers/getView")

function getHome(_,res){
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