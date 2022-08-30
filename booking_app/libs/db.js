const mysql = require("mysql2/promise")
const { dbHost, dbPort, dbUser, dbPassword, dbName } = require("../config")

// const connection = mysql.createConnection({
//     host:,
//     port:,
//     user:,
//     password:,
//     database:,
// })

const connection = async ()=>{
    const conn = await mysql.createConnection({
        host:dbHost,
        port:dbPort,
        user:dbUser,
        password:dbPassword,
        database:dbName,
    })

    return conn
}

const query = async (sql,values)=>{
    const result = await (await connection()).query(sql,values)

    console.log(result)

    return result
}


module.exports={
    query
}