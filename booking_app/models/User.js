const { query } = require("../libs/db");
const bcrypt = require("bcrypt")

class User{

    constructor(data){
        const {name,email,password,password_confirmation} = data
        this.name = name
        this.email = email 
        this.password = password
        this.passwordConfirmation = password_confirmation
    }

    validate(){
        if(!this.name || !this.email || !this.password || !this.passwordConfirmation){
            return {
                success:false,
                message:"Debe rellenar todos los campos"
            }
        }

        if(this.password!==this.passwordConfirmation){
            return {
                success:false,
                message:"Las contraseñas no coinciden"
            }
        }

        return {
            success:true,
            data:{
                name:this.name,
                email:this.email,
                password:bcrypt.hashSync(this.password,10) // Hashing
            }
        }
    }

    validateLogin(password){
        if(!this.email || !this.password){
            return {
                success:false,
                message:"Debe rellenar todos los campos"
            }
        }

        const passwordUser = bcrypt.compare(password, this.password);

        if(this.password!==passwordUser){
            return {
                success:false,
                message:"Las contraseñas no coinciden"
            }
        }

        return {
            success:true,
            data:{
                email:this.email,
            }
        }
    }

    static async create(data){
        const result = await query("INSERT INTO users(??) VALUES(?)",[
            Object.keys(data),
            Object.values(data)
        ])

        if(result.success){
            // Retiramos contraseña
            delete data.password
            return {
                success:true,
                data:data
            }
        }

        return result
    }

    static async searchUser(data){
        const result = await query("SELECT * FROM users WHERE email = ? AND password = ?",[
            Object.keys(data),
            Object.values(data)
        ])

        if(result.success){
            // Retiramos contraseña
            delete data.password
            return {
                success:true,
                data:data
            }
        }

        return result
    }
}

module.exports = User