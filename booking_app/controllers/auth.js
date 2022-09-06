const getView = require("../helpers/getView");

class Auth{
    static async login(_,res){
        return getView(res,"auth/login.html")
    }
    static async signup(_,res){
        return getView(res,"auth/signup.html")
    }
}

module.exports = Auth