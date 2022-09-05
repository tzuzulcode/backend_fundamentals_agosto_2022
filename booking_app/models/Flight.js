const { query } = require('../libs/db')

class Flight {
  // Static -> No es necesario instanciar la clase para utilizarse
  static getAll() {
    // const flights = await query("SELECT * FROM flight") // Espera a completar, pero en pause
    // // Pending:

    // return flights

    return query('SELECT * FROM flights')
  }

  static async create(data) {
    try {
      const result = await query('INSERT INTO flights(??) VALUES(?)', [
        Object.keys(data),
        Object.values(data),
      ])

      return {
        flight: data,
        success: true,
        message: 'Vuelo registrado correctamente',
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

module.exports = Flight
