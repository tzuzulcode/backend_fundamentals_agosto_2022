const { query } = require("../libs/db")

class Flight{
    getAll(){
        // const flights = await query("SELECT * FROM flight") // Espera a completar, pero en pause
        // // Pending:

        // return flights

        return query("SELECT * FROM flight")
    }
}

module.exports = Flight