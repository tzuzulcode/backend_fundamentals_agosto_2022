const express = require("express")
// const {
//     getHome,
//     search
// } = require("../controllers/flights")
const Flights = require("../controllers/flights")


// const Flights = require("../controllers/flights")
// const flightsController = new Flights()

const router = express.Router()

// Arrow functions -> funciones flecha
router.get("/flights", Flights.getHome)

router.get("/search", Flights.search)

module.exports = router