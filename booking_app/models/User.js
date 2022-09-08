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

    // password: La contraseña del formulario
    // user: La consulta del usuario
    static validateCredentials(password,user){

        const passwordUser = bcrypt.compareSync(password, user.password);

        if(!passwordUser){
            return {
                success:false,
                message:"Las credenciales son incorrectas"
            }
        }

        delete user.password
        return {
            success:true,
            message:"Las credenciales coinciden",
            data:user
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

    static async getUserByEmail(email){
        const result = await query("SELECT * FROM users WHERE email = ?",[email])

        if(result.success && result.data[0]){
            return {
                success:true,
                data:result.data[0]
            }
        }

        return {
            success:false,
            message:"Correo no registrado"
        }
    }
}

module.exports = User