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
    }) // no-inmediato

    return conn
}

const query = async (sql,values)=>{
    try {
        const conn = await connection()
        const result = await conn.query(sql,values)

        // const result = await (await connection()).query(sql,values)
        
        return {
            success:true,
            data:result[0]
        }
    } catch (error) {
        return {
            success:false,
            message:error.message
        }
    }
}


module.exports={
    query
}