const getView = require("../helpers/getView");
const User = require("../models/User")

class Auth{

    static getLoginView(_,res){
        return getView(res,"auth/login.html")
    }
    static getSignUpView(_,res){
        return getView(res,"auth/signup.html")
    }

    static async login(_,res){
        return getView(res,"auth/login.html")
    }
    static async signup(req,res){
        const data = req.body
        const user = new User(data)
        const validation = user.validate()
        if(validation.success){
            const result = await User.create(validation.data)
            return res.status(result.success?200:400).json(result)
        }

        return res.status(400).json(validation)

    }

    // Reto: Implementar login
    
}

module.exports = Auth