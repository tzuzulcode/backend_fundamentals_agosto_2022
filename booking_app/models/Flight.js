const formatDateTime = require("../helpers/formatDateTime")
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
        // const {origen,destino,hora_salida,hora_llegada,precio} = data
        // return query(`
        //     INSERT INTO flights(origen,destino,hora_salida,hora_llegada,precio) 
        //     VALUES("${origen}","${destino}","${formatDateTime(hora_salida)}","${formatDateTime(hora_llegada)}",${precio})
        // `)

        // return query(`
        //     INSERT INTO flights(origen,destino,hora_salida,hora_llegada,precio)
        //     VALUES(?)
        // `,[[origen,destino,formatDateTime(hora_salida),formatDateTime(hora_llegada),precio]])

        // Diferencia entre: ? y ??

        data.hora_salida = formatDateTime(data.hora_salida)
        data.hora_llegada = formatDateTime(data.hora_llegada)

        return query(`
            INSERT INTO flights(??)
            VALUES(?)
        `,[
            Object.keys(data),
            Object.values(data)
        ])
    }
}

module.exports = Flight