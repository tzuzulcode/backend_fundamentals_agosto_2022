const { query } = require("../libs/db")

class Flight{
    // Static -> No es necesario instanciar la clase para utilizarse
    static getAll(){
        // const flights = await query("SELECT * FROM flight") // Espera a completar, pero en pause
        // // Pending:

        // return flights

        return query("SELECT * FROM flights")
    }

    static create(data){
        // Crear una query
        // INSERT INTO
    }
}

module.exports = Flight