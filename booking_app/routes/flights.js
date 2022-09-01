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
router.get("/api/flights", Flights.getFlights)
router.get("/admin/flights/create", Flights.getCreateFlightForm)
router.post("/api/flights", Flights.createFlight)

router.get("/search", Flights.search)

module.exports = router