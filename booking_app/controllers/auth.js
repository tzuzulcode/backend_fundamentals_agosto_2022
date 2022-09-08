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

    // Login: API -> json
    static async login(req,res){
        const data = req.body
        const user = await User.getUserByEmail(data.email)
        if (!user.success) {
            // Redirección
            // return getView(res,"auth/signup.html")
            return res.status(400).json(user)
        }
        const validation = User.validateCredentials(data.password,user.data)
        
        return res.status(validation.success?200:400).json(validation)
    }

    // Reto: Investigar acerca de las cookies, local storage y session storage
    
}

module.exports = Auth